function greeter(person: string) {
  return "Hello, " + person;
}

let user = ["Jane User", "John Smith"];

user.forEach(name => {
  console.log(greeter(name));
});