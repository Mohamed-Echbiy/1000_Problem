function CreateObject(userName, age) {
  this.user = userName;
  this.age = age;
}
CreateObject.sorry = "Sorry";

console.log(CreateObject.sorry);
CreateObject.prototype.sayHello = () => {
  console.log(`hello ${this.user}`);
};

const user_2 = new CreateObject("lila", 20);

console.log(user_2);
user_2.sayHello();
CreateObject.prototype.changeName = function (newName) {
  this.user = newName;
};
const user = new CreateObject("Nan", 32);
console.log(user, "user");
user.changeName("Medox");
console.log(user, "user changed");
