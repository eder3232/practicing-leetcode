var reduce = function (nums, fn, init) {
  if (nums.length === 0) return init
  let acumulator = init

  for (let i = 0; i < nums.length; i++) {
    acumulator = fn(acumulator, nums[i])
  }
  return acumulator
}
