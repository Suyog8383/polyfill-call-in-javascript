let obj = { name: "suyog" };
const greeting = function (a, b) {
  return a + this.name + b;
};

Function.prototype.myCall = function (scope, ...args) {
  scope._this = this;
  return scope._this(...args);
};

console.log(greeting.myCall(obj, "hello ", ", How are you?"));
console.log(greeting.call(obj, "hello ", ", How are you?"));
