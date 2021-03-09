import React from 'react';
import GoogleMapReact  from "google-map-react";
import Layout from '../components/Layout';
// import '../i18n';
import { useTranslation } from "react-i18next";
// import configs from '../../config';
// import Marker from "../components/Marker";

// const AnyReactComponent = ({ text }) => <div>{text}</div>;

const IndexPage = () => {
    const {t} = useTranslation('maps', 'header');
    const[CONFIGS, setCONFIGS] = React.useState(null);
    const[places, setPlaces] = React.useState([]);

    // const places =[{name:'Kirche', rating:5, types:[''], geometry:{location: CONFIGS['googleMapsDefaultCenter']}}]
    const getInfoWindowString = (place) => `
    <div>
      <div style="font-size: 16px;">
        ${t('header:heading')}
      </div>
      <div style="font-size: 14px;">
        <span style="color: orange;">${String.fromCharCode(9733).repeat(Math.floor(place.rating))}</span><span style="color: lightgrey;">${String.fromCharCode(9733).repeat(5 - Math.floor(place.rating))}</span>
      </div>
      <div style="font-size: 14px; color: grey;">
        ${CONFIGS.massAddress}, ${CONFIGS.massAddressCity}
      </div>
    </div>`;
    const handleApiLoaded = (map, maps, places) => {
        const markers = [];
        const infowindows = [];
      
        places.forEach((place) => {
          markers.push(new maps.Marker({
            position: {
              lat: place.geometry.location.lat,
              lng: place.geometry.location.lng,
            },
            map,
          }));
      
          infowindows.push(new maps.InfoWindow({
            content: getInfoWindowString(place),
          }));
        });
      
        markers.forEach((marker, i) => {
          marker.addListener('click', () => {
            infowindows[i].open(map, marker);
          });
        });
      };
 
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
            setPlaces(
              [
                {
                  name:'Kirche', 
                  rating:5, 
                  types:[''], 
                  geometry:{
                    location: jsonRes['googleMapsDefaultCenter']
                  }
                }
              ]
            );
          });
       
        }
        fetchMassData();
        return()=>{}
      }, []);
    return (
        <Layout noFooter activeLink="maps">
        <section className="page-section cta">
        <div className="container">
            <div className="row">
            <div className="col-xl-9 mx-auto">
                <div className="cta-inner text-center rounded">
                <h2 className="section-heading mb-5">
                    <span>{t('youCanFindUsHere', '')}</span>
                </h2>
                {CONFIGS && places.length > 0 && <div style={{height:'50vh', width:'100%'}}>
                    <GoogleMapReact 
                        bootstrapURLKeys={{key: CONFIGS.googleMapsAPIKey}}
                        defaultCenter={CONFIGS.googleMapsDefaultCenter}
                        defaultZoom={CONFIGS.googleMapsZoom}
                        yesIWantToUseGoogleMapApiInternals
                        onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps, places)}
                         
                    >
                    </GoogleMapReact>
                </div>}
            </div>
            </div>
            </div>
        </div>
        </section>
        
    </Layout>

    )
};

export default IndexPage;
