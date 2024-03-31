const okUrl = "http://localhost:3000/photos/501";
const notFoundErrorUrl = "https://httpstat.us/404";
const forbiddenErrorUrl = "https://httpstat.us/403";
const serverErrorUrl = "https://httpstat.us/500";

var data = {
  id: "dcf2",
  albumId: 501,
  title: "Another Photo 123",
  url: "https://via.placeholder.com/600/b0f7cc",
  thumbnailUrl: "https://via.placeholder.com/150/b0f7cc",
};

fetch(okUrl, {
  method: "PUT",
  body: JSON.stringify(data),
  headers: {
    "Content-Type": "application/json",
  },
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
