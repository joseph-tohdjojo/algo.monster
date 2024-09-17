/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
export function twoSum(nums, target) {
  const hashMap = {};

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    let complement = target - num;
    let complementIndex = hashMap[complement];
    if (complementIndex !== undefined) {
      return [complementIndex, i];
    }
    hashMap[num] = i;
  }
}
