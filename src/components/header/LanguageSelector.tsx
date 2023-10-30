import { useNavigate } from "react-router";
import { useLanguageFromURL } from "../../helpers/reactHooks";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import Select from 'react-select';

interface ILanguageSelector {
  classname?: string;
}

type Option = { value: string; label: string };

const languages: Option[] = [
  { value: 'de', label: 'DE' },
  { value: 'en', label: 'EN' },
];


const LanguageSelector: React.FC<ILanguageSelector> = ({ classname = '' }) => {
  const navigate = useNavigate();
  const translation = useTranslation();

  useLanguageFromURL(navigate, translation);


  const findCurrentLanguage = () => languages.find((option) => option.value === translation.i18n.language) || languages[0]

  const [selectedOption, setSelectedOption] = useState(findCurrentLanguage());


  useEffect(() => {
    setSelectedOption(findCurrentLanguage())
  }, [translation.i18n.language, findCurrentLanguage])


  const changeLanguage = (e: any) => {
    const lng = e.value;
    translation.i18n.changeLanguage(lng);
    navigate(`/${lng}`);
    setSelectedOption(e)
  };
  return (
    <div className={classname}>
      <Select
        className="basic-single "
        classNamePrefix="select"
        name="color"
        options={languages}
        value={selectedOption}
        id="languageSelect"
        onChange={(e) => changeLanguage(e)}
      />
    </div>
  );
};

export default LanguageSelector