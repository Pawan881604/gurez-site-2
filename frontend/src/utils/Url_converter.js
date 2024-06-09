function urlConverter(slug) {
    let url = slug && slug.replace(/[^\w\s]/gi, "-");
    url = url && url.toLowerCase();
    url =  url && url.replace(/\s+/g, "-");
    url =  url && url.replace(/-+/g, "-");
    url =  url && url.replace(/^-+|-+$/g, "");
  
    return url;
  }

  export default urlConverter;