function sayHello(name) {
  const message = 'Hello, ' + name;
  console.log(message);
  
  if (name === 'World') {
    console.log('Welcome!');
  // MISSING: }
  }
  
  return message;
}

sayHello('World');