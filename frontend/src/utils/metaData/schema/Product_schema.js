export const product_categorie_schema = () => {
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
          url: "https://gurez.com/wp-content/uploads/2023/04/GureZ-logo-1.png",
          contentUrl:
            "https://gurez.com/wp-content/uploads/2023/04/GureZ-logo-1.png",
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
          "https://gurez.com/wp-content/uploads/2023/05/qtq80-4sYQPJ-e1685028590644.jpeg",
        url: "https://gurez.com/wp-content/uploads/2023/05/qtq80-4sYQPJ-e1685028590644.jpeg",
        width: "1506",
        height: "1123",
        inLanguage: "en-GB",
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://gurez.com/contact-us/#breadcrumb",
        itemListElement: [
          {
            "@type": "ListItem",
            position: "1",
            item: { "@id": "https://gurez.com", name: "Home" },
          },
          {
            "@type": "ListItem",
            position: "2",
            item: { "@id": "https://gurez.com/contact-us/", name: "Contact" },
          },
        ],
      },
      {
        "@type": "WebPage",
        "@id": "https://gurez.com/contact-us/#webpage",
        url: "https://gurez.com/contact-us/",
        name: "Contact Us Gurez: We Eagerly Anticipate Your Inquiries...",
        datePublished: "2023-04-07T10:49:00+05:30",
        dateModified: "2024-06-10T13:18:00+05:30",
        isPartOf: { "@id": "https://gurez.com/#website" },
        primaryImageOfPage: {
          "@id":
            "https://gurez.com/wp-content/uploads/2023/05/qtq80-4sYQPJ-e1685028590644.jpeg",
        },
        inLanguage: "en-GB",
        breadcrumb: { "@id": "https://gurez.com/contact-us/#breadcrumb" },
      },
      {
        "@type": "Person",
        "@id": "https://gurez.com/author/pawan/",
        name: "pawan sharma",
        url: "https://gurez.com/author/pawan/",
        image: {
          "@type": "ImageObject",
          "@id":
            "https://secure.gravatar.com/avatar/874b640a3309dc7812103ffc457e2e2b?s=80&amp;d=mm&amp;r=g",
          url: "https://secure.gravatar.com/avatar/874b640a3309dc7812103ffc457e2e2b?s=80&amp;d=mm&amp;r=g",
          caption: "pawan sharma",
          inLanguage: "en-GB",
        },
        worksFor: { "@id": "https://gurez.com/#organization" },
      },
      {
        "@type": "Article",
        headline: "Contact Us Gurez: We Eagerly Anticipate Your Inquiries...",
        keywords: "contact us",
        datePublished: "2023-04-07T10:49:00+05:30",
        dateModified: "2024-06-10T13:18:00+05:30",
        author: {
          "@id": "https://gurez.com/author/pawan/",
          name: "pawan sharma",
        },
        publisher: { "@id": "https://gurez.com/#organization" },
        description:
          "contact us: We eagerly anticipate your inquiries and value your feedback, standing by to assist you with any requests or questions you may have...",
        name: "Contact Us Gurez: We Eagerly Anticipate Your Inquiries...",
        "@id": "https://gurez.com/contact-us/#richSnippet",
        isPartOf: { "@id": "https://gurez.com/contact-us/#webpage" },
        image: {
          "@id":
            "https://gurez.com/wp-content/uploads/2023/05/qtq80-4sYQPJ-e1685028590644.jpeg",
        },
        inLanguage: "en-GB",
        mainEntityOfPage: { "@id": "https://gurez.com/contact-us/#webpage" },
      },
    ],
  };
};
