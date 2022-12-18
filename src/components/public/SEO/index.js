import React from 'react';
import { Helmet } from "react-helmet";

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