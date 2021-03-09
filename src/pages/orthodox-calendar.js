import React from 'react';
import DatePicker from 'react-date-picker'

import Layout from '../components/Layout';

// import '../i18n';
import { useTranslation } from "react-i18next";
import i18next from 'i18next';
// import configs from "../../config";

const IndexPage = () => {
  const {t} = useTranslation('orthodoxcalendar');
  const [dayOfYear, setDayOfYear] = React.useState(new Date());
  // const [calendarOpened, onCalendarOpened] = React.useState(true);
  const [dayHistory, setDayHistory] = React.useState('');

 

  const[CONFIGS, setCONFIGS] = React.useState(null);
  const[sundaysAndFeasts,setSundaysAndFeasts] = React.useState(null);
  const fetchConfigData = async () => {
    return fetch('/configs.json', 
    {
      headers:{
        'Content-Type':'application/json',
        'Accept':'application.json'
      }
    })
  }
  const fetchFeastsData = async () => {
    return fetch('/data/feasts.json', 
    {
      headers:{
        'Content-Type':'application/json',
        'Accept':'application.json'
      }
    })
  }

  const fetchDayData =  (year, month, day) => {
    if(!sundaysAndFeasts)return;
    fetch(`https://orthocal.info/api/oca/${year}/${month}/${day}/`, 
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
        let r = ""; 
        
        const {saints, sundays, titles} = sundaysAndFeasts;
        if(CONFIGS.takeSundays){
          Object.keys(sundays).forEach(k => {
            if (jsonRes.titles) {
              jsonRes.titles.forEach(e => {
                if (e === k) {
                  r = `${r} ${sundays[k]} `
                }
              })
            }
            if (jsonRes.feasts) {
              jsonRes.feasts.forEach(e => {
                if (e === k) {
                  r = `${r} ${sundays[k]} `
                }
              })
            }
            if (jsonRes.saints) {
              jsonRes.saints.forEach(e => {
                if (e === k) {
                  r = `${r} ${sundays[k]} `
                }
              })
            }
          });
        }
        Object.keys(titles).forEach(k => {
          if (jsonRes.titles) {
            jsonRes.titles.forEach(e => {
              if (e === k) {
                r = `${r} ${titles[k]} `
              }
            })
          }
          if (jsonRes.feasts) {
            jsonRes.feasts.forEach(e => {
              if (e === k) {
                r = `${r} ${titles[k]} `
              }
            })
          }
          if (jsonRes.saints) {
            jsonRes.saints.forEach(e => {
              if (e === k) {
                r = `${r} ${titles[k]} `
              }
            })
          }
        });
        const m = saints[month];
        if (m) {
          Object.keys(m).forEach(k => {
            if (jsonRes.titles) {
              jsonRes.titles.forEach(e => {
                if (e === k) {
                  r = `${r} ${m[k]} `
                }
              })
            }
            if (jsonRes.feasts) {
              jsonRes.feasts.forEach(e => {
                if (e === k) {
                  r = `${r} ${m[k]} `
                }
              })
            }
            if (jsonRes.saints) {
              jsonRes.saints.forEach(e => {
                if (e === k){
                  r = `${r} ${m[k]} `
                }
              })
            }
          });
        }
       
       

      
        
        setDayHistory(r);
    });
 
  }

  React.useEffect(()=> {
      if (dayOfYear && sundaysAndFeasts) {
        const year = dayOfYear.getFullYear();
        const day = dayOfYear.getDate();
        const month = dayOfYear.getMonth() + 1;
        fetchDayData(year, month, day);
      }
   
    return()=>{}
  }, [dayOfYear, sundaysAndFeasts]);
 
  React.useEffect(()=> {
    fetchConfigData()
      .then(response => {
        return response.json();
      })
      .then(result => {
        setCONFIGS(result);
      })
      .then(()=>{
        fetchFeastsData()
          .then(response => {
            return response.json();
          })
          .then(res => {
            setSundaysAndFeasts(res);
          })
          .then(() => {
            const year = dayOfYear.getFullYear();
            const day = dayOfYear.getDate();
            const month = dayOfYear.getMonth() + 1;
          
          
            fetchDayData(year, month, day);
          })
      })
  
    return()=>{}
  }, []);

  return(
    CONFIGS && 
    <Layout activeLink="orthodox-calendar">
    <section className="page-section cta">
      <div className="container">
        <div className="row">
          <div className="col-xl-9 mx-auto">
            {/* <div className="cta-inner text-center rounded"> */}
          
                <div className="calendar-container">
                    <DatePicker
                        className="date-picker"
                        onChange={(e)=> {
                            setDayHistory(t('pleaseWait', ''));
                            setDayOfYear(e);
                        }}
                        value={dayOfYear}
                        isOpen={true}
                        closeCalendar={false}
                        showLeadingZeros={true}
                        locale={`${i18next.language}`}
                    />
                    <div className="what-day-is-this">
                        {dayHistory}
                    </div>
                </div>
            
            
            {/* </div>    */}
          </div>
        </div>
      </div>
    </section>

   </Layout>

)};

export default IndexPage;
