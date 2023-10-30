import { useCallback, useEffect, useState } from 'react';
import { NavigateFunction } from 'react-router-dom';
import { UseTranslationResponse } from 'react-i18next';

export const useLanguageFromURL = (navigate: NavigateFunction, translation: UseTranslationResponse<any, any>) => {
  useEffect(() => {
    const languageFromURL = window.location.pathname.split('/')[1];
    const keys = (translation.i18n.options.resources && Object.keys(translation.i18n.options.resources)) || []
    keys.includes(languageFromURL) ? translation.i18n.changeLanguage(languageFromURL) : navigate('/en');
  }, [navigate, translation.i18n]);
}



export const useScrollEvent = () => {
  const [y, setY] = useState(0);
  const [scrollingDown, updateScrollingDown] = useState(true);

  const handleNavigation = useCallback((e: any) => {
    const window = e.currentTarget;
    y > window.scrollY ? updateScrollingDown(true) : updateScrollingDown(false);
    setY(window.scrollY);
  }, [y]);

  useEffect(() => {
    window.addEventListener("scroll", handleNavigation);
    return () => {
      window.removeEventListener("scroll", handleNavigation);
    };
  }, [handleNavigation]);

  return { y, scrollingDown };
};


export const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return windowWidth;
};