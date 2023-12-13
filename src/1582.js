var numSpecial = function (mat) {
  let counter = 0
  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[i].length; j++) {
      if (mat[i][j] === 1) {
        let row = mat[i].reduce((acc, curr) => acc + curr, 0)
        let col = mat.reduce((acc, curr) => acc + curr[j], 0)
        if (row === 1 && col === 1) {
          counter++
        }
      }
    }
  }
  return counter
}

const example = [
  [1, 0, 0],
  [0, 0, 1],
  [1, 0, 0],
]

console.log(numSpecial(example))
