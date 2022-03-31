class Service {
  get = async (url) => {
    const result = await fetch(url);

    if (!result.ok) {
      throw new Error(`Could not fetch ${url}, status: ${result.status}`);
    }

    return await result.json();
  }

  post = async (url, data) => {
    let result = await fetch(url, {
        method: 'Post',
        headers: {
          accept: 'application/json',
          "content-type": 'application/json'
        },
        body: data
    });

    return await result.json();
};
}

export default Service;