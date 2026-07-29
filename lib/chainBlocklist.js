// lib/chainBlocklist.js
// Starter list of well-known national/regional restaurant, bar, and cafe
// chains — used as the first (free, fast) pass in lib/chainDetection.js
// before falling back to an LLM call.
//
// This is deliberately a starting point, not exhaustive. Whether a small
// multi-location Chicago chain (e.g. Portillo's, Lou Malnati's, Potbelly —
// all included below since they now operate well beyond one neighborhood)
// counts as "local" is a judgment call; review and adjust this list as
// mismatches come up in admin review.

const CHAIN_BLOCKLIST = [
  // Burgers / fast food
  "McDonald's", "Burger King", "Wendy's", "Culver's", "Five Guys", "In-N-Out Burger",
  "Whataburger", "White Castle", "Shake Shack", "Steak 'n Shake", "Sonic Drive-In",
  "Jack in the Box", "Carl's Jr", "Hardee's", "Freddy's Frozen Custard",

  // Chicken
  "KFC", "Popeyes", "Chick-fil-A", "Church's Chicken", "Raising Cane's", "Zaxby's",
  "Bojangles",

  // Sandwiches / fast casual
  "Subway", "Jimmy John's", "Jersey Mike's", "Firehouse Subs", "Potbelly",
  "Panera Bread", "Chipotle Mexican Grill", "Qdoba", "Moe's Southwest Grill",
  "Panda Express", "Noodles & Company", "sweetgreen", "CAVA",

  // Tacos / Mexican
  "Taco Bell", "Del Taco", "El Pollo Loco",

  // Pizza
  "Domino's Pizza", "Pizza Hut", "Papa John's", "Little Caesars", "Marco's Pizza",
  "Papa Murphy's", "Giordano's", "Lou Malnati's", "Portillo's",

  // Casual / family dining
  "Applebee's", "Chili's", "TGI Fridays", "Olive Garden", "Red Lobster",
  "Outback Steakhouse", "Buffalo Wild Wings", "Texas Roadhouse", "Cracker Barrel",
  "Denny's", "IHOP", "Perkins", "Bob Evans", "Ruby Tuesday", "Golden Corral",
  "The Cheesecake Factory", "P.F. Chang's", "Bonefish Grill", "Carrabba's Italian Grill",
  "LongHorn Steakhouse", "Red Robin", "Hooters", "Twin Peaks", "Dave & Buster's",
  "BJ's Restaurant & Brewhouse", "Yard House", "World of Beer", "Miller's Ale House",
  "Portillo's Hot Dogs",

  // Coffee / cafe
  "Starbucks", "Dunkin'", "Peet's Coffee", "Caribou Coffee", "Tim Hortons",
  "Dutch Bros Coffee",

  // Dessert / bakery
  "Baskin-Robbins", "Cold Stone Creamery", "Dairy Queen", "Krispy Kreme",

  // Breakfast
  "First Watch", "Another Broken Egg Cafe",
];

module.exports = CHAIN_BLOCKLIST;
