export const product_schema = (product) => {
    return {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Organization",
          "@id": "https://gurez.com/#organization",
          name: "Gurez",
          url: "https://gurez.com",
          logo: {
            "@type": "ImageObject",
            "@id": "https://gurez.com/#logo",
            url: "https://gurez.com/Logo.png",
            contentUrl: "https://gurez.com/Logo.png",
            caption: "Gurez",
            inLanguage: "en-GB",
            width: "309",
            height: "183",
          },
        },
        {
          "@type": "WebSite",
          "@id": "https://gurez.com/#website",
          url: "https://gurez.com",
          name: "Gurez",
          publisher: { "@id": "https://gurez.com/#organization" },
          inLanguage: "en-GB",
        },
        {
          "@type": "ImageObject",
          "@id":
            "https://gurez.com/wp-content/uploads/2023/08/carton-boxes-1.webp",
          url: "https://gurez.com/wp-content/uploads/2023/08/carton-boxes-1.webp",
          width: "1714",
          height: "1714",
          caption: "carton boxes",
          inLanguage: "en-GB",
        },
        {
          "@type": "BreadcrumbList",
          "@id":
            "https://gurez.com/product/3ply-white-carton-boxes-5x4x/#breadcrumb",
          itemListElement: [
            {
              "@type": "ListItem",
              position: "1",
              item: { "@id": "https://gurez.com", name: "Home" },
            },
            {
              "@type": "ListItem",
              position: "2",
              item: {
                "@id": "https://gurez.com/product-category/packing-material/",
                name: "Packing Material",
              },
            },
            {
              "@type": "ListItem",
              position: "3",
              item: {
                "@id": "https://gurez.com/product/3ply-white-carton-boxes-5x4x/",
                name: "Box Brother 3 Ply White Corrugated Box Size: 5x4x2.5 Length 5 inch Width 4 inch Height 2.5 inch 3Ply custom cardboard packing boxes",
              },
            },
          ],
        },
        {
          "@type": "ItemPage",
          "@id":
            "https://gurez.com/product/3ply-white-carton-boxes-5x4x/#webpage",
          url: "https://gurez.com/product/3ply-white-carton-boxes-5x4x/",
          name: "3Ply White Carton Boxes: 5x4x2.5, From Box Brother...",
          datePublished: "2023-08-22T14:28:53+05:30",
          dateModified: "2023-10-09T12:22:08+05:30",
          isPartOf: { "@id": "https://gurez.com/#website" },
          primaryImageOfPage: {
            "@id":
              "https://gurez.com/wp-content/uploads/2023/08/carton-boxes-1.webp",
          },
          inLanguage: "en-GB",
          breadcrumb: {
            "@id":
              "https://gurez.com/product/3ply-white-carton-boxes-5x4x/#breadcrumb",
          },
        },
        {
          "@type": "Product",
          name: "3Ply White Carton Boxes: 5x4x2.5, from Box Brother...",
          description:
            "Box Brothers' 5x4x2.5-inch, 3Ply  white carton box is a durable, safe, and adaptable packaging option that is great for shipping, storing, and...",
          category: "Packing Material",
          mainEntityOfPage: {
            "@id":
              "https://gurez.com/product/3ply-white-carton-boxes-5x4x/#webpage",
          },
          image: [
            {
              "@type": "ImageObject",
              url: "https://gurez.com/wp-content/uploads/2023/08/carton-boxes-1.webp",
              height: "1714",
              width: "1714",
            },
            {
              "@type": "ImageObject",
              url: "https://gurez.com/wp-content/uploads/2023/08/cardboard-corrugated-1.webp",
              height: "1714",
              width: "1714",
            },
            {
              "@type": "ImageObject",
              url: "https://gurez.com/wp-content/uploads/2023/08/corrugated-box-2.webp",
              height: "1714",
              width: "1735",
            },
            {
              "@type": "ImageObject",
              url: "https://gurez.com/wp-content/uploads/2023/08/custom-cardboard-boxes-1.webp",
              height: "1714",
              width: "1714",
            },
          ],
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "5.00",
            bestRating: "5",
            ratingCount: "2",
            reviewCount: "2",
          },
          review: [
            {
              "@type": "Review",
              "@id":
                "https://gurez.com/product/3ply-white-carton-boxes-5x4x/#li-comment-3430",
              description: "The product is firmly packed.",
              datePublished: "2023-10-15 23:00:00",
              reviewRating: {
                "@type": "Rating",
                ratingValue: "5",
                bestRating: "5",
                worstRating: "1",
              },
              author: { "@type": "Person", name: "Ashwin" },
            },
            {
              "@type": "Review",
              "@id":
                "https://gurez.com/product/3ply-white-carton-boxes-5x4x/#li-comment-3429",
              description: "Very fast delivery.",
              datePublished: "2023-10-13 11:00:00",
              reviewRating: {
                "@type": "Rating",
                ratingValue: "5",
                bestRating: "5",
                worstRating: "1",
              },
              author: { "@type": "Person", name: "Sandeep" },
            },
          ],
          offers: {
            "@type": "AggregateOffer",
            lowPrice: "348.00",
            highPrice: "5600.00",
            offerCount: "4",
            priceCurrency: "INR",
            availability: "http://schema.org/InStock",
            seller: {
              "@type": "Organization",
              "@id": "https://gurez.com/",
              name: "Gurez",
              url: "https://gurez.com",
              logo: "https://gurez.com/wp-content/uploads/2023/04/GureZ-logo-1.png",
            },
            url: "https://gurez.com/product/3ply-white-carton-boxes-5x4x/",
          },
          "@id":
            "https://gurez.com/product/3ply-white-carton-boxes-5x4x/#richSnippet",
        },
      ],
    };
  };
  