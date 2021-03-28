export default function (nums: number[], target: number) {
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] + nums[i + 1] === target) {
      return [i, i + 1];
    }
  }
}
