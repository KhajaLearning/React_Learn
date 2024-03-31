const okUrl = "http://localhost:3000/photos?_page=1&_limit=100";
const notFoundErrorUrl = "https://httpstat.us/404";
const forbiddenErrorUrl = "https://httpstat.us/403";
const serverErrorUrl = "https://httpstat.us/500";

fetch(okUrl)
  .then((response) => {
    console.log(response);
    return response;
  })
  .then(handleErrors)
  .then(parseJSON)
  .then((data) => console.log(data))
  .catch((error) => console.log(error));

function handleErrors(response) {
  if (!response.ok) throw new Error(response.statusText);
  return response;
}

function parseJSON(response) {
  return response.json();
}
