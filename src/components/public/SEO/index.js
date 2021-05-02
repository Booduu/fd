import React from 'react';
import { Helmet } from "react-helmet";
import PropTypes from 'prop-types';


const SEO = ({ title }) => {
    return (  
    <Helmet 
        title={`Full Dub - ${title}`}
        htmlAttributes={{ lang: "en" }}
        links={[
         {
              rel: 'canonical',
              href: 'https://fulldub.fr',
          },
        ]}
    />
    );
}
 
export default SEO;