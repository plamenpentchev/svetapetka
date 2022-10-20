import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import '../assets/sass/business-casual.scss';
import Footer from './Footer';
import SiteHeader from './SiteHeader';
import Header from './Header';
import { useSiteMetadata } from "../hooks/use-site-metadata"

const Layout =( {
  children,
  noHeader,
  noFooter,
  noSiteHeader,
  activeLink,
}) => {

     //const { title: defaultTitle, description: defaultDescription,  siteUrl, keywords } = useSiteMetadata();
    //const keywords = `sveta, petka, mannheim, sveta petka mannheim, tarnovska, bulgarische, kirche, mannheim, света, петка, търновска, света петка търновска, манхайм, българска, църква, българска църква манхайм,`

    return (
      <StaticQuery
        query={graphql`
          query  {
            site {
              siteMetadata {
                title
                description
                siteUrl
                keywords
              }
            }
          }
        `}
        render={data => (
          <>
            <Helmet
              title={data.site.siteMetadata.title}
              meta={[
                { name: 'description', content: 'Casual' },
                { name: 'keywords', content: data.site.siteMetadata.keywords },
              ]}
            >
              <html lang="en" />
            </Helmet>
            <div className={'page-top'}>
              {!noSiteHeader ? <SiteHeader /> : null}
              {!noHeader ? <Header activeLink={activeLink} /> : null}
              {children}
              {!noFooter ? <Footer /> : null}
            </div>
          </>
        )}
      />
    );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  noFooter: PropTypes.bool,
  noHeader: PropTypes.bool,
  noSiteHeader: PropTypes.bool,
  activeLink: PropTypes.string,
};

export default Layout;
