import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { getAllSeo } from "../../actions/SeoAction";
const MetaData = ({ item_id }) => {
  const { loading, seoData } = useSelector((state) => state.admin_seo);
  const dispatch = useDispatch();
  useEffect(() => {
    if (item_id) {
      dispatch(getAllSeo(item_id));
    }
  }, [item_id, dispatch]);
  return (
    <>
      <Helmet>
        <title>
          {seoData && seoData[0] && seoData && seoData[0].seo_title}
        </title>
        <meta
          name="description"
          content={
            seoData && seoData[0] && seoData && seoData[0].seo_description
          }
        />
        <meta
          name="keywords"
          content={seoData && seoData[0] && seoData && seoData[0].seo_keyword}
        />
        <meta name="author" content="Gurez" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.yourwebsite.com/your-page" />

        <meta
          property="og:title"
          content={seoData && seoData[0] && seoData && seoData[0].seo_title}
        />
        <meta
          property="og:description"
          content={
            seoData && seoData[0] && seoData && seoData[0].seo_description
          }
        />
        <meta
          property="og:url"
          content="https://www.yourwebsite.com/your-page"
        />
        <meta
          property="og:image"
          content="https://www.yourwebsite.com/image.jpg"
        />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={seoData && seoData[0] && seoData && seoData[0].seo_title}
        />
        <meta
          name="twitter:description"
          content={
            seoData && seoData[0] && seoData && seoData[0].seo_description
          }
        />
        <meta
          name="twitter:image"
          content="https://www.yourwebsite.com/image.jpg"
        />

        <script type="application/ld+json">
          {JSON.stringify('schema_json_data')}
        </script>
      </Helmet>
    </>
  );
};

export default MetaData;
