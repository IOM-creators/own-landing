import { IHeaderNavigation, INavigation } from "../../helpers/commonInterfaces";
import { useI18n } from "../../helpers/i18nContext";

const HeaderNavigation: React.FC<IHeaderNavigation> = ({
  classname = "",
  navigation,
  setOpenNavChange = () => false,
}) => {
  const { t, detectKey } = useI18n();
  const scrollTo = (e: any) => {
    e.preventDefault();
    setOpenNavChange(false);
    document.body.classList.remove("overflow-hidden");
    const id = e.target.getAttribute("data-scroll-to");
    const url = `#${id}`;
    window.history.pushState(null, "", url);
    const sectionScrollTo = document.getElementById(`${id}`);
    const styles = sectionScrollTo && window.getComputedStyle(sectionScrollTo);
    const marginTop = parseInt(styles ? styles.marginTop : "0", 10);
    sectionScrollTo &&
      window.scrollTo({
        top: sectionScrollTo.offsetTop - marginTop + 10,
        behavior: "smooth",
      });
  };
  return (
    <nav className={classname}>
      <ul className="flex h-full flex-col flex-wrap items-end lg:items-center lg:flex-row  lg:justify-center">
        {navigation &&
          navigation.map((navItem: INavigation, index: number) => {
            return (
              <li
                key={detectKey + navItem.textId}
                className={`text-white my-3 md:my-5 ${
                  index === navigation.length - 1 ? "pr-0" : "pr-0 lg:pr-5 "
                } lg:my-0 lg:mb-0`}
              >
                <a
                  href="/"
                  className="rounded-3xl px-3 py-2 text-lg lg:text-base"
                  data-scroll-to={navItem.scrollTo}
                  onClick={(e) => scrollTo(e)}
                >
                  {t(`header.${navItem.textId}`)}
                </a>
              </li>
            );
          })}
      </ul>
    </nav>
  );
};

export default HeaderNavigation;
