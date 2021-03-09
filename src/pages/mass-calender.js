import React, {Suspense} from 'react';

import Layout from '../components/Layout';

import Bogorodichka from '../assets/images/Bogorodichka.jpg';
// import '../i18n';
import { useTranslation } from "react-i18next";
// import configs from "../../config";

const IndexPage = () => {
  // const {t} = useTranslation(['index', 'mass-calender'])
  const {t} = useTranslation('masscalender');
  // const[data, setData] = React.useState([]);
  const[nLastMasses, setNLastMasses] = React.useState(0);
  const [nextMasses, setNextMasses] = React.useState([]);
  const [nextMass, setNextMass] = React.useState(null);
  const [recentMasses, setRecentMasses] = React.useState([]);

  const[CONFIGS, setCONFIGS] = React.useState(null);
 
 

  const splitDatesInBeforeAftre = (allDates, pivotDate)=> {
    const before = [];
    const after = [];
    allDates.forEach(elem => {
      const [day, month, year] = elem.day.split('.');
      const dat1 = new Date(parseInt(year), parseInt(month)-1, parseInt(day));
    
      if(pivotDate > dat1){
        before.push(elem);
      }else{
        after.push(elem);
      }
    })
    return {before, after};
  }

  React.useEffect(()=> {
    const fetchMassData = async () => {
      await fetchConfigData();
      fetch('/data/masses.json', 
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
        const{before, after} = splitDatesInBeforeAftre(jsonRes, new Date());
        setRecentMasses(before);
        setNextMasses(after);
        setNextMass(after[after.length -1]);
      });
   
    }
    const fetchConfigData = async () => {
      fetch('/configs.json', 
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
        setNLastMasses(jsonRes['takeNLastMasses'])
      });
   
    }
   
    fetchMassData();
    return()=>{}
  }, []);

  // React.useEffect(()=>{
  //   if (data && data.length > 0) {
  //     const tmp = data;

  //     setNextMass(tmp.shift());
  //     setRecentMasses(tmp);
  //   }
  // },[data]);

  return(
    CONFIGS && 
    <Layout activeLink="mass-calender">
    <section className="page-section cta">
      <div className="container">
        <div className="row">
          <div className="col-xl-9 mx-auto">
            <div className="cta-inner text-center rounded">
              <h2 className="section-heading mb-5">
                <span className="section-heading-upper">{t('weServe', '')}</span>
                <span className="section-heading-lower">{t('when', '')}</span>
              </h2>
              <ul className="list-unstyled list-hours mb-5 text-left mx-auto">
              <div className="address mb-5 text-center">
                <p>{t('where', '')}</p>
                <em>
                  <strong>{CONFIGS.massAddress}</strong>
                  <br />
                  {CONFIGS.massAddressCity}
                </em>
              </div>
              <p>{t('next-mass', '')}:</p>
              {nextMass && <div key={nextMass.day} >
                <li  className="list-unstyled-item list-hours-item d-flex font-weight-bold">
                  {t(`day-${nextMass.dayOfWeek}`, '')} {t('onDay', '')} {nextMass.day}
                  <span className="ml-auto">{t('atHour', '')}  {nextMass.hour}</span>
                </li>
                {nextMass.remark && <div className="mass-remark">{t(`${nextMass.remark}`)}</div>}
                  </div>
              }
              <p>{t('recent-masses', '')}:</p>
              {recentMasses  && nLastMasses &&
                recentMasses.slice(0, nLastMasses).map(m => <div key={m.day} >
                    <li className="list-unstyled-item list-hours-item d-flex">
                    {t(`day-${m.dayOfWeek}`, '')} {t('onDay', '')} {m.day}
                      <span className="ml-auto">{t('atHour', '')}  {m.hour}</span>
                    </li>
                    {m.remark && <div className="mass-remark">{t(`${m.remark}`, '')}</div>}
                </div>)

              }
              </ul>
             
              <p className="mb-0">
                <small>
                  <em>{t('youCanReachPastor', '')}</em>
                </small>
                <br />
                {CONFIGS.telNrPriest}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="page-section about-heading">
      <section className="text-center">
        <img
          className="img-fluid rounded about-heading-img mb-3 mb-lg-0 mr-3"
          src={Bogorodichka}
          alt=""
        />
        {/* <img
          className="img-fluid rounded about-heading-img mb-3 mb-lg-0 mr-3"
          src={CrucifixOrtho}
          alt=""
        /> */}
        </section>
      <div className="container">
        
        <div className="about-heading-content">
          <div className="row">
            <div className="col-xl-9 col-lg-10 mx-auto">
              <div className="bg-faded rounded p-5">
                
              <h2 className="section-heading mb-4 mt-4">
                  <span className="section-heading-upper">
                  {t('vereinbarungTitle', '')}
                  </span>
                  <span className="section-heading-lower">{t('vereinbarungMit', '')}</span>
                </h2>
                <p>
                  {t('vereinbarungContent', '')} 
                    <strong>
                      {CONFIGS.massAddress}, {CONFIGS.massAddressCity}
                    </strong> 
                   {t('vereinbarungContentMore', '')}
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
