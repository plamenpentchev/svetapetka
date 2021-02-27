import React from 'react';
import Layout from '../components/Layout';

// import '../i18n';
import { useTranslation } from "react-i18next";


import CrucifixOrtho from '../assets/images/CrucifixOrthodox.jpg';
import BludniaSin from '../assets/images/BludniaSin.jpg';
import OtcheNash from '../assets/images/OtcheNash.jpg';


const IndexPage = () => {
  const {t} =useTranslation('photos');
  return(
    <Layout activeLink="products">
      <section className="page-section">
        <div className="container">
          <div className="product-item">
            <div className="product-item-title d-flex">
              <div className="bg-faded p-5 d-flex ml-auto rounded">
                <h2 className="section-heading mb-0">
                  <span className="section-heading-upper">
                    {t('OtcheNashTitle')}
                  </span>
                  <span className="section-heading-lower">
                  {t('OtcheNashSubTitle')}
                  </span>
                </h2>
              </div>
            </div>
            <img
              className="product-item-img mx-auto d-flex rounded img-fluid mb-3 mb-lg-0"
              src={OtcheNash}
              alt=""
            />
            <div className="product-item-description d-flex mr-auto">
              <div className="bg-faded p-5 rounded">
                <p className="mb-0">
                  {t('OtcheNash')}
                </p>
                <p>{t('OtcheNash2')}</p>
                <p>{t('OtcheNash3')}</p>
                <p>{t('OtcheNash4')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <div className="product-item">
            <div className="product-item-title d-flex">
              <div className="bg-faded p-5 d-flex mr-auto rounded">
                <h2 className="section-heading mb-0">
                  <span className="section-heading-upper">
                  {t('bludniqSinTitle')}
                  </span>
                  <span className="section-heading-lower">
                  {t('bludniqSinSubTitle')}
                  </span>
                </h2>
              </div>
            </div>
            <img
              className="product-item-img mx-auto d-flex rounded img-fluid mb-3 mb-lg-0"
              src={BludniaSin}
              alt=""
            />
            <div className="product-item-description d-flex ml-auto">
              <div className="bg-faded p-5 rounded">
                <p className="mb-0">
                {t('bludniqSinText')}
                </p>
                <p className="mb-0">
                {t('bludniqSinText2')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <div className="product-item">
            <div className="product-item-title d-flex">
              <div className="bg-faded p-5 d-flex ml-auto rounded">
                <h2 className="section-heading mb-0">
                  <span className="section-heading-upper">
                  {t('cricifixTitle')}
                  </span>
                  <span className="section-heading-lower">
                  {t('cricifixSubTitle')}
                  </span>
                </h2>
              </div>
            </div>
            <img
              className="product-item-img mx-auto d-flex rounded img-fluid mb-3 mb-lg-0"
              src={CrucifixOrtho}
              alt=""
            />
            <div className="product-item-description d-flex mr-auto">
              <div className="bg-faded p-5 rounded">
                <p className="mb-0">
                {t('cricifixText')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>

  )};

export default IndexPage;
