import { usePottery } from "./potteryCatalog.js";

export const potteryList = () => {
    let html = "";
    const pottery = usePottery();
    
    for (const pot of pottery) {
        html += `<div class="pottery">
            <h2>${pot.shape}</h2>
            <p>Weight: ${pot.weight}</p>
            <p>Height: ${pot.height}</p>
            <p>Price: $${pot.price}</p>
        </div>`;
    }
    
    return html;
};