import i18n from 'i18next';

import  Backend from "i18next-xhr-backend";
// import  XHR from "i18next-xhr-backend";
// import  Backend  from "i18next-http-backend";
// import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from "react-i18next";
// import axios from 'axios';
// import Backend from 'i18next-xhr-backend/dist/cjs/i18nextXHRBackend';


i18n
    .use(Backend)
    .use(initReactI18next)
    .init({
        debug: true,
        lng:'bg',
        fallbackLng:'de',
        whitelist:['de','bg'],
        react:{
            useSuspense: false,
            wait:false
        },
        interpolation:{
            escapeValue:false,
        },
        backend:{
            loadPath: '/locales/{{lng}}/{{ns}}.json'
        },
    })
export default i18n;