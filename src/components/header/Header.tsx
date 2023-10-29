import Icon from "../icon";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useLanguageFromURL, useScrollEvent } from "../../helpers/reactHooks";

interface ILanguage {
  shortName: string;
  name: string;
}

const languages: ILanguage[] = [
  {
    shortName: "de",
    name: "German",
  },
  {
    shortName: "en",
    name: "English",
  },
];
interface IHeaderNavigation {
  navigation: INavigation[];
}

interface INavigation {
  scrollTo: string;
  textId: string;
}

const headernavigation: INavigation[] = [
  {
    scrollTo: "section1",
    textId: "Section1",
  },
  {
    scrollTo: "section2",
    textId: "Section2",
  },
  {
    scrollTo: "section3",
    textId: "Section3",
  },
];

const Header = () => {
  const { scrollingDown } = useScrollEvent();
  return (
    <header
      className={`sticky top-0 z-50 bg-gray-dark w-full  transition-transform transform ${
        scrollingDown ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <Icon icon="logo" />
      <LanguageSelector />
      <HeaderNavigation navigation={headernavigation} />
    </header>
  );
};

const LanguageSelector = () => {
  const navigate = useNavigate();
  const translation = useTranslation();

  useLanguageFromURL(navigate, translation);
  const [defaultLanguage] = useState(translation.i18n.language);

  const changeLanguage = (e: any) => {
    const lng = e.target.value;
    translation.i18n.changeLanguage(lng);
    navigate(`/${lng}`);
  };
  return (
    <div>
      <select
        defaultValue={defaultLanguage}
        onChange={(e) => changeLanguage(e)}
        name="languageSelect"
        id="languageSelect"
      >
        {languages.map((language: ILanguage) => {
          return (
            <option key={language.shortName} value={language.shortName}>
              {language.name}
            </option>
          );
        })}
      </select>
    </div>
  );
};

const HeaderNavigation: React.FC<IHeaderNavigation> = ({ navigation }) => {
  const { t } = useTranslation();
  const scrollTo = (e: any) => {
    e.preventDefault();
    const id = e.target.getAttribute("data-scroll-to");
    const sectionScrollTo = document.getElementById(`${id}`);
    sectionScrollTo && sectionScrollTo.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <nav>
      <ul>
        {navigation &&
          navigation.map((navItem: INavigation) => {
            return (
              <li key={navItem.textId} className="text-white">
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

export default Header;
