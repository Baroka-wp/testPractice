exports.capitalizeString = (string) => {

  const firstCar = string[0].toUpperCase()
  string = string.slice(1,string.length).toLowerCase()
  return [firstCar,...string].join('')

}
