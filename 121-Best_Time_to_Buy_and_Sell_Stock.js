/**
You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
 */
//


function maxProfit(prices){
    let left = 0;
    let right = 1;
    let profit = 0;
    if (prices.length < 2){
        return 0;
    }
    while(right < prices.length){
        if(prices[left] < prices[right]){
            let temp = prices[right] - prices[left];
            if(profit < temp){
                profit = temp;
            }
        }else{
            left = right;
        }
        right += 1;
    }
    return profit;
}

const prices = [4,1,5,3,6,7]
console.log(maxProfit(prices));

/**
We keep track of the minimum price so far, and for each day, we compute the profit if we sell today.
 * 
 */
function maxProfit2(prices){
    let minPrice = Infinity;
    let maxProfit = 0;
    for (const price of prices){
        minPrice = Math.min(minPrice, price);
        maxProfit = Math.max(maxProfit, price - minPrice);
    }
    return maxProfit;
}
