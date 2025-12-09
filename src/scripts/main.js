// Imports go first
import { makePottery } from "./potteryWheel.js";
import { firePottery } from "./kiln.js";
import { toSellOrNotToSell } from "./potteryCatalog.js";
import { potteryList } from "./potteryList.js";
const potteryHTMLElement = document.querySelector("#pottery-list");

// Make 5 pieces of pottery at the wheel
const mug = makePottery("mug", 2, 4);


const platter = makePottery("platter", 5, 1);


const vase = makePottery("vase", 7, 12)


const bowl = makePottery("bowl", 2, 3)


const jar = makePottery("jar", 6, 8)


// Fire each piece of pottery in the kiln
const firedMug = firePottery(mug, 2000);

const firedPlatter = firePottery(platter, 2100);

const firedVase = firePottery(vase, 2200);

const firedBowl = firePottery(bowl, 2500); // TOO HOT - will crack!

const firedJar = firePottery(jar, 2150);

// Determine which ones should be sold, and their price
toSellOrNotToSell(firedMug);
toSellOrNotToSell(firedPlatter);
toSellOrNotToSell(firedVase);
toSellOrNotToSell(firedBowl);
toSellOrNotToSell(firedJar);


// Invoke the component function that renders the HTML list
potteryHTMLElement.innerHTML = potteryList();
 

