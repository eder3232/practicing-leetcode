var countCharacters = function (words, chars) {
  let count = 0
  for (let word of words) {
    let copy = chars
    let arr = copy.split('')
    let letters = word.split('')

    let flag = true

    for (let letter of letters) {
      if (arr.includes(letter)) {
        arr.splice(arr.indexOf(letter), 1)
      } else {
        flag = false
        break
      }
    }
    if (flag) {
      count += word.length
    }
  }
  return count
}

console.log(countCharacters(['cat', 'bt', 'hat', 'tree'], 'atach'))
