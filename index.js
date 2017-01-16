function shout(string) {
  return string.toUpperCase()
}

function whisper(word) {
  return word.toLowerCase()
}

function logWhisper(word) {
  console.log(word.toLowerCase())
}

function logShout(word) {
  console.log(word.toUpperCase())
}

function sayHiToGrandma(word) {
  if (word === "I love you, Grandma.") {
    return 'I love you, too.'
  } else if (word === word.toLowerCase()){
return 'I can\'t hear you!';
  } else if (word === word.toUpperCase()){
return 'YES INDEED!';
  }
}
