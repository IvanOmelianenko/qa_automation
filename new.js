import * as request from "./api_helper/api_helper.js";
const baseUrl = "https://jsonplaceholder.typicode.com/posts/";
async function getPostsByUsedId(url, userId) {
  try {
    const posts = await request.get(url);
    const filteredPosts = posts
      .filter((post) => post.userId === userId)
      .map(({ title, ...rest }) => rest);

    return filteredPosts;
  } catch (e) {
    console.error("Error while fetching posts:", e);
  }
}

const posts = await getPostsByUsedId(baseUrl, 5);

console.log(posts);

/* 3. Реалізувати функцію createNewPost, яка буде створювати новий пост на ресурсі https://jsonplaceholder.typicode.com/posts */
const body = {
  userId: 155,
  title: "New title",
  body: "New body",
};
async function createNewPost(url, body) {
  // Ваш код
  try {
    const response = await fetch(url, {
      method: "post",
      body: JSON.stringify(body),
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
    return data;
  } catch (e) {
    console.log("Error creating new post", e);
  }
}

const result = await createNewPost(baseUrl, body);
console.log(result); // повинен буди респонс у вигляді { userId: 155, title: 'New title', body: 'New body', id: 101 }

// Використовуючи синтаксис промісів створити функцію, яка генерує рандомне число від 0 до 10 та з затримкою в 3 секунди
// резолвить проміс з результатом "Resolved <число>" у випадку, якщо число більше 5ти, або повертає reject з
// результатом "Rejected <число>", якщо число меньше 5ти. Reject обробити через catch. */

function resolveNumber() {
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  let random = getRandomInt(0, 10);

  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (random > 5) {
        resolve(`Resolved ${random}`);
      } else {
        reject(`Rejected ${random}`);
      }
    }, 3000);
  });

  return promise;
}

resolveNumber()
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  }); //далі обробка промісу, в консолі або, наприклад, Resolved 7, або Rejected 2 (в залежності від рандомно створенного числа)
