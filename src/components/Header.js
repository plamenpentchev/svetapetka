import React from 'react';
import '../i18n';
import { useTranslation } from "react-i18next";
import { Link } from 'gatsby';

import ReactCountryFlag from "react-country-flag";

const Header =({ activeLink }) =>{
  const {t, i18n} = useTranslation('header');
  const toggleMenu = value => {
   setOpenMenu(value);
  };
  const changeLanguage = (code) => {
    i18n.changeLanguage(code);
  };
  const [openMenu, setOpenMenu] = React.useState(false);

  

  return (
    <React.Fragment>
    <nav className="navbar navbar-expand-lg navbar-dark" id="mainNav">
      <div className="container">
        <a
          className="navbar-brand text-uppercase site-heading-upper  text-expanded text-wrap font-weight-bold d-lg-none "
          href="/#"
        >
          {t('heading')}
        </a>
        <a
          className="navbar-brand text-uppercase text-expanded text-wrap font-weight-bold d-lg-none text-light"
          href="/#"
        >
          {/*{config.subHeading}*/}
          {t('subHeading')}
        </a>
        <a
          className="navbar-brand text-uppercase text-expanded text-wrap font-weight-bold d-lg-none text-light"
          href="/#"
        >
          {t('subHeading2')}
        </a>

        <button
          onClick={_ => toggleMenu(!openMenu)}
          className={`navbar-toggler  ${openMenu ? '' : 'collapsed'}`}
          type="button"
          aria-controls="navbarResponsive"
          aria-expanded={openMenu}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse ${openMenu ? 'show' : ''}`}
          id="navbarResponsive"
        >
          <div className="navigation">

          <ul className="navbar-nav text-center mx-auto">
            <li
              className={`nav-item px-lg-4 ${
                activeLink === 'home' ? 'active' : ''
              }`}
            >
              <Link className="nav-link text-uppercase text-expanded" to="/">
                {t('menuHome')}
              </Link>
            </li>
            <li
              className={`nav-item px-lg-4 ${
                activeLink === 'about' ? 'active' : ''
              }`}
            >
              <Link
                className="nav-link text-uppercase text-expanded"
                to="/about"
              >
                 {t('menuForUs')}
              </Link>
            </li>
            <li
              className={`nav-item px-lg-4 ${
                activeLink === 'store' ? 'active' : ''
              }`}
            >
              <Link
                className="nav-link text-uppercase text-expanded"
                to="/maps"
              >
                {t('menuMap')}
              </Link>
            </li>
          
            <li
              className={`nav-item px-lg-4 ${
                activeLink === 'products' ? 'active' : ''
              }`}
            >
              <Link
                className="nav-link text-uppercase text-expanded"
                to="/photos"
              >
                {t('menuPhotos')}
              </Link>
            </li>
            <li
              className={`nav-item px-lg-4 ${
                activeLink === 'store' ? 'active' : ''
              }`}
            >
              <Link
                className="nav-link text-uppercase text-expanded"
                to="/mass-calender"
              >
                 {t('menuDienstPlan')}
              </Link>
            </li>
            <li
              className={`nav-item px-lg-4 ${
                activeLink === 'store' ? 'active' : ''
              }`}
            >
              <Link
                className="nav-link text-uppercase text-expanded"
                to="/orthodox-calendar"
              >
                 {t('menuOrthodoxCalendar')}
              </Link>
            </li>
            
          </ul>

              <div className="country-flags">
              <li>
                <ReactCountryFlag
                    countryCode="BG"
                    svg
                    style={{
                        width: '2em',
                        height: '2em',
                        marginRight: '2em'
                    }}
                    title="BG"
                    onClick={()=>changeLanguage('bg')}
                />
              </li>
              <li>
                <ReactCountryFlag
                  countryCode="DE"
                  svg
                  style={{
                      width: '2em',
                      height: '2em',
                  }}
                  title="DE"
                  onClick={()=>changeLanguage('de')}
              />
            </li>
            </div>
          
          </div>
        </div>
      </div>
      
    </nav>
    
    <div className="hotnews">
    <p style={{color:'white'}}>{t('crawlText')}</p>
  </div>
  </React.Fragment>
  );
}
export default  Header;