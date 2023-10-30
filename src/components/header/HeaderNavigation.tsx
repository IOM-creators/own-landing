import { useTranslation } from "react-i18next";
import { IHeaderNavigation, INavigation } from "../../helpers/commonInterfaces";


const HeaderNavigation: React.FC<IHeaderNavigation> = ({ classname = '', navigation }) => {
  const { t } = useTranslation();
  const scrollTo = (e: any) => {
    e.preventDefault();
    const id = e.target.getAttribute("data-scroll-to");
    const sectionScrollTo = document.getElementById(`${id}`);
    sectionScrollTo && sectionScrollTo.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <nav className={classname}>
      <ul className="flex h-full items-center">
        {navigation &&
          navigation.map((navItem: INavigation, index: number) => {
            return (
              <li key={navItem.textId} className={`text-white ${index === 1 ? 'px-2 sm:px-10' : ''}`}>
                <a
                  href="/"
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