'use strict'

const user = {
    name: 'Mango',
    age: 20,
    hobby: 'html',
    premium: true,
  };

user.mood = 'Happy';
user.hobby = 'Skydiving';
user.premium = false;

console.log(user);

for(const elem of Object.keys(user)){
   console.log(`${elem} : ${user[elem]}`);
}