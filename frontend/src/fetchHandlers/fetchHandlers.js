export const fetchData = (setData, url, endPoint) => {
 fetch(url + endPoint)
 .then(res => res.json())
 .then(data => setData(data))
}