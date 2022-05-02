export const removeHttpFromUrl = (url) => {
    const site = url;

    const newSite = site.split('https://')[1];

    return newSite
  }