const { API } = require("../backend");

export const signup = (user) => {
  // console.log("user", user);
  return fetch(`${API}/signup`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((response) => response.json())
    // .then((text) => console.log(text));
  .catch((error) => console.log(error));
};

export const signin = (user) => {
  console.log(user);
  return fetch(`${API}/signin`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((response) => response.text())
    // .then((text) => console.log(text))
    .catch((error) => error.json());
};
