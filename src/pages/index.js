import React from 'react';

import Layout from '../components/Layout';
// import '../i18n';
import { useTranslation } from "react-i18next";

import intro from '../assets/images/Sv-Tsar-Boris-Mihail.jpg';

// import intro from '../assets/images/CarBoris.jpg';
// import intro from '../assets/images/intro.jpg';

const IndexPage = () => {
  const { t } = useTranslation('index');
  const[CONFIGS, setCONFIGS] = React.useState(null);
 
  React.useEffect(()=> {
    const fetchMassData = async () => {
      fetch('configs.json', 
      {
        headers:{
          'Content-Type':'application/json',
          'Accept':'application.json'
        }
      })
      .then(response => {
        return response.json();
      })
      .then(jsonRes => {
        setCONFIGS(jsonRes);
      });
   
    }
    fetchMassData();
    return()=>{}
  }, []);

  return (
    CONFIGS && 
    <Layout activeLink="home">
          <section className="page-section clearfix">
      <div className="container">
        
        <div className="intro">
         <img
            className="intro-img img-fluid mb-3 mb-lg-0 rounded"
            src={intro}
            alt=""
          />
          <div className="intro-text left-0 text-center bg-faded p-5 rounded">
            <h2 className="section-heading mb-4">
              <span className="section-heading-upper"></span>
              <span className="section-heading-lower">{t('welcome')}</span>
            </h2>
            <p className="mb-3">
              {t('more_to_welcome')}
            </p>
            <div className="intro-button mx-auto">
              <a className="btn btn-primary btn-xl" 
                  href="https://www.facebook.com/bulgarischeKircheFrankfurt/about/?ref=page_internal">
                      {t('visit_us_on_fb', "Facebook")} 
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

          <section className="page-section cta">
            <div className="container">
              <div className="row">
                <div className="col-xl-9 mx-auto">
                  <div className="cta-inner text-center rounded">
                    <h2 className="section-heading mb-4">
                      <span className="section-heading-upper">{t('kirchenVorstand')}</span>
                    </h2>
                    <p className="mb-0">
                      {t('pfarrer')} {t('pfarrerName')}
                    </p>
                    <div className="contact-entry">
                      <strong>{t('tel')}.:</strong>
                      <p className="mb-0 font-weight-bold">
                      {CONFIGS.telNrPriest}
                      </p>
                    </div>
                    <div className="contact-entry">
                      <strong>{t('email')}:</strong>
                      <p className="mb-0 font-weight-bold">
                      {CONFIGS.emailPriestIs} 
                      </p>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="page-section cta">
      <div className="container">
        <div className="row">
          <div className="col-xl-9 mx-auto">
            <div className="cta-inner text-center rounded">
              <h2 className="section-heading mb-4">
                <span className="section-heading-upper">{t('bankData')}</span>
                <span className="section-heading-upper"></span>
              </h2>
              <p className="mb-0">
               {CONFIGS.bankHolder}
              </p>
              
              <p className="mb-0">
              {CONFIGS.bankName}
              </p>
              <p className="mb-0">
              {t('bankAccount')}: {CONFIGS.bankAccountIs}
              </p>
              <p className="mb-0">
              {t('bankCode')}: {CONFIGS.bankCodeIs}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </Layout>
 
  )
};

export default IndexPage;
