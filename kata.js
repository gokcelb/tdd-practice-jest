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
  const uppercaseNames = []
  const withCommaNames = []
  names.forEach(name => {
    if (name === name.toUpperCase()) {
      uppercaseNames.push(name)
    } else if (name.includes(',')) {
      withCommaNames.push(name)
    }
  })

  if (uppercaseNames.length > 0 && withCommaNames.length === 0) {
    const greetingsforUppercase = [];
    for (let i = 0; i < uppercaseNames.length; i++) {
      names.splice(names.indexOf(uppercaseNames[i]), 1);
      greetingsforUppercase.push(`AND HELLO ${uppercaseNames[i]}!`);
    }
    let namesWithoutUppercase = names.join(', ');
    return `Hello, ${namesWithoutUppercase}. ${greetingsforUppercase}`
  } else if (uppercaseNames.length === 0 && withCommaNames.length > 0) {
    for (let i = 0; i < withCommaNames.length; i++) {
      names.splice(names.indexOf(withCommaNames[i]), 1);
      commaIndex = withCommaNames[i].indexOf(',');
      withCommaNames[i] = withCommaNames[i].substring(0, commaIndex + 1) + ' and' + withCommaNames[i].substring(commaIndex + 1, withCommaNames[i].length);
    }
    let namesWithoutCommas = names.join(', ');
    let withCommaNamesJoined = withCommaNames.join(', ')
    return `Hello, ${namesWithoutCommas}, ${withCommaNamesJoined}.`
  } else if (uppercaseNames.length === 0 && withCommaNames.length === 0) {
    let namesFirstItems = names.splice(0, names.length - 1);
    let namesLastItem = names.splice(names.length - 1);
    namesFirstItems = namesFirstItems.join(', ');
    console.log('length bigger than 0');
    return `Hello, ${namesFirstItems} and ${namesLastItem}.`
  }
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