import { useTranslation } from "react-i18next";
import { IHeaderNavigation, INavigation } from "../../helpers/commonInterfaces";


const HeaderNavigation: React.FC<IHeaderNavigation> = ({ classname = '', navigation }) => {
  const { t } = useTranslation();
  const scrollTo = (e: any) => {
    e.preventDefault();
    const id = e.target.getAttribute("data-scroll-to");
    const url = `#${id}`;
    window.history.pushState(null, '', url);
    const sectionScrollTo = document.getElementById(`${id}`);
    sectionScrollTo && sectionScrollTo.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className={classname}>
      <ul className="flex h-full flex-col flex-wrap items-end lg:items-center lg:flex-row  lg:justify-center">
        {navigation &&
          navigation.map((navItem: INavigation, index: number) => {
            return (
              <li key={navItem.textId} className={`text-white my-5 ${(index === (navigation.length - 1)) ? 'pr-0' : 'pr-0 lg:pr-10 '} lg:my-0 lg:mb-0`}>
                <a
                  href="/"
                  className="rounded-3xl px-1 py-2 text-lg lg:text-base"
                  data-scroll-to={navItem.scrollTo}
                  onClick={(e) => scrollTo(e)}
                >
                  {t(`${navItem.textId}`)}
                </a>
              </li>
            );
          })}
      </ul>
    </nav>
  );
};


export default HeaderNavigation