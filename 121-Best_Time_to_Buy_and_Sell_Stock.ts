/**
You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
 */


//

function maxProfit(prices: number[]):number{
    if(prices.length < 2) return 0;
    let left: number = 0;
    let right: number = 1;
    let max_profit: number = 0;
    while(right < prices.length){

        if(prices[left] < prices[right]){
            let profit = prices[right] - prices[left];
            if(max_profit < profit){
                max_profit = profit;
            }
        }else{
            left = right;
        }
        right += 1;
    }
    
    return max_profit;
}

const prices = [7,1,5,3,6,4]
console.log(maxProfit(prices));