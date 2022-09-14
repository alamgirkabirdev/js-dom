console.log('I am from sumary js file');

const blogs = document.getElementsByTagName('p');
// console.log(blogs);
for(const blog of blogs){
// console.log(blogs);
blog.style.backgroundColor = 'steelblue';
blog.style.color = 'white';

}
const lorem =document.getElementById('special-blog');
lorem.innerText = 'new lorem'
// lorem.innerHTML = ^
// <h4> special inner HTML</h4>
// ^

const friends = document.getElementById('friends');
// console.log(friends.children);
const fifth = friends.children[4];
console.log(fifth);
friends.removeChild(fifth);

// create element
const friend = document.createElement('li');
friend.innerText = 'Friend-11';
friends.appendChild(friend)