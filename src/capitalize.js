function capitalize(word) {
  return word[0].toUpperCase() + word.substr(1).toLowerCase();
}

function upcase(word) {
  return word.toUpperCase();
}

export { capitalize, upcase };
