import React from 'react';

import '../i18n';
import { useTranslation } from "react-i18next";

export default function SiteHeader() {
  const {t} = useTranslation('header');
  return (
    <h1 className="site-heading text-center text-white d-none d-lg-block d-sm-block">
      <span className="site-heading-upper text-primary mb-3">
        {t('heading')}
      </span>
      
      <span className="site-heading-lower">{t('subHeading')}</span>
      <span className="site-heading-upper text-primary mt-3">
        {t('subHeading2')}
      </span>
    </h1>
  );
}
