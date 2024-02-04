import { QueryClient } from "react-query";

import { NavigateFunction } from "react-router-dom";

// Checks the session storage and sends a request to the server and get the current sessioned user

export async function getCurrentSessionUser() {
  try {
    const sessionJWTToken = sessionStorage.getItem("jwt");

    const response = await fetch(
      "http://127.0.0.1:3000/api/users/isauthenticated",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${sessionJWTToken}`,
        },
      }
    );

    const currentUser = await response.json();

    return currentUser;
  } catch (err) {
    console.log(err);
  }
}

// Denies access to unauthorized users.

export async function getUserAndAuthenticate(
  email: string,
  password: string,
  navigate: NavigateFunction
) {
  try {
    const bodyContent = {
      email,
      password,
    };

    const res = await fetch("http://127.0.0.1:3000/api/users/login", {
      method: "POST",
      body: JSON.stringify(bodyContent),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const user = await res.json();

    console.log(user);

    if (user.status === "failed") alert("Invalid email or password");

    if (user.status === "success") {
      sessionStorage.setItem("jwt", user.token);
      navigate("/");
    }
  } catch (err) {
    return console.log(err);
  }
}

export function logout(
  navigate: NavigateFunction,
  options: { replace: boolean },
  query: QueryClient
) {
  sessionStorage.clear();
  query.invalidateQueries("*");
  navigate("/login", options);
}
