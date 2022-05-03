exports.capitalizeString = (string) => {
  if (string.length === 0) {
    return "Your string must contain one character"
  } else if (typeof(string) !== "string") {
        return "Not a string";
  } else if (string.length === 1 ) {
    return string.toUpperCase()
  }
  const firstCar = string[0].toUpperCase()
  string = string.slice(1,string.length).toLowerCase()
  return [firstCar,...string].join('')

}
