const okUrl = "http://localhost:3000/photos";
const notFoundErrorUrl = "https://httpstat.us/404";
const forbiddenErrorUrl = "https://httpstat.us/403";
const serverErrorUrl = "https://httpstat.us/500";

var data = {
  albumId: 501,
  title: "Another Photo",
  url: "https://via.placeholder.com/600/b0f7cc",
  thumbnailUrl: "https://via.placeholder.com/150/b0f7cc",
};

fetch(okUrl, {
  method: "POST",
  body: JSON.stringify(data),
  headers: {
    "Content-Type": "application/json",
  },
})
  .then((response) => {
    console.log(response);
    return response;
  })
  .then((response) => {
    if (!response.ok) throw new Error(response.statusText);
    return response;
  })
  .then((response) => response.json())
  .then((response) => console.log("Success:", JSON.stringify(response)))
  .catch((error) => console.error("Error:", error));

function handleErrors(response) {
  if (!response.ok) throw new Error(response.statusText);
  return response;
}

function parseJSON(response) {
  return response.json();
}
