// You are given an array of non-overlapping intervals intervals where intervals[i] = [starti, endi] represent the start and the end of the ith interval and intervals is sorted in ascending order by starti. You are also given an interval newInterval = [start, end] that represents the start and end of another interval.

// Insert newInterval into intervals such that intervals is still sorted in ascending order by starti and intervals still does not have any overlapping intervals (merge overlapping intervals if necessary).

// Return intervals after the insertion.

// Note that you don't need to modify intervals in-place. You can make a new array and return it.
/*
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */

const insert = (intervals, newInterval) => {
  res = [];
  n = intervals.length;

  let i = 0;
  while(i < n && intervals[i][1] < newInterval[0]){
    res.push(intervals[i]);
    i += 1;
  }
  while(i < n && intervals[i][0] <= newInterval[1]){
    newInterval[0] = Math.min(intervals[i][0], newInterval[0]);
    newInterval[1] = Math.max(intervals[i][1], newInterval[1]);
    i += 1;
  }

  res.push(newInterval);
  
  return [...res, ...intervals.slice(i) ];
};

let ans = insert([[1,3],[6,9]], [4,5]);
console.log(ans)

