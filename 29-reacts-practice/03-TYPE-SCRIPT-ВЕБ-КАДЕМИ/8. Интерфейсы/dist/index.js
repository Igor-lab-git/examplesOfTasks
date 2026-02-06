"use strict";
// --------------------
// Интерфейсы
// --------------------
const authorJohn = {
    name: 'John',
    avatar: 'john.jpg',
    age: 30,
};
const newPost = {
    title: 'New post',
    body: 'some text',
    tags: 'news, tech',
    create_at: new Date(),
    author: authorJohn,
};
// ---------------
// Интерфейс как тип аргументов в функции
// ---------------
function createPost(post) {
    console.log(`Created post ${post.title} by ${post.author.name}`);
}
createPost(newPost);
// ---------------
// Интерфейсы с массивами
// ---------------
let posts = [];
posts.push(newPost);
posts.push({
    body: "sadasdasd",
    title: "Title",
    tags: "tag1",
    create_at: new Date(),
    author: authorJohn
});
console.log(posts);
