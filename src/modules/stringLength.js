exports.stringLength = (string) => {

  if(string.length >= 1 && string.length <= 10) {
    return string.length
  }

  return "string must be betewen 1 and 10"

}
