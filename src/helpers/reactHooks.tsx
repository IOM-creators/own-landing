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
  const [scrollingDown, updateScrollingDown] = useState(window.scrollY === 0 ? true : false);

  const sections = document.querySelectorAll('.section');
  const navLinks = document.querySelectorAll('nav ul li a');
  const sectionPositions: { top: number; bottom: number }[] = [];

  sections.forEach((section) => {
    const sectionTop = (section as HTMLElement).offsetTop;
    const sectionBottom = sectionTop + (section as HTMLElement).clientHeight;
    sectionPositions.push({ top: sectionTop, bottom: sectionBottom });
  });

  const handleNavigation = useCallback((e: any) => {
    const window = e.currentTarget;
    const scrollPosition = window.scrollY;
    if (scrollPosition > 82) {
      y > scrollPosition ? updateScrollingDown(true) : updateScrollingDown(false);
    }


    const noSectionInView = sectionPositions.every((position) => {
      return scrollPosition + 100 < position.top || scrollPosition >= position.bottom;
    });

    sectionPositions.forEach((position, index) => {
      const sectionTop = position.top;
      const sectionBottom = position.bottom;

      let classesToAdd = ['active', 'bg-white', 'text-dark-blue', 'sm:px-5'];

      if (!navLinks[index]) {
        return;
      }

      if (scrollPosition + 100 >= sectionTop && scrollPosition < sectionBottom) {
        if (!navLinks[index].classList.contains('active')) {
          navLinks[index].classList.add(...classesToAdd);
          window.history.replaceState(null, '', `#${sections[index].id}`);
        }
      } else {
        if (navLinks[index].classList.contains('active')) {
          navLinks[index].classList.remove(...classesToAdd);
        }
      }
    });

    if (noSectionInView && window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname);
    }

    setY(scrollPosition);
  }, [sectionPositions, navLinks, sections]);

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