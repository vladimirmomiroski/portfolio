export const fetchData = (setData, url, endPoint) => {
    console.log(url+endPoint)
 fetch(url + endPoint)
 .then(res => res.json())
 .then(data => setData(data))
}

export const postData = (data, url, endPoint, func) => {
    const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      };
  
      fetch(url + endPoint, options)
        .then((res) => {
          if (res.status === 200) {
            func()
          }
        })
        .catch((error) => {
          throw new Error(error);
        });
}