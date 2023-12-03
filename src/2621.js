// Sleepasync function sleep(millis) {

async function sleep(millis) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(millis)
    }, millis)
  })
}

console.log(sleep(10000).then((res) => console.log(res)))
