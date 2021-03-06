import React from 'react';

import Layout from '../components/Layout';
// import '../i18n';
import { useTranslation } from "react-i18next";

import intro from '../assets/images/Sveta_Petka2.png';
// import intro from '../assets/images/Sv-Tsar-Boris-Mihail.jpg';
// import carkObshtina from '../assets/images/CarkObshtina.jpeg';


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
          <div className="intro-text left-0 text-center bg-faded p-5 rounded " >
            <h2 className="section-heading mb-4">
              <span className="section-heading-upper"></span>
              <span className="section-heading-lower">{t('welcome', '')}</span>
            </h2>
            <p className="mb-3">
              {t('more_to_welcome', '')}
            </p>
            <div className="intro-button mx-auto">
              <a className="btn btn-primary btn-xl" 
                  href="https://m.facebook.com/%D0%91%D0%9F%D0%A6%D0%9E-%D0%A1%D0%B2-%D0%9F%D0%B5%D1%82%D0%BA%D0%B0-%D0%A2%D1%8A%D1%80%D0%BD%D0%BE%D0%B2%D1%81%D0%BA%D0%B0-%D0%B3%D1%80-%D0%9C%D0%B0%D0%BD%D1%85%D0%B0%D0%B9%D0%BC-123713835011734/">
                      {t('visit_us_on_fb', '')} 
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    {/* <section >
    <div className="container">
        
        <div className="intro">
         <img
            className="img-fluid mb-3 mb-lg-0 rounded"
            src={carkObshtina}
            alt=""
          />
        </div>
        </div>
    </section> */}
    <section className="page-section cta">
      <div className="container">
        <div className="row">
          <div className="col-xl-9 mx-auto">
            <div className="cta-inner text-center rounded">
            
              <h2 className="section-heading mb-4">
                <span className="section-heading-upper">{t('kirchenVorstand', '')}</span>
              </h2>
              <p className="mb-0">
                {t('pfarrer', '')} {t('pfarrerName', '')}
              </p>
              <div className="contact-entry">
                <strong>{t('tel', '')}.:</strong>
                <p className="mb-0 font-weight-bold">
                {CONFIGS.telNrPriest}
                </p>
              </div>
              <div className="contact-entry">
                <strong>{t('email', '')}:</strong>
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
                <span className="section-heading-upper">{t('bankData', '')}</span>
                <span className="section-heading-upper"></span>
              </h2>
              <p className="mb-0">
              {CONFIGS.bankHolder}
              </p>
              
              <p className="mb-0">
              {CONFIGS.bankName}
              </p>
              <p className="mb-0">
              {t('bankAccount', '')}: {CONFIGS.bankAccountIs}
              </p>
              <p className="mb-0">
              {t('bankCode', '')}: {CONFIGS.bankCodeIs}
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
