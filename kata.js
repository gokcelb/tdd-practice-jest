function greetOnePerson(name) {
  if (name === name.toUpperCase()) {
    console.log('uppercase hello name');
    return `HELLO ${name}!`
  } else {
    console.log('first lline of requirementtt');
    return `Hello, ${name}.`
  }
}

function greetMultiplePeople(names) {
  const standardNames = names.filter(name => name.toUpperCase() !== name && !name.includes(','));
  const uppercaseNames = names.filter(name => name.toUpperCase() === name);
  const withCommaNames = names.filter(name => name.includes(',') && !name.includes('"'));
  withCommaNames.forEach(name => standardNames.push(...name.split(', ')));
  const withQuoteNames = names.filter(name => name.includes('"'));
  withQuoteNames.forEach(name => standardNames.push(name.replace(/\"/g,'')));

  const greetingsforUppercase = uppercaseNames.map(name => ` AND HELLO ${name}!`);
  const uppercaseGreetings = greetingsforUppercase.join(' ');

  const isOxford = standardNames.length > 2
  const lastName = standardNames.pop()
  const standardGreetings = `${standardNames.join(', ')}${isOxford ? ',' : ''} and ${lastName}`

  return `Hello, ${standardGreetings}.${uppercaseGreetings}`
}

function greet(name) {
  if (!name) {
    console.log('nulll');
    return 'Hello, my friend.'
  }

  if (typeof name === 'string') {
    return greetOnePerson(name);
  } else if (Array.isArray(name)) {
    return greetMultiplePeople(name);
  }
}

exports.greet = greet