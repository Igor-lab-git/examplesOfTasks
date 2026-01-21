// --------------------
// Интерфейсы
// --------------------

/*
Интерфейсы (interfaces) в TypeScript — это способ определить форму (структуру) объекта, описав, какие свойства и методы он должен иметь.
interface — это конструкция, которая задаёт контракт на объект: его поля, типы и методы.
*/

interface Author {
	name: string;
	avatar: string;
	age: number;
}

const authorJohn: Author = {
	name: 'John',
	avatar: 'john.jpg',
	age: 30,
};

interface Post {
	title: string;
	body: string;
	tags: string;
	create_at: Date;
	author: Author;
}

const newPost: Post = {
	title: 'New post',
	body: 'some text',
	tags: 'news, tech',
	create_at: new Date(),
	author: authorJohn,
};

// ---------------
// Интерфейс как тип аргументов в функции
// ---------------

function createPost(post: Post): void{
	console.log(`Created post ${post.title} by ${post.author.name}`);
}

createPost(newPost);

// ---------------
// Интерфейсы с массивами
// ---------------

let posts: Post[] = [];
posts.push(newPost);
posts.push({
	body: "sadasdasd",
	title: "Title",
	tags: "tag1",
	create_at: new Date(),
	author: authorJohn
});

console.log(posts);