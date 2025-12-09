// Step 1: Create an array to hold pottery objects
let potteryForSell = [];

// Step 2: Export function that determines if pottery should be sold
export const toSellOrNotToSell = (pottery) => {
    
    // Step 5 & 6: Add price based on weight
    if (pottery.weight >= 6) {
        pottery.price = 40;
    } else {
        pottery.price = 20;
    }
    // Step 7: Only add price if pottery is NOT cracked
    if (pottery.cracked === false) {
        
        
        // Step 8: Add to array if not cracked
        potteryForSell.push(pottery);
    }
    
    // Step 9: Return the pottery object
    return pottery;
};

// Step 10: Export function that returns a copy of the array
export const usePottery = () => structuredClone(potteryForSell);


