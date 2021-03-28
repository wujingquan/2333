import twoSum from "./two-sum";

test("two sum test", () => {
  expect(twoSum([3, 2, 3], 6)).toBe([0, 2]);
});

test("two sum test", () => {
  expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
});
