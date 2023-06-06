const btn = document.querySelector('.btn'); // кнопка для нового поста

const inputTitle = document.getElementById("1"); // input для ввода заголовка поста
const inputBody = document.getElementById("2"); // input для ввода основного текста


btn.onclick = function (event) {//Добавляем пост на страницу

  event.preventDefault();

  let newPost = {// помещаем в массив значения из инпутов 
    title: inputTitle.value,
    body: inputBody.value,
  };

  fetch("https://jsonplaceholder.typicode.com/posts", {

    method: "POST",
    body: JSON.stringify(newPost),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((newPost) => {

      let newPostText = "";
      newPostText = `<h2 class="post-title">${newPost.title}</h2>
      <p class="post_body">${newPost.body}</p>`;// создаем новый пост со значениями из value

      document.querySelector('.posts').innerHTML = newPostText; // помещаем новый пост в основной контейнер
      inputTitle.value = " ";
      inputBody.value = " ";
    });

}


fetch("https://jsonplaceholder.typicode.com/posts") /// Получаем с сервера список постов и отображаем их на странице
  .then((response) => response.json())
  .then(posts => posts.forEach((item) => {

    const posts = document.querySelector('.posts'); // основной контейнер для постов

    const titlePost = document.createElement('h2'); // контейнер для зоголовка поста
    titlePost.className = "post-title";
    titlePost.textContent = `${item.title}`;

    const bodyPost = document.createElement('p'); // контейнер для текста поста
    bodyPost.className = "post-body";
    bodyPost.textContent = `${item.body}`;

    posts.appendChild(titlePost);
    posts.appendChild(bodyPost);

  }))