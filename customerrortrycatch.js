class Validation extends Error {
  constructor(message) {
    super(message);
    this.name = 'ValidationError';
  }
}

let json = '{"age": 30}';

try {
  let user = JSON.parse(json);

  if (!user.name) {
    throw new Validation("'name' is required.");
  }

  if (!user.age) {
    throw new Validation("'age' is required.");
  }

  console.log(user.name);
  console.log(user.age);
} catch (error) {
  if (error instanceof SyntaxError) {
    console.log(`JSON syntact error ${error.message}`);
  } else if (error instanceof Validation) {
    console.log(`Invalid data: ${error.message}`);
  } else if (error instanceof ReferenceError) {
    console.log(error.message);
  } else {
    console.log(error.stack);
  }
}
