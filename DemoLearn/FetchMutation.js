const okUrl = "http://localhost:3000/photos";
fetch(okUrl)
  .then((response) => {
    console.log(response);
    return response;
  })
  .then(handleErrors)
  .then(parseJSON)
  .then((data) => console.log(data))
  .catch((error) => console.log(error));

//POST with Fetch
var url = "http://localhost:3000/photos";
var data = {
  albumId: 501,
  title: "Another Photo",
  url: "https://via.placeholder.com/600/b0f7cc",
  thumbnailUrl: "https://via.placeholder.com/150/b0f7cc",
};

fetch(url, {
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

/*
  //PUT with Fetch
var findUrl = "http://localhost:3000/photos/501";
// const notFoundErrorUrl = "http://localhost:3000/photos/10000000";

var data = {
  title: "Another Updated Photo",
};

fetch(findUrl, {
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
//DELETE with Fetch
var deleteUrl = "http://localhost:3000/photos/501";

fetch(deleteUrl, {
  method: "DELETE",
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
*/

function handleErrors(response) {
  if (!response.ok) throw new Error(response.statusText);
  return response;
}

function parseJSON(response) {
  return response.json();
}
