import React from 'react';

import Layout from '../components/Layout';
// import '../i18n';
import { useTranslation } from "react-i18next";

import about from '../assets/images/kirilimetodii.jpg';
const IndexPage = () => {
  const {t} = useTranslation(['about', 'index']);
  return (
  <Layout activeLink="about">
    <section className="page-section about-heading">
      <div className="container">
        <img
          className="img-fluid rounded about-heading-img mb-3 mb-lg-0"
          src={about}
          alt=""
        />
        <div className="about-heading-content">
          <div className="row">
            <div className="col-xl-9 col-lg-10 mx-auto">
              <div className="bg-faded rounded p-5">
                <h2 className="section-heading mb-4">
                  <span className="section-heading-upper">
                    {t('heading')}
                  </span>
                  <span className="section-heading-lower">
                    {t('mitFlgndVrstz')}
                  </span>
                </h2>
                <p className="mb-0 font-weight-bold">
                  {t('vorsitz')}
                </p>
                <p className="mb-0">
                 {t('index:pfarrer')} {t('index:pfarrerName')} 
                </p>
                <p className="mb-0 font-weight-bold">
                {t('vertreter')}:
                </p>
                <p className="mb-0">
                {t('vertreterName')} 
                </p>
                <p className="mb-0 font-weight-bold">
                {t('sekretar')} :
                </p>
                <p className="mb-0">
                {t('sekretarName')} 
                </p>
                <p className="mb-0 font-weight-bold">
                {t('cassier')} :
                </p>
                <p className="mb-3">
                {t('cassierName')} 
                </p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>

)};

export default IndexPage;
