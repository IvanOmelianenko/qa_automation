import fetch from "node-fetch";

async function get(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (e) {
    console.log("Wrong GET Request", e);
  }
}

async function post(url, body) {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    const data = await response.json();
    return data;
  } catch (e) {
    console.log("Wrong POST request", e);
  }
}

export { get, post };
