const sunday = [
  {
    name: "High Noon Saloon",
    address: "Wicker Park @ 1560 N Milwaukee Ave",
    specials: "$5 Frozen Margaritas, $5 Old Forester Bourbon Shots",
    specials_url: "https://smalltabs.com/details.php?id=601",
  },
  {
    name: "Jack & Gingers",
    address: "Bucktown @ 2048 W Armitage Ave",
    specials: "$4 Well Drinks, $2 off Bulleit Whiskey, $5 Jack & Gingers",
    specials_url: "https://smalltabs.com/details.php?id=50",
    food_specials: "$6 Fish & Chips",
    food_specials_url: "https://smalltabs.com/details.php?id=50",
  },
  {
    name: "The Other Side Bar",
    address: "Lincoln Park @ 2436 N Clark St",
    specials: "$5 Moscow Mules",
    specials_url: "https://smalltabs.com/details.php?id=192",
  },
  {
    name: "Havana",
    address: "River North @ 412 N Clark St",
    specials: "$20 House Mojito Pitchers",
    specials_url: "https://smalltabs.com/details.php?id=417",
  },
  {
    name: "Bridget McNeill's Bar & Kitchen",
    address: "Lakeview @ 420 W Belmont Ave",
    specials: "$4.20 Draft Beers (5-7pm), $6 Wine Glasses (5-7pm)",
    specials_url: "https://smalltabs.com/details.php?id=347",
    food_specials: "$12.99 Large Pizzas (with drink purchase)",
    food_specials_url: "https://smalltabs.com/details.php?id=347",
  },
  {
    name: "Jefferson Tap & Grille",
    address: "Near West Side @ 325 N Jefferson St",
    specials:
      "$6 Sam Adams Boston Lager & Seasonal Jumbo Mugs, $5 Wine Glasses",
    specials_url: "https://smalltabs.com/details.php?id=302",
  },
  {
    name: "Lokal Wicker Park",
    address: "Wicker Park @ 1904 W North Ave",
    food_specials: "$10 Mussels & Truffle Fries",
    food_specials_url: "https://smalltabs.com/details.php?id=471",
  },
  {
    name: "Harbee Liquors & Tavern",
    address: "Pilsen @ 1345 W 18th St",
    specials: "$3 Budweiser & Miller Family Beers",
    specials_url: "https://smalltabs.com/details.php?id=548",
  },
  {
    name: "Crossroads Public House",
    address: "Lincoln Park @ 2630 N Clark St",
    specials:
      "$4 Fireball Whiskey Shots, $5 Featured Cocktails, $5 Three Olvie Vodka Bombs, $10 Long Island Iced Tea Pitchers",
    specials_url: "https://smalltabs.com/details.php?id=208",
  },
  {
    name: "Innjoy (Logan Square)",
    address: "Logan Square @ 2200 N Milwaukee Ave",
    specials:
      "$7 Martinis, $5 Pabst Blue Ribbon Tallboy & Hipster Whiskey Shot Combo",
    specials_url: "https://smalltabs.com/details.php?id=688",
    food_specials: "$7 Bruschette",
    food_specials_url: "https://smalltabs.com/details.php?id=688",
  },
  {
    name: "Cellars Bar & Grill",
    address: "Edgewater @ 5900 N Broadway St",
    specials: "$5 Sobieski Vodka Martinis (5-10pm)",
    specials_url: "https://smalltabs.com/details.php?id=620",
  },
  {
    name: "Bird's Nest",
    address: "Lincoln Park @ 2500 N Southport Ave",
    specials: "$4 Blue Line Pilsner, $5 Svedka Vodka Bombs, $5 Red Bull Bombs",
    specials_url: "https://smalltabs.com/details.php?id=6",
  },
  {
    name: "Toon's Bar & Grill",
    address: "Lakeview @ 3857 N Southport Ave",
    specials: "$1 off Stoli Vodka Cocktails, $4.50 Lagunitas Drafts",
    specials_url: "https://smalltabs.com/details.php?id=203",
    food_specials: "$10 House-Smoked Baby Back Ribs, $4.50 Po'boys",
    food_specials_url: "https://smalltabs.com/details.php?id=203",
  },
  {
    name: "The Abbey Pub",
    address: "Irving Park @ 3420 W Grace St",
    specials: "$4 Smithwicks, $4 Harp, $5 Jameson Black, $5 2 Gingers Whiskey",
    specials_url: "https://smalltabs.com/details.php?id=31",
    food_specials: "$9.95 Fish & Chips, Half Price Appetizers until 6pm",
    food_specials_url: "https://smalltabs.com/details.php?id=31",
  },
  {
    name: "Subterranean Lounge",
    address: "Wicker Park @ 2011 W North Ave",
    specials: "$5 UV Vodka Cocktails",
    specials_url: "https://smalltabs.com/details.php?id=56",
  },
  {
    name: "Links Taproom",
    address: "Wicker Park @ 1559 N Milwaukee Ave",
    food_specials: "$11 Fish Fry w/ Potato Pancake & Fries",
    food_specials_url: "https://smalltabs.com/details.php?id=568",
  },
  {
    name: "Edison Park Inn",
    address: "Edison Park @ 6715 N Olmsted Ave",
    specials: "$16 Domestic Bottles, $2 Shot of the Day",
    specials_url: "https://smalltabs.com/details.php?id=190",
  },
  {
    name: "6 Degrees",
    address: "Bucktown @ 1935 N Damen Ave",
    specials: "$5 Fireball Whiskey",
    specials_url: "https://smalltabs.com/details.php?id=225",
  },
  {
    name: "Declan's Irish Pub",
    address: "Near North Side @ 1240 N Wells St",
    specials: "$4 Select Craft Draft, $5 Jack Daniels Fire",
    specials_url: "https://smalltabs.com/details.php?id=365",
    food_specials: "$10 Fish & Chips",
    food_specials_url: "https://smalltabs.com/details.php?id=365",
  },
  {
    name: "Scot's Bar",
    address: "North Center @ 1829 W Montrose Ave",
    specials: "$3.50 Well Drinks, $3.50 Miller Lite Drafts",
    specials_url: "https://smalltabs.com/details.php?id=263",
  },
  {
    name: "The Roost Carolina Kitchen",
    address: "North Center @ 1467 W Irving Park Rd",
    specials: "$5 Boilermakers (9-11pm), 25% off Signature Cocktails (9-11pm)",
    specials_url: "https://smalltabs.com/details.php?id=672",
  },
  {
    name: "Allium",
    address: "Near North Side @ 120 E Delaware St",
    specials: "Half Price Select Spirits, Wines, & Draft Beers (4-6pm)",
    specials_url: "https://smalltabs.com/details.php?id=687",
    food_specials: "Half Price Bar Bites (4-6pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=687",
  },
  {
    name: "Kelsey's",
    address: "Lincoln Park @ 2265 N Lincoln Ave",
    specials: "$3.50 Curious Travelers, $3.50 Sam Adams, $5 Dublin Donkeys",
    specials_url: "https://smalltabs.com/details.php?id=154",
  },
  {
    name: "Moe's Tavern",
    address: "Avondale @ 2937 N Milwaukee Ave",
    specials:
      "$3 Pabst Blue Ribbon Drafts, $3 Malort Shots, $3 Zacharias Harris Bourbon, $3 Well Drinks, $3 Craft Beer of the Month",
    specials_url: "https://smalltabs.com/details.php?id=423",
  },
  {
    name: "Side Street Saloon",
    address: "Lakeview @ 1456 W George St",
    specials: "$3.25 Pabst Blue Ribbon Bottles",
    specials_url: "https://smalltabs.com/details.php?id=187",
    food_specials: "$5.50 Half Pound Cheeseburger & Fries",
    food_specials_url: "https://smalltabs.com/details.php?id=187",
  },
  {
    name: "Raw Bar & Grill",
    address: "Wrigleyville @ 3720 N Clark St",
    specials:
      "$2.50 Domestic Beers (4-7pm), $3.50 Craft Drafts (4-7pm), $3 Well Mixers (4-7pm)",
    specials_url: "https://smalltabs.com/details.php?id=205",
    food_specials: "Half Price Appetizers",
    food_specials_url: "https://smalltabs.com/details.php?id=205",
  },
  {
    name: "New Line Tavern",
    address: "West Loop @ 201 N Clinton St",
    specials: "$5 Goose Island Beers, $8 Signature Cocktails",
    specials_url: "https://smalltabs.com/details.php?id=301",
  },
  {
    name: "Atmosphere",
    address: "Andersonville @ 5355 N Clark St",
    specials: "$5 Fireball Whiskey Shots",
    specials_url: "https://smalltabs.com/details.php?id=96",
  },
  {
    name: "Dimo's Pizza",
    address: "Wicker Park @ 1615 N Damen Ave",
    food_specials:
      "$9 Pizza Slice, Bourbon Shot, & Pabst Blue Ribbon or Miller High Life Tallboy Combo",
    food_specials_url: "https://smalltabs.com/details.php?id=679",
  },
  {
    name: "Waterhouse Tavern",
    address: "Lakeview @ 3407 N Paulina St",
    specials: "$4 Fireball Whiskey, $15 Bud Light Buckets",
    specials_url: "https://smalltabs.com/details.php?id=212",
  },
  {
    name: "Hook & Ladder",
    address: "Lincoln Park @ 2270 N Lincoln Ave",
    specials:
      "$2.50 Domestic Bottles, $3 Import/Craft Bottles, $4 All Drafts, $3 Shots, $4 Bombs, $6 Wine Glasses, $6 Mimosas, $4 Well Drinks, $5 Call Drinks",
    specials_url: "https://smalltabs.com/details.php?id=593",
  },
  {
    name: "The Fireplace Inn",
    address: "Old Town @ 1448 N Wells St",
    specials: "$5 Skyy Vodka Bombs",
    specials_url: "https://smalltabs.com/details.php?id=442",
  },
  {
    name: "Hubbard Inn",
    address: "River North @ 110 W Hubbard St",
    food_specials:
      "$2 Raw Bar (selections include Shrimp, Lobster, Scallops, King Crab, & Oysters)",
    food_specials_url: "https://smalltabs.com/details.php?id=554",
  },
  {
    name: "The Atlantic Bar & Grill",
    address: "Lincoln Square @ 5062 N Lincoln Ave",
    specials: "$4 Wine Spritzers, $4 Stoli Vodka Drinks",
    specials_url: "https://smalltabs.com/details.php?id=101",
    food_specials: "$4 Crostini Menu",
    food_specials_url: "https://smalltabs.com/details.php?id=101",
  },
  {
    name: "Four Treys Tavern",
    address: "Roscoe Village @ 3333 N Damen Ave",
    specials:
      "$5.50 Bombs, $3.75 Well Drinks, $2.50 Pabst Blue Ribbon, $3.50 Old Style Tallboys, $4 Jameson Whiskey Shots, $3 Domestic Bottles, $4-4.50 Import Bottles",
    specials_url: "https://smalltabs.com/details.php?id=78",
  },
  {
    name: "Bulldog Ale House (Loyola)",
    address: "Rogers Park @ 6606 N Sheridan Rd",
    specials: "$5 Jameson Whiskey, $5 Guinness, $6 Irish Car Bomb",
    specials_url: "https://smalltabs.com/details.php?id=663",
    food_specials: "$10.99 All-You-Can-Eat Fish Fry",
    food_specials_url: "https://smalltabs.com/details.php?id=663",
  },
  {
    name: "Fireside Restaurant & Lounge",
    address: "Edgewater @ 5739 N Ravenswood Ave",
    specials: "$2.25 Pabst Blue Ribbon Tallboys",
    specials_url: "https://smalltabs.com/details.php?id=441",
    food_specials: "Complimentary Happy Hour Buffet (4-6pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=441",
  },
  {
    name: "Fado Irish Pub",
    address: "River North @ 100 W Grand Ave",
    specials:
      "$7 Old Fashioneds (5-9pm), $7 Manhattans (5-9pm), $7 Whiskey Sours (5-9pm), $5 Carlsberg Beer (5-9pm), $7 Red & White Wine Glasses (5-9pm)",
    specials_url: "https://smalltabs.com/details.php?id=583",
    food_specials: "$6 Select Snacks (5-9pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=583",
  },
  {
    name: "Standard Bar & Grill",
    address: "Wicker Park @ 1332 N Milwaukee Ave",
    specials: "$6 Ketel One Vodka Drinks",
    specials_url: "https://smalltabs.com/details.php?id=676",
    food_specials:
      "$20 After-Work Burger Deal (Cheeseburger with Fries, Domestic Bottles, & Well Drinks from 6-9pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=676",
  },
  {
    name: "Deuces & The Diamond Club",
    address: "Wrigleyville @ 3505 N Clark St",
    specials: "$12+ Seasonal Beer Flights",
    specials_url: "https://smalltabs.com/details.php?id=408",
  },
  {
    name: "O'Shaughnessy's Public House",
    address: "Lincoln Square @ 4557 N Ravenswood Ave",
    specials: "$5 Founders All-Day IPA",
    specials_url: "https://smalltabs.com/details.php?id=299",
    food_specials: "$10.95 All-You-Can-Eat Fish & Chips, $12.50 Fish Tacos",
    food_specials_url: "https://smalltabs.com/details.php?id=299",
  },
  {
    name: "Pasta Bowl Lincoln Square",
    address: "Lincoln Square @ 4343 N Lincoln Ave",
    specials: "$5 Moscow Mules",
    specials_url: "https://smalltabs.com/details.php?id=699",
  },
  {
    name: "Seven Lions",
    address: "Loop @ 130 S Michigan Ave",
    specials:
      "$9 Specialty Cocktails, $24 Select Wine Bottles (3-6pm), Half Price Featured Drafts (3-6pm)",
    specials_url: "https://smalltabs.com/details.php?id=683",
    food_specials:
      "$8 Hummus (3-6pm), $8 Pulled Pork Nachos (3-6pm), $8 Crispy Chicken Sliders (3-6pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=683",
  },
  {
    name: "Clover",
    address: "Near West Side @ 722 W Grand Ave",
    specials:
      "$5 Tullamore Dew Whiskey, $8 Pabst Blue Ribbon Tallboy & Jameson Whiskey Shot Combo, Half Price Drinks (5-7pm)",
    specials_url: "https://smalltabs.com/details.php?id=625",
  },
  {
    name: "Hawkeye's Bar & Grill",
    address: "University Village @ 1458 W Taylor St",
    specials: "$10 Domestic Bottles",
    specials_url: "https://smalltabs.com/details.php?id=30",
    food_specials: "$2 Pita Pizzas (after 3pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=30",
  },
  {
    name: "Edgewater Mexican Cafe",
    address: "Edgewater @ 1055 W Bryn Mawr Ave",
    specials: "$6 Wine Glasses, $6 Palomas, $6 House Margaritas (4-7pm)",
    specials_url: "https://smalltabs.com/details.php?id=711",
  },
  {
    name: "Commonwealth Tavern",
    address: "Roscoe Village @ 2000 W Roscoe St",
    specials: "$6 Craft Cocktails (4-7pm), $6 Moscow Mules, $6 Summer Sunsets",
    specials_url: "https://smalltabs.com/details.php?id=588",
    food_specials: "Half Price Appetizers (3-7pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=588",
  },
  {
    name: "Tavern 57",
    address: "Lincoln Park @ 1059 W Wrightwood Ave",
    specials:
      "$2 off Wine Glasses (4-8pm), $2 off Ciders (4-8pm), $3 off Well Drinks (4-8pm), $3 Michelob Ultra Bottles (4-8pm), $3 Blue Moon Bottles (4-8pm), $4 Chicago Craft Drafts (4-8pm)",
    specials_url: "https://smalltabs.com/details.php?id=24",
  },
  {
    name: "Tripoli Tap",
    address: "Lincoln Park @ 1147 W Armitage Ave",
    specials: "$3 Coors Light Bottles",
    specials_url: "https://smalltabs.com/details.php?id=450",
  },
  {
    name: "The Scout",
    address: "South Loop @ 1301 S Wabash Ave",
    specials: "$3 Sam Adams Boston Lager Drafts",
    specials_url: "https://smalltabs.com/details.php?id=451",
  },
  {
    name: "Finley Dunne's Tavern",
    address: "Lakeview @ 3458 N Lincoln Ave",
    specials: "$5 UV Vodka Bombs, $2 Miller High Life Drafts",
    specials_url: "https://smalltabs.com/details.php?id=5",
    food_specials: "$12 All-You-Can-Eat Blue Moon Fish Fry",
    food_specials_url: "https://smalltabs.com/details.php?id=5",
  },
  {
    name: "Weather Mark Tavern",
    address: "South Loop @ 1503 S Michigan Ave",
    specials: "$2 off All Drafts (3-6pm), $5 Lagunitas Beers",
    specials_url: "https://smalltabs.com/details.php?id=143",
    food_specials: "$12.50 All-You-Can-Eat Fish Fry",
    food_specials_url: "https://smalltabs.com/details.php?id=143",
  },
  {
    name: "The Monkey's Paw",
    address: "Lincoln Park @ 2524 N Southport Ave",
    specials:
      "$3 Rebel Yell Whiskey (4:30-6:30pm), $3 off All Drafts (4:30-6:30pm), $3 off All Wine Glasses (4:30-6:30pm)",
    specials_url: "https://smalltabs.com/details.php?id=453",
  },
  {
    name: "Cork Lounge",
    address: "Lakeview @ 1822 W Addison St",
    specials:
      "$2 Pabst Blue Ribbon Drafts, $4 Mimosas, $4 Apple Pie Shots, $5 Genessee Cream Ale & Jim Beam Shot Combo",
    specials_url: "https://smalltabs.com/details.php?id=326",
  },
  {
    name: "Twisted Shamrock",
    address: "Garfield Ridge @ 6462 S Central Ave",
    specials:
      "$3.50 Amstel Light, Heineken, or Shiner Bock, $3 Pinnacle Vodka O-Bombs",
    specials_url: "https://smalltabs.com/details.php?id=704",
  },
  {
    name: "Hopsmith Tavern",
    address: "Near North Side @ 15 W Division St",
    specials: "$6 Pabst Blue Ribbon & Jack Daniels Whiskey Shot Combo",
    specials_url: "https://smalltabs.com/details.php?id=607",
    food_specials: "Half Price Appetizers (4-6pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=607",
  },
  {
    name: "Park Tavern",
    address: "West Loop @ 1645 W Jackson Blvd",
    specials:
      "$5 Jameson Whiskey, $5 Select Wine Glasses, $3 Tallboy Cans (3-5pm), $4 Well Drinks (3-5pm), $4 House Wine Glasses (3-5pm), Half Price 16oz Drafts (3-5pm)",
    specials_url: "https://smalltabs.com/details.php?id=494",
    food_specials: "$15 All-You-Can-Eat Fish Fry (4pm-Close)",
    food_specials_url: "https://smalltabs.com/details.php?id=494",
  },
  {
    name: "Lincoln Tap Room",
    address: "Lakeview @ 3010 N Lincoln Ave",
    specials:
      "$4 Angry Orchard Cider, $5 Call & Premium Shots, $3 Two Brothers Outlaw IPA Cans, $3 Two Brothers Sidekick Citrus Ale Cans, $4.50 Three Olives Vodka Cocktails",
    specials_url: "https://smalltabs.com/details.php?id=334",
  },
  {
    name: "Franklin Tap",
    address: "Loop @ 325 S Franklin St",
    specials:
      "$5 Two Brothers Pale Frank Drafts, $5 Yukon Jack Wicked Hot Shots",
    specials_url: "https://smalltabs.com/details.php?id=135",
    food_specials: "$5 Select Appetizers (after 5pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=135",
  },
  {
    name: "Butcher's Tap",
    address: "Lakeview @ 3553 N Southport Ave",
    specials:
      "$5 Tullamore Dew Whiskey, Half Price Tito's Vodka Cocktails (4-6pm)",
    specials_url: "https://smalltabs.com/details.php?id=624",
  },
  {
    name: "Hangge-Uppe",
    address: "Near North Side @ 16 W Division St",
    specials: "$5 Bacardi Flavored Rum",
    specials_url: "https://smalltabs.com/details.php?id=84",
  },
  {
    name: "Flo & Santos",
    address: "South Loop @ 1310 S Wabash Ave",
    specials: "$18 Polish Vodka Flights",
    specials_url: "https://smalltabs.com/details.php?id=489",
  },
  {
    name: "Crossroads at House of Blues",
    address: "River North @ 329 N Dearborn St",
    specials:
      "Half Price Select Wine Bottles (3-6pm), $8 Pabst Blue Ribbon Can & Jameson Whiskey Shot Combo (3-6pm), $2 off Select Drafts (3-6pm)",
    specials_url: "https://smalltabs.com/details.php?id=619",
    food_specials: "Half Price Appetizers (3-6pm), $9.95 Fish & Chips (3-6pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=619",
  },
  {
    name: "Vintage Lounge",
    address: "University Village @ 1449 W Taylor St",
    specials: "$5 Martinis",
    specials_url: "https://smalltabs.com/details.php?id=650",
    food_specials: "Half Price Select Appetizers",
    food_specials_url: "https://smalltabs.com/details.php?id=650",
  },
  {
    name: "The Bedford",
    address: "Wicker Park @ 1612 W Division St",
    specials: "$8 Draft Cocktails",
    specials_url: "https://smalltabs.com/details.php?id=416",
  },
  {
    name: "Bootlegger's",
    address: "Near North Side @ 11 W Division St",
    specials:
      "$3 Southern Comfort, $3 Shellback Rum, $5 Wild Turkey Bourbon, $4 Miller Lite Drafts",
    specials_url: "https://smalltabs.com/details.php?id=66",
  },
  {
    name: "G&L Fire Escape",
    address: "North Center @ 2157 W Grace St",
    specials: "$3 Powers Whiskey Shots, $4 Wells",
    specials_url: "https://smalltabs.com/details.php?id=533",
  },
  {
    name: "Mojo Bar & Grill",
    address: "Irving Park @ 2958 W Irving Park Rd",
    specials: "$5 Well Vodka Drinks",
    specials_url: "https://smalltabs.com/details.php?id=643",
    food_specials: "$5 Fish & Chips",
    food_specials_url: "https://smalltabs.com/details.php?id=643",
  },
  {
    name: "Tuman's Tap & Grill",
    address: "Ukrainian Village @ 2159 W Chicago Ave",
    specials: "$3.50 Pabst Blue Ribbon Drafts",
    specials_url: "https://smalltabs.com/details.php?id=662",
  },
  {
    name: "Grandview Tavern",
    address: "West Loop @ 1202 W Grand Ave",
    specials:
      "$3 Hamms Cans, $5 Jameson Whiskey Shots, $5 Fireball Whiskey Shots",
    specials_url: "https://smalltabs.com/details.php?id=476",
    food_specials: "$9 Fish Tacos",
    food_specials_url: "https://smalltabs.com/details.php?id=476",
  },
  {
    name: "Village Tap Bar & Grill",
    address: "Roscoe Village @ 2055 W Roscoe St",
    specials:
      "$2.50 Pabst Blue Ribbon Cans, $4 Budweiser, Bud Light, Miller Lite, & Miller High Life Bottles",
    specials_url: "https://smalltabs.com/details.php?id=269",
  },
  {
    name: "Sluggers",
    address: "Wrigleyville @ 3540 N Clark St",
    specials:
      "$6 Goose Island Green Line Drafts, $6 Sam Adams Drafts, $6 Pinnacle Flavored Vodka Cocktails",
    specials_url: "https://smalltabs.com/details.php?id=53",
  },
  {
    name: "Dark Horse Tap & Grille",
    address: "Wrigleyville @ 3443 N Sheffield Ave",
    specials:
      "$5 Bomb Shots, $5 Stoli Vodka Cocktails, $4 Lagunitas Drafts, $3 Fireball Whiskey Shots",
    specials_url: "https://smalltabs.com/details.php?id=201",
  },
  {
    name: "Emerald Loop",
    address: "Loop @ 216 N Wabash Ave",
    specials: "$4.75 Beer of the Month",
    specials_url: "https://smalltabs.com/details.php?id=42",
    food_specials: "$14 Lobster Mac & Cheese, $12 Cajun Tilapia",
    food_specials_url: "https://smalltabs.com/details.php?id=42",
  },
  {
    name: "Decibel Bar",
    address: "Uptown @ 4437 N Broadway Ave",
    specials: "$2 House Shots, $4 Bacardi, $4 Mimosas",
    specials_url: "https://smalltabs.com/details.php?id=553",
  },
  {
    name: "Foundation Room at House of Blues",
    address: "River North @ 329 N Dearborn St",
    specials:
      "$6 Select Wine Glasses (5-7pm), $5 Well Drinks (5-7pm), $4 Domestic Beers (5-7pm)",
    specials_url: "https://smalltabs.com/details.php?id=622",
  },
  {
    name: "Harmony Grill",
    address: "Lakeview @ 3159 N Southport Ave",
    specials: "$4 Fireball Whiskey",
    specials_url: "https://smalltabs.com/details.php?id=242",
  },
  {
    name: "AliveOne",
    address: "Lincoln Park @ 2683 N Halsted St",
    specials: "$5 Jameson Shots, $3 Pabst Blue Ribbon Bottles",
    specials_url: "https://smalltabs.com/details.php?id=214",
  },
  {
    name: "Pasta Bowl Wicker Park",
    address: "Wicker Park @ 1852 W North Ave",
    specials: "$5 Moscow Mules",
    specials_url: "https://smalltabs.com/details.php?id=638",
  },
  {
    name: "Sports Corner Bar & Grill",
    address: "Wrigleyville @ 956 W Addison St",
    specials: "$5 You-Call-Its",
    specials_url: "https://smalltabs.com/details.php?id=328",
    food_specials: "$2 Sliders",
    food_specials_url: "https://smalltabs.com/details.php?id=328",
  },
  {
    name: "Gaslight Bar & Grille",
    address: "Lincoln Park @ 2450 N Clark St",
    specials:
      "$15 Domestic Buckets, $5 Tullamore Dew Whiskey Shots, $5 Trop Bombs, $3.50 College Beer of the Day",
    specials_url: "https://smalltabs.com/details.php?id=358",
    food_specials:
      "Free Burgers (with beverage purchase, limited quantities), Half Price Appetizers (5-7pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=358",
  },
  {
    name: "Tai's Til 4",
    address: "Lakeview @ 3611 N Ashland Ave",
    specials: "$7 Flagship Bombs",
    specials_url: "https://smalltabs.com/details.php?id=549",
  },
  {
    name: "Will's Northwoods Inn",
    address: "Lakeview @ 3030 N Racine Ave",
    specials:
      "$4 Sierra Nevada Drafts, $3 Schiltz Tallboys, $2.50 Pabst Blue Ribbon, $3 Miller High Life Bottles",
    specials_url: "https://smalltabs.com/details.php?id=77",
    food_specials: "$12.95 All-You-Can-Eat Fish Fry",
    food_specials_url: "https://smalltabs.com/details.php?id=77",
  },
  {
    name: "Boiler Room",
    address: "Logan Square @ 2210 N California Ave",
    food_specials:
      "$10 PB&J Special: Pizza Slice, Pabst Blue Ribbon Tallboy, & Jameson Whiskey Shot Combo",
    food_specials_url: "https://smalltabs.com/details.php?id=333",
  },
  {
    name: "Mrs. Murphy & Sons Irish Bistro",
    address: "North Center @ 3905 N Lincoln Ave",
    specials:
      "$5 Specialty Irish Cocktails (4:30-6:30pm), $5 Irish Beers (4:30-6:30pm)",
    specials_url: "https://smalltabs.com/details.php?id=651",
    food_specials: "$5 Appetizer Bites (4:30-6:30pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=651",
  },
  {
    name: "Crown Liquors",
    address: "Logan Square @ 2821 N Milwaukee Ave",
    specials: "$5 Craft Beers, $7 Cocktails",
    specials_url: "https://smalltabs.com/details.php?id=591",
  },
  {
    name: "Longman & Eagle",
    address: "Logan Square @ 2657 N Kedzie Ave",
    specials:
      "$2 Old Milwaukee & Pabst Blue Ribbon Cans, $3 Old Style Drafts, $3 Select Whiskey Shots",
    specials_url: "https://smalltabs.com/details.php?id=348",
  },
  {
    name: "Emmit's Irish Pub",
    address: "West Loop @ 495 N Milwaukee Ave",
    specials: "$4 Fireball Whiskey",
    specials_url: "https://smalltabs.com/details.php?id=487",
    food_specials: "$8.95 Fish & Chips",
    food_specials_url: "https://smalltabs.com/details.php?id=487",
  },
  {
    name: "20 East",
    address: "Near North Side @ 20 E Delaware St",
    specials:
      "$3 Domestic Beers (3-6pm), $4 Absolut Vodka Mixed Drinks (3-6pm), $5 Select Wine Glasses (3-6pm)",
    specials_url: "https://smalltabs.com/details.php?id=661",
    food_specials: "$7 Mini Burgers, $7 Hummus, $7 Truffle Fries, $7 Brussels",
    food_specials_url: "https://smalltabs.com/details.php?id=661",
  },
  {
    name: "Butch McGuires",
    address: "Near North Side @ 20 W Division St",
    specials:
      "$5 Sam Adams Lager Drafts, $5 Sam Adams Seasonal Drafts, $4 Mystery Shots, Half Price Drafts (5-7pm), Half Price Mixed Drinks (5-7pm), Half Price Wine (5-7pm)",
    specials_url: "https://smalltabs.com/details.php?id=617",
  },
  {
    name: "Sherry's Bar",
    address: "West Rogers Park @ 5652 N Western Ave",
    specials:
      "$5 Long Island Iced Teas, $9 Old Style Buckets, $13 Miller Lite Buckets",
    specials_url: "https://smalltabs.com/details.php?id=645",
  },
  {
    name: "Nola Gastropub",
    address: "Lakeview @ 3481 N Clark St",
    specials:
      "$3.50 Founders All Day IPA, $3.50 Founders Rubaeus, $4 Beer of the Month",
    specials_url: "https://smalltabs.com/details.php?id=642",
  },
  {
    name: "Holiday Club",
    address: "Uptown @ 4000 N Sheridan Rd",
    specials:
      "$5 Svedka Vodka Drinks, $5 Grape, Cherry, & Blueberry Bombs, $4.50 Pabst Blue Ribbon 24oz Tallboys",
    specials_url: "https://smalltabs.com/details.php?id=179",
    food_specials: "$5 Chicken Sandwich",
    food_specials_url: "https://smalltabs.com/details.php?id=179",
  },
  {
    name: "Jake Melnick's Corner Tap",
    address: "Near North Side @ 41 E Superior St",
    specials: "$5.50 Krombacher Pils",
    specials_url: "https://smalltabs.com/details.php?id=311",
  },
  {
    name: "Avenue Tavern",
    address: "Lakeview @ 2916 N Broadway St",
    specials:
      "$10 Miller Lite Pitchers, $16 Margarita Pitchers, $16 Long Island Iced Tea Pitchers",
    specials_url: "https://smalltabs.com/details.php?id=170",
  },
  {
    name: "Mad River Bar & Grille",
    address: "Lakeview @ 2909 N Sheffield Ave",
    food_specials: "Half Price Appetizers (5-8pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=317",
  },
  {
    name: "Pitchfork Food & Saloon",
    address: "Irving Park @ 2922 W Irving Park Road",
    specials: "$4 Goose Island Green Line, $6 Moscow Mules",
    specials_url: "https://smalltabs.com/details.php?id=234",
  },
  {
    name: "Headquarters Beercade River North",
    address: "River North @ 213 W Institute St",
  },
  {
    name: "Renaldi's After Dark",
    address: "Lakeview @ 2831 N Broadway St",
    specials: "$4 Guinness Bottles",
    specials_url: "https://smalltabs.com/details.php?id=504",
  },
  {
    name: "Delilah's",
    address: "Lincoln Park @ 2771 N Lincoln Ave",
    specials: "$3 Labatt Blue, $3 Maker's Mark Bourbon",
    specials_url: "https://smalltabs.com/details.php?id=26",
  },
  {
    name: "Clark Street Dog",
    address: "Lakeview @ 3040 N Clark St",
    specials:
      "$2 Bud Light Drafts, $3.50 Goose Island Drafts, $3.50 Lagunitas Drafts, $5 Picklebacks, $8 Mules",
    specials_url: "https://smalltabs.com/details.php?id=472",
  },
  {
    name: "Ph.D Pub",
    address: "University Village @ 1257 S Halsted St",
    specials:
      "$3.50 Goose Island Oktoberfest 12oz Mason Jar Drafts, $3 Pabst Blue Ribbon & Rolling Rock Tallboys, $3 Bud Light Drafts, $9 Bud Light Pitchers, $3.50 Tullamore Dew Shots, $4 Carlsberg Drafts, $4 Fireball Shots, $4 Apple Moonshine Shots, $6 Vodka Lemonades, $8 Ph.D Vodka Mules",
    specials_url: "https://smalltabs.com/details.php?id=570",
  },
  {
    name: "Kasey's Tavern",
    address: "Printers Row @ 701 S Dearborn St",
    specials:
      "$4 New Belgium Voodoo Ranger IPA Drafts, $4 Carlsburg Tallboys, $3 Hamm's Tallboys, $3 Coors Banquet Bottles",
    specials_url: "https://smalltabs.com/details.php?id=125",
  },
  {
    name: "Maxbar",
    address: "Lincoln Park @ 2247 N Lincoln Ave",
    specials: "$2 Fireball Whiskey Shots, $100 Fireball Whiskey Bottles",
    specials_url: "https://smalltabs.com/details.php?id=252",
  },
  {
    name: "Rudy's Bar & Grille",
    address: "Loop @ 69 E Madison St",
    food_specials:
      "$11.95 Fish & Chips, $12.95 Salmon Burgers, Half Price Appetizers (3-5pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=380",
  },
  {
    name: "Troquet River North",
    address: "River North @ 111 W Huron St",
    specials:
      "$4 Select Beers (4-7pm), $5 House Mixed Drinks (4-7pm), $6 House Red & White Wine Glasses (4-7pm)",
    specials_url: "https://smalltabs.com/details.php?id=649",
    food_specials:
      "Mimosa Brunch (10am-3pm), $4 Truffle Frites (4-7pm), $5 Salmon Rilette (4-7pm), $6 Croque Monsieur & Croque Végétarien (4-7pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=649",
  },
  {
    name: "Fifolet",
    address: "Wicker Park @ 1942 W Division St",
    specials:
      "$4 Lagunitas Sumpin' Easy Drafts (5-9pm), $3 Jameson Whiskey Shots (5-9pm)",
    specials_url: "https://smalltabs.com/details.php?id=695",
    food_specials: "$9 Half Po'Boy & Soup Special (5-9pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=695",
  },
  {
    name: "Devon Seafood Grill",
    address: "Near North Side @ 39 E Chicago Ave",
    food_specials:
      "$1 Oysters (4-7pm), $7.50 Appetizers (4-7pm, 9pm-Close), $2.50 Jumbo Shrimp Cocktail (4-7pm, 9pm-Close)",
    food_specials_url: "https://smalltabs.com/details.php?id=689",
  },
  {
    name: "Ravenswood Station Bar & Grill",
    address: "Lincoln Square @ 4709 N Damen Ave",
    specials:
      "$7 Call Vodka Mixed Drinks, $6.50 Guinness 20oz Drafts, $5.50 Fat Tire Drafts",
    specials_url: "https://smalltabs.com/details.php?id=100",
    food_specials: "$6.75 Fish & Chips, $7 Grilled Fish Tacos",
    food_specials_url: "https://smalltabs.com/details.php?id=100",
  },
  {
    name: "Streeter's Tavern",
    address: "Near North Side @ 50 E Chicago Ave",
    specials: "$5 Jim Beam Bourbon",
    specials_url: "https://smalltabs.com/details.php?id=72",
  },
  {
    name: "Rockwood Place",
    address: "Wrigleyville @ 3466 N Clark St",
    specials: "$3 Bud Light Drafts, $5 Flavored Bombs, $6 Margaritas",
    specials_url: "https://smalltabs.com/details.php?id=350",
    food_specials: "Half Price Pizzas",
    food_specials_url: "https://smalltabs.com/details.php?id=350",
  },
  {
    name: "DS Tequila Company",
    address: "Lakeview @ 3352 N Halsted St",
    specials: "$12 40oz Fiesta Bowls",
    specials_url: "https://smalltabs.com/details.php?id=573",
  },
  {
    name: "The Rambler Kitchen & Tap",
    address: "North Center @ 4128 N Lincoln Ave",
    specials:
      "$4 Hard Seltzers, $4 Select Drafts, $5 Skrewball Whiskey, $5 Corazon Tequila, $3 Domestic Beers (4-7pm), $3 Select Whiskeys (4-7pm), $5 House Wine Glasses (4-7pm)",
    specials_url: "https://smalltabs.com/details.php?id=589",
    food_specials: "$7 Ground Beef or Chicken Nacho Platters",
    food_specials_url: "https://smalltabs.com/details.php?id=589",
  },
  {
    name: "Knife & Tine",
    address: "Lincoln Park @ 1417 W Fullerton Ave",
    specials:
      "Half Price Draft Beers (3-6pm), Half Price Craft Cocktails (3-6pm), Half Price Wine Glasses (3-6pm)",
    specials_url: "https://smalltabs.com/details.php?id=640",
    food_specials: "$5 Bar Snacks (3-6pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=640",
  },
  {
    name: "Roscoe's Tavern",
    address: "Lakeview @ 3356 N Halsted St",
    specials:
      "$5 Jack Daniels Honey Shots, $5 Skyy Vodka Bombs, $15 Absolut Blue Hawaiian Pitchers, $15 Absolut Pink Lemonade Pitchers",
    specials_url: "https://smalltabs.com/details.php?id=173",
  },
  {
    name: "Hash House a Go Go",
    address: "Near North Side @ 1212 N State St",
    food_specials: "$14.95 Fried or Roasted Chicken Dinner",
    food_specials_url: "https://smalltabs.com/details.php?id=600",
  },
  {
    name: "GRK Bar",
    address: "Loop @ 400 S Wells St",
    specials: "$5 Shots, $1 off Select Drafts",
    specials_url: "https://smalltabs.com/details.php?id=621",
  },
  {
    name: "McGee's Tavern",
    address: "Lincoln Park @ 950 W Webster Ave",
    specials: "$3 Bud Light Drafts",
    specials_url: "https://smalltabs.com/details.php?id=21",
  },
  {
    name: "Pippin's Tavern",
    address: "Near North Side @ 806 N Rush St",
    specials:
      "$5.50 Malort, $5 Maestro Dobel Tequila, $4 Wondermint, $5 Revel Stoke Roasted Pecan Whiskey, $6 Don Q Gran Anejo Mules, $6 Bulldog Gin Rickeys",
    specials_url: "https://smalltabs.com/details.php?id=71",
  },
  {
    name: "O'Leary's Public House",
    address: "River North @ 541 N Wells St",
    specials: "$4.50 Corona Light Bottles",
    specials_url: "https://smalltabs.com/details.php?id=361",
  },
  {
    name: "The Drinkingbird",
    address: "Lincoln Park @ 2201 N Clybourn Ave",
    specials: "$5 Schlitz & Dickel Whiskey Shot Combo",
    specials_url: "https://smalltabs.com/details.php?id=48",
  },
  {
    name: "Stretch Bar & Grill",
    address: "Wrigleyville @ 3485 N Clark St",
    specials:
      "$30 Domestic Tallboys, Domestic Drafts, Call Cocktails, Wine, & Select Appetizers Happy Hour Package (7-10pm), $25 Domestic Drafts, Well Cocktails, Wine, & Select Appetizer Happy Hour Package (7-10pm)",
    specials_url: "https://smalltabs.com/details.php?id=81",
  },
  {
    name: "Duke of Perth",
    address: "Lakeview @ 2913 N Clark St",
    food_specials: "$11.95 All-You-Can-Eat Fish & Chips",
    food_specials_url: "https://smalltabs.com/details.php?id=92",
  },
  {
    name: "Nick's Beer Garden",
    address: "Wicker Park @ 1516 N Milwaukee Ave",
    specials: "$1 off Draft Beers (4-7pm)",
    specials_url: "https://smalltabs.com/details.php?id=449",
  },
  {
    name: "Brando's Speakeasy",
    address: "Loop @ 343 S Dearborn St",
    specials:
      "$3 Bud Light, $3 Old Style, Pabst Blue Ribbon, & Miller High Life Tallboys",
    specials_url: "https://smalltabs.com/details.php?id=276",
  },
  {
    name: "The Lodge",
    address: "Near North Side @ 21 W Division Street",
    specials: "$4 Fat Tire Drafts, $6 Bombs",
    specials_url: "https://smalltabs.com/details.php?id=68",
  },
  {
    name: "Davenport's Piano Bar",
    address: "Wicker Park @ 1383 N Milwaukee Ave",
  },
  {
    name: "Monk's Pub",
    address: "Loop @ 205 W Lake St",
    specials:
      "$4 Budweiser, Bud Light, Coors Light, Miller High Life, Miller Lite, Old Style, & Schiltz Bottles",
    specials_url: "https://smalltabs.com/details.php?id=144",
  },
  {
    name: "Innjoy (Wicker Park)",
    address: "Wicker Park @ 2051 W Division St",
    specials:
      "$4 Dos Equis Drafts, $8 Milagro Tequila Margaritas, $5 Fireball Whiskey Shots",
    specials_url: "https://smalltabs.com/details.php?id=163",
    food_specials: "Half Price Shrimp",
    food_specials_url: "https://smalltabs.com/details.php?id=163",
  },
  {
    name: "Reed's Local",
    address: "Avondale @ 3017 W Belmont Ave",
    specials: "$4 Old Crow Whiskey & Hamm's Can Combo, $2 Hamm's Cans",
    specials_url: "https://smalltabs.com/details.php?id=585",
  },
  {
    name: "Pizzeria Serio",
    address: "Lakeview @ 1708 N Belmont Ave",
    specials: "$2 Pabst Blue Ribbon Tallboys, $8 Beer Flights",
    specials_url: "https://smalltabs.com/details.php?id=385",
  },
  {
    name: "Ovie Bar & Grill",
    address: "West Loop @ 120 N Canal St",
    specials: "$6 Craft Beer Drafts (3-6pm), $7 Select Wine Glasses (3-6pm)",
    specials_url: "https://smalltabs.com/details.php?id=501",
  },
  {
    name: "Reverie",
    address: "River North @ 414 N Orleans St",
    food_specials: "$10 Mix & Match Lunch",
    food_specials_url: "https://smalltabs.com/details.php?id=584",
  },
  {
    name: "Lincoln Station",
    address: "Lincoln Park @ 2432 N Lincoln Ave",
    specials: "$4 Featured Drafts",
    specials_url: "https://smalltabs.com/details.php?id=248",
    food_specials: "$10.95 All-You-Can-Eat Fish Fry",
    food_specials_url: "https://smalltabs.com/details.php?id=248",
  },
  {
    name: "The Pony Inn",
    address: "Lakeview @ 1638 W Belmont Ave",
    food_specials:
      "Half Price Appetizers from 4-8pm, Half Price Sandwiches from 4-8pm",
    food_specials_url: "https://smalltabs.com/details.php?id=275",
  },
  {
    name: "Wild Goose Bar & Grill",
    address: "North Center @ 4265 N Lincoln Ave",
    specials:
      "$5 Guinness Imperial Drafts, $5 Metropolitan Flywheel Drafts, $5 Select Martinis",
    specials_url: "https://smalltabs.com/details.php?id=37",
    food_specials: "$8 All-You-Can-Eat Fish Fry",
    food_specials_url: "https://smalltabs.com/details.php?id=37",
  },
  {
    name: "Bobby Love's",
    address: "Lakeview @ 3729 N Halsted St",
    specials: "$6 Absolute Vodka Cocktails",
    specials_url: "https://smalltabs.com/details.php?id=337",
  },
  {
    name: "Mr. Brown's Lounge West Town",
    address: "Ukrainian Village @ 2301 W Chicago Ave",
    specials:
      "$7 Rum Punch (3-6pm), $4 Jameson Whiskey Shots (3-6pm), $4 Red Stripe Bottles (3-6pm)",
    specials_url: "https://smalltabs.com/details.php?id=363",
  },
  {
    name: "Harrigan's Pub",
    address: "Lakeview @ 2816 N Halsted St",
    specials: "$6 Makers Mark Manhattans, $2 Rolling Rock Cans (12-6pm)",
    specials_url: "https://smalltabs.com/details.php?id=648",
  },
  {
    name: "The Cubby Bear",
    address: "Wrigleyville @ 1059 W Addison St",
    specials: "$5 Domestic Tallboys",
    specials_url: "https://smalltabs.com/details.php?id=150",
  },
  {
    name: "Third Rail Tavern",
    address: "West Loop @ 1133 W Madison St",
    specials:
      "$5 Goose Island, Three Floyds, & Bell's Brewery Drafts (5-9pm), $8 Bulleit Bourbon or Rye Manhattans (5-9pm), $8 Bulleit Bourbon or Rye Old Fashioneds (5-9pm)",
    specials_url: "https://smalltabs.com/details.php?id=303",
  },
  {
    name: "Paddy O'Fegan's",
    address: "West Loop @ 204 N Halsted St",
    specials:
      "$1 off Tequila, $15 Leinenkugel's Grapefruit Shandy Buckets, $3 Miller Lite Drafts (4-7pm), $5 Rolling Rock Tallboys (4-7pm), $5 Paddy's Whiskey (4-7pm)",
    specials_url: "https://smalltabs.com/details.php?id=485",
    food_specials:
      "$10 Chicken Torta with Posole Soup, $5 Loaded Nachos (4-7pm), $3 Jalapeno & Cheddar Hot Dogs (4-7pm), $3 Wrigley Field Smokies (4-7pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=485",
  },
  {
    name: "The North End",
    address: "Lakeview @ 3733 N Halsted St",
    specials: "$5 Fireball Whiskey Shots",
    specials_url: "https://smalltabs.com/details.php?id=174",
  },
  {
    name: "Higgins' Tavern",
    address: "Lakeview @ 3259 N Racine Ave",
    specials: "$11 Miller Lite & Coors Light Pitchers",
    specials_url: "https://smalltabs.com/details.php?id=17",
  },
  {
    name: "Cactus Bar & Grill",
    address: "Loop @ 404 S Wells St",
    specials: "$25 Lagunitas Buckets, $6 Patron Silver Tequila Shots",
    specials_url: "https://smalltabs.com/details.php?id=133",
  },
  {
    name: "Leader Bar",
    address: "Irving Park @ 3000 W Irving Park Rd",
    specials:
      "$15 Budweiser, Bud Light, Miller Lite, & Miller High Life Buckets, $18 Amstel Light, Heineken, Heineken Light, Tecate, & Newcastle Brown Ale Buckets",
    specials_url: "https://smalltabs.com/details.php?id=381",
    food_specials: "Half Price Appetizers from 4-7pm",
    food_specials_url: "https://smalltabs.com/details.php?id=381",
  },
  {
    name: "Vines on Clark",
    address: "Wrigleyville @ 3554 N Clark St",
    specials: "$5 You-Call-Its",
    specials_url: "https://smalltabs.com/details.php?id=33",
  },
  {
    name: "Vaughans Pub Northwest Side",
    address: "Jefferson Park @ 5485 N Northwest Hwy",
    specials:
      "$3.50 Amstel Light Bottles, $4 Blue Moon Drafts, $4 Powers Irish Whiskey Shots",
    specials_url: "https://smalltabs.com/details.php?id=43",
    food_specials:
      "$12 All-You-Can-Eat Fish & Chips, $7.50 Pub Burger & Fries (11am-3pm), $7.50 Chicken Sandwich & Fries (11am-3pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=43",
  },
  {
    name: "Lizzie McNeill's Irish Pub",
    address: "Streeterville @ 400 N McClurg St",
    specials:
      "$5 Sam Adams Oktoberfest, $6 Seagrams 7 Whiskey Drinks, $5 Crown Apple Shots",
    specials_url: "https://smalltabs.com/details.php?id=477",
  },
  {
    name: "Keenan O'Reilly's",
    address: "Lakeview @ 3916 N Ashland Ave",
    specials:
      "$3.50 Goose Island & Sam Adams Bottles, $2 Pabst Blue Ribbon Cans, $2.50 Miller High Life Tallboys, $3 Labatt Blue Drafts, $2.50 Old Style Drafts",
    specials_url: "https://smalltabs.com/details.php?id=454",
  },
  {
    name: "Gallery Cabaret",
    address: "Bucktown @ 2020 N Oakley Ave",
    specials:
      "$6 Hammeson (Hamm's & Jameson Whiskey), $6 Jackhammer (Hamm's & Jack Daniels Whiskey), $3 Fireball Whiskey Shots, $3 Malort Shots",
    specials_url: "https://smalltabs.com/details.php?id=116",
  },
  {
    name: "Rocky's",
    address: "Bridgeport @ 234 W 31st St",
    specials:
      "$5 Black & Blues, $3 Non-Premium Domestic Beers, $4 Premium Domestic & Import Beers, $12 Domestic Buckets",
    specials_url: "https://smalltabs.com/details.php?id=378",
  },
  {
    name: "Estelle's Cafe & Lounge",
    address: "Wicker Park @ 2013 W North Ave",
    specials:
      "$4 Three Floyd's Drafts (5-8pm), $3 Rebel Yell Whiskey Shots (5-8pm)",
    specials_url: "https://smalltabs.com/details.php?id=216",
  },
  {
    name: "Goldie's",
    address: "North Center @ 3839 N Lincoln Ave",
    specials: "$1 Pabst Blue Ribbon Drafts",
    specials_url: "https://smalltabs.com/details.php?id=122",
  },
  {
    name: "Woodhaven Bar & Kitchen",
    address: "River North @ 712 N Clark St",
    specials: "$7 Pabst Blue Ribbon & Jameson Whiskey Boilermakers (5-8pm)",
    specials_url: "https://smalltabs.com/details.php?id=331",
  },
  {
    name: "The Beetle Bar & Grill",
    address: "Humboldt Park @ 2532 W Chicago Ave",
    specials: "$4 Curious Traveler",
    specials_url: "https://smalltabs.com/details.php?id=2",
    food_specials: "$8 Fish Fry",
    food_specials_url: "https://smalltabs.com/details.php?id=2",
  },
  {
    name: "Mac's Wood Grilled",
    address: "Wicker Park @ 1801 W Division St",
    specials: "$4 Paddy Irish Whiskey Shots, $5 Moscow Mules",
    specials_url: "https://smalltabs.com/details.php?id=631",
  },
  {
    name: "Trader Todd's",
    address: "Lakeview @ 3216 N Sheffield Ave",
    specials: "$1 Rolling Rock Drafts (4:30-6:30pm)",
    specials_url: "https://smalltabs.com/details.php?id=455",
    food_specials: "$2 Select Appetizers (4:30-6:30pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=455",
  },
  {
    name: "Country Club Bar",
    address: "Wrigleyville @ 3462 N Clark St",
    specials:
      "$6 Tito's Vodka Cocktails, $4 Revolution Anti-Hero, $3 Shiner Premium",
    specials_url: "https://smalltabs.com/details.php?id=207",
    food_specials: "Half Price Appetizers",
    food_specials_url: "https://smalltabs.com/details.php?id=207",
  },
  {
    name: "Paddy Long's",
    address: "Lincoln Park @ 1028 W Diversey Ave",
    specials: "$4 Beer of the Month",
    specials_url: "https://smalltabs.com/details.php?id=119",
    food_specials: "$13.95 Fish Fry",
    food_specials_url: "https://smalltabs.com/details.php?id=119",
  },
  {
    name: "John Barleycorn River North",
    address: "River North @ 149 W Kinzie St",
    specials: "$5 Budweiser, Bud Light, Coors Light, & Miller Lite Bottles",
    specials_url: "https://smalltabs.com/details.php?id=491",
  },
  {
    name: "The Graystone Tavern",
    address: "Lakeview @ 3441 N Sheffield Ave",
    specials: "$5 Jack Daniels Fire Shots",
    specials_url: "https://smalltabs.com/details.php?id=653",
  },
  {
    name: "Corcoran's Grill & Pub",
    address: "Lincoln Park @ 1615 N Wells St",
    specials:
      "$4.50 Corona & Corona Light Bottles, $7 Moscow Mules, $5 All Shots",
    specials_url: "https://smalltabs.com/details.php?id=41",
    food_specials: "$12 All-You-Can-Eat Fish & Chips",
    food_specials_url: "https://smalltabs.com/details.php?id=41",
  },
  {
    name: "Porter Kitchen & Deck",
    address: "West Loop @ 150 N Riverside Ave",
    specials:
      "$7 Moscow Mules (3:30-5:30pm), $8 Classic Margaritas (3:30-5:30pm), $9 Old Fashioneds (3:30-5:30pm), $9 Select Wine Glasses (3:30-5:30pm)",
    specials_url: "https://smalltabs.com/details.php?id=682",
  },
  {
    name: "Scarlet Bar",
    address: "Lakeview @ 3320 N Halsted St",
    specials: "$6 Ketel One Vodka Cocktails",
    specials_url: "https://smalltabs.com/details.php?id=262",
  },
  {
    name: "Kroll's South Loop",
    address: "South Loop @ 1736 S Michigan Ave",
    specials:
      "$5 Bushmills Whiskey Cocktails (4-6pm), $4 Absolut Vodka Cocktails (4-6pm), $3 Deschutes Cans (4-6pm), $5 Keke Key Lime Martinis (4-6pm), $6 House Margaritas (4-6pm)",
    specials_url: "https://smalltabs.com/details.php?id=146",
    food_specials: "Half Price Appetizers (5-7pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=146",
  },
  {
    name: "Black Iron Tavern",
    address: "West Loop @ 401 N Milwaukee Ave",
    specials: "$5 Moscow Mules (3-6pm), $5 You-Call-It Well Drinks (3-6pm)",
    specials_url: "https://smalltabs.com/details.php?id=671",
    food_specials:
      "$18 Fish & Chips and Lagunitas Draft Combo, $2 Chipotle Carnitas, Chicken, or Fried Fish Tacos (3-6pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=671",
  },
  {
    name: "Dugan's on Halsted",
    address: "West Loop @ 128 S Halsted St",
    specials:
      "$2.50 Bud Light Drafts, $3.50 Hoegaarden, $2.50 Pabst Blue Ribbon Bottles",
    specials_url: "https://smalltabs.com/details.php?id=424",
  },
  {
    name: "Prohibition Pub & Grill",
    address: "Lincoln Park @ 2138 N Halsted Ave",
    specials: "$4 Well Drinks",
    specials_url: "https://smalltabs.com/details.php?id=564",
    food_specials: "$5 Fried Chicken Sandwich",
    food_specials_url: "https://smalltabs.com/details.php?id=564",
  },
  {
    name: "Francesca's Bryn Mawr",
    address: "Edgewater @ 1039 W Bryn Mawr Ave",
    food_specials: "$15.99 Prix Fixe Lunch Menu",
    food_specials_url: "https://smalltabs.com/details.php?id=429",
  },
  {
    name: "The Kerryman",
    address: "Near North Side @ 661 N Clark St",
    specials:
      "$4 Guiness (4-9pm), $5 Jameson Shots (4-9pm), $6 Tito's Vodka Drinks (4-9pm)",
    specials_url: "https://smalltabs.com/details.php?id=62",
    food_specials: "$10 Fish & Chips (4-9pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=62",
  },
  {
    name: "Leona's Hyde Park",
    address: "Hyde Park @ 1236 E 53rd St",
    specials:
      "$5 Cocktails (6-9pm), $5 Frozen Margaritas (6-9pm), $5 Rocks Margaritas (6-9pm), $5 Long Island Iced Teas (6-9pm)",
    specials_url: "https://smalltabs.com/details.php?id=666",
    food_specials: "$3 off Wing Dings",
    food_specials_url: "https://smalltabs.com/details.php?id=666",
  },
  {
    name: "Glascott's Saloon",
    address: "Lincoln Park @ 2158 N Halsted St",
    specials: "$5 Stella Artois Drafts, $5 Red Bull Bombs",
    specials_url: "https://smalltabs.com/details.php?id=46",
  },
  {
    name: "Casati's Pizza Vino",
    address: "Lincoln Park @ 444 W Fullerton Pkwy",
    food_specials: "$10 & Under Bar Menu",
    food_specials_url: "https://smalltabs.com/details.php?id=703",
  },
  {
    name: "Gino's North",
    address: "Edgewater @ 1111 W Granville Ave",
    specials: "$3 Sangria Glasses",
    specials_url: "https://smalltabs.com/details.php?id=238",
  },
  {
    name: "Leona's Stony Island",
    address: "Calumet Heights @ 9157 S Stony Island Ave",
    specials:
      "$5 Cocktails (6-9pm), $5 Frozen Margaritas (6-9pm), $5 Rocks Margaritas (6-9pm), $5 Long Island Iced Teas (6-9pm)",
    specials_url: "https://smalltabs.com/details.php?id=669",
    food_specials: "$3 off Wing Dings",
    food_specials_url: "https://smalltabs.com/details.php?id=669",
  },
  {
    name: "Four Star Lounge",
    address: "Lincoln Park @ 2666 N Halsted St",
    specials:
      "$4 Jack Daniels Whiskey, Jim Beam Bourbon, Bacardi Rum, Jose Cuervo Tequila, Ketel One Vodka, & Beefeater Gin Well Drinks (5-8pm), $4 Revolution Fist City, Revolution Anti-Hero, Goose Island 312, Revolution Eugene Porter, and Blue Moon (5-8pm), $5 House Cabernet & Chardonnay Wine Glasses (5-8pm), $2 Malort Shots (5-8pm), $2 Fireball Whiskey Shots (5-8pm), $3 Jameson Whiskey Shots (5-8pm), $3 Jim Beam Bourbon Shots (5-8pm), $5 Vodka or Gin Martinis (5-8pm)",
    specials_url: "https://smalltabs.com/details.php?id=608",
    food_specials: "$5 Shrimp Cocktail (5-8pm), $5 Hummus Platter (5-8pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=608",
  },
  {
    name: "Joe's Bar",
    address: "Near North Side @ 940 W Weed St",
    specials:
      "$2 Fireball Whiskey Shots (8-10pm), $2 Budweiser & Coors Light Bottles (8-10pm), $3 Vodka Mixers (8-10pm)",
    specials_url: "https://smalltabs.com/details.php?id=14",
  },
  {
    name: "The Land on Lincoln",
    address: "Lakeview @ 3032 N Lincoln Ave",
    specials:
      "$5 Vodka, $5 Bourbon, $2 Mystery Beer, $4 Drafts (4-7pm), $4 Wine Glasses (4-7pm)",
    specials_url: "https://smalltabs.com/details.php?id=165",
    food_specials:
      "Half Price Nonna's Meatball Sandwich, Half Price Snacks (4-7pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=165",
  },
  {
    name: "Pasta Bowl Lincoln Park",
    address: "Lincoln Park @ 2434 N Clark St",
    specials: "$5 Moscow Mules",
    specials_url: "https://smalltabs.com/details.php?id=637",
  },
  {
    name: "Halligan Bar",
    address: "Lincoln Park @ 2274 N Lincoln Ave",
    specials:
      "$3 Budweiser & Bud Light Bottles, $3.50 Vegas Bombs, $3.50 Captain Morgan Rum & Coke, $4 Stoli Vodka Drinks, $5 Bombs, $2 Bud Light Drafts, $3 Jameson Whiskey Shots, $3.50 Goose Island 312 Drafts, $3.50 Guinness, $4 Stoli Vodka Drinks",
    specials_url: "https://smalltabs.com/details.php?id=130",
  },
  {
    name: "Duffy's Tavern",
    address: "Lincoln Park @ 422 W Diversey Ave",
    specials:
      "$1 Miller Lite & Coors Light Bottles (5-7pm), $2 Well Drinks (5-7pm), $3 Fireball Whiskey Shots (5-7pm), $4 Wine Glasses (5-7pm)",
    specials_url: "https://smalltabs.com/details.php?id=23",
  },
  {
    name: "Original Mother's",
    address: "Near North Side @ 26 W Division St",
    specials:
      "$6 Pabst Blue Ribbon Tallboys, $5 Bacardi Rum, $5 Wolf Berry & Black Razz Bombs, $5 Sailor Jerry Rum",
    specials_url: "https://smalltabs.com/details.php?id=69",
  },
  {
    name: "The Fifty/50",
    address: "Wicker Park @ 2047 W Division St",
    specials:
      "$6 Tito's Vodka Drinks, $5 Ketel One Vodka Drinks (3-6pm), Half Price Craft Beers (3-6pm), $5 Wine Glasses (3-6pm)",
    specials_url: "https://smalltabs.com/details.php?id=127",
    food_specials: "Half Price Appetizers (3-6pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=127",
  },
  {
    name: "Pint",
    address: "Wicker Park @ 1547 N Milwaukee Ave",
    food_specials: "Half Price Fish & Chips",
    food_specials_url: "https://smalltabs.com/details.php?id=218",
  },
  {
    name: "Spyners Pub",
    address: "Lincoln Square @ 4623 N Western Ave",
    specials:
      "$3.50 Stella Artois, $3.50 Jose Cuervo Gold Tequila Shots, $3.50 Dooley's Shots",
    specials_url: "https://smalltabs.com/details.php?id=97",
  },
  {
    name: "Takito Kitchen",
    address: "Wicker Park @ 2013 W Division St",
    food_specials:
      "Brunch Served from 11am-3pm, $12 Tacos, Soup & Salad Lunch Special (from 11am-3pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=579",
  },
  {
    name: "King Crab House",
    address: "Lincoln Park @ 312 N Halsted St",
    specials: "Half Price Beer (4-6pm), Half Price Well Drinks (4-6pm)",
    specials_url: "https://smalltabs.com/details.php?id=702",
    food_specials: "Half Price Appetizers (4-6pm), Half Price Entrees (4-6pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=702",
  },
  {
    name: "SideDoor",
    address: "Streeterville @ 100 E Ontario St",
    food_specials:
      "Half Price Avocado Mash, Stuffed Mushrooms, Chips & Dip, IPA Beer Pretzels, & Deviled Eggs from 3-5pm",
    food_specials_url: "https://smalltabs.com/details.php?id=574",
  },
  {
    name: "Christina's Place",
    address: "Irving Park @ 3759 N Kedzie Ave",
    specials:
      "$2 Pabst Blue Ribbon Cans, $3 Guinness Drafts, $5 Jameson Whiskey Shots, $5 Malort Shots, $5 Fireball Whiskey Shots",
    specials_url: "https://smalltabs.com/details.php?id=235",
  },
  {
    name: "Gio's Bar & Grill",
    address: "Lincoln Square @ 4857 N Damen Ave",
    specials: "$4 Vodka Cocktails, $4 5 Rabbit Drafts, $3.50 Fireball Shots",
    specials_url: "https://smalltabs.com/details.php?id=374",
  },
  {
    name: "The Temple Bar",
    address: "Lakeview @ 3001 N Ashland Ave",
    specials: "$4 Lagunitas Drafts",
    specials_url: "https://smalltabs.com/details.php?id=305",
    food_specials: "$8.25 Fish & Chips",
    food_specials_url: "https://smalltabs.com/details.php?id=305",
  },
  {
    name: "Bourbon on Division",
    address: "Wicker Park @ 2050 W Division St",
    specials:
      "$5 Deep Eddy Rum Lemon Drops, $20 Domestic Buckets, $5 Tito's Vodka or Tullamore Dew Whiskey Mixed Drinks (9-11pm)",
    specials_url: "https://smalltabs.com/details.php?id=710",
  },
  {
    name: "Kincade's Bar & Grill",
    address: "Lincoln Park @ 950 W Armitage Ave",
    specials:
      "$4 Draft of the Day, $6 Makers Mark Bourbon Cocktails, $7 Pabst Blue Ribbon & Jameson Whiskey Shot Combo",
    specials_url: "https://smalltabs.com/details.php?id=153",
  },
  {
    name: "Redmond's Ale House",
    address: "Wrigleyville @ 3358 N Sheffield Ave",
    specials:
      "$3 Tallboys, $4 Fireball Whiskey Shots, $6 Jameson Whiskey Shots",
    specials_url: "https://smalltabs.com/details.php?id=20",
  },
  {
    name: "Porkchop Hyde Park",
    address: "Hyde Park @ 1516 E Harper Ct",
    specials: "Half Price Drinks (10pm-Close)",
    specials_url: "https://smalltabs.com/details.php?id=684",
    food_specials: "Half Price Appetizers (10pm-Close)",
    food_specials_url: "https://smalltabs.com/details.php?id=684",
  },
  {
    name: "Easy Bar",
    address: "Wicker Park @ 1944 W Division St",
    specials: "$5 Jameson Shots",
    specials_url: "https://smalltabs.com/details.php?id=215",
  },
  {
    name: "Charlie's",
    address: "Lakeview @ 3726 N Broadway St",
    specials: "$10 Long Island Iced Teas, $3 Apple Pie Shots",
    specials_url: "https://smalltabs.com/details.php?id=264",
  },
  {
    name: "Jerk Modern Jamaican Grill",
    address: "Noble Square @ 811 W Chicago Ave",
    specials: "$3 Mystery Beer (4-7pm), $7 Select Cocktails (4-7pm)",
    specials_url: "https://smalltabs.com/details.php?id=634",
  },
  {
    name: "The Irish Oak",
    address: "Wrigleyville @ 3511 N Clark St",
    specials: "$6 Budweiser Tallboys & Shot Combo, $25 Fish Bowls",
    specials_url: "https://smalltabs.com/details.php?id=199",
    food_specials: "$10 All-You-Can-Eat Fish & Chips",
    food_specials_url: "https://smalltabs.com/details.php?id=199",
  },
  {
    name: "Derby Bar & Grill",
    address: "Lincoln Park @ 1224 W Webster Ave",
    specials:
      "$20 Fish Bowls, $7 Lagunitas Fatpours, $5 Pabst Blue Ribbon Can & Select Shot Combo",
    specials_url: "https://smalltabs.com/details.php?id=458",
    food_specials: "Half Price Appetizers (4-6pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=458",
  },
  {
    name: "Irish Eyes",
    address: "Lincoln Park @ 2519 N Lincoln Ave",
    specials: "$3.50 Pabst Blue Ribbon Tallboys",
    specials_url: "https://smalltabs.com/details.php?id=339",
  },
  {
    name: "Kirkwood Bar & Grill",
    address: "Lakeview @ 2934 N Sheffield Ave",
    specials: "$4 All Ciders, $5 Jello Shots",
    specials_url: "https://smalltabs.com/details.php?id=13",
  },
  {
    name: "The Boss Bar",
    address: "River North @ 420 N Clark St",
    food_specials:
      "$10 Burger & Miller Lite Draft Combo, $24 Cheese Pizza & Miller Lite Pitcher Combo",
    food_specials_url: "https://smalltabs.com/details.php?id=560",
  },
  {
    name: "Distilled Chicago",
    address: "Lincoln Park @ 1480 W Webster Ave",
    food_specials: "$10 Country Fried Chicken Sandwich",
    food_specials_url: "https://smalltabs.com/details.php?id=656",
  },
  {
    name: "Leona's Rogers Park",
    address: "Rogers Park @ 6935 N Sheridan Ave",
    specials:
      "$5 Cocktails (6-9pm), $5 Frozen Margaritas (6-9pm), $5 Rocks Margaritas (6-9pm), $5 Long Island Iced Teas (6-9pm)",
    specials_url: "https://smalltabs.com/details.php?id=668",
    food_specials: "$3 off Wing Dings",
    food_specials_url: "https://smalltabs.com/details.php?id=668",
  },
  {
    name: "Bridge House Tavern",
    address: "River North @ 321 N Clark St",
    specials: "$20 Tiger Tallboy Buckets",
    specials_url: "https://smalltabs.com/details.php?id=484",
  },
  {
    name: "WestEnd",
    address: "West Loop @ 1326 W Madison St",
    specials:
      "Half Price Drafts (excluding Guinness) (5-7pm), Half Price Wine Glasses (5-7pm), Half Price Well Drinks (5-7pm)",
    specials_url: "https://smalltabs.com/details.php?id=11",
    food_specials: "Half Price Appetizers (excluding Nachos) (5-7pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=11",
  },
  {
    name: "Alice's Lounge",
    address: "Avondale @ 3556 W Belmont Ave",
  },
  {
    name: "The Full Shilling",
    address: "Wrigleyville @ 3724 N Clark St",
    specials:
      "$5 Fireball Whiskey, $20 Table Tappers, Half Price Drinks (6-9pm)",
    specials_url: "https://smalltabs.com/details.php?id=623",
    food_specials: "$7.95 Fish & Chips, $1 Hot Dogs",
    food_specials_url: "https://smalltabs.com/details.php?id=623",
  },
  {
    name: "Deleece Restaurant",
    address: "Lakeview @ 3747 N Southport Ave",
    food_specials: "Brunch served from 9am-2:30pm",
    food_specials_url: "https://smalltabs.com/details.php?id=295",
  },
  {
    name: "Black Rock Pub & Kitchen",
    address: "Lakeview @ 3614 N Damen Ave",
    specials:
      "$1 off Off Color Brewery Drafts & Bottles, $4 Slow & Low Rye Shots",
    specials_url: "https://smalltabs.com/details.php?id=59",
    food_specials: "40¢ Wings",
    food_specials_url: "https://smalltabs.com/details.php?id=59",
  },
  {
    name: "Bar Louie Dearborn Station",
    address: "Printers Row @ 47 W Polk St",
    food_specials:
      "Half Price Select Appetizers (4-7pm), Half Price Flatbreads (4-7pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=567",
  },
  {
    name: "Galvin's Public House",
    address: "Portage Park @ 5901 W Lawrence Ave",
    specials: "$4 Blue Moon Drafts",
    specials_url: "https://smalltabs.com/details.php?id=604",
    food_specials: "$11 All-You-Can-Eat Fish & Chips",
    food_specials_url: "https://smalltabs.com/details.php?id=604",
  },
  {
    name: "Simone's Bar",
    address: "Pilsen @ 960 W 18th St",
    food_specials: "$8 Half Pound Burger & Pabst Blue Ribbon Tallboy Combo",
    food_specials_url: "https://smalltabs.com/details.php?id=107",
  },
  {
    name: "Vaughans Pub Lakeview",
    address: "Lakeview @ 2917 N Sheffield Ave",
    specials:
      "$4.50 Blue Moon Drafts, $6 Margaritas, $6 Bombs, $16 Miller Family Buckets, $3 Domestic Bottles (4:30-6:30pm), $4 Well Drinks (4:30-6:30pm), $4.50 All American Drafts (4:30-6:30pm)",
    specials_url: "https://smalltabs.com/details.php?id=44",
    food_specials: "$2 Meatball Sliders, $2 Brisket Sliders, $5 Nachos",
    food_specials_url: "https://smalltabs.com/details.php?id=44",
  },
  {
    name: "Matisse Tavern & Grill",
    address: "Lincoln Park @ 674 W Diversey Pkwy",
    specials: "$5 Martinis",
    specials_url: "https://smalltabs.com/details.php?id=222",
  },
  {
    name: "Flagship Tavern & Grill",
    address: "Lakeview @ 1622 W Belmont Ave",
    specials: "$15 Domestic Buckets",
    specials_url: "https://smalltabs.com/details.php?id=552",
  },
  {
    name: "Wheel House",
    address: "Lakeview @ 3553 N Southport Ave",
    specials: "$5 UV Bombs, $4 Craft Can Beers",
    specials_url: "https://smalltabs.com/details.php?id=169",
    food_specials: "$7 Fish & Chips, $10 Crab Cake Melts",
    food_specials_url: "https://smalltabs.com/details.php?id=169",
  },
  {
    name: "Legno Italian Gastropub",
    address: "Portage Park @ 4250 N Central Ave",
    specials:
      "$4 Select Vandermill Ciders, $2 Domestic Bottles (3-6pm), $3 Malort Shots (3-6pm), $5 Tito's Vodka Mixed Drinks (3-6pm), $6 White or Red Sangria Glasses (3-6pm)",
    specials_url: "https://smalltabs.com/details.php?id=590",
    food_specials:
      "Complimentary House Made Chips (3-6pm), $4 BBQ Pork Sliders (2) (3-6pm), $4 Jalapeno Poppers (2) (3-6pm), $5 Buffalo Wings (6) (3-6pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=590",
  },
  {
    name: "Mahoney's Pub & Grille",
    address: "Near North Side @ 551 N Odgen Ave",
    specials: "$5 Jameson Whiskey",
    specials_url: "https://smalltabs.com/details.php?id=65",
  },
  {
    name: "Benchmark",
    address: "Old Town @ 1510 N Wells St",
    specials:
      "$4 Truly & White Claw Cans (5-8pm), $5 Jack Daniels Whiskey Shots, $5 El Jimador Tequila Shots",
    specials_url: "https://smalltabs.com/details.php?id=508",
    food_specials: "Free Burgers (limited quantities, with drink purchase)",
    food_specials_url: "https://smalltabs.com/details.php?id=508",
  },
  {
    name: "The Hidden Shamrock",
    address: "Lincoln Park @ 2723 N Halsted St",
    specials:
      "Half Price Craft Cocktails, $3 Rotating Drafts, $3 Whiskey Shots",
    specials_url: "https://smalltabs.com/details.php?id=336",
  },
  {
    name: "Blue Frog Bar & Grill",
    address: "River North @ 676 N LaSalle Dr",
    specials: "$6 Specialty Cocktails",
    specials_url: "https://smalltabs.com/details.php?id=391",
    food_specials: "Half Price Appetizers (4-8pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=391",
  },
  {
    name: "Northwoods Lounge",
    address: "Norwood Park @ 5342 N Cumberland Ave",
    specials: "$3 Fireball Shots, $1 House Shots",
    specials_url: "https://smalltabs.com/details.php?id=551",
  },
  {
    name: "George Street Pub",
    address: "Lakeview @ 2858 N Halsted St",
    specials: "$5 Seasonal Drafts",
    specials_url: "https://smalltabs.com/details.php?id=630",
  },
  {
    name: "Fremont",
    address: "River North @ 15 W Illinois St",
    specials:
      "$3 Beers (5-9pm), $4 Mixed Drinks (5-9pm), $5 Mule Bar (5-9pm), $5 Wine Glasses (5-9pm), $6 Tito's Vodka Cocktails (5-9pm)",
    specials_url: "https://smalltabs.com/details.php?id=658",
  },
  {
    name: "McCormick & Schmick's",
    address: "Near North Side @ 41 E Chestnut St",
    specials:
      "$6 Canyon Road Chardonnay, Canyon Cabernet Sauvignon, & Bringer White Zinfandel Wine Glasses (4-7pm), $7 Agave Rita, All American, & Talk of the Town Cocktails (4-7pm), $9 Urban Influence, Brandy Sidebar, & Sour Apple Martinis (4-7pm)",
    specials_url: "https://smalltabs.com/details.php?id=605",
  },
  {
    name: "O'Donovan's Pub",
    address: "North Center @ 2100 W Irving Park Rd",
    specials:
      "$15 Giant 48oz Cocktails, $5 Margaritas, $3 Tecate Cans, $13 Tecate Buckets, $1 off Tequila Shots",
    specials_url: "https://smalltabs.com/details.php?id=157",
    food_specials: "$2 Tacos",
    food_specials_url: "https://smalltabs.com/details.php?id=157",
  },
  {
    name: "Bulldog Ale House (South Loop)",
    address: "South Loop @ 901 S State St",
    specials: "$5 Jameson Whiskey, $5 Guinness, $6 Irish Car Bombs",
    specials_url: "https://smalltabs.com/details.php?id=686",
    food_specials: "$10.99 All-You-Can-Eat Fish Fry",
    food_specials_url: "https://smalltabs.com/details.php?id=686",
  },
  {
    name: "Monty's Tap",
    address: "Near North Side @ 600 W Chicago Ave",
    specials:
      "$4 Select Beers (3:30-5:30pm), $6 Moscow Mules (3:30-5:30pm), $7 Sauvignon Blanc, Pinot Noir, & Rosé Glasses (3:30-5:30pm)",
    specials_url: "https://smalltabs.com/details.php?id=707",
  },
  {
    name: "Big City Tap",
    address: "Lakeview @ 1010 W Belmont Ave",
    specials: "$6 Jameson Whiskey, $1 Jello Shots, $1 Apple Pucker Shots",
    specials_url: "https://smalltabs.com/details.php?id=306",
    food_specials: "Half Price Bar Snacks (until 9pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=306",
  },
  {
    name: "Kit Kat Lounge",
    address: "Lakeview @ 3700 N Halsted St",
    food_specials: "$30 Prix-Fixe Menu (Salad, Entree, & Martini)",
    food_specials_url: "https://smalltabs.com/details.php?id=196",
  },
  {
    name: "Farraguts",
    address: "Andersonville @ 5240 N Clark St",
    specials: "$3 Miller Lite Drafts, $3 Pabst Blue Ribbon Drafts",
    specials_url: "https://smalltabs.com/details.php?id=445",
  },
  {
    name: "Timothy O'Toole's",
    address: "Near North Side @ 622 N Fairbanks St",
    specials:
      "$12 Miller Lite, Coors Light, & Bud Light Pitchers, $6 Jameson Whiskey Cocktails, $6 Jameson Whiskey Shots",
    specials_url: "https://smalltabs.com/details.php?id=195",
  },
  {
    name: "Gideon Welles",
    address: "Lincoln Square @ 4500 N Lincoln Ave",
    specials: "$5 Select Craft Drafts",
    specials_url: "https://smalltabs.com/details.php?id=603",
  },
  {
    name: "Fatpour Tap Works",
    address: "Wicker Park @ 2005 W Division St",
    specials: "$5 Pabst Blue Ribbon & Select Shot Combo",
    specials_url: "https://smalltabs.com/details.php?id=459",
  },
  {
    name: "Crossroads Bar & Grill",
    address: "West Loop @ 1120 W Madison St",
    specials:
      "$4 Goose Island Green Line, $4 Goose Island 312, $5 Captain Morgan Rum Cocktails",
    specials_url: "https://smalltabs.com/details.php?id=267",
  },
  {
    name: "The Arrogant Frog Bar",
    address: "Lincoln Park @ 1365 W Fullerton Ave",
    specials:
      "$3 Bud Light Drafts, $4 Fireball Whiskey Shots, $4 Craft Beers, $5 Well Cocktails, $5 Malibu Rum Cocktails",
    specials_url: "https://smalltabs.com/details.php?id=240",
  },
  {
    name: "Belford Tavern",
    address: "Irving Park @ 3200 N Pulaski Rd",
    specials:
      "$5 Grey Goose Vodka Drinks & Shots, $3 Jameson Whiskey Shots, $3 Rotating Revolution 16oz Drafts, $3.50 Malort Shots, $3.50 Jameson Whiskey Shots, $2.25 Domestic 18oz Drafts",
    specials_url: "https://smalltabs.com/details.php?id=581",
  },
  {
    name: "Templestowe Pub",
    address: "Irving Park @ 3135 W Montrose Ave",
    specials: "$3 Fireball Whiskey Shots, $3 Import Bottles",
    specials_url: "https://smalltabs.com/details.php?id=340",
  },
  {
    name: "Lowcountry South Loop",
    address: "South Loop @ 1132 S Wabash Ave",
    specials: "$24 Sangria Carafes (5-7pm), Half Price Beer & Wine (5-7pm)",
    specials_url: "https://smalltabs.com/details.php?id=708",
    food_specials: "$10 Mussels & Fries (5-7pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=708",
  },
  {
    name: "Mother's Too",
    address: "Near North Side @ 14 W Division St",
    specials: "$5 Sailor Jerry Rum, $5.50 Jim Beam Bourbon",
    specials_url: "https://smalltabs.com/details.php?id=67",
  },
  {
    name: "Merkle's Bar & Grill",
    address: "Wrigleyville @ 3516 N Clark St",
    specials:
      "$3 Domestic Cans, $4 Well Cocktails, $4 Bloody Marys, $5 Craft Drafts, $5 Crown Apple Shots",
    specials_url: "https://smalltabs.com/details.php?id=18",
    food_specials: "$2 Tacos, $4 Burger & Fries",
    food_specials_url: "https://smalltabs.com/details.php?id=18",
  },
  {
    name: "Small Bar Logan Square",
    address: "Logan Square @ 2956 N Albany Ave",
    specials:
      "$3 Pabst Blue Ribbon Bottles, $3 Miller Lite & Miller High Life Cans",
    specials_url: "https://smalltabs.com/details.php?id=80",
  },
  {
    name: "Leona's Old Irving",
    address: "Irving Park @ 3877 N Elston Ave",
    specials:
      "$5 Cocktails (6-9pm), $5 Frozen Margaritas (6-9pm), $5 Rocks Margaritas (6-9pm), $5 Long Island Iced Teas (6-9pm)",
    specials_url: "https://smalltabs.com/details.php?id=667",
    food_specials: "$3 off Wing Dings",
    food_specials_url: "https://smalltabs.com/details.php?id=667",
  },
  {
    name: "Monsignor Murphy's",
    address: "Lakeview @ 3019 N Broadway St",
    specials: "$3 Pabst Blue Ribbon Cans, $3 Miller Lite Cans",
    specials_url: "https://smalltabs.com/details.php?id=246",
  },
  {
    name: "Cortland's Garage",
    address: "Bucktown @ 1645 W Cortland St",
    food_specials: "Buy One, Get One Free Appetizers from 2pm-6pm",
    food_specials_url: "https://smalltabs.com/details.php?id=60",
  },
  {
    name: "Bottom Lounge",
    address: "West Loop @ 1375 W Lake St",
    specials: "$3.50 Schiltz Drafts, $4 Budweiser & Bud Light Bottles",
    specials_url: "https://smalltabs.com/details.php?id=436",
  },
  {
    name: "Mullen's Bar & Grill",
    address: "Rogers Park @ 7301 N Western Ave",
    specials: "$5 Flavored Vodka Drinks, $5 Bomb Shots (excludes Car Bombs)",
    specials_url: "https://smalltabs.com/details.php?id=460",
    food_specials: "$9 Meatloaf",
    food_specials_url: "https://smalltabs.com/details.php?id=460",
  },
  {
    name: "The Call",
    address: "Andersonville @ 1547 W Bryn Mawr Ave",
    specials: "$2.50 Well Cocktails (7-9pm), $3 Domestic Beers (7-9pm)",
    specials_url: "https://smalltabs.com/details.php?id=343",
  },
  {
    name: "Taco Joint Lincoln Park",
    address: "Lincoln Park @ 1969 N Halsted St",
    specials: "$5 Modelo Especial Can & Olmeca Tequila Blanco Shot Combo",
    specials_url: "https://smalltabs.com/details.php?id=541",
  },
  {
    name: "Taco Joint River North",
    address: "River North @ 158 W Ontario St",
    specials: "$5 Modelo Especial Can & Olmeca Tequila Blanco Shot Combo",
    specials_url: "https://smalltabs.com/details.php?id=542",
  },
  {
    name: "Sheffield's",
    address: "Lakeview @ 3258 N Sheffield Ave",
    specials: "$4 Brewery-of-the-Month Drafts",
    specials_url: "https://smalltabs.com/details.php?id=54",
  },
  {
    name: "Taqueria & Bar",
    address: "Lincoln Park @ 1450 W Webster Ave",
    specials: "$4 Shots, $2 Grab Bag Beers",
    specials_url: "https://smalltabs.com/details.php?id=565",
  },
  {
    name: "Bar Louie University Village",
    address: "University Village @ 1325 S Halsted St",
    specials:
      "$3.25 Drafts (4-7pm), $4.25 Wine Glasses (4-7pm), $5.25 Signature Martinis (4-7pm)",
    specials_url: "https://smalltabs.com/details.php?id=654",
    food_specials:
      "Half Price Select Appetizers (4-7pm), Half Price Flatbreads (4-7pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=654",
  },
  {
    name: "J & M Tap",
    address: "Ukrainian Village @ 957 N Leavitt St",
    specials:
      "$2 Pabst Blue Ribbon Drafts, $2.25 Point Drafts, $3 Domestic Bottles, $3 Pabst Blue Ribbon & Schiltz Tallboys, $4 Stella Artois Drafts, $4 Import & Craft Bottles, $4 Jameson Whiskey Shots, $4 Jim Beam Bourbon & Rye Shots, $5 Makers Mark Bourbon Drinks, $5 Stoli Vodka Drinks, $5 Crown Royal Whiskey Drinks",
    specials_url: "https://smalltabs.com/details.php?id=540",
  },
  {
    name: "River Shannon",
    address: "Lincoln Park @ 425 W Armitage Ave",
    specials: "$6 Stoli Vodka, $6 Stella Artois Bottles",
    specials_url: "https://smalltabs.com/details.php?id=70",
  },
  {
    name: "Racine Plumbing Bar & Grill",
    address: "Lincoln Park @ 2642 N Lincoln Ave",
    specials:
      "$35 Drink Package including Draft Beers, Well Drinks, Select Call Drinks, Domestic Bottles and Cans, & Half Price Food (9pm-12am)",
    specials_url: "https://smalltabs.com/details.php?id=357",
  },
  {
    name: "Compass Bar",
    address: "Lincoln Park @ 433 W Diversey Pkwy",
    food_specials: "Half Price Pizza from 4-6pm",
    food_specials_url: "https://smalltabs.com/details.php?id=586",
  },
  {
    name: "Lizard's Liquid Lounge",
    address: "Irving Park @ 3058 W Irving Park Rd",
    specials:
      "$4 Stella Artois Drafts, $4 Great Lakes Burning River Drafts, $5 Microbrews",
    specials_url: "https://smalltabs.com/details.php?id=98",
  },
  {
    name: "Big Star",
    address: "Wicker Park @ 1531 N Damen Ave",
    specials: "$3 Old Heaven Hill Whiskey Shots",
    specials_url: "https://smalltabs.com/details.php?id=341",
  },
  {
    name: "Gannon's Pub",
    address: "North Center @ 4264 N Lincoln Ave",
    specials: "$4 Harp Drafts",
    specials_url: "https://smalltabs.com/details.php?id=16",
    food_specials: "$7.75 Fish & Chips",
    food_specials_url: "https://smalltabs.com/details.php?id=16",
  },
  {
    name: "80 Proof",
    address: "Old Town @ 1500 N Wells St",
    specials:
      "$3 Tequila Shots (5-8pm), $4 All Beers (5-8pm), $5 All Call Drinks (5-8pm)",
    specials_url: "https://smalltabs.com/details.php?id=660",
  },
  {
    name: "Mason House",
    address: "River North @ 613 N Wells St",
    specials:
      "$5 Beer Cans (5-7pm), $5 Red & White Wine Glasses (5-7pm), $8 Craft Cocktails (5-7pm)",
    specials_url: "https://smalltabs.com/details.php?id=713",
    food_specials: "$1.50 Oysters (5-7pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=713",
  },
  {
    name: "Cary's Lounge",
    address: "West Rogers Park @ 2251 W Devon Ave",
    specials:
      "$2.50 Pabst Blue Ribbon & Schiltz Cans, $3 Old Style Drafts, $3 Budweiser, Bud Light, Coors Light, Miller Lite, & Miller High Life",
    specials_url: "https://smalltabs.com/details.php?id=287",
  },
  {
    name: "Sidebar Grille",
    address: "Loop @ 221 N LaSalle St",
    specials:
      "$3 Fernet or Fireball Shots (4pm-Close), $5 Draft Beers (4-6pm), $6 Select Wine Glasses (4-6pm), $7 Svedka Vodka Mules (4-6pm)",
    specials_url: "https://smalltabs.com/details.php?id=10",
    food_specials: "$10 Featured Flatbread (4pm-Close)",
    food_specials_url: "https://smalltabs.com/details.php?id=10",
  },
  {
    name: "Bar Takito",
    address: "West Loop @ 201 N Morgan St",
  },
  {
    name: "State Restaurant",
    address: "Lincoln Park @ 935 W Webster Ave",
    food_specials:
      "$6.99 Food Menu (with drink purchase, some exclusions apply)",
    food_specials_url: "https://smalltabs.com/details.php?id=229",
  },
  {
    name: "Ranalli's",
    address: "Lincoln Park @ 1925 N Lincoln Ave",
    specials:
      "$7 Mules, $40 Large Specialty Cocktails (Mega Mule, Red Menace, & Tennessee Top Hat)",
    specials_url: "https://smalltabs.com/details.php?id=559",
  },
  {
    name: "Rockit Burger Bar",
    address: "Wrigleyville @ 3700 N Clark St",
    specials: "$3 Select Beers, $5 Evan Williams Whiskey Shots",
    specials_url: "https://smalltabs.com/details.php?id=233",
  },
  {
    name: "Celtic Crown Public House",
    address: "North Center @ 4301 N Western Ave",
    specials:
      "$4 Founders All Day IPA, $5 Stoli Vodka Mules, $2 Miller Lite Drafts (3-7pm), $2 Well Cocktails",
    specials_url: "https://smalltabs.com/details.php?id=76",
    food_specials: "$7 Turkey Pesto Sandwich, $7 Green Ranch BLT Sandwich",
    food_specials_url: "https://smalltabs.com/details.php?id=76",
  },
  {
    name: "Four Shadows Tavern",
    address: "Lincoln Park @ 2758 N Ashland Ave",
    specials: "$5 Fireball Whiskey, $5 Stoli Vodka Flavors",
    specials_url: "https://smalltabs.com/details.php?id=29",
  },
  {
    name: "Lokal Lincoln Park",
    address: "Lincoln Park @ 2500 N Ashland Ave",
    food_specials: "$10 Mussels & Truffle Fries",
    food_specials_url: "https://smalltabs.com/details.php?id=614",
  },
  {
    name: "Leadway Bar & Grill",
    address: "Lincoln Square @ 5223 N Damen Ave",
    specials:
      "$3 Point & Pabst Blue Ribbon Bottles, $3.50 Budweiser, Bud Light, Miller Genuine Draft, Miller Lite, Miller High Life, & Old Style Bottles",
    specials_url: "https://smalltabs.com/details.php?id=375",
  },
  {
    name: "Berlin",
    address: "Lakeview @ 954 W Belmont Ave",
    specials: "$3 Bacardi Rum Bombs, $5 Tropical Sex Pints, $6 Stoli Vodka",
    specials_url: "https://smalltabs.com/details.php?id=349",
  },
  {
    name: "Southport Lanes",
    address: "Lakeview @ 3325 N Southport Ave",
    specials: "$3 Schiltz Drafts",
    specials_url: "https://smalltabs.com/details.php?id=281",
  },
  {
    name: "J.P. Burke's Patio & Tap",
    address: "Lakeview @ 2913 N Lincoln Ave",
    specials:
      "$5 Guinness & Carlsberg Drafts, $5 Jack Daniels Whiskey Drinks, $5 Captain Morgan Rum Drinks",
    specials_url: "https://smalltabs.com/details.php?id=532",
  },
  {
    name: "Devour 312",
    address: "Lincoln Park @ 1450 W Webster Ave",
    specials:
      "$5 Drafts (3-6pm), $5 Captain Morgan Rum, Tito's Vodka, Milagro Tequila, Fireball, Jameson, & Jack Daniels Whiskey Shots (3-6pm)",
    specials_url: "https://smalltabs.com/details.php?id=690",
  },
  {
    name: "Big Chicks",
    address: "Uptown @ 5024 N Sheridan Rd",
    specials: "$2 off Pitchers (4-9pm)",
    specials_url: "https://smalltabs.com/details.php?id=261",
    food_specials: "$7 Third Pound Cheeseburgers with Fries",
    food_specials_url: "https://smalltabs.com/details.php?id=261",
  },
  {
    name: "Aberdeen Tap",
    address: "West Loop @ 440 N Aberdeen St",
    specials: "$5 Jameson Whiskey Shots, $3 Pabst Blue Ribbon Drafts",
    specials_url: "https://smalltabs.com/details.php?id=457",
  },
  {
    name: "The Green Lady",
    address: "Lakeview @ 3328 N Lincoln Ave",
    specials: "$3 Pabst Blue Ribbon Cans",
    specials_url: "https://smalltabs.com/details.php?id=213",
  },
  {
    name: "Cleo's",
    address: "Ukrainian Village @ 1935 W Chicago Ave",
    specials: "$2 off Bulleit Whiskey, $4 Well Drinks",
    specials_url: "https://smalltabs.com/details.php?id=49",
    food_specials: "$6 Fish & Chips",
    food_specials_url: "https://smalltabs.com/details.php?id=49",
  },
  {
    name: "Nisei Lounge",
    address: "Wrigleyville @ 3439 N Sheffield Ave",
    specials:
      "$5 Jameson Whiskey Shots, $3 Mickey's Big Mouth Bottles, $4 Old Style Tallboys, $4 Pabst Blue Ribbon Drafts, $3 Malort Shots",
    specials_url: "https://smalltabs.com/details.php?id=307",
  },
  {
    name: "Murphy's Bleachers",
    address: "Wrigleyville @ 3653 N Sheffield Ave",
    specials:
      "$4 Southern Comfort Drinks, $14 Lagunitas IPA & Pilsner Pitchers",
    specials_url: "https://smalltabs.com/details.php?id=32",
    food_specials: "$6 Fish & Chips",
    food_specials_url: "https://smalltabs.com/details.php?id=32",
  },
  {
    name: "Emerald Isle",
    address: "Edison Park @ 6686 N Northwest Hwy",
    specials:
      "$18 Domestic Buckets, $5 Long Island Iced Teas, $4 Bombs, $3 Fireball Whiskey Shots",
    specials_url: "https://smalltabs.com/details.php?id=288",
    food_specials: "$3 Half Dozen Wings (any style)",
    food_specials_url: "https://smalltabs.com/details.php?id=288",
  },
  {
    name: "Altiro Latin Fusion",
    address: "Roscoe Village @ 2116 W Roscoe St",
    specials:
      "$1.99 Champagne (2-5pm), $2.49 Imported Mexican Beers (2-5pm), $4.99 Signature Craft Margaritas (2-5pm)",
    specials_url: "https://smalltabs.com/details.php?id=632",
    food_specials: "$1.99 Gourmet Tacos (2-5pm), $1.99 Ala Papa Bravo (2-5pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=632",
  },
  {
    name: "Francois Frankie",
    address: "Loop @ 222 W Randolph St",
    specials:
      "$5 Drafts (3-6pm), $10 Red & White Wine Glasses (3-6pm), $10 Cocktail of the Week (3-6pm)",
    specials_url: "https://smalltabs.com/details.php?id=712",
  },
  {
    name: "Furious Spoon",
    address: "Wicker Park @ 1571 N Milwaukee Ave",
  },
  {
    name: "Lottie's Pub",
    address: "Bucktown @ 1925 W Cortland St",
    specials: "$4 Corona & Corona Light",
    specials_url: "https://smalltabs.com/details.php?id=79",
    food_specials: "50¢ Jumbo Wings",
    food_specials_url: "https://smalltabs.com/details.php?id=79",
  },
  {
    name: "Fat Cat",
    address: "Uptown @ 4840 N Broadway St",
    specials:
      "$6 Uptown Royale (4-6pm), $6 Four Roses Manhattan (4-6pm), $6 Prairie Organic Gin & Ginger (4-6pm), $5 Select Craft Beers (4-6pm), $5 Highballs (4-6pm), $6 Select Wines (4-6pm)",
    specials_url: "https://smalltabs.com/details.php?id=120",
  },
  {
    name: "City Pool Hall",
    address: "West Loop @ 640 W Hubbard St",
    specials: "$4 Modelo & Corona",
    specials_url: "https://smalltabs.com/details.php?id=561",
  },
  {
    name: "El Tequilas Bar & Grill",
    address: "Lincoln Park @ 2826 N Lincoln Ave",
    specials: "$3 Budweiser (4-6pm), $3 Tecate (4-6pm), $5 Margaritas (4-6pm)",
    specials_url: "https://smalltabs.com/details.php?id=678",
  },
  {
    name: "Brownstone Tavern",
    address: "North Center @ 3937 N Lincoln Ave",
    specials:
      "$5 Stella Artois, $5 Jameson Whiskey Shots, $7 Absolut Vodka Mules",
    specials_url: "https://smalltabs.com/details.php?id=9",
  },
  {
    name: "ZED451",
    address: "River North @ 739 N Clark St",
    specials: "$4.51 Grey Goose Vodka Cocktails (4:30-7pm)",
    specials_url: "https://smalltabs.com/details.php?id=639",
  },
  {
    name: "Durkin's Tavern",
    address: "Lincoln Park @ 810 W Diversey Ave",
    specials: "$4 Fireball Whiskey Shots, $3 Bud Light Drafts",
    specials_url: "https://smalltabs.com/details.php?id=22",
  },
  {
    name: "Wabash Tap",
    address: "South Loop @ 1233 S Wabash Ave",
    specials: "$4 Drafts (4-6pm), $14 Buckets (4-6pm)",
    specials_url: "https://smalltabs.com/details.php?id=142",
  },
  {
    name: "Riverview Tavern",
    address: "Roscoe Village @ 1958 W Roscoe St",
    specials:
      "$1 off Ciders, $1 off Wine Glasses, $5 Brewery-of-the-Month Drafts",
    specials_url: "https://smalltabs.com/details.php?id=220",
  },
  {
    name: "Lion Head Pub",
    address: "Lincoln Park @ 2251 N Lincoln Ave",
    food_specials: "$1 Fish Tacos, 25¢ Wings (4-7pm, with beverage purchase)",
    food_specials_url: "https://smalltabs.com/details.php?id=25",
  },
  {
    name: "Mr. Brown's Lounge Loop",
    address: "Loop @ 81 E Wacker Dr",
    specials:
      "Half Price Island Rum Punch (3-6pm), Half Off Red Stripe Bottles (3-6pm)",
    specials_url: "https://smalltabs.com/details.php?id=615",
  },
  {
    name: "Yak-Zies Wrigleyville",
    address: "Wrigleyville @ 3710 N Clark St",
    specials: "$5 Fat Tire, $5 Fireball Whiskey",
    specials_url: "https://smalltabs.com/details.php?id=149",
    food_specials: "$5 Fish Sandwiches",
    food_specials_url: "https://smalltabs.com/details.php?id=149",
  },
  {
    name: "The Grafton",
    address: "Lincoln Square @ 4530 N Lincoln Ave",
    specials: "$5 Berghoff Reppin' Red Drafts",
    specials_url: "https://smalltabs.com/details.php?id=260",
    food_specials: "$11 The Labor Day Burger",
    food_specials_url: "https://smalltabs.com/details.php?id=260",
  },
  {
    name: "Blackfinn Ameripub",
    address: "River North @ 65 W Kinzie St",
    specials: "$5 Bacardi Cocktails",
    specials_url: "https://smalltabs.com/details.php?id=543",
  },
  {
    name: "The Hampton Social",
    address: "River North @ 353 W Hubbard St",
    specials: "Half Price Specialty Cocktails (4-6pm)",
    specials_url: "https://smalltabs.com/details.php?id=636",
    food_specials: "Half Price Pizzas (4-6pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=636",
  },
  {
    name: "G&O",
    address: "West Loop @ 459 N Ogden Ave",
    specials:
      "$3 House Whiskey or Bourbon Shot (with draft beer purchase), $3 Tito's Vodka (4-6pm), $3 Ford's Gin (4-6pm), $3 Drink of the Week (4-6pm)",
    specials_url: "https://smalltabs.com/details.php?id=641",
  },
  {
    name: "Brickhouse Tavern",
    address: "Wrigleyville @ 3647 N Clark St",
    specials: "$5 You-Call-It's",
    specials_url: "https://smalltabs.com/details.php?id=681",
    food_specials: "Half Price Appetizers (after 3pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=681",
  },
];

const monday = [
  {
    name: "Pippin's Tavern",
    address: "Near North Side @ 806 N Rush St",
    specials:
      "$5.50 Malort, $5 Maestro Dobel Tequila, $4 Wondermint, $5 Revel Stoke Roasted Pecan Whiskey, $6 Don Q Gran Anejo Mules, $6 Bulldog Gin Rickeys",
    specials_url: "https://smalltabs.com/details.php?id=71",
  },
  {
    name: "Davenport's Piano Bar",
    address: "Wicker Park @ 1383 N Milwaukee Ave",
  },
  {
    name: "Third Rail Tavern",
    address: "West Loop @ 1133 W Madison St",
    specials:
      "$5 Goose Island, Three Floyds, & Bell's Brewery Drafts (5-9pm), $8 Bulleit Bourbon or Rye Manhattans (5-9pm), $8 Bulleit Bourbon or Rye Old Fashioneds (5-9pm)",
    specials_url: "https://smalltabs.com/details.php?id=303",
  },
  {
    name: "Keenan O'Reilly's",
    address: "Lakeview @ 3916 N Ashland Ave",
    specials:
      "$3.50 Goose Island & Sam Adams Bottles, $2 Pabst Blue Ribbon Cans, $2.50 Miller High Life Tallboys, $3 Labatt Blue Drafts, $2.50 Old Style Drafts",
    specials_url: "https://smalltabs.com/details.php?id=454",
  },
  {
    name: "SideDoor",
    address: "Streeterville @ 100 E Ontario St",
    food_specials:
      "Half Price Avocado Mash, Stuffed Mushrooms, Chips & Dip, IPA Beer Pretzels, & Deviled Eggs from 3-5pm",
    food_specials_url: "https://smalltabs.com/details.php?id=574",
  },
  {
    name: "The Abbey Pub",
    address: "Irving Park @ 3420 W Grace St",
    specials: "$4 Smithwicks, $4 Harp, $5 Jameson Black, $5 2 Gingers Whiskey",
    specials_url: "https://smalltabs.com/details.php?id=31",
    food_specials: "$9.95 Fish & Chips, Half Price Appetizers until 6pm",
    food_specials_url: "https://smalltabs.com/details.php?id=31",
  },
  {
    name: "City Pool Hall",
    address: "West Loop @ 640 W Hubbard St",
    specials: "$4 Modelo & Corona",
    specials_url: "https://smalltabs.com/details.php?id=561",
  },
  {
    name: "Rockwood Place",
    address: "Wrigleyville @ 3466 N Clark St",
    specials: "$3 Bud Light Drafts, $5 Flavored Bombs, $6 Margaritas",
    specials_url: "https://smalltabs.com/details.php?id=350",
    food_specials: "Half Price Pizzas",
    food_specials_url: "https://smalltabs.com/details.php?id=350",
  },
  {
    name: "Nola Gastropub",
    address: "Lakeview @ 3481 N Clark St",
    specials:
      "$3.50 Founders All Day IPA, $3.50 Founders Rubaeus, $4 Beer of the Month",
    specials_url: "https://smalltabs.com/details.php?id=642",
  },
  {
    name: "The Beetle Bar & Grill",
    address: "Humboldt Park @ 2532 W Chicago Ave",
    specials: "$4 Curious Traveler",
    specials_url: "https://smalltabs.com/details.php?id=2",
    food_specials: "$8 Fish Fry",
    food_specials_url: "https://smalltabs.com/details.php?id=2",
  },
  {
    name: "Fifolet",
    address: "Wicker Park @ 1942 W Division St",
    specials:
      "$4 Lagunitas Sumpin' Easy Drafts (5-9pm), $3 Jameson Whiskey Shots (5-9pm)",
    specials_url: "https://smalltabs.com/details.php?id=695",
    food_specials: "$9 Half Po'Boy & Soup Special (5-9pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=695",
  },
  {
    name: "Kirkwood Bar & Grill",
    address: "Lakeview @ 2934 N Sheffield Ave",
    specials: "$4 All Ciders, $5 Jello Shots",
    specials_url: "https://smalltabs.com/details.php?id=13",
  },
  {
    name: "Monty's Tap",
    address: "Near North Side @ 600 W Chicago Ave",
    specials:
      "$4 Select Beers (3:30-5:30pm), $6 Moscow Mules (3:30-5:30pm), $7 Sauvignon Blanc, Pinot Noir, & Rosé Glasses (3:30-5:30pm)",
    specials_url: "https://smalltabs.com/details.php?id=707",
  },
  {
    name: "Fireside Restaurant & Lounge",
    address: "Edgewater @ 5739 N Ravenswood Ave",
    specials: "$2.25 Pabst Blue Ribbon Tallboys",
    specials_url: "https://smalltabs.com/details.php?id=441",
    food_specials: "Complimentary Happy Hour Buffet (4-6pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=441",
  },
  {
    name: "Ph.D Pub",
    address: "University Village @ 1257 S Halsted St",
    specials:
      "$3.50 Goose Island Oktoberfest 12oz Mason Jar Drafts, $3 Pabst Blue Ribbon & Rolling Rock Tallboys, $3 Bud Light Drafts, $9 Bud Light Pitchers, $3.50 Tullamore Dew Shots, $4 Carlsberg Drafts, $4 Fireball Shots, $4 Apple Moonshine Shots, $6 Vodka Lemonades, $8 Ph.D Vodka Mules",
    specials_url: "https://smalltabs.com/details.php?id=570",
  },
  {
    name: "Harmony Grill",
    address: "Lakeview @ 3159 N Southport Ave",
    specials: "$4 Fireball Whiskey",
    specials_url: "https://smalltabs.com/details.php?id=242",
  },
  {
    name: "J & M Tap",
    address: "Ukrainian Village @ 957 N Leavitt St",
    specials:
      "$2 Pabst Blue Ribbon Drafts, $2.25 Point Drafts, $3 Domestic Bottles, $3 Pabst Blue Ribbon & Schiltz Tallboys, $4 Stella Artois Drafts, $4 Import & Craft Bottles, $4 Jameson Whiskey Shots, $4 Jim Beam Bourbon & Rye Shots, $5 Makers Mark Bourbon Drinks, $5 Stoli Vodka Drinks, $5 Crown Royal Whiskey Drinks",
    specials_url: "https://smalltabs.com/details.php?id=540",
  },
  {
    name: "Lion Head Pub",
    address: "Lincoln Park @ 2251 N Lincoln Ave",
    food_specials: "$1 Fish Tacos, 25¢ Wings (4-7pm, with beverage purchase)",
    food_specials_url: "https://smalltabs.com/details.php?id=25",
  },
  {
    name: "Streeter's Tavern",
    address: "Near North Side @ 50 E Chicago Ave",
    specials: "$5 Jim Beam Bourbon",
    specials_url: "https://smalltabs.com/details.php?id=72",
  },
  {
    name: "Casati's Pizza Vino",
    address: "Lincoln Park @ 444 W Fullerton Pkwy",
    food_specials: "$10 & Under Bar Menu",
    food_specials_url: "https://smalltabs.com/details.php?id=703",
  },
  {
    name: "The Irish Oak",
    address: "Wrigleyville @ 3511 N Clark St",
    specials: "$6 Budweiser Tallboys & Shot Combo, $25 Fish Bowls",
    specials_url: "https://smalltabs.com/details.php?id=199",
    food_specials: "$10 All-You-Can-Eat Fish & Chips",
    food_specials_url: "https://smalltabs.com/details.php?id=199",
  },
  {
    name: "Black Rock Pub & Kitchen",
    address: "Lakeview @ 3614 N Damen Ave",
    specials:
      "$1 off Off Color Brewery Drafts & Bottles, $4 Slow & Low Rye Shots",
    specials_url: "https://smalltabs.com/details.php?id=59",
    food_specials: "40¢ Wings",
    food_specials_url: "https://smalltabs.com/details.php?id=59",
  },
  {
    name: "Matisse Tavern & Grill",
    address: "Lincoln Park @ 674 W Diversey Pkwy",
    specials: "$5 Martinis",
    specials_url: "https://smalltabs.com/details.php?id=222",
  },
  {
    name: "The Cubby Bear",
    address: "Wrigleyville @ 1059 W Addison St",
    specials: "$5 Domestic Tallboys",
    specials_url: "https://smalltabs.com/details.php?id=150",
  },
  {
    name: "Wild Goose Bar & Grill",
    address: "North Center @ 4265 N Lincoln Ave",
    specials:
      "$5 Guinness Imperial Drafts, $5 Metropolitan Flywheel Drafts, $5 Select Martinis",
    specials_url: "https://smalltabs.com/details.php?id=37",
    food_specials: "$8 All-You-Can-Eat Fish Fry",
    food_specials_url: "https://smalltabs.com/details.php?id=37",
  },
  {
    name: "Jerk Modern Jamaican Grill",
    address: "Noble Square @ 811 W Chicago Ave",
    specials: "$3 Mystery Beer (4-7pm), $7 Select Cocktails (4-7pm)",
    specials_url: "https://smalltabs.com/details.php?id=634",
  },
  {
    name: "Spyners Pub",
    address: "Lincoln Square @ 4623 N Western Ave",
    specials:
      "$3.50 Stella Artois, $3.50 Jose Cuervo Gold Tequila Shots, $3.50 Dooley's Shots",
    specials_url: "https://smalltabs.com/details.php?id=97",
  },
  {
    name: "The Kerryman",
    address: "Near North Side @ 661 N Clark St",
    specials:
      "$4 Guiness (4-9pm), $5 Jameson Shots (4-9pm), $6 Tito's Vodka Drinks (4-9pm)",
    specials_url: "https://smalltabs.com/details.php?id=62",
    food_specials: "$10 Fish & Chips (4-9pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=62",
  },
  {
    name: "Duffy's Tavern",
    address: "Lincoln Park @ 422 W Diversey Ave",
    specials:
      "$1 Miller Lite & Coors Light Bottles (5-7pm), $2 Well Drinks (5-7pm), $3 Fireball Whiskey Shots (5-7pm), $4 Wine Glasses (5-7pm)",
    specials_url: "https://smalltabs.com/details.php?id=23",
  },
  {
    name: "J.P. Burke's Patio & Tap",
    address: "Lakeview @ 2913 N Lincoln Ave",
    specials:
      "$5 Guinness & Carlsberg Drafts, $5 Jack Daniels Whiskey Drinks, $5 Captain Morgan Rum Drinks",
    specials_url: "https://smalltabs.com/details.php?id=532",
  },
  {
    name: "Mr. Brown's Lounge Loop",
    address: "Loop @ 81 E Wacker Dr",
    specials:
      "Half Price Island Rum Punch (3-6pm), Half Off Red Stripe Bottles (3-6pm)",
    specials_url: "https://smalltabs.com/details.php?id=615",
  },
  {
    name: "Gino's North",
    address: "Edgewater @ 1111 W Granville Ave",
    specials: "$3 Sangria Glasses",
    specials_url: "https://smalltabs.com/details.php?id=238",
  },
  {
    name: "Bar Louie University Village",
    address: "University Village @ 1325 S Halsted St",
    specials:
      "$3.25 Drafts (4-7pm), $4.25 Wine Glasses (4-7pm), $5.25 Signature Martinis (4-7pm)",
    specials_url: "https://smalltabs.com/details.php?id=654",
    food_specials:
      "Half Price Select Appetizers (4-7pm), Half Price Flatbreads (4-7pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=654",
  },
  {
    name: "Stretch Bar & Grill",
    address: "Wrigleyville @ 3485 N Clark St",
    specials:
      "$30 Domestic Tallboys, Domestic Drafts, Call Cocktails, Wine, & Select Appetizers Happy Hour Package (7-10pm), $25 Domestic Drafts, Well Cocktails, Wine, & Select Appetizer Happy Hour Package (7-10pm)",
    specials_url: "https://smalltabs.com/details.php?id=81",
  },
  {
    name: "Benchmark",
    address: "Old Town @ 1510 N Wells St",
    specials:
      "$4 Truly & White Claw Cans (5-8pm), $5 Jack Daniels Whiskey Shots, $5 El Jimador Tequila Shots",
    specials_url: "https://smalltabs.com/details.php?id=508",
    food_specials: "Free Burgers (limited quantities, with drink purchase)",
    food_specials_url: "https://smalltabs.com/details.php?id=508",
  },
  {
    name: "Duke of Perth",
    address: "Lakeview @ 2913 N Clark St",
    food_specials: "$11.95 All-You-Can-Eat Fish & Chips",
    food_specials_url: "https://smalltabs.com/details.php?id=92",
  },
  {
    name: "Leader Bar",
    address: "Irving Park @ 3000 W Irving Park Rd",
    specials:
      "$15 Budweiser, Bud Light, Miller Lite, & Miller High Life Buckets, $18 Amstel Light, Heineken, Heineken Light, Tecate, & Newcastle Brown Ale Buckets",
    specials_url: "https://smalltabs.com/details.php?id=381",
    food_specials: "Half Price Appetizers from 4-7pm",
    food_specials_url: "https://smalltabs.com/details.php?id=381",
  },
  {
    name: "Alice's Lounge",
    address: "Avondale @ 3556 W Belmont Ave",
  },
  {
    name: "Grandview Tavern",
    address: "West Loop @ 1202 W Grand Ave",
    specials:
      "$3 Hamms Cans, $5 Jameson Whiskey Shots, $5 Fireball Whiskey Shots",
    specials_url: "https://smalltabs.com/details.php?id=476",
    food_specials: "$9 Fish Tacos",
    food_specials_url: "https://smalltabs.com/details.php?id=476",
  },
  {
    name: "El Tequilas Bar & Grill",
    address: "Lincoln Park @ 2826 N Lincoln Ave",
    specials: "$3 Budweiser (4-6pm), $3 Tecate (4-6pm), $5 Margaritas (4-6pm)",
    specials_url: "https://smalltabs.com/details.php?id=678",
  },
  {
    name: "Bar Takito",
    address: "West Loop @ 201 N Morgan St",
  },
  {
    name: "O'Donovan's Pub",
    address: "North Center @ 2100 W Irving Park Rd",
    specials:
      "$15 Giant 48oz Cocktails, $5 Margaritas, $3 Tecate Cans, $13 Tecate Buckets, $1 off Tequila Shots",
    specials_url: "https://smalltabs.com/details.php?id=157",
    food_specials: "$2 Tacos",
    food_specials_url: "https://smalltabs.com/details.php?id=157",
  },
  {
    name: "Four Shadows Tavern",
    address: "Lincoln Park @ 2758 N Ashland Ave",
    specials: "$5 Fireball Whiskey, $5 Stoli Vodka Flavors",
    specials_url: "https://smalltabs.com/details.php?id=29",
  },
  {
    name: "Lincoln Station",
    address: "Lincoln Park @ 2432 N Lincoln Ave",
    specials: "$4 Featured Drafts",
    specials_url: "https://smalltabs.com/details.php?id=248",
    food_specials: "$10.95 All-You-Can-Eat Fish Fry",
    food_specials_url: "https://smalltabs.com/details.php?id=248",
  },
  {
    name: "Racine Plumbing Bar & Grill",
    address: "Lincoln Park @ 2642 N Lincoln Ave",
    specials:
      "$35 Drink Package including Draft Beers, Well Drinks, Select Call Drinks, Domestic Bottles and Cans, & Half Price Food (9pm-12am)",
    specials_url: "https://smalltabs.com/details.php?id=357",
  },
  {
    name: "The Other Side Bar",
    address: "Lincoln Park @ 2436 N Clark St",
    specials: "$5 Moscow Mules",
    specials_url: "https://smalltabs.com/details.php?id=192",
  },
  {
    name: "The Drinkingbird",
    address: "Lincoln Park @ 2201 N Clybourn Ave",
    specials: "$5 Schlitz & Dickel Whiskey Shot Combo",
    specials_url: "https://smalltabs.com/details.php?id=48",
  },
  {
    name: "Finley Dunne's Tavern",
    address: "Lakeview @ 3458 N Lincoln Ave",
    specials: "$5 UV Vodka Bombs, $2 Miller High Life Drafts",
    specials_url: "https://smalltabs.com/details.php?id=5",
    food_specials: "$12 All-You-Can-Eat Blue Moon Fish Fry",
    food_specials_url: "https://smalltabs.com/details.php?id=5",
  },
  {
    name: "Rudy's Bar & Grille",
    address: "Loop @ 69 E Madison St",
    food_specials:
      "$11.95 Fish & Chips, $12.95 Salmon Burgers, Half Price Appetizers (3-5pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=380",
  },
  {
    name: "Porter Kitchen & Deck",
    address: "West Loop @ 150 N Riverside Ave",
    specials:
      "$7 Moscow Mules (3:30-5:30pm), $8 Classic Margaritas (3:30-5:30pm), $9 Old Fashioneds (3:30-5:30pm), $9 Select Wine Glasses (3:30-5:30pm)",
    specials_url: "https://smalltabs.com/details.php?id=682",
  },
  {
    name: "The Bedford",
    address: "Wicker Park @ 1612 W Division St",
    specials: "$8 Draft Cocktails",
    specials_url: "https://smalltabs.com/details.php?id=416",
  },
  {
    name: "Tuman's Tap & Grill",
    address: "Ukrainian Village @ 2159 W Chicago Ave",
    specials: "$3.50 Pabst Blue Ribbon Drafts",
    specials_url: "https://smalltabs.com/details.php?id=662",
  },
  {
    name: "Kit Kat Lounge",
    address: "Lakeview @ 3700 N Halsted St",
    food_specials: "$30 Prix-Fixe Menu (Salad, Entree, & Martini)",
    food_specials_url: "https://smalltabs.com/details.php?id=196",
  },
  {
    name: "Boiler Room",
    address: "Logan Square @ 2210 N California Ave",
    food_specials:
      "$10 PB&J Special: Pizza Slice, Pabst Blue Ribbon Tallboy, & Jameson Whiskey Shot Combo",
    food_specials_url: "https://smalltabs.com/details.php?id=333",
  },
  {
    name: "Trader Todd's",
    address: "Lakeview @ 3216 N Sheffield Ave",
    specials: "$1 Rolling Rock Drafts (4:30-6:30pm)",
    specials_url: "https://smalltabs.com/details.php?id=455",
    food_specials: "$2 Select Appetizers (4:30-6:30pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=455",
  },
  {
    name: "Easy Bar",
    address: "Wicker Park @ 1944 W Division St",
    specials: "$5 Jameson Shots",
    specials_url: "https://smalltabs.com/details.php?id=215",
  },
  {
    name: "Lowcountry South Loop",
    address: "South Loop @ 1132 S Wabash Ave",
    specials: "$24 Sangria Carafes (5-7pm), Half Price Beer & Wine (5-7pm)",
    specials_url: "https://smalltabs.com/details.php?id=708",
    food_specials: "$10 Mussels & Fries (5-7pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=708",
  },
  {
    name: "Standard Bar & Grill",
    address: "Wicker Park @ 1332 N Milwaukee Ave",
    specials: "$6 Ketel One Vodka Drinks",
    specials_url: "https://smalltabs.com/details.php?id=676",
    food_specials:
      "$20 After-Work Burger Deal (Cheeseburger with Fries, Domestic Bottles, & Well Drinks from 6-9pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=676",
  },
  {
    name: "Pizzeria Serio",
    address: "Lakeview @ 1708 N Belmont Ave",
    specials: "$2 Pabst Blue Ribbon Tallboys, $8 Beer Flights",
    specials_url: "https://smalltabs.com/details.php?id=385",
  },
  {
    name: "Fremont",
    address: "River North @ 15 W Illinois St",
    specials:
      "$3 Beers (5-9pm), $4 Mixed Drinks (5-9pm), $5 Mule Bar (5-9pm), $5 Wine Glasses (5-9pm), $6 Tito's Vodka Cocktails (5-9pm)",
    specials_url: "https://smalltabs.com/details.php?id=658",
  },
  {
    name: "The Roost Carolina Kitchen",
    address: "North Center @ 1467 W Irving Park Rd",
    specials: "$5 Boilermakers (9-11pm), 25% off Signature Cocktails (9-11pm)",
    specials_url: "https://smalltabs.com/details.php?id=672",
  },
  {
    name: "Paddy Long's",
    address: "Lincoln Park @ 1028 W Diversey Ave",
    specials: "$4 Beer of the Month",
    specials_url: "https://smalltabs.com/details.php?id=119",
    food_specials: "$13.95 Fish Fry",
    food_specials_url: "https://smalltabs.com/details.php?id=119",
  },
  {
    name: "Sherry's Bar",
    address: "West Rogers Park @ 5652 N Western Ave",
    specials:
      "$5 Long Island Iced Teas, $9 Old Style Buckets, $13 Miller Lite Buckets",
    specials_url: "https://smalltabs.com/details.php?id=645",
  },
  {
    name: "Harbee Liquors & Tavern",
    address: "Pilsen @ 1345 W 18th St",
    specials: "$3 Budweiser & Miller Family Beers",
    specials_url: "https://smalltabs.com/details.php?id=548",
  },
  {
    name: "Bottom Lounge",
    address: "West Loop @ 1375 W Lake St",
    specials: "$3.50 Schiltz Drafts, $4 Budweiser & Bud Light Bottles",
    specials_url: "https://smalltabs.com/details.php?id=436",
  },
  {
    name: "The Boss Bar",
    address: "River North @ 420 N Clark St",
    food_specials:
      "$10 Burger & Miller Lite Draft Combo, $24 Cheese Pizza & Miller Lite Pitcher Combo",
    food_specials_url: "https://smalltabs.com/details.php?id=560",
  },
  {
    name: "Simone's Bar",
    address: "Pilsen @ 960 W 18th St",
    food_specials: "$8 Half Pound Burger & Pabst Blue Ribbon Tallboy Combo",
    food_specials_url: "https://smalltabs.com/details.php?id=107",
  },
  {
    name: "Jack & Gingers",
    address: "Bucktown @ 2048 W Armitage Ave",
    specials: "$4 Well Drinks, $2 off Bulleit Whiskey, $5 Jack & Gingers",
    specials_url: "https://smalltabs.com/details.php?id=50",
    food_specials: "$6 Fish & Chips",
    food_specials_url: "https://smalltabs.com/details.php?id=50",
  },
  {
    name: "Emerald Isle",
    address: "Edison Park @ 6686 N Northwest Hwy",
    specials:
      "$18 Domestic Buckets, $5 Long Island Iced Teas, $4 Bombs, $3 Fireball Whiskey Shots",
    specials_url: "https://smalltabs.com/details.php?id=288",
    food_specials: "$3 Half Dozen Wings (any style)",
    food_specials_url: "https://smalltabs.com/details.php?id=288",
  },
  {
    name: "Celtic Crown Public House",
    address: "North Center @ 4301 N Western Ave",
    specials:
      "$4 Founders All Day IPA, $5 Stoli Vodka Mules, $2 Miller Lite Drafts (3-7pm), $2 Well Cocktails",
    specials_url: "https://smalltabs.com/details.php?id=76",
    food_specials: "$7 Turkey Pesto Sandwich, $7 Green Ranch BLT Sandwich",
    food_specials_url: "https://smalltabs.com/details.php?id=76",
  },
  {
    name: "McCormick & Schmick's",
    address: "Near North Side @ 41 E Chestnut St",
    specials:
      "$6 Canyon Road Chardonnay, Canyon Cabernet Sauvignon, & Bringer White Zinfandel Wine Glasses (4-7pm), $7 Agave Rita, All American, & Talk of the Town Cocktails (4-7pm), $9 Urban Influence, Brandy Sidebar, & Sour Apple Martinis (4-7pm)",
    specials_url: "https://smalltabs.com/details.php?id=605",
  },
  {
    name: "Cork Lounge",
    address: "Lakeview @ 1822 W Addison St",
    specials:
      "$2 Pabst Blue Ribbon Drafts, $4 Mimosas, $4 Apple Pie Shots, $5 Genessee Cream Ale & Jim Beam Shot Combo",
    specials_url: "https://smalltabs.com/details.php?id=326",
  },
  {
    name: "Flo & Santos",
    address: "South Loop @ 1310 S Wabash Ave",
    specials: "$18 Polish Vodka Flights",
    specials_url: "https://smalltabs.com/details.php?id=489",
  },
  {
    name: "Gannon's Pub",
    address: "North Center @ 4264 N Lincoln Ave",
    specials: "$4 Harp Drafts",
    specials_url: "https://smalltabs.com/details.php?id=16",
    food_specials: "$7.75 Fish & Chips",
    food_specials_url: "https://smalltabs.com/details.php?id=16",
  },
  {
    name: "Seven Lions",
    address: "Loop @ 130 S Michigan Ave",
    specials:
      "$9 Specialty Cocktails, $24 Select Wine Bottles (3-6pm), Half Price Featured Drafts (3-6pm)",
    specials_url: "https://smalltabs.com/details.php?id=683",
    food_specials:
      "$8 Hummus (3-6pm), $8 Pulled Pork Nachos (3-6pm), $8 Crispy Chicken Sliders (3-6pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=683",
  },
  {
    name: "Hopsmith Tavern",
    address: "Near North Side @ 15 W Division St",
    specials: "$6 Pabst Blue Ribbon & Jack Daniels Whiskey Shot Combo",
    specials_url: "https://smalltabs.com/details.php?id=607",
    food_specials: "Half Price Appetizers (4-6pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=607",
  },
  {
    name: "Flagship Tavern & Grill",
    address: "Lakeview @ 1622 W Belmont Ave",
    specials: "$15 Domestic Buckets",
    specials_url: "https://smalltabs.com/details.php?id=552",
  },
  {
    name: "Harrigan's Pub",
    address: "Lakeview @ 2816 N Halsted St",
    specials: "$6 Makers Mark Manhattans, $2 Rolling Rock Cans (12-6pm)",
    specials_url: "https://smalltabs.com/details.php?id=648",
  },
  {
    name: "Longman & Eagle",
    address: "Logan Square @ 2657 N Kedzie Ave",
    specials:
      "$2 Old Milwaukee & Pabst Blue Ribbon Cans, $3 Old Style Drafts, $3 Select Whiskey Shots",
    specials_url: "https://smalltabs.com/details.php?id=348",
  },
  {
    name: "Leona's Old Irving",
    address: "Irving Park @ 3877 N Elston Ave",
    specials:
      "$5 Cocktails (6-9pm), $5 Frozen Margaritas (6-9pm), $5 Rocks Margaritas (6-9pm), $5 Long Island Iced Teas (6-9pm)",
    specials_url: "https://smalltabs.com/details.php?id=667",
    food_specials: "$3 off Wing Dings",
    food_specials_url: "https://smalltabs.com/details.php?id=667",
  },
  {
    name: "Wheel House",
    address: "Lakeview @ 3553 N Southport Ave",
    specials: "$5 UV Bombs, $4 Craft Can Beers",
    specials_url: "https://smalltabs.com/details.php?id=169",
    food_specials: "$7 Fish & Chips, $10 Crab Cake Melts",
    food_specials_url: "https://smalltabs.com/details.php?id=169",
  },
  {
    name: "Redmond's Ale House",
    address: "Wrigleyville @ 3358 N Sheffield Ave",
    specials:
      "$3 Tallboys, $4 Fireball Whiskey Shots, $6 Jameson Whiskey Shots",
    specials_url: "https://smalltabs.com/details.php?id=20",
  },
  {
    name: "Knife & Tine",
    address: "Lincoln Park @ 1417 W Fullerton Ave",
    specials:
      "Half Price Draft Beers (3-6pm), Half Price Craft Cocktails (3-6pm), Half Price Wine Glasses (3-6pm)",
    specials_url: "https://smalltabs.com/details.php?id=640",
    food_specials: "$5 Bar Snacks (3-6pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=640",
  },
  {
    name: "Bulldog Ale House (Loyola)",
    address: "Rogers Park @ 6606 N Sheridan Rd",
    specials: "$5 Jameson Whiskey, $5 Guinness, $6 Irish Car Bomb",
    specials_url: "https://smalltabs.com/details.php?id=663",
    food_specials: "$10.99 All-You-Can-Eat Fish Fry",
    food_specials_url: "https://smalltabs.com/details.php?id=663",
  },
  {
    name: "Hubbard Inn",
    address: "River North @ 110 W Hubbard St",
    food_specials:
      "$2 Raw Bar (selections include Shrimp, Lobster, Scallops, King Crab, & Oysters)",
    food_specials_url: "https://smalltabs.com/details.php?id=554",
  },
  {
    name: "Sheffield's",
    address: "Lakeview @ 3258 N Sheffield Ave",
    specials: "$4 Brewery-of-the-Month Drafts",
    specials_url: "https://smalltabs.com/details.php?id=54",
  },
  {
    name: "Headquarters Beercade River North",
    address: "River North @ 213 W Institute St",
  },
  {
    name: "Porkchop Hyde Park",
    address: "Hyde Park @ 1516 E Harper Ct",
    specials: "Half Price Drinks (10pm-Close)",
    specials_url: "https://smalltabs.com/details.php?id=684",
    food_specials: "Half Price Appetizers (10pm-Close)",
    food_specials_url: "https://smalltabs.com/details.php?id=684",
  },
  {
    name: "Joe's Bar",
    address: "Near North Side @ 940 W Weed St",
    specials:
      "$2 Fireball Whiskey Shots (8-10pm), $2 Budweiser & Coors Light Bottles (8-10pm), $3 Vodka Mixers (8-10pm)",
    specials_url: "https://smalltabs.com/details.php?id=14",
  },
  {
    name: "Four Treys Tavern",
    address: "Roscoe Village @ 3333 N Damen Ave",
    specials:
      "$5.50 Bombs, $3.75 Well Drinks, $2.50 Pabst Blue Ribbon, $3.50 Old Style Tallboys, $4 Jameson Whiskey Shots, $3 Domestic Bottles, $4-4.50 Import Bottles",
    specials_url: "https://smalltabs.com/details.php?id=78",
  },
  {
    name: "Bourbon on Division",
    address: "Wicker Park @ 2050 W Division St",
    specials:
      "$5 Deep Eddy Rum Lemon Drops, $20 Domestic Buckets, $5 Tito's Vodka or Tullamore Dew Whiskey Mixed Drinks (9-11pm)",
    specials_url: "https://smalltabs.com/details.php?id=710",
  },
  {
    name: "The Arrogant Frog Bar",
    address: "Lincoln Park @ 1365 W Fullerton Ave",
    specials:
      "$3 Bud Light Drafts, $4 Fireball Whiskey Shots, $4 Craft Beers, $5 Well Cocktails, $5 Malibu Rum Cocktails",
    specials_url: "https://smalltabs.com/details.php?id=240",
  },
  {
    name: "WestEnd",
    address: "West Loop @ 1326 W Madison St",
    specials:
      "Half Price Drafts (excluding Guinness) (5-7pm), Half Price Wine Glasses (5-7pm), Half Price Well Drinks (5-7pm)",
    specials_url: "https://smalltabs.com/details.php?id=11",
    food_specials: "Half Price Appetizers (excluding Nachos) (5-7pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=11",
  },
  {
    name: "Tai's Til 4",
    address: "Lakeview @ 3611 N Ashland Ave",
    specials: "$7 Flagship Bombs",
    specials_url: "https://smalltabs.com/details.php?id=549",
  },
  {
    name: "The Scout",
    address: "South Loop @ 1301 S Wabash Ave",
    specials: "$3 Sam Adams Boston Lager Drafts",
    specials_url: "https://smalltabs.com/details.php?id=451",
  },
  {
    name: "The Hidden Shamrock",
    address: "Lincoln Park @ 2723 N Halsted St",
    specials:
      "Half Price Craft Cocktails, $3 Rotating Drafts, $3 Whiskey Shots",
    specials_url: "https://smalltabs.com/details.php?id=336",
  },
  {
    name: "Waterhouse Tavern",
    address: "Lakeview @ 3407 N Paulina St",
    specials: "$4 Fireball Whiskey, $15 Bud Light Buckets",
    specials_url: "https://smalltabs.com/details.php?id=212",
  },
  {
    name: "Farraguts",
    address: "Andersonville @ 5240 N Clark St",
    specials: "$3 Miller Lite Drafts, $3 Pabst Blue Ribbon Drafts",
    specials_url: "https://smalltabs.com/details.php?id=445",
  },
  {
    name: "Declan's Irish Pub",
    address: "Near North Side @ 1240 N Wells St",
    specials: "$4 Select Craft Draft, $5 Jack Daniels Fire",
    specials_url: "https://smalltabs.com/details.php?id=365",
    food_specials: "$10 Fish & Chips",
    food_specials_url: "https://smalltabs.com/details.php?id=365",
  },
  {
    name: "Kincade's Bar & Grill",
    address: "Lincoln Park @ 950 W Armitage Ave",
    specials:
      "$4 Draft of the Day, $6 Makers Mark Bourbon Cocktails, $7 Pabst Blue Ribbon & Jameson Whiskey Shot Combo",
    specials_url: "https://smalltabs.com/details.php?id=153",
  },
  {
    name: "Hangge-Uppe",
    address: "Near North Side @ 16 W Division St",
    specials: "$5 Bacardi Flavored Rum",
    specials_url: "https://smalltabs.com/details.php?id=84",
  },
  {
    name: "The Full Shilling",
    address: "Wrigleyville @ 3724 N Clark St",
    specials:
      "$5 Fireball Whiskey, $20 Table Tappers, Half Price Drinks (6-9pm)",
    specials_url: "https://smalltabs.com/details.php?id=623",
    food_specials: "$7.95 Fish & Chips, $1 Hot Dogs",
    food_specials_url: "https://smalltabs.com/details.php?id=623",
  },
  {
    name: "The Temple Bar",
    address: "Lakeview @ 3001 N Ashland Ave",
    specials: "$4 Lagunitas Drafts",
    specials_url: "https://smalltabs.com/details.php?id=305",
    food_specials: "$8.25 Fish & Chips",
    food_specials_url: "https://smalltabs.com/details.php?id=305",
  },
  {
    name: "Fatpour Tap Works",
    address: "Wicker Park @ 2005 W Division St",
    specials: "$5 Pabst Blue Ribbon & Select Shot Combo",
    specials_url: "https://smalltabs.com/details.php?id=459",
  },
  {
    name: "Berlin",
    address: "Lakeview @ 954 W Belmont Ave",
    specials: "$3 Bacardi Rum Bombs, $5 Tropical Sex Pints, $6 Stoli Vodka",
    specials_url: "https://smalltabs.com/details.php?id=349",
  },
  {
    name: "The Pony Inn",
    address: "Lakeview @ 1638 W Belmont Ave",
    food_specials:
      "Half Price Appetizers from 4-8pm, Half Price Sandwiches from 4-8pm",
    food_specials_url: "https://smalltabs.com/details.php?id=275",
  },
  {
    name: "Cortland's Garage",
    address: "Bucktown @ 1645 W Cortland St",
    food_specials: "Buy One, Get One Free Appetizers from 2pm-6pm",
    food_specials_url: "https://smalltabs.com/details.php?id=60",
  },
  {
    name: "Gaslight Bar & Grille",
    address: "Lincoln Park @ 2450 N Clark St",
    specials:
      "$15 Domestic Buckets, $5 Tullamore Dew Whiskey Shots, $5 Trop Bombs, $3.50 College Beer of the Day",
    specials_url: "https://smalltabs.com/details.php?id=358",
    food_specials:
      "Free Burgers (with beverage purchase, limited quantities), Half Price Appetizers (5-7pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=358",
  },
  {
    name: "Fado Irish Pub",
    address: "River North @ 100 W Grand Ave",
    specials:
      "$7 Old Fashioneds (5-9pm), $7 Manhattans (5-9pm), $7 Whiskey Sours (5-9pm), $5 Carlsberg Beer (5-9pm), $7 Red & White Wine Glasses (5-9pm)",
    specials_url: "https://smalltabs.com/details.php?id=583",
    food_specials: "$6 Select Snacks (5-9pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=583",
  },
  {
    name: "Lincoln Tap Room",
    address: "Lakeview @ 3010 N Lincoln Ave",
    specials:
      "$4 Angry Orchard Cider, $5 Call & Premium Shots, $3 Two Brothers Outlaw IPA Cans, $3 Two Brothers Sidekick Citrus Ale Cans, $4.50 Three Olives Vodka Cocktails",
    specials_url: "https://smalltabs.com/details.php?id=334",
  },
  {
    name: "Original Mother's",
    address: "Near North Side @ 26 W Division St",
    specials:
      "$6 Pabst Blue Ribbon Tallboys, $5 Bacardi Rum, $5 Wolf Berry & Black Razz Bombs, $5 Sailor Jerry Rum",
    specials_url: "https://smalltabs.com/details.php?id=69",
  },
  {
    name: "The Fireplace Inn",
    address: "Old Town @ 1448 N Wells St",
    specials: "$5 Skyy Vodka Bombs",
    specials_url: "https://smalltabs.com/details.php?id=442",
  },
  {
    name: "Vines on Clark",
    address: "Wrigleyville @ 3554 N Clark St",
    specials: "$5 You-Call-Its",
    specials_url: "https://smalltabs.com/details.php?id=33",
  },
  {
    name: "Wabash Tap",
    address: "South Loop @ 1233 S Wabash Ave",
    specials: "$4 Drafts (4-6pm), $14 Buckets (4-6pm)",
    specials_url: "https://smalltabs.com/details.php?id=142",
  },
  {
    name: "Halligan Bar",
    address: "Lincoln Park @ 2274 N Lincoln Ave",
    specials:
      "$3 Budweiser & Bud Light Bottles, $3.50 Vegas Bombs, $3.50 Captain Morgan Rum & Coke, $4 Stoli Vodka Drinks, $5 Bombs, $2 Bud Light Drafts, $3 Jameson Whiskey Shots, $3.50 Goose Island 312 Drafts, $3.50 Guinness, $4 Stoli Vodka Drinks",
    specials_url: "https://smalltabs.com/details.php?id=130",
  },
  {
    name: "Bulldog Ale House (South Loop)",
    address: "South Loop @ 901 S State St",
    specials: "$5 Jameson Whiskey, $5 Guinness, $6 Irish Car Bombs",
    specials_url: "https://smalltabs.com/details.php?id=686",
    food_specials: "$10.99 All-You-Can-Eat Fish Fry",
    food_specials_url: "https://smalltabs.com/details.php?id=686",
  },
  {
    name: "Fat Cat",
    address: "Uptown @ 4840 N Broadway St",
    specials:
      "$6 Uptown Royale (4-6pm), $6 Four Roses Manhattan (4-6pm), $6 Prairie Organic Gin & Ginger (4-6pm), $5 Select Craft Beers (4-6pm), $5 Highballs (4-6pm), $6 Select Wines (4-6pm)",
    specials_url: "https://smalltabs.com/details.php?id=120",
  },
  {
    name: "Hook & Ladder",
    address: "Lincoln Park @ 2270 N Lincoln Ave",
    specials:
      "$2.50 Domestic Bottles, $3 Import/Craft Bottles, $4 All Drafts, $3 Shots, $4 Bombs, $6 Wine Glasses, $6 Mimosas, $4 Well Drinks, $5 Call Drinks",
    specials_url: "https://smalltabs.com/details.php?id=593",
  },
  {
    name: "Clover",
    address: "Near West Side @ 722 W Grand Ave",
    specials:
      "$5 Tullamore Dew Whiskey, $8 Pabst Blue Ribbon Tallboy & Jameson Whiskey Shot Combo, Half Price Drinks (5-7pm)",
    specials_url: "https://smalltabs.com/details.php?id=625",
  },
  {
    name: "Holiday Club",
    address: "Uptown @ 4000 N Sheridan Rd",
    specials:
      "$5 Svedka Vodka Drinks, $5 Grape, Cherry, & Blueberry Bombs, $4.50 Pabst Blue Ribbon 24oz Tallboys",
    specials_url: "https://smalltabs.com/details.php?id=179",
    food_specials: "$5 Chicken Sandwich",
    food_specials_url: "https://smalltabs.com/details.php?id=179",
  },
  {
    name: "Riverview Tavern",
    address: "Roscoe Village @ 1958 W Roscoe St",
    specials:
      "$1 off Ciders, $1 off Wine Glasses, $5 Brewery-of-the-Month Drafts",
    specials_url: "https://smalltabs.com/details.php?id=220",
  },
  {
    name: "Leadway Bar & Grill",
    address: "Lincoln Square @ 5223 N Damen Ave",
    specials:
      "$3 Point & Pabst Blue Ribbon Bottles, $3.50 Budweiser, Bud Light, Miller Genuine Draft, Miller Lite, Miller High Life, & Old Style Bottles",
    specials_url: "https://smalltabs.com/details.php?id=375",
  },
  {
    name: "Leona's Stony Island",
    address: "Calumet Heights @ 9157 S Stony Island Ave",
    specials:
      "$5 Cocktails (6-9pm), $5 Frozen Margaritas (6-9pm), $5 Rocks Margaritas (6-9pm), $5 Long Island Iced Teas (6-9pm)",
    specials_url: "https://smalltabs.com/details.php?id=669",
    food_specials: "$3 off Wing Dings",
    food_specials_url: "https://smalltabs.com/details.php?id=669",
  },
  {
    name: "Innjoy (Logan Square)",
    address: "Logan Square @ 2200 N Milwaukee Ave",
    specials:
      "$7 Martinis, $5 Pabst Blue Ribbon Tallboy & Hipster Whiskey Shot Combo",
    specials_url: "https://smalltabs.com/details.php?id=688",
    food_specials: "$7 Bruschette",
    food_specials_url: "https://smalltabs.com/details.php?id=688",
  },
  {
    name: "Nisei Lounge",
    address: "Wrigleyville @ 3439 N Sheffield Ave",
    specials:
      "$5 Jameson Whiskey Shots, $3 Mickey's Big Mouth Bottles, $4 Old Style Tallboys, $4 Pabst Blue Ribbon Drafts, $3 Malort Shots",
    specials_url: "https://smalltabs.com/details.php?id=307",
  },
  {
    name: "Side Street Saloon",
    address: "Lakeview @ 1456 W George St",
    specials: "$3.25 Pabst Blue Ribbon Bottles",
    specials_url: "https://smalltabs.com/details.php?id=187",
    food_specials: "$5.50 Half Pound Cheeseburger & Fries",
    food_specials_url: "https://smalltabs.com/details.php?id=187",
  },
  {
    name: "Takito Kitchen",
    address: "Wicker Park @ 2013 W Division St",
    food_specials:
      "Brunch Served from 11am-3pm, $12 Tacos, Soup & Salad Lunch Special (from 11am-3pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=579",
  },
  {
    name: "80 Proof",
    address: "Old Town @ 1500 N Wells St",
    specials:
      "$3 Tequila Shots (5-8pm), $4 All Beers (5-8pm), $5 All Call Drinks (5-8pm)",
    specials_url: "https://smalltabs.com/details.php?id=660",
  },
  {
    name: "G&O",
    address: "West Loop @ 459 N Ogden Ave",
    specials:
      "$3 House Whiskey or Bourbon Shot (with draft beer purchase), $3 Tito's Vodka (4-6pm), $3 Ford's Gin (4-6pm), $3 Drink of the Week (4-6pm)",
    specials_url: "https://smalltabs.com/details.php?id=641",
  },
  {
    name: "Subterranean Lounge",
    address: "Wicker Park @ 2011 W North Ave",
    specials: "$5 UV Vodka Cocktails",
    specials_url: "https://smalltabs.com/details.php?id=56",
  },
  {
    name: "Gideon Welles",
    address: "Lincoln Square @ 4500 N Lincoln Ave",
    specials: "$5 Select Craft Drafts",
    specials_url: "https://smalltabs.com/details.php?id=603",
  },
  {
    name: "Blackfinn Ameripub",
    address: "River North @ 65 W Kinzie St",
    specials: "$5 Bacardi Cocktails",
    specials_url: "https://smalltabs.com/details.php?id=543",
  },
  {
    name: "Mr. Brown's Lounge West Town",
    address: "Ukrainian Village @ 2301 W Chicago Ave",
    specials:
      "$7 Rum Punch (3-6pm), $4 Jameson Whiskey Shots (3-6pm), $4 Red Stripe Bottles (3-6pm)",
    specials_url: "https://smalltabs.com/details.php?id=363",
  },
  {
    name: "The Hampton Social",
    address: "River North @ 353 W Hubbard St",
    specials: "Half Price Specialty Cocktails (4-6pm)",
    specials_url: "https://smalltabs.com/details.php?id=636",
    food_specials: "Half Price Pizzas (4-6pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=636",
  },
  {
    name: "Pitchfork Food & Saloon",
    address: "Irving Park @ 2922 W Irving Park Road",
    specials: "$4 Goose Island Green Line, $6 Moscow Mules",
    specials_url: "https://smalltabs.com/details.php?id=234",
  },
  {
    name: "Cactus Bar & Grill",
    address: "Loop @ 404 S Wells St",
    specials: "$25 Lagunitas Buckets, $6 Patron Silver Tequila Shots",
    specials_url: "https://smalltabs.com/details.php?id=133",
  },
  {
    name: "Cleo's",
    address: "Ukrainian Village @ 1935 W Chicago Ave",
    specials: "$2 off Bulleit Whiskey, $4 Well Drinks",
    specials_url: "https://smalltabs.com/details.php?id=49",
    food_specials: "$6 Fish & Chips",
    food_specials_url: "https://smalltabs.com/details.php?id=49",
  },
  {
    name: "Monsignor Murphy's",
    address: "Lakeview @ 3019 N Broadway St",
    specials: "$3 Pabst Blue Ribbon Cans, $3 Miller Lite Cans",
    specials_url: "https://smalltabs.com/details.php?id=246",
  },
  {
    name: "Bird's Nest",
    address: "Lincoln Park @ 2500 N Southport Ave",
    specials: "$4 Blue Line Pilsner, $5 Svedka Vodka Bombs, $5 Red Bull Bombs",
    specials_url: "https://smalltabs.com/details.php?id=6",
  },
  {
    name: "Ravenswood Station Bar & Grill",
    address: "Lincoln Square @ 4709 N Damen Ave",
    specials:
      "$7 Call Vodka Mixed Drinks, $6.50 Guinness 20oz Drafts, $5.50 Fat Tire Drafts",
    specials_url: "https://smalltabs.com/details.php?id=100",
    food_specials: "$6.75 Fish & Chips, $7 Grilled Fish Tacos",
    food_specials_url: "https://smalltabs.com/details.php?id=100",
  },
  {
    name: "The Land on Lincoln",
    address: "Lakeview @ 3032 N Lincoln Ave",
    specials:
      "$5 Vodka, $5 Bourbon, $2 Mystery Beer, $4 Drafts (4-7pm), $4 Wine Glasses (4-7pm)",
    specials_url: "https://smalltabs.com/details.php?id=165",
    food_specials:
      "Half Price Nonna's Meatball Sandwich, Half Price Snacks (4-7pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=165",
  },
  {
    name: "Dark Horse Tap & Grille",
    address: "Wrigleyville @ 3443 N Sheffield Ave",
    specials:
      "$5 Bomb Shots, $5 Stoli Vodka Cocktails, $4 Lagunitas Drafts, $3 Fireball Whiskey Shots",
    specials_url: "https://smalltabs.com/details.php?id=201",
  },
  {
    name: "Mojo Bar & Grill",
    address: "Irving Park @ 2958 W Irving Park Rd",
    specials: "$5 Well Vodka Drinks",
    specials_url: "https://smalltabs.com/details.php?id=643",
    food_specials: "$5 Fish & Chips",
    food_specials_url: "https://smalltabs.com/details.php?id=643",
  },
  {
    name: "Jefferson Tap & Grille",
    address: "Near West Side @ 325 N Jefferson St",
    specials:
      "$6 Sam Adams Boston Lager & Seasonal Jumbo Mugs, $5 Wine Glasses",
    specials_url: "https://smalltabs.com/details.php?id=302",
  },
  {
    name: "Goldie's",
    address: "North Center @ 3839 N Lincoln Ave",
    specials: "$1 Pabst Blue Ribbon Drafts",
    specials_url: "https://smalltabs.com/details.php?id=122",
  },
  {
    name: "Blue Frog Bar & Grill",
    address: "River North @ 676 N LaSalle Dr",
    specials: "$6 Specialty Cocktails",
    specials_url: "https://smalltabs.com/details.php?id=391",
    food_specials: "Half Price Appetizers (4-8pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=391",
  },
  {
    name: "Hawkeye's Bar & Grill",
    address: "University Village @ 1458 W Taylor St",
    specials: "$10 Domestic Bottles",
    specials_url: "https://smalltabs.com/details.php?id=30",
    food_specials: "$2 Pita Pizzas (after 3pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=30",
  },
  {
    name: "Big City Tap",
    address: "Lakeview @ 1010 W Belmont Ave",
    specials: "$6 Jameson Whiskey, $1 Jello Shots, $1 Apple Pucker Shots",
    specials_url: "https://smalltabs.com/details.php?id=306",
    food_specials: "Half Price Bar Snacks (until 9pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=306",
  },
  {
    name: "G&L Fire Escape",
    address: "North Center @ 2157 W Grace St",
    specials: "$3 Powers Whiskey Shots, $4 Wells",
    specials_url: "https://smalltabs.com/details.php?id=533",
  },
  {
    name: "Foundation Room at House of Blues",
    address: "River North @ 329 N Dearborn St",
    specials:
      "$6 Select Wine Glasses (5-7pm), $5 Well Drinks (5-7pm), $4 Domestic Beers (5-7pm)",
    specials_url: "https://smalltabs.com/details.php?id=622",
  },
  {
    name: "Taqueria & Bar",
    address: "Lincoln Park @ 1450 W Webster Ave",
    specials: "$4 Shots, $2 Grab Bag Beers",
    specials_url: "https://smalltabs.com/details.php?id=565",
  },
  {
    name: "Vaughans Pub Northwest Side",
    address: "Jefferson Park @ 5485 N Northwest Hwy",
    specials:
      "$3.50 Amstel Light Bottles, $4 Blue Moon Drafts, $4 Powers Irish Whiskey Shots",
    specials_url: "https://smalltabs.com/details.php?id=43",
    food_specials:
      "$12 All-You-Can-Eat Fish & Chips, $7.50 Pub Burger & Fries (11am-3pm), $7.50 Chicken Sandwich & Fries (11am-3pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=43",
  },
  {
    name: "Raw Bar & Grill",
    address: "Wrigleyville @ 3720 N Clark St",
    specials:
      "$2.50 Domestic Beers (4-7pm), $3.50 Craft Drafts (4-7pm), $3 Well Mixers (4-7pm)",
    specials_url: "https://smalltabs.com/details.php?id=205",
    food_specials: "Half Price Appetizers",
    food_specials_url: "https://smalltabs.com/details.php?id=205",
  },
  {
    name: "Tavern 57",
    address: "Lincoln Park @ 1059 W Wrightwood Ave",
    specials:
      "$2 off Wine Glasses (4-8pm), $2 off Ciders (4-8pm), $3 off Well Drinks (4-8pm), $3 Michelob Ultra Bottles (4-8pm), $3 Blue Moon Bottles (4-8pm), $4 Chicago Craft Drafts (4-8pm)",
    specials_url: "https://smalltabs.com/details.php?id=24",
  },
  {
    name: "Country Club Bar",
    address: "Wrigleyville @ 3462 N Clark St",
    specials:
      "$6 Tito's Vodka Cocktails, $4 Revolution Anti-Hero, $3 Shiner Premium",
    specials_url: "https://smalltabs.com/details.php?id=207",
    food_specials: "Half Price Appetizers",
    food_specials_url: "https://smalltabs.com/details.php?id=207",
  },
  {
    name: "Nick's Beer Garden",
    address: "Wicker Park @ 1516 N Milwaukee Ave",
    specials: "$1 off Draft Beers (4-7pm)",
    specials_url: "https://smalltabs.com/details.php?id=449",
  },
  {
    name: "Clark Street Dog",
    address: "Lakeview @ 3040 N Clark St",
    specials:
      "$2 Bud Light Drafts, $3.50 Goose Island Drafts, $3.50 Lagunitas Drafts, $5 Picklebacks, $8 Mules",
    specials_url: "https://smalltabs.com/details.php?id=472",
  },
  {
    name: "Park Tavern",
    address: "West Loop @ 1645 W Jackson Blvd",
    specials:
      "$5 Jameson Whiskey, $5 Select Wine Glasses, $3 Tallboy Cans (3-5pm), $4 Well Drinks (3-5pm), $4 House Wine Glasses (3-5pm), Half Price 16oz Drafts (3-5pm)",
    specials_url: "https://smalltabs.com/details.php?id=494",
    food_specials: "$15 All-You-Can-Eat Fish Fry (4pm-Close)",
    food_specials_url: "https://smalltabs.com/details.php?id=494",
  },
  {
    name: "Mac's Wood Grilled",
    address: "Wicker Park @ 1801 W Division St",
    specials: "$4 Paddy Irish Whiskey Shots, $5 Moscow Mules",
    specials_url: "https://smalltabs.com/details.php?id=631",
  },
  {
    name: "Kasey's Tavern",
    address: "Printers Row @ 701 S Dearborn St",
    specials:
      "$4 New Belgium Voodoo Ranger IPA Drafts, $4 Carlsburg Tallboys, $3 Hamm's Tallboys, $3 Coors Banquet Bottles",
    specials_url: "https://smalltabs.com/details.php?id=125",
  },
  {
    name: "Corcoran's Grill & Pub",
    address: "Lincoln Park @ 1615 N Wells St",
    specials:
      "$4.50 Corona & Corona Light Bottles, $7 Moscow Mules, $5 All Shots",
    specials_url: "https://smalltabs.com/details.php?id=41",
    food_specials: "$12 All-You-Can-Eat Fish & Chips",
    food_specials_url: "https://smalltabs.com/details.php?id=41",
  },
  {
    name: "Galvin's Public House",
    address: "Portage Park @ 5901 W Lawrence Ave",
    specials: "$4 Blue Moon Drafts",
    specials_url: "https://smalltabs.com/details.php?id=604",
    food_specials: "$11 All-You-Can-Eat Fish & Chips",
    food_specials_url: "https://smalltabs.com/details.php?id=604",
  },
  {
    name: "Paddy O'Fegan's",
    address: "West Loop @ 204 N Halsted St",
    specials:
      "$1 off Tequila, $15 Leinenkugel's Grapefruit Shandy Buckets, $3 Miller Lite Drafts (4-7pm), $5 Rolling Rock Tallboys (4-7pm), $5 Paddy's Whiskey (4-7pm)",
    specials_url: "https://smalltabs.com/details.php?id=485",
    food_specials:
      "$10 Chicken Torta with Posole Soup, $5 Loaded Nachos (4-7pm), $3 Jalapeno & Cheddar Hot Dogs (4-7pm), $3 Wrigley Field Smokies (4-7pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=485",
  },
  {
    name: "Murphy's Bleachers",
    address: "Wrigleyville @ 3653 N Sheffield Ave",
    specials:
      "$4 Southern Comfort Drinks, $14 Lagunitas IPA & Pilsner Pitchers",
    specials_url: "https://smalltabs.com/details.php?id=32",
    food_specials: "$6 Fish & Chips",
    food_specials_url: "https://smalltabs.com/details.php?id=32",
  },
  {
    name: "Deuces & The Diamond Club",
    address: "Wrigleyville @ 3505 N Clark St",
    specials: "$12+ Seasonal Beer Flights",
    specials_url: "https://smalltabs.com/details.php?id=408",
  },
  {
    name: "Tripoli Tap",
    address: "Lincoln Park @ 1147 W Armitage Ave",
    specials: "$3 Coors Light Bottles",
    specials_url: "https://smalltabs.com/details.php?id=450",
  },
  {
    name: "Four Star Lounge",
    address: "Lincoln Park @ 2666 N Halsted St",
    specials:
      "$4 Jack Daniels Whiskey, Jim Beam Bourbon, Bacardi Rum, Jose Cuervo Tequila, Ketel One Vodka, & Beefeater Gin Well Drinks (5-8pm), $4 Revolution Fist City, Revolution Anti-Hero, Goose Island 312, Revolution Eugene Porter, and Blue Moon (5-8pm), $5 House Cabernet & Chardonnay Wine Glasses (5-8pm), $2 Malort Shots (5-8pm), $2 Fireball Whiskey Shots (5-8pm), $3 Jameson Whiskey Shots (5-8pm), $3 Jim Beam Bourbon Shots (5-8pm), $5 Vodka or Gin Martinis (5-8pm)",
    specials_url: "https://smalltabs.com/details.php?id=608",
    food_specials: "$5 Shrimp Cocktail (5-8pm), $5 Hummus Platter (5-8pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=608",
  },
  {
    name: "Pasta Bowl Lincoln Square",
    address: "Lincoln Square @ 4343 N Lincoln Ave",
    specials: "$5 Moscow Mules",
    specials_url: "https://smalltabs.com/details.php?id=699",
  },
  {
    name: "Mullen's Bar & Grill",
    address: "Rogers Park @ 7301 N Western Ave",
    specials: "$5 Flavored Vodka Drinks, $5 Bomb Shots (excludes Car Bombs)",
    specials_url: "https://smalltabs.com/details.php?id=460",
    food_specials: "$9 Meatloaf",
    food_specials_url: "https://smalltabs.com/details.php?id=460",
  },
  {
    name: "Lizzie McNeill's Irish Pub",
    address: "Streeterville @ 400 N McClurg St",
    specials:
      "$5 Sam Adams Oktoberfest, $6 Seagrams 7 Whiskey Drinks, $5 Crown Apple Shots",
    specials_url: "https://smalltabs.com/details.php?id=477",
  },
  {
    name: "Scarlet Bar",
    address: "Lakeview @ 3320 N Halsted St",
    specials: "$6 Ketel One Vodka Cocktails",
    specials_url: "https://smalltabs.com/details.php?id=262",
  },
  {
    name: "Leona's Rogers Park",
    address: "Rogers Park @ 6935 N Sheridan Ave",
    specials:
      "$5 Cocktails (6-9pm), $5 Frozen Margaritas (6-9pm), $5 Rocks Margaritas (6-9pm), $5 Long Island Iced Teas (6-9pm)",
    specials_url: "https://smalltabs.com/details.php?id=668",
    food_specials: "$3 off Wing Dings",
    food_specials_url: "https://smalltabs.com/details.php?id=668",
  },
  {
    name: "Higgins' Tavern",
    address: "Lakeview @ 3259 N Racine Ave",
    specials: "$11 Miller Lite & Coors Light Pitchers",
    specials_url: "https://smalltabs.com/details.php?id=17",
  },
  {
    name: "Jake Melnick's Corner Tap",
    address: "Near North Side @ 41 E Superior St",
    specials: "$5.50 Krombacher Pils",
    specials_url: "https://smalltabs.com/details.php?id=311",
  },
  {
    name: "Big Star",
    address: "Wicker Park @ 1531 N Damen Ave",
    specials: "$3 Old Heaven Hill Whiskey Shots",
    specials_url: "https://smalltabs.com/details.php?id=341",
  },
  {
    name: "The Atlantic Bar & Grill",
    address: "Lincoln Square @ 5062 N Lincoln Ave",
    specials: "$4 Wine Spritzers, $4 Stoli Vodka Drinks",
    specials_url: "https://smalltabs.com/details.php?id=101",
    food_specials: "$4 Crostini Menu",
    food_specials_url: "https://smalltabs.com/details.php?id=101",
  },
  {
    name: "Sports Corner Bar & Grill",
    address: "Wrigleyville @ 956 W Addison St",
    specials: "$5 You-Call-Its",
    specials_url: "https://smalltabs.com/details.php?id=328",
    food_specials: "$2 Sliders",
    food_specials_url: "https://smalltabs.com/details.php?id=328",
  },
  {
    name: "Lizard's Liquid Lounge",
    address: "Irving Park @ 3058 W Irving Park Rd",
    specials:
      "$4 Stella Artois Drafts, $4 Great Lakes Burning River Drafts, $5 Microbrews",
    specials_url: "https://smalltabs.com/details.php?id=98",
  },
  {
    name: "Crown Liquors",
    address: "Logan Square @ 2821 N Milwaukee Ave",
    specials: "$5 Craft Beers, $7 Cocktails",
    specials_url: "https://smalltabs.com/details.php?id=591",
  },
  {
    name: "GRK Bar",
    address: "Loop @ 400 S Wells St",
    specials: "$5 Shots, $1 off Select Drafts",
    specials_url: "https://smalltabs.com/details.php?id=621",
  },
  {
    name: "The Graystone Tavern",
    address: "Lakeview @ 3441 N Sheffield Ave",
    specials: "$5 Jack Daniels Fire Shots",
    specials_url: "https://smalltabs.com/details.php?id=653",
  },
  {
    name: "Mrs. Murphy & Sons Irish Bistro",
    address: "North Center @ 3905 N Lincoln Ave",
    specials:
      "$5 Specialty Irish Cocktails (4:30-6:30pm), $5 Irish Beers (4:30-6:30pm)",
    specials_url: "https://smalltabs.com/details.php?id=651",
    food_specials: "$5 Appetizer Bites (4:30-6:30pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=651",
  },
  {
    name: "The Lodge",
    address: "Near North Side @ 21 W Division Street",
    specials: "$4 Fat Tire Drafts, $6 Bombs",
    specials_url: "https://smalltabs.com/details.php?id=68",
  },
  {
    name: "Twisted Shamrock",
    address: "Garfield Ridge @ 6462 S Central Ave",
    specials:
      "$3.50 Amstel Light, Heineken, or Shiner Bock, $3 Pinnacle Vodka O-Bombs",
    specials_url: "https://smalltabs.com/details.php?id=704",
  },
  {
    name: "Kelsey's",
    address: "Lincoln Park @ 2265 N Lincoln Ave",
    specials: "$3.50 Curious Travelers, $3.50 Sam Adams, $5 Dublin Donkeys",
    specials_url: "https://smalltabs.com/details.php?id=154",
  },
  {
    name: "Big Chicks",
    address: "Uptown @ 5024 N Sheridan Rd",
    specials: "$2 off Pitchers (4-9pm)",
    specials_url: "https://smalltabs.com/details.php?id=261",
    food_specials: "$7 Third Pound Cheeseburgers with Fries",
    food_specials_url: "https://smalltabs.com/details.php?id=261",
  },
  {
    name: "Sluggers",
    address: "Wrigleyville @ 3540 N Clark St",
    specials:
      "$6 Goose Island Green Line Drafts, $6 Sam Adams Drafts, $6 Pinnacle Flavored Vodka Cocktails",
    specials_url: "https://smalltabs.com/details.php?id=53",
  },
  {
    name: "Templestowe Pub",
    address: "Irving Park @ 3135 W Montrose Ave",
    specials: "$3 Fireball Whiskey Shots, $3 Import Bottles",
    specials_url: "https://smalltabs.com/details.php?id=340",
  },
  {
    name: "Bobby Love's",
    address: "Lakeview @ 3729 N Halsted St",
    specials: "$6 Absolute Vodka Cocktails",
    specials_url: "https://smalltabs.com/details.php?id=337",
  },
  {
    name: "The North End",
    address: "Lakeview @ 3733 N Halsted St",
    specials: "$5 Fireball Whiskey Shots",
    specials_url: "https://smalltabs.com/details.php?id=174",
  },
  {
    name: "New Line Tavern",
    address: "West Loop @ 201 N Clinton St",
    specials: "$5 Goose Island Beers, $8 Signature Cocktails",
    specials_url: "https://smalltabs.com/details.php?id=301",
  },
  {
    name: "Decibel Bar",
    address: "Uptown @ 4437 N Broadway Ave",
    specials: "$2 House Shots, $4 Bacardi, $4 Mimosas",
    specials_url: "https://smalltabs.com/details.php?id=553",
  },
  {
    name: "Woodhaven Bar & Kitchen",
    address: "River North @ 712 N Clark St",
    specials: "$7 Pabst Blue Ribbon & Jameson Whiskey Boilermakers (5-8pm)",
    specials_url: "https://smalltabs.com/details.php?id=331",
  },
  {
    name: "Taco Joint River North",
    address: "River North @ 158 W Ontario St",
    specials: "$5 Modelo Especial Can & Olmeca Tequila Blanco Shot Combo",
    specials_url: "https://smalltabs.com/details.php?id=542",
  },
  {
    name: "Crossroads at House of Blues",
    address: "River North @ 329 N Dearborn St",
    specials:
      "Half Price Select Wine Bottles (3-6pm), $8 Pabst Blue Ribbon Can & Jameson Whiskey Shot Combo (3-6pm), $2 off Select Drafts (3-6pm)",
    specials_url: "https://smalltabs.com/details.php?id=619",
    food_specials: "Half Price Appetizers (3-6pm), $9.95 Fish & Chips (3-6pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=619",
  },
  {
    name: "Innjoy (Wicker Park)",
    address: "Wicker Park @ 2051 W Division St",
    specials:
      "$4 Dos Equis Drafts, $8 Milagro Tequila Margaritas, $5 Fireball Whiskey Shots",
    specials_url: "https://smalltabs.com/details.php?id=163",
    food_specials: "Half Price Shrimp",
    food_specials_url: "https://smalltabs.com/details.php?id=163",
  },
  {
    name: "Ovie Bar & Grill",
    address: "West Loop @ 120 N Canal St",
    specials: "$6 Craft Beer Drafts (3-6pm), $7 Select Wine Glasses (3-6pm)",
    specials_url: "https://smalltabs.com/details.php?id=501",
  },
  {
    name: "State Restaurant",
    address: "Lincoln Park @ 935 W Webster Ave",
    food_specials:
      "$6.99 Food Menu (with drink purchase, some exclusions apply)",
    food_specials_url: "https://smalltabs.com/details.php?id=229",
  },
  {
    name: "Toon's Bar & Grill",
    address: "Lakeview @ 3857 N Southport Ave",
    specials: "$1 off Stoli Vodka Cocktails, $4.50 Lagunitas Drafts",
    specials_url: "https://smalltabs.com/details.php?id=203",
    food_specials: "$10 House-Smoked Baby Back Ribs, $4.50 Po'boys",
    food_specials_url: "https://smalltabs.com/details.php?id=203",
  },
  {
    name: "Butcher's Tap",
    address: "Lakeview @ 3553 N Southport Ave",
    specials:
      "$5 Tullamore Dew Whiskey, Half Price Tito's Vodka Cocktails (4-6pm)",
    specials_url: "https://smalltabs.com/details.php?id=624",
  },
  {
    name: "Avenue Tavern",
    address: "Lakeview @ 2916 N Broadway St",
    specials:
      "$10 Miller Lite Pitchers, $16 Margarita Pitchers, $16 Long Island Iced Tea Pitchers",
    specials_url: "https://smalltabs.com/details.php?id=170",
  },
  {
    name: "Hash House a Go Go",
    address: "Near North Side @ 1212 N State St",
    food_specials: "$14.95 Fried or Roasted Chicken Dinner",
    food_specials_url: "https://smalltabs.com/details.php?id=600",
  },
  {
    name: "20 East",
    address: "Near North Side @ 20 E Delaware St",
    specials:
      "$3 Domestic Beers (3-6pm), $4 Absolut Vodka Mixed Drinks (3-6pm), $5 Select Wine Glasses (3-6pm)",
    specials_url: "https://smalltabs.com/details.php?id=661",
    food_specials: "$7 Mini Burgers, $7 Hummus, $7 Truffle Fries, $7 Brussels",
    food_specials_url: "https://smalltabs.com/details.php?id=661",
  },
  {
    name: "Havana",
    address: "River North @ 412 N Clark St",
    specials: "$20 House Mojito Pitchers",
    specials_url: "https://smalltabs.com/details.php?id=417",
  },
  {
    name: "Taco Joint Lincoln Park",
    address: "Lincoln Park @ 1969 N Halsted St",
    specials: "$5 Modelo Especial Can & Olmeca Tequila Blanco Shot Combo",
    specials_url: "https://smalltabs.com/details.php?id=541",
  },
  {
    name: "Dugan's on Halsted",
    address: "West Loop @ 128 S Halsted St",
    specials:
      "$2.50 Bud Light Drafts, $3.50 Hoegaarden, $2.50 Pabst Blue Ribbon Bottles",
    specials_url: "https://smalltabs.com/details.php?id=424",
  },
  {
    name: "The Rambler Kitchen & Tap",
    address: "North Center @ 4128 N Lincoln Ave",
    specials:
      "$4 Hard Seltzers, $4 Select Drafts, $5 Skrewball Whiskey, $5 Corazon Tequila, $3 Domestic Beers (4-7pm), $3 Select Whiskeys (4-7pm), $5 House Wine Glasses (4-7pm)",
    specials_url: "https://smalltabs.com/details.php?id=589",
    food_specials: "$7 Ground Beef or Chicken Nacho Platters",
    food_specials_url: "https://smalltabs.com/details.php?id=589",
  },
  {
    name: "Edison Park Inn",
    address: "Edison Park @ 6715 N Olmsted Ave",
    specials: "$16 Domestic Bottles, $2 Shot of the Day",
    specials_url: "https://smalltabs.com/details.php?id=190",
  },
  {
    name: "Compass Bar",
    address: "Lincoln Park @ 433 W Diversey Pkwy",
    food_specials: "Half Price Pizza from 4-6pm",
    food_specials_url: "https://smalltabs.com/details.php?id=586",
  },
  {
    name: "Rockit Burger Bar",
    address: "Wrigleyville @ 3700 N Clark St",
    specials: "$3 Select Beers, $5 Evan Williams Whiskey Shots",
    specials_url: "https://smalltabs.com/details.php?id=233",
  },
  {
    name: "Small Bar Logan Square",
    address: "Logan Square @ 2956 N Albany Ave",
    specials:
      "$3 Pabst Blue Ribbon Bottles, $3 Miller Lite & Miller High Life Cans",
    specials_url: "https://smalltabs.com/details.php?id=80",
  },
  {
    name: "Roscoe's Tavern",
    address: "Lakeview @ 3356 N Halsted St",
    specials:
      "$5 Jack Daniels Honey Shots, $5 Skyy Vodka Bombs, $15 Absolut Blue Hawaiian Pitchers, $15 Absolut Pink Lemonade Pitchers",
    specials_url: "https://smalltabs.com/details.php?id=173",
  },
  {
    name: "Franklin Tap",
    address: "Loop @ 325 S Franklin St",
    specials:
      "$5 Two Brothers Pale Frank Drafts, $5 Yukon Jack Wicked Hot Shots",
    specials_url: "https://smalltabs.com/details.php?id=135",
    food_specials: "$5 Select Appetizers (after 5pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=135",
  },
  {
    name: "Lokal Lincoln Park",
    address: "Lincoln Park @ 2500 N Ashland Ave",
    food_specials: "$10 Mussels & Truffle Fries",
    food_specials_url: "https://smalltabs.com/details.php?id=614",
  },
  {
    name: "Legno Italian Gastropub",
    address: "Portage Park @ 4250 N Central Ave",
    specials:
      "$4 Select Vandermill Ciders, $2 Domestic Bottles (3-6pm), $3 Malort Shots (3-6pm), $5 Tito's Vodka Mixed Drinks (3-6pm), $6 White or Red Sangria Glasses (3-6pm)",
    specials_url: "https://smalltabs.com/details.php?id=590",
    food_specials:
      "Complimentary House Made Chips (3-6pm), $4 BBQ Pork Sliders (2) (3-6pm), $4 Jalapeno Poppers (2) (3-6pm), $5 Buffalo Wings (6) (3-6pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=590",
  },
  {
    name: "DS Tequila Company",
    address: "Lakeview @ 3352 N Halsted St",
    specials: "$12 40oz Fiesta Bowls",
    specials_url: "https://smalltabs.com/details.php?id=573",
  },
  {
    name: "Estelle's Cafe & Lounge",
    address: "Wicker Park @ 2013 W North Ave",
    specials:
      "$4 Three Floyd's Drafts (5-8pm), $3 Rebel Yell Whiskey Shots (5-8pm)",
    specials_url: "https://smalltabs.com/details.php?id=216",
  },
  {
    name: "Irish Eyes",
    address: "Lincoln Park @ 2519 N Lincoln Ave",
    specials: "$3.50 Pabst Blue Ribbon Tallboys",
    specials_url: "https://smalltabs.com/details.php?id=339",
  },
  {
    name: "Edgewater Mexican Cafe",
    address: "Edgewater @ 1055 W Bryn Mawr Ave",
    specials: "$6 Wine Glasses, $6 Palomas, $6 House Margaritas (4-7pm)",
    specials_url: "https://smalltabs.com/details.php?id=711",
  },
  {
    name: "Leona's Hyde Park",
    address: "Hyde Park @ 1236 E 53rd St",
    specials:
      "$5 Cocktails (6-9pm), $5 Frozen Margaritas (6-9pm), $5 Rocks Margaritas (6-9pm), $5 Long Island Iced Teas (6-9pm)",
    specials_url: "https://smalltabs.com/details.php?id=666",
    food_specials: "$3 off Wing Dings",
    food_specials_url: "https://smalltabs.com/details.php?id=666",
  },
  {
    name: "Allium",
    address: "Near North Side @ 120 E Delaware St",
    specials: "Half Price Select Spirits, Wines, & Draft Beers (4-6pm)",
    specials_url: "https://smalltabs.com/details.php?id=687",
    food_specials: "Half Price Bar Bites (4-6pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=687",
  },
  {
    name: "Brando's Speakeasy",
    address: "Loop @ 343 S Dearborn St",
    specials:
      "$3 Bud Light, $3 Old Style, Pabst Blue Ribbon, & Miller High Life Tallboys",
    specials_url: "https://smalltabs.com/details.php?id=276",
  },
  {
    name: "George Street Pub",
    address: "Lakeview @ 2858 N Halsted St",
    specials: "$5 Seasonal Drafts",
    specials_url: "https://smalltabs.com/details.php?id=630",
  },
  {
    name: "Monk's Pub",
    address: "Loop @ 205 W Lake St",
    specials:
      "$4 Budweiser, Bud Light, Coors Light, Miller High Life, Miller Lite, Old Style, & Schiltz Bottles",
    specials_url: "https://smalltabs.com/details.php?id=144",
  },
  {
    name: "Mad River Bar & Grille",
    address: "Lakeview @ 2909 N Sheffield Ave",
    food_specials: "Half Price Appetizers (5-8pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=317",
  },
  {
    name: "Commonwealth Tavern",
    address: "Roscoe Village @ 2000 W Roscoe St",
    specials: "$6 Craft Cocktails (4-7pm), $6 Moscow Mules, $6 Summer Sunsets",
    specials_url: "https://smalltabs.com/details.php?id=588",
    food_specials: "Half Price Appetizers (3-7pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=588",
  },
  {
    name: "Mahoney's Pub & Grille",
    address: "Near North Side @ 551 N Odgen Ave",
    specials: "$5 Jameson Whiskey",
    specials_url: "https://smalltabs.com/details.php?id=65",
  },
  {
    name: "AliveOne",
    address: "Lincoln Park @ 2683 N Halsted St",
    specials: "$5 Jameson Shots, $3 Pabst Blue Ribbon Bottles",
    specials_url: "https://smalltabs.com/details.php?id=214",
  },
  {
    name: "The Fifty/50",
    address: "Wicker Park @ 2047 W Division St",
    specials:
      "$6 Tito's Vodka Drinks, $5 Ketel One Vodka Drinks (3-6pm), Half Price Craft Beers (3-6pm), $5 Wine Glasses (3-6pm)",
    specials_url: "https://smalltabs.com/details.php?id=127",
    food_specials: "Half Price Appetizers (3-6pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=127",
  },
  {
    name: "Emmit's Irish Pub",
    address: "West Loop @ 495 N Milwaukee Ave",
    specials: "$4 Fireball Whiskey",
    specials_url: "https://smalltabs.com/details.php?id=487",
    food_specials: "$8.95 Fish & Chips",
    food_specials_url: "https://smalltabs.com/details.php?id=487",
  },
  {
    name: "The Grafton",
    address: "Lincoln Square @ 4530 N Lincoln Ave",
    specials: "$5 Berghoff Reppin' Red Drafts",
    specials_url: "https://smalltabs.com/details.php?id=260",
    food_specials: "$11 The Labor Day Burger",
    food_specials_url: "https://smalltabs.com/details.php?id=260",
  },
  {
    name: "Crossroads Public House",
    address: "Lincoln Park @ 2630 N Clark St",
    specials:
      "$4 Fireball Whiskey Shots, $5 Featured Cocktails, $5 Three Olvie Vodka Bombs, $10 Long Island Iced Tea Pitchers",
    specials_url: "https://smalltabs.com/details.php?id=208",
  },
  {
    name: "Butch McGuires",
    address: "Near North Side @ 20 W Division St",
    specials:
      "$5 Sam Adams Lager Drafts, $5 Sam Adams Seasonal Drafts, $4 Mystery Shots, Half Price Drafts (5-7pm), Half Price Mixed Drinks (5-7pm), Half Price Wine (5-7pm)",
    specials_url: "https://smalltabs.com/details.php?id=617",
  },
  {
    name: "The Monkey's Paw",
    address: "Lincoln Park @ 2524 N Southport Ave",
    specials:
      "$3 Rebel Yell Whiskey (4:30-6:30pm), $3 off All Drafts (4:30-6:30pm), $3 off All Wine Glasses (4:30-6:30pm)",
    specials_url: "https://smalltabs.com/details.php?id=453",
  },
  {
    name: "Mother's Too",
    address: "Near North Side @ 14 W Division St",
    specials: "$5 Sailor Jerry Rum, $5.50 Jim Beam Bourbon",
    specials_url: "https://smalltabs.com/details.php?id=67",
  },
  {
    name: "Emerald Loop",
    address: "Loop @ 216 N Wabash Ave",
    specials: "$4.75 Beer of the Month",
    specials_url: "https://smalltabs.com/details.php?id=42",
    food_specials: "$14 Lobster Mac & Cheese, $12 Cajun Tilapia",
    food_specials_url: "https://smalltabs.com/details.php?id=42",
  },
  {
    name: "Bar Louie Dearborn Station",
    address: "Printers Row @ 47 W Polk St",
    food_specials:
      "Half Price Select Appetizers (4-7pm), Half Price Flatbreads (4-7pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=567",
  },
  {
    name: "Bootlegger's",
    address: "Near North Side @ 11 W Division St",
    specials:
      "$3 Southern Comfort, $3 Shellback Rum, $5 Wild Turkey Bourbon, $4 Miller Lite Drafts",
    specials_url: "https://smalltabs.com/details.php?id=66",
  },
  {
    name: "Francois Frankie",
    address: "Loop @ 222 W Randolph St",
    specials:
      "$5 Drafts (3-6pm), $10 Red & White Wine Glasses (3-6pm), $10 Cocktail of the Week (3-6pm)",
    specials_url: "https://smalltabs.com/details.php?id=712",
  },
  {
    name: "Will's Northwoods Inn",
    address: "Lakeview @ 3030 N Racine Ave",
    specials:
      "$4 Sierra Nevada Drafts, $3 Schiltz Tallboys, $2.50 Pabst Blue Ribbon, $3 Miller High Life Bottles",
    specials_url: "https://smalltabs.com/details.php?id=77",
    food_specials: "$12.95 All-You-Can-Eat Fish Fry",
    food_specials_url: "https://smalltabs.com/details.php?id=77",
  },
  {
    name: "Pint",
    address: "Wicker Park @ 1547 N Milwaukee Ave",
    food_specials: "Half Price Fish & Chips",
    food_specials_url: "https://smalltabs.com/details.php?id=218",
  },
  {
    name: "The Call",
    address: "Andersonville @ 1547 W Bryn Mawr Ave",
    specials: "$2.50 Well Cocktails (7-9pm), $3 Domestic Beers (7-9pm)",
    specials_url: "https://smalltabs.com/details.php?id=343",
  },
  {
    name: "Cellars Bar & Grill",
    address: "Edgewater @ 5900 N Broadway St",
    specials: "$5 Sobieski Vodka Martinis (5-10pm)",
    specials_url: "https://smalltabs.com/details.php?id=620",
  },
  {
    name: "Brickhouse Tavern",
    address: "Wrigleyville @ 3647 N Clark St",
    specials: "$5 You-Call-It's",
    specials_url: "https://smalltabs.com/details.php?id=681",
    food_specials: "Half Price Appetizers (after 3pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=681",
  },
  {
    name: "Prohibition Pub & Grill",
    address: "Lincoln Park @ 2138 N Halsted Ave",
    specials: "$4 Well Drinks",
    specials_url: "https://smalltabs.com/details.php?id=564",
    food_specials: "$5 Fried Chicken Sandwich",
    food_specials_url: "https://smalltabs.com/details.php?id=564",
  },
  {
    name: "Charlie's",
    address: "Lakeview @ 3726 N Broadway St",
    specials: "$10 Long Island Iced Teas, $3 Apple Pie Shots",
    specials_url: "https://smalltabs.com/details.php?id=264",
  },
  {
    name: "Northwoods Lounge",
    address: "Norwood Park @ 5342 N Cumberland Ave",
    specials: "$3 Fireball Shots, $1 House Shots",
    specials_url: "https://smalltabs.com/details.php?id=551",
  },
  {
    name: "Distilled Chicago",
    address: "Lincoln Park @ 1480 W Webster Ave",
    food_specials: "$10 Country Fried Chicken Sandwich",
    food_specials_url: "https://smalltabs.com/details.php?id=656",
  },
  {
    name: "Devour 312",
    address: "Lincoln Park @ 1450 W Webster Ave",
    specials:
      "$5 Drafts (3-6pm), $5 Captain Morgan Rum, Tito's Vodka, Milagro Tequila, Fireball, Jameson, & Jack Daniels Whiskey Shots (3-6pm)",
    specials_url: "https://smalltabs.com/details.php?id=690",
  },
  {
    name: "Glascott's Saloon",
    address: "Lincoln Park @ 2158 N Halsted St",
    specials: "$5 Stella Artois Drafts, $5 Red Bull Bombs",
    specials_url: "https://smalltabs.com/details.php?id=46",
  },
  {
    name: "Ranalli's",
    address: "Lincoln Park @ 1925 N Lincoln Ave",
    specials:
      "$7 Mules, $40 Large Specialty Cocktails (Mega Mule, Red Menace, & Tennessee Top Hat)",
    specials_url: "https://smalltabs.com/details.php?id=559",
  },
  {
    name: "Altiro Latin Fusion",
    address: "Roscoe Village @ 2116 W Roscoe St",
    specials:
      "$1.99 Champagne (2-5pm), $2.49 Imported Mexican Beers (2-5pm), $4.99 Signature Craft Margaritas (2-5pm)",
    specials_url: "https://smalltabs.com/details.php?id=632",
    food_specials: "$1.99 Gourmet Tacos (2-5pm), $1.99 Ala Papa Bravo (2-5pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=632",
  },
  {
    name: "Weather Mark Tavern",
    address: "South Loop @ 1503 S Michigan Ave",
    specials: "$2 off All Drafts (3-6pm), $5 Lagunitas Beers",
    specials_url: "https://smalltabs.com/details.php?id=143",
    food_specials: "$12.50 All-You-Can-Eat Fish Fry",
    food_specials_url: "https://smalltabs.com/details.php?id=143",
  },
  {
    name: "Reverie",
    address: "River North @ 414 N Orleans St",
    food_specials: "$10 Mix & Match Lunch",
    food_specials_url: "https://smalltabs.com/details.php?id=584",
  },
  {
    name: "Reed's Local",
    address: "Avondale @ 3017 W Belmont Ave",
    specials: "$4 Old Crow Whiskey & Hamm's Can Combo, $2 Hamm's Cans",
    specials_url: "https://smalltabs.com/details.php?id=585",
  },
  {
    name: "Sidebar Grille",
    address: "Loop @ 221 N LaSalle St",
    specials:
      "$3 Fernet or Fireball Shots (4pm-Close), $5 Draft Beers (4-6pm), $6 Select Wine Glasses (4-6pm), $7 Svedka Vodka Mules (4-6pm)",
    specials_url: "https://smalltabs.com/details.php?id=10",
    food_specials: "$10 Featured Flatbread (4pm-Close)",
    food_specials_url: "https://smalltabs.com/details.php?id=10",
  },
  {
    name: "Delilah's",
    address: "Lincoln Park @ 2771 N Lincoln Ave",
    specials: "$3 Labatt Blue, $3 Maker's Mark Bourbon",
    specials_url: "https://smalltabs.com/details.php?id=26",
  },
  {
    name: "Deleece Restaurant",
    address: "Lakeview @ 3747 N Southport Ave",
    food_specials: "Brunch served from 9am-2:30pm",
    food_specials_url: "https://smalltabs.com/details.php?id=295",
  },
  {
    name: "Pasta Bowl Wicker Park",
    address: "Wicker Park @ 1852 W North Ave",
    specials: "$5 Moscow Mules",
    specials_url: "https://smalltabs.com/details.php?id=638",
  },
  {
    name: "O'Shaughnessy's Public House",
    address: "Lincoln Square @ 4557 N Ravenswood Ave",
    specials: "$5 Founders All-Day IPA",
    specials_url: "https://smalltabs.com/details.php?id=299",
    food_specials: "$10.95 All-You-Can-Eat Fish & Chips, $12.50 Fish Tacos",
    food_specials_url: "https://smalltabs.com/details.php?id=299",
  },
  {
    name: "Merkle's Bar & Grill",
    address: "Wrigleyville @ 3516 N Clark St",
    specials:
      "$3 Domestic Cans, $4 Well Cocktails, $4 Bloody Marys, $5 Craft Drafts, $5 Crown Apple Shots",
    specials_url: "https://smalltabs.com/details.php?id=18",
    food_specials: "$2 Tacos, $4 Burger & Fries",
    food_specials_url: "https://smalltabs.com/details.php?id=18",
  },
  {
    name: "Christina's Place",
    address: "Irving Park @ 3759 N Kedzie Ave",
    specials:
      "$2 Pabst Blue Ribbon Cans, $3 Guinness Drafts, $5 Jameson Whiskey Shots, $5 Malort Shots, $5 Fireball Whiskey Shots",
    specials_url: "https://smalltabs.com/details.php?id=235",
  },
  {
    name: "Timothy O'Toole's",
    address: "Near North Side @ 622 N Fairbanks St",
    specials:
      "$12 Miller Lite, Coors Light, & Bud Light Pitchers, $6 Jameson Whiskey Cocktails, $6 Jameson Whiskey Shots",
    specials_url: "https://smalltabs.com/details.php?id=195",
  },
  {
    name: "Cary's Lounge",
    address: "West Rogers Park @ 2251 W Devon Ave",
    specials:
      "$2.50 Pabst Blue Ribbon & Schiltz Cans, $3 Old Style Drafts, $3 Budweiser, Bud Light, Coors Light, Miller Lite, & Miller High Life",
    specials_url: "https://smalltabs.com/details.php?id=287",
  },
  {
    name: "Scot's Bar",
    address: "North Center @ 1829 W Montrose Ave",
    specials: "$3.50 Well Drinks, $3.50 Miller Lite Drafts",
    specials_url: "https://smalltabs.com/details.php?id=263",
  },
  {
    name: "Dimo's Pizza",
    address: "Wicker Park @ 1615 N Damen Ave",
    food_specials:
      "$9 Pizza Slice, Bourbon Shot, & Pabst Blue Ribbon or Miller High Life Tallboy Combo",
    food_specials_url: "https://smalltabs.com/details.php?id=679",
  },
  {
    name: "Southport Lanes",
    address: "Lakeview @ 3325 N Southport Ave",
    specials: "$3 Schiltz Drafts",
    specials_url: "https://smalltabs.com/details.php?id=281",
  },
  {
    name: "Black Iron Tavern",
    address: "West Loop @ 401 N Milwaukee Ave",
    specials: "$5 Moscow Mules (3-6pm), $5 You-Call-It Well Drinks (3-6pm)",
    specials_url: "https://smalltabs.com/details.php?id=671",
    food_specials:
      "$18 Fish & Chips and Lagunitas Draft Combo, $2 Chipotle Carnitas, Chicken, or Fried Fish Tacos (3-6pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=671",
  },
  {
    name: "Gio's Bar & Grill",
    address: "Lincoln Square @ 4857 N Damen Ave",
    specials: "$4 Vodka Cocktails, $4 5 Rabbit Drafts, $3.50 Fireball Shots",
    specials_url: "https://smalltabs.com/details.php?id=374",
  },
  {
    name: "Bridget McNeill's Bar & Kitchen",
    address: "Lakeview @ 420 W Belmont Ave",
    specials: "$4.20 Draft Beers (5-7pm), $6 Wine Glasses (5-7pm)",
    specials_url: "https://smalltabs.com/details.php?id=347",
    food_specials: "$12.99 Large Pizzas (with drink purchase)",
    food_specials_url: "https://smalltabs.com/details.php?id=347",
  },
  {
    name: "Renaldi's After Dark",
    address: "Lakeview @ 2831 N Broadway St",
    specials: "$4 Guinness Bottles",
    specials_url: "https://smalltabs.com/details.php?id=504",
  },
  {
    name: "ZED451",
    address: "River North @ 739 N Clark St",
    specials: "$4.51 Grey Goose Vodka Cocktails (4:30-7pm)",
    specials_url: "https://smalltabs.com/details.php?id=639",
  },
  {
    name: "Brownstone Tavern",
    address: "North Center @ 3937 N Lincoln Ave",
    specials:
      "$5 Stella Artois, $5 Jameson Whiskey Shots, $7 Absolut Vodka Mules",
    specials_url: "https://smalltabs.com/details.php?id=9",
  },
  {
    name: "Derby Bar & Grill",
    address: "Lincoln Park @ 1224 W Webster Ave",
    specials:
      "$20 Fish Bowls, $7 Lagunitas Fatpours, $5 Pabst Blue Ribbon Can & Select Shot Combo",
    specials_url: "https://smalltabs.com/details.php?id=458",
    food_specials: "Half Price Appetizers (4-6pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=458",
  },
  {
    name: "O'Leary's Public House",
    address: "River North @ 541 N Wells St",
    specials: "$4.50 Corona Light Bottles",
    specials_url: "https://smalltabs.com/details.php?id=361",
  },
  {
    name: "Village Tap Bar & Grill",
    address: "Roscoe Village @ 2055 W Roscoe St",
    specials:
      "$2.50 Pabst Blue Ribbon Cans, $4 Budweiser, Bud Light, Miller Lite, & Miller High Life Bottles",
    specials_url: "https://smalltabs.com/details.php?id=269",
  },
  {
    name: "Lokal Wicker Park",
    address: "Wicker Park @ 1904 W North Ave",
    food_specials: "$10 Mussels & Truffle Fries",
    food_specials_url: "https://smalltabs.com/details.php?id=471",
  },
  {
    name: "6 Degrees",
    address: "Bucktown @ 1935 N Damen Ave",
    specials: "$5 Fireball Whiskey",
    specials_url: "https://smalltabs.com/details.php?id=225",
  },
  {
    name: "Links Taproom",
    address: "Wicker Park @ 1559 N Milwaukee Ave",
    food_specials: "$11 Fish Fry w/ Potato Pancake & Fries",
    food_specials_url: "https://smalltabs.com/details.php?id=568",
  },
  {
    name: "Atmosphere",
    address: "Andersonville @ 5355 N Clark St",
    specials: "$5 Fireball Whiskey Shots",
    specials_url: "https://smalltabs.com/details.php?id=96",
  },
  {
    name: "Devon Seafood Grill",
    address: "Near North Side @ 39 E Chicago Ave",
    food_specials:
      "$1 Oysters (4-7pm), $7.50 Appetizers (4-7pm, 9pm-Close), $2.50 Jumbo Shrimp Cocktail (4-7pm, 9pm-Close)",
    food_specials_url: "https://smalltabs.com/details.php?id=689",
  },
  {
    name: "Vaughans Pub Lakeview",
    address: "Lakeview @ 2917 N Sheffield Ave",
    specials:
      "$4.50 Blue Moon Drafts, $6 Margaritas, $6 Bombs, $16 Miller Family Buckets, $3 Domestic Bottles (4:30-6:30pm), $4 Well Drinks (4:30-6:30pm), $4.50 All American Drafts (4:30-6:30pm)",
    specials_url: "https://smalltabs.com/details.php?id=44",
    food_specials: "$2 Meatball Sliders, $2 Brisket Sliders, $5 Nachos",
    food_specials_url: "https://smalltabs.com/details.php?id=44",
  },
  {
    name: "Yak-Zies Wrigleyville",
    address: "Wrigleyville @ 3710 N Clark St",
    specials: "$5 Fat Tire, $5 Fireball Whiskey",
    specials_url: "https://smalltabs.com/details.php?id=149",
    food_specials: "$5 Fish Sandwiches",
    food_specials_url: "https://smalltabs.com/details.php?id=149",
  },
  {
    name: "High Noon Saloon",
    address: "Wicker Park @ 1560 N Milwaukee Ave",
    specials: "$5 Frozen Margaritas, $5 Old Forester Bourbon Shots",
    specials_url: "https://smalltabs.com/details.php?id=601",
  },
  {
    name: "Rocky's",
    address: "Bridgeport @ 234 W 31st St",
    specials:
      "$5 Black & Blues, $3 Non-Premium Domestic Beers, $4 Premium Domestic & Import Beers, $12 Domestic Buckets",
    specials_url: "https://smalltabs.com/details.php?id=378",
  },
  {
    name: "Vintage Lounge",
    address: "University Village @ 1449 W Taylor St",
    specials: "$5 Martinis",
    specials_url: "https://smalltabs.com/details.php?id=650",
    food_specials: "Half Price Select Appetizers",
    food_specials_url: "https://smalltabs.com/details.php?id=650",
  },
  {
    name: "McGee's Tavern",
    address: "Lincoln Park @ 950 W Webster Ave",
    specials: "$3 Bud Light Drafts",
    specials_url: "https://smalltabs.com/details.php?id=21",
  },
  {
    name: "Bridge House Tavern",
    address: "River North @ 321 N Clark St",
    specials: "$20 Tiger Tallboy Buckets",
    specials_url: "https://smalltabs.com/details.php?id=484",
  },
  {
    name: "Gallery Cabaret",
    address: "Bucktown @ 2020 N Oakley Ave",
    specials:
      "$6 Hammeson (Hamm's & Jameson Whiskey), $6 Jackhammer (Hamm's & Jack Daniels Whiskey), $3 Fireball Whiskey Shots, $3 Malort Shots",
    specials_url: "https://smalltabs.com/details.php?id=116",
  },
  {
    name: "Crossroads Bar & Grill",
    address: "West Loop @ 1120 W Madison St",
    specials:
      "$4 Goose Island Green Line, $4 Goose Island 312, $5 Captain Morgan Rum Cocktails",
    specials_url: "https://smalltabs.com/details.php?id=267",
  },
  {
    name: "Maxbar",
    address: "Lincoln Park @ 2247 N Lincoln Ave",
    specials: "$2 Fireball Whiskey Shots, $100 Fireball Whiskey Bottles",
    specials_url: "https://smalltabs.com/details.php?id=252",
  },
  {
    name: "Troquet River North",
    address: "River North @ 111 W Huron St",
    specials:
      "$4 Select Beers (4-7pm), $5 House Mixed Drinks (4-7pm), $6 House Red & White Wine Glasses (4-7pm)",
    specials_url: "https://smalltabs.com/details.php?id=649",
    food_specials:
      "Mimosa Brunch (10am-3pm), $4 Truffle Frites (4-7pm), $5 Salmon Rilette (4-7pm), $6 Croque Monsieur & Croque Végétarien (4-7pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=649",
  },
  {
    name: "Francesca's Bryn Mawr",
    address: "Edgewater @ 1039 W Bryn Mawr Ave",
    food_specials: "$15.99 Prix Fixe Lunch Menu",
    food_specials_url: "https://smalltabs.com/details.php?id=429",
  },
  {
    name: "Kroll's South Loop",
    address: "South Loop @ 1736 S Michigan Ave",
    specials:
      "$5 Bushmills Whiskey Cocktails (4-6pm), $4 Absolut Vodka Cocktails (4-6pm), $3 Deschutes Cans (4-6pm), $5 Keke Key Lime Martinis (4-6pm), $6 House Margaritas (4-6pm)",
    specials_url: "https://smalltabs.com/details.php?id=146",
    food_specials: "Half Price Appetizers (5-7pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=146",
  },
  {
    name: "Moe's Tavern",
    address: "Avondale @ 2937 N Milwaukee Ave",
    specials:
      "$3 Pabst Blue Ribbon Drafts, $3 Malort Shots, $3 Zacharias Harris Bourbon, $3 Well Drinks, $3 Craft Beer of the Month",
    specials_url: "https://smalltabs.com/details.php?id=423",
  },
  {
    name: "King Crab House",
    address: "Lincoln Park @ 312 N Halsted St",
    specials: "Half Price Beer (4-6pm), Half Price Well Drinks (4-6pm)",
    specials_url: "https://smalltabs.com/details.php?id=702",
    food_specials: "Half Price Appetizers (4-6pm), Half Price Entrees (4-6pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=702",
  },
  {
    name: "Pasta Bowl Lincoln Park",
    address: "Lincoln Park @ 2434 N Clark St",
    specials: "$5 Moscow Mules",
    specials_url: "https://smalltabs.com/details.php?id=637",
  },
  {
    name: "Lottie's Pub",
    address: "Bucktown @ 1925 W Cortland St",
    specials: "$4 Corona & Corona Light",
    specials_url: "https://smalltabs.com/details.php?id=79",
    food_specials: "50¢ Jumbo Wings",
    food_specials_url: "https://smalltabs.com/details.php?id=79",
  },
  {
    name: "John Barleycorn River North",
    address: "River North @ 149 W Kinzie St",
    specials: "$5 Budweiser, Bud Light, Coors Light, & Miller Lite Bottles",
    specials_url: "https://smalltabs.com/details.php?id=491",
  },
  {
    name: "Durkin's Tavern",
    address: "Lincoln Park @ 810 W Diversey Ave",
    specials: "$4 Fireball Whiskey Shots, $3 Bud Light Drafts",
    specials_url: "https://smalltabs.com/details.php?id=22",
  },
  {
    name: "Aberdeen Tap",
    address: "West Loop @ 440 N Aberdeen St",
    specials: "$5 Jameson Whiskey Shots, $3 Pabst Blue Ribbon Drafts",
    specials_url: "https://smalltabs.com/details.php?id=457",
  },
  {
    name: "River Shannon",
    address: "Lincoln Park @ 425 W Armitage Ave",
    specials: "$6 Stoli Vodka, $6 Stella Artois Bottles",
    specials_url: "https://smalltabs.com/details.php?id=70",
  },
  {
    name: "Belford Tavern",
    address: "Irving Park @ 3200 N Pulaski Rd",
    specials:
      "$5 Grey Goose Vodka Drinks & Shots, $3 Jameson Whiskey Shots, $3 Rotating Revolution 16oz Drafts, $3.50 Malort Shots, $3.50 Jameson Whiskey Shots, $2.25 Domestic 18oz Drafts",
    specials_url: "https://smalltabs.com/details.php?id=581",
  },
  {
    name: "The Green Lady",
    address: "Lakeview @ 3328 N Lincoln Ave",
    specials: "$3 Pabst Blue Ribbon Cans",
    specials_url: "https://smalltabs.com/details.php?id=213",
  },
  {
    name: "Furious Spoon",
    address: "Wicker Park @ 1571 N Milwaukee Ave",
  },
  {
    name: "Mason House",
    address: "River North @ 613 N Wells St",
    specials:
      "$5 Beer Cans (5-7pm), $5 Red & White Wine Glasses (5-7pm), $8 Craft Cocktails (5-7pm)",
    specials_url: "https://smalltabs.com/details.php?id=713",
    food_specials: "$1.50 Oysters (5-7pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=713",
  },
];

const tuesday = [
  {
    name: "Jefferson Tap & Grille",
    address: "Near West Side @ 325 N Jefferson St",
    specials:
      "$6 Sam Adams Boston Lager & Seasonal Jumbo Mugs, $5 Wine Glasses",
    specials_url: "https://smalltabs.com/details.php?id=302",
  },
  {
    name: "Bar Louie Dearborn Station",
    address: "Printers Row @ 47 W Polk St",
    food_specials:
      "Half Price Select Appetizers (4-7pm), Half Price Flatbreads (4-7pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=567",
  },
  {
    name: "The Call",
    address: "Andersonville @ 1547 W Bryn Mawr Ave",
    specials: "$2.50 Well Cocktails (7-9pm), $3 Domestic Beers (7-9pm)",
    specials_url: "https://smalltabs.com/details.php?id=343",
  },
  {
    name: "Vaughans Pub Northwest Side",
    address: "Jefferson Park @ 5485 N Northwest Hwy",
    specials:
      "$3.50 Amstel Light Bottles, $4 Blue Moon Drafts, $4 Powers Irish Whiskey Shots",
    specials_url: "https://smalltabs.com/details.php?id=43",
    food_specials:
      "$12 All-You-Can-Eat Fish & Chips, $7.50 Pub Burger & Fries (11am-3pm), $7.50 Chicken Sandwich & Fries (11am-3pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=43",
  },
  {
    name: "Mr. Brown's Lounge West Town",
    address: "Ukrainian Village @ 2301 W Chicago Ave",
    specials:
      "$7 Rum Punch (3-6pm), $4 Jameson Whiskey Shots (3-6pm), $4 Red Stripe Bottles (3-6pm)",
    specials_url: "https://smalltabs.com/details.php?id=363",
  },
  {
    name: "Goldie's",
    address: "North Center @ 3839 N Lincoln Ave",
    specials: "$1 Pabst Blue Ribbon Drafts",
    specials_url: "https://smalltabs.com/details.php?id=122",
  },
  {
    name: "Bulldog Ale House (South Loop)",
    address: "South Loop @ 901 S State St",
    specials: "$5 Jameson Whiskey, $5 Guinness, $6 Irish Car Bombs",
    specials_url: "https://smalltabs.com/details.php?id=686",
    food_specials: "$10.99 All-You-Can-Eat Fish Fry",
    food_specials_url: "https://smalltabs.com/details.php?id=686",
  },
  {
    name: "Nisei Lounge",
    address: "Wrigleyville @ 3439 N Sheffield Ave",
    specials:
      "$5 Jameson Whiskey Shots, $3 Mickey's Big Mouth Bottles, $4 Old Style Tallboys, $4 Pabst Blue Ribbon Drafts, $3 Malort Shots",
    specials_url: "https://smalltabs.com/details.php?id=307",
  },
  {
    name: "Hawkeye's Bar & Grill",
    address: "University Village @ 1458 W Taylor St",
    specials: "$10 Domestic Bottles",
    specials_url: "https://smalltabs.com/details.php?id=30",
    food_specials: "$2 Pita Pizzas (after 3pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=30",
  },
  {
    name: "Gannon's Pub",
    address: "North Center @ 4264 N Lincoln Ave",
    specials: "$4 Harp Drafts",
    specials_url: "https://smalltabs.com/details.php?id=16",
    food_specials: "$7.75 Fish & Chips",
    food_specials_url: "https://smalltabs.com/details.php?id=16",
  },
  {
    name: "The Land on Lincoln",
    address: "Lakeview @ 3032 N Lincoln Ave",
    specials:
      "$5 Vodka, $5 Bourbon, $2 Mystery Beer, $4 Drafts (4-7pm), $4 Wine Glasses (4-7pm)",
    specials_url: "https://smalltabs.com/details.php?id=165",
    food_specials:
      "Half Price Nonna's Meatball Sandwich, Half Price Snacks (4-7pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=165",
  },
  {
    name: "Murphy's Bleachers",
    address: "Wrigleyville @ 3653 N Sheffield Ave",
    specials:
      "$4 Southern Comfort Drinks, $14 Lagunitas IPA & Pilsner Pitchers",
    specials_url: "https://smalltabs.com/details.php?id=32",
    food_specials: "$6 Fish & Chips",
    food_specials_url: "https://smalltabs.com/details.php?id=32",
  },
  {
    name: "Lion Head Pub",
    address: "Lincoln Park @ 2251 N Lincoln Ave",
    food_specials: "$1 Fish Tacos, 25¢ Wings (4-7pm, with beverage purchase)",
    food_specials_url: "https://smalltabs.com/details.php?id=25",
  },
  {
    name: "Flo & Santos",
    address: "South Loop @ 1310 S Wabash Ave",
    specials: "$18 Polish Vodka Flights",
    specials_url: "https://smalltabs.com/details.php?id=489",
  },
  {
    name: "Small Bar Logan Square",
    address: "Logan Square @ 2956 N Albany Ave",
    specials:
      "$3 Pabst Blue Ribbon Bottles, $3 Miller Lite & Miller High Life Cans",
    specials_url: "https://smalltabs.com/details.php?id=80",
  },
  {
    name: "Rocky's",
    address: "Bridgeport @ 234 W 31st St",
    specials:
      "$5 Black & Blues, $3 Non-Premium Domestic Beers, $4 Premium Domestic & Import Beers, $12 Domestic Buckets",
    specials_url: "https://smalltabs.com/details.php?id=378",
  },
  {
    name: "Taqueria & Bar",
    address: "Lincoln Park @ 1450 W Webster Ave",
    specials: "$4 Shots, $2 Grab Bag Beers",
    specials_url: "https://smalltabs.com/details.php?id=565",
  },
  {
    name: "Ranalli's",
    address: "Lincoln Park @ 1925 N Lincoln Ave",
    specials:
      "$7 Mules, $40 Large Specialty Cocktails (Mega Mule, Red Menace, & Tennessee Top Hat)",
    specials_url: "https://smalltabs.com/details.php?id=559",
  },
  {
    name: "6 Degrees",
    address: "Bucktown @ 1935 N Damen Ave",
    specials: "$5 Fireball Whiskey",
    specials_url: "https://smalltabs.com/details.php?id=225",
  },
  {
    name: "The Lodge",
    address: "Near North Side @ 21 W Division Street",
    specials: "$4 Fat Tire Drafts, $6 Bombs",
    specials_url: "https://smalltabs.com/details.php?id=68",
  },
  {
    name: "Waterhouse Tavern",
    address: "Lakeview @ 3407 N Paulina St",
    specials: "$4 Fireball Whiskey, $15 Bud Light Buckets",
    specials_url: "https://smalltabs.com/details.php?id=212",
  },
  {
    name: "Havana",
    address: "River North @ 412 N Clark St",
    specials: "$20 House Mojito Pitchers",
    specials_url: "https://smalltabs.com/details.php?id=417",
  },
  {
    name: "Glascott's Saloon",
    address: "Lincoln Park @ 2158 N Halsted St",
    specials: "$5 Stella Artois Drafts, $5 Red Bull Bombs",
    specials_url: "https://smalltabs.com/details.php?id=46",
  },
  {
    name: "Emmit's Irish Pub",
    address: "West Loop @ 495 N Milwaukee Ave",
    specials: "$4 Fireball Whiskey",
    specials_url: "https://smalltabs.com/details.php?id=487",
    food_specials: "$8.95 Fish & Chips",
    food_specials_url: "https://smalltabs.com/details.php?id=487",
  },
  {
    name: "Foundation Room at House of Blues",
    address: "River North @ 329 N Dearborn St",
    specials:
      "$6 Select Wine Glasses (5-7pm), $5 Well Drinks (5-7pm), $4 Domestic Beers (5-7pm)",
    specials_url: "https://smalltabs.com/details.php?id=622",
  },
  {
    name: "Nick's Beer Garden",
    address: "Wicker Park @ 1516 N Milwaukee Ave",
    specials: "$1 off Draft Beers (4-7pm)",
    specials_url: "https://smalltabs.com/details.php?id=449",
  },
  {
    name: "New Line Tavern",
    address: "West Loop @ 201 N Clinton St",
    specials: "$5 Goose Island Beers, $8 Signature Cocktails",
    specials_url: "https://smalltabs.com/details.php?id=301",
  },
  {
    name: "Original Mother's",
    address: "Near North Side @ 26 W Division St",
    specials:
      "$6 Pabst Blue Ribbon Tallboys, $5 Bacardi Rum, $5 Wolf Berry & Black Razz Bombs, $5 Sailor Jerry Rum",
    specials_url: "https://smalltabs.com/details.php?id=69",
  },
  {
    name: "Wild Goose Bar & Grill",
    address: "North Center @ 4265 N Lincoln Ave",
    specials:
      "$5 Guinness Imperial Drafts, $5 Metropolitan Flywheel Drafts, $5 Select Martinis",
    specials_url: "https://smalltabs.com/details.php?id=37",
    food_specials: "$8 All-You-Can-Eat Fish Fry",
    food_specials_url: "https://smalltabs.com/details.php?id=37",
  },
  {
    name: "Cactus Bar & Grill",
    address: "Loop @ 404 S Wells St",
    specials: "$25 Lagunitas Buckets, $6 Patron Silver Tequila Shots",
    specials_url: "https://smalltabs.com/details.php?id=133",
  },
  {
    name: "J.P. Burke's Patio & Tap",
    address: "Lakeview @ 2913 N Lincoln Ave",
    specials:
      "$5 Guinness & Carlsberg Drafts, $5 Jack Daniels Whiskey Drinks, $5 Captain Morgan Rum Drinks",
    specials_url: "https://smalltabs.com/details.php?id=532",
  },
  {
    name: "Crossroads Public House",
    address: "Lincoln Park @ 2630 N Clark St",
    specials:
      "$4 Fireball Whiskey Shots, $5 Featured Cocktails, $5 Three Olvie Vodka Bombs, $10 Long Island Iced Tea Pitchers",
    specials_url: "https://smalltabs.com/details.php?id=208",
  },
  {
    name: "The Fifty/50",
    address: "Wicker Park @ 2047 W Division St",
    specials:
      "$6 Tito's Vodka Drinks, $5 Ketel One Vodka Drinks (3-6pm), Half Price Craft Beers (3-6pm), $5 Wine Glasses (3-6pm)",
    specials_url: "https://smalltabs.com/details.php?id=127",
    food_specials: "Half Price Appetizers (3-6pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=127",
  },
  {
    name: "Farraguts",
    address: "Andersonville @ 5240 N Clark St",
    specials: "$3 Miller Lite Drafts, $3 Pabst Blue Ribbon Drafts",
    specials_url: "https://smalltabs.com/details.php?id=445",
  },
  {
    name: "Porkchop Hyde Park",
    address: "Hyde Park @ 1516 E Harper Ct",
    specials: "Half Price Drinks (10pm-Close)",
    specials_url: "https://smalltabs.com/details.php?id=684",
    food_specials: "Half Price Appetizers (10pm-Close)",
    food_specials_url: "https://smalltabs.com/details.php?id=684",
  },
  {
    name: "20 East",
    address: "Near North Side @ 20 E Delaware St",
    specials:
      "$3 Domestic Beers (3-6pm), $4 Absolut Vodka Mixed Drinks (3-6pm), $5 Select Wine Glasses (3-6pm)",
    specials_url: "https://smalltabs.com/details.php?id=661",
    food_specials: "$7 Mini Burgers, $7 Hummus, $7 Truffle Fries, $7 Brussels",
    food_specials_url: "https://smalltabs.com/details.php?id=661",
  },
  {
    name: "Commonwealth Tavern",
    address: "Roscoe Village @ 2000 W Roscoe St",
    specials: "$6 Craft Cocktails (4-7pm), $6 Moscow Mules, $6 Summer Sunsets",
    specials_url: "https://smalltabs.com/details.php?id=588",
    food_specials: "Half Price Appetizers (3-7pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=588",
  },
  {
    name: "Hook & Ladder",
    address: "Lincoln Park @ 2270 N Lincoln Ave",
    specials:
      "$2.50 Domestic Bottles, $3 Import/Craft Bottles, $4 All Drafts, $3 Shots, $4 Bombs, $6 Wine Glasses, $6 Mimosas, $4 Well Drinks, $5 Call Drinks",
    specials_url: "https://smalltabs.com/details.php?id=593",
  },
  {
    name: "Crossroads at House of Blues",
    address: "River North @ 329 N Dearborn St",
    specials:
      "Half Price Select Wine Bottles (3-6pm), $8 Pabst Blue Ribbon Can & Jameson Whiskey Shot Combo (3-6pm), $2 off Select Drafts (3-6pm)",
    specials_url: "https://smalltabs.com/details.php?id=619",
    food_specials: "Half Price Appetizers (3-6pm), $9.95 Fish & Chips (3-6pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=619",
  },
  {
    name: "Twisted Shamrock",
    address: "Garfield Ridge @ 6462 S Central Ave",
    specials:
      "$3.50 Amstel Light, Heineken, or Shiner Bock, $3 Pinnacle Vodka O-Bombs",
    specials_url: "https://smalltabs.com/details.php?id=704",
  },
  {
    name: "The Drinkingbird",
    address: "Lincoln Park @ 2201 N Clybourn Ave",
    specials: "$5 Schlitz & Dickel Whiskey Shot Combo",
    specials_url: "https://smalltabs.com/details.php?id=48",
  },
  {
    name: "Tavern 57",
    address: "Lincoln Park @ 1059 W Wrightwood Ave",
    specials:
      "$2 off Wine Glasses (4-8pm), $2 off Ciders (4-8pm), $3 off Well Drinks (4-8pm), $3 Michelob Ultra Bottles (4-8pm), $3 Blue Moon Bottles (4-8pm), $4 Chicago Craft Drafts (4-8pm)",
    specials_url: "https://smalltabs.com/details.php?id=24",
  },
  {
    name: "Rudy's Bar & Grille",
    address: "Loop @ 69 E Madison St",
    food_specials:
      "$11.95 Fish & Chips, $12.95 Salmon Burgers, Half Price Appetizers (3-5pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=380",
  },
  {
    name: "The Grafton",
    address: "Lincoln Square @ 4530 N Lincoln Ave",
    specials: "$5 Berghoff Reppin' Red Drafts",
    specials_url: "https://smalltabs.com/details.php?id=260",
    food_specials: "$11 The Labor Day Burger",
    food_specials_url: "https://smalltabs.com/details.php?id=260",
  },
  {
    name: "Berlin",
    address: "Lakeview @ 954 W Belmont Ave",
    specials: "$3 Bacardi Rum Bombs, $5 Tropical Sex Pints, $6 Stoli Vodka",
    specials_url: "https://smalltabs.com/details.php?id=349",
  },
  {
    name: "Atmosphere",
    address: "Andersonville @ 5355 N Clark St",
    specials: "$5 Fireball Whiskey Shots",
    specials_url: "https://smalltabs.com/details.php?id=96",
  },
  {
    name: "O'Shaughnessy's Public House",
    address: "Lincoln Square @ 4557 N Ravenswood Ave",
    specials: "$5 Founders All-Day IPA",
    specials_url: "https://smalltabs.com/details.php?id=299",
    food_specials: "$10.95 All-You-Can-Eat Fish & Chips, $12.50 Fish Tacos",
    food_specials_url: "https://smalltabs.com/details.php?id=299",
  },
  {
    name: "Pippin's Tavern",
    address: "Near North Side @ 806 N Rush St",
    specials:
      "$5.50 Malort, $5 Maestro Dobel Tequila, $4 Wondermint, $5 Revel Stoke Roasted Pecan Whiskey, $6 Don Q Gran Anejo Mules, $6 Bulldog Gin Rickeys",
    specials_url: "https://smalltabs.com/details.php?id=71",
  },
  {
    name: "Ph.D Pub",
    address: "University Village @ 1257 S Halsted St",
    specials:
      "$3.50 Goose Island Oktoberfest 12oz Mason Jar Drafts, $3 Pabst Blue Ribbon & Rolling Rock Tallboys, $3 Bud Light Drafts, $9 Bud Light Pitchers, $3.50 Tullamore Dew Shots, $4 Carlsberg Drafts, $4 Fireball Shots, $4 Apple Moonshine Shots, $6 Vodka Lemonades, $8 Ph.D Vodka Mules",
    specials_url: "https://smalltabs.com/details.php?id=570",
  },
  {
    name: "Emerald Isle",
    address: "Edison Park @ 6686 N Northwest Hwy",
    specials:
      "$18 Domestic Buckets, $5 Long Island Iced Teas, $4 Bombs, $3 Fireball Whiskey Shots",
    specials_url: "https://smalltabs.com/details.php?id=288",
    food_specials: "$3 Half Dozen Wings (any style)",
    food_specials_url: "https://smalltabs.com/details.php?id=288",
  },
  {
    name: "The Hampton Social",
    address: "River North @ 353 W Hubbard St",
    specials: "Half Price Specialty Cocktails (4-6pm)",
    specials_url: "https://smalltabs.com/details.php?id=636",
    food_specials: "Half Price Pizzas (4-6pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=636",
  },
  {
    name: "Clark Street Dog",
    address: "Lakeview @ 3040 N Clark St",
    specials:
      "$2 Bud Light Drafts, $3.50 Goose Island Drafts, $3.50 Lagunitas Drafts, $5 Picklebacks, $8 Mules",
    specials_url: "https://smalltabs.com/details.php?id=472",
  },
  {
    name: "Merkle's Bar & Grill",
    address: "Wrigleyville @ 3516 N Clark St",
    specials:
      "$3 Domestic Cans, $4 Well Cocktails, $4 Bloody Marys, $5 Craft Drafts, $5 Crown Apple Shots",
    specials_url: "https://smalltabs.com/details.php?id=18",
    food_specials: "$2 Tacos, $4 Burger & Fries",
    food_specials_url: "https://smalltabs.com/details.php?id=18",
  },
  {
    name: "The Scout",
    address: "South Loop @ 1301 S Wabash Ave",
    specials: "$3 Sam Adams Boston Lager Drafts",
    specials_url: "https://smalltabs.com/details.php?id=451",
  },
  {
    name: "Side Street Saloon",
    address: "Lakeview @ 1456 W George St",
    specials: "$3.25 Pabst Blue Ribbon Bottles",
    specials_url: "https://smalltabs.com/details.php?id=187",
    food_specials: "$5.50 Half Pound Cheeseburger & Fries",
    food_specials_url: "https://smalltabs.com/details.php?id=187",
  },
  {
    name: "Big City Tap",
    address: "Lakeview @ 1010 W Belmont Ave",
    specials: "$6 Jameson Whiskey, $1 Jello Shots, $1 Apple Pucker Shots",
    specials_url: "https://smalltabs.com/details.php?id=306",
    food_specials: "Half Price Bar Snacks (until 9pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=306",
  },
  {
    name: "McCormick & Schmick's",
    address: "Near North Side @ 41 E Chestnut St",
    specials:
      "$6 Canyon Road Chardonnay, Canyon Cabernet Sauvignon, & Bringer White Zinfandel Wine Glasses (4-7pm), $7 Agave Rita, All American, & Talk of the Town Cocktails (4-7pm), $9 Urban Influence, Brandy Sidebar, & Sour Apple Martinis (4-7pm)",
    specials_url: "https://smalltabs.com/details.php?id=605",
  },
  {
    name: "Emerald Loop",
    address: "Loop @ 216 N Wabash Ave",
    specials: "$4.75 Beer of the Month",
    specials_url: "https://smalltabs.com/details.php?id=42",
    food_specials: "$14 Lobster Mac & Cheese, $12 Cajun Tilapia",
    food_specials_url: "https://smalltabs.com/details.php?id=42",
  },
  {
    name: "Hopsmith Tavern",
    address: "Near North Side @ 15 W Division St",
    specials: "$6 Pabst Blue Ribbon & Jack Daniels Whiskey Shot Combo",
    specials_url: "https://smalltabs.com/details.php?id=607",
    food_specials: "Half Price Appetizers (4-6pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=607",
  },
  {
    name: "Keenan O'Reilly's",
    address: "Lakeview @ 3916 N Ashland Ave",
    specials:
      "$3.50 Goose Island & Sam Adams Bottles, $2 Pabst Blue Ribbon Cans, $2.50 Miller High Life Tallboys, $3 Labatt Blue Drafts, $2.50 Old Style Drafts",
    specials_url: "https://smalltabs.com/details.php?id=454",
  },
  {
    name: "Fatpour Tap Works",
    address: "Wicker Park @ 2005 W Division St",
    specials: "$5 Pabst Blue Ribbon & Select Shot Combo",
    specials_url: "https://smalltabs.com/details.php?id=459",
  },
  {
    name: "Bobby Love's",
    address: "Lakeview @ 3729 N Halsted St",
    specials: "$6 Absolute Vodka Cocktails",
    specials_url: "https://smalltabs.com/details.php?id=337",
  },
  {
    name: "Duffy's Tavern",
    address: "Lincoln Park @ 422 W Diversey Ave",
    specials:
      "$1 Miller Lite & Coors Light Bottles (5-7pm), $2 Well Drinks (5-7pm), $3 Fireball Whiskey Shots (5-7pm), $4 Wine Glasses (5-7pm)",
    specials_url: "https://smalltabs.com/details.php?id=23",
  },
  {
    name: "Sheffield's",
    address: "Lakeview @ 3258 N Sheffield Ave",
    specials: "$4 Brewery-of-the-Month Drafts",
    specials_url: "https://smalltabs.com/details.php?id=54",
  },
  {
    name: "Crossroads Bar & Grill",
    address: "West Loop @ 1120 W Madison St",
    specials:
      "$4 Goose Island Green Line, $4 Goose Island 312, $5 Captain Morgan Rum Cocktails",
    specials_url: "https://smalltabs.com/details.php?id=267",
  },
  {
    name: "GRK Bar",
    address: "Loop @ 400 S Wells St",
    specials: "$5 Shots, $1 off Select Drafts",
    specials_url: "https://smalltabs.com/details.php?id=621",
  },
  {
    name: "Racine Plumbing Bar & Grill",
    address: "Lincoln Park @ 2642 N Lincoln Ave",
    specials:
      "$35 Drink Package including Draft Beers, Well Drinks, Select Call Drinks, Domestic Bottles and Cans, & Half Price Food (9pm-12am)",
    specials_url: "https://smalltabs.com/details.php?id=357",
  },
  {
    name: "Decibel Bar",
    address: "Uptown @ 4437 N Broadway Ave",
    specials: "$2 House Shots, $4 Bacardi, $4 Mimosas",
    specials_url: "https://smalltabs.com/details.php?id=553",
  },
  {
    name: "Bird's Nest",
    address: "Lincoln Park @ 2500 N Southport Ave",
    specials: "$4 Blue Line Pilsner, $5 Svedka Vodka Bombs, $5 Red Bull Bombs",
    specials_url: "https://smalltabs.com/details.php?id=6",
  },
  {
    name: "Mullen's Bar & Grill",
    address: "Rogers Park @ 7301 N Western Ave",
    specials: "$5 Flavored Vodka Drinks, $5 Bomb Shots (excludes Car Bombs)",
    specials_url: "https://smalltabs.com/details.php?id=460",
    food_specials: "$9 Meatloaf",
    food_specials_url: "https://smalltabs.com/details.php?id=460",
  },
  {
    name: "Sidebar Grille",
    address: "Loop @ 221 N LaSalle St",
    specials:
      "$3 Fernet or Fireball Shots (4pm-Close), $5 Draft Beers (4-6pm), $6 Select Wine Glasses (4-6pm), $7 Svedka Vodka Mules (4-6pm)",
    specials_url: "https://smalltabs.com/details.php?id=10",
    food_specials: "$10 Featured Flatbread (4pm-Close)",
    food_specials_url: "https://smalltabs.com/details.php?id=10",
  },
  {
    name: "Ravenswood Station Bar & Grill",
    address: "Lincoln Square @ 4709 N Damen Ave",
    specials:
      "$7 Call Vodka Mixed Drinks, $6.50 Guinness 20oz Drafts, $5.50 Fat Tire Drafts",
    specials_url: "https://smalltabs.com/details.php?id=100",
    food_specials: "$6.75 Fish & Chips, $7 Grilled Fish Tacos",
    food_specials_url: "https://smalltabs.com/details.php?id=100",
  },
  {
    name: "O'Donovan's Pub",
    address: "North Center @ 2100 W Irving Park Rd",
    specials:
      "$15 Giant 48oz Cocktails, $5 Margaritas, $3 Tecate Cans, $13 Tecate Buckets, $1 off Tequila Shots",
    specials_url: "https://smalltabs.com/details.php?id=157",
    food_specials: "$2 Tacos",
    food_specials_url: "https://smalltabs.com/details.php?id=157",
  },
  {
    name: "Leona's Rogers Park",
    address: "Rogers Park @ 6935 N Sheridan Ave",
    specials:
      "$5 Cocktails (6-9pm), $5 Frozen Margaritas (6-9pm), $5 Rocks Margaritas (6-9pm), $5 Long Island Iced Teas (6-9pm)",
    specials_url: "https://smalltabs.com/details.php?id=668",
    food_specials: "$3 off Wing Dings",
    food_specials_url: "https://smalltabs.com/details.php?id=668",
  },
  {
    name: "Sluggers",
    address: "Wrigleyville @ 3540 N Clark St",
    specials:
      "$6 Goose Island Green Line Drafts, $6 Sam Adams Drafts, $6 Pinnacle Flavored Vodka Cocktails",
    specials_url: "https://smalltabs.com/details.php?id=53",
  },
  {
    name: "Butch McGuires",
    address: "Near North Side @ 20 W Division St",
    specials:
      "$5 Sam Adams Lager Drafts, $5 Sam Adams Seasonal Drafts, $4 Mystery Shots, Half Price Drafts (5-7pm), Half Price Mixed Drinks (5-7pm), Half Price Wine (5-7pm)",
    specials_url: "https://smalltabs.com/details.php?id=617",
  },
  {
    name: "King Crab House",
    address: "Lincoln Park @ 312 N Halsted St",
    specials: "Half Price Beer (4-6pm), Half Price Well Drinks (4-6pm)",
    specials_url: "https://smalltabs.com/details.php?id=702",
    food_specials: "Half Price Appetizers (4-6pm), Half Price Entrees (4-6pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=702",
  },
  {
    name: "Rockwood Place",
    address: "Wrigleyville @ 3466 N Clark St",
    specials: "$3 Bud Light Drafts, $5 Flavored Bombs, $6 Margaritas",
    specials_url: "https://smalltabs.com/details.php?id=350",
    food_specials: "Half Price Pizzas",
    food_specials_url: "https://smalltabs.com/details.php?id=350",
  },
  {
    name: "Edgewater Mexican Cafe",
    address: "Edgewater @ 1055 W Bryn Mawr Ave",
    specials: "$6 Wine Glasses, $6 Palomas, $6 House Margaritas (4-7pm)",
    specials_url: "https://smalltabs.com/details.php?id=711",
  },
  {
    name: "O'Leary's Public House",
    address: "River North @ 541 N Wells St",
    specials: "$4.50 Corona Light Bottles",
    specials_url: "https://smalltabs.com/details.php?id=361",
  },
  {
    name: "Francois Frankie",
    address: "Loop @ 222 W Randolph St",
    specials:
      "$5 Drafts (3-6pm), $10 Red & White Wine Glasses (3-6pm), $10 Cocktail of the Week (3-6pm)",
    specials_url: "https://smalltabs.com/details.php?id=712",
  },
  {
    name: "Sherry's Bar",
    address: "West Rogers Park @ 5652 N Western Ave",
    specials:
      "$5 Long Island Iced Teas, $9 Old Style Buckets, $13 Miller Lite Buckets",
    specials_url: "https://smalltabs.com/details.php?id=645",
  },
  {
    name: "Mr. Brown's Lounge Loop",
    address: "Loop @ 81 E Wacker Dr",
    specials:
      "Half Price Island Rum Punch (3-6pm), Half Off Red Stripe Bottles (3-6pm)",
    specials_url: "https://smalltabs.com/details.php?id=615",
  },
  {
    name: "Bridget McNeill's Bar & Kitchen",
    address: "Lakeview @ 420 W Belmont Ave",
    specials: "$4.20 Draft Beers (5-7pm), $6 Wine Glasses (5-7pm)",
    specials_url: "https://smalltabs.com/details.php?id=347",
    food_specials: "$12.99 Large Pizzas (with drink purchase)",
    food_specials_url: "https://smalltabs.com/details.php?id=347",
  },
  {
    name: "Fat Cat",
    address: "Uptown @ 4840 N Broadway St",
    specials:
      "$6 Uptown Royale (4-6pm), $6 Four Roses Manhattan (4-6pm), $6 Prairie Organic Gin & Ginger (4-6pm), $5 Select Craft Beers (4-6pm), $5 Highballs (4-6pm), $6 Select Wines (4-6pm)",
    specials_url: "https://smalltabs.com/details.php?id=120",
  },
  {
    name: "Monsignor Murphy's",
    address: "Lakeview @ 3019 N Broadway St",
    specials: "$3 Pabst Blue Ribbon Cans, $3 Miller Lite Cans",
    specials_url: "https://smalltabs.com/details.php?id=246",
  },
  {
    name: "Third Rail Tavern",
    address: "West Loop @ 1133 W Madison St",
    specials:
      "$5 Goose Island, Three Floyds, & Bell's Brewery Drafts (5-9pm), $8 Bulleit Bourbon or Rye Manhattans (5-9pm), $8 Bulleit Bourbon or Rye Old Fashioneds (5-9pm)",
    specials_url: "https://smalltabs.com/details.php?id=303",
  },
  {
    name: "Gallery Cabaret",
    address: "Bucktown @ 2020 N Oakley Ave",
    specials:
      "$6 Hammeson (Hamm's & Jameson Whiskey), $6 Jackhammer (Hamm's & Jack Daniels Whiskey), $3 Fireball Whiskey Shots, $3 Malort Shots",
    specials_url: "https://smalltabs.com/details.php?id=116",
  },
  {
    name: "River Shannon",
    address: "Lincoln Park @ 425 W Armitage Ave",
    specials: "$6 Stoli Vodka, $6 Stella Artois Bottles",
    specials_url: "https://smalltabs.com/details.php?id=70",
  },
  {
    name: "Lizard's Liquid Lounge",
    address: "Irving Park @ 3058 W Irving Park Rd",
    specials:
      "$4 Stella Artois Drafts, $4 Great Lakes Burning River Drafts, $5 Microbrews",
    specials_url: "https://smalltabs.com/details.php?id=98",
  },
  {
    name: "Leader Bar",
    address: "Irving Park @ 3000 W Irving Park Rd",
    specials:
      "$15 Budweiser, Bud Light, Miller Lite, & Miller High Life Buckets, $18 Amstel Light, Heineken, Heineken Light, Tecate, & Newcastle Brown Ale Buckets",
    specials_url: "https://smalltabs.com/details.php?id=381",
    food_specials: "Half Price Appetizers from 4-7pm",
    food_specials_url: "https://smalltabs.com/details.php?id=381",
  },
  {
    name: "The Temple Bar",
    address: "Lakeview @ 3001 N Ashland Ave",
    specials: "$4 Lagunitas Drafts",
    specials_url: "https://smalltabs.com/details.php?id=305",
    food_specials: "$8.25 Fish & Chips",
    food_specials_url: "https://smalltabs.com/details.php?id=305",
  },
  {
    name: "Derby Bar & Grill",
    address: "Lincoln Park @ 1224 W Webster Ave",
    specials:
      "$20 Fish Bowls, $7 Lagunitas Fatpours, $5 Pabst Blue Ribbon Can & Select Shot Combo",
    specials_url: "https://smalltabs.com/details.php?id=458",
    food_specials: "Half Price Appetizers (4-6pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=458",
  },
  {
    name: "The Graystone Tavern",
    address: "Lakeview @ 3441 N Sheffield Ave",
    specials: "$5 Jack Daniels Fire Shots",
    specials_url: "https://smalltabs.com/details.php?id=653",
  },
  {
    name: "Bottom Lounge",
    address: "West Loop @ 1375 W Lake St",
    specials: "$3.50 Schiltz Drafts, $4 Budweiser & Bud Light Bottles",
    specials_url: "https://smalltabs.com/details.php?id=436",
  },
  {
    name: "Timothy O'Toole's",
    address: "Near North Side @ 622 N Fairbanks St",
    specials:
      "$12 Miller Lite, Coors Light, & Bud Light Pitchers, $6 Jameson Whiskey Cocktails, $6 Jameson Whiskey Shots",
    specials_url: "https://smalltabs.com/details.php?id=195",
  },
  {
    name: "Lowcountry South Loop",
    address: "South Loop @ 1132 S Wabash Ave",
    specials: "$24 Sangria Carafes (5-7pm), Half Price Beer & Wine (5-7pm)",
    specials_url: "https://smalltabs.com/details.php?id=708",
    food_specials: "$10 Mussels & Fries (5-7pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=708",
  },
  {
    name: "Harmony Grill",
    address: "Lakeview @ 3159 N Southport Ave",
    specials: "$4 Fireball Whiskey",
    specials_url: "https://smalltabs.com/details.php?id=242",
  },
  {
    name: "Corcoran's Grill & Pub",
    address: "Lincoln Park @ 1615 N Wells St",
    specials:
      "$4.50 Corona & Corona Light Bottles, $7 Moscow Mules, $5 All Shots",
    specials_url: "https://smalltabs.com/details.php?id=41",
    food_specials: "$12 All-You-Can-Eat Fish & Chips",
    food_specials_url: "https://smalltabs.com/details.php?id=41",
  },
  {
    name: "Fado Irish Pub",
    address: "River North @ 100 W Grand Ave",
    specials:
      "$7 Old Fashioneds (5-9pm), $7 Manhattans (5-9pm), $7 Whiskey Sours (5-9pm), $5 Carlsberg Beer (5-9pm), $7 Red & White Wine Glasses (5-9pm)",
    specials_url: "https://smalltabs.com/details.php?id=583",
    food_specials: "$6 Select Snacks (5-9pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=583",
  },
  {
    name: "Monty's Tap",
    address: "Near North Side @ 600 W Chicago Ave",
    specials:
      "$4 Select Beers (3:30-5:30pm), $6 Moscow Mules (3:30-5:30pm), $7 Sauvignon Blanc, Pinot Noir, & Rosé Glasses (3:30-5:30pm)",
    specials_url: "https://smalltabs.com/details.php?id=707",
  },
  {
    name: "Gio's Bar & Grill",
    address: "Lincoln Square @ 4857 N Damen Ave",
    specials: "$4 Vodka Cocktails, $4 5 Rabbit Drafts, $3.50 Fireball Shots",
    specials_url: "https://smalltabs.com/details.php?id=374",
  },
  {
    name: "The Hidden Shamrock",
    address: "Lincoln Park @ 2723 N Halsted St",
    specials:
      "Half Price Craft Cocktails, $3 Rotating Drafts, $3 Whiskey Shots",
    specials_url: "https://smalltabs.com/details.php?id=336",
  },
  {
    name: "Country Club Bar",
    address: "Wrigleyville @ 3462 N Clark St",
    specials:
      "$6 Tito's Vodka Cocktails, $4 Revolution Anti-Hero, $3 Shiner Premium",
    specials_url: "https://smalltabs.com/details.php?id=207",
    food_specials: "Half Price Appetizers",
    food_specials_url: "https://smalltabs.com/details.php?id=207",
  },
  {
    name: "Longman & Eagle",
    address: "Logan Square @ 2657 N Kedzie Ave",
    specials:
      "$2 Old Milwaukee & Pabst Blue Ribbon Cans, $3 Old Style Drafts, $3 Select Whiskey Shots",
    specials_url: "https://smalltabs.com/details.php?id=348",
  },
  {
    name: "The North End",
    address: "Lakeview @ 3733 N Halsted St",
    specials: "$5 Fireball Whiskey Shots",
    specials_url: "https://smalltabs.com/details.php?id=174",
  },
  {
    name: "Altiro Latin Fusion",
    address: "Roscoe Village @ 2116 W Roscoe St",
    specials:
      "$1.99 Champagne (2-5pm), $2.49 Imported Mexican Beers (2-5pm), $4.99 Signature Craft Margaritas (2-5pm)",
    specials_url: "https://smalltabs.com/details.php?id=632",
    food_specials: "$1.99 Gourmet Tacos (2-5pm), $1.99 Ala Papa Bravo (2-5pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=632",
  },
  {
    name: "Bourbon on Division",
    address: "Wicker Park @ 2050 W Division St",
    specials:
      "$5 Deep Eddy Rum Lemon Drops, $20 Domestic Buckets, $5 Tito's Vodka or Tullamore Dew Whiskey Mixed Drinks (9-11pm)",
    specials_url: "https://smalltabs.com/details.php?id=710",
  },
  {
    name: "Pint",
    address: "Wicker Park @ 1547 N Milwaukee Ave",
    food_specials: "Half Price Fish & Chips",
    food_specials_url: "https://smalltabs.com/details.php?id=218",
  },
  {
    name: "The Kerryman",
    address: "Near North Side @ 661 N Clark St",
    specials:
      "$4 Guiness (4-9pm), $5 Jameson Shots (4-9pm), $6 Tito's Vodka Drinks (4-9pm)",
    specials_url: "https://smalltabs.com/details.php?id=62",
    food_specials: "$10 Fish & Chips (4-9pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=62",
  },
  {
    name: "Bulldog Ale House (Loyola)",
    address: "Rogers Park @ 6606 N Sheridan Rd",
    specials: "$5 Jameson Whiskey, $5 Guinness, $6 Irish Car Bomb",
    specials_url: "https://smalltabs.com/details.php?id=663",
    food_specials: "$10.99 All-You-Can-Eat Fish Fry",
    food_specials_url: "https://smalltabs.com/details.php?id=663",
  },
  {
    name: "Dark Horse Tap & Grille",
    address: "Wrigleyville @ 3443 N Sheffield Ave",
    specials:
      "$5 Bomb Shots, $5 Stoli Vodka Cocktails, $4 Lagunitas Drafts, $3 Fireball Whiskey Shots",
    specials_url: "https://smalltabs.com/details.php?id=201",
  },
  {
    name: "Finley Dunne's Tavern",
    address: "Lakeview @ 3458 N Lincoln Ave",
    specials: "$5 UV Vodka Bombs, $2 Miller High Life Drafts",
    specials_url: "https://smalltabs.com/details.php?id=5",
    food_specials: "$12 All-You-Can-Eat Blue Moon Fish Fry",
    food_specials_url: "https://smalltabs.com/details.php?id=5",
  },
  {
    name: "Celtic Crown Public House",
    address: "North Center @ 4301 N Western Ave",
    specials:
      "$4 Founders All Day IPA, $5 Stoli Vodka Mules, $2 Miller Lite Drafts (3-7pm), $2 Well Cocktails",
    specials_url: "https://smalltabs.com/details.php?id=76",
    food_specials: "$7 Turkey Pesto Sandwich, $7 Green Ranch BLT Sandwich",
    food_specials_url: "https://smalltabs.com/details.php?id=76",
  },
  {
    name: "Dugan's on Halsted",
    address: "West Loop @ 128 S Halsted St",
    specials:
      "$2.50 Bud Light Drafts, $3.50 Hoegaarden, $2.50 Pabst Blue Ribbon Bottles",
    specials_url: "https://smalltabs.com/details.php?id=424",
  },
  {
    name: "The Atlantic Bar & Grill",
    address: "Lincoln Square @ 5062 N Lincoln Ave",
    specials: "$4 Wine Spritzers, $4 Stoli Vodka Drinks",
    specials_url: "https://smalltabs.com/details.php?id=101",
    food_specials: "$4 Crostini Menu",
    food_specials_url: "https://smalltabs.com/details.php?id=101",
  },
  {
    name: "Jack & Gingers",
    address: "Bucktown @ 2048 W Armitage Ave",
    specials: "$4 Well Drinks, $2 off Bulleit Whiskey, $5 Jack & Gingers",
    specials_url: "https://smalltabs.com/details.php?id=50",
    food_specials: "$6 Fish & Chips",
    food_specials_url: "https://smalltabs.com/details.php?id=50",
  },
  {
    name: "Four Star Lounge",
    address: "Lincoln Park @ 2666 N Halsted St",
    specials:
      "$4 Jack Daniels Whiskey, Jim Beam Bourbon, Bacardi Rum, Jose Cuervo Tequila, Ketel One Vodka, & Beefeater Gin Well Drinks (5-8pm), $4 Revolution Fist City, Revolution Anti-Hero, Goose Island 312, Revolution Eugene Porter, and Blue Moon (5-8pm), $5 House Cabernet & Chardonnay Wine Glasses (5-8pm), $2 Malort Shots (5-8pm), $2 Fireball Whiskey Shots (5-8pm), $3 Jameson Whiskey Shots (5-8pm), $3 Jim Beam Bourbon Shots (5-8pm), $5 Vodka or Gin Martinis (5-8pm)",
    specials_url: "https://smalltabs.com/details.php?id=608",
    food_specials: "$5 Shrimp Cocktail (5-8pm), $5 Hummus Platter (5-8pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=608",
  },
  {
    name: "Toon's Bar & Grill",
    address: "Lakeview @ 3857 N Southport Ave",
    specials: "$1 off Stoli Vodka Cocktails, $4.50 Lagunitas Drafts",
    specials_url: "https://smalltabs.com/details.php?id=203",
    food_specials: "$10 House-Smoked Baby Back Ribs, $4.50 Po'boys",
    food_specials_url: "https://smalltabs.com/details.php?id=203",
  },
  {
    name: "Templestowe Pub",
    address: "Irving Park @ 3135 W Montrose Ave",
    specials: "$3 Fireball Whiskey Shots, $3 Import Bottles",
    specials_url: "https://smalltabs.com/details.php?id=340",
  },
  {
    name: "Mason House",
    address: "River North @ 613 N Wells St",
    specials:
      "$5 Beer Cans (5-7pm), $5 Red & White Wine Glasses (5-7pm), $8 Craft Cocktails (5-7pm)",
    specials_url: "https://smalltabs.com/details.php?id=713",
    food_specials: "$1.50 Oysters (5-7pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=713",
  },
  {
    name: "Scot's Bar",
    address: "North Center @ 1829 W Montrose Ave",
    specials: "$3.50 Well Drinks, $3.50 Miller Lite Drafts",
    specials_url: "https://smalltabs.com/details.php?id=263",
  },
  {
    name: "Pasta Bowl Wicker Park",
    address: "Wicker Park @ 1852 W North Ave",
    specials: "$5 Moscow Mules",
    specials_url: "https://smalltabs.com/details.php?id=638",
  },
  {
    name: "Easy Bar",
    address: "Wicker Park @ 1944 W Division St",
    specials: "$5 Jameson Shots",
    specials_url: "https://smalltabs.com/details.php?id=215",
  },
  {
    name: "The Arrogant Frog Bar",
    address: "Lincoln Park @ 1365 W Fullerton Ave",
    specials:
      "$3 Bud Light Drafts, $4 Fireball Whiskey Shots, $4 Craft Beers, $5 Well Cocktails, $5 Malibu Rum Cocktails",
    specials_url: "https://smalltabs.com/details.php?id=240",
  },
  {
    name: "Lincoln Tap Room",
    address: "Lakeview @ 3010 N Lincoln Ave",
    specials:
      "$4 Angry Orchard Cider, $5 Call & Premium Shots, $3 Two Brothers Outlaw IPA Cans, $3 Two Brothers Sidekick Citrus Ale Cans, $4.50 Three Olives Vodka Cocktails",
    specials_url: "https://smalltabs.com/details.php?id=334",
  },
  {
    name: "Will's Northwoods Inn",
    address: "Lakeview @ 3030 N Racine Ave",
    specials:
      "$4 Sierra Nevada Drafts, $3 Schiltz Tallboys, $2.50 Pabst Blue Ribbon, $3 Miller High Life Bottles",
    specials_url: "https://smalltabs.com/details.php?id=77",
    food_specials: "$12.95 All-You-Can-Eat Fish Fry",
    food_specials_url: "https://smalltabs.com/details.php?id=77",
  },
  {
    name: "Four Treys Tavern",
    address: "Roscoe Village @ 3333 N Damen Ave",
    specials:
      "$5.50 Bombs, $3.75 Well Drinks, $2.50 Pabst Blue Ribbon, $3.50 Old Style Tallboys, $4 Jameson Whiskey Shots, $3 Domestic Bottles, $4-4.50 Import Bottles",
    specials_url: "https://smalltabs.com/details.php?id=78",
  },
  {
    name: "Taco Joint Lincoln Park",
    address: "Lincoln Park @ 1969 N Halsted St",
    specials: "$5 Modelo Especial Can & Olmeca Tequila Blanco Shot Combo",
    specials_url: "https://smalltabs.com/details.php?id=541",
  },
  {
    name: "Francesca's Bryn Mawr",
    address: "Edgewater @ 1039 W Bryn Mawr Ave",
    food_specials: "$15.99 Prix Fixe Lunch Menu",
    food_specials_url: "https://smalltabs.com/details.php?id=429",
  },
  {
    name: "Four Shadows Tavern",
    address: "Lincoln Park @ 2758 N Ashland Ave",
    specials: "$5 Fireball Whiskey, $5 Stoli Vodka Flavors",
    specials_url: "https://smalltabs.com/details.php?id=29",
  },
  {
    name: "Moe's Tavern",
    address: "Avondale @ 2937 N Milwaukee Ave",
    specials:
      "$3 Pabst Blue Ribbon Drafts, $3 Malort Shots, $3 Zacharias Harris Bourbon, $3 Well Drinks, $3 Craft Beer of the Month",
    specials_url: "https://smalltabs.com/details.php?id=423",
  },
  {
    name: "The Irish Oak",
    address: "Wrigleyville @ 3511 N Clark St",
    specials: "$6 Budweiser Tallboys & Shot Combo, $25 Fish Bowls",
    specials_url: "https://smalltabs.com/details.php?id=199",
    food_specials: "$10 All-You-Can-Eat Fish & Chips",
    food_specials_url: "https://smalltabs.com/details.php?id=199",
  },
  {
    name: "Brownstone Tavern",
    address: "North Center @ 3937 N Lincoln Ave",
    specials:
      "$5 Stella Artois, $5 Jameson Whiskey Shots, $7 Absolut Vodka Mules",
    specials_url: "https://smalltabs.com/details.php?id=9",
  },
  {
    name: "Furious Spoon",
    address: "Wicker Park @ 1571 N Milwaukee Ave",
  },
  {
    name: "Seven Lions",
    address: "Loop @ 130 S Michigan Ave",
    specials:
      "$9 Specialty Cocktails, $24 Select Wine Bottles (3-6pm), Half Price Featured Drafts (3-6pm)",
    specials_url: "https://smalltabs.com/details.php?id=683",
    food_specials:
      "$8 Hummus (3-6pm), $8 Pulled Pork Nachos (3-6pm), $8 Crispy Chicken Sliders (3-6pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=683",
  },
  {
    name: "Aberdeen Tap",
    address: "West Loop @ 440 N Aberdeen St",
    specials: "$5 Jameson Whiskey Shots, $3 Pabst Blue Ribbon Drafts",
    specials_url: "https://smalltabs.com/details.php?id=457",
  },
  {
    name: "Charlie's",
    address: "Lakeview @ 3726 N Broadway St",
    specials: "$10 Long Island Iced Teas, $3 Apple Pie Shots",
    specials_url: "https://smalltabs.com/details.php?id=264",
  },
  {
    name: "Lokal Wicker Park",
    address: "Wicker Park @ 1904 W North Ave",
    food_specials: "$10 Mussels & Truffle Fries",
    food_specials_url: "https://smalltabs.com/details.php?id=471",
  },
  {
    name: "Maxbar",
    address: "Lincoln Park @ 2247 N Lincoln Ave",
    specials: "$2 Fireball Whiskey Shots, $100 Fireball Whiskey Bottles",
    specials_url: "https://smalltabs.com/details.php?id=252",
  },
  {
    name: "Distilled Chicago",
    address: "Lincoln Park @ 1480 W Webster Ave",
    food_specials: "$10 Country Fried Chicken Sandwich",
    food_specials_url: "https://smalltabs.com/details.php?id=656",
  },
  {
    name: "Vaughans Pub Lakeview",
    address: "Lakeview @ 2917 N Sheffield Ave",
    specials:
      "$4.50 Blue Moon Drafts, $6 Margaritas, $6 Bombs, $16 Miller Family Buckets, $3 Domestic Bottles (4:30-6:30pm), $4 Well Drinks (4:30-6:30pm), $4.50 All American Drafts (4:30-6:30pm)",
    specials_url: "https://smalltabs.com/details.php?id=44",
    food_specials: "$2 Meatball Sliders, $2 Brisket Sliders, $5 Nachos",
    food_specials_url: "https://smalltabs.com/details.php?id=44",
  },
  {
    name: "Sports Corner Bar & Grill",
    address: "Wrigleyville @ 956 W Addison St",
    specials: "$5 You-Call-Its",
    specials_url: "https://smalltabs.com/details.php?id=328",
    food_specials: "$2 Sliders",
    food_specials_url: "https://smalltabs.com/details.php?id=328",
  },
  {
    name: "Gaslight Bar & Grille",
    address: "Lincoln Park @ 2450 N Clark St",
    specials:
      "$15 Domestic Buckets, $5 Tullamore Dew Whiskey Shots, $5 Trop Bombs, $3.50 College Beer of the Day",
    specials_url: "https://smalltabs.com/details.php?id=358",
    food_specials:
      "Free Burgers (with beverage purchase, limited quantities), Half Price Appetizers (5-7pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=358",
  },
  {
    name: "Southport Lanes",
    address: "Lakeview @ 3325 N Southport Ave",
    specials: "$3 Schiltz Drafts",
    specials_url: "https://smalltabs.com/details.php?id=281",
  },
  {
    name: "Pasta Bowl Lincoln Park",
    address: "Lincoln Park @ 2434 N Clark St",
    specials: "$5 Moscow Mules",
    specials_url: "https://smalltabs.com/details.php?id=637",
  },
  {
    name: "Lincoln Station",
    address: "Lincoln Park @ 2432 N Lincoln Ave",
    specials: "$4 Featured Drafts",
    specials_url: "https://smalltabs.com/details.php?id=248",
    food_specials: "$10.95 All-You-Can-Eat Fish Fry",
    food_specials_url: "https://smalltabs.com/details.php?id=248",
  },
  {
    name: "Raw Bar & Grill",
    address: "Wrigleyville @ 3720 N Clark St",
    specials:
      "$2.50 Domestic Beers (4-7pm), $3.50 Craft Drafts (4-7pm), $3 Well Mixers (4-7pm)",
    specials_url: "https://smalltabs.com/details.php?id=205",
    food_specials: "Half Price Appetizers",
    food_specials_url: "https://smalltabs.com/details.php?id=205",
  },
  {
    name: "Links Taproom",
    address: "Wicker Park @ 1559 N Milwaukee Ave",
    food_specials: "$11 Fish Fry w/ Potato Pancake & Fries",
    food_specials_url: "https://smalltabs.com/details.php?id=568",
  },
  {
    name: "Knife & Tine",
    address: "Lincoln Park @ 1417 W Fullerton Ave",
    specials:
      "Half Price Draft Beers (3-6pm), Half Price Craft Cocktails (3-6pm), Half Price Wine Glasses (3-6pm)",
    specials_url: "https://smalltabs.com/details.php?id=640",
    food_specials: "$5 Bar Snacks (3-6pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=640",
  },
  {
    name: "Clover",
    address: "Near West Side @ 722 W Grand Ave",
    specials:
      "$5 Tullamore Dew Whiskey, $8 Pabst Blue Ribbon Tallboy & Jameson Whiskey Shot Combo, Half Price Drinks (5-7pm)",
    specials_url: "https://smalltabs.com/details.php?id=625",
  },
  {
    name: "Reverie",
    address: "River North @ 414 N Orleans St",
    food_specials: "$10 Mix & Match Lunch",
    food_specials_url: "https://smalltabs.com/details.php?id=584",
  },
  {
    name: "Vines on Clark",
    address: "Wrigleyville @ 3554 N Clark St",
    specials: "$5 You-Call-Its",
    specials_url: "https://smalltabs.com/details.php?id=33",
  },
  {
    name: "George Street Pub",
    address: "Lakeview @ 2858 N Halsted St",
    specials: "$5 Seasonal Drafts",
    specials_url: "https://smalltabs.com/details.php?id=630",
  },
  {
    name: "Leona's Hyde Park",
    address: "Hyde Park @ 1236 E 53rd St",
    specials:
      "$5 Cocktails (6-9pm), $5 Frozen Margaritas (6-9pm), $5 Rocks Margaritas (6-9pm), $5 Long Island Iced Teas (6-9pm)",
    specials_url: "https://smalltabs.com/details.php?id=666",
    food_specials: "$3 off Wing Dings",
    food_specials_url: "https://smalltabs.com/details.php?id=666",
  },
  {
    name: "Ovie Bar & Grill",
    address: "West Loop @ 120 N Canal St",
    specials: "$6 Craft Beer Drafts (3-6pm), $7 Select Wine Glasses (3-6pm)",
    specials_url: "https://smalltabs.com/details.php?id=501",
  },
  {
    name: "Blue Frog Bar & Grill",
    address: "River North @ 676 N LaSalle Dr",
    specials: "$6 Specialty Cocktails",
    specials_url: "https://smalltabs.com/details.php?id=391",
    food_specials: "Half Price Appetizers (4-8pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=391",
  },
  {
    name: "Gideon Welles",
    address: "Lincoln Square @ 4500 N Lincoln Ave",
    specials: "$5 Select Craft Drafts",
    specials_url: "https://smalltabs.com/details.php?id=603",
  },
  {
    name: "Black Rock Pub & Kitchen",
    address: "Lakeview @ 3614 N Damen Ave",
    specials:
      "$1 off Off Color Brewery Drafts & Bottles, $4 Slow & Low Rye Shots",
    specials_url: "https://smalltabs.com/details.php?id=59",
    food_specials: "40¢ Wings",
    food_specials_url: "https://smalltabs.com/details.php?id=59",
  },
  {
    name: "The Beetle Bar & Grill",
    address: "Humboldt Park @ 2532 W Chicago Ave",
    specials: "$4 Curious Traveler",
    specials_url: "https://smalltabs.com/details.php?id=2",
    food_specials: "$8 Fish Fry",
    food_specials_url: "https://smalltabs.com/details.php?id=2",
  },
  {
    name: "Lokal Lincoln Park",
    address: "Lincoln Park @ 2500 N Ashland Ave",
    food_specials: "$10 Mussels & Truffle Fries",
    food_specials_url: "https://smalltabs.com/details.php?id=614",
  },
  {
    name: "Brando's Speakeasy",
    address: "Loop @ 343 S Dearborn St",
    specials:
      "$3 Bud Light, $3 Old Style, Pabst Blue Ribbon, & Miller High Life Tallboys",
    specials_url: "https://smalltabs.com/details.php?id=276",
  },
  {
    name: "Boiler Room",
    address: "Logan Square @ 2210 N California Ave",
    food_specials:
      "$10 PB&J Special: Pizza Slice, Pabst Blue Ribbon Tallboy, & Jameson Whiskey Shot Combo",
    food_specials_url: "https://smalltabs.com/details.php?id=333",
  },
  {
    name: "DS Tequila Company",
    address: "Lakeview @ 3352 N Halsted St",
    specials: "$12 40oz Fiesta Bowls",
    specials_url: "https://smalltabs.com/details.php?id=573",
  },
  {
    name: "Duke of Perth",
    address: "Lakeview @ 2913 N Clark St",
    food_specials: "$11.95 All-You-Can-Eat Fish & Chips",
    food_specials_url: "https://smalltabs.com/details.php?id=92",
  },
  {
    name: "Bootlegger's",
    address: "Near North Side @ 11 W Division St",
    specials:
      "$3 Southern Comfort, $3 Shellback Rum, $5 Wild Turkey Bourbon, $4 Miller Lite Drafts",
    specials_url: "https://smalltabs.com/details.php?id=66",
  },
  {
    name: "Harrigan's Pub",
    address: "Lakeview @ 2816 N Halsted St",
    specials: "$6 Makers Mark Manhattans, $2 Rolling Rock Cans (12-6pm)",
    specials_url: "https://smalltabs.com/details.php?id=648",
  },
  {
    name: "Big Star",
    address: "Wicker Park @ 1531 N Damen Ave",
    specials: "$3 Old Heaven Hill Whiskey Shots",
    specials_url: "https://smalltabs.com/details.php?id=341",
  },
  {
    name: "Porter Kitchen & Deck",
    address: "West Loop @ 150 N Riverside Ave",
    specials:
      "$7 Moscow Mules (3:30-5:30pm), $8 Classic Margaritas (3:30-5:30pm), $9 Old Fashioneds (3:30-5:30pm), $9 Select Wine Glasses (3:30-5:30pm)",
    specials_url: "https://smalltabs.com/details.php?id=682",
  },
  {
    name: "J & M Tap",
    address: "Ukrainian Village @ 957 N Leavitt St",
    specials:
      "$2 Pabst Blue Ribbon Drafts, $2.25 Point Drafts, $3 Domestic Bottles, $3 Pabst Blue Ribbon & Schiltz Tallboys, $4 Stella Artois Drafts, $4 Import & Craft Bottles, $4 Jameson Whiskey Shots, $4 Jim Beam Bourbon & Rye Shots, $5 Makers Mark Bourbon Drinks, $5 Stoli Vodka Drinks, $5 Crown Royal Whiskey Drinks",
    specials_url: "https://smalltabs.com/details.php?id=540",
  },
  {
    name: "Monk's Pub",
    address: "Loop @ 205 W Lake St",
    specials:
      "$4 Budweiser, Bud Light, Coors Light, Miller High Life, Miller Lite, Old Style, & Schiltz Bottles",
    specials_url: "https://smalltabs.com/details.php?id=144",
  },
  {
    name: "Taco Joint River North",
    address: "River North @ 158 W Ontario St",
    specials: "$5 Modelo Especial Can & Olmeca Tequila Blanco Shot Combo",
    specials_url: "https://smalltabs.com/details.php?id=542",
  },
  {
    name: "Kelsey's",
    address: "Lincoln Park @ 2265 N Lincoln Ave",
    specials: "$3.50 Curious Travelers, $3.50 Sam Adams, $5 Dublin Donkeys",
    specials_url: "https://smalltabs.com/details.php?id=154",
  },
  {
    name: "Innjoy (Wicker Park)",
    address: "Wicker Park @ 2051 W Division St",
    specials:
      "$4 Dos Equis Drafts, $8 Milagro Tequila Margaritas, $5 Fireball Whiskey Shots",
    specials_url: "https://smalltabs.com/details.php?id=163",
    food_specials: "Half Price Shrimp",
    food_specials_url: "https://smalltabs.com/details.php?id=163",
  },
  {
    name: "Jake Melnick's Corner Tap",
    address: "Near North Side @ 41 E Superior St",
    specials: "$5.50 Krombacher Pils",
    specials_url: "https://smalltabs.com/details.php?id=311",
  },
  {
    name: "Paddy Long's",
    address: "Lincoln Park @ 1028 W Diversey Ave",
    specials: "$4 Beer of the Month",
    specials_url: "https://smalltabs.com/details.php?id=119",
    food_specials: "$13.95 Fish Fry",
    food_specials_url: "https://smalltabs.com/details.php?id=119",
  },
  {
    name: "Kasey's Tavern",
    address: "Printers Row @ 701 S Dearborn St",
    specials:
      "$4 New Belgium Voodoo Ranger IPA Drafts, $4 Carlsburg Tallboys, $3 Hamm's Tallboys, $3 Coors Banquet Bottles",
    specials_url: "https://smalltabs.com/details.php?id=125",
  },
  {
    name: "Brickhouse Tavern",
    address: "Wrigleyville @ 3647 N Clark St",
    specials: "$5 You-Call-It's",
    specials_url: "https://smalltabs.com/details.php?id=681",
    food_specials: "Half Price Appetizers (after 3pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=681",
  },
  {
    name: "Joe's Bar",
    address: "Near North Side @ 940 W Weed St",
    specials:
      "$2 Fireball Whiskey Shots (8-10pm), $2 Budweiser & Coors Light Bottles (8-10pm), $3 Vodka Mixers (8-10pm)",
    specials_url: "https://smalltabs.com/details.php?id=14",
  },
  {
    name: "Cellars Bar & Grill",
    address: "Edgewater @ 5900 N Broadway St",
    specials: "$5 Sobieski Vodka Martinis (5-10pm)",
    specials_url: "https://smalltabs.com/details.php?id=620",
  },
  {
    name: "Legno Italian Gastropub",
    address: "Portage Park @ 4250 N Central Ave",
    specials:
      "$4 Select Vandermill Ciders, $2 Domestic Bottles (3-6pm), $3 Malort Shots (3-6pm), $5 Tito's Vodka Mixed Drinks (3-6pm), $6 White or Red Sangria Glasses (3-6pm)",
    specials_url: "https://smalltabs.com/details.php?id=590",
    food_specials:
      "Complimentary House Made Chips (3-6pm), $4 BBQ Pork Sliders (2) (3-6pm), $4 Jalapeno Poppers (2) (3-6pm), $5 Buffalo Wings (6) (3-6pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=590",
  },
  {
    name: "Wheel House",
    address: "Lakeview @ 3553 N Southport Ave",
    specials: "$5 UV Bombs, $4 Craft Can Beers",
    specials_url: "https://smalltabs.com/details.php?id=169",
    food_specials: "$7 Fish & Chips, $10 Crab Cake Melts",
    food_specials_url: "https://smalltabs.com/details.php?id=169",
  },
  {
    name: "Northwoods Lounge",
    address: "Norwood Park @ 5342 N Cumberland Ave",
    specials: "$3 Fireball Shots, $1 House Shots",
    specials_url: "https://smalltabs.com/details.php?id=551",
  },
  {
    name: "The Monkey's Paw",
    address: "Lincoln Park @ 2524 N Southport Ave",
    specials:
      "$3 Rebel Yell Whiskey (4:30-6:30pm), $3 off All Drafts (4:30-6:30pm), $3 off All Wine Glasses (4:30-6:30pm)",
    specials_url: "https://smalltabs.com/details.php?id=453",
  },
  {
    name: "John Barleycorn River North",
    address: "River North @ 149 W Kinzie St",
    specials: "$5 Budweiser, Bud Light, Coors Light, & Miller Lite Bottles",
    specials_url: "https://smalltabs.com/details.php?id=491",
  },
  {
    name: "Mrs. Murphy & Sons Irish Bistro",
    address: "North Center @ 3905 N Lincoln Ave",
    specials:
      "$5 Specialty Irish Cocktails (4:30-6:30pm), $5 Irish Beers (4:30-6:30pm)",
    specials_url: "https://smalltabs.com/details.php?id=651",
    food_specials: "$5 Appetizer Bites (4:30-6:30pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=651",
  },
  {
    name: "Durkin's Tavern",
    address: "Lincoln Park @ 810 W Diversey Ave",
    specials: "$4 Fireball Whiskey Shots, $3 Bud Light Drafts",
    specials_url: "https://smalltabs.com/details.php?id=22",
  },
  {
    name: "Edison Park Inn",
    address: "Edison Park @ 6715 N Olmsted Ave",
    specials: "$16 Domestic Bottles, $2 Shot of the Day",
    specials_url: "https://smalltabs.com/details.php?id=190",
  },
  {
    name: "Harbee Liquors & Tavern",
    address: "Pilsen @ 1345 W 18th St",
    specials: "$3 Budweiser & Miller Family Beers",
    specials_url: "https://smalltabs.com/details.php?id=548",
  },
  {
    name: "Renaldi's After Dark",
    address: "Lakeview @ 2831 N Broadway St",
    specials: "$4 Guinness Bottles",
    specials_url: "https://smalltabs.com/details.php?id=504",
  },
  {
    name: "McGee's Tavern",
    address: "Lincoln Park @ 950 W Webster Ave",
    specials: "$3 Bud Light Drafts",
    specials_url: "https://smalltabs.com/details.php?id=21",
  },
  {
    name: "Pasta Bowl Lincoln Square",
    address: "Lincoln Square @ 4343 N Lincoln Ave",
    specials: "$5 Moscow Mules",
    specials_url: "https://smalltabs.com/details.php?id=699",
  },
  {
    name: "Mahoney's Pub & Grille",
    address: "Near North Side @ 551 N Odgen Ave",
    specials: "$5 Jameson Whiskey",
    specials_url: "https://smalltabs.com/details.php?id=65",
  },
  {
    name: "G&L Fire Escape",
    address: "North Center @ 2157 W Grace St",
    specials: "$3 Powers Whiskey Shots, $4 Wells",
    specials_url: "https://smalltabs.com/details.php?id=533",
  },
  {
    name: "Casati's Pizza Vino",
    address: "Lincoln Park @ 444 W Fullerton Pkwy",
    food_specials: "$10 & Under Bar Menu",
    food_specials_url: "https://smalltabs.com/details.php?id=703",
  },
  {
    name: "The Cubby Bear",
    address: "Wrigleyville @ 1059 W Addison St",
    specials: "$5 Domestic Tallboys",
    specials_url: "https://smalltabs.com/details.php?id=150",
  },
  {
    name: "Kroll's South Loop",
    address: "South Loop @ 1736 S Michigan Ave",
    specials:
      "$5 Bushmills Whiskey Cocktails (4-6pm), $4 Absolut Vodka Cocktails (4-6pm), $3 Deschutes Cans (4-6pm), $5 Keke Key Lime Martinis (4-6pm), $6 House Margaritas (4-6pm)",
    specials_url: "https://smalltabs.com/details.php?id=146",
    food_specials: "Half Price Appetizers (5-7pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=146",
  },
  {
    name: "Standard Bar & Grill",
    address: "Wicker Park @ 1332 N Milwaukee Ave",
    specials: "$6 Ketel One Vodka Drinks",
    specials_url: "https://smalltabs.com/details.php?id=676",
    food_specials:
      "$20 After-Work Burger Deal (Cheeseburger with Fries, Domestic Bottles, & Well Drinks from 6-9pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=676",
  },
  {
    name: "Higgins' Tavern",
    address: "Lakeview @ 3259 N Racine Ave",
    specials: "$11 Miller Lite & Coors Light Pitchers",
    specials_url: "https://smalltabs.com/details.php?id=17",
  },
  {
    name: "The Pony Inn",
    address: "Lakeview @ 1638 W Belmont Ave",
    food_specials:
      "Half Price Appetizers from 4-8pm, Half Price Sandwiches from 4-8pm",
    food_specials_url: "https://smalltabs.com/details.php?id=275",
  },
  {
    name: "Avenue Tavern",
    address: "Lakeview @ 2916 N Broadway St",
    specials:
      "$10 Miller Lite Pitchers, $16 Margarita Pitchers, $16 Long Island Iced Tea Pitchers",
    specials_url: "https://smalltabs.com/details.php?id=170",
  },
  {
    name: "Big Chicks",
    address: "Uptown @ 5024 N Sheridan Rd",
    specials: "$2 off Pitchers (4-9pm)",
    specials_url: "https://smalltabs.com/details.php?id=261",
    food_specials: "$7 Third Pound Cheeseburgers with Fries",
    food_specials_url: "https://smalltabs.com/details.php?id=261",
  },
  {
    name: "Leadway Bar & Grill",
    address: "Lincoln Square @ 5223 N Damen Ave",
    specials:
      "$3 Point & Pabst Blue Ribbon Bottles, $3.50 Budweiser, Bud Light, Miller Genuine Draft, Miller Lite, Miller High Life, & Old Style Bottles",
    specials_url: "https://smalltabs.com/details.php?id=375",
  },
  {
    name: "Woodhaven Bar & Kitchen",
    address: "River North @ 712 N Clark St",
    specials: "$7 Pabst Blue Ribbon & Jameson Whiskey Boilermakers (5-8pm)",
    specials_url: "https://smalltabs.com/details.php?id=331",
  },
  {
    name: "G&O",
    address: "West Loop @ 459 N Ogden Ave",
    specials:
      "$3 House Whiskey or Bourbon Shot (with draft beer purchase), $3 Tito's Vodka (4-6pm), $3 Ford's Gin (4-6pm), $3 Drink of the Week (4-6pm)",
    specials_url: "https://smalltabs.com/details.php?id=641",
  },
  {
    name: "The Roost Carolina Kitchen",
    address: "North Center @ 1467 W Irving Park Rd",
    specials: "$5 Boilermakers (9-11pm), 25% off Signature Cocktails (9-11pm)",
    specials_url: "https://smalltabs.com/details.php?id=672",
  },
  {
    name: "Black Iron Tavern",
    address: "West Loop @ 401 N Milwaukee Ave",
    specials: "$5 Moscow Mules (3-6pm), $5 You-Call-It Well Drinks (3-6pm)",
    specials_url: "https://smalltabs.com/details.php?id=671",
    food_specials:
      "$18 Fish & Chips and Lagunitas Draft Combo, $2 Chipotle Carnitas, Chicken, or Fried Fish Tacos (3-6pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=671",
  },
  {
    name: "80 Proof",
    address: "Old Town @ 1500 N Wells St",
    specials:
      "$3 Tequila Shots (5-8pm), $4 All Beers (5-8pm), $5 All Call Drinks (5-8pm)",
    specials_url: "https://smalltabs.com/details.php?id=660",
  },
  {
    name: "Takito Kitchen",
    address: "Wicker Park @ 2013 W Division St",
    food_specials:
      "Brunch Served from 11am-3pm, $12 Tacos, Soup & Salad Lunch Special (from 11am-3pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=579",
  },
  {
    name: "The Bedford",
    address: "Wicker Park @ 1612 W Division St",
    specials: "$8 Draft Cocktails",
    specials_url: "https://smalltabs.com/details.php?id=416",
  },
  {
    name: "Tuman's Tap & Grill",
    address: "Ukrainian Village @ 2159 W Chicago Ave",
    specials: "$3.50 Pabst Blue Ribbon Drafts",
    specials_url: "https://smalltabs.com/details.php?id=662",
  },
  {
    name: "Devon Seafood Grill",
    address: "Near North Side @ 39 E Chicago Ave",
    food_specials:
      "$1 Oysters (4-7pm), $7.50 Appetizers (4-7pm, 9pm-Close), $2.50 Jumbo Shrimp Cocktail (4-7pm, 9pm-Close)",
    food_specials_url: "https://smalltabs.com/details.php?id=689",
  },
  {
    name: "Nola Gastropub",
    address: "Lakeview @ 3481 N Clark St",
    specials:
      "$3.50 Founders All Day IPA, $3.50 Founders Rubaeus, $4 Beer of the Month",
    specials_url: "https://smalltabs.com/details.php?id=642",
  },
  {
    name: "Fremont",
    address: "River North @ 15 W Illinois St",
    specials:
      "$3 Beers (5-9pm), $4 Mixed Drinks (5-9pm), $5 Mule Bar (5-9pm), $5 Wine Glasses (5-9pm), $6 Tito's Vodka Cocktails (5-9pm)",
    specials_url: "https://smalltabs.com/details.php?id=658",
  },
  {
    name: "Weather Mark Tavern",
    address: "South Loop @ 1503 S Michigan Ave",
    specials: "$2 off All Drafts (3-6pm), $5 Lagunitas Beers",
    specials_url: "https://smalltabs.com/details.php?id=143",
    food_specials: "$12.50 All-You-Can-Eat Fish Fry",
    food_specials_url: "https://smalltabs.com/details.php?id=143",
  },
  {
    name: "SideDoor",
    address: "Streeterville @ 100 E Ontario St",
    food_specials:
      "Half Price Avocado Mash, Stuffed Mushrooms, Chips & Dip, IPA Beer Pretzels, & Deviled Eggs from 3-5pm",
    food_specials_url: "https://smalltabs.com/details.php?id=574",
  },
  {
    name: "High Noon Saloon",
    address: "Wicker Park @ 1560 N Milwaukee Ave",
    specials: "$5 Frozen Margaritas, $5 Old Forester Bourbon Shots",
    specials_url: "https://smalltabs.com/details.php?id=601",
  },
  {
    name: "Bar Louie University Village",
    address: "University Village @ 1325 S Halsted St",
    specials:
      "$3.25 Drafts (4-7pm), $4.25 Wine Glasses (4-7pm), $5.25 Signature Martinis (4-7pm)",
    specials_url: "https://smalltabs.com/details.php?id=654",
    food_specials:
      "Half Price Select Appetizers (4-7pm), Half Price Flatbreads (4-7pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=654",
  },
  {
    name: "Hangge-Uppe",
    address: "Near North Side @ 16 W Division St",
    specials: "$5 Bacardi Flavored Rum",
    specials_url: "https://smalltabs.com/details.php?id=84",
  },
  {
    name: "Troquet River North",
    address: "River North @ 111 W Huron St",
    specials:
      "$4 Select Beers (4-7pm), $5 House Mixed Drinks (4-7pm), $6 House Red & White Wine Glasses (4-7pm)",
    specials_url: "https://smalltabs.com/details.php?id=649",
    food_specials:
      "Mimosa Brunch (10am-3pm), $4 Truffle Frites (4-7pm), $5 Salmon Rilette (4-7pm), $6 Croque Monsieur & Croque Végétarien (4-7pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=649",
  },
  {
    name: "Matisse Tavern & Grill",
    address: "Lincoln Park @ 674 W Diversey Pkwy",
    specials: "$5 Martinis",
    specials_url: "https://smalltabs.com/details.php?id=222",
  },
  {
    name: "Cork Lounge",
    address: "Lakeview @ 1822 W Addison St",
    specials:
      "$2 Pabst Blue Ribbon Drafts, $4 Mimosas, $4 Apple Pie Shots, $5 Genessee Cream Ale & Jim Beam Shot Combo",
    specials_url: "https://smalltabs.com/details.php?id=326",
  },
  {
    name: "Jerk Modern Jamaican Grill",
    address: "Noble Square @ 811 W Chicago Ave",
    specials: "$3 Mystery Beer (4-7pm), $7 Select Cocktails (4-7pm)",
    specials_url: "https://smalltabs.com/details.php?id=634",
  },
  {
    name: "Galvin's Public House",
    address: "Portage Park @ 5901 W Lawrence Ave",
    specials: "$4 Blue Moon Drafts",
    specials_url: "https://smalltabs.com/details.php?id=604",
    food_specials: "$11 All-You-Can-Eat Fish & Chips",
    food_specials_url: "https://smalltabs.com/details.php?id=604",
  },
  {
    name: "AliveOne",
    address: "Lincoln Park @ 2683 N Halsted St",
    specials: "$5 Jameson Shots, $3 Pabst Blue Ribbon Bottles",
    specials_url: "https://smalltabs.com/details.php?id=214",
  },
  {
    name: "Mother's Too",
    address: "Near North Side @ 14 W Division St",
    specials: "$5 Sailor Jerry Rum, $5.50 Jim Beam Bourbon",
    specials_url: "https://smalltabs.com/details.php?id=67",
  },
  {
    name: "Benchmark",
    address: "Old Town @ 1510 N Wells St",
    specials:
      "$4 Truly & White Claw Cans (5-8pm), $5 Jack Daniels Whiskey Shots, $5 El Jimador Tequila Shots",
    specials_url: "https://smalltabs.com/details.php?id=508",
    food_specials: "Free Burgers (limited quantities, with drink purchase)",
    food_specials_url: "https://smalltabs.com/details.php?id=508",
  },
  {
    name: "Spyners Pub",
    address: "Lincoln Square @ 4623 N Western Ave",
    specials:
      "$3.50 Stella Artois, $3.50 Jose Cuervo Gold Tequila Shots, $3.50 Dooley's Shots",
    specials_url: "https://smalltabs.com/details.php?id=97",
  },
  {
    name: "Hash House a Go Go",
    address: "Near North Side @ 1212 N State St",
    food_specials: "$14.95 Fried or Roasted Chicken Dinner",
    food_specials_url: "https://smalltabs.com/details.php?id=600",
  },
  {
    name: "Pitchfork Food & Saloon",
    address: "Irving Park @ 2922 W Irving Park Road",
    specials: "$4 Goose Island Green Line, $6 Moscow Mules",
    specials_url: "https://smalltabs.com/details.php?id=234",
  },
  {
    name: "WestEnd",
    address: "West Loop @ 1326 W Madison St",
    specials:
      "Half Price Drafts (excluding Guinness) (5-7pm), Half Price Wine Glasses (5-7pm), Half Price Well Drinks (5-7pm)",
    specials_url: "https://smalltabs.com/details.php?id=11",
    food_specials: "Half Price Appetizers (excluding Nachos) (5-7pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=11",
  },
  {
    name: "The Other Side Bar",
    address: "Lincoln Park @ 2436 N Clark St",
    specials: "$5 Moscow Mules",
    specials_url: "https://smalltabs.com/details.php?id=192",
  },
  {
    name: "Tai's Til 4",
    address: "Lakeview @ 3611 N Ashland Ave",
    specials: "$7 Flagship Bombs",
    specials_url: "https://smalltabs.com/details.php?id=549",
  },
  {
    name: "Halligan Bar",
    address: "Lincoln Park @ 2274 N Lincoln Ave",
    specials:
      "$3 Budweiser & Bud Light Bottles, $3.50 Vegas Bombs, $3.50 Captain Morgan Rum & Coke, $4 Stoli Vodka Drinks, $5 Bombs, $2 Bud Light Drafts, $3 Jameson Whiskey Shots, $3.50 Goose Island 312 Drafts, $3.50 Guinness, $4 Stoli Vodka Drinks",
    specials_url: "https://smalltabs.com/details.php?id=130",
  },
  {
    name: "Roscoe's Tavern",
    address: "Lakeview @ 3356 N Halsted St",
    specials:
      "$5 Jack Daniels Honey Shots, $5 Skyy Vodka Bombs, $15 Absolut Blue Hawaiian Pitchers, $15 Absolut Pink Lemonade Pitchers",
    specials_url: "https://smalltabs.com/details.php?id=173",
  },
  {
    name: "Delilah's",
    address: "Lincoln Park @ 2771 N Lincoln Ave",
    specials: "$3 Labatt Blue, $3 Maker's Mark Bourbon",
    specials_url: "https://smalltabs.com/details.php?id=26",
  },
  {
    name: "Mad River Bar & Grille",
    address: "Lakeview @ 2909 N Sheffield Ave",
    food_specials: "Half Price Appetizers (5-8pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=317",
  },
  {
    name: "Headquarters Beercade River North",
    address: "River North @ 213 W Institute St",
  },
  {
    name: "Bar Takito",
    address: "West Loop @ 201 N Morgan St",
  },
  {
    name: "Allium",
    address: "Near North Side @ 120 E Delaware St",
    specials: "Half Price Select Spirits, Wines, & Draft Beers (4-6pm)",
    specials_url: "https://smalltabs.com/details.php?id=687",
    food_specials: "Half Price Bar Bites (4-6pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=687",
  },
  {
    name: "Dimo's Pizza",
    address: "Wicker Park @ 1615 N Damen Ave",
    food_specials:
      "$9 Pizza Slice, Bourbon Shot, & Pabst Blue Ribbon or Miller High Life Tallboy Combo",
    food_specials_url: "https://smalltabs.com/details.php?id=679",
  },
  {
    name: "Fireside Restaurant & Lounge",
    address: "Edgewater @ 5739 N Ravenswood Ave",
    specials: "$2.25 Pabst Blue Ribbon Tallboys",
    specials_url: "https://smalltabs.com/details.php?id=441",
    food_specials: "Complimentary Happy Hour Buffet (4-6pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=441",
  },
  {
    name: "Belford Tavern",
    address: "Irving Park @ 3200 N Pulaski Rd",
    specials:
      "$5 Grey Goose Vodka Drinks & Shots, $3 Jameson Whiskey Shots, $3 Rotating Revolution 16oz Drafts, $3.50 Malort Shots, $3.50 Jameson Whiskey Shots, $2.25 Domestic 18oz Drafts",
    specials_url: "https://smalltabs.com/details.php?id=581",
  },
  {
    name: "Village Tap Bar & Grill",
    address: "Roscoe Village @ 2055 W Roscoe St",
    specials:
      "$2.50 Pabst Blue Ribbon Cans, $4 Budweiser, Bud Light, Miller Lite, & Miller High Life Bottles",
    specials_url: "https://smalltabs.com/details.php?id=269",
  },
  {
    name: "Davenport's Piano Bar",
    address: "Wicker Park @ 1383 N Milwaukee Ave",
  },
  {
    name: "Alice's Lounge",
    address: "Avondale @ 3556 W Belmont Ave",
  },
  {
    name: "Grandview Tavern",
    address: "West Loop @ 1202 W Grand Ave",
    specials:
      "$3 Hamms Cans, $5 Jameson Whiskey Shots, $5 Fireball Whiskey Shots",
    specials_url: "https://smalltabs.com/details.php?id=476",
    food_specials: "$9 Fish Tacos",
    food_specials_url: "https://smalltabs.com/details.php?id=476",
  },
  {
    name: "Trader Todd's",
    address: "Lakeview @ 3216 N Sheffield Ave",
    specials: "$1 Rolling Rock Drafts (4:30-6:30pm)",
    specials_url: "https://smalltabs.com/details.php?id=455",
    food_specials: "$2 Select Appetizers (4:30-6:30pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=455",
  },
  {
    name: "The Rambler Kitchen & Tap",
    address: "North Center @ 4128 N Lincoln Ave",
    specials:
      "$4 Hard Seltzers, $4 Select Drafts, $5 Skrewball Whiskey, $5 Corazon Tequila, $3 Domestic Beers (4-7pm), $3 Select Whiskeys (4-7pm), $5 House Wine Glasses (4-7pm)",
    specials_url: "https://smalltabs.com/details.php?id=589",
    food_specials: "$7 Ground Beef or Chicken Nacho Platters",
    food_specials_url: "https://smalltabs.com/details.php?id=589",
  },
  {
    name: "Deleece Restaurant",
    address: "Lakeview @ 3747 N Southport Ave",
    food_specials: "Brunch served from 9am-2:30pm",
    food_specials_url: "https://smalltabs.com/details.php?id=295",
  },
  {
    name: "Redmond's Ale House",
    address: "Wrigleyville @ 3358 N Sheffield Ave",
    specials:
      "$3 Tallboys, $4 Fireball Whiskey Shots, $6 Jameson Whiskey Shots",
    specials_url: "https://smalltabs.com/details.php?id=20",
  },
  {
    name: "Irish Eyes",
    address: "Lincoln Park @ 2519 N Lincoln Ave",
    specials: "$3.50 Pabst Blue Ribbon Tallboys",
    specials_url: "https://smalltabs.com/details.php?id=339",
  },
  {
    name: "Leona's Stony Island",
    address: "Calumet Heights @ 9157 S Stony Island Ave",
    specials:
      "$5 Cocktails (6-9pm), $5 Frozen Margaritas (6-9pm), $5 Rocks Margaritas (6-9pm), $5 Long Island Iced Teas (6-9pm)",
    specials_url: "https://smalltabs.com/details.php?id=669",
    food_specials: "$3 off Wing Dings",
    food_specials_url: "https://smalltabs.com/details.php?id=669",
  },
  {
    name: "State Restaurant",
    address: "Lincoln Park @ 935 W Webster Ave",
    food_specials:
      "$6.99 Food Menu (with drink purchase, some exclusions apply)",
    food_specials_url: "https://smalltabs.com/details.php?id=229",
  },
  {
    name: "Flagship Tavern & Grill",
    address: "Lakeview @ 1622 W Belmont Ave",
    specials: "$15 Domestic Buckets",
    specials_url: "https://smalltabs.com/details.php?id=552",
  },
  {
    name: "The Fireplace Inn",
    address: "Old Town @ 1448 N Wells St",
    specials: "$5 Skyy Vodka Bombs",
    specials_url: "https://smalltabs.com/details.php?id=442",
  },
  {
    name: "Kit Kat Lounge",
    address: "Lakeview @ 3700 N Halsted St",
    food_specials: "$30 Prix-Fixe Menu (Salad, Entree, & Martini)",
    food_specials_url: "https://smalltabs.com/details.php?id=196",
  },
  {
    name: "Deuces & The Diamond Club",
    address: "Wrigleyville @ 3505 N Clark St",
    specials: "$12+ Seasonal Beer Flights",
    specials_url: "https://smalltabs.com/details.php?id=408",
  },
  {
    name: "Scarlet Bar",
    address: "Lakeview @ 3320 N Halsted St",
    specials: "$6 Ketel One Vodka Cocktails",
    specials_url: "https://smalltabs.com/details.php?id=262",
  },
  {
    name: "Subterranean Lounge",
    address: "Wicker Park @ 2011 W North Ave",
    specials: "$5 UV Vodka Cocktails",
    specials_url: "https://smalltabs.com/details.php?id=56",
  },
  {
    name: "Stretch Bar & Grill",
    address: "Wrigleyville @ 3485 N Clark St",
    specials:
      "$30 Domestic Tallboys, Domestic Drafts, Call Cocktails, Wine, & Select Appetizers Happy Hour Package (7-10pm), $25 Domestic Drafts, Well Cocktails, Wine, & Select Appetizer Happy Hour Package (7-10pm)",
    specials_url: "https://smalltabs.com/details.php?id=81",
  },
  {
    name: "The Abbey Pub",
    address: "Irving Park @ 3420 W Grace St",
    specials: "$4 Smithwicks, $4 Harp, $5 Jameson Black, $5 2 Gingers Whiskey",
    specials_url: "https://smalltabs.com/details.php?id=31",
    food_specials: "$9.95 Fish & Chips, Half Price Appetizers until 6pm",
    food_specials_url: "https://smalltabs.com/details.php?id=31",
  },
  {
    name: "Cortland's Garage",
    address: "Bucktown @ 1645 W Cortland St",
    food_specials: "Buy One, Get One Free Appetizers from 2pm-6pm",
    food_specials_url: "https://smalltabs.com/details.php?id=60",
  },
  {
    name: "Rockit Burger Bar",
    address: "Wrigleyville @ 3700 N Clark St",
    specials: "$3 Select Beers, $5 Evan Williams Whiskey Shots",
    specials_url: "https://smalltabs.com/details.php?id=233",
  },
  {
    name: "The Full Shilling",
    address: "Wrigleyville @ 3724 N Clark St",
    specials:
      "$5 Fireball Whiskey, $20 Table Tappers, Half Price Drinks (6-9pm)",
    specials_url: "https://smalltabs.com/details.php?id=623",
    food_specials: "$7.95 Fish & Chips, $1 Hot Dogs",
    food_specials_url: "https://smalltabs.com/details.php?id=623",
  },
  {
    name: "Compass Bar",
    address: "Lincoln Park @ 433 W Diversey Pkwy",
    food_specials: "Half Price Pizza from 4-6pm",
    food_specials_url: "https://smalltabs.com/details.php?id=586",
  },
  {
    name: "Blackfinn Ameripub",
    address: "River North @ 65 W Kinzie St",
    specials: "$5 Bacardi Cocktails",
    specials_url: "https://smalltabs.com/details.php?id=543",
  },
  {
    name: "Declan's Irish Pub",
    address: "Near North Side @ 1240 N Wells St",
    specials: "$4 Select Craft Draft, $5 Jack Daniels Fire",
    specials_url: "https://smalltabs.com/details.php?id=365",
    food_specials: "$10 Fish & Chips",
    food_specials_url: "https://smalltabs.com/details.php?id=365",
  },
  {
    name: "Streeter's Tavern",
    address: "Near North Side @ 50 E Chicago Ave",
    specials: "$5 Jim Beam Bourbon",
    specials_url: "https://smalltabs.com/details.php?id=72",
  },
  {
    name: "Hubbard Inn",
    address: "River North @ 110 W Hubbard St",
    food_specials:
      "$2 Raw Bar (selections include Shrimp, Lobster, Scallops, King Crab, & Oysters)",
    food_specials_url: "https://smalltabs.com/details.php?id=554",
  },
  {
    name: "Simone's Bar",
    address: "Pilsen @ 960 W 18th St",
    food_specials: "$8 Half Pound Burger & Pabst Blue Ribbon Tallboy Combo",
    food_specials_url: "https://smalltabs.com/details.php?id=107",
  },
  {
    name: "Leona's Old Irving",
    address: "Irving Park @ 3877 N Elston Ave",
    specials:
      "$5 Cocktails (6-9pm), $5 Frozen Margaritas (6-9pm), $5 Rocks Margaritas (6-9pm), $5 Long Island Iced Teas (6-9pm)",
    specials_url: "https://smalltabs.com/details.php?id=667",
    food_specials: "$3 off Wing Dings",
    food_specials_url: "https://smalltabs.com/details.php?id=667",
  },
  {
    name: "Butcher's Tap",
    address: "Lakeview @ 3553 N Southport Ave",
    specials:
      "$5 Tullamore Dew Whiskey, Half Price Tito's Vodka Cocktails (4-6pm)",
    specials_url: "https://smalltabs.com/details.php?id=624",
  },
  {
    name: "Cleo's",
    address: "Ukrainian Village @ 1935 W Chicago Ave",
    specials: "$2 off Bulleit Whiskey, $4 Well Drinks",
    specials_url: "https://smalltabs.com/details.php?id=49",
    food_specials: "$6 Fish & Chips",
    food_specials_url: "https://smalltabs.com/details.php?id=49",
  },
  {
    name: "Devour 312",
    address: "Lincoln Park @ 1450 W Webster Ave",
    specials:
      "$5 Drafts (3-6pm), $5 Captain Morgan Rum, Tito's Vodka, Milagro Tequila, Fireball, Jameson, & Jack Daniels Whiskey Shots (3-6pm)",
    specials_url: "https://smalltabs.com/details.php?id=690",
  },
  {
    name: "Vintage Lounge",
    address: "University Village @ 1449 W Taylor St",
    specials: "$5 Martinis",
    specials_url: "https://smalltabs.com/details.php?id=650",
    food_specials: "Half Price Select Appetizers",
    food_specials_url: "https://smalltabs.com/details.php?id=650",
  },
  {
    name: "Prohibition Pub & Grill",
    address: "Lincoln Park @ 2138 N Halsted Ave",
    specials: "$4 Well Drinks",
    specials_url: "https://smalltabs.com/details.php?id=564",
    food_specials: "$5 Fried Chicken Sandwich",
    food_specials_url: "https://smalltabs.com/details.php?id=564",
  },
  {
    name: "Park Tavern",
    address: "West Loop @ 1645 W Jackson Blvd",
    specials:
      "$5 Jameson Whiskey, $5 Select Wine Glasses, $3 Tallboy Cans (3-5pm), $4 Well Drinks (3-5pm), $4 House Wine Glasses (3-5pm), Half Price 16oz Drafts (3-5pm)",
    specials_url: "https://smalltabs.com/details.php?id=494",
    food_specials: "$15 All-You-Can-Eat Fish Fry (4pm-Close)",
    food_specials_url: "https://smalltabs.com/details.php?id=494",
  },
  {
    name: "Cary's Lounge",
    address: "West Rogers Park @ 2251 W Devon Ave",
    specials:
      "$2.50 Pabst Blue Ribbon & Schiltz Cans, $3 Old Style Drafts, $3 Budweiser, Bud Light, Coors Light, Miller Lite, & Miller High Life",
    specials_url: "https://smalltabs.com/details.php?id=287",
  },
  {
    name: "Bridge House Tavern",
    address: "River North @ 321 N Clark St",
    specials: "$20 Tiger Tallboy Buckets",
    specials_url: "https://smalltabs.com/details.php?id=484",
  },
  {
    name: "ZED451",
    address: "River North @ 739 N Clark St",
    specials: "$4.51 Grey Goose Vodka Cocktails (4:30-7pm)",
    specials_url: "https://smalltabs.com/details.php?id=639",
  },
  {
    name: "Yak-Zies Wrigleyville",
    address: "Wrigleyville @ 3710 N Clark St",
    specials: "$5 Fat Tire, $5 Fireball Whiskey",
    specials_url: "https://smalltabs.com/details.php?id=149",
    food_specials: "$5 Fish Sandwiches",
    food_specials_url: "https://smalltabs.com/details.php?id=149",
  },
  {
    name: "Innjoy (Logan Square)",
    address: "Logan Square @ 2200 N Milwaukee Ave",
    specials:
      "$7 Martinis, $5 Pabst Blue Ribbon Tallboy & Hipster Whiskey Shot Combo",
    specials_url: "https://smalltabs.com/details.php?id=688",
    food_specials: "$7 Bruschette",
    food_specials_url: "https://smalltabs.com/details.php?id=688",
  },
  {
    name: "Paddy O'Fegan's",
    address: "West Loop @ 204 N Halsted St",
    specials:
      "$1 off Tequila, $15 Leinenkugel's Grapefruit Shandy Buckets, $3 Miller Lite Drafts (4-7pm), $5 Rolling Rock Tallboys (4-7pm), $5 Paddy's Whiskey (4-7pm)",
    specials_url: "https://smalltabs.com/details.php?id=485",
    food_specials:
      "$10 Chicken Torta with Posole Soup, $5 Loaded Nachos (4-7pm), $3 Jalapeno & Cheddar Hot Dogs (4-7pm), $3 Wrigley Field Smokies (4-7pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=485",
  },
  {
    name: "Estelle's Cafe & Lounge",
    address: "Wicker Park @ 2013 W North Ave",
    specials:
      "$4 Three Floyd's Drafts (5-8pm), $3 Rebel Yell Whiskey Shots (5-8pm)",
    specials_url: "https://smalltabs.com/details.php?id=216",
  },
  {
    name: "Kirkwood Bar & Grill",
    address: "Lakeview @ 2934 N Sheffield Ave",
    specials: "$4 All Ciders, $5 Jello Shots",
    specials_url: "https://smalltabs.com/details.php?id=13",
  },
  {
    name: "Holiday Club",
    address: "Uptown @ 4000 N Sheridan Rd",
    specials:
      "$5 Svedka Vodka Drinks, $5 Grape, Cherry, & Blueberry Bombs, $4.50 Pabst Blue Ribbon 24oz Tallboys",
    specials_url: "https://smalltabs.com/details.php?id=179",
    food_specials: "$5 Chicken Sandwich",
    food_specials_url: "https://smalltabs.com/details.php?id=179",
  },
  {
    name: "Kincade's Bar & Grill",
    address: "Lincoln Park @ 950 W Armitage Ave",
    specials:
      "$4 Draft of the Day, $6 Makers Mark Bourbon Cocktails, $7 Pabst Blue Ribbon & Jameson Whiskey Shot Combo",
    specials_url: "https://smalltabs.com/details.php?id=153",
  },
  {
    name: "Christina's Place",
    address: "Irving Park @ 3759 N Kedzie Ave",
    specials:
      "$2 Pabst Blue Ribbon Cans, $3 Guinness Drafts, $5 Jameson Whiskey Shots, $5 Malort Shots, $5 Fireball Whiskey Shots",
    specials_url: "https://smalltabs.com/details.php?id=235",
  },
  {
    name: "Gino's North",
    address: "Edgewater @ 1111 W Granville Ave",
    specials: "$3 Sangria Glasses",
    specials_url: "https://smalltabs.com/details.php?id=238",
  },
  {
    name: "The Boss Bar",
    address: "River North @ 420 N Clark St",
    food_specials:
      "$10 Burger & Miller Lite Draft Combo, $24 Cheese Pizza & Miller Lite Pitcher Combo",
    food_specials_url: "https://smalltabs.com/details.php?id=560",
  },
  {
    name: "Fifolet",
    address: "Wicker Park @ 1942 W Division St",
    specials:
      "$4 Lagunitas Sumpin' Easy Drafts (5-9pm), $3 Jameson Whiskey Shots (5-9pm)",
    specials_url: "https://smalltabs.com/details.php?id=695",
    food_specials: "$9 Half Po'Boy & Soup Special (5-9pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=695",
  },
  {
    name: "Wabash Tap",
    address: "South Loop @ 1233 S Wabash Ave",
    specials: "$4 Drafts (4-6pm), $14 Buckets (4-6pm)",
    specials_url: "https://smalltabs.com/details.php?id=142",
  },
  {
    name: "City Pool Hall",
    address: "West Loop @ 640 W Hubbard St",
    specials: "$4 Modelo & Corona",
    specials_url: "https://smalltabs.com/details.php?id=561",
  },
  {
    name: "Franklin Tap",
    address: "Loop @ 325 S Franklin St",
    specials:
      "$5 Two Brothers Pale Frank Drafts, $5 Yukon Jack Wicked Hot Shots",
    specials_url: "https://smalltabs.com/details.php?id=135",
    food_specials: "$5 Select Appetizers (after 5pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=135",
  },
  {
    name: "El Tequilas Bar & Grill",
    address: "Lincoln Park @ 2826 N Lincoln Ave",
    specials: "$3 Budweiser (4-6pm), $3 Tecate (4-6pm), $5 Margaritas (4-6pm)",
    specials_url: "https://smalltabs.com/details.php?id=678",
  },
  {
    name: "Lottie's Pub",
    address: "Bucktown @ 1925 W Cortland St",
    specials: "$4 Corona & Corona Light",
    specials_url: "https://smalltabs.com/details.php?id=79",
    food_specials: "50¢ Jumbo Wings",
    food_specials_url: "https://smalltabs.com/details.php?id=79",
  },
  {
    name: "Reed's Local",
    address: "Avondale @ 3017 W Belmont Ave",
    specials: "$4 Old Crow Whiskey & Hamm's Can Combo, $2 Hamm's Cans",
    specials_url: "https://smalltabs.com/details.php?id=585",
  },
  {
    name: "Crown Liquors",
    address: "Logan Square @ 2821 N Milwaukee Ave",
    specials: "$5 Craft Beers, $7 Cocktails",
    specials_url: "https://smalltabs.com/details.php?id=591",
  },
  {
    name: "The Green Lady",
    address: "Lakeview @ 3328 N Lincoln Ave",
    specials: "$3 Pabst Blue Ribbon Cans",
    specials_url: "https://smalltabs.com/details.php?id=213",
  },
  {
    name: "Riverview Tavern",
    address: "Roscoe Village @ 1958 W Roscoe St",
    specials:
      "$1 off Ciders, $1 off Wine Glasses, $5 Brewery-of-the-Month Drafts",
    specials_url: "https://smalltabs.com/details.php?id=220",
  },
  {
    name: "Lizzie McNeill's Irish Pub",
    address: "Streeterville @ 400 N McClurg St",
    specials:
      "$5 Sam Adams Oktoberfest, $6 Seagrams 7 Whiskey Drinks, $5 Crown Apple Shots",
    specials_url: "https://smalltabs.com/details.php?id=477",
  },
  {
    name: "Pizzeria Serio",
    address: "Lakeview @ 1708 N Belmont Ave",
    specials: "$2 Pabst Blue Ribbon Tallboys, $8 Beer Flights",
    specials_url: "https://smalltabs.com/details.php?id=385",
  },
  {
    name: "Mojo Bar & Grill",
    address: "Irving Park @ 2958 W Irving Park Rd",
    specials: "$5 Well Vodka Drinks",
    specials_url: "https://smalltabs.com/details.php?id=643",
    food_specials: "$5 Fish & Chips",
    food_specials_url: "https://smalltabs.com/details.php?id=643",
  },
  {
    name: "Mac's Wood Grilled",
    address: "Wicker Park @ 1801 W Division St",
    specials: "$4 Paddy Irish Whiskey Shots, $5 Moscow Mules",
    specials_url: "https://smalltabs.com/details.php?id=631",
  },
  {
    name: "Tripoli Tap",
    address: "Lincoln Park @ 1147 W Armitage Ave",
    specials: "$3 Coors Light Bottles",
    specials_url: "https://smalltabs.com/details.php?id=450",
  },
];

const wednesday = [
  {
    name: "Belford Tavern",
    address: "Irving Park @ 3200 N Pulaski Rd",
    specials:
      "$5 Grey Goose Vodka Drinks & Shots, $3 Jameson Whiskey Shots, $3 Rotating Revolution 16oz Drafts, $3.50 Malort Shots, $3.50 Jameson Whiskey Shots, $2.25 Domestic 18oz Drafts",
    specials_url: "https://smalltabs.com/details.php?id=581",
  },
  {
    name: "Fatpour Tap Works",
    address: "Wicker Park @ 2005 W Division St",
    specials: "$5 Pabst Blue Ribbon & Select Shot Combo",
    specials_url: "https://smalltabs.com/details.php?id=459",
  },
  {
    name: "Mojo Bar & Grill",
    address: "Irving Park @ 2958 W Irving Park Rd",
    specials: "$5 Well Vodka Drinks",
    specials_url: "https://smalltabs.com/details.php?id=643",
    food_specials: "$5 Fish & Chips",
    food_specials_url: "https://smalltabs.com/details.php?id=643",
  },
  {
    name: "Taqueria & Bar",
    address: "Lincoln Park @ 1450 W Webster Ave",
    specials: "$4 Shots, $2 Grab Bag Beers",
    specials_url: "https://smalltabs.com/details.php?id=565",
  },
  {
    name: "The Cubby Bear",
    address: "Wrigleyville @ 1059 W Addison St",
    specials: "$5 Domestic Tallboys",
    specials_url: "https://smalltabs.com/details.php?id=150",
  },
  {
    name: "Mason House",
    address: "River North @ 613 N Wells St",
    specials:
      "$5 Beer Cans (5-7pm), $5 Red & White Wine Glasses (5-7pm), $8 Craft Cocktails (5-7pm)",
    specials_url: "https://smalltabs.com/details.php?id=713",
    food_specials: "$1.50 Oysters (5-7pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=713",
  },
  {
    name: "Timothy O'Toole's",
    address: "Near North Side @ 622 N Fairbanks St",
    specials:
      "$12 Miller Lite, Coors Light, & Bud Light Pitchers, $6 Jameson Whiskey Cocktails, $6 Jameson Whiskey Shots",
    specials_url: "https://smalltabs.com/details.php?id=195",
  },
  {
    name: "Tavern 57",
    address: "Lincoln Park @ 1059 W Wrightwood Ave",
    specials:
      "$2 off Wine Glasses (4-8pm), $2 off Ciders (4-8pm), $3 off Well Drinks (4-8pm), $3 Michelob Ultra Bottles (4-8pm), $3 Blue Moon Bottles (4-8pm), $4 Chicago Craft Drafts (4-8pm)",
    specials_url: "https://smalltabs.com/details.php?id=24",
  },
  {
    name: "Murphy's Bleachers",
    address: "Wrigleyville @ 3653 N Sheffield Ave",
    specials:
      "$4 Southern Comfort Drinks, $14 Lagunitas IPA & Pilsner Pitchers",
    specials_url: "https://smalltabs.com/details.php?id=32",
    food_specials: "$6 Fish & Chips",
    food_specials_url: "https://smalltabs.com/details.php?id=32",
  },
  {
    name: "Big Chicks",
    address: "Uptown @ 5024 N Sheridan Rd",
    specials: "$2 off Pitchers (4-9pm)",
    specials_url: "https://smalltabs.com/details.php?id=261",
    food_specials: "$7 Third Pound Cheeseburgers with Fries",
    food_specials_url: "https://smalltabs.com/details.php?id=261",
  },
  {
    name: "Cactus Bar & Grill",
    address: "Loop @ 404 S Wells St",
    specials: "$25 Lagunitas Buckets, $6 Patron Silver Tequila Shots",
    specials_url: "https://smalltabs.com/details.php?id=133",
  },
  {
    name: "Fireside Restaurant & Lounge",
    address: "Edgewater @ 5739 N Ravenswood Ave",
    specials: "$2.25 Pabst Blue Ribbon Tallboys",
    specials_url: "https://smalltabs.com/details.php?id=441",
    food_specials: "Complimentary Happy Hour Buffet (4-6pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=441",
  },
  {
    name: "Delilah's",
    address: "Lincoln Park @ 2771 N Lincoln Ave",
    specials: "$3 Labatt Blue, $3 Maker's Mark Bourbon",
    specials_url: "https://smalltabs.com/details.php?id=26",
  },
  {
    name: "Standard Bar & Grill",
    address: "Wicker Park @ 1332 N Milwaukee Ave",
    specials: "$6 Ketel One Vodka Drinks",
    specials_url: "https://smalltabs.com/details.php?id=676",
    food_specials:
      "$20 After-Work Burger Deal (Cheeseburger with Fries, Domestic Bottles, & Well Drinks from 6-9pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=676",
  },
  {
    name: "Harmony Grill",
    address: "Lakeview @ 3159 N Southport Ave",
    specials: "$4 Fireball Whiskey",
    specials_url: "https://smalltabs.com/details.php?id=242",
  },
  {
    name: "Davenport's Piano Bar",
    address: "Wicker Park @ 1383 N Milwaukee Ave",
  },
  {
    name: "O'Donovan's Pub",
    address: "North Center @ 2100 W Irving Park Rd",
    specials:
      "$15 Giant 48oz Cocktails, $5 Margaritas, $3 Tecate Cans, $13 Tecate Buckets, $1 off Tequila Shots",
    specials_url: "https://smalltabs.com/details.php?id=157",
    food_specials: "$2 Tacos",
    food_specials_url: "https://smalltabs.com/details.php?id=157",
  },
  {
    name: "Mac's Wood Grilled",
    address: "Wicker Park @ 1801 W Division St",
    specials: "$4 Paddy Irish Whiskey Shots, $5 Moscow Mules",
    specials_url: "https://smalltabs.com/details.php?id=631",
  },
  {
    name: "River Shannon",
    address: "Lincoln Park @ 425 W Armitage Ave",
    specials: "$6 Stoli Vodka, $6 Stella Artois Bottles",
    specials_url: "https://smalltabs.com/details.php?id=70",
  },
  {
    name: "The Lodge",
    address: "Near North Side @ 21 W Division Street",
    specials: "$4 Fat Tire Drafts, $6 Bombs",
    specials_url: "https://smalltabs.com/details.php?id=68",
  },
  {
    name: "The Drinkingbird",
    address: "Lincoln Park @ 2201 N Clybourn Ave",
    specials: "$5 Schlitz & Dickel Whiskey Shot Combo",
    specials_url: "https://smalltabs.com/details.php?id=48",
  },
  {
    name: "Fat Cat",
    address: "Uptown @ 4840 N Broadway St",
    specials:
      "$6 Uptown Royale (4-6pm), $6 Four Roses Manhattan (4-6pm), $6 Prairie Organic Gin & Ginger (4-6pm), $5 Select Craft Beers (4-6pm), $5 Highballs (4-6pm), $6 Select Wines (4-6pm)",
    specials_url: "https://smalltabs.com/details.php?id=120",
  },
  {
    name: "The Abbey Pub",
    address: "Irving Park @ 3420 W Grace St",
    specials: "$4 Smithwicks, $4 Harp, $5 Jameson Black, $5 2 Gingers Whiskey",
    specials_url: "https://smalltabs.com/details.php?id=31",
    food_specials: "$9.95 Fish & Chips, Half Price Appetizers until 6pm",
    food_specials_url: "https://smalltabs.com/details.php?id=31",
  },
  {
    name: "Toon's Bar & Grill",
    address: "Lakeview @ 3857 N Southport Ave",
    specials: "$1 off Stoli Vodka Cocktails, $4.50 Lagunitas Drafts",
    specials_url: "https://smalltabs.com/details.php?id=203",
    food_specials: "$10 House-Smoked Baby Back Ribs, $4.50 Po'boys",
    food_specials_url: "https://smalltabs.com/details.php?id=203",
  },
  {
    name: "AliveOne",
    address: "Lincoln Park @ 2683 N Halsted St",
    specials: "$5 Jameson Shots, $3 Pabst Blue Ribbon Bottles",
    specials_url: "https://smalltabs.com/details.php?id=214",
  },
  {
    name: "Clover",
    address: "Near West Side @ 722 W Grand Ave",
    specials:
      "$5 Tullamore Dew Whiskey, $8 Pabst Blue Ribbon Tallboy & Jameson Whiskey Shot Combo, Half Price Drinks (5-7pm)",
    specials_url: "https://smalltabs.com/details.php?id=625",
  },
  {
    name: "Roscoe's Tavern",
    address: "Lakeview @ 3356 N Halsted St",
    specials:
      "$5 Jack Daniels Honey Shots, $5 Skyy Vodka Bombs, $15 Absolut Blue Hawaiian Pitchers, $15 Absolut Pink Lemonade Pitchers",
    specials_url: "https://smalltabs.com/details.php?id=173",
  },
  {
    name: "Flo & Santos",
    address: "South Loop @ 1310 S Wabash Ave",
    specials: "$18 Polish Vodka Flights",
    specials_url: "https://smalltabs.com/details.php?id=489",
  },
  {
    name: "Cleo's",
    address: "Ukrainian Village @ 1935 W Chicago Ave",
    specials: "$2 off Bulleit Whiskey, $4 Well Drinks",
    specials_url: "https://smalltabs.com/details.php?id=49",
    food_specials: "$6 Fish & Chips",
    food_specials_url: "https://smalltabs.com/details.php?id=49",
  },
  {
    name: "Higgins' Tavern",
    address: "Lakeview @ 3259 N Racine Ave",
    specials: "$11 Miller Lite & Coors Light Pitchers",
    specials_url: "https://smalltabs.com/details.php?id=17",
  },
  {
    name: "Big Star",
    address: "Wicker Park @ 1531 N Damen Ave",
    specials: "$3 Old Heaven Hill Whiskey Shots",
    specials_url: "https://smalltabs.com/details.php?id=341",
  },
  {
    name: "WestEnd",
    address: "West Loop @ 1326 W Madison St",
    specials:
      "Half Price Drafts (excluding Guinness) (5-7pm), Half Price Wine Glasses (5-7pm), Half Price Well Drinks (5-7pm)",
    specials_url: "https://smalltabs.com/details.php?id=11",
    food_specials: "Half Price Appetizers (excluding Nachos) (5-7pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=11",
  },
  {
    name: "Reverie",
    address: "River North @ 414 N Orleans St",
    food_specials: "$10 Mix & Match Lunch",
    food_specials_url: "https://smalltabs.com/details.php?id=584",
  },
  {
    name: "Havana",
    address: "River North @ 412 N Clark St",
    specials: "$20 House Mojito Pitchers",
    specials_url: "https://smalltabs.com/details.php?id=417",
  },
  {
    name: "The Hidden Shamrock",
    address: "Lincoln Park @ 2723 N Halsted St",
    specials:
      "Half Price Craft Cocktails, $3 Rotating Drafts, $3 Whiskey Shots",
    specials_url: "https://smalltabs.com/details.php?id=336",
  },
  {
    name: "DS Tequila Company",
    address: "Lakeview @ 3352 N Halsted St",
    specials: "$12 40oz Fiesta Bowls",
    specials_url: "https://smalltabs.com/details.php?id=573",
  },
  {
    name: "The Rambler Kitchen & Tap",
    address: "North Center @ 4128 N Lincoln Ave",
    specials:
      "$4 Hard Seltzers, $4 Select Drafts, $5 Skrewball Whiskey, $5 Corazon Tequila, $3 Domestic Beers (4-7pm), $3 Select Whiskeys (4-7pm), $5 House Wine Glasses (4-7pm)",
    specials_url: "https://smalltabs.com/details.php?id=589",
    food_specials: "$7 Ground Beef or Chicken Nacho Platters",
    food_specials_url: "https://smalltabs.com/details.php?id=589",
  },
  {
    name: "Avenue Tavern",
    address: "Lakeview @ 2916 N Broadway St",
    specials:
      "$10 Miller Lite Pitchers, $16 Margarita Pitchers, $16 Long Island Iced Tea Pitchers",
    specials_url: "https://smalltabs.com/details.php?id=170",
  },
  {
    name: "Glascott's Saloon",
    address: "Lincoln Park @ 2158 N Halsted St",
    specials: "$5 Stella Artois Drafts, $5 Red Bull Bombs",
    specials_url: "https://smalltabs.com/details.php?id=46",
  },
  {
    name: "Ph.D Pub",
    address: "University Village @ 1257 S Halsted St",
    specials:
      "$3.50 Goose Island Oktoberfest 12oz Mason Jar Drafts, $3 Pabst Blue Ribbon & Rolling Rock Tallboys, $3 Bud Light Drafts, $9 Bud Light Pitchers, $3.50 Tullamore Dew Shots, $4 Carlsberg Drafts, $4 Fireball Shots, $4 Apple Moonshine Shots, $6 Vodka Lemonades, $8 Ph.D Vodka Mules",
    specials_url: "https://smalltabs.com/details.php?id=570",
  },
  {
    name: "Dimo's Pizza",
    address: "Wicker Park @ 1615 N Damen Ave",
    food_specials:
      "$9 Pizza Slice, Bourbon Shot, & Pabst Blue Ribbon or Miller High Life Tallboy Combo",
    food_specials_url: "https://smalltabs.com/details.php?id=679",
  },
  {
    name: "King Crab House",
    address: "Lincoln Park @ 312 N Halsted St",
    specials: "Half Price Beer (4-6pm), Half Price Well Drinks (4-6pm)",
    specials_url: "https://smalltabs.com/details.php?id=702",
    food_specials: "Half Price Appetizers (4-6pm), Half Price Entrees (4-6pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=702",
  },
  {
    name: "Lincoln Tap Room",
    address: "Lakeview @ 3010 N Lincoln Ave",
    specials:
      "$4 Angry Orchard Cider, $5 Call & Premium Shots, $3 Two Brothers Outlaw IPA Cans, $3 Two Brothers Sidekick Citrus Ale Cans, $4.50 Three Olives Vodka Cocktails",
    specials_url: "https://smalltabs.com/details.php?id=334",
  },
  {
    name: "Bar Louie University Village",
    address: "University Village @ 1325 S Halsted St",
    specials:
      "$3.25 Drafts (4-7pm), $4.25 Wine Glasses (4-7pm), $5.25 Signature Martinis (4-7pm)",
    specials_url: "https://smalltabs.com/details.php?id=654",
    food_specials:
      "Half Price Select Appetizers (4-7pm), Half Price Flatbreads (4-7pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=654",
  },
  {
    name: "The Kerryman",
    address: "Near North Side @ 661 N Clark St",
    specials:
      "$4 Guiness (4-9pm), $5 Jameson Shots (4-9pm), $6 Tito's Vodka Drinks (4-9pm)",
    specials_url: "https://smalltabs.com/details.php?id=62",
    food_specials: "$10 Fish & Chips (4-9pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=62",
  },
  {
    name: "Pasta Bowl Lincoln Square",
    address: "Lincoln Square @ 4343 N Lincoln Ave",
    specials: "$5 Moscow Mules",
    specials_url: "https://smalltabs.com/details.php?id=699",
  },
  {
    name: "Village Tap Bar & Grill",
    address: "Roscoe Village @ 2055 W Roscoe St",
    specials:
      "$2.50 Pabst Blue Ribbon Cans, $4 Budweiser, Bud Light, Miller Lite, & Miller High Life Bottles",
    specials_url: "https://smalltabs.com/details.php?id=269",
  },
  {
    name: "Pitchfork Food & Saloon",
    address: "Irving Park @ 2922 W Irving Park Road",
    specials: "$4 Goose Island Green Line, $6 Moscow Mules",
    specials_url: "https://smalltabs.com/details.php?id=234",
  },
  {
    name: "Crossroads at House of Blues",
    address: "River North @ 329 N Dearborn St",
    specials:
      "Half Price Select Wine Bottles (3-6pm), $8 Pabst Blue Ribbon Can & Jameson Whiskey Shot Combo (3-6pm), $2 off Select Drafts (3-6pm)",
    specials_url: "https://smalltabs.com/details.php?id=619",
    food_specials: "Half Price Appetizers (3-6pm), $9.95 Fish & Chips (3-6pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=619",
  },
  {
    name: "Ovie Bar & Grill",
    address: "West Loop @ 120 N Canal St",
    specials: "$6 Craft Beer Drafts (3-6pm), $7 Select Wine Glasses (3-6pm)",
    specials_url: "https://smalltabs.com/details.php?id=501",
  },
  {
    name: "Seven Lions",
    address: "Loop @ 130 S Michigan Ave",
    specials:
      "$9 Specialty Cocktails, $24 Select Wine Bottles (3-6pm), Half Price Featured Drafts (3-6pm)",
    specials_url: "https://smalltabs.com/details.php?id=683",
    food_specials:
      "$8 Hummus (3-6pm), $8 Pulled Pork Nachos (3-6pm), $8 Crispy Chicken Sliders (3-6pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=683",
  },
  {
    name: "Lottie's Pub",
    address: "Bucktown @ 1925 W Cortland St",
    specials: "$4 Corona & Corona Light",
    specials_url: "https://smalltabs.com/details.php?id=79",
    food_specials: "50¢ Jumbo Wings",
    food_specials_url: "https://smalltabs.com/details.php?id=79",
  },
  {
    name: "Mr. Brown's Lounge Loop",
    address: "Loop @ 81 E Wacker Dr",
    specials:
      "Half Price Island Rum Punch (3-6pm), Half Off Red Stripe Bottles (3-6pm)",
    specials_url: "https://smalltabs.com/details.php?id=615",
  },
  {
    name: "Aberdeen Tap",
    address: "West Loop @ 440 N Aberdeen St",
    specials: "$5 Jameson Whiskey Shots, $3 Pabst Blue Ribbon Drafts",
    specials_url: "https://smalltabs.com/details.php?id=457",
  },
  {
    name: "Paddy Long's",
    address: "Lincoln Park @ 1028 W Diversey Ave",
    specials: "$4 Beer of the Month",
    specials_url: "https://smalltabs.com/details.php?id=119",
    food_specials: "$13.95 Fish Fry",
    food_specials_url: "https://smalltabs.com/details.php?id=119",
  },
  {
    name: "Grandview Tavern",
    address: "West Loop @ 1202 W Grand Ave",
    specials:
      "$3 Hamms Cans, $5 Jameson Whiskey Shots, $5 Fireball Whiskey Shots",
    specials_url: "https://smalltabs.com/details.php?id=476",
    food_specials: "$9 Fish Tacos",
    food_specials_url: "https://smalltabs.com/details.php?id=476",
  },
  {
    name: "Headquarters Beercade River North",
    address: "River North @ 213 W Institute St",
  },
  {
    name: "The North End",
    address: "Lakeview @ 3733 N Halsted St",
    specials: "$5 Fireball Whiskey Shots",
    specials_url: "https://smalltabs.com/details.php?id=174",
  },
  {
    name: "Merkle's Bar & Grill",
    address: "Wrigleyville @ 3516 N Clark St",
    specials:
      "$3 Domestic Cans, $4 Well Cocktails, $4 Bloody Marys, $5 Craft Drafts, $5 Crown Apple Shots",
    specials_url: "https://smalltabs.com/details.php?id=18",
    food_specials: "$2 Tacos, $4 Burger & Fries",
    food_specials_url: "https://smalltabs.com/details.php?id=18",
  },
  {
    name: "Stretch Bar & Grill",
    address: "Wrigleyville @ 3485 N Clark St",
    specials:
      "$30 Domestic Tallboys, Domestic Drafts, Call Cocktails, Wine, & Select Appetizers Happy Hour Package (7-10pm), $25 Domestic Drafts, Well Cocktails, Wine, & Select Appetizer Happy Hour Package (7-10pm)",
    specials_url: "https://smalltabs.com/details.php?id=81",
  },
  {
    name: "Prohibition Pub & Grill",
    address: "Lincoln Park @ 2138 N Halsted Ave",
    specials: "$4 Well Drinks",
    specials_url: "https://smalltabs.com/details.php?id=564",
    food_specials: "$5 Fried Chicken Sandwich",
    food_specials_url: "https://smalltabs.com/details.php?id=564",
  },
  {
    name: "Keenan O'Reilly's",
    address: "Lakeview @ 3916 N Ashland Ave",
    specials:
      "$3.50 Goose Island & Sam Adams Bottles, $2 Pabst Blue Ribbon Cans, $2.50 Miller High Life Tallboys, $3 Labatt Blue Drafts, $2.50 Old Style Drafts",
    specials_url: "https://smalltabs.com/details.php?id=454",
  },
  {
    name: "The Pony Inn",
    address: "Lakeview @ 1638 W Belmont Ave",
    food_specials:
      "Half Price Appetizers from 4-8pm, Half Price Sandwiches from 4-8pm",
    food_specials_url: "https://smalltabs.com/details.php?id=275",
  },
  {
    name: "Pasta Bowl Lincoln Park",
    address: "Lincoln Park @ 2434 N Clark St",
    specials: "$5 Moscow Mules",
    specials_url: "https://smalltabs.com/details.php?id=637",
  },
  {
    name: "Furious Spoon",
    address: "Wicker Park @ 1571 N Milwaukee Ave",
  },
  {
    name: "Paddy O'Fegan's",
    address: "West Loop @ 204 N Halsted St",
    specials:
      "$1 off Tequila, $15 Leinenkugel's Grapefruit Shandy Buckets, $3 Miller Lite Drafts (4-7pm), $5 Rolling Rock Tallboys (4-7pm), $5 Paddy's Whiskey (4-7pm)",
    specials_url: "https://smalltabs.com/details.php?id=485",
    food_specials:
      "$10 Chicken Torta with Posole Soup, $5 Loaded Nachos (4-7pm), $3 Jalapeno & Cheddar Hot Dogs (4-7pm), $3 Wrigley Field Smokies (4-7pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=485",
  },
  {
    name: "Kasey's Tavern",
    address: "Printers Row @ 701 S Dearborn St",
    specials:
      "$4 New Belgium Voodoo Ranger IPA Drafts, $4 Carlsburg Tallboys, $3 Hamm's Tallboys, $3 Coors Banquet Bottles",
    specials_url: "https://smalltabs.com/details.php?id=125",
  },
  {
    name: "Black Rock Pub & Kitchen",
    address: "Lakeview @ 3614 N Damen Ave",
    specials:
      "$1 off Off Color Brewery Drafts & Bottles, $4 Slow & Low Rye Shots",
    specials_url: "https://smalltabs.com/details.php?id=59",
    food_specials: "40¢ Wings",
    food_specials_url: "https://smalltabs.com/details.php?id=59",
  },
  {
    name: "El Tequilas Bar & Grill",
    address: "Lincoln Park @ 2826 N Lincoln Ave",
    specials: "$3 Budweiser (4-6pm), $3 Tecate (4-6pm), $5 Margaritas (4-6pm)",
    specials_url: "https://smalltabs.com/details.php?id=678",
  },
  {
    name: "Racine Plumbing Bar & Grill",
    address: "Lincoln Park @ 2642 N Lincoln Ave",
    specials:
      "$35 Drink Package including Draft Beers, Well Drinks, Select Call Drinks, Domestic Bottles and Cans, & Half Price Food (9pm-12am)",
    specials_url: "https://smalltabs.com/details.php?id=357",
  },
  {
    name: "Halligan Bar",
    address: "Lincoln Park @ 2274 N Lincoln Ave",
    specials:
      "$3 Budweiser & Bud Light Bottles, $3.50 Vegas Bombs, $3.50 Captain Morgan Rum & Coke, $4 Stoli Vodka Drinks, $5 Bombs, $2 Bud Light Drafts, $3 Jameson Whiskey Shots, $3.50 Goose Island 312 Drafts, $3.50 Guinness, $4 Stoli Vodka Drinks",
    specials_url: "https://smalltabs.com/details.php?id=130",
  },
  {
    name: "Sherry's Bar",
    address: "West Rogers Park @ 5652 N Western Ave",
    specials:
      "$5 Long Island Iced Teas, $9 Old Style Buckets, $13 Miller Lite Buckets",
    specials_url: "https://smalltabs.com/details.php?id=645",
  },
  {
    name: "Pint",
    address: "Wicker Park @ 1547 N Milwaukee Ave",
    food_specials: "Half Price Fish & Chips",
    food_specials_url: "https://smalltabs.com/details.php?id=218",
  },
  {
    name: "Lion Head Pub",
    address: "Lincoln Park @ 2251 N Lincoln Ave",
    food_specials: "$1 Fish Tacos, 25¢ Wings (4-7pm, with beverage purchase)",
    food_specials_url: "https://smalltabs.com/details.php?id=25",
  },
  {
    name: "SideDoor",
    address: "Streeterville @ 100 E Ontario St",
    food_specials:
      "Half Price Avocado Mash, Stuffed Mushrooms, Chips & Dip, IPA Beer Pretzels, & Deviled Eggs from 3-5pm",
    food_specials_url: "https://smalltabs.com/details.php?id=574",
  },
  {
    name: "Monty's Tap",
    address: "Near North Side @ 600 W Chicago Ave",
    specials:
      "$4 Select Beers (3:30-5:30pm), $6 Moscow Mules (3:30-5:30pm), $7 Sauvignon Blanc, Pinot Noir, & Rosé Glasses (3:30-5:30pm)",
    specials_url: "https://smalltabs.com/details.php?id=707",
  },
  {
    name: "The Green Lady",
    address: "Lakeview @ 3328 N Lincoln Ave",
    specials: "$3 Pabst Blue Ribbon Cans",
    specials_url: "https://smalltabs.com/details.php?id=213",
  },
  {
    name: "Leona's Old Irving",
    address: "Irving Park @ 3877 N Elston Ave",
    specials:
      "$5 Cocktails (6-9pm), $5 Frozen Margaritas (6-9pm), $5 Rocks Margaritas (6-9pm), $5 Long Island Iced Teas (6-9pm)",
    specials_url: "https://smalltabs.com/details.php?id=667",
    food_specials: "$3 off Wing Dings",
    food_specials_url: "https://smalltabs.com/details.php?id=667",
  },
  {
    name: "Mother's Too",
    address: "Near North Side @ 14 W Division St",
    specials: "$5 Sailor Jerry Rum, $5.50 Jim Beam Bourbon",
    specials_url: "https://smalltabs.com/details.php?id=67",
  },
  {
    name: "Charlie's",
    address: "Lakeview @ 3726 N Broadway St",
    specials: "$10 Long Island Iced Teas, $3 Apple Pie Shots",
    specials_url: "https://smalltabs.com/details.php?id=264",
  },
  {
    name: "Franklin Tap",
    address: "Loop @ 325 S Franklin St",
    specials:
      "$5 Two Brothers Pale Frank Drafts, $5 Yukon Jack Wicked Hot Shots",
    specials_url: "https://smalltabs.com/details.php?id=135",
    food_specials: "$5 Select Appetizers (after 5pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=135",
  },
  {
    name: "Francesca's Bryn Mawr",
    address: "Edgewater @ 1039 W Bryn Mawr Ave",
    food_specials: "$15.99 Prix Fixe Lunch Menu",
    food_specials_url: "https://smalltabs.com/details.php?id=429",
  },
  {
    name: "Emmit's Irish Pub",
    address: "West Loop @ 495 N Milwaukee Ave",
    specials: "$4 Fireball Whiskey",
    specials_url: "https://smalltabs.com/details.php?id=487",
    food_specials: "$8.95 Fish & Chips",
    food_specials_url: "https://smalltabs.com/details.php?id=487",
  },
  {
    name: "Harrigan's Pub",
    address: "Lakeview @ 2816 N Halsted St",
    specials: "$6 Makers Mark Manhattans, $2 Rolling Rock Cans (12-6pm)",
    specials_url: "https://smalltabs.com/details.php?id=648",
  },
  {
    name: "Allium",
    address: "Near North Side @ 120 E Delaware St",
    specials: "Half Price Select Spirits, Wines, & Draft Beers (4-6pm)",
    specials_url: "https://smalltabs.com/details.php?id=687",
    food_specials: "Half Price Bar Bites (4-6pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=687",
  },
  {
    name: "Durkin's Tavern",
    address: "Lincoln Park @ 810 W Diversey Ave",
    specials: "$4 Fireball Whiskey Shots, $3 Bud Light Drafts",
    specials_url: "https://smalltabs.com/details.php?id=22",
  },
  {
    name: "Christina's Place",
    address: "Irving Park @ 3759 N Kedzie Ave",
    specials:
      "$2 Pabst Blue Ribbon Cans, $3 Guinness Drafts, $5 Jameson Whiskey Shots, $5 Malort Shots, $5 Fireball Whiskey Shots",
    specials_url: "https://smalltabs.com/details.php?id=235",
  },
  {
    name: "Clark Street Dog",
    address: "Lakeview @ 3040 N Clark St",
    specials:
      "$2 Bud Light Drafts, $3.50 Goose Island Drafts, $3.50 Lagunitas Drafts, $5 Picklebacks, $8 Mules",
    specials_url: "https://smalltabs.com/details.php?id=472",
  },
  {
    name: "The Arrogant Frog Bar",
    address: "Lincoln Park @ 1365 W Fullerton Ave",
    specials:
      "$3 Bud Light Drafts, $4 Fireball Whiskey Shots, $4 Craft Beers, $5 Well Cocktails, $5 Malibu Rum Cocktails",
    specials_url: "https://smalltabs.com/details.php?id=240",
  },
  {
    name: "Kroll's South Loop",
    address: "South Loop @ 1736 S Michigan Ave",
    specials:
      "$5 Bushmills Whiskey Cocktails (4-6pm), $4 Absolut Vodka Cocktails (4-6pm), $3 Deschutes Cans (4-6pm), $5 Keke Key Lime Martinis (4-6pm), $6 House Margaritas (4-6pm)",
    specials_url: "https://smalltabs.com/details.php?id=146",
    food_specials: "Half Price Appetizers (5-7pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=146",
  },
  {
    name: "The Irish Oak",
    address: "Wrigleyville @ 3511 N Clark St",
    specials: "$6 Budweiser Tallboys & Shot Combo, $25 Fish Bowls",
    specials_url: "https://smalltabs.com/details.php?id=199",
    food_specials: "$10 All-You-Can-Eat Fish & Chips",
    food_specials_url: "https://smalltabs.com/details.php?id=199",
  },
  {
    name: "O'Leary's Public House",
    address: "River North @ 541 N Wells St",
    specials: "$4.50 Corona Light Bottles",
    specials_url: "https://smalltabs.com/details.php?id=361",
  },
  {
    name: "Cortland's Garage",
    address: "Bucktown @ 1645 W Cortland St",
    food_specials: "Buy One, Get One Free Appetizers from 2pm-6pm",
    food_specials_url: "https://smalltabs.com/details.php?id=60",
  },
  {
    name: "Small Bar Logan Square",
    address: "Logan Square @ 2956 N Albany Ave",
    specials:
      "$3 Pabst Blue Ribbon Bottles, $3 Miller Lite & Miller High Life Cans",
    specials_url: "https://smalltabs.com/details.php?id=80",
  },
  {
    name: "Wild Goose Bar & Grill",
    address: "North Center @ 4265 N Lincoln Ave",
    specials:
      "$5 Guinness Imperial Drafts, $5 Metropolitan Flywheel Drafts, $5 Select Martinis",
    specials_url: "https://smalltabs.com/details.php?id=37",
    food_specials: "$8 All-You-Can-Eat Fish Fry",
    food_specials_url: "https://smalltabs.com/details.php?id=37",
  },
  {
    name: "Scarlet Bar",
    address: "Lakeview @ 3320 N Halsted St",
    specials: "$6 Ketel One Vodka Cocktails",
    specials_url: "https://smalltabs.com/details.php?id=262",
  },
  {
    name: "Farraguts",
    address: "Andersonville @ 5240 N Clark St",
    specials: "$3 Miller Lite Drafts, $3 Pabst Blue Ribbon Drafts",
    specials_url: "https://smalltabs.com/details.php?id=445",
  },
  {
    name: "Bridge House Tavern",
    address: "River North @ 321 N Clark St",
    specials: "$20 Tiger Tallboy Buckets",
    specials_url: "https://smalltabs.com/details.php?id=484",
  },
  {
    name: "Altiro Latin Fusion",
    address: "Roscoe Village @ 2116 W Roscoe St",
    specials:
      "$1.99 Champagne (2-5pm), $2.49 Imported Mexican Beers (2-5pm), $4.99 Signature Craft Margaritas (2-5pm)",
    specials_url: "https://smalltabs.com/details.php?id=632",
    food_specials: "$1.99 Gourmet Tacos (2-5pm), $1.99 Ala Papa Bravo (2-5pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=632",
  },
  {
    name: "80 Proof",
    address: "Old Town @ 1500 N Wells St",
    specials:
      "$3 Tequila Shots (5-8pm), $4 All Beers (5-8pm), $5 All Call Drinks (5-8pm)",
    specials_url: "https://smalltabs.com/details.php?id=660",
  },
  {
    name: "Knife & Tine",
    address: "Lincoln Park @ 1417 W Fullerton Ave",
    specials:
      "Half Price Draft Beers (3-6pm), Half Price Craft Cocktails (3-6pm), Half Price Wine Glasses (3-6pm)",
    specials_url: "https://smalltabs.com/details.php?id=640",
    food_specials: "$5 Bar Snacks (3-6pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=640",
  },
  {
    name: "Bridget McNeill's Bar & Kitchen",
    address: "Lakeview @ 420 W Belmont Ave",
    specials: "$4.20 Draft Beers (5-7pm), $6 Wine Glasses (5-7pm)",
    specials_url: "https://smalltabs.com/details.php?id=347",
    food_specials: "$12.99 Large Pizzas (with drink purchase)",
    food_specials_url: "https://smalltabs.com/details.php?id=347",
  },
  {
    name: "Jack & Gingers",
    address: "Bucktown @ 2048 W Armitage Ave",
    specials: "$4 Well Drinks, $2 off Bulleit Whiskey, $5 Jack & Gingers",
    specials_url: "https://smalltabs.com/details.php?id=50",
    food_specials: "$6 Fish & Chips",
    food_specials_url: "https://smalltabs.com/details.php?id=50",
  },
  {
    name: "Vaughans Pub Lakeview",
    address: "Lakeview @ 2917 N Sheffield Ave",
    specials:
      "$4.50 Blue Moon Drafts, $6 Margaritas, $6 Bombs, $16 Miller Family Buckets, $3 Domestic Bottles (4:30-6:30pm), $4 Well Drinks (4:30-6:30pm), $4.50 All American Drafts (4:30-6:30pm)",
    specials_url: "https://smalltabs.com/details.php?id=44",
    food_specials: "$2 Meatball Sliders, $2 Brisket Sliders, $5 Nachos",
    food_specials_url: "https://smalltabs.com/details.php?id=44",
  },
  {
    name: "George Street Pub",
    address: "Lakeview @ 2858 N Halsted St",
    specials: "$5 Seasonal Drafts",
    specials_url: "https://smalltabs.com/details.php?id=630",
  },
  {
    name: "Bar Louie Dearborn Station",
    address: "Printers Row @ 47 W Polk St",
    food_specials:
      "Half Price Select Appetizers (4-7pm), Half Price Flatbreads (4-7pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=567",
  },
  {
    name: "6 Degrees",
    address: "Bucktown @ 1935 N Damen Ave",
    specials: "$5 Fireball Whiskey",
    specials_url: "https://smalltabs.com/details.php?id=225",
  },
  {
    name: "Black Iron Tavern",
    address: "West Loop @ 401 N Milwaukee Ave",
    specials: "$5 Moscow Mules (3-6pm), $5 You-Call-It Well Drinks (3-6pm)",
    specials_url: "https://smalltabs.com/details.php?id=671",
    food_specials:
      "$18 Fish & Chips and Lagunitas Draft Combo, $2 Chipotle Carnitas, Chicken, or Fried Fish Tacos (3-6pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=671",
  },
  {
    name: "20 East",
    address: "Near North Side @ 20 E Delaware St",
    specials:
      "$3 Domestic Beers (3-6pm), $4 Absolut Vodka Mixed Drinks (3-6pm), $5 Select Wine Glasses (3-6pm)",
    specials_url: "https://smalltabs.com/details.php?id=661",
    food_specials: "$7 Mini Burgers, $7 Hummus, $7 Truffle Fries, $7 Brussels",
    food_specials_url: "https://smalltabs.com/details.php?id=661",
  },
  {
    name: "Four Shadows Tavern",
    address: "Lincoln Park @ 2758 N Ashland Ave",
    specials: "$5 Fireball Whiskey, $5 Stoli Vodka Flavors",
    specials_url: "https://smalltabs.com/details.php?id=29",
  },
  {
    name: "Lizard's Liquid Lounge",
    address: "Irving Park @ 3058 W Irving Park Rd",
    specials:
      "$4 Stella Artois Drafts, $4 Great Lakes Burning River Drafts, $5 Microbrews",
    specials_url: "https://smalltabs.com/details.php?id=98",
  },
  {
    name: "Sidebar Grille",
    address: "Loop @ 221 N LaSalle St",
    specials:
      "$3 Fernet or Fireball Shots (4pm-Close), $5 Draft Beers (4-6pm), $6 Select Wine Glasses (4-6pm), $7 Svedka Vodka Mules (4-6pm)",
    specials_url: "https://smalltabs.com/details.php?id=10",
    food_specials: "$10 Featured Flatbread (4pm-Close)",
    food_specials_url: "https://smalltabs.com/details.php?id=10",
  },
  {
    name: "ZED451",
    address: "River North @ 739 N Clark St",
    specials: "$4.51 Grey Goose Vodka Cocktails (4:30-7pm)",
    specials_url: "https://smalltabs.com/details.php?id=639",
  },
  {
    name: "Ranalli's",
    address: "Lincoln Park @ 1925 N Lincoln Ave",
    specials:
      "$7 Mules, $40 Large Specialty Cocktails (Mega Mule, Red Menace, & Tennessee Top Hat)",
    specials_url: "https://smalltabs.com/details.php?id=559",
  },
  {
    name: "Bootlegger's",
    address: "Near North Side @ 11 W Division St",
    specials:
      "$3 Southern Comfort, $3 Shellback Rum, $5 Wild Turkey Bourbon, $4 Miller Lite Drafts",
    specials_url: "https://smalltabs.com/details.php?id=66",
  },
  {
    name: "The Boss Bar",
    address: "River North @ 420 N Clark St",
    food_specials:
      "$10 Burger & Miller Lite Draft Combo, $24 Cheese Pizza & Miller Lite Pitcher Combo",
    food_specials_url: "https://smalltabs.com/details.php?id=560",
  },
  {
    name: "Harbee Liquors & Tavern",
    address: "Pilsen @ 1345 W 18th St",
    specials: "$3 Budweiser & Miller Family Beers",
    specials_url: "https://smalltabs.com/details.php?id=548",
  },
  {
    name: "Hangge-Uppe",
    address: "Near North Side @ 16 W Division St",
    specials: "$5 Bacardi Flavored Rum",
    specials_url: "https://smalltabs.com/details.php?id=84",
  },
  {
    name: "Pippin's Tavern",
    address: "Near North Side @ 806 N Rush St",
    specials:
      "$5.50 Malort, $5 Maestro Dobel Tequila, $4 Wondermint, $5 Revel Stoke Roasted Pecan Whiskey, $6 Don Q Gran Anejo Mules, $6 Bulldog Gin Rickeys",
    specials_url: "https://smalltabs.com/details.php?id=71",
  },
  {
    name: "Butch McGuires",
    address: "Near North Side @ 20 W Division St",
    specials:
      "$5 Sam Adams Lager Drafts, $5 Sam Adams Seasonal Drafts, $4 Mystery Shots, Half Price Drafts (5-7pm), Half Price Mixed Drinks (5-7pm), Half Price Wine (5-7pm)",
    specials_url: "https://smalltabs.com/details.php?id=617",
  },
  {
    name: "Troquet River North",
    address: "River North @ 111 W Huron St",
    specials:
      "$4 Select Beers (4-7pm), $5 House Mixed Drinks (4-7pm), $6 House Red & White Wine Glasses (4-7pm)",
    specials_url: "https://smalltabs.com/details.php?id=649",
    food_specials:
      "Mimosa Brunch (10am-3pm), $4 Truffle Frites (4-7pm), $5 Salmon Rilette (4-7pm), $6 Croque Monsieur & Croque Végétarien (4-7pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=649",
  },
  {
    name: "Decibel Bar",
    address: "Uptown @ 4437 N Broadway Ave",
    specials: "$2 House Shots, $4 Bacardi, $4 Mimosas",
    specials_url: "https://smalltabs.com/details.php?id=553",
  },
  {
    name: "Nisei Lounge",
    address: "Wrigleyville @ 3439 N Sheffield Ave",
    specials:
      "$5 Jameson Whiskey Shots, $3 Mickey's Big Mouth Bottles, $4 Old Style Tallboys, $4 Pabst Blue Ribbon Drafts, $3 Malort Shots",
    specials_url: "https://smalltabs.com/details.php?id=307",
  },
  {
    name: "Crossroads Public House",
    address: "Lincoln Park @ 2630 N Clark St",
    specials:
      "$4 Fireball Whiskey Shots, $5 Featured Cocktails, $5 Three Olvie Vodka Bombs, $10 Long Island Iced Tea Pitchers",
    specials_url: "https://smalltabs.com/details.php?id=208",
  },
  {
    name: "Estelle's Cafe & Lounge",
    address: "Wicker Park @ 2013 W North Ave",
    specials:
      "$4 Three Floyd's Drafts (5-8pm), $3 Rebel Yell Whiskey Shots (5-8pm)",
    specials_url: "https://smalltabs.com/details.php?id=216",
  },
  {
    name: "Links Taproom",
    address: "Wicker Park @ 1559 N Milwaukee Ave",
    food_specials: "$11 Fish Fry w/ Potato Pancake & Fries",
    food_specials_url: "https://smalltabs.com/details.php?id=568",
  },
  {
    name: "Lokal Wicker Park",
    address: "Wicker Park @ 1904 W North Ave",
    food_specials: "$10 Mussels & Truffle Fries",
    food_specials_url: "https://smalltabs.com/details.php?id=471",
  },
  {
    name: "Francois Frankie",
    address: "Loop @ 222 W Randolph St",
    specials:
      "$5 Drafts (3-6pm), $10 Red & White Wine Glasses (3-6pm), $10 Cocktail of the Week (3-6pm)",
    specials_url: "https://smalltabs.com/details.php?id=712",
  },
  {
    name: "Monk's Pub",
    address: "Loop @ 205 W Lake St",
    specials:
      "$4 Budweiser, Bud Light, Coors Light, Miller High Life, Miller Lite, Old Style, & Schiltz Bottles",
    specials_url: "https://smalltabs.com/details.php?id=144",
  },
  {
    name: "Lowcountry South Loop",
    address: "South Loop @ 1132 S Wabash Ave",
    specials: "$24 Sangria Carafes (5-7pm), Half Price Beer & Wine (5-7pm)",
    specials_url: "https://smalltabs.com/details.php?id=708",
    food_specials: "$10 Mussels & Fries (5-7pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=708",
  },
  {
    name: "Deuces & The Diamond Club",
    address: "Wrigleyville @ 3505 N Clark St",
    specials: "$12+ Seasonal Beer Flights",
    specials_url: "https://smalltabs.com/details.php?id=408",
  },
  {
    name: "Pasta Bowl Wicker Park",
    address: "Wicker Park @ 1852 W North Ave",
    specials: "$5 Moscow Mules",
    specials_url: "https://smalltabs.com/details.php?id=638",
  },
  {
    name: "Monsignor Murphy's",
    address: "Lakeview @ 3019 N Broadway St",
    specials: "$3 Pabst Blue Ribbon Cans, $3 Miller Lite Cans",
    specials_url: "https://smalltabs.com/details.php?id=246",
  },
  {
    name: "Bourbon on Division",
    address: "Wicker Park @ 2050 W Division St",
    specials:
      "$5 Deep Eddy Rum Lemon Drops, $20 Domestic Buckets, $5 Tito's Vodka or Tullamore Dew Whiskey Mixed Drinks (9-11pm)",
    specials_url: "https://smalltabs.com/details.php?id=710",
  },
  {
    name: "Cork Lounge",
    address: "Lakeview @ 1822 W Addison St",
    specials:
      "$2 Pabst Blue Ribbon Drafts, $4 Mimosas, $4 Apple Pie Shots, $5 Genessee Cream Ale & Jim Beam Shot Combo",
    specials_url: "https://smalltabs.com/details.php?id=326",
  },
  {
    name: "Mullen's Bar & Grill",
    address: "Rogers Park @ 7301 N Western Ave",
    specials: "$5 Flavored Vodka Drinks, $5 Bomb Shots (excludes Car Bombs)",
    specials_url: "https://smalltabs.com/details.php?id=460",
    food_specials: "$9 Meatloaf",
    food_specials_url: "https://smalltabs.com/details.php?id=460",
  },
  {
    name: "Scot's Bar",
    address: "North Center @ 1829 W Montrose Ave",
    specials: "$3.50 Well Drinks, $3.50 Miller Lite Drafts",
    specials_url: "https://smalltabs.com/details.php?id=263",
  },
  {
    name: "Sheffield's",
    address: "Lakeview @ 3258 N Sheffield Ave",
    specials: "$4 Brewery-of-the-Month Drafts",
    specials_url: "https://smalltabs.com/details.php?id=54",
  },
  {
    name: "Distilled Chicago",
    address: "Lincoln Park @ 1480 W Webster Ave",
    food_specials: "$10 Country Fried Chicken Sandwich",
    food_specials_url: "https://smalltabs.com/details.php?id=656",
  },
  {
    name: "Wheel House",
    address: "Lakeview @ 3553 N Southport Ave",
    specials: "$5 UV Bombs, $4 Craft Can Beers",
    specials_url: "https://smalltabs.com/details.php?id=169",
    food_specials: "$7 Fish & Chips, $10 Crab Cake Melts",
    food_specials_url: "https://smalltabs.com/details.php?id=169",
  },
  {
    name: "McCormick & Schmick's",
    address: "Near North Side @ 41 E Chestnut St",
    specials:
      "$6 Canyon Road Chardonnay, Canyon Cabernet Sauvignon, & Bringer White Zinfandel Wine Glasses (4-7pm), $7 Agave Rita, All American, & Talk of the Town Cocktails (4-7pm), $9 Urban Influence, Brandy Sidebar, & Sour Apple Martinis (4-7pm)",
    specials_url: "https://smalltabs.com/details.php?id=605",
  },
  {
    name: "Jake Melnick's Corner Tap",
    address: "Near North Side @ 41 E Superior St",
    specials: "$5.50 Krombacher Pils",
    specials_url: "https://smalltabs.com/details.php?id=311",
  },
  {
    name: "Sluggers",
    address: "Wrigleyville @ 3540 N Clark St",
    specials:
      "$6 Goose Island Green Line Drafts, $6 Sam Adams Drafts, $6 Pinnacle Flavored Vodka Cocktails",
    specials_url: "https://smalltabs.com/details.php?id=53",
  },
  {
    name: "Nola Gastropub",
    address: "Lakeview @ 3481 N Clark St",
    specials:
      "$3.50 Founders All Day IPA, $3.50 Founders Rubaeus, $4 Beer of the Month",
    specials_url: "https://smalltabs.com/details.php?id=642",
  },
  {
    name: "Taco Joint River North",
    address: "River North @ 158 W Ontario St",
    specials: "$5 Modelo Especial Can & Olmeca Tequila Blanco Shot Combo",
    specials_url: "https://smalltabs.com/details.php?id=542",
  },
  {
    name: "Gino's North",
    address: "Edgewater @ 1111 W Granville Ave",
    specials: "$3 Sangria Glasses",
    specials_url: "https://smalltabs.com/details.php?id=238",
  },
  {
    name: "Hubbard Inn",
    address: "River North @ 110 W Hubbard St",
    food_specials:
      "$2 Raw Bar (selections include Shrimp, Lobster, Scallops, King Crab, & Oysters)",
    food_specials_url: "https://smalltabs.com/details.php?id=554",
  },
  {
    name: "McGee's Tavern",
    address: "Lincoln Park @ 950 W Webster Ave",
    specials: "$3 Bud Light Drafts",
    specials_url: "https://smalltabs.com/details.php?id=21",
  },
  {
    name: "The Full Shilling",
    address: "Wrigleyville @ 3724 N Clark St",
    specials:
      "$5 Fireball Whiskey, $20 Table Tappers, Half Price Drinks (6-9pm)",
    specials_url: "https://smalltabs.com/details.php?id=623",
    food_specials: "$7.95 Fish & Chips, $1 Hot Dogs",
    food_specials_url: "https://smalltabs.com/details.php?id=623",
  },
  {
    name: "Gallery Cabaret",
    address: "Bucktown @ 2020 N Oakley Ave",
    specials:
      "$6 Hammeson (Hamm's & Jameson Whiskey), $6 Jackhammer (Hamm's & Jack Daniels Whiskey), $3 Fireball Whiskey Shots, $3 Malort Shots",
    specials_url: "https://smalltabs.com/details.php?id=116",
  },
  {
    name: "Kit Kat Lounge",
    address: "Lakeview @ 3700 N Halsted St",
    food_specials: "$30 Prix-Fixe Menu (Salad, Entree, & Martini)",
    food_specials_url: "https://smalltabs.com/details.php?id=196",
  },
  {
    name: "Mad River Bar & Grille",
    address: "Lakeview @ 2909 N Sheffield Ave",
    food_specials: "Half Price Appetizers (5-8pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=317",
  },
  {
    name: "Lincoln Station",
    address: "Lincoln Park @ 2432 N Lincoln Ave",
    specials: "$4 Featured Drafts",
    specials_url: "https://smalltabs.com/details.php?id=248",
    food_specials: "$10.95 All-You-Can-Eat Fish Fry",
    food_specials_url: "https://smalltabs.com/details.php?id=248",
  },
  {
    name: "Matisse Tavern & Grill",
    address: "Lincoln Park @ 674 W Diversey Pkwy",
    specials: "$5 Martinis",
    specials_url: "https://smalltabs.com/details.php?id=222",
  },
  {
    name: "Trader Todd's",
    address: "Lakeview @ 3216 N Sheffield Ave",
    specials: "$1 Rolling Rock Drafts (4:30-6:30pm)",
    specials_url: "https://smalltabs.com/details.php?id=455",
    food_specials: "$2 Select Appetizers (4:30-6:30pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=455",
  },
  {
    name: "Corcoran's Grill & Pub",
    address: "Lincoln Park @ 1615 N Wells St",
    specials:
      "$4.50 Corona & Corona Light Bottles, $7 Moscow Mules, $5 All Shots",
    specials_url: "https://smalltabs.com/details.php?id=41",
    food_specials: "$12 All-You-Can-Eat Fish & Chips",
    food_specials_url: "https://smalltabs.com/details.php?id=41",
  },
  {
    name: "Rockwood Place",
    address: "Wrigleyville @ 3466 N Clark St",
    specials: "$3 Bud Light Drafts, $5 Flavored Bombs, $6 Margaritas",
    specials_url: "https://smalltabs.com/details.php?id=350",
    food_specials: "Half Price Pizzas",
    food_specials_url: "https://smalltabs.com/details.php?id=350",
  },
  {
    name: "Crossroads Bar & Grill",
    address: "West Loop @ 1120 W Madison St",
    specials:
      "$4 Goose Island Green Line, $4 Goose Island 312, $5 Captain Morgan Rum Cocktails",
    specials_url: "https://smalltabs.com/details.php?id=267",
  },
  {
    name: "Declan's Irish Pub",
    address: "Near North Side @ 1240 N Wells St",
    specials: "$4 Select Craft Draft, $5 Jack Daniels Fire",
    specials_url: "https://smalltabs.com/details.php?id=365",
    food_specials: "$10 Fish & Chips",
    food_specials_url: "https://smalltabs.com/details.php?id=365",
  },
  {
    name: "Celtic Crown Public House",
    address: "North Center @ 4301 N Western Ave",
    specials:
      "$4 Founders All Day IPA, $5 Stoli Vodka Mules, $2 Miller Lite Drafts (3-7pm), $2 Well Cocktails",
    specials_url: "https://smalltabs.com/details.php?id=76",
    food_specials: "$7 Turkey Pesto Sandwich, $7 Green Ranch BLT Sandwich",
    food_specials_url: "https://smalltabs.com/details.php?id=76",
  },
  {
    name: "Tuman's Tap & Grill",
    address: "Ukrainian Village @ 2159 W Chicago Ave",
    specials: "$3.50 Pabst Blue Ribbon Drafts",
    specials_url: "https://smalltabs.com/details.php?id=662",
  },
  {
    name: "Big City Tap",
    address: "Lakeview @ 1010 W Belmont Ave",
    specials: "$6 Jameson Whiskey, $1 Jello Shots, $1 Apple Pucker Shots",
    specials_url: "https://smalltabs.com/details.php?id=306",
    food_specials: "Half Price Bar Snacks (until 9pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=306",
  },
  {
    name: "Innjoy (Wicker Park)",
    address: "Wicker Park @ 2051 W Division St",
    specials:
      "$4 Dos Equis Drafts, $8 Milagro Tequila Margaritas, $5 Fireball Whiskey Shots",
    specials_url: "https://smalltabs.com/details.php?id=163",
    food_specials: "Half Price Shrimp",
    food_specials_url: "https://smalltabs.com/details.php?id=163",
  },
  {
    name: "Dugan's on Halsted",
    address: "West Loop @ 128 S Halsted St",
    specials:
      "$2.50 Bud Light Drafts, $3.50 Hoegaarden, $2.50 Pabst Blue Ribbon Bottles",
    specials_url: "https://smalltabs.com/details.php?id=424",
  },
  {
    name: "Goldie's",
    address: "North Center @ 3839 N Lincoln Ave",
    specials: "$1 Pabst Blue Ribbon Drafts",
    specials_url: "https://smalltabs.com/details.php?id=122",
  },
  {
    name: "Nick's Beer Garden",
    address: "Wicker Park @ 1516 N Milwaukee Ave",
    specials: "$1 off Draft Beers (4-7pm)",
    specials_url: "https://smalltabs.com/details.php?id=449",
  },
  {
    name: "Benchmark",
    address: "Old Town @ 1510 N Wells St",
    specials:
      "$4 Truly & White Claw Cans (5-8pm), $5 Jack Daniels Whiskey Shots, $5 El Jimador Tequila Shots",
    specials_url: "https://smalltabs.com/details.php?id=508",
    food_specials: "Free Burgers (limited quantities, with drink purchase)",
    food_specials_url: "https://smalltabs.com/details.php?id=508",
  },
  {
    name: "Berlin",
    address: "Lakeview @ 954 W Belmont Ave",
    specials: "$3 Bacardi Rum Bombs, $5 Tropical Sex Pints, $6 Stoli Vodka",
    specials_url: "https://smalltabs.com/details.php?id=349",
  },
  {
    name: "Hook & Ladder",
    address: "Lincoln Park @ 2270 N Lincoln Ave",
    specials:
      "$2.50 Domestic Bottles, $3 Import/Craft Bottles, $4 All Drafts, $3 Shots, $4 Bombs, $6 Wine Glasses, $6 Mimosas, $4 Well Drinks, $5 Call Drinks",
    specials_url: "https://smalltabs.com/details.php?id=593",
  },
  {
    name: "Side Street Saloon",
    address: "Lakeview @ 1456 W George St",
    specials: "$3.25 Pabst Blue Ribbon Bottles",
    specials_url: "https://smalltabs.com/details.php?id=187",
    food_specials: "$5.50 Half Pound Cheeseburger & Fries",
    food_specials_url: "https://smalltabs.com/details.php?id=187",
  },
  {
    name: "Vaughans Pub Northwest Side",
    address: "Jefferson Park @ 5485 N Northwest Hwy",
    specials:
      "$3.50 Amstel Light Bottles, $4 Blue Moon Drafts, $4 Powers Irish Whiskey Shots",
    specials_url: "https://smalltabs.com/details.php?id=43",
    food_specials:
      "$12 All-You-Can-Eat Fish & Chips, $7.50 Pub Burger & Fries (11am-3pm), $7.50 Chicken Sandwich & Fries (11am-3pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=43",
  },
  {
    name: "Southport Lanes",
    address: "Lakeview @ 3325 N Southport Ave",
    specials: "$3 Schiltz Drafts",
    specials_url: "https://smalltabs.com/details.php?id=281",
  },
  {
    name: "Rocky's",
    address: "Bridgeport @ 234 W 31st St",
    specials:
      "$5 Black & Blues, $3 Non-Premium Domestic Beers, $4 Premium Domestic & Import Beers, $12 Domestic Buckets",
    specials_url: "https://smalltabs.com/details.php?id=378",
  },
  {
    name: "Commonwealth Tavern",
    address: "Roscoe Village @ 2000 W Roscoe St",
    specials: "$6 Craft Cocktails (4-7pm), $6 Moscow Mules, $6 Summer Sunsets",
    specials_url: "https://smalltabs.com/details.php?id=588",
    food_specials: "Half Price Appetizers (3-7pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=588",
  },
  {
    name: "The Fireplace Inn",
    address: "Old Town @ 1448 N Wells St",
    specials: "$5 Skyy Vodka Bombs",
    specials_url: "https://smalltabs.com/details.php?id=442",
  },
  {
    name: "Joe's Bar",
    address: "Near North Side @ 940 W Weed St",
    specials:
      "$2 Fireball Whiskey Shots (8-10pm), $2 Budweiser & Coors Light Bottles (8-10pm), $3 Vodka Mixers (8-10pm)",
    specials_url: "https://smalltabs.com/details.php?id=14",
  },
  {
    name: "Sports Corner Bar & Grill",
    address: "Wrigleyville @ 956 W Addison St",
    specials: "$5 You-Call-Its",
    specials_url: "https://smalltabs.com/details.php?id=328",
    food_specials: "$2 Sliders",
    food_specials_url: "https://smalltabs.com/details.php?id=328",
  },
  {
    name: "Fado Irish Pub",
    address: "River North @ 100 W Grand Ave",
    specials:
      "$7 Old Fashioneds (5-9pm), $7 Manhattans (5-9pm), $7 Whiskey Sours (5-9pm), $5 Carlsberg Beer (5-9pm), $7 Red & White Wine Glasses (5-9pm)",
    specials_url: "https://smalltabs.com/details.php?id=583",
    food_specials: "$6 Select Snacks (5-9pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=583",
  },
  {
    name: "Longman & Eagle",
    address: "Logan Square @ 2657 N Kedzie Ave",
    specials:
      "$2 Old Milwaukee & Pabst Blue Ribbon Cans, $3 Old Style Drafts, $3 Select Whiskey Shots",
    specials_url: "https://smalltabs.com/details.php?id=348",
  },
  {
    name: "G&O",
    address: "West Loop @ 459 N Ogden Ave",
    specials:
      "$3 House Whiskey or Bourbon Shot (with draft beer purchase), $3 Tito's Vodka (4-6pm), $3 Ford's Gin (4-6pm), $3 Drink of the Week (4-6pm)",
    specials_url: "https://smalltabs.com/details.php?id=641",
  },
  {
    name: "The Other Side Bar",
    address: "Lincoln Park @ 2436 N Clark St",
    specials: "$5 Moscow Mules",
    specials_url: "https://smalltabs.com/details.php?id=192",
  },
  {
    name: "Bottom Lounge",
    address: "West Loop @ 1375 W Lake St",
    specials: "$3.50 Schiltz Drafts, $4 Budweiser & Bud Light Bottles",
    specials_url: "https://smalltabs.com/details.php?id=436",
  },
  {
    name: "Blue Frog Bar & Grill",
    address: "River North @ 676 N LaSalle Dr",
    specials: "$6 Specialty Cocktails",
    specials_url: "https://smalltabs.com/details.php?id=391",
    food_specials: "Half Price Appetizers (4-8pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=391",
  },
  {
    name: "Porter Kitchen & Deck",
    address: "West Loop @ 150 N Riverside Ave",
    specials:
      "$7 Moscow Mules (3:30-5:30pm), $8 Classic Margaritas (3:30-5:30pm), $9 Old Fashioneds (3:30-5:30pm), $9 Select Wine Glasses (3:30-5:30pm)",
    specials_url: "https://smalltabs.com/details.php?id=682",
  },
  {
    name: "Casati's Pizza Vino",
    address: "Lincoln Park @ 444 W Fullerton Pkwy",
    food_specials: "$10 & Under Bar Menu",
    food_specials_url: "https://smalltabs.com/details.php?id=703",
  },
  {
    name: "Dark Horse Tap & Grille",
    address: "Wrigleyville @ 3443 N Sheffield Ave",
    specials:
      "$5 Bomb Shots, $5 Stoli Vodka Cocktails, $4 Lagunitas Drafts, $3 Fireball Whiskey Shots",
    specials_url: "https://smalltabs.com/details.php?id=201",
  },
  {
    name: "Hash House a Go Go",
    address: "Near North Side @ 1212 N State St",
    food_specials: "$14.95 Fried or Roasted Chicken Dinner",
    food_specials_url: "https://smalltabs.com/details.php?id=600",
  },
  {
    name: "Templestowe Pub",
    address: "Irving Park @ 3135 W Montrose Ave",
    specials: "$3 Fireball Whiskey Shots, $3 Import Bottles",
    specials_url: "https://smalltabs.com/details.php?id=340",
  },
  {
    name: "Hopsmith Tavern",
    address: "Near North Side @ 15 W Division St",
    specials: "$6 Pabst Blue Ribbon & Jack Daniels Whiskey Shot Combo",
    specials_url: "https://smalltabs.com/details.php?id=607",
    food_specials: "Half Price Appetizers (4-6pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=607",
  },
  {
    name: "Will's Northwoods Inn",
    address: "Lakeview @ 3030 N Racine Ave",
    specials:
      "$4 Sierra Nevada Drafts, $3 Schiltz Tallboys, $2.50 Pabst Blue Ribbon, $3 Miller High Life Bottles",
    specials_url: "https://smalltabs.com/details.php?id=77",
    food_specials: "$12.95 All-You-Can-Eat Fish Fry",
    food_specials_url: "https://smalltabs.com/details.php?id=77",
  },
  {
    name: "Brownstone Tavern",
    address: "North Center @ 3937 N Lincoln Ave",
    specials:
      "$5 Stella Artois, $5 Jameson Whiskey Shots, $7 Absolut Vodka Mules",
    specials_url: "https://smalltabs.com/details.php?id=9",
  },
  {
    name: "The Bedford",
    address: "Wicker Park @ 1612 W Division St",
    specials: "$8 Draft Cocktails",
    specials_url: "https://smalltabs.com/details.php?id=416",
  },
  {
    name: "Fifolet",
    address: "Wicker Park @ 1942 W Division St",
    specials:
      "$4 Lagunitas Sumpin' Easy Drafts (5-9pm), $3 Jameson Whiskey Shots (5-9pm)",
    specials_url: "https://smalltabs.com/details.php?id=695",
    food_specials: "$9 Half Po'Boy & Soup Special (5-9pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=695",
  },
  {
    name: "The Monkey's Paw",
    address: "Lincoln Park @ 2524 N Southport Ave",
    specials:
      "$3 Rebel Yell Whiskey (4:30-6:30pm), $3 off All Drafts (4:30-6:30pm), $3 off All Wine Glasses (4:30-6:30pm)",
    specials_url: "https://smalltabs.com/details.php?id=453",
  },
  {
    name: "Edgewater Mexican Cafe",
    address: "Edgewater @ 1055 W Bryn Mawr Ave",
    specials: "$6 Wine Glasses, $6 Palomas, $6 House Margaritas (4-7pm)",
    specials_url: "https://smalltabs.com/details.php?id=711",
  },
  {
    name: "Devon Seafood Grill",
    address: "Near North Side @ 39 E Chicago Ave",
    food_specials:
      "$1 Oysters (4-7pm), $7.50 Appetizers (4-7pm, 9pm-Close), $2.50 Jumbo Shrimp Cocktail (4-7pm, 9pm-Close)",
    food_specials_url: "https://smalltabs.com/details.php?id=689",
  },
  {
    name: "G&L Fire Escape",
    address: "North Center @ 2157 W Grace St",
    specials: "$3 Powers Whiskey Shots, $4 Wells",
    specials_url: "https://smalltabs.com/details.php?id=533",
  },
  {
    name: "Rudy's Bar & Grille",
    address: "Loop @ 69 E Madison St",
    food_specials:
      "$11.95 Fish & Chips, $12.95 Salmon Burgers, Half Price Appetizers (3-5pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=380",
  },
  {
    name: "Kirkwood Bar & Grill",
    address: "Lakeview @ 2934 N Sheffield Ave",
    specials: "$4 All Ciders, $5 Jello Shots",
    specials_url: "https://smalltabs.com/details.php?id=13",
  },
  {
    name: "Streeter's Tavern",
    address: "Near North Side @ 50 E Chicago Ave",
    specials: "$5 Jim Beam Bourbon",
    specials_url: "https://smalltabs.com/details.php?id=72",
  },
  {
    name: "Butcher's Tap",
    address: "Lakeview @ 3553 N Southport Ave",
    specials:
      "$5 Tullamore Dew Whiskey, Half Price Tito's Vodka Cocktails (4-6pm)",
    specials_url: "https://smalltabs.com/details.php?id=624",
  },
  {
    name: "Gideon Welles",
    address: "Lincoln Square @ 4500 N Lincoln Ave",
    specials: "$5 Select Craft Drafts",
    specials_url: "https://smalltabs.com/details.php?id=603",
  },
  {
    name: "Holiday Club",
    address: "Uptown @ 4000 N Sheridan Rd",
    specials:
      "$5 Svedka Vodka Drinks, $5 Grape, Cherry, & Blueberry Bombs, $4.50 Pabst Blue Ribbon 24oz Tallboys",
    specials_url: "https://smalltabs.com/details.php?id=179",
    food_specials: "$5 Chicken Sandwich",
    food_specials_url: "https://smalltabs.com/details.php?id=179",
  },
  {
    name: "Original Mother's",
    address: "Near North Side @ 26 W Division St",
    specials:
      "$6 Pabst Blue Ribbon Tallboys, $5 Bacardi Rum, $5 Wolf Berry & Black Razz Bombs, $5 Sailor Jerry Rum",
    specials_url: "https://smalltabs.com/details.php?id=69",
  },
  {
    name: "Compass Bar",
    address: "Lincoln Park @ 433 W Diversey Pkwy",
    food_specials: "Half Price Pizza from 4-6pm",
    food_specials_url: "https://smalltabs.com/details.php?id=586",
  },
  {
    name: "Irish Eyes",
    address: "Lincoln Park @ 2519 N Lincoln Ave",
    specials: "$3.50 Pabst Blue Ribbon Tallboys",
    specials_url: "https://smalltabs.com/details.php?id=339",
  },
  {
    name: "Four Treys Tavern",
    address: "Roscoe Village @ 3333 N Damen Ave",
    specials:
      "$5.50 Bombs, $3.75 Well Drinks, $2.50 Pabst Blue Ribbon, $3.50 Old Style Tallboys, $4 Jameson Whiskey Shots, $3 Domestic Bottles, $4-4.50 Import Bottles",
    specials_url: "https://smalltabs.com/details.php?id=78",
  },
  {
    name: "Riverview Tavern",
    address: "Roscoe Village @ 1958 W Roscoe St",
    specials:
      "$1 off Ciders, $1 off Wine Glasses, $5 Brewery-of-the-Month Drafts",
    specials_url: "https://smalltabs.com/details.php?id=220",
  },
  {
    name: "The Fifty/50",
    address: "Wicker Park @ 2047 W Division St",
    specials:
      "$6 Tito's Vodka Drinks, $5 Ketel One Vodka Drinks (3-6pm), Half Price Craft Beers (3-6pm), $5 Wine Glasses (3-6pm)",
    specials_url: "https://smalltabs.com/details.php?id=127",
    food_specials: "Half Price Appetizers (3-6pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=127",
  },
  {
    name: "Fremont",
    address: "River North @ 15 W Illinois St",
    specials:
      "$3 Beers (5-9pm), $4 Mixed Drinks (5-9pm), $5 Mule Bar (5-9pm), $5 Wine Glasses (5-9pm), $6 Tito's Vodka Cocktails (5-9pm)",
    specials_url: "https://smalltabs.com/details.php?id=658",
  },
  {
    name: "Woodhaven Bar & Kitchen",
    address: "River North @ 712 N Clark St",
    specials: "$7 Pabst Blue Ribbon & Jameson Whiskey Boilermakers (5-8pm)",
    specials_url: "https://smalltabs.com/details.php?id=331",
  },
  {
    name: "Blackfinn Ameripub",
    address: "River North @ 65 W Kinzie St",
    specials: "$5 Bacardi Cocktails",
    specials_url: "https://smalltabs.com/details.php?id=543",
  },
  {
    name: "Redmond's Ale House",
    address: "Wrigleyville @ 3358 N Sheffield Ave",
    specials:
      "$3 Tallboys, $4 Fireball Whiskey Shots, $6 Jameson Whiskey Shots",
    specials_url: "https://smalltabs.com/details.php?id=20",
  },
  {
    name: "Galvin's Public House",
    address: "Portage Park @ 5901 W Lawrence Ave",
    specials: "$4 Blue Moon Drafts",
    specials_url: "https://smalltabs.com/details.php?id=604",
    food_specials: "$11 All-You-Can-Eat Fish & Chips",
    food_specials_url: "https://smalltabs.com/details.php?id=604",
  },
  {
    name: "Finley Dunne's Tavern",
    address: "Lakeview @ 3458 N Lincoln Ave",
    specials: "$5 UV Vodka Bombs, $2 Miller High Life Drafts",
    specials_url: "https://smalltabs.com/details.php?id=5",
    food_specials: "$12 All-You-Can-Eat Blue Moon Fish Fry",
    food_specials_url: "https://smalltabs.com/details.php?id=5",
  },
  {
    name: "Four Star Lounge",
    address: "Lincoln Park @ 2666 N Halsted St",
    specials:
      "$4 Jack Daniels Whiskey, Jim Beam Bourbon, Bacardi Rum, Jose Cuervo Tequila, Ketel One Vodka, & Beefeater Gin Well Drinks (5-8pm), $4 Revolution Fist City, Revolution Anti-Hero, Goose Island 312, Revolution Eugene Porter, and Blue Moon (5-8pm), $5 House Cabernet & Chardonnay Wine Glasses (5-8pm), $2 Malort Shots (5-8pm), $2 Fireball Whiskey Shots (5-8pm), $3 Jameson Whiskey Shots (5-8pm), $3 Jim Beam Bourbon Shots (5-8pm), $5 Vodka or Gin Martinis (5-8pm)",
    specials_url: "https://smalltabs.com/details.php?id=608",
    food_specials: "$5 Shrimp Cocktail (5-8pm), $5 Hummus Platter (5-8pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=608",
  },
  {
    name: "Ravenswood Station Bar & Grill",
    address: "Lincoln Square @ 4709 N Damen Ave",
    specials:
      "$7 Call Vodka Mixed Drinks, $6.50 Guinness 20oz Drafts, $5.50 Fat Tire Drafts",
    specials_url: "https://smalltabs.com/details.php?id=100",
    food_specials: "$6.75 Fish & Chips, $7 Grilled Fish Tacos",
    food_specials_url: "https://smalltabs.com/details.php?id=100",
  },
  {
    name: "Park Tavern",
    address: "West Loop @ 1645 W Jackson Blvd",
    specials:
      "$5 Jameson Whiskey, $5 Select Wine Glasses, $3 Tallboy Cans (3-5pm), $4 Well Drinks (3-5pm), $4 House Wine Glasses (3-5pm), Half Price 16oz Drafts (3-5pm)",
    specials_url: "https://smalltabs.com/details.php?id=494",
    food_specials: "$15 All-You-Can-Eat Fish Fry (4pm-Close)",
    food_specials_url: "https://smalltabs.com/details.php?id=494",
  },
  {
    name: "Lokal Lincoln Park",
    address: "Lincoln Park @ 2500 N Ashland Ave",
    food_specials: "$10 Mussels & Truffle Fries",
    food_specials_url: "https://smalltabs.com/details.php?id=614",
  },
  {
    name: "Derby Bar & Grill",
    address: "Lincoln Park @ 1224 W Webster Ave",
    specials:
      "$20 Fish Bowls, $7 Lagunitas Fatpours, $5 Pabst Blue Ribbon Can & Select Shot Combo",
    specials_url: "https://smalltabs.com/details.php?id=458",
    food_specials: "Half Price Appetizers (4-6pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=458",
  },
  {
    name: "Deleece Restaurant",
    address: "Lakeview @ 3747 N Southport Ave",
    food_specials: "Brunch served from 9am-2:30pm",
    food_specials_url: "https://smalltabs.com/details.php?id=295",
  },
  {
    name: "Spyners Pub",
    address: "Lincoln Square @ 4623 N Western Ave",
    specials:
      "$3.50 Stella Artois, $3.50 Jose Cuervo Gold Tequila Shots, $3.50 Dooley's Shots",
    specials_url: "https://smalltabs.com/details.php?id=97",
  },
  {
    name: "Cary's Lounge",
    address: "West Rogers Park @ 2251 W Devon Ave",
    specials:
      "$2.50 Pabst Blue Ribbon & Schiltz Cans, $3 Old Style Drafts, $3 Budweiser, Bud Light, Coors Light, Miller Lite, & Miller High Life",
    specials_url: "https://smalltabs.com/details.php?id=287",
  },
  {
    name: "Leader Bar",
    address: "Irving Park @ 3000 W Irving Park Rd",
    specials:
      "$15 Budweiser, Bud Light, Miller Lite, & Miller High Life Buckets, $18 Amstel Light, Heineken, Heineken Light, Tecate, & Newcastle Brown Ale Buckets",
    specials_url: "https://smalltabs.com/details.php?id=381",
    food_specials: "Half Price Appetizers from 4-7pm",
    food_specials_url: "https://smalltabs.com/details.php?id=381",
  },
  {
    name: "Foundation Room at House of Blues",
    address: "River North @ 329 N Dearborn St",
    specials:
      "$6 Select Wine Glasses (5-7pm), $5 Well Drinks (5-7pm), $4 Domestic Beers (5-7pm)",
    specials_url: "https://smalltabs.com/details.php?id=622",
  },
  {
    name: "Northwoods Lounge",
    address: "Norwood Park @ 5342 N Cumberland Ave",
    specials: "$3 Fireball Shots, $1 House Shots",
    specials_url: "https://smalltabs.com/details.php?id=551",
  },
  {
    name: "The Temple Bar",
    address: "Lakeview @ 3001 N Ashland Ave",
    specials: "$4 Lagunitas Drafts",
    specials_url: "https://smalltabs.com/details.php?id=305",
    food_specials: "$8.25 Fish & Chips",
    food_specials_url: "https://smalltabs.com/details.php?id=305",
  },
  {
    name: "Atmosphere",
    address: "Andersonville @ 5355 N Clark St",
    specials: "$5 Fireball Whiskey Shots",
    specials_url: "https://smalltabs.com/details.php?id=96",
  },
  {
    name: "Wabash Tap",
    address: "South Loop @ 1233 S Wabash Ave",
    specials: "$4 Drafts (4-6pm), $14 Buckets (4-6pm)",
    specials_url: "https://smalltabs.com/details.php?id=142",
  },
  {
    name: "The Hampton Social",
    address: "River North @ 353 W Hubbard St",
    specials: "Half Price Specialty Cocktails (4-6pm)",
    specials_url: "https://smalltabs.com/details.php?id=636",
    food_specials: "Half Price Pizzas (4-6pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=636",
  },
  {
    name: "O'Shaughnessy's Public House",
    address: "Lincoln Square @ 4557 N Ravenswood Ave",
    specials: "$5 Founders All-Day IPA",
    specials_url: "https://smalltabs.com/details.php?id=299",
    food_specials: "$10.95 All-You-Can-Eat Fish & Chips, $12.50 Fish Tacos",
    food_specials_url: "https://smalltabs.com/details.php?id=299",
  },
  {
    name: "Gio's Bar & Grill",
    address: "Lincoln Square @ 4857 N Damen Ave",
    specials: "$4 Vodka Cocktails, $4 5 Rabbit Drafts, $3.50 Fireball Shots",
    specials_url: "https://smalltabs.com/details.php?id=374",
  },
  {
    name: "Edison Park Inn",
    address: "Edison Park @ 6715 N Olmsted Ave",
    specials: "$16 Domestic Bottles, $2 Shot of the Day",
    specials_url: "https://smalltabs.com/details.php?id=190",
  },
  {
    name: "Brando's Speakeasy",
    address: "Loop @ 343 S Dearborn St",
    specials:
      "$3 Bud Light, $3 Old Style, Pabst Blue Ribbon, & Miller High Life Tallboys",
    specials_url: "https://smalltabs.com/details.php?id=276",
  },
  {
    name: "Mr. Brown's Lounge West Town",
    address: "Ukrainian Village @ 2301 W Chicago Ave",
    specials:
      "$7 Rum Punch (3-6pm), $4 Jameson Whiskey Shots (3-6pm), $4 Red Stripe Bottles (3-6pm)",
    specials_url: "https://smalltabs.com/details.php?id=363",
  },
  {
    name: "City Pool Hall",
    address: "West Loop @ 640 W Hubbard St",
    specials: "$4 Modelo & Corona",
    specials_url: "https://smalltabs.com/details.php?id=561",
  },
  {
    name: "Renaldi's After Dark",
    address: "Lakeview @ 2831 N Broadway St",
    specials: "$4 Guinness Bottles",
    specials_url: "https://smalltabs.com/details.php?id=504",
  },
  {
    name: "Lizzie McNeill's Irish Pub",
    address: "Streeterville @ 400 N McClurg St",
    specials:
      "$5 Sam Adams Oktoberfest, $6 Seagrams 7 Whiskey Drinks, $5 Crown Apple Shots",
    specials_url: "https://smalltabs.com/details.php?id=477",
  },
  {
    name: "Gannon's Pub",
    address: "North Center @ 4264 N Lincoln Ave",
    specials: "$4 Harp Drafts",
    specials_url: "https://smalltabs.com/details.php?id=16",
    food_specials: "$7.75 Fish & Chips",
    food_specials_url: "https://smalltabs.com/details.php?id=16",
  },
  {
    name: "Innjoy (Logan Square)",
    address: "Logan Square @ 2200 N Milwaukee Ave",
    specials:
      "$7 Martinis, $5 Pabst Blue Ribbon Tallboy & Hipster Whiskey Shot Combo",
    specials_url: "https://smalltabs.com/details.php?id=688",
    food_specials: "$7 Bruschette",
    food_specials_url: "https://smalltabs.com/details.php?id=688",
  },
  {
    name: "The Call",
    address: "Andersonville @ 1547 W Bryn Mawr Ave",
    specials: "$2.50 Well Cocktails (7-9pm), $3 Domestic Beers (7-9pm)",
    specials_url: "https://smalltabs.com/details.php?id=343",
  },
  {
    name: "GRK Bar",
    address: "Loop @ 400 S Wells St",
    specials: "$5 Shots, $1 off Select Drafts",
    specials_url: "https://smalltabs.com/details.php?id=621",
  },
  {
    name: "The Graystone Tavern",
    address: "Lakeview @ 3441 N Sheffield Ave",
    specials: "$5 Jack Daniels Fire Shots",
    specials_url: "https://smalltabs.com/details.php?id=653",
  },
  {
    name: "Kelsey's",
    address: "Lincoln Park @ 2265 N Lincoln Ave",
    specials: "$3.50 Curious Travelers, $3.50 Sam Adams, $5 Dublin Donkeys",
    specials_url: "https://smalltabs.com/details.php?id=154",
  },
  {
    name: "Leona's Hyde Park",
    address: "Hyde Park @ 1236 E 53rd St",
    specials:
      "$5 Cocktails (6-9pm), $5 Frozen Margaritas (6-9pm), $5 Rocks Margaritas (6-9pm), $5 Long Island Iced Teas (6-9pm)",
    specials_url: "https://smalltabs.com/details.php?id=666",
    food_specials: "$3 off Wing Dings",
    food_specials_url: "https://smalltabs.com/details.php?id=666",
  },
  {
    name: "Boiler Room",
    address: "Logan Square @ 2210 N California Ave",
    food_specials:
      "$10 PB&J Special: Pizza Slice, Pabst Blue Ribbon Tallboy, & Jameson Whiskey Shot Combo",
    food_specials_url: "https://smalltabs.com/details.php?id=333",
  },
  {
    name: "Legno Italian Gastropub",
    address: "Portage Park @ 4250 N Central Ave",
    specials:
      "$4 Select Vandermill Ciders, $2 Domestic Bottles (3-6pm), $3 Malort Shots (3-6pm), $5 Tito's Vodka Mixed Drinks (3-6pm), $6 White or Red Sangria Glasses (3-6pm)",
    specials_url: "https://smalltabs.com/details.php?id=590",
    food_specials:
      "Complimentary House Made Chips (3-6pm), $4 BBQ Pork Sliders (2) (3-6pm), $4 Jalapeno Poppers (2) (3-6pm), $5 Buffalo Wings (6) (3-6pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=590",
  },
  {
    name: "Leona's Stony Island",
    address: "Calumet Heights @ 9157 S Stony Island Ave",
    specials:
      "$5 Cocktails (6-9pm), $5 Frozen Margaritas (6-9pm), $5 Rocks Margaritas (6-9pm), $5 Long Island Iced Teas (6-9pm)",
    specials_url: "https://smalltabs.com/details.php?id=669",
    food_specials: "$3 off Wing Dings",
    food_specials_url: "https://smalltabs.com/details.php?id=669",
  },
  {
    name: "Raw Bar & Grill",
    address: "Wrigleyville @ 3720 N Clark St",
    specials:
      "$2.50 Domestic Beers (4-7pm), $3.50 Craft Drafts (4-7pm), $3 Well Mixers (4-7pm)",
    specials_url: "https://smalltabs.com/details.php?id=205",
    food_specials: "Half Price Appetizers",
    food_specials_url: "https://smalltabs.com/details.php?id=205",
  },
  {
    name: "The Land on Lincoln",
    address: "Lakeview @ 3032 N Lincoln Ave",
    specials:
      "$5 Vodka, $5 Bourbon, $2 Mystery Beer, $4 Drafts (4-7pm), $4 Wine Glasses (4-7pm)",
    specials_url: "https://smalltabs.com/details.php?id=165",
    food_specials:
      "Half Price Nonna's Meatball Sandwich, Half Price Snacks (4-7pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=165",
  },
  {
    name: "Third Rail Tavern",
    address: "West Loop @ 1133 W Madison St",
    specials:
      "$5 Goose Island, Three Floyds, & Bell's Brewery Drafts (5-9pm), $8 Bulleit Bourbon or Rye Manhattans (5-9pm), $8 Bulleit Bourbon or Rye Old Fashioneds (5-9pm)",
    specials_url: "https://smalltabs.com/details.php?id=303",
  },
  {
    name: "Rockit Burger Bar",
    address: "Wrigleyville @ 3700 N Clark St",
    specials: "$3 Select Beers, $5 Evan Williams Whiskey Shots",
    specials_url: "https://smalltabs.com/details.php?id=233",
  },
  {
    name: "Emerald Loop",
    address: "Loop @ 216 N Wabash Ave",
    specials: "$4.75 Beer of the Month",
    specials_url: "https://smalltabs.com/details.php?id=42",
    food_specials: "$14 Lobster Mac & Cheese, $12 Cajun Tilapia",
    food_specials_url: "https://smalltabs.com/details.php?id=42",
  },
  {
    name: "Porkchop Hyde Park",
    address: "Hyde Park @ 1516 E Harper Ct",
    specials: "Half Price Drinks (10pm-Close)",
    specials_url: "https://smalltabs.com/details.php?id=684",
    food_specials: "Half Price Appetizers (10pm-Close)",
    food_specials_url: "https://smalltabs.com/details.php?id=684",
  },
  {
    name: "Jefferson Tap & Grille",
    address: "Near West Side @ 325 N Jefferson St",
    specials:
      "$6 Sam Adams Boston Lager & Seasonal Jumbo Mugs, $5 Wine Glasses",
    specials_url: "https://smalltabs.com/details.php?id=302",
  },
  {
    name: "J.P. Burke's Patio & Tap",
    address: "Lakeview @ 2913 N Lincoln Ave",
    specials:
      "$5 Guinness & Carlsberg Drafts, $5 Jack Daniels Whiskey Drinks, $5 Captain Morgan Rum Drinks",
    specials_url: "https://smalltabs.com/details.php?id=532",
  },
  {
    name: "State Restaurant",
    address: "Lincoln Park @ 935 W Webster Ave",
    food_specials:
      "$6.99 Food Menu (with drink purchase, some exclusions apply)",
    food_specials_url: "https://smalltabs.com/details.php?id=229",
  },
  {
    name: "J & M Tap",
    address: "Ukrainian Village @ 957 N Leavitt St",
    specials:
      "$2 Pabst Blue Ribbon Drafts, $2.25 Point Drafts, $3 Domestic Bottles, $3 Pabst Blue Ribbon & Schiltz Tallboys, $4 Stella Artois Drafts, $4 Import & Craft Bottles, $4 Jameson Whiskey Shots, $4 Jim Beam Bourbon & Rye Shots, $5 Makers Mark Bourbon Drinks, $5 Stoli Vodka Drinks, $5 Crown Royal Whiskey Drinks",
    specials_url: "https://smalltabs.com/details.php?id=540",
  },
  {
    name: "Hawkeye's Bar & Grill",
    address: "University Village @ 1458 W Taylor St",
    specials: "$10 Domestic Bottles",
    specials_url: "https://smalltabs.com/details.php?id=30",
    food_specials: "$2 Pita Pizzas (after 3pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=30",
  },
  {
    name: "Takito Kitchen",
    address: "Wicker Park @ 2013 W Division St",
    food_specials:
      "Brunch Served from 11am-3pm, $12 Tacos, Soup & Salad Lunch Special (from 11am-3pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=579",
  },
  {
    name: "Vintage Lounge",
    address: "University Village @ 1449 W Taylor St",
    specials: "$5 Martinis",
    specials_url: "https://smalltabs.com/details.php?id=650",
    food_specials: "Half Price Select Appetizers",
    food_specials_url: "https://smalltabs.com/details.php?id=650",
  },
  {
    name: "High Noon Saloon",
    address: "Wicker Park @ 1560 N Milwaukee Ave",
    specials: "$5 Frozen Margaritas, $5 Old Forester Bourbon Shots",
    specials_url: "https://smalltabs.com/details.php?id=601",
  },
  {
    name: "Bird's Nest",
    address: "Lincoln Park @ 2500 N Southport Ave",
    specials: "$4 Blue Line Pilsner, $5 Svedka Vodka Bombs, $5 Red Bull Bombs",
    specials_url: "https://smalltabs.com/details.php?id=6",
  },
  {
    name: "Tripoli Tap",
    address: "Lincoln Park @ 1147 W Armitage Ave",
    specials: "$3 Coors Light Bottles",
    specials_url: "https://smalltabs.com/details.php?id=450",
  },
  {
    name: "Mahoney's Pub & Grille",
    address: "Near North Side @ 551 N Odgen Ave",
    specials: "$5 Jameson Whiskey",
    specials_url: "https://smalltabs.com/details.php?id=65",
  },
  {
    name: "Gaslight Bar & Grille",
    address: "Lincoln Park @ 2450 N Clark St",
    specials:
      "$15 Domestic Buckets, $5 Tullamore Dew Whiskey Shots, $5 Trop Bombs, $3.50 College Beer of the Day",
    specials_url: "https://smalltabs.com/details.php?id=358",
    food_specials:
      "Free Burgers (with beverage purchase, limited quantities), Half Price Appetizers (5-7pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=358",
  },
  {
    name: "Mrs. Murphy & Sons Irish Bistro",
    address: "North Center @ 3905 N Lincoln Ave",
    specials:
      "$5 Specialty Irish Cocktails (4:30-6:30pm), $5 Irish Beers (4:30-6:30pm)",
    specials_url: "https://smalltabs.com/details.php?id=651",
    food_specials: "$5 Appetizer Bites (4:30-6:30pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=651",
  },
  {
    name: "The Atlantic Bar & Grill",
    address: "Lincoln Square @ 5062 N Lincoln Ave",
    specials: "$4 Wine Spritzers, $4 Stoli Vodka Drinks",
    specials_url: "https://smalltabs.com/details.php?id=101",
    food_specials: "$4 Crostini Menu",
    food_specials_url: "https://smalltabs.com/details.php?id=101",
  },
  {
    name: "Twisted Shamrock",
    address: "Garfield Ridge @ 6462 S Central Ave",
    specials:
      "$3.50 Amstel Light, Heineken, or Shiner Bock, $3 Pinnacle Vodka O-Bombs",
    specials_url: "https://smalltabs.com/details.php?id=704",
  },
  {
    name: "Bulldog Ale House (Loyola)",
    address: "Rogers Park @ 6606 N Sheridan Rd",
    specials: "$5 Jameson Whiskey, $5 Guinness, $6 Irish Car Bomb",
    specials_url: "https://smalltabs.com/details.php?id=663",
    food_specials: "$10.99 All-You-Can-Eat Fish Fry",
    food_specials_url: "https://smalltabs.com/details.php?id=663",
  },
  {
    name: "Emerald Isle",
    address: "Edison Park @ 6686 N Northwest Hwy",
    specials:
      "$18 Domestic Buckets, $5 Long Island Iced Teas, $4 Bombs, $3 Fireball Whiskey Shots",
    specials_url: "https://smalltabs.com/details.php?id=288",
    food_specials: "$3 Half Dozen Wings (any style)",
    food_specials_url: "https://smalltabs.com/details.php?id=288",
  },
  {
    name: "Simone's Bar",
    address: "Pilsen @ 960 W 18th St",
    food_specials: "$8 Half Pound Burger & Pabst Blue Ribbon Tallboy Combo",
    food_specials_url: "https://smalltabs.com/details.php?id=107",
  },
  {
    name: "The Beetle Bar & Grill",
    address: "Humboldt Park @ 2532 W Chicago Ave",
    specials: "$4 Curious Traveler",
    specials_url: "https://smalltabs.com/details.php?id=2",
    food_specials: "$8 Fish Fry",
    food_specials_url: "https://smalltabs.com/details.php?id=2",
  },
  {
    name: "Vines on Clark",
    address: "Wrigleyville @ 3554 N Clark St",
    specials: "$5 You-Call-Its",
    specials_url: "https://smalltabs.com/details.php?id=33",
  },
  {
    name: "Devour 312",
    address: "Lincoln Park @ 1450 W Webster Ave",
    specials:
      "$5 Drafts (3-6pm), $5 Captain Morgan Rum, Tito's Vodka, Milagro Tequila, Fireball, Jameson, & Jack Daniels Whiskey Shots (3-6pm)",
    specials_url: "https://smalltabs.com/details.php?id=690",
  },
  {
    name: "Pizzeria Serio",
    address: "Lakeview @ 1708 N Belmont Ave",
    specials: "$2 Pabst Blue Ribbon Tallboys, $8 Beer Flights",
    specials_url: "https://smalltabs.com/details.php?id=385",
  },
  {
    name: "The Roost Carolina Kitchen",
    address: "North Center @ 1467 W Irving Park Rd",
    specials: "$5 Boilermakers (9-11pm), 25% off Signature Cocktails (9-11pm)",
    specials_url: "https://smalltabs.com/details.php?id=672",
  },
  {
    name: "Yak-Zies Wrigleyville",
    address: "Wrigleyville @ 3710 N Clark St",
    specials: "$5 Fat Tire, $5 Fireball Whiskey",
    specials_url: "https://smalltabs.com/details.php?id=149",
    food_specials: "$5 Fish Sandwiches",
    food_specials_url: "https://smalltabs.com/details.php?id=149",
  },
  {
    name: "Easy Bar",
    address: "Wicker Park @ 1944 W Division St",
    specials: "$5 Jameson Shots",
    specials_url: "https://smalltabs.com/details.php?id=215",
  },
  {
    name: "The Scout",
    address: "South Loop @ 1301 S Wabash Ave",
    specials: "$3 Sam Adams Boston Lager Drafts",
    specials_url: "https://smalltabs.com/details.php?id=451",
  },
  {
    name: "Weather Mark Tavern",
    address: "South Loop @ 1503 S Michigan Ave",
    specials: "$2 off All Drafts (3-6pm), $5 Lagunitas Beers",
    specials_url: "https://smalltabs.com/details.php?id=143",
    food_specials: "$12.50 All-You-Can-Eat Fish Fry",
    food_specials_url: "https://smalltabs.com/details.php?id=143",
  },
  {
    name: "New Line Tavern",
    address: "West Loop @ 201 N Clinton St",
    specials: "$5 Goose Island Beers, $8 Signature Cocktails",
    specials_url: "https://smalltabs.com/details.php?id=301",
  },
  {
    name: "Cellars Bar & Grill",
    address: "Edgewater @ 5900 N Broadway St",
    specials: "$5 Sobieski Vodka Martinis (5-10pm)",
    specials_url: "https://smalltabs.com/details.php?id=620",
  },
  {
    name: "Duke of Perth",
    address: "Lakeview @ 2913 N Clark St",
    food_specials: "$11.95 All-You-Can-Eat Fish & Chips",
    food_specials_url: "https://smalltabs.com/details.php?id=92",
  },
  {
    name: "The Grafton",
    address: "Lincoln Square @ 4530 N Lincoln Ave",
    specials: "$5 Berghoff Reppin' Red Drafts",
    specials_url: "https://smalltabs.com/details.php?id=260",
    food_specials: "$11 The Labor Day Burger",
    food_specials_url: "https://smalltabs.com/details.php?id=260",
  },
  {
    name: "Subterranean Lounge",
    address: "Wicker Park @ 2011 W North Ave",
    specials: "$5 UV Vodka Cocktails",
    specials_url: "https://smalltabs.com/details.php?id=56",
  },
  {
    name: "Reed's Local",
    address: "Avondale @ 3017 W Belmont Ave",
    specials: "$4 Old Crow Whiskey & Hamm's Can Combo, $2 Hamm's Cans",
    specials_url: "https://smalltabs.com/details.php?id=585",
  },
  {
    name: "John Barleycorn River North",
    address: "River North @ 149 W Kinzie St",
    specials: "$5 Budweiser, Bud Light, Coors Light, & Miller Lite Bottles",
    specials_url: "https://smalltabs.com/details.php?id=491",
  },
  {
    name: "Kincade's Bar & Grill",
    address: "Lincoln Park @ 950 W Armitage Ave",
    specials:
      "$4 Draft of the Day, $6 Makers Mark Bourbon Cocktails, $7 Pabst Blue Ribbon & Jameson Whiskey Shot Combo",
    specials_url: "https://smalltabs.com/details.php?id=153",
  },
  {
    name: "Leona's Rogers Park",
    address: "Rogers Park @ 6935 N Sheridan Ave",
    specials:
      "$5 Cocktails (6-9pm), $5 Frozen Margaritas (6-9pm), $5 Rocks Margaritas (6-9pm), $5 Long Island Iced Teas (6-9pm)",
    specials_url: "https://smalltabs.com/details.php?id=668",
    food_specials: "$3 off Wing Dings",
    food_specials_url: "https://smalltabs.com/details.php?id=668",
  },
  {
    name: "Crown Liquors",
    address: "Logan Square @ 2821 N Milwaukee Ave",
    specials: "$5 Craft Beers, $7 Cocktails",
    specials_url: "https://smalltabs.com/details.php?id=591",
  },
  {
    name: "Tai's Til 4",
    address: "Lakeview @ 3611 N Ashland Ave",
    specials: "$7 Flagship Bombs",
    specials_url: "https://smalltabs.com/details.php?id=549",
  },
  {
    name: "Bar Takito",
    address: "West Loop @ 201 N Morgan St",
  },
  {
    name: "Country Club Bar",
    address: "Wrigleyville @ 3462 N Clark St",
    specials:
      "$6 Tito's Vodka Cocktails, $4 Revolution Anti-Hero, $3 Shiner Premium",
    specials_url: "https://smalltabs.com/details.php?id=207",
    food_specials: "Half Price Appetizers",
    food_specials_url: "https://smalltabs.com/details.php?id=207",
  },
  {
    name: "Alice's Lounge",
    address: "Avondale @ 3556 W Belmont Ave",
  },
  {
    name: "Jerk Modern Jamaican Grill",
    address: "Noble Square @ 811 W Chicago Ave",
    specials: "$3 Mystery Beer (4-7pm), $7 Select Cocktails (4-7pm)",
    specials_url: "https://smalltabs.com/details.php?id=634",
  },
  {
    name: "Brickhouse Tavern",
    address: "Wrigleyville @ 3647 N Clark St",
    specials: "$5 You-Call-It's",
    specials_url: "https://smalltabs.com/details.php?id=681",
    food_specials: "Half Price Appetizers (after 3pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=681",
  },
  {
    name: "Duffy's Tavern",
    address: "Lincoln Park @ 422 W Diversey Ave",
    specials:
      "$1 Miller Lite & Coors Light Bottles (5-7pm), $2 Well Drinks (5-7pm), $3 Fireball Whiskey Shots (5-7pm), $4 Wine Glasses (5-7pm)",
    specials_url: "https://smalltabs.com/details.php?id=23",
  },
  {
    name: "Maxbar",
    address: "Lincoln Park @ 2247 N Lincoln Ave",
    specials: "$2 Fireball Whiskey Shots, $100 Fireball Whiskey Bottles",
    specials_url: "https://smalltabs.com/details.php?id=252",
  },
  {
    name: "Taco Joint Lincoln Park",
    address: "Lincoln Park @ 1969 N Halsted St",
    specials: "$5 Modelo Especial Can & Olmeca Tequila Blanco Shot Combo",
    specials_url: "https://smalltabs.com/details.php?id=541",
  },
  {
    name: "Flagship Tavern & Grill",
    address: "Lakeview @ 1622 W Belmont Ave",
    specials: "$15 Domestic Buckets",
    specials_url: "https://smalltabs.com/details.php?id=552",
  },
  {
    name: "Bulldog Ale House (South Loop)",
    address: "South Loop @ 901 S State St",
    specials: "$5 Jameson Whiskey, $5 Guinness, $6 Irish Car Bombs",
    specials_url: "https://smalltabs.com/details.php?id=686",
    food_specials: "$10.99 All-You-Can-Eat Fish Fry",
    food_specials_url: "https://smalltabs.com/details.php?id=686",
  },
  {
    name: "Leadway Bar & Grill",
    address: "Lincoln Square @ 5223 N Damen Ave",
    specials:
      "$3 Point & Pabst Blue Ribbon Bottles, $3.50 Budweiser, Bud Light, Miller Genuine Draft, Miller Lite, Miller High Life, & Old Style Bottles",
    specials_url: "https://smalltabs.com/details.php?id=375",
  },
  {
    name: "Moe's Tavern",
    address: "Avondale @ 2937 N Milwaukee Ave",
    specials:
      "$3 Pabst Blue Ribbon Drafts, $3 Malort Shots, $3 Zacharias Harris Bourbon, $3 Well Drinks, $3 Craft Beer of the Month",
    specials_url: "https://smalltabs.com/details.php?id=423",
  },
  {
    name: "Bobby Love's",
    address: "Lakeview @ 3729 N Halsted St",
    specials: "$6 Absolute Vodka Cocktails",
    specials_url: "https://smalltabs.com/details.php?id=337",
  },
  {
    name: "Waterhouse Tavern",
    address: "Lakeview @ 3407 N Paulina St",
    specials: "$4 Fireball Whiskey, $15 Bud Light Buckets",
    specials_url: "https://smalltabs.com/details.php?id=212",
  },
];

const thursday = [
  {
    name: "Butch McGuires",
    address: "Near North Side @ 20 W Division St",
    specials:
      "$5 Sam Adams Lager Drafts, $5 Sam Adams Seasonal Drafts, $4 Mystery Shots, Half Price Drafts (5-7pm), Half Price Mixed Drinks (5-7pm), Half Price Wine (5-7pm)",
    specials_url: "https://smalltabs.com/details.php?id=617",
  },
  {
    name: "20 East",
    address: "Near North Side @ 20 E Delaware St",
    specials:
      "$3 Domestic Beers (3-6pm), $4 Absolut Vodka Mixed Drinks (3-6pm), $5 Select Wine Glasses (3-6pm)",
    specials_url: "https://smalltabs.com/details.php?id=661",
    food_specials: "$7 Mini Burgers, $7 Hummus, $7 Truffle Fries, $7 Brussels",
    food_specials_url: "https://smalltabs.com/details.php?id=661",
  },
  {
    name: "Edison Park Inn",
    address: "Edison Park @ 6715 N Olmsted Ave",
    specials: "$16 Domestic Bottles, $2 Shot of the Day",
    specials_url: "https://smalltabs.com/details.php?id=190",
  },
  {
    name: "Gio's Bar & Grill",
    address: "Lincoln Square @ 4857 N Damen Ave",
    specials: "$4 Vodka Cocktails, $4 5 Rabbit Drafts, $3.50 Fireball Shots",
    specials_url: "https://smalltabs.com/details.php?id=374",
  },
  {
    name: "Four Shadows Tavern",
    address: "Lincoln Park @ 2758 N Ashland Ave",
    specials: "$5 Fireball Whiskey, $5 Stoli Vodka Flavors",
    specials_url: "https://smalltabs.com/details.php?id=29",
  },
  {
    name: "Edgewater Mexican Cafe",
    address: "Edgewater @ 1055 W Bryn Mawr Ave",
    specials: "$6 Wine Glasses, $6 Palomas, $6 House Margaritas (4-7pm)",
    specials_url: "https://smalltabs.com/details.php?id=711",
  },
  {
    name: "Waterhouse Tavern",
    address: "Lakeview @ 3407 N Paulina St",
    specials: "$4 Fireball Whiskey, $15 Bud Light Buckets",
    specials_url: "https://smalltabs.com/details.php?id=212",
  },
  {
    name: "Nick's Beer Garden",
    address: "Wicker Park @ 1516 N Milwaukee Ave",
    specials: "$1 off Draft Beers (4-7pm)",
    specials_url: "https://smalltabs.com/details.php?id=449",
  },
  {
    name: "Harrigan's Pub",
    address: "Lakeview @ 2816 N Halsted St",
    specials: "$6 Makers Mark Manhattans, $2 Rolling Rock Cans (12-6pm)",
    specials_url: "https://smalltabs.com/details.php?id=648",
  },
  {
    name: "John Barleycorn River North",
    address: "River North @ 149 W Kinzie St",
    specials: "$5 Budweiser, Bud Light, Coors Light, & Miller Lite Bottles",
    specials_url: "https://smalltabs.com/details.php?id=491",
  },
  {
    name: "Vintage Lounge",
    address: "University Village @ 1449 W Taylor St",
    specials: "$5 Martinis",
    specials_url: "https://smalltabs.com/details.php?id=650",
    food_specials: "Half Price Select Appetizers",
    food_specials_url: "https://smalltabs.com/details.php?id=650",
  },
  {
    name: "Tripoli Tap",
    address: "Lincoln Park @ 1147 W Armitage Ave",
    specials: "$3 Coors Light Bottles",
    specials_url: "https://smalltabs.com/details.php?id=450",
  },
  {
    name: "The Call",
    address: "Andersonville @ 1547 W Bryn Mawr Ave",
    specials: "$2.50 Well Cocktails (7-9pm), $3 Domestic Beers (7-9pm)",
    specials_url: "https://smalltabs.com/details.php?id=343",
  },
  {
    name: "AliveOne",
    address: "Lincoln Park @ 2683 N Halsted St",
    specials: "$5 Jameson Shots, $3 Pabst Blue Ribbon Bottles",
    specials_url: "https://smalltabs.com/details.php?id=214",
  },
  {
    name: "Leader Bar",
    address: "Irving Park @ 3000 W Irving Park Rd",
    specials:
      "$15 Budweiser, Bud Light, Miller Lite, & Miller High Life Buckets, $18 Amstel Light, Heineken, Heineken Light, Tecate, & Newcastle Brown Ale Buckets",
    specials_url: "https://smalltabs.com/details.php?id=381",
    food_specials: "Half Price Appetizers from 4-7pm",
    food_specials_url: "https://smalltabs.com/details.php?id=381",
  },
  {
    name: "Gaslight Bar & Grille",
    address: "Lincoln Park @ 2450 N Clark St",
    specials:
      "$15 Domestic Buckets, $5 Tullamore Dew Whiskey Shots, $5 Trop Bombs, $3.50 College Beer of the Day",
    specials_url: "https://smalltabs.com/details.php?id=358",
    food_specials:
      "Free Burgers (with beverage purchase, limited quantities), Half Price Appetizers (5-7pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=358",
  },
  {
    name: "Flagship Tavern & Grill",
    address: "Lakeview @ 1622 W Belmont Ave",
    specials: "$15 Domestic Buckets",
    specials_url: "https://smalltabs.com/details.php?id=552",
  },
  {
    name: "Compass Bar",
    address: "Lincoln Park @ 433 W Diversey Pkwy",
    food_specials: "Half Price Pizza from 4-6pm",
    food_specials_url: "https://smalltabs.com/details.php?id=586",
  },
  {
    name: "Harmony Grill",
    address: "Lakeview @ 3159 N Southport Ave",
    specials: "$4 Fireball Whiskey",
    specials_url: "https://smalltabs.com/details.php?id=242",
  },
  {
    name: "Monsignor Murphy's",
    address: "Lakeview @ 3019 N Broadway St",
    specials: "$3 Pabst Blue Ribbon Cans, $3 Miller Lite Cans",
    specials_url: "https://smalltabs.com/details.php?id=246",
  },
  {
    name: "Four Treys Tavern",
    address: "Roscoe Village @ 3333 N Damen Ave",
    specials:
      "$5.50 Bombs, $3.75 Well Drinks, $2.50 Pabst Blue Ribbon, $3.50 Old Style Tallboys, $4 Jameson Whiskey Shots, $3 Domestic Bottles, $4-4.50 Import Bottles",
    specials_url: "https://smalltabs.com/details.php?id=78",
  },
  {
    name: "Monty's Tap",
    address: "Near North Side @ 600 W Chicago Ave",
    specials:
      "$4 Select Beers (3:30-5:30pm), $6 Moscow Mules (3:30-5:30pm), $7 Sauvignon Blanc, Pinot Noir, & Rosé Glasses (3:30-5:30pm)",
    specials_url: "https://smalltabs.com/details.php?id=707",
  },
  {
    name: "Duke of Perth",
    address: "Lakeview @ 2913 N Clark St",
    food_specials: "$11.95 All-You-Can-Eat Fish & Chips",
    food_specials_url: "https://smalltabs.com/details.php?id=92",
  },
  {
    name: "Pitchfork Food & Saloon",
    address: "Irving Park @ 2922 W Irving Park Road",
    specials: "$4 Goose Island Green Line, $6 Moscow Mules",
    specials_url: "https://smalltabs.com/details.php?id=234",
  },
  {
    name: "Francois Frankie",
    address: "Loop @ 222 W Randolph St",
    specials:
      "$5 Drafts (3-6pm), $10 Red & White Wine Glasses (3-6pm), $10 Cocktail of the Week (3-6pm)",
    specials_url: "https://smalltabs.com/details.php?id=712",
  },
  {
    name: "Berlin",
    address: "Lakeview @ 954 W Belmont Ave",
    specials: "$3 Bacardi Rum Bombs, $5 Tropical Sex Pints, $6 Stoli Vodka",
    specials_url: "https://smalltabs.com/details.php?id=349",
  },
  {
    name: "Fatpour Tap Works",
    address: "Wicker Park @ 2005 W Division St",
    specials: "$5 Pabst Blue Ribbon & Select Shot Combo",
    specials_url: "https://smalltabs.com/details.php?id=459",
  },
  {
    name: "Deleece Restaurant",
    address: "Lakeview @ 3747 N Southport Ave",
    food_specials: "Brunch served from 9am-2:30pm",
    food_specials_url: "https://smalltabs.com/details.php?id=295",
  },
  {
    name: "Brickhouse Tavern",
    address: "Wrigleyville @ 3647 N Clark St",
    specials: "$5 You-Call-It's",
    specials_url: "https://smalltabs.com/details.php?id=681",
    food_specials: "Half Price Appetizers (after 3pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=681",
  },
  {
    name: "The Arrogant Frog Bar",
    address: "Lincoln Park @ 1365 W Fullerton Ave",
    specials:
      "$3 Bud Light Drafts, $4 Fireball Whiskey Shots, $4 Craft Beers, $5 Well Cocktails, $5 Malibu Rum Cocktails",
    specials_url: "https://smalltabs.com/details.php?id=240",
  },
  {
    name: "Reverie",
    address: "River North @ 414 N Orleans St",
    food_specials: "$10 Mix & Match Lunch",
    food_specials_url: "https://smalltabs.com/details.php?id=584",
  },
  {
    name: "Twisted Shamrock",
    address: "Garfield Ridge @ 6462 S Central Ave",
    specials:
      "$3.50 Amstel Light, Heineken, or Shiner Bock, $3 Pinnacle Vodka O-Bombs",
    specials_url: "https://smalltabs.com/details.php?id=704",
  },
  {
    name: "Davenport's Piano Bar",
    address: "Wicker Park @ 1383 N Milwaukee Ave",
  },
  {
    name: "Fifolet",
    address: "Wicker Park @ 1942 W Division St",
    specials:
      "$4 Lagunitas Sumpin' Easy Drafts (5-9pm), $3 Jameson Whiskey Shots (5-9pm)",
    specials_url: "https://smalltabs.com/details.php?id=695",
    food_specials: "$9 Half Po'Boy & Soup Special (5-9pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=695",
  },
  {
    name: "Hangge-Uppe",
    address: "Near North Side @ 16 W Division St",
    specials: "$5 Bacardi Flavored Rum",
    specials_url: "https://smalltabs.com/details.php?id=84",
  },
  {
    name: "Bourbon on Division",
    address: "Wicker Park @ 2050 W Division St",
    specials:
      "$5 Deep Eddy Rum Lemon Drops, $20 Domestic Buckets, $5 Tito's Vodka or Tullamore Dew Whiskey Mixed Drinks (9-11pm)",
    specials_url: "https://smalltabs.com/details.php?id=710",
  },
  {
    name: "Holiday Club",
    address: "Uptown @ 4000 N Sheridan Rd",
    specials:
      "$5 Svedka Vodka Drinks, $5 Grape, Cherry, & Blueberry Bombs, $4.50 Pabst Blue Ribbon 24oz Tallboys",
    specials_url: "https://smalltabs.com/details.php?id=179",
    food_specials: "$5 Chicken Sandwich",
    food_specials_url: "https://smalltabs.com/details.php?id=179",
  },
  {
    name: "Cellars Bar & Grill",
    address: "Edgewater @ 5900 N Broadway St",
    specials: "$5 Sobieski Vodka Martinis (5-10pm)",
    specials_url: "https://smalltabs.com/details.php?id=620",
  },
  {
    name: "The Rambler Kitchen & Tap",
    address: "North Center @ 4128 N Lincoln Ave",
    specials:
      "$4 Hard Seltzers, $4 Select Drafts, $5 Skrewball Whiskey, $5 Corazon Tequila, $3 Domestic Beers (4-7pm), $3 Select Whiskeys (4-7pm), $5 House Wine Glasses (4-7pm)",
    specials_url: "https://smalltabs.com/details.php?id=589",
    food_specials: "$7 Ground Beef or Chicken Nacho Platters",
    food_specials_url: "https://smalltabs.com/details.php?id=589",
  },
  {
    name: "Black Iron Tavern",
    address: "West Loop @ 401 N Milwaukee Ave",
    specials: "$5 Moscow Mules (3-6pm), $5 You-Call-It Well Drinks (3-6pm)",
    specials_url: "https://smalltabs.com/details.php?id=671",
    food_specials:
      "$18 Fish & Chips and Lagunitas Draft Combo, $2 Chipotle Carnitas, Chicken, or Fried Fish Tacos (3-6pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=671",
  },
  {
    name: "Original Mother's",
    address: "Near North Side @ 26 W Division St",
    specials:
      "$6 Pabst Blue Ribbon Tallboys, $5 Bacardi Rum, $5 Wolf Berry & Black Razz Bombs, $5 Sailor Jerry Rum",
    specials_url: "https://smalltabs.com/details.php?id=69",
  },
  {
    name: "Fremont",
    address: "River North @ 15 W Illinois St",
    specials:
      "$3 Beers (5-9pm), $4 Mixed Drinks (5-9pm), $5 Mule Bar (5-9pm), $5 Wine Glasses (5-9pm), $6 Tito's Vodka Cocktails (5-9pm)",
    specials_url: "https://smalltabs.com/details.php?id=658",
  },
  {
    name: "Higgins' Tavern",
    address: "Lakeview @ 3259 N Racine Ave",
    specials: "$11 Miller Lite & Coors Light Pitchers",
    specials_url: "https://smalltabs.com/details.php?id=17",
  },
  {
    name: "Templestowe Pub",
    address: "Irving Park @ 3135 W Montrose Ave",
    specials: "$3 Fireball Whiskey Shots, $3 Import Bottles",
    specials_url: "https://smalltabs.com/details.php?id=340",
  },
  {
    name: "6 Degrees",
    address: "Bucktown @ 1935 N Damen Ave",
    specials: "$5 Fireball Whiskey",
    specials_url: "https://smalltabs.com/details.php?id=225",
  },
  {
    name: "Small Bar Logan Square",
    address: "Logan Square @ 2956 N Albany Ave",
    specials:
      "$3 Pabst Blue Ribbon Bottles, $3 Miller Lite & Miller High Life Cans",
    specials_url: "https://smalltabs.com/details.php?id=80",
  },
  {
    name: "Estelle's Cafe & Lounge",
    address: "Wicker Park @ 2013 W North Ave",
    specials:
      "$4 Three Floyd's Drafts (5-8pm), $3 Rebel Yell Whiskey Shots (5-8pm)",
    specials_url: "https://smalltabs.com/details.php?id=216",
  },
  {
    name: "The Fireplace Inn",
    address: "Old Town @ 1448 N Wells St",
    specials: "$5 Skyy Vodka Bombs",
    specials_url: "https://smalltabs.com/details.php?id=442",
  },
  {
    name: "Gino's North",
    address: "Edgewater @ 1111 W Granville Ave",
    specials: "$3 Sangria Glasses",
    specials_url: "https://smalltabs.com/details.php?id=238",
  },
  {
    name: "Belford Tavern",
    address: "Irving Park @ 3200 N Pulaski Rd",
    specials:
      "$5 Grey Goose Vodka Drinks & Shots, $3 Jameson Whiskey Shots, $3 Rotating Revolution 16oz Drafts, $3.50 Malort Shots, $3.50 Jameson Whiskey Shots, $2.25 Domestic 18oz Drafts",
    specials_url: "https://smalltabs.com/details.php?id=581",
  },
  {
    name: "Cleo's",
    address: "Ukrainian Village @ 1935 W Chicago Ave",
    specials: "$2 off Bulleit Whiskey, $4 Well Drinks",
    specials_url: "https://smalltabs.com/details.php?id=49",
    food_specials: "$6 Fish & Chips",
    food_specials_url: "https://smalltabs.com/details.php?id=49",
  },
  {
    name: "Havana",
    address: "River North @ 412 N Clark St",
    specials: "$20 House Mojito Pitchers",
    specials_url: "https://smalltabs.com/details.php?id=417",
  },
  {
    name: "Lincoln Station",
    address: "Lincoln Park @ 2432 N Lincoln Ave",
    specials: "$4 Featured Drafts",
    specials_url: "https://smalltabs.com/details.php?id=248",
    food_specials: "$10.95 All-You-Can-Eat Fish Fry",
    food_specials_url: "https://smalltabs.com/details.php?id=248",
  },
  {
    name: "Mac's Wood Grilled",
    address: "Wicker Park @ 1801 W Division St",
    specials: "$4 Paddy Irish Whiskey Shots, $5 Moscow Mules",
    specials_url: "https://smalltabs.com/details.php?id=631",
  },
  {
    name: "Kincade's Bar & Grill",
    address: "Lincoln Park @ 950 W Armitage Ave",
    specials:
      "$4 Draft of the Day, $6 Makers Mark Bourbon Cocktails, $7 Pabst Blue Ribbon & Jameson Whiskey Shot Combo",
    specials_url: "https://smalltabs.com/details.php?id=153",
  },
  {
    name: "Tuman's Tap & Grill",
    address: "Ukrainian Village @ 2159 W Chicago Ave",
    specials: "$3.50 Pabst Blue Ribbon Drafts",
    specials_url: "https://smalltabs.com/details.php?id=662",
  },
  {
    name: "Maxbar",
    address: "Lincoln Park @ 2247 N Lincoln Ave",
    specials: "$2 Fireball Whiskey Shots, $100 Fireball Whiskey Bottles",
    specials_url: "https://smalltabs.com/details.php?id=252",
  },
  {
    name: "Bird's Nest",
    address: "Lincoln Park @ 2500 N Southport Ave",
    specials: "$4 Blue Line Pilsner, $5 Svedka Vodka Bombs, $5 Red Bull Bombs",
    specials_url: "https://smalltabs.com/details.php?id=6",
  },
  {
    name: "Troquet River North",
    address: "River North @ 111 W Huron St",
    specials:
      "$4 Select Beers (4-7pm), $5 House Mixed Drinks (4-7pm), $6 House Red & White Wine Glasses (4-7pm)",
    specials_url: "https://smalltabs.com/details.php?id=649",
    food_specials:
      "Mimosa Brunch (10am-3pm), $4 Truffle Frites (4-7pm), $5 Salmon Rilette (4-7pm), $6 Croque Monsieur & Croque Végétarien (4-7pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=649",
  },
  {
    name: "Hubbard Inn",
    address: "River North @ 110 W Hubbard St",
    food_specials:
      "$2 Raw Bar (selections include Shrimp, Lobster, Scallops, King Crab, & Oysters)",
    food_specials_url: "https://smalltabs.com/details.php?id=554",
  },
  {
    name: "The Boss Bar",
    address: "River North @ 420 N Clark St",
    food_specials:
      "$10 Burger & Miller Lite Draft Combo, $24 Cheese Pizza & Miller Lite Pitcher Combo",
    food_specials_url: "https://smalltabs.com/details.php?id=560",
  },
  {
    name: "Links Taproom",
    address: "Wicker Park @ 1559 N Milwaukee Ave",
    food_specials: "$11 Fish Fry w/ Potato Pancake & Fries",
    food_specials_url: "https://smalltabs.com/details.php?id=568",
  },
  {
    name: "Lizzie McNeill's Irish Pub",
    address: "Streeterville @ 400 N McClurg St",
    specials:
      "$5 Sam Adams Oktoberfest, $6 Seagrams 7 Whiskey Drinks, $5 Crown Apple Shots",
    specials_url: "https://smalltabs.com/details.php?id=477",
  },
  {
    name: "Standard Bar & Grill",
    address: "Wicker Park @ 1332 N Milwaukee Ave",
    specials: "$6 Ketel One Vodka Drinks",
    specials_url: "https://smalltabs.com/details.php?id=676",
    food_specials:
      "$20 After-Work Burger Deal (Cheeseburger with Fries, Domestic Bottles, & Well Drinks from 6-9pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=676",
  },
  {
    name: "Seven Lions",
    address: "Loop @ 130 S Michigan Ave",
    specials:
      "$9 Specialty Cocktails, $24 Select Wine Bottles (3-6pm), Half Price Featured Drafts (3-6pm)",
    specials_url: "https://smalltabs.com/details.php?id=683",
    food_specials:
      "$8 Hummus (3-6pm), $8 Pulled Pork Nachos (3-6pm), $8 Crispy Chicken Sliders (3-6pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=683",
  },
  {
    name: "Bulldog Ale House (Loyola)",
    address: "Rogers Park @ 6606 N Sheridan Rd",
    specials: "$5 Jameson Whiskey, $5 Guinness, $6 Irish Car Bomb",
    specials_url: "https://smalltabs.com/details.php?id=663",
    food_specials: "$10.99 All-You-Can-Eat Fish Fry",
    food_specials_url: "https://smalltabs.com/details.php?id=663",
  },
  {
    name: "Alice's Lounge",
    address: "Avondale @ 3556 W Belmont Ave",
  },
  {
    name: "Nola Gastropub",
    address: "Lakeview @ 3481 N Clark St",
    specials:
      "$3.50 Founders All Day IPA, $3.50 Founders Rubaeus, $4 Beer of the Month",
    specials_url: "https://smalltabs.com/details.php?id=642",
  },
  {
    name: "J & M Tap",
    address: "Ukrainian Village @ 957 N Leavitt St",
    specials:
      "$2 Pabst Blue Ribbon Drafts, $2.25 Point Drafts, $3 Domestic Bottles, $3 Pabst Blue Ribbon & Schiltz Tallboys, $4 Stella Artois Drafts, $4 Import & Craft Bottles, $4 Jameson Whiskey Shots, $4 Jim Beam Bourbon & Rye Shots, $5 Makers Mark Bourbon Drinks, $5 Stoli Vodka Drinks, $5 Crown Royal Whiskey Drinks",
    specials_url: "https://smalltabs.com/details.php?id=540",
  },
  {
    name: "The Fifty/50",
    address: "Wicker Park @ 2047 W Division St",
    specials:
      "$6 Tito's Vodka Drinks, $5 Ketel One Vodka Drinks (3-6pm), Half Price Craft Beers (3-6pm), $5 Wine Glasses (3-6pm)",
    specials_url: "https://smalltabs.com/details.php?id=127",
    food_specials: "Half Price Appetizers (3-6pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=127",
  },
  {
    name: "Kelsey's",
    address: "Lincoln Park @ 2265 N Lincoln Ave",
    specials: "$3.50 Curious Travelers, $3.50 Sam Adams, $5 Dublin Donkeys",
    specials_url: "https://smalltabs.com/details.php?id=154",
  },
  {
    name: "Mr. Brown's Lounge West Town",
    address: "Ukrainian Village @ 2301 W Chicago Ave",
    specials:
      "$7 Rum Punch (3-6pm), $4 Jameson Whiskey Shots (3-6pm), $4 Red Stripe Bottles (3-6pm)",
    specials_url: "https://smalltabs.com/details.php?id=363",
  },
  {
    name: "Christina's Place",
    address: "Irving Park @ 3759 N Kedzie Ave",
    specials:
      "$2 Pabst Blue Ribbon Cans, $3 Guinness Drafts, $5 Jameson Whiskey Shots, $5 Malort Shots, $5 Fireball Whiskey Shots",
    specials_url: "https://smalltabs.com/details.php?id=235",
  },
  {
    name: "Sherry's Bar",
    address: "West Rogers Park @ 5652 N Western Ave",
    specials:
      "$5 Long Island Iced Teas, $9 Old Style Buckets, $13 Miller Lite Buckets",
    specials_url: "https://smalltabs.com/details.php?id=645",
  },
  {
    name: "El Tequilas Bar & Grill",
    address: "Lincoln Park @ 2826 N Lincoln Ave",
    specials: "$3 Budweiser (4-6pm), $3 Tecate (4-6pm), $5 Margaritas (4-6pm)",
    specials_url: "https://smalltabs.com/details.php?id=678",
  },
  {
    name: "Tavern 57",
    address: "Lincoln Park @ 1059 W Wrightwood Ave",
    specials:
      "$2 off Wine Glasses (4-8pm), $2 off Ciders (4-8pm), $3 off Well Drinks (4-8pm), $3 Michelob Ultra Bottles (4-8pm), $3 Blue Moon Bottles (4-8pm), $4 Chicago Craft Drafts (4-8pm)",
    specials_url: "https://smalltabs.com/details.php?id=24",
  },
  {
    name: "Decibel Bar",
    address: "Uptown @ 4437 N Broadway Ave",
    specials: "$2 House Shots, $4 Bacardi, $4 Mimosas",
    specials_url: "https://smalltabs.com/details.php?id=553",
  },
  {
    name: "G&L Fire Escape",
    address: "North Center @ 2157 W Grace St",
    specials: "$3 Powers Whiskey Shots, $4 Wells",
    specials_url: "https://smalltabs.com/details.php?id=533",
  },
  {
    name: "Gallery Cabaret",
    address: "Bucktown @ 2020 N Oakley Ave",
    specials:
      "$6 Hammeson (Hamm's & Jameson Whiskey), $6 Jackhammer (Hamm's & Jack Daniels Whiskey), $3 Fireball Whiskey Shots, $3 Malort Shots",
    specials_url: "https://smalltabs.com/details.php?id=116",
  },
  {
    name: "Fat Cat",
    address: "Uptown @ 4840 N Broadway St",
    specials:
      "$6 Uptown Royale (4-6pm), $6 Four Roses Manhattan (4-6pm), $6 Prairie Organic Gin & Ginger (4-6pm), $5 Select Craft Beers (4-6pm), $5 Highballs (4-6pm), $6 Select Wines (4-6pm)",
    specials_url: "https://smalltabs.com/details.php?id=120",
  },
  {
    name: "Paddy Long's",
    address: "Lincoln Park @ 1028 W Diversey Ave",
    specials: "$4 Beer of the Month",
    specials_url: "https://smalltabs.com/details.php?id=119",
    food_specials: "$13.95 Fish Fry",
    food_specials_url: "https://smalltabs.com/details.php?id=119",
  },
  {
    name: "Rocky's",
    address: "Bridgeport @ 234 W 31st St",
    specials:
      "$5 Black & Blues, $3 Non-Premium Domestic Beers, $4 Premium Domestic & Import Beers, $12 Domestic Buckets",
    specials_url: "https://smalltabs.com/details.php?id=378",
  },
  {
    name: "Finley Dunne's Tavern",
    address: "Lakeview @ 3458 N Lincoln Ave",
    specials: "$5 UV Vodka Bombs, $2 Miller High Life Drafts",
    specials_url: "https://smalltabs.com/details.php?id=5",
    food_specials: "$12 All-You-Can-Eat Blue Moon Fish Fry",
    food_specials_url: "https://smalltabs.com/details.php?id=5",
  },
  {
    name: "Porkchop Hyde Park",
    address: "Hyde Park @ 1516 E Harper Ct",
    specials: "Half Price Drinks (10pm-Close)",
    specials_url: "https://smalltabs.com/details.php?id=684",
    food_specials: "Half Price Appetizers (10pm-Close)",
    food_specials_url: "https://smalltabs.com/details.php?id=684",
  },
  {
    name: "Fado Irish Pub",
    address: "River North @ 100 W Grand Ave",
    specials:
      "$7 Old Fashioneds (5-9pm), $7 Manhattans (5-9pm), $7 Whiskey Sours (5-9pm), $5 Carlsberg Beer (5-9pm), $7 Red & White Wine Glasses (5-9pm)",
    specials_url: "https://smalltabs.com/details.php?id=583",
    food_specials: "$6 Select Snacks (5-9pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=583",
  },
  {
    name: "Gideon Welles",
    address: "Lincoln Square @ 4500 N Lincoln Ave",
    specials: "$5 Select Craft Drafts",
    specials_url: "https://smalltabs.com/details.php?id=603",
  },
  {
    name: "Emerald Isle",
    address: "Edison Park @ 6686 N Northwest Hwy",
    specials:
      "$18 Domestic Buckets, $5 Long Island Iced Teas, $4 Bombs, $3 Fireball Whiskey Shots",
    specials_url: "https://smalltabs.com/details.php?id=288",
    food_specials: "$3 Half Dozen Wings (any style)",
    food_specials_url: "https://smalltabs.com/details.php?id=288",
  },
  {
    name: "Scot's Bar",
    address: "North Center @ 1829 W Montrose Ave",
    specials: "$3.50 Well Drinks, $3.50 Miller Lite Drafts",
    specials_url: "https://smalltabs.com/details.php?id=263",
  },
  {
    name: "Subterranean Lounge",
    address: "Wicker Park @ 2011 W North Ave",
    specials: "$5 UV Vodka Cocktails",
    specials_url: "https://smalltabs.com/details.php?id=56",
  },
  {
    name: "Legno Italian Gastropub",
    address: "Portage Park @ 4250 N Central Ave",
    specials:
      "$4 Select Vandermill Ciders, $2 Domestic Bottles (3-6pm), $3 Malort Shots (3-6pm), $5 Tito's Vodka Mixed Drinks (3-6pm), $6 White or Red Sangria Glasses (3-6pm)",
    specials_url: "https://smalltabs.com/details.php?id=590",
    food_specials:
      "Complimentary House Made Chips (3-6pm), $4 BBQ Pork Sliders (2) (3-6pm), $4 Jalapeno Poppers (2) (3-6pm), $5 Buffalo Wings (6) (3-6pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=590",
  },
  {
    name: "Taqueria & Bar",
    address: "Lincoln Park @ 1450 W Webster Ave",
    specials: "$4 Shots, $2 Grab Bag Beers",
    specials_url: "https://smalltabs.com/details.php?id=565",
  },
  {
    name: "Matisse Tavern & Grill",
    address: "Lincoln Park @ 674 W Diversey Pkwy",
    specials: "$5 Martinis",
    specials_url: "https://smalltabs.com/details.php?id=222",
  },
  {
    name: "Weather Mark Tavern",
    address: "South Loop @ 1503 S Michigan Ave",
    specials: "$2 off All Drafts (3-6pm), $5 Lagunitas Beers",
    specials_url: "https://smalltabs.com/details.php?id=143",
    food_specials: "$12.50 All-You-Can-Eat Fish Fry",
    food_specials_url: "https://smalltabs.com/details.php?id=143",
  },
  {
    name: "Butcher's Tap",
    address: "Lakeview @ 3553 N Southport Ave",
    specials:
      "$5 Tullamore Dew Whiskey, Half Price Tito's Vodka Cocktails (4-6pm)",
    specials_url: "https://smalltabs.com/details.php?id=624",
  },
  {
    name: "Emerald Loop",
    address: "Loop @ 216 N Wabash Ave",
    specials: "$4.75 Beer of the Month",
    specials_url: "https://smalltabs.com/details.php?id=42",
    food_specials: "$14 Lobster Mac & Cheese, $12 Cajun Tilapia",
    food_specials_url: "https://smalltabs.com/details.php?id=42",
  },
  {
    name: "DS Tequila Company",
    address: "Lakeview @ 3352 N Halsted St",
    specials: "$12 40oz Fiesta Bowls",
    specials_url: "https://smalltabs.com/details.php?id=573",
  },
  {
    name: "Renaldi's After Dark",
    address: "Lakeview @ 2831 N Broadway St",
    specials: "$4 Guinness Bottles",
    specials_url: "https://smalltabs.com/details.php?id=504",
  },
  {
    name: "Monk's Pub",
    address: "Loop @ 205 W Lake St",
    specials:
      "$4 Budweiser, Bud Light, Coors Light, Miller High Life, Miller Lite, Old Style, & Schiltz Bottles",
    specials_url: "https://smalltabs.com/details.php?id=144",
  },
  {
    name: "Altiro Latin Fusion",
    address: "Roscoe Village @ 2116 W Roscoe St",
    specials:
      "$1.99 Champagne (2-5pm), $2.49 Imported Mexican Beers (2-5pm), $4.99 Signature Craft Margaritas (2-5pm)",
    specials_url: "https://smalltabs.com/details.php?id=632",
    food_specials: "$1.99 Gourmet Tacos (2-5pm), $1.99 Ala Papa Bravo (2-5pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=632",
  },
  {
    name: "Mad River Bar & Grille",
    address: "Lakeview @ 2909 N Sheffield Ave",
    food_specials: "Half Price Appetizers (5-8pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=317",
  },
  {
    name: "Joe's Bar",
    address: "Near North Side @ 940 W Weed St",
    specials:
      "$2 Fireball Whiskey Shots (8-10pm), $2 Budweiser & Coors Light Bottles (8-10pm), $3 Vodka Mixers (8-10pm)",
    specials_url: "https://smalltabs.com/details.php?id=14",
  },
  {
    name: "Vaughans Pub Northwest Side",
    address: "Jefferson Park @ 5485 N Northwest Hwy",
    specials:
      "$3.50 Amstel Light Bottles, $4 Blue Moon Drafts, $4 Powers Irish Whiskey Shots",
    specials_url: "https://smalltabs.com/details.php?id=43",
    food_specials:
      "$12 All-You-Can-Eat Fish & Chips, $7.50 Pub Burger & Fries (11am-3pm), $7.50 Chicken Sandwich & Fries (11am-3pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=43",
  },
  {
    name: "Northwoods Lounge",
    address: "Norwood Park @ 5342 N Cumberland Ave",
    specials: "$3 Fireball Shots, $1 House Shots",
    specials_url: "https://smalltabs.com/details.php?id=551",
  },
  {
    name: "Benchmark",
    address: "Old Town @ 1510 N Wells St",
    specials:
      "$4 Truly & White Claw Cans (5-8pm), $5 Jack Daniels Whiskey Shots, $5 El Jimador Tequila Shots",
    specials_url: "https://smalltabs.com/details.php?id=508",
    food_specials: "Free Burgers (limited quantities, with drink purchase)",
    food_specials_url: "https://smalltabs.com/details.php?id=508",
  },
  {
    name: "Park Tavern",
    address: "West Loop @ 1645 W Jackson Blvd",
    specials:
      "$5 Jameson Whiskey, $5 Select Wine Glasses, $3 Tallboy Cans (3-5pm), $4 Well Drinks (3-5pm), $4 House Wine Glasses (3-5pm), Half Price 16oz Drafts (3-5pm)",
    specials_url: "https://smalltabs.com/details.php?id=494",
    food_specials: "$15 All-You-Can-Eat Fish Fry (4pm-Close)",
    food_specials_url: "https://smalltabs.com/details.php?id=494",
  },
  {
    name: "Declan's Irish Pub",
    address: "Near North Side @ 1240 N Wells St",
    specials: "$4 Select Craft Draft, $5 Jack Daniels Fire",
    specials_url: "https://smalltabs.com/details.php?id=365",
    food_specials: "$10 Fish & Chips",
    food_specials_url: "https://smalltabs.com/details.php?id=365",
  },
  {
    name: "Cary's Lounge",
    address: "West Rogers Park @ 2251 W Devon Ave",
    specials:
      "$2.50 Pabst Blue Ribbon & Schiltz Cans, $3 Old Style Drafts, $3 Budweiser, Bud Light, Coors Light, Miller Lite, & Miller High Life",
    specials_url: "https://smalltabs.com/details.php?id=287",
  },
  {
    name: "Bar Takito",
    address: "West Loop @ 201 N Morgan St",
  },
  {
    name: "O'Shaughnessy's Public House",
    address: "Lincoln Square @ 4557 N Ravenswood Ave",
    specials: "$5 Founders All-Day IPA",
    specials_url: "https://smalltabs.com/details.php?id=299",
    food_specials: "$10.95 All-You-Can-Eat Fish & Chips, $12.50 Fish Tacos",
    food_specials_url: "https://smalltabs.com/details.php?id=299",
  },
  {
    name: "Innjoy (Wicker Park)",
    address: "Wicker Park @ 2051 W Division St",
    specials:
      "$4 Dos Equis Drafts, $8 Milagro Tequila Margaritas, $5 Fireball Whiskey Shots",
    specials_url: "https://smalltabs.com/details.php?id=163",
    food_specials: "Half Price Shrimp",
    food_specials_url: "https://smalltabs.com/details.php?id=163",
  },
  {
    name: "Crossroads Public House",
    address: "Lincoln Park @ 2630 N Clark St",
    specials:
      "$4 Fireball Whiskey Shots, $5 Featured Cocktails, $5 Three Olvie Vodka Bombs, $10 Long Island Iced Tea Pitchers",
    specials_url: "https://smalltabs.com/details.php?id=208",
  },
  {
    name: "Porter Kitchen & Deck",
    address: "West Loop @ 150 N Riverside Ave",
    specials:
      "$7 Moscow Mules (3:30-5:30pm), $8 Classic Margaritas (3:30-5:30pm), $9 Old Fashioneds (3:30-5:30pm), $9 Select Wine Glasses (3:30-5:30pm)",
    specials_url: "https://smalltabs.com/details.php?id=682",
  },
  {
    name: "Lincoln Tap Room",
    address: "Lakeview @ 3010 N Lincoln Ave",
    specials:
      "$4 Angry Orchard Cider, $5 Call & Premium Shots, $3 Two Brothers Outlaw IPA Cans, $3 Two Brothers Sidekick Citrus Ale Cans, $4.50 Three Olives Vodka Cocktails",
    specials_url: "https://smalltabs.com/details.php?id=334",
  },
  {
    name: "Big Star",
    address: "Wicker Park @ 1531 N Damen Ave",
    specials: "$3 Old Heaven Hill Whiskey Shots",
    specials_url: "https://smalltabs.com/details.php?id=341",
  },
  {
    name: "Halligan Bar",
    address: "Lincoln Park @ 2274 N Lincoln Ave",
    specials:
      "$3 Budweiser & Bud Light Bottles, $3.50 Vegas Bombs, $3.50 Captain Morgan Rum & Coke, $4 Stoli Vodka Drinks, $5 Bombs, $2 Bud Light Drafts, $3 Jameson Whiskey Shots, $3.50 Goose Island 312 Drafts, $3.50 Guinness, $4 Stoli Vodka Drinks",
    specials_url: "https://smalltabs.com/details.php?id=130",
  },
  {
    name: "Pint",
    address: "Wicker Park @ 1547 N Milwaukee Ave",
    food_specials: "Half Price Fish & Chips",
    food_specials_url: "https://smalltabs.com/details.php?id=218",
  },
  {
    name: "Pippin's Tavern",
    address: "Near North Side @ 806 N Rush St",
    specials:
      "$5.50 Malort, $5 Maestro Dobel Tequila, $4 Wondermint, $5 Revel Stoke Roasted Pecan Whiskey, $6 Don Q Gran Anejo Mules, $6 Bulldog Gin Rickeys",
    specials_url: "https://smalltabs.com/details.php?id=71",
  },
  {
    name: "The Temple Bar",
    address: "Lakeview @ 3001 N Ashland Ave",
    specials: "$4 Lagunitas Drafts",
    specials_url: "https://smalltabs.com/details.php?id=305",
    food_specials: "$8.25 Fish & Chips",
    food_specials_url: "https://smalltabs.com/details.php?id=305",
  },
  {
    name: "Jake Melnick's Corner Tap",
    address: "Near North Side @ 41 E Superior St",
    specials: "$5.50 Krombacher Pils",
    specials_url: "https://smalltabs.com/details.php?id=311",
  },
  {
    name: "Timothy O'Toole's",
    address: "Near North Side @ 622 N Fairbanks St",
    specials:
      "$12 Miller Lite, Coors Light, & Bud Light Pitchers, $6 Jameson Whiskey Cocktails, $6 Jameson Whiskey Shots",
    specials_url: "https://smalltabs.com/details.php?id=195",
  },
  {
    name: "Francesca's Bryn Mawr",
    address: "Edgewater @ 1039 W Bryn Mawr Ave",
    food_specials: "$15.99 Prix Fixe Lunch Menu",
    food_specials_url: "https://smalltabs.com/details.php?id=429",
  },
  {
    name: "Gannon's Pub",
    address: "North Center @ 4264 N Lincoln Ave",
    specials: "$4 Harp Drafts",
    specials_url: "https://smalltabs.com/details.php?id=16",
    food_specials: "$7.75 Fish & Chips",
    food_specials_url: "https://smalltabs.com/details.php?id=16",
  },
  {
    name: "Redmond's Ale House",
    address: "Wrigleyville @ 3358 N Sheffield Ave",
    specials:
      "$3 Tallboys, $4 Fireball Whiskey Shots, $6 Jameson Whiskey Shots",
    specials_url: "https://smalltabs.com/details.php?id=20",
  },
  {
    name: "Trader Todd's",
    address: "Lakeview @ 3216 N Sheffield Ave",
    specials: "$1 Rolling Rock Drafts (4:30-6:30pm)",
    specials_url: "https://smalltabs.com/details.php?id=455",
    food_specials: "$2 Select Appetizers (4:30-6:30pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=455",
  },
  {
    name: "Furious Spoon",
    address: "Wicker Park @ 1571 N Milwaukee Ave",
  },
  {
    name: "Big City Tap",
    address: "Lakeview @ 1010 W Belmont Ave",
    specials: "$6 Jameson Whiskey, $1 Jello Shots, $1 Apple Pucker Shots",
    specials_url: "https://smalltabs.com/details.php?id=306",
    food_specials: "Half Price Bar Snacks (until 9pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=306",
  },
  {
    name: "Casati's Pizza Vino",
    address: "Lincoln Park @ 444 W Fullerton Pkwy",
    food_specials: "$10 & Under Bar Menu",
    food_specials_url: "https://smalltabs.com/details.php?id=703",
  },
  {
    name: "Durkin's Tavern",
    address: "Lincoln Park @ 810 W Diversey Ave",
    specials: "$4 Fireball Whiskey Shots, $3 Bud Light Drafts",
    specials_url: "https://smalltabs.com/details.php?id=22",
  },
  {
    name: "The Atlantic Bar & Grill",
    address: "Lincoln Square @ 5062 N Lincoln Ave",
    specials: "$4 Wine Spritzers, $4 Stoli Vodka Drinks",
    specials_url: "https://smalltabs.com/details.php?id=101",
    food_specials: "$4 Crostini Menu",
    food_specials_url: "https://smalltabs.com/details.php?id=101",
  },
  {
    name: "Vines on Clark",
    address: "Wrigleyville @ 3554 N Clark St",
    specials: "$5 You-Call-Its",
    specials_url: "https://smalltabs.com/details.php?id=33",
  },
  {
    name: "Murphy's Bleachers",
    address: "Wrigleyville @ 3653 N Sheffield Ave",
    specials:
      "$4 Southern Comfort Drinks, $14 Lagunitas IPA & Pilsner Pitchers",
    specials_url: "https://smalltabs.com/details.php?id=32",
    food_specials: "$6 Fish & Chips",
    food_specials_url: "https://smalltabs.com/details.php?id=32",
  },
  {
    name: "Charlie's",
    address: "Lakeview @ 3726 N Broadway St",
    specials: "$10 Long Island Iced Teas, $3 Apple Pie Shots",
    specials_url: "https://smalltabs.com/details.php?id=264",
  },
  {
    name: "Galvin's Public House",
    address: "Portage Park @ 5901 W Lawrence Ave",
    specials: "$4 Blue Moon Drafts",
    specials_url: "https://smalltabs.com/details.php?id=604",
    food_specials: "$11 All-You-Can-Eat Fish & Chips",
    food_specials_url: "https://smalltabs.com/details.php?id=604",
  },
  {
    name: "Allium",
    address: "Near North Side @ 120 E Delaware St",
    specials: "Half Price Select Spirits, Wines, & Draft Beers (4-6pm)",
    specials_url: "https://smalltabs.com/details.php?id=687",
    food_specials: "Half Price Bar Bites (4-6pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=687",
  },
  {
    name: "Racine Plumbing Bar & Grill",
    address: "Lincoln Park @ 2642 N Lincoln Ave",
    specials:
      "$35 Drink Package including Draft Beers, Well Drinks, Select Call Drinks, Domestic Bottles and Cans, & Half Price Food (9pm-12am)",
    specials_url: "https://smalltabs.com/details.php?id=357",
  },
  {
    name: "The Bedford",
    address: "Wicker Park @ 1612 W Division St",
    specials: "$8 Draft Cocktails",
    specials_url: "https://smalltabs.com/details.php?id=416",
  },
  {
    name: "The Irish Oak",
    address: "Wrigleyville @ 3511 N Clark St",
    specials: "$6 Budweiser Tallboys & Shot Combo, $25 Fish Bowls",
    specials_url: "https://smalltabs.com/details.php?id=199",
    food_specials: "$10 All-You-Can-Eat Fish & Chips",
    food_specials_url: "https://smalltabs.com/details.php?id=199",
  },
  {
    name: "Bobby Love's",
    address: "Lakeview @ 3729 N Halsted St",
    specials: "$6 Absolute Vodka Cocktails",
    specials_url: "https://smalltabs.com/details.php?id=337",
  },
  {
    name: "Lottie's Pub",
    address: "Bucktown @ 1925 W Cortland St",
    specials: "$4 Corona & Corona Light",
    specials_url: "https://smalltabs.com/details.php?id=79",
    food_specials: "50¢ Jumbo Wings",
    food_specials_url: "https://smalltabs.com/details.php?id=79",
  },
  {
    name: "Ovie Bar & Grill",
    address: "West Loop @ 120 N Canal St",
    specials: "$6 Craft Beer Drafts (3-6pm), $7 Select Wine Glasses (3-6pm)",
    specials_url: "https://smalltabs.com/details.php?id=501",
  },
  {
    name: "Emmit's Irish Pub",
    address: "West Loop @ 495 N Milwaukee Ave",
    specials: "$4 Fireball Whiskey",
    specials_url: "https://smalltabs.com/details.php?id=487",
    food_specials: "$8.95 Fish & Chips",
    food_specials_url: "https://smalltabs.com/details.php?id=487",
  },
  {
    name: "ZED451",
    address: "River North @ 739 N Clark St",
    specials: "$4.51 Grey Goose Vodka Cocktails (4:30-7pm)",
    specials_url: "https://smalltabs.com/details.php?id=639",
  },
  {
    name: "Kirkwood Bar & Grill",
    address: "Lakeview @ 2934 N Sheffield Ave",
    specials: "$4 All Ciders, $5 Jello Shots",
    specials_url: "https://smalltabs.com/details.php?id=13",
  },
  {
    name: "Wabash Tap",
    address: "South Loop @ 1233 S Wabash Ave",
    specials: "$4 Drafts (4-6pm), $14 Buckets (4-6pm)",
    specials_url: "https://smalltabs.com/details.php?id=142",
  },
  {
    name: "Mason House",
    address: "River North @ 613 N Wells St",
    specials:
      "$5 Beer Cans (5-7pm), $5 Red & White Wine Glasses (5-7pm), $8 Craft Cocktails (5-7pm)",
    specials_url: "https://smalltabs.com/details.php?id=713",
    food_specials: "$1.50 Oysters (5-7pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=713",
  },
  {
    name: "O'Leary's Public House",
    address: "River North @ 541 N Wells St",
    specials: "$4.50 Corona Light Bottles",
    specials_url: "https://smalltabs.com/details.php?id=361",
  },
  {
    name: "Devour 312",
    address: "Lincoln Park @ 1450 W Webster Ave",
    specials:
      "$5 Drafts (3-6pm), $5 Captain Morgan Rum, Tito's Vodka, Milagro Tequila, Fireball, Jameson, & Jack Daniels Whiskey Shots (3-6pm)",
    specials_url: "https://smalltabs.com/details.php?id=690",
  },
  {
    name: "Dimo's Pizza",
    address: "Wicker Park @ 1615 N Damen Ave",
    food_specials:
      "$9 Pizza Slice, Bourbon Shot, & Pabst Blue Ribbon or Miller High Life Tallboy Combo",
    food_specials_url: "https://smalltabs.com/details.php?id=679",
  },
  {
    name: "Bulldog Ale House (South Loop)",
    address: "South Loop @ 901 S State St",
    specials: "$5 Jameson Whiskey, $5 Guinness, $6 Irish Car Bombs",
    specials_url: "https://smalltabs.com/details.php?id=686",
    food_specials: "$10.99 All-You-Can-Eat Fish Fry",
    food_specials_url: "https://smalltabs.com/details.php?id=686",
  },
  {
    name: "Brando's Speakeasy",
    address: "Loop @ 343 S Dearborn St",
    specials:
      "$3 Bud Light, $3 Old Style, Pabst Blue Ribbon, & Miller High Life Tallboys",
    specials_url: "https://smalltabs.com/details.php?id=276",
  },
  {
    name: "Ph.D Pub",
    address: "University Village @ 1257 S Halsted St",
    specials:
      "$3.50 Goose Island Oktoberfest 12oz Mason Jar Drafts, $3 Pabst Blue Ribbon & Rolling Rock Tallboys, $3 Bud Light Drafts, $9 Bud Light Pitchers, $3.50 Tullamore Dew Shots, $4 Carlsberg Drafts, $4 Fireball Shots, $4 Apple Moonshine Shots, $6 Vodka Lemonades, $8 Ph.D Vodka Mules",
    specials_url: "https://smalltabs.com/details.php?id=570",
  },
  {
    name: "Side Street Saloon",
    address: "Lakeview @ 1456 W George St",
    specials: "$3.25 Pabst Blue Ribbon Bottles",
    specials_url: "https://smalltabs.com/details.php?id=187",
    food_specials: "$5.50 Half Pound Cheeseburger & Fries",
    food_specials_url: "https://smalltabs.com/details.php?id=187",
  },
  {
    name: "Bootlegger's",
    address: "Near North Side @ 11 W Division St",
    specials:
      "$3 Southern Comfort, $3 Shellback Rum, $5 Wild Turkey Bourbon, $4 Miller Lite Drafts",
    specials_url: "https://smalltabs.com/details.php?id=66",
  },
  {
    name: "Third Rail Tavern",
    address: "West Loop @ 1133 W Madison St",
    specials:
      "$5 Goose Island, Three Floyds, & Bell's Brewery Drafts (5-9pm), $8 Bulleit Bourbon or Rye Manhattans (5-9pm), $8 Bulleit Bourbon or Rye Old Fashioneds (5-9pm)",
    specials_url: "https://smalltabs.com/details.php?id=303",
  },
  {
    name: "Easy Bar",
    address: "Wicker Park @ 1944 W Division St",
    specials: "$5 Jameson Shots",
    specials_url: "https://smalltabs.com/details.php?id=215",
  },
  {
    name: "Lokal Lincoln Park",
    address: "Lincoln Park @ 2500 N Ashland Ave",
    food_specials: "$10 Mussels & Truffle Fries",
    food_specials_url: "https://smalltabs.com/details.php?id=614",
  },
  {
    name: "The Green Lady",
    address: "Lakeview @ 3328 N Lincoln Ave",
    specials: "$3 Pabst Blue Ribbon Cans",
    specials_url: "https://smalltabs.com/details.php?id=213",
  },
  {
    name: "Keenan O'Reilly's",
    address: "Lakeview @ 3916 N Ashland Ave",
    specials:
      "$3.50 Goose Island & Sam Adams Bottles, $2 Pabst Blue Ribbon Cans, $2.50 Miller High Life Tallboys, $3 Labatt Blue Drafts, $2.50 Old Style Drafts",
    specials_url: "https://smalltabs.com/details.php?id=454",
  },
  {
    name: "Sluggers",
    address: "Wrigleyville @ 3540 N Clark St",
    specials:
      "$6 Goose Island Green Line Drafts, $6 Sam Adams Drafts, $6 Pinnacle Flavored Vodka Cocktails",
    specials_url: "https://smalltabs.com/details.php?id=53",
  },
  {
    name: "Lizard's Liquid Lounge",
    address: "Irving Park @ 3058 W Irving Park Rd",
    specials:
      "$4 Stella Artois Drafts, $4 Great Lakes Burning River Drafts, $5 Microbrews",
    specials_url: "https://smalltabs.com/details.php?id=98",
  },
  {
    name: "Fireside Restaurant & Lounge",
    address: "Edgewater @ 5739 N Ravenswood Ave",
    specials: "$2.25 Pabst Blue Ribbon Tallboys",
    specials_url: "https://smalltabs.com/details.php?id=441",
    food_specials: "Complimentary Happy Hour Buffet (4-6pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=441",
  },
  {
    name: "Mrs. Murphy & Sons Irish Bistro",
    address: "North Center @ 3905 N Lincoln Ave",
    specials:
      "$5 Specialty Irish Cocktails (4:30-6:30pm), $5 Irish Beers (4:30-6:30pm)",
    specials_url: "https://smalltabs.com/details.php?id=651",
    food_specials: "$5 Appetizer Bites (4:30-6:30pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=651",
  },
  {
    name: "Dugan's on Halsted",
    address: "West Loop @ 128 S Halsted St",
    specials:
      "$2.50 Bud Light Drafts, $3.50 Hoegaarden, $2.50 Pabst Blue Ribbon Bottles",
    specials_url: "https://smalltabs.com/details.php?id=424",
  },
  {
    name: "Pizzeria Serio",
    address: "Lakeview @ 1708 N Belmont Ave",
    specials: "$2 Pabst Blue Ribbon Tallboys, $8 Beer Flights",
    specials_url: "https://smalltabs.com/details.php?id=385",
  },
  {
    name: "The Monkey's Paw",
    address: "Lincoln Park @ 2524 N Southport Ave",
    specials:
      "$3 Rebel Yell Whiskey (4:30-6:30pm), $3 off All Drafts (4:30-6:30pm), $3 off All Wine Glasses (4:30-6:30pm)",
    specials_url: "https://smalltabs.com/details.php?id=453",
  },
  {
    name: "Woodhaven Bar & Kitchen",
    address: "River North @ 712 N Clark St",
    specials: "$7 Pabst Blue Ribbon & Jameson Whiskey Boilermakers (5-8pm)",
    specials_url: "https://smalltabs.com/details.php?id=331",
  },
  {
    name: "Jack & Gingers",
    address: "Bucktown @ 2048 W Armitage Ave",
    specials: "$4 Well Drinks, $2 off Bulleit Whiskey, $5 Jack & Gingers",
    specials_url: "https://smalltabs.com/details.php?id=50",
    food_specials: "$6 Fish & Chips",
    food_specials_url: "https://smalltabs.com/details.php?id=50",
  },
  {
    name: "Taco Joint Lincoln Park",
    address: "Lincoln Park @ 1969 N Halsted St",
    specials: "$5 Modelo Especial Can & Olmeca Tequila Blanco Shot Combo",
    specials_url: "https://smalltabs.com/details.php?id=541",
  },
  {
    name: "SideDoor",
    address: "Streeterville @ 100 E Ontario St",
    food_specials:
      "Half Price Avocado Mash, Stuffed Mushrooms, Chips & Dip, IPA Beer Pretzels, & Deviled Eggs from 3-5pm",
    food_specials_url: "https://smalltabs.com/details.php?id=574",
  },
  {
    name: "The Roost Carolina Kitchen",
    address: "North Center @ 1467 W Irving Park Rd",
    specials: "$5 Boilermakers (9-11pm), 25% off Signature Cocktails (9-11pm)",
    specials_url: "https://smalltabs.com/details.php?id=672",
  },
  {
    name: "Hook & Ladder",
    address: "Lincoln Park @ 2270 N Lincoln Ave",
    specials:
      "$2.50 Domestic Bottles, $3 Import/Craft Bottles, $4 All Drafts, $3 Shots, $4 Bombs, $6 Wine Glasses, $6 Mimosas, $4 Well Drinks, $5 Call Drinks",
    specials_url: "https://smalltabs.com/details.php?id=593",
  },
  {
    name: "Dark Horse Tap & Grille",
    address: "Wrigleyville @ 3443 N Sheffield Ave",
    specials:
      "$5 Bomb Shots, $5 Stoli Vodka Cocktails, $4 Lagunitas Drafts, $3 Fireball Whiskey Shots",
    specials_url: "https://smalltabs.com/details.php?id=201",
  },
  {
    name: "Grandview Tavern",
    address: "West Loop @ 1202 W Grand Ave",
    specials:
      "$3 Hamms Cans, $5 Jameson Whiskey Shots, $5 Fireball Whiskey Shots",
    specials_url: "https://smalltabs.com/details.php?id=476",
    food_specials: "$9 Fish Tacos",
    food_specials_url: "https://smalltabs.com/details.php?id=476",
  },
  {
    name: "The Drinkingbird",
    address: "Lincoln Park @ 2201 N Clybourn Ave",
    specials: "$5 Schlitz & Dickel Whiskey Shot Combo",
    specials_url: "https://smalltabs.com/details.php?id=48",
  },
  {
    name: "Bottom Lounge",
    address: "West Loop @ 1375 W Lake St",
    specials: "$3.50 Schiltz Drafts, $4 Budweiser & Bud Light Bottles",
    specials_url: "https://smalltabs.com/details.php?id=436",
  },
  {
    name: "Bar Louie University Village",
    address: "University Village @ 1325 S Halsted St",
    specials:
      "$3.25 Drafts (4-7pm), $4.25 Wine Glasses (4-7pm), $5.25 Signature Martinis (4-7pm)",
    specials_url: "https://smalltabs.com/details.php?id=654",
    food_specials:
      "Half Price Select Appetizers (4-7pm), Half Price Flatbreads (4-7pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=654",
  },
  {
    name: "King Crab House",
    address: "Lincoln Park @ 312 N Halsted St",
    specials: "Half Price Beer (4-6pm), Half Price Well Drinks (4-6pm)",
    specials_url: "https://smalltabs.com/details.php?id=702",
    food_specials: "Half Price Appetizers (4-6pm), Half Price Entrees (4-6pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=702",
  },
  {
    name: "Lion Head Pub",
    address: "Lincoln Park @ 2251 N Lincoln Ave",
    food_specials: "$1 Fish Tacos, 25¢ Wings (4-7pm, with beverage purchase)",
    food_specials_url: "https://smalltabs.com/details.php?id=25",
  },
  {
    name: "Leona's Old Irving",
    address: "Irving Park @ 3877 N Elston Ave",
    specials:
      "$5 Cocktails (6-9pm), $5 Frozen Margaritas (6-9pm), $5 Rocks Margaritas (6-9pm), $5 Long Island Iced Teas (6-9pm)",
    specials_url: "https://smalltabs.com/details.php?id=667",
    food_specials: "$3 off Wing Dings",
    food_specials_url: "https://smalltabs.com/details.php?id=667",
  },
  {
    name: "Blackfinn Ameripub",
    address: "River North @ 65 W Kinzie St",
    specials: "$5 Bacardi Cocktails",
    specials_url: "https://smalltabs.com/details.php?id=543",
  },
  {
    name: "Bridget McNeill's Bar & Kitchen",
    address: "Lakeview @ 420 W Belmont Ave",
    specials: "$4.20 Draft Beers (5-7pm), $6 Wine Glasses (5-7pm)",
    specials_url: "https://smalltabs.com/details.php?id=347",
    food_specials: "$12.99 Large Pizzas (with drink purchase)",
    food_specials_url: "https://smalltabs.com/details.php?id=347",
  },
  {
    name: "The Abbey Pub",
    address: "Irving Park @ 3420 W Grace St",
    specials: "$4 Smithwicks, $4 Harp, $5 Jameson Black, $5 2 Gingers Whiskey",
    specials_url: "https://smalltabs.com/details.php?id=31",
    food_specials: "$9.95 Fish & Chips, Half Price Appetizers until 6pm",
    food_specials_url: "https://smalltabs.com/details.php?id=31",
  },
  {
    name: "Farraguts",
    address: "Andersonville @ 5240 N Clark St",
    specials: "$3 Miller Lite Drafts, $3 Pabst Blue Ribbon Drafts",
    specials_url: "https://smalltabs.com/details.php?id=445",
  },
  {
    name: "McCormick & Schmick's",
    address: "Near North Side @ 41 E Chestnut St",
    specials:
      "$6 Canyon Road Chardonnay, Canyon Cabernet Sauvignon, & Bringer White Zinfandel Wine Glasses (4-7pm), $7 Agave Rita, All American, & Talk of the Town Cocktails (4-7pm), $9 Urban Influence, Brandy Sidebar, & Sour Apple Martinis (4-7pm)",
    specials_url: "https://smalltabs.com/details.php?id=605",
  },
  {
    name: "Tai's Til 4",
    address: "Lakeview @ 3611 N Ashland Ave",
    specials: "$7 Flagship Bombs",
    specials_url: "https://smalltabs.com/details.php?id=549",
  },
  {
    name: "Merkle's Bar & Grill",
    address: "Wrigleyville @ 3516 N Clark St",
    specials:
      "$3 Domestic Cans, $4 Well Cocktails, $4 Bloody Marys, $5 Craft Drafts, $5 Crown Apple Shots",
    specials_url: "https://smalltabs.com/details.php?id=18",
    food_specials: "$2 Tacos, $4 Burger & Fries",
    food_specials_url: "https://smalltabs.com/details.php?id=18",
  },
  {
    name: "Cork Lounge",
    address: "Lakeview @ 1822 W Addison St",
    specials:
      "$2 Pabst Blue Ribbon Drafts, $4 Mimosas, $4 Apple Pie Shots, $5 Genessee Cream Ale & Jim Beam Shot Combo",
    specials_url: "https://smalltabs.com/details.php?id=326",
  },
  {
    name: "Mojo Bar & Grill",
    address: "Irving Park @ 2958 W Irving Park Rd",
    specials: "$5 Well Vodka Drinks",
    specials_url: "https://smalltabs.com/details.php?id=643",
    food_specials: "$5 Fish & Chips",
    food_specials_url: "https://smalltabs.com/details.php?id=643",
  },
  {
    name: "Mahoney's Pub & Grille",
    address: "Near North Side @ 551 N Odgen Ave",
    specials: "$5 Jameson Whiskey",
    specials_url: "https://smalltabs.com/details.php?id=65",
  },
  {
    name: "The Lodge",
    address: "Near North Side @ 21 W Division Street",
    specials: "$4 Fat Tire Drafts, $6 Bombs",
    specials_url: "https://smalltabs.com/details.php?id=68",
  },
  {
    name: "Taco Joint River North",
    address: "River North @ 158 W Ontario St",
    specials: "$5 Modelo Especial Can & Olmeca Tequila Blanco Shot Combo",
    specials_url: "https://smalltabs.com/details.php?id=542",
  },
  {
    name: "Distilled Chicago",
    address: "Lincoln Park @ 1480 W Webster Ave",
    food_specials: "$10 Country Fried Chicken Sandwich",
    food_specials_url: "https://smalltabs.com/details.php?id=656",
  },
  {
    name: "Devon Seafood Grill",
    address: "Near North Side @ 39 E Chicago Ave",
    food_specials:
      "$1 Oysters (4-7pm), $7.50 Appetizers (4-7pm, 9pm-Close), $2.50 Jumbo Shrimp Cocktail (4-7pm, 9pm-Close)",
    food_specials_url: "https://smalltabs.com/details.php?id=689",
  },
  {
    name: "City Pool Hall",
    address: "West Loop @ 640 W Hubbard St",
    specials: "$4 Modelo & Corona",
    specials_url: "https://smalltabs.com/details.php?id=561",
  },
  {
    name: "Mother's Too",
    address: "Near North Side @ 14 W Division St",
    specials: "$5 Sailor Jerry Rum, $5.50 Jim Beam Bourbon",
    specials_url: "https://smalltabs.com/details.php?id=67",
  },
  {
    name: "The Hampton Social",
    address: "River North @ 353 W Hubbard St",
    specials: "Half Price Specialty Cocktails (4-6pm)",
    specials_url: "https://smalltabs.com/details.php?id=636",
    food_specials: "Half Price Pizzas (4-6pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=636",
  },
  {
    name: "Mullen's Bar & Grill",
    address: "Rogers Park @ 7301 N Western Ave",
    specials: "$5 Flavored Vodka Drinks, $5 Bomb Shots (excludes Car Bombs)",
    specials_url: "https://smalltabs.com/details.php?id=460",
    food_specials: "$9 Meatloaf",
    food_specials_url: "https://smalltabs.com/details.php?id=460",
  },
  {
    name: "Toon's Bar & Grill",
    address: "Lakeview @ 3857 N Southport Ave",
    specials: "$1 off Stoli Vodka Cocktails, $4.50 Lagunitas Drafts",
    specials_url: "https://smalltabs.com/details.php?id=203",
    food_specials: "$10 House-Smoked Baby Back Ribs, $4.50 Po'boys",
    food_specials_url: "https://smalltabs.com/details.php?id=203",
  },
  {
    name: "Reed's Local",
    address: "Avondale @ 3017 W Belmont Ave",
    specials: "$4 Old Crow Whiskey & Hamm's Can Combo, $2 Hamm's Cans",
    specials_url: "https://smalltabs.com/details.php?id=585",
  },
  {
    name: "Will's Northwoods Inn",
    address: "Lakeview @ 3030 N Racine Ave",
    specials:
      "$4 Sierra Nevada Drafts, $3 Schiltz Tallboys, $2.50 Pabst Blue Ribbon, $3 Miller High Life Bottles",
    specials_url: "https://smalltabs.com/details.php?id=77",
    food_specials: "$12.95 All-You-Can-Eat Fish Fry",
    food_specials_url: "https://smalltabs.com/details.php?id=77",
  },
  {
    name: "The Land on Lincoln",
    address: "Lakeview @ 3032 N Lincoln Ave",
    specials:
      "$5 Vodka, $5 Bourbon, $2 Mystery Beer, $4 Drafts (4-7pm), $4 Wine Glasses (4-7pm)",
    specials_url: "https://smalltabs.com/details.php?id=165",
    food_specials:
      "Half Price Nonna's Meatball Sandwich, Half Price Snacks (4-7pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=165",
  },
  {
    name: "Bridge House Tavern",
    address: "River North @ 321 N Clark St",
    specials: "$20 Tiger Tallboy Buckets",
    specials_url: "https://smalltabs.com/details.php?id=484",
  },
  {
    name: "The Other Side Bar",
    address: "Lincoln Park @ 2436 N Clark St",
    specials: "$5 Moscow Mules",
    specials_url: "https://smalltabs.com/details.php?id=192",
  },
  {
    name: "Leona's Stony Island",
    address: "Calumet Heights @ 9157 S Stony Island Ave",
    specials:
      "$5 Cocktails (6-9pm), $5 Frozen Margaritas (6-9pm), $5 Rocks Margaritas (6-9pm), $5 Long Island Iced Teas (6-9pm)",
    specials_url: "https://smalltabs.com/details.php?id=669",
    food_specials: "$3 off Wing Dings",
    food_specials_url: "https://smalltabs.com/details.php?id=669",
  },
  {
    name: "Pasta Bowl Wicker Park",
    address: "Wicker Park @ 1852 W North Ave",
    specials: "$5 Moscow Mules",
    specials_url: "https://smalltabs.com/details.php?id=638",
  },
  {
    name: "Four Star Lounge",
    address: "Lincoln Park @ 2666 N Halsted St",
    specials:
      "$4 Jack Daniels Whiskey, Jim Beam Bourbon, Bacardi Rum, Jose Cuervo Tequila, Ketel One Vodka, & Beefeater Gin Well Drinks (5-8pm), $4 Revolution Fist City, Revolution Anti-Hero, Goose Island 312, Revolution Eugene Porter, and Blue Moon (5-8pm), $5 House Cabernet & Chardonnay Wine Glasses (5-8pm), $2 Malort Shots (5-8pm), $2 Fireball Whiskey Shots (5-8pm), $3 Jameson Whiskey Shots (5-8pm), $3 Jim Beam Bourbon Shots (5-8pm), $5 Vodka or Gin Martinis (5-8pm)",
    specials_url: "https://smalltabs.com/details.php?id=608",
    food_specials: "$5 Shrimp Cocktail (5-8pm), $5 Hummus Platter (5-8pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=608",
  },
  {
    name: "Moe's Tavern",
    address: "Avondale @ 2937 N Milwaukee Ave",
    specials:
      "$3 Pabst Blue Ribbon Drafts, $3 Malort Shots, $3 Zacharias Harris Bourbon, $3 Well Drinks, $3 Craft Beer of the Month",
    specials_url: "https://smalltabs.com/details.php?id=423",
  },
  {
    name: "The Pony Inn",
    address: "Lakeview @ 1638 W Belmont Ave",
    food_specials:
      "Half Price Appetizers from 4-8pm, Half Price Sandwiches from 4-8pm",
    food_specials_url: "https://smalltabs.com/details.php?id=275",
  },
  {
    name: "Kasey's Tavern",
    address: "Printers Row @ 701 S Dearborn St",
    specials:
      "$4 New Belgium Voodoo Ranger IPA Drafts, $4 Carlsburg Tallboys, $3 Hamm's Tallboys, $3 Coors Banquet Bottles",
    specials_url: "https://smalltabs.com/details.php?id=125",
  },
  {
    name: "Aberdeen Tap",
    address: "West Loop @ 440 N Aberdeen St",
    specials: "$5 Jameson Whiskey Shots, $3 Pabst Blue Ribbon Drafts",
    specials_url: "https://smalltabs.com/details.php?id=457",
  },
  {
    name: "GRK Bar",
    address: "Loop @ 400 S Wells St",
    specials: "$5 Shots, $1 off Select Drafts",
    specials_url: "https://smalltabs.com/details.php?id=621",
  },
  {
    name: "The Beetle Bar & Grill",
    address: "Humboldt Park @ 2532 W Chicago Ave",
    specials: "$4 Curious Traveler",
    specials_url: "https://smalltabs.com/details.php?id=2",
    food_specials: "$8 Fish Fry",
    food_specials_url: "https://smalltabs.com/details.php?id=2",
  },
  {
    name: "Sports Corner Bar & Grill",
    address: "Wrigleyville @ 956 W Addison St",
    specials: "$5 You-Call-Its",
    specials_url: "https://smalltabs.com/details.php?id=328",
    food_specials: "$2 Sliders",
    food_specials_url: "https://smalltabs.com/details.php?id=328",
  },
  {
    name: "Prohibition Pub & Grill",
    address: "Lincoln Park @ 2138 N Halsted Ave",
    specials: "$4 Well Drinks",
    specials_url: "https://smalltabs.com/details.php?id=564",
    food_specials: "$5 Fried Chicken Sandwich",
    food_specials_url: "https://smalltabs.com/details.php?id=564",
  },
  {
    name: "Crossroads at House of Blues",
    address: "River North @ 329 N Dearborn St",
    specials:
      "Half Price Select Wine Bottles (3-6pm), $8 Pabst Blue Ribbon Can & Jameson Whiskey Shot Combo (3-6pm), $2 off Select Drafts (3-6pm)",
    specials_url: "https://smalltabs.com/details.php?id=619",
    food_specials: "Half Price Appetizers (3-6pm), $9.95 Fish & Chips (3-6pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=619",
  },
  {
    name: "Scarlet Bar",
    address: "Lakeview @ 3320 N Halsted St",
    specials: "$6 Ketel One Vodka Cocktails",
    specials_url: "https://smalltabs.com/details.php?id=262",
  },
  {
    name: "Cortland's Garage",
    address: "Bucktown @ 1645 W Cortland St",
    food_specials: "Buy One, Get One Free Appetizers from 2pm-6pm",
    food_specials_url: "https://smalltabs.com/details.php?id=60",
  },
  {
    name: "Kit Kat Lounge",
    address: "Lakeview @ 3700 N Halsted St",
    food_specials: "$30 Prix-Fixe Menu (Salad, Entree, & Martini)",
    food_specials_url: "https://smalltabs.com/details.php?id=196",
  },
  {
    name: "The Scout",
    address: "South Loop @ 1301 S Wabash Ave",
    specials: "$3 Sam Adams Boston Lager Drafts",
    specials_url: "https://smalltabs.com/details.php?id=451",
  },
  {
    name: "Harbee Liquors & Tavern",
    address: "Pilsen @ 1345 W 18th St",
    specials: "$3 Budweiser & Miller Family Beers",
    specials_url: "https://smalltabs.com/details.php?id=548",
  },
  {
    name: "Big Chicks",
    address: "Uptown @ 5024 N Sheridan Rd",
    specials: "$2 off Pitchers (4-9pm)",
    specials_url: "https://smalltabs.com/details.php?id=261",
    food_specials: "$7 Third Pound Cheeseburgers with Fries",
    food_specials_url: "https://smalltabs.com/details.php?id=261",
  },
  {
    name: "Kroll's South Loop",
    address: "South Loop @ 1736 S Michigan Ave",
    specials:
      "$5 Bushmills Whiskey Cocktails (4-6pm), $4 Absolut Vodka Cocktails (4-6pm), $3 Deschutes Cans (4-6pm), $5 Keke Key Lime Martinis (4-6pm), $6 House Margaritas (4-6pm)",
    specials_url: "https://smalltabs.com/details.php?id=146",
    food_specials: "Half Price Appetizers (5-7pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=146",
  },
  {
    name: "Leona's Rogers Park",
    address: "Rogers Park @ 6935 N Sheridan Ave",
    specials:
      "$5 Cocktails (6-9pm), $5 Frozen Margaritas (6-9pm), $5 Rocks Margaritas (6-9pm), $5 Long Island Iced Teas (6-9pm)",
    specials_url: "https://smalltabs.com/details.php?id=668",
    food_specials: "$3 off Wing Dings",
    food_specials_url: "https://smalltabs.com/details.php?id=668",
  },
  {
    name: "Mr. Brown's Lounge Loop",
    address: "Loop @ 81 E Wacker Dr",
    specials:
      "Half Price Island Rum Punch (3-6pm), Half Off Red Stripe Bottles (3-6pm)",
    specials_url: "https://smalltabs.com/details.php?id=615",
  },
  {
    name: "Hopsmith Tavern",
    address: "Near North Side @ 15 W Division St",
    specials: "$6 Pabst Blue Ribbon & Jack Daniels Whiskey Shot Combo",
    specials_url: "https://smalltabs.com/details.php?id=607",
    food_specials: "Half Price Appetizers (4-6pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=607",
  },
  {
    name: "Pasta Bowl Lincoln Square",
    address: "Lincoln Square @ 4343 N Lincoln Ave",
    specials: "$5 Moscow Mules",
    specials_url: "https://smalltabs.com/details.php?id=699",
  },
  {
    name: "Clover",
    address: "Near West Side @ 722 W Grand Ave",
    specials:
      "$5 Tullamore Dew Whiskey, $8 Pabst Blue Ribbon Tallboy & Jameson Whiskey Shot Combo, Half Price Drinks (5-7pm)",
    specials_url: "https://smalltabs.com/details.php?id=625",
  },
  {
    name: "George Street Pub",
    address: "Lakeview @ 2858 N Halsted St",
    specials: "$5 Seasonal Drafts",
    specials_url: "https://smalltabs.com/details.php?id=630",
  },
  {
    name: "Leona's Hyde Park",
    address: "Hyde Park @ 1236 E 53rd St",
    specials:
      "$5 Cocktails (6-9pm), $5 Frozen Margaritas (6-9pm), $5 Rocks Margaritas (6-9pm), $5 Long Island Iced Teas (6-9pm)",
    specials_url: "https://smalltabs.com/details.php?id=666",
    food_specials: "$3 off Wing Dings",
    food_specials_url: "https://smalltabs.com/details.php?id=666",
  },
  {
    name: "Ranalli's",
    address: "Lincoln Park @ 1925 N Lincoln Ave",
    specials:
      "$7 Mules, $40 Large Specialty Cocktails (Mega Mule, Red Menace, & Tennessee Top Hat)",
    specials_url: "https://smalltabs.com/details.php?id=559",
  },
  {
    name: "Paddy O'Fegan's",
    address: "West Loop @ 204 N Halsted St",
    specials:
      "$1 off Tequila, $15 Leinenkugel's Grapefruit Shandy Buckets, $3 Miller Lite Drafts (4-7pm), $5 Rolling Rock Tallboys (4-7pm), $5 Paddy's Whiskey (4-7pm)",
    specials_url: "https://smalltabs.com/details.php?id=485",
    food_specials:
      "$10 Chicken Torta with Posole Soup, $5 Loaded Nachos (4-7pm), $3 Jalapeno & Cheddar Hot Dogs (4-7pm), $3 Wrigley Field Smokies (4-7pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=485",
  },
  {
    name: "State Restaurant",
    address: "Lincoln Park @ 935 W Webster Ave",
    food_specials:
      "$6.99 Food Menu (with drink purchase, some exclusions apply)",
    food_specials_url: "https://smalltabs.com/details.php?id=229",
  },
  {
    name: "Vaughans Pub Lakeview",
    address: "Lakeview @ 2917 N Sheffield Ave",
    specials:
      "$4.50 Blue Moon Drafts, $6 Margaritas, $6 Bombs, $16 Miller Family Buckets, $3 Domestic Bottles (4:30-6:30pm), $4 Well Drinks (4:30-6:30pm), $4.50 All American Drafts (4:30-6:30pm)",
    specials_url: "https://smalltabs.com/details.php?id=44",
    food_specials: "$2 Meatball Sliders, $2 Brisket Sliders, $5 Nachos",
    food_specials_url: "https://smalltabs.com/details.php?id=44",
  },
  {
    name: "The North End",
    address: "Lakeview @ 3733 N Halsted St",
    specials: "$5 Fireball Whiskey Shots",
    specials_url: "https://smalltabs.com/details.php?id=174",
  },
  {
    name: "WestEnd",
    address: "West Loop @ 1326 W Madison St",
    specials:
      "Half Price Drafts (excluding Guinness) (5-7pm), Half Price Wine Glasses (5-7pm), Half Price Well Drinks (5-7pm)",
    specials_url: "https://smalltabs.com/details.php?id=11",
    food_specials: "Half Price Appetizers (excluding Nachos) (5-7pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=11",
  },
  {
    name: "McGee's Tavern",
    address: "Lincoln Park @ 950 W Webster Ave",
    specials: "$3 Bud Light Drafts",
    specials_url: "https://smalltabs.com/details.php?id=21",
  },
  {
    name: "Village Tap Bar & Grill",
    address: "Roscoe Village @ 2055 W Roscoe St",
    specials:
      "$2.50 Pabst Blue Ribbon Cans, $4 Budweiser, Bud Light, Miller Lite, & Miller High Life Bottles",
    specials_url: "https://smalltabs.com/details.php?id=269",
  },
  {
    name: "Lowcountry South Loop",
    address: "South Loop @ 1132 S Wabash Ave",
    specials: "$24 Sangria Carafes (5-7pm), Half Price Beer & Wine (5-7pm)",
    specials_url: "https://smalltabs.com/details.php?id=708",
    food_specials: "$10 Mussels & Fries (5-7pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=708",
  },
  {
    name: "Celtic Crown Public House",
    address: "North Center @ 4301 N Western Ave",
    specials:
      "$4 Founders All Day IPA, $5 Stoli Vodka Mules, $2 Miller Lite Drafts (3-7pm), $2 Well Cocktails",
    specials_url: "https://smalltabs.com/details.php?id=76",
    food_specials: "$7 Turkey Pesto Sandwich, $7 Green Ranch BLT Sandwich",
    food_specials_url: "https://smalltabs.com/details.php?id=76",
  },
  {
    name: "Corcoran's Grill & Pub",
    address: "Lincoln Park @ 1615 N Wells St",
    specials:
      "$4.50 Corona & Corona Light Bottles, $7 Moscow Mules, $5 All Shots",
    specials_url: "https://smalltabs.com/details.php?id=41",
    food_specials: "$12 All-You-Can-Eat Fish & Chips",
    food_specials_url: "https://smalltabs.com/details.php?id=41",
  },
  {
    name: "Jefferson Tap & Grille",
    address: "Near West Side @ 325 N Jefferson St",
    specials:
      "$6 Sam Adams Boston Lager & Seasonal Jumbo Mugs, $5 Wine Glasses",
    specials_url: "https://smalltabs.com/details.php?id=302",
  },
  {
    name: "Brownstone Tavern",
    address: "North Center @ 3937 N Lincoln Ave",
    specials:
      "$5 Stella Artois, $5 Jameson Whiskey Shots, $7 Absolut Vodka Mules",
    specials_url: "https://smalltabs.com/details.php?id=9",
  },
  {
    name: "Crossroads Bar & Grill",
    address: "West Loop @ 1120 W Madison St",
    specials:
      "$4 Goose Island Green Line, $4 Goose Island 312, $5 Captain Morgan Rum Cocktails",
    specials_url: "https://smalltabs.com/details.php?id=267",
  },
  {
    name: "80 Proof",
    address: "Old Town @ 1500 N Wells St",
    specials:
      "$3 Tequila Shots (5-8pm), $4 All Beers (5-8pm), $5 All Call Drinks (5-8pm)",
    specials_url: "https://smalltabs.com/details.php?id=660",
  },
  {
    name: "Boiler Room",
    address: "Logan Square @ 2210 N California Ave",
    food_specials:
      "$10 PB&J Special: Pizza Slice, Pabst Blue Ribbon Tallboy, & Jameson Whiskey Shot Combo",
    food_specials_url: "https://smalltabs.com/details.php?id=333",
  },
  {
    name: "Black Rock Pub & Kitchen",
    address: "Lakeview @ 3614 N Damen Ave",
    specials:
      "$1 off Off Color Brewery Drafts & Bottles, $4 Slow & Low Rye Shots",
    specials_url: "https://smalltabs.com/details.php?id=59",
    food_specials: "40¢ Wings",
    food_specials_url: "https://smalltabs.com/details.php?id=59",
  },
  {
    name: "Rockwood Place",
    address: "Wrigleyville @ 3466 N Clark St",
    specials: "$3 Bud Light Drafts, $5 Flavored Bombs, $6 Margaritas",
    specials_url: "https://smalltabs.com/details.php?id=350",
    food_specials: "Half Price Pizzas",
    food_specials_url: "https://smalltabs.com/details.php?id=350",
  },
  {
    name: "Glascott's Saloon",
    address: "Lincoln Park @ 2158 N Halsted St",
    specials: "$5 Stella Artois Drafts, $5 Red Bull Bombs",
    specials_url: "https://smalltabs.com/details.php?id=46",
  },
  {
    name: "Goldie's",
    address: "North Center @ 3839 N Lincoln Ave",
    specials: "$1 Pabst Blue Ribbon Drafts",
    specials_url: "https://smalltabs.com/details.php?id=122",
  },
  {
    name: "Clark Street Dog",
    address: "Lakeview @ 3040 N Clark St",
    specials:
      "$2 Bud Light Drafts, $3.50 Goose Island Drafts, $3.50 Lagunitas Drafts, $5 Picklebacks, $8 Mules",
    specials_url: "https://smalltabs.com/details.php?id=472",
  },
  {
    name: "Pasta Bowl Lincoln Park",
    address: "Lincoln Park @ 2434 N Clark St",
    specials: "$5 Moscow Mules",
    specials_url: "https://smalltabs.com/details.php?id=637",
  },
  {
    name: "Cactus Bar & Grill",
    address: "Loop @ 404 S Wells St",
    specials: "$25 Lagunitas Buckets, $6 Patron Silver Tequila Shots",
    specials_url: "https://smalltabs.com/details.php?id=133",
  },
  {
    name: "Leadway Bar & Grill",
    address: "Lincoln Square @ 5223 N Damen Ave",
    specials:
      "$3 Point & Pabst Blue Ribbon Bottles, $3.50 Budweiser, Bud Light, Miller Genuine Draft, Miller Lite, Miller High Life, & Old Style Bottles",
    specials_url: "https://smalltabs.com/details.php?id=375",
  },
  {
    name: "Spyners Pub",
    address: "Lincoln Square @ 4623 N Western Ave",
    specials:
      "$3.50 Stella Artois, $3.50 Jose Cuervo Gold Tequila Shots, $3.50 Dooley's Shots",
    specials_url: "https://smalltabs.com/details.php?id=97",
  },
  {
    name: "Takito Kitchen",
    address: "Wicker Park @ 2013 W Division St",
    food_specials:
      "Brunch Served from 11am-3pm, $12 Tacos, Soup & Salad Lunch Special (from 11am-3pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=579",
  },
  {
    name: "Knife & Tine",
    address: "Lincoln Park @ 1417 W Fullerton Ave",
    specials:
      "Half Price Draft Beers (3-6pm), Half Price Craft Cocktails (3-6pm), Half Price Wine Glasses (3-6pm)",
    specials_url: "https://smalltabs.com/details.php?id=640",
    food_specials: "$5 Bar Snacks (3-6pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=640",
  },
  {
    name: "Longman & Eagle",
    address: "Logan Square @ 2657 N Kedzie Ave",
    specials:
      "$2 Old Milwaukee & Pabst Blue Ribbon Cans, $3 Old Style Drafts, $3 Select Whiskey Shots",
    specials_url: "https://smalltabs.com/details.php?id=348",
  },
  {
    name: "High Noon Saloon",
    address: "Wicker Park @ 1560 N Milwaukee Ave",
    specials: "$5 Frozen Margaritas, $5 Old Forester Bourbon Shots",
    specials_url: "https://smalltabs.com/details.php?id=601",
  },
  {
    name: "Deuces & The Diamond Club",
    address: "Wrigleyville @ 3505 N Clark St",
    specials: "$12+ Seasonal Beer Flights",
    specials_url: "https://smalltabs.com/details.php?id=408",
  },
  {
    name: "Avenue Tavern",
    address: "Lakeview @ 2916 N Broadway St",
    specials:
      "$10 Miller Lite Pitchers, $16 Margarita Pitchers, $16 Long Island Iced Tea Pitchers",
    specials_url: "https://smalltabs.com/details.php?id=170",
  },
  {
    name: "Riverview Tavern",
    address: "Roscoe Village @ 1958 W Roscoe St",
    specials:
      "$1 off Ciders, $1 off Wine Glasses, $5 Brewery-of-the-Month Drafts",
    specials_url: "https://smalltabs.com/details.php?id=220",
  },
  {
    name: "The Graystone Tavern",
    address: "Lakeview @ 3441 N Sheffield Ave",
    specials: "$5 Jack Daniels Fire Shots",
    specials_url: "https://smalltabs.com/details.php?id=653",
  },
  {
    name: "O'Donovan's Pub",
    address: "North Center @ 2100 W Irving Park Rd",
    specials:
      "$15 Giant 48oz Cocktails, $5 Margaritas, $3 Tecate Cans, $13 Tecate Buckets, $1 off Tequila Shots",
    specials_url: "https://smalltabs.com/details.php?id=157",
    food_specials: "$2 Tacos",
    food_specials_url: "https://smalltabs.com/details.php?id=157",
  },
  {
    name: "Innjoy (Logan Square)",
    address: "Logan Square @ 2200 N Milwaukee Ave",
    specials:
      "$7 Martinis, $5 Pabst Blue Ribbon Tallboy & Hipster Whiskey Shot Combo",
    specials_url: "https://smalltabs.com/details.php?id=688",
    food_specials: "$7 Bruschette",
    food_specials_url: "https://smalltabs.com/details.php?id=688",
  },
  {
    name: "Lokal Wicker Park",
    address: "Wicker Park @ 1904 W North Ave",
    food_specials: "$10 Mussels & Truffle Fries",
    food_specials_url: "https://smalltabs.com/details.php?id=471",
  },
  {
    name: "Foundation Room at House of Blues",
    address: "River North @ 329 N Dearborn St",
    specials:
      "$6 Select Wine Glasses (5-7pm), $5 Well Drinks (5-7pm), $4 Domestic Beers (5-7pm)",
    specials_url: "https://smalltabs.com/details.php?id=622",
  },
  {
    name: "Roscoe's Tavern",
    address: "Lakeview @ 3356 N Halsted St",
    specials:
      "$5 Jack Daniels Honey Shots, $5 Skyy Vodka Bombs, $15 Absolut Blue Hawaiian Pitchers, $15 Absolut Pink Lemonade Pitchers",
    specials_url: "https://smalltabs.com/details.php?id=173",
  },
  {
    name: "The Full Shilling",
    address: "Wrigleyville @ 3724 N Clark St",
    specials:
      "$5 Fireball Whiskey, $20 Table Tappers, Half Price Drinks (6-9pm)",
    specials_url: "https://smalltabs.com/details.php?id=623",
    food_specials: "$7.95 Fish & Chips, $1 Hot Dogs",
    food_specials_url: "https://smalltabs.com/details.php?id=623",
  },
  {
    name: "Crown Liquors",
    address: "Logan Square @ 2821 N Milwaukee Ave",
    specials: "$5 Craft Beers, $7 Cocktails",
    specials_url: "https://smalltabs.com/details.php?id=591",
  },
  {
    name: "The Grafton",
    address: "Lincoln Square @ 4530 N Lincoln Ave",
    specials: "$5 Berghoff Reppin' Red Drafts",
    specials_url: "https://smalltabs.com/details.php?id=260",
    food_specials: "$11 The Labor Day Burger",
    food_specials_url: "https://smalltabs.com/details.php?id=260",
  },
  {
    name: "Yak-Zies Wrigleyville",
    address: "Wrigleyville @ 3710 N Clark St",
    specials: "$5 Fat Tire, $5 Fireball Whiskey",
    specials_url: "https://smalltabs.com/details.php?id=149",
    food_specials: "$5 Fish Sandwiches",
    food_specials_url: "https://smalltabs.com/details.php?id=149",
  },
  {
    name: "J.P. Burke's Patio & Tap",
    address: "Lakeview @ 2913 N Lincoln Ave",
    specials:
      "$5 Guinness & Carlsberg Drafts, $5 Jack Daniels Whiskey Drinks, $5 Captain Morgan Rum Drinks",
    specials_url: "https://smalltabs.com/details.php?id=532",
  },
  {
    name: "Atmosphere",
    address: "Andersonville @ 5355 N Clark St",
    specials: "$5 Fireball Whiskey Shots",
    specials_url: "https://smalltabs.com/details.php?id=96",
  },
  {
    name: "Irish Eyes",
    address: "Lincoln Park @ 2519 N Lincoln Ave",
    specials: "$3.50 Pabst Blue Ribbon Tallboys",
    specials_url: "https://smalltabs.com/details.php?id=339",
  },
  {
    name: "Jerk Modern Jamaican Grill",
    address: "Noble Square @ 811 W Chicago Ave",
    specials: "$3 Mystery Beer (4-7pm), $7 Select Cocktails (4-7pm)",
    specials_url: "https://smalltabs.com/details.php?id=634",
  },
  {
    name: "Duffy's Tavern",
    address: "Lincoln Park @ 422 W Diversey Ave",
    specials:
      "$1 Miller Lite & Coors Light Bottles (5-7pm), $2 Well Drinks (5-7pm), $3 Fireball Whiskey Shots (5-7pm), $4 Wine Glasses (5-7pm)",
    specials_url: "https://smalltabs.com/details.php?id=23",
  },
  {
    name: "New Line Tavern",
    address: "West Loop @ 201 N Clinton St",
    specials: "$5 Goose Island Beers, $8 Signature Cocktails",
    specials_url: "https://smalltabs.com/details.php?id=301",
  },
  {
    name: "Blue Frog Bar & Grill",
    address: "River North @ 676 N LaSalle Dr",
    specials: "$6 Specialty Cocktails",
    specials_url: "https://smalltabs.com/details.php?id=391",
    food_specials: "Half Price Appetizers (4-8pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=391",
  },
  {
    name: "Hawkeye's Bar & Grill",
    address: "University Village @ 1458 W Taylor St",
    specials: "$10 Domestic Bottles",
    specials_url: "https://smalltabs.com/details.php?id=30",
    food_specials: "$2 Pita Pizzas (after 3pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=30",
  },
  {
    name: "G&O",
    address: "West Loop @ 459 N Ogden Ave",
    specials:
      "$3 House Whiskey or Bourbon Shot (with draft beer purchase), $3 Tito's Vodka (4-6pm), $3 Ford's Gin (4-6pm), $3 Drink of the Week (4-6pm)",
    specials_url: "https://smalltabs.com/details.php?id=641",
  },
  {
    name: "Bar Louie Dearborn Station",
    address: "Printers Row @ 47 W Polk St",
    food_specials:
      "Half Price Select Appetizers (4-7pm), Half Price Flatbreads (4-7pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=567",
  },
  {
    name: "Nisei Lounge",
    address: "Wrigleyville @ 3439 N Sheffield Ave",
    specials:
      "$5 Jameson Whiskey Shots, $3 Mickey's Big Mouth Bottles, $4 Old Style Tallboys, $4 Pabst Blue Ribbon Drafts, $3 Malort Shots",
    specials_url: "https://smalltabs.com/details.php?id=307",
  },
  {
    name: "Simone's Bar",
    address: "Pilsen @ 960 W 18th St",
    food_specials: "$8 Half Pound Burger & Pabst Blue Ribbon Tallboy Combo",
    food_specials_url: "https://smalltabs.com/details.php?id=107",
  },
  {
    name: "Sheffield's",
    address: "Lakeview @ 3258 N Sheffield Ave",
    specials: "$4 Brewery-of-the-Month Drafts",
    specials_url: "https://smalltabs.com/details.php?id=54",
  },
  {
    name: "The Cubby Bear",
    address: "Wrigleyville @ 1059 W Addison St",
    specials: "$5 Domestic Tallboys",
    specials_url: "https://smalltabs.com/details.php?id=150",
  },
  {
    name: "Ravenswood Station Bar & Grill",
    address: "Lincoln Square @ 4709 N Damen Ave",
    specials:
      "$7 Call Vodka Mixed Drinks, $6.50 Guinness 20oz Drafts, $5.50 Fat Tire Drafts",
    specials_url: "https://smalltabs.com/details.php?id=100",
    food_specials: "$6.75 Fish & Chips, $7 Grilled Fish Tacos",
    food_specials_url: "https://smalltabs.com/details.php?id=100",
  },
  {
    name: "Rudy's Bar & Grille",
    address: "Loop @ 69 E Madison St",
    food_specials:
      "$11.95 Fish & Chips, $12.95 Salmon Burgers, Half Price Appetizers (3-5pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=380",
  },
  {
    name: "Country Club Bar",
    address: "Wrigleyville @ 3462 N Clark St",
    specials:
      "$6 Tito's Vodka Cocktails, $4 Revolution Anti-Hero, $3 Shiner Premium",
    specials_url: "https://smalltabs.com/details.php?id=207",
    food_specials: "Half Price Appetizers",
    food_specials_url: "https://smalltabs.com/details.php?id=207",
  },
  {
    name: "The Kerryman",
    address: "Near North Side @ 661 N Clark St",
    specials:
      "$4 Guiness (4-9pm), $5 Jameson Shots (4-9pm), $6 Tito's Vodka Drinks (4-9pm)",
    specials_url: "https://smalltabs.com/details.php?id=62",
    food_specials: "$10 Fish & Chips (4-9pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=62",
  },
  {
    name: "Southport Lanes",
    address: "Lakeview @ 3325 N Southport Ave",
    specials: "$3 Schiltz Drafts",
    specials_url: "https://smalltabs.com/details.php?id=281",
  },
  {
    name: "Wild Goose Bar & Grill",
    address: "North Center @ 4265 N Lincoln Ave",
    specials:
      "$5 Guinness Imperial Drafts, $5 Metropolitan Flywheel Drafts, $5 Select Martinis",
    specials_url: "https://smalltabs.com/details.php?id=37",
    food_specials: "$8 All-You-Can-Eat Fish Fry",
    food_specials_url: "https://smalltabs.com/details.php?id=37",
  },
  {
    name: "Headquarters Beercade River North",
    address: "River North @ 213 W Institute St",
  },
  {
    name: "Rockit Burger Bar",
    address: "Wrigleyville @ 3700 N Clark St",
    specials: "$3 Select Beers, $5 Evan Williams Whiskey Shots",
    specials_url: "https://smalltabs.com/details.php?id=233",
  },
  {
    name: "River Shannon",
    address: "Lincoln Park @ 425 W Armitage Ave",
    specials: "$6 Stoli Vodka, $6 Stella Artois Bottles",
    specials_url: "https://smalltabs.com/details.php?id=70",
  },
  {
    name: "Raw Bar & Grill",
    address: "Wrigleyville @ 3720 N Clark St",
    specials:
      "$2.50 Domestic Beers (4-7pm), $3.50 Craft Drafts (4-7pm), $3 Well Mixers (4-7pm)",
    specials_url: "https://smalltabs.com/details.php?id=205",
    food_specials: "Half Price Appetizers",
    food_specials_url: "https://smalltabs.com/details.php?id=205",
  },
  {
    name: "Hash House a Go Go",
    address: "Near North Side @ 1212 N State St",
    food_specials: "$14.95 Fried or Roasted Chicken Dinner",
    food_specials_url: "https://smalltabs.com/details.php?id=600",
  },
  {
    name: "Sidebar Grille",
    address: "Loop @ 221 N LaSalle St",
    specials:
      "$3 Fernet or Fireball Shots (4pm-Close), $5 Draft Beers (4-6pm), $6 Select Wine Glasses (4-6pm), $7 Svedka Vodka Mules (4-6pm)",
    specials_url: "https://smalltabs.com/details.php?id=10",
    food_specials: "$10 Featured Flatbread (4pm-Close)",
    food_specials_url: "https://smalltabs.com/details.php?id=10",
  },
  {
    name: "Flo & Santos",
    address: "South Loop @ 1310 S Wabash Ave",
    specials: "$18 Polish Vodka Flights",
    specials_url: "https://smalltabs.com/details.php?id=489",
  },
  {
    name: "Commonwealth Tavern",
    address: "Roscoe Village @ 2000 W Roscoe St",
    specials: "$6 Craft Cocktails (4-7pm), $6 Moscow Mules, $6 Summer Sunsets",
    specials_url: "https://smalltabs.com/details.php?id=588",
    food_specials: "Half Price Appetizers (3-7pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=588",
  },
  {
    name: "Franklin Tap",
    address: "Loop @ 325 S Franklin St",
    specials:
      "$5 Two Brothers Pale Frank Drafts, $5 Yukon Jack Wicked Hot Shots",
    specials_url: "https://smalltabs.com/details.php?id=135",
    food_specials: "$5 Select Appetizers (after 5pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=135",
  },
  {
    name: "Derby Bar & Grill",
    address: "Lincoln Park @ 1224 W Webster Ave",
    specials:
      "$20 Fish Bowls, $7 Lagunitas Fatpours, $5 Pabst Blue Ribbon Can & Select Shot Combo",
    specials_url: "https://smalltabs.com/details.php?id=458",
    food_specials: "Half Price Appetizers (4-6pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=458",
  },
  {
    name: "Wheel House",
    address: "Lakeview @ 3553 N Southport Ave",
    specials: "$5 UV Bombs, $4 Craft Can Beers",
    specials_url: "https://smalltabs.com/details.php?id=169",
    food_specials: "$7 Fish & Chips, $10 Crab Cake Melts",
    food_specials_url: "https://smalltabs.com/details.php?id=169",
  },
  {
    name: "The Hidden Shamrock",
    address: "Lincoln Park @ 2723 N Halsted St",
    specials:
      "Half Price Craft Cocktails, $3 Rotating Drafts, $3 Whiskey Shots",
    specials_url: "https://smalltabs.com/details.php?id=336",
  },
  {
    name: "Stretch Bar & Grill",
    address: "Wrigleyville @ 3485 N Clark St",
    specials:
      "$30 Domestic Tallboys, Domestic Drafts, Call Cocktails, Wine, & Select Appetizers Happy Hour Package (7-10pm), $25 Domestic Drafts, Well Cocktails, Wine, & Select Appetizer Happy Hour Package (7-10pm)",
    specials_url: "https://smalltabs.com/details.php?id=81",
  },
  {
    name: "Delilah's",
    address: "Lincoln Park @ 2771 N Lincoln Ave",
    specials: "$3 Labatt Blue, $3 Maker's Mark Bourbon",
    specials_url: "https://smalltabs.com/details.php?id=26",
  },
  {
    name: "Streeter's Tavern",
    address: "Near North Side @ 50 E Chicago Ave",
    specials: "$5 Jim Beam Bourbon",
    specials_url: "https://smalltabs.com/details.php?id=72",
  },
];

const friday = [
  {
    name: "Gaslight Bar & Grille",
    address: "Lincoln Park @ 2450 N Clark St",
    specials:
      "$15 Domestic Buckets, $5 Tullamore Dew Whiskey Shots, $5 Trop Bombs, $3.50 College Beer of the Day",
    specials_url: "https://smalltabs.com/details.php?id=358",
    food_specials:
      "Free Burgers (with beverage purchase, limited quantities), Half Price Appetizers (5-7pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=358",
  },
  {
    name: "WestEnd",
    address: "West Loop @ 1326 W Madison St",
    specials:
      "Half Price Drafts (excluding Guinness) (5-7pm), Half Price Wine Glasses (5-7pm), Half Price Well Drinks (5-7pm)",
    specials_url: "https://smalltabs.com/details.php?id=11",
    food_specials: "Half Price Appetizers (excluding Nachos) (5-7pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=11",
  },
  {
    name: "Woodhaven Bar & Kitchen",
    address: "River North @ 712 N Clark St",
    specials: "$7 Pabst Blue Ribbon & Jameson Whiskey Boilermakers (5-8pm)",
    specials_url: "https://smalltabs.com/details.php?id=331",
  },
  {
    name: "Moe's Tavern",
    address: "Avondale @ 2937 N Milwaukee Ave",
    specials:
      "$3 Pabst Blue Ribbon Drafts, $3 Malort Shots, $3 Zacharias Harris Bourbon, $3 Well Drinks, $3 Craft Beer of the Month",
    specials_url: "https://smalltabs.com/details.php?id=423",
  },
  {
    name: "Mr. Brown's Lounge West Town",
    address: "Ukrainian Village @ 2301 W Chicago Ave",
    specials:
      "$7 Rum Punch (3-6pm), $4 Jameson Whiskey Shots (3-6pm), $4 Red Stripe Bottles (3-6pm)",
    specials_url: "https://smalltabs.com/details.php?id=363",
  },
  {
    name: "Distilled Chicago",
    address: "Lincoln Park @ 1480 W Webster Ave",
    food_specials: "$10 Country Fried Chicken Sandwich",
    food_specials_url: "https://smalltabs.com/details.php?id=656",
  },
  {
    name: "Cellars Bar & Grill",
    address: "Edgewater @ 5900 N Broadway St",
    specials: "$5 Sobieski Vodka Martinis (5-10pm)",
    specials_url: "https://smalltabs.com/details.php?id=620",
  },
  {
    name: "Tai's Til 4",
    address: "Lakeview @ 3611 N Ashland Ave",
    specials: "$7 Flagship Bombs",
    specials_url: "https://smalltabs.com/details.php?id=549",
  },
  {
    name: "Rudy's Bar & Grille",
    address: "Loop @ 69 E Madison St",
    food_specials:
      "$11.95 Fish & Chips, $12.95 Salmon Burgers, Half Price Appetizers (3-5pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=380",
  },
  {
    name: "Monty's Tap",
    address: "Near North Side @ 600 W Chicago Ave",
    specials:
      "$4 Select Beers (3:30-5:30pm), $6 Moscow Mules (3:30-5:30pm), $7 Sauvignon Blanc, Pinot Noir, & Rosé Glasses (3:30-5:30pm)",
    specials_url: "https://smalltabs.com/details.php?id=707",
  },
  {
    name: "Fat Cat",
    address: "Uptown @ 4840 N Broadway St",
    specials:
      "$6 Uptown Royale (4-6pm), $6 Four Roses Manhattan (4-6pm), $6 Prairie Organic Gin & Ginger (4-6pm), $5 Select Craft Beers (4-6pm), $5 Highballs (4-6pm), $6 Select Wines (4-6pm)",
    specials_url: "https://smalltabs.com/details.php?id=120",
  },
  {
    name: "Taco Joint Lincoln Park",
    address: "Lincoln Park @ 1969 N Halsted St",
    specials: "$5 Modelo Especial Can & Olmeca Tequila Blanco Shot Combo",
    specials_url: "https://smalltabs.com/details.php?id=541",
  },
  {
    name: "Foundation Room at House of Blues",
    address: "River North @ 329 N Dearborn St",
    specials:
      "$6 Select Wine Glasses (5-7pm), $5 Well Drinks (5-7pm), $4 Domestic Beers (5-7pm)",
    specials_url: "https://smalltabs.com/details.php?id=622",
  },
  {
    name: "The Temple Bar",
    address: "Lakeview @ 3001 N Ashland Ave",
    specials: "$4 Lagunitas Drafts",
    specials_url: "https://smalltabs.com/details.php?id=305",
    food_specials: "$8.25 Fish & Chips",
    food_specials_url: "https://smalltabs.com/details.php?id=305",
  },
  {
    name: "Fireside Restaurant & Lounge",
    address: "Edgewater @ 5739 N Ravenswood Ave",
    specials: "$2.25 Pabst Blue Ribbon Tallboys",
    specials_url: "https://smalltabs.com/details.php?id=441",
    food_specials: "Complimentary Happy Hour Buffet (4-6pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=441",
  },
  {
    name: "Sports Corner Bar & Grill",
    address: "Wrigleyville @ 956 W Addison St",
    specials: "$5 You-Call-Its",
    specials_url: "https://smalltabs.com/details.php?id=328",
    food_specials: "$2 Sliders",
    food_specials_url: "https://smalltabs.com/details.php?id=328",
  },
  {
    name: "Pippin's Tavern",
    address: "Near North Side @ 806 N Rush St",
    specials:
      "$5.50 Malort, $5 Maestro Dobel Tequila, $4 Wondermint, $5 Revel Stoke Roasted Pecan Whiskey, $6 Don Q Gran Anejo Mules, $6 Bulldog Gin Rickeys",
    specials_url: "https://smalltabs.com/details.php?id=71",
  },
  {
    name: "Toon's Bar & Grill",
    address: "Lakeview @ 3857 N Southport Ave",
    specials: "$1 off Stoli Vodka Cocktails, $4.50 Lagunitas Drafts",
    specials_url: "https://smalltabs.com/details.php?id=203",
    food_specials: "$10 House-Smoked Baby Back Ribs, $4.50 Po'boys",
    food_specials_url: "https://smalltabs.com/details.php?id=203",
  },
  {
    name: "Innjoy (Logan Square)",
    address: "Logan Square @ 2200 N Milwaukee Ave",
    specials:
      "$7 Martinis, $5 Pabst Blue Ribbon Tallboy & Hipster Whiskey Shot Combo",
    specials_url: "https://smalltabs.com/details.php?id=688",
    food_specials: "$7 Bruschette",
    food_specials_url: "https://smalltabs.com/details.php?id=688",
  },
  {
    name: "Cleo's",
    address: "Ukrainian Village @ 1935 W Chicago Ave",
    specials: "$2 off Bulleit Whiskey, $4 Well Drinks",
    specials_url: "https://smalltabs.com/details.php?id=49",
    food_specials: "$6 Fish & Chips",
    food_specials_url: "https://smalltabs.com/details.php?id=49",
  },
  {
    name: "Jack & Gingers",
    address: "Bucktown @ 2048 W Armitage Ave",
    specials: "$4 Well Drinks, $2 off Bulleit Whiskey, $5 Jack & Gingers",
    specials_url: "https://smalltabs.com/details.php?id=50",
    food_specials: "$6 Fish & Chips",
    food_specials_url: "https://smalltabs.com/details.php?id=50",
  },
  {
    name: "Havana",
    address: "River North @ 412 N Clark St",
    specials: "$20 House Mojito Pitchers",
    specials_url: "https://smalltabs.com/details.php?id=417",
  },
  {
    name: "Pasta Bowl Wicker Park",
    address: "Wicker Park @ 1852 W North Ave",
    specials: "$5 Moscow Mules",
    specials_url: "https://smalltabs.com/details.php?id=638",
  },
  {
    name: "The Hidden Shamrock",
    address: "Lincoln Park @ 2723 N Halsted St",
    specials:
      "Half Price Craft Cocktails, $3 Rotating Drafts, $3 Whiskey Shots",
    specials_url: "https://smalltabs.com/details.php?id=336",
  },
  {
    name: "The Grafton",
    address: "Lincoln Square @ 4530 N Lincoln Ave",
    specials: "$5 Berghoff Reppin' Red Drafts",
    specials_url: "https://smalltabs.com/details.php?id=260",
    food_specials: "$11 The Labor Day Burger",
    food_specials_url: "https://smalltabs.com/details.php?id=260",
  },
  {
    name: "Avenue Tavern",
    address: "Lakeview @ 2916 N Broadway St",
    specials:
      "$10 Miller Lite Pitchers, $16 Margarita Pitchers, $16 Long Island Iced Tea Pitchers",
    specials_url: "https://smalltabs.com/details.php?id=170",
  },
  {
    name: "Weather Mark Tavern",
    address: "South Loop @ 1503 S Michigan Ave",
    specials: "$2 off All Drafts (3-6pm), $5 Lagunitas Beers",
    specials_url: "https://smalltabs.com/details.php?id=143",
    food_specials: "$12.50 All-You-Can-Eat Fish Fry",
    food_specials_url: "https://smalltabs.com/details.php?id=143",
  },
  {
    name: "City Pool Hall",
    address: "West Loop @ 640 W Hubbard St",
    specials: "$4 Modelo & Corona",
    specials_url: "https://smalltabs.com/details.php?id=561",
  },
  {
    name: "Redmond's Ale House",
    address: "Wrigleyville @ 3358 N Sheffield Ave",
    specials:
      "$3 Tallboys, $4 Fireball Whiskey Shots, $6 Jameson Whiskey Shots",
    specials_url: "https://smalltabs.com/details.php?id=20",
  },
  {
    name: "Crossroads Public House",
    address: "Lincoln Park @ 2630 N Clark St",
    specials:
      "$4 Fireball Whiskey Shots, $5 Featured Cocktails, $5 Three Olvie Vodka Bombs, $10 Long Island Iced Tea Pitchers",
    specials_url: "https://smalltabs.com/details.php?id=208",
  },
  {
    name: "Spyners Pub",
    address: "Lincoln Square @ 4623 N Western Ave",
    specials:
      "$3.50 Stella Artois, $3.50 Jose Cuervo Gold Tequila Shots, $3.50 Dooley's Shots",
    specials_url: "https://smalltabs.com/details.php?id=97",
  },
  {
    name: "J & M Tap",
    address: "Ukrainian Village @ 957 N Leavitt St",
    specials:
      "$2 Pabst Blue Ribbon Drafts, $2.25 Point Drafts, $3 Domestic Bottles, $3 Pabst Blue Ribbon & Schiltz Tallboys, $4 Stella Artois Drafts, $4 Import & Craft Bottles, $4 Jameson Whiskey Shots, $4 Jim Beam Bourbon & Rye Shots, $5 Makers Mark Bourbon Drinks, $5 Stoli Vodka Drinks, $5 Crown Royal Whiskey Drinks",
    specials_url: "https://smalltabs.com/details.php?id=540",
  },
  {
    name: "The Irish Oak",
    address: "Wrigleyville @ 3511 N Clark St",
    specials: "$6 Budweiser Tallboys & Shot Combo, $25 Fish Bowls",
    specials_url: "https://smalltabs.com/details.php?id=199",
    food_specials: "$10 All-You-Can-Eat Fish & Chips",
    food_specials_url: "https://smalltabs.com/details.php?id=199",
  },
  {
    name: "Dugan's on Halsted",
    address: "West Loop @ 128 S Halsted St",
    specials:
      "$2.50 Bud Light Drafts, $3.50 Hoegaarden, $2.50 Pabst Blue Ribbon Bottles",
    specials_url: "https://smalltabs.com/details.php?id=424",
  },
  {
    name: "Leona's Hyde Park",
    address: "Hyde Park @ 1236 E 53rd St",
    specials:
      "$5 Cocktails (6-9pm), $5 Frozen Margaritas (6-9pm), $5 Rocks Margaritas (6-9pm), $5 Long Island Iced Teas (6-9pm)",
    specials_url: "https://smalltabs.com/details.php?id=666",
    food_specials: "$3 off Wing Dings",
    food_specials_url: "https://smalltabs.com/details.php?id=666",
  },
  {
    name: "O'Donovan's Pub",
    address: "North Center @ 2100 W Irving Park Rd",
    specials:
      "$15 Giant 48oz Cocktails, $5 Margaritas, $3 Tecate Cans, $13 Tecate Buckets, $1 off Tequila Shots",
    specials_url: "https://smalltabs.com/details.php?id=157",
    food_specials: "$2 Tacos",
    food_specials_url: "https://smalltabs.com/details.php?id=157",
  },
  {
    name: "Monk's Pub",
    address: "Loop @ 205 W Lake St",
    specials:
      "$4 Budweiser, Bud Light, Coors Light, Miller High Life, Miller Lite, Old Style, & Schiltz Bottles",
    specials_url: "https://smalltabs.com/details.php?id=144",
  },
  {
    name: "Francois Frankie",
    address: "Loop @ 222 W Randolph St",
    specials:
      "$5 Drafts (3-6pm), $10 Red & White Wine Glasses (3-6pm), $10 Cocktail of the Week (3-6pm)",
    specials_url: "https://smalltabs.com/details.php?id=712",
  },
  {
    name: "Mrs. Murphy & Sons Irish Bistro",
    address: "North Center @ 3905 N Lincoln Ave",
    specials:
      "$5 Specialty Irish Cocktails (4:30-6:30pm), $5 Irish Beers (4:30-6:30pm)",
    specials_url: "https://smalltabs.com/details.php?id=651",
    food_specials: "$5 Appetizer Bites (4:30-6:30pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=651",
  },
  {
    name: "Finley Dunne's Tavern",
    address: "Lakeview @ 3458 N Lincoln Ave",
    specials: "$5 UV Vodka Bombs, $2 Miller High Life Drafts",
    specials_url: "https://smalltabs.com/details.php?id=5",
    food_specials: "$12 All-You-Can-Eat Blue Moon Fish Fry",
    food_specials_url: "https://smalltabs.com/details.php?id=5",
  },
  {
    name: "Butch McGuires",
    address: "Near North Side @ 20 W Division St",
    specials:
      "$5 Sam Adams Lager Drafts, $5 Sam Adams Seasonal Drafts, $4 Mystery Shots, Half Price Drafts (5-7pm), Half Price Mixed Drinks (5-7pm), Half Price Wine (5-7pm)",
    specials_url: "https://smalltabs.com/details.php?id=617",
  },
  {
    name: "O'Shaughnessy's Public House",
    address: "Lincoln Square @ 4557 N Ravenswood Ave",
    specials: "$5 Founders All-Day IPA",
    specials_url: "https://smalltabs.com/details.php?id=299",
    food_specials: "$10.95 All-You-Can-Eat Fish & Chips, $12.50 Fish Tacos",
    food_specials_url: "https://smalltabs.com/details.php?id=299",
  },
  {
    name: "Merkle's Bar & Grill",
    address: "Wrigleyville @ 3516 N Clark St",
    specials:
      "$3 Domestic Cans, $4 Well Cocktails, $4 Bloody Marys, $5 Craft Drafts, $5 Crown Apple Shots",
    specials_url: "https://smalltabs.com/details.php?id=18",
    food_specials: "$2 Tacos, $4 Burger & Fries",
    food_specials_url: "https://smalltabs.com/details.php?id=18",
  },
  {
    name: "Ovie Bar & Grill",
    address: "West Loop @ 120 N Canal St",
    specials: "$6 Craft Beer Drafts (3-6pm), $7 Select Wine Glasses (3-6pm)",
    specials_url: "https://smalltabs.com/details.php?id=501",
  },
  {
    name: "Derby Bar & Grill",
    address: "Lincoln Park @ 1224 W Webster Ave",
    specials:
      "$20 Fish Bowls, $7 Lagunitas Fatpours, $5 Pabst Blue Ribbon Can & Select Shot Combo",
    specials_url: "https://smalltabs.com/details.php?id=458",
    food_specials: "Half Price Appetizers (4-6pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=458",
  },
  {
    name: "Small Bar Logan Square",
    address: "Logan Square @ 2956 N Albany Ave",
    specials:
      "$3 Pabst Blue Ribbon Bottles, $3 Miller Lite & Miller High Life Cans",
    specials_url: "https://smalltabs.com/details.php?id=80",
  },
  {
    name: "Third Rail Tavern",
    address: "West Loop @ 1133 W Madison St",
    specials:
      "$5 Goose Island, Three Floyds, & Bell's Brewery Drafts (5-9pm), $8 Bulleit Bourbon or Rye Manhattans (5-9pm), $8 Bulleit Bourbon or Rye Old Fashioneds (5-9pm)",
    specials_url: "https://smalltabs.com/details.php?id=303",
  },
  {
    name: "6 Degrees",
    address: "Bucktown @ 1935 N Damen Ave",
    specials: "$5 Fireball Whiskey",
    specials_url: "https://smalltabs.com/details.php?id=225",
  },
  {
    name: "Brando's Speakeasy",
    address: "Loop @ 343 S Dearborn St",
    specials:
      "$3 Bud Light, $3 Old Style, Pabst Blue Ribbon, & Miller High Life Tallboys",
    specials_url: "https://smalltabs.com/details.php?id=276",
  },
  {
    name: "G&O",
    address: "West Loop @ 459 N Ogden Ave",
    specials:
      "$3 House Whiskey or Bourbon Shot (with draft beer purchase), $3 Tito's Vodka (4-6pm), $3 Ford's Gin (4-6pm), $3 Drink of the Week (4-6pm)",
    specials_url: "https://smalltabs.com/details.php?id=641",
  },
  {
    name: "Grandview Tavern",
    address: "West Loop @ 1202 W Grand Ave",
    specials:
      "$3 Hamms Cans, $5 Jameson Whiskey Shots, $5 Fireball Whiskey Shots",
    specials_url: "https://smalltabs.com/details.php?id=476",
    food_specials: "$9 Fish Tacos",
    food_specials_url: "https://smalltabs.com/details.php?id=476",
  },
  {
    name: "Takito Kitchen",
    address: "Wicker Park @ 2013 W Division St",
    food_specials:
      "Brunch Served from 11am-3pm, $12 Tacos, Soup & Salad Lunch Special (from 11am-3pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=579",
  },
  {
    name: "AliveOne",
    address: "Lincoln Park @ 2683 N Halsted St",
    specials: "$5 Jameson Shots, $3 Pabst Blue Ribbon Bottles",
    specials_url: "https://smalltabs.com/details.php?id=214",
  },
  {
    name: "Subterranean Lounge",
    address: "Wicker Park @ 2011 W North Ave",
    specials: "$5 UV Vodka Cocktails",
    specials_url: "https://smalltabs.com/details.php?id=56",
  },
  {
    name: "Sluggers",
    address: "Wrigleyville @ 3540 N Clark St",
    specials:
      "$6 Goose Island Green Line Drafts, $6 Sam Adams Drafts, $6 Pinnacle Flavored Vodka Cocktails",
    specials_url: "https://smalltabs.com/details.php?id=53",
  },
  {
    name: "The Bedford",
    address: "Wicker Park @ 1612 W Division St",
    specials: "$8 Draft Cocktails",
    specials_url: "https://smalltabs.com/details.php?id=416",
  },
  {
    name: "River Shannon",
    address: "Lincoln Park @ 425 W Armitage Ave",
    specials: "$6 Stoli Vodka, $6 Stella Artois Bottles",
    specials_url: "https://smalltabs.com/details.php?id=70",
  },
  {
    name: "Porter Kitchen & Deck",
    address: "West Loop @ 150 N Riverside Ave",
    specials:
      "$7 Moscow Mules (3:30-5:30pm), $8 Classic Margaritas (3:30-5:30pm), $9 Old Fashioneds (3:30-5:30pm), $9 Select Wine Glasses (3:30-5:30pm)",
    specials_url: "https://smalltabs.com/details.php?id=682",
  },
  {
    name: "Bridge House Tavern",
    address: "River North @ 321 N Clark St",
    specials: "$20 Tiger Tallboy Buckets",
    specials_url: "https://smalltabs.com/details.php?id=484",
  },
  {
    name: "Mac's Wood Grilled",
    address: "Wicker Park @ 1801 W Division St",
    specials: "$4 Paddy Irish Whiskey Shots, $5 Moscow Mules",
    specials_url: "https://smalltabs.com/details.php?id=631",
  },
  {
    name: "Edison Park Inn",
    address: "Edison Park @ 6715 N Olmsted Ave",
    specials: "$16 Domestic Bottles, $2 Shot of the Day",
    specials_url: "https://smalltabs.com/details.php?id=190",
  },
  {
    name: "Harbee Liquors & Tavern",
    address: "Pilsen @ 1345 W 18th St",
    specials: "$3 Budweiser & Miller Family Beers",
    specials_url: "https://smalltabs.com/details.php?id=548",
  },
  {
    name: "Jefferson Tap & Grille",
    address: "Near West Side @ 325 N Jefferson St",
    specials:
      "$6 Sam Adams Boston Lager & Seasonal Jumbo Mugs, $5 Wine Glasses",
    specials_url: "https://smalltabs.com/details.php?id=302",
  },
  {
    name: "Bulldog Ale House (South Loop)",
    address: "South Loop @ 901 S State St",
    specials: "$5 Jameson Whiskey, $5 Guinness, $6 Irish Car Bombs",
    specials_url: "https://smalltabs.com/details.php?id=686",
    food_specials: "$10.99 All-You-Can-Eat Fish Fry",
    food_specials_url: "https://smalltabs.com/details.php?id=686",
  },
  {
    name: "Duffy's Tavern",
    address: "Lincoln Park @ 422 W Diversey Ave",
    specials:
      "$1 Miller Lite & Coors Light Bottles (5-7pm), $2 Well Drinks (5-7pm), $3 Fireball Whiskey Shots (5-7pm), $4 Wine Glasses (5-7pm)",
    specials_url: "https://smalltabs.com/details.php?id=23",
  },
  {
    name: "The Abbey Pub",
    address: "Irving Park @ 3420 W Grace St",
    specials: "$4 Smithwicks, $4 Harp, $5 Jameson Black, $5 2 Gingers Whiskey",
    specials_url: "https://smalltabs.com/details.php?id=31",
    food_specials: "$9.95 Fish & Chips, Half Price Appetizers until 6pm",
    food_specials_url: "https://smalltabs.com/details.php?id=31",
  },
  {
    name: "The Kerryman",
    address: "Near North Side @ 661 N Clark St",
    specials:
      "$4 Guiness (4-9pm), $5 Jameson Shots (4-9pm), $6 Tito's Vodka Drinks (4-9pm)",
    specials_url: "https://smalltabs.com/details.php?id=62",
    food_specials: "$10 Fish & Chips (4-9pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=62",
  },
  {
    name: "Boiler Room",
    address: "Logan Square @ 2210 N California Ave",
    food_specials:
      "$10 PB&J Special: Pizza Slice, Pabst Blue Ribbon Tallboy, & Jameson Whiskey Shot Combo",
    food_specials_url: "https://smalltabs.com/details.php?id=333",
  },
  {
    name: "Scarlet Bar",
    address: "Lakeview @ 3320 N Halsted St",
    specials: "$6 Ketel One Vodka Cocktails",
    specials_url: "https://smalltabs.com/details.php?id=262",
  },
  {
    name: "Kincade's Bar & Grill",
    address: "Lincoln Park @ 950 W Armitage Ave",
    specials:
      "$4 Draft of the Day, $6 Makers Mark Bourbon Cocktails, $7 Pabst Blue Ribbon & Jameson Whiskey Shot Combo",
    specials_url: "https://smalltabs.com/details.php?id=153",
  },
  {
    name: "Dimo's Pizza",
    address: "Wicker Park @ 1615 N Damen Ave",
    food_specials:
      "$9 Pizza Slice, Bourbon Shot, & Pabst Blue Ribbon or Miller High Life Tallboy Combo",
    food_specials_url: "https://smalltabs.com/details.php?id=679",
  },
  {
    name: "Clover",
    address: "Near West Side @ 722 W Grand Ave",
    specials:
      "$5 Tullamore Dew Whiskey, $8 Pabst Blue Ribbon Tallboy & Jameson Whiskey Shot Combo, Half Price Drinks (5-7pm)",
    specials_url: "https://smalltabs.com/details.php?id=625",
  },
  {
    name: "Taqueria & Bar",
    address: "Lincoln Park @ 1450 W Webster Ave",
    specials: "$4 Shots, $2 Grab Bag Beers",
    specials_url: "https://smalltabs.com/details.php?id=565",
  },
  {
    name: "Corcoran's Grill & Pub",
    address: "Lincoln Park @ 1615 N Wells St",
    specials:
      "$4.50 Corona & Corona Light Bottles, $7 Moscow Mules, $5 All Shots",
    specials_url: "https://smalltabs.com/details.php?id=41",
    food_specials: "$12 All-You-Can-Eat Fish & Chips",
    food_specials_url: "https://smalltabs.com/details.php?id=41",
  },
  {
    name: "Matisse Tavern & Grill",
    address: "Lincoln Park @ 674 W Diversey Pkwy",
    specials: "$5 Martinis",
    specials_url: "https://smalltabs.com/details.php?id=222",
  },
  {
    name: "Brickhouse Tavern",
    address: "Wrigleyville @ 3647 N Clark St",
    specials: "$5 You-Call-It's",
    specials_url: "https://smalltabs.com/details.php?id=681",
    food_specials: "Half Price Appetizers (after 3pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=681",
  },
  {
    name: "Bottom Lounge",
    address: "West Loop @ 1375 W Lake St",
    specials: "$3.50 Schiltz Drafts, $4 Budweiser & Bud Light Bottles",
    specials_url: "https://smalltabs.com/details.php?id=436",
  },
  {
    name: "Hash House a Go Go",
    address: "Near North Side @ 1212 N State St",
    food_specials: "$14.95 Fried or Roasted Chicken Dinner",
    food_specials_url: "https://smalltabs.com/details.php?id=600",
  },
  {
    name: "Cortland's Garage",
    address: "Bucktown @ 1645 W Cortland St",
    food_specials: "Buy One, Get One Free Appetizers from 2pm-6pm",
    food_specials_url: "https://smalltabs.com/details.php?id=60",
  },
  {
    name: "Alice's Lounge",
    address: "Avondale @ 3556 W Belmont Ave",
  },
  {
    name: "Blackfinn Ameripub",
    address: "River North @ 65 W Kinzie St",
    specials: "$5 Bacardi Cocktails",
    specials_url: "https://smalltabs.com/details.php?id=543",
  },
  {
    name: "Mother's Too",
    address: "Near North Side @ 14 W Division St",
    specials: "$5 Sailor Jerry Rum, $5.50 Jim Beam Bourbon",
    specials_url: "https://smalltabs.com/details.php?id=67",
  },
  {
    name: "Davenport's Piano Bar",
    address: "Wicker Park @ 1383 N Milwaukee Ave",
  },
  {
    name: "Christina's Place",
    address: "Irving Park @ 3759 N Kedzie Ave",
    specials:
      "$2 Pabst Blue Ribbon Cans, $3 Guinness Drafts, $5 Jameson Whiskey Shots, $5 Malort Shots, $5 Fireball Whiskey Shots",
    specials_url: "https://smalltabs.com/details.php?id=235",
  },
  {
    name: "Mad River Bar & Grille",
    address: "Lakeview @ 2909 N Sheffield Ave",
    food_specials: "Half Price Appetizers (5-8pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=317",
  },
  {
    name: "Leona's Stony Island",
    address: "Calumet Heights @ 9157 S Stony Island Ave",
    specials:
      "$5 Cocktails (6-9pm), $5 Frozen Margaritas (6-9pm), $5 Rocks Margaritas (6-9pm), $5 Long Island Iced Teas (6-9pm)",
    specials_url: "https://smalltabs.com/details.php?id=669",
    food_specials: "$3 off Wing Dings",
    food_specials_url: "https://smalltabs.com/details.php?id=669",
  },
  {
    name: "Wild Goose Bar & Grill",
    address: "North Center @ 4265 N Lincoln Ave",
    specials:
      "$5 Guinness Imperial Drafts, $5 Metropolitan Flywheel Drafts, $5 Select Martinis",
    specials_url: "https://smalltabs.com/details.php?id=37",
    food_specials: "$8 All-You-Can-Eat Fish Fry",
    food_specials_url: "https://smalltabs.com/details.php?id=37",
  },
  {
    name: "Four Star Lounge",
    address: "Lincoln Park @ 2666 N Halsted St",
    specials:
      "$4 Jack Daniels Whiskey, Jim Beam Bourbon, Bacardi Rum, Jose Cuervo Tequila, Ketel One Vodka, & Beefeater Gin Well Drinks (5-8pm), $4 Revolution Fist City, Revolution Anti-Hero, Goose Island 312, Revolution Eugene Porter, and Blue Moon (5-8pm), $5 House Cabernet & Chardonnay Wine Glasses (5-8pm), $2 Malort Shots (5-8pm), $2 Fireball Whiskey Shots (5-8pm), $3 Jameson Whiskey Shots (5-8pm), $3 Jim Beam Bourbon Shots (5-8pm), $5 Vodka or Gin Martinis (5-8pm)",
    specials_url: "https://smalltabs.com/details.php?id=608",
    food_specials: "$5 Shrimp Cocktail (5-8pm), $5 Hummus Platter (5-8pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=608",
  },
  {
    name: "Emmit's Irish Pub",
    address: "West Loop @ 495 N Milwaukee Ave",
    specials: "$4 Fireball Whiskey",
    specials_url: "https://smalltabs.com/details.php?id=487",
    food_specials: "$8.95 Fish & Chips",
    food_specials_url: "https://smalltabs.com/details.php?id=487",
  },
  {
    name: "The Pony Inn",
    address: "Lakeview @ 1638 W Belmont Ave",
    food_specials:
      "Half Price Appetizers from 4-8pm, Half Price Sandwiches from 4-8pm",
    food_specials_url: "https://smalltabs.com/details.php?id=275",
  },
  {
    name: "Troquet River North",
    address: "River North @ 111 W Huron St",
    specials:
      "$4 Select Beers (4-7pm), $5 House Mixed Drinks (4-7pm), $6 House Red & White Wine Glasses (4-7pm)",
    specials_url: "https://smalltabs.com/details.php?id=649",
    food_specials:
      "Mimosa Brunch (10am-3pm), $4 Truffle Frites (4-7pm), $5 Salmon Rilette (4-7pm), $6 Croque Monsieur & Croque Végétarien (4-7pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=649",
  },
  {
    name: "The Beetle Bar & Grill",
    address: "Humboldt Park @ 2532 W Chicago Ave",
    specials: "$4 Curious Traveler",
    specials_url: "https://smalltabs.com/details.php?id=2",
    food_specials: "$8 Fish Fry",
    food_specials_url: "https://smalltabs.com/details.php?id=2",
  },
  {
    name: "McGee's Tavern",
    address: "Lincoln Park @ 950 W Webster Ave",
    specials: "$3 Bud Light Drafts",
    specials_url: "https://smalltabs.com/details.php?id=21",
  },
  {
    name: "Timothy O'Toole's",
    address: "Near North Side @ 622 N Fairbanks St",
    specials:
      "$12 Miller Lite, Coors Light, & Bud Light Pitchers, $6 Jameson Whiskey Cocktails, $6 Jameson Whiskey Shots",
    specials_url: "https://smalltabs.com/details.php?id=195",
  },
  {
    name: "New Line Tavern",
    address: "West Loop @ 201 N Clinton St",
    specials: "$5 Goose Island Beers, $8 Signature Cocktails",
    specials_url: "https://smalltabs.com/details.php?id=301",
  },
  {
    name: "Deuces & The Diamond Club",
    address: "Wrigleyville @ 3505 N Clark St",
    specials: "$12+ Seasonal Beer Flights",
    specials_url: "https://smalltabs.com/details.php?id=408",
  },
  {
    name: "Yak-Zies Wrigleyville",
    address: "Wrigleyville @ 3710 N Clark St",
    specials: "$5 Fat Tire, $5 Fireball Whiskey",
    specials_url: "https://smalltabs.com/details.php?id=149",
    food_specials: "$5 Fish Sandwiches",
    food_specials_url: "https://smalltabs.com/details.php?id=149",
  },
  {
    name: "John Barleycorn River North",
    address: "River North @ 149 W Kinzie St",
    specials: "$5 Budweiser, Bud Light, Coors Light, & Miller Lite Bottles",
    specials_url: "https://smalltabs.com/details.php?id=491",
  },
  {
    name: "Pasta Bowl Lincoln Park",
    address: "Lincoln Park @ 2434 N Clark St",
    specials: "$5 Moscow Mules",
    specials_url: "https://smalltabs.com/details.php?id=637",
  },
  {
    name: "Cary's Lounge",
    address: "West Rogers Park @ 2251 W Devon Ave",
    specials:
      "$2.50 Pabst Blue Ribbon & Schiltz Cans, $3 Old Style Drafts, $3 Budweiser, Bud Light, Coors Light, Miller Lite, & Miller High Life",
    specials_url: "https://smalltabs.com/details.php?id=287",
  },
  {
    name: "Northwoods Lounge",
    address: "Norwood Park @ 5342 N Cumberland Ave",
    specials: "$3 Fireball Shots, $1 House Shots",
    specials_url: "https://smalltabs.com/details.php?id=551",
  },
  {
    name: "Kroll's South Loop",
    address: "South Loop @ 1736 S Michigan Ave",
    specials:
      "$5 Bushmills Whiskey Cocktails (4-6pm), $4 Absolut Vodka Cocktails (4-6pm), $3 Deschutes Cans (4-6pm), $5 Keke Key Lime Martinis (4-6pm), $6 House Margaritas (4-6pm)",
    specials_url: "https://smalltabs.com/details.php?id=146",
    food_specials: "Half Price Appetizers (5-7pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=146",
  },
  {
    name: "Benchmark",
    address: "Old Town @ 1510 N Wells St",
    specials:
      "$4 Truly & White Claw Cans (5-8pm), $5 Jack Daniels Whiskey Shots, $5 El Jimador Tequila Shots",
    specials_url: "https://smalltabs.com/details.php?id=508",
    food_specials: "Free Burgers (limited quantities, with drink purchase)",
    food_specials_url: "https://smalltabs.com/details.php?id=508",
  },
  {
    name: "Halligan Bar",
    address: "Lincoln Park @ 2274 N Lincoln Ave",
    specials:
      "$3 Budweiser & Bud Light Bottles, $3.50 Vegas Bombs, $3.50 Captain Morgan Rum & Coke, $4 Stoli Vodka Drinks, $5 Bombs, $2 Bud Light Drafts, $3 Jameson Whiskey Shots, $3.50 Goose Island 312 Drafts, $3.50 Guinness, $4 Stoli Vodka Drinks",
    specials_url: "https://smalltabs.com/details.php?id=130",
  },
  {
    name: "Keenan O'Reilly's",
    address: "Lakeview @ 3916 N Ashland Ave",
    specials:
      "$3.50 Goose Island & Sam Adams Bottles, $2 Pabst Blue Ribbon Cans, $2.50 Miller High Life Tallboys, $3 Labatt Blue Drafts, $2.50 Old Style Drafts",
    specials_url: "https://smalltabs.com/details.php?id=454",
  },
  {
    name: "Jake Melnick's Corner Tap",
    address: "Near North Side @ 41 E Superior St",
    specials: "$5.50 Krombacher Pils",
    specials_url: "https://smalltabs.com/details.php?id=311",
  },
  {
    name: "Lokal Wicker Park",
    address: "Wicker Park @ 1904 W North Ave",
    food_specials: "$10 Mussels & Truffle Fries",
    food_specials_url: "https://smalltabs.com/details.php?id=471",
  },
  {
    name: "Charlie's",
    address: "Lakeview @ 3726 N Broadway St",
    specials: "$10 Long Island Iced Teas, $3 Apple Pie Shots",
    specials_url: "https://smalltabs.com/details.php?id=264",
  },
  {
    name: "Pint",
    address: "Wicker Park @ 1547 N Milwaukee Ave",
    food_specials: "Half Price Fish & Chips",
    food_specials_url: "https://smalltabs.com/details.php?id=218",
  },
  {
    name: "Gallery Cabaret",
    address: "Bucktown @ 2020 N Oakley Ave",
    specials:
      "$6 Hammeson (Hamm's & Jameson Whiskey), $6 Jackhammer (Hamm's & Jack Daniels Whiskey), $3 Fireball Whiskey Shots, $3 Malort Shots",
    specials_url: "https://smalltabs.com/details.php?id=116",
  },
  {
    name: "The Full Shilling",
    address: "Wrigleyville @ 3724 N Clark St",
    specials:
      "$5 Fireball Whiskey, $20 Table Tappers, Half Price Drinks (6-9pm)",
    specials_url: "https://smalltabs.com/details.php?id=623",
    food_specials: "$7.95 Fish & Chips, $1 Hot Dogs",
    food_specials_url: "https://smalltabs.com/details.php?id=623",
  },
  {
    name: "Glascott's Saloon",
    address: "Lincoln Park @ 2158 N Halsted St",
    specials: "$5 Stella Artois Drafts, $5 Red Bull Bombs",
    specials_url: "https://smalltabs.com/details.php?id=46",
  },
  {
    name: "Trader Todd's",
    address: "Lakeview @ 3216 N Sheffield Ave",
    specials: "$1 Rolling Rock Drafts (4:30-6:30pm)",
    specials_url: "https://smalltabs.com/details.php?id=455",
    food_specials: "$2 Select Appetizers (4:30-6:30pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=455",
  },
  {
    name: "Gino's North",
    address: "Edgewater @ 1111 W Granville Ave",
    specials: "$3 Sangria Glasses",
    specials_url: "https://smalltabs.com/details.php?id=238",
  },
  {
    name: "Crown Liquors",
    address: "Logan Square @ 2821 N Milwaukee Ave",
    specials: "$5 Craft Beers, $7 Cocktails",
    specials_url: "https://smalltabs.com/details.php?id=591",
  },
  {
    name: "Longman & Eagle",
    address: "Logan Square @ 2657 N Kedzie Ave",
    specials:
      "$2 Old Milwaukee & Pabst Blue Ribbon Cans, $3 Old Style Drafts, $3 Select Whiskey Shots",
    specials_url: "https://smalltabs.com/details.php?id=348",
  },
  {
    name: "Goldie's",
    address: "North Center @ 3839 N Lincoln Ave",
    specials: "$1 Pabst Blue Ribbon Drafts",
    specials_url: "https://smalltabs.com/details.php?id=122",
  },
  {
    name: "Crossroads at House of Blues",
    address: "River North @ 329 N Dearborn St",
    specials:
      "Half Price Select Wine Bottles (3-6pm), $8 Pabst Blue Ribbon Can & Jameson Whiskey Shot Combo (3-6pm), $2 off Select Drafts (3-6pm)",
    specials_url: "https://smalltabs.com/details.php?id=619",
    food_specials: "Half Price Appetizers (3-6pm), $9.95 Fish & Chips (3-6pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=619",
  },
  {
    name: "Decibel Bar",
    address: "Uptown @ 4437 N Broadway Ave",
    specials: "$2 House Shots, $4 Bacardi, $4 Mimosas",
    specials_url: "https://smalltabs.com/details.php?id=553",
  },
  {
    name: "Ravenswood Station Bar & Grill",
    address: "Lincoln Square @ 4709 N Damen Ave",
    specials:
      "$7 Call Vodka Mixed Drinks, $6.50 Guinness 20oz Drafts, $5.50 Fat Tire Drafts",
    specials_url: "https://smalltabs.com/details.php?id=100",
    food_specials: "$6.75 Fish & Chips, $7 Grilled Fish Tacos",
    food_specials_url: "https://smalltabs.com/details.php?id=100",
  },
  {
    name: "El Tequilas Bar & Grill",
    address: "Lincoln Park @ 2826 N Lincoln Ave",
    specials: "$3 Budweiser (4-6pm), $3 Tecate (4-6pm), $5 Margaritas (4-6pm)",
    specials_url: "https://smalltabs.com/details.php?id=678",
  },
  {
    name: "The Graystone Tavern",
    address: "Lakeview @ 3441 N Sheffield Ave",
    specials: "$5 Jack Daniels Fire Shots",
    specials_url: "https://smalltabs.com/details.php?id=653",
  },
  {
    name: "Declan's Irish Pub",
    address: "Near North Side @ 1240 N Wells St",
    specials: "$4 Select Craft Draft, $5 Jack Daniels Fire",
    specials_url: "https://smalltabs.com/details.php?id=365",
    food_specials: "$10 Fish & Chips",
    food_specials_url: "https://smalltabs.com/details.php?id=365",
  },
  {
    name: "20 East",
    address: "Near North Side @ 20 E Delaware St",
    specials:
      "$3 Domestic Beers (3-6pm), $4 Absolut Vodka Mixed Drinks (3-6pm), $5 Select Wine Glasses (3-6pm)",
    specials_url: "https://smalltabs.com/details.php?id=661",
    food_specials: "$7 Mini Burgers, $7 Hummus, $7 Truffle Fries, $7 Brussels",
    food_specials_url: "https://smalltabs.com/details.php?id=661",
  },
  {
    name: "Crossroads Bar & Grill",
    address: "West Loop @ 1120 W Madison St",
    specials:
      "$4 Goose Island Green Line, $4 Goose Island 312, $5 Captain Morgan Rum Cocktails",
    specials_url: "https://smalltabs.com/details.php?id=267",
  },
  {
    name: "Sheffield's",
    address: "Lakeview @ 3258 N Sheffield Ave",
    specials: "$4 Brewery-of-the-Month Drafts",
    specials_url: "https://smalltabs.com/details.php?id=54",
  },
  {
    name: "The Fifty/50",
    address: "Wicker Park @ 2047 W Division St",
    specials:
      "$6 Tito's Vodka Drinks, $5 Ketel One Vodka Drinks (3-6pm), Half Price Craft Beers (3-6pm), $5 Wine Glasses (3-6pm)",
    specials_url: "https://smalltabs.com/details.php?id=127",
    food_specials: "Half Price Appetizers (3-6pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=127",
  },
  {
    name: "Fado Irish Pub",
    address: "River North @ 100 W Grand Ave",
    specials:
      "$7 Old Fashioneds (5-9pm), $7 Manhattans (5-9pm), $7 Whiskey Sours (5-9pm), $5 Carlsberg Beer (5-9pm), $7 Red & White Wine Glasses (5-9pm)",
    specials_url: "https://smalltabs.com/details.php?id=583",
    food_specials: "$6 Select Snacks (5-9pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=583",
  },
  {
    name: "Bar Louie University Village",
    address: "University Village @ 1325 S Halsted St",
    specials:
      "$3.25 Drafts (4-7pm), $4.25 Wine Glasses (4-7pm), $5.25 Signature Martinis (4-7pm)",
    specials_url: "https://smalltabs.com/details.php?id=654",
    food_specials:
      "Half Price Select Appetizers (4-7pm), Half Price Flatbreads (4-7pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=654",
  },
  {
    name: "ZED451",
    address: "River North @ 739 N Clark St",
    specials: "$4.51 Grey Goose Vodka Cocktails (4:30-7pm)",
    specials_url: "https://smalltabs.com/details.php?id=639",
  },
  {
    name: "The Rambler Kitchen & Tap",
    address: "North Center @ 4128 N Lincoln Ave",
    specials:
      "$4 Hard Seltzers, $4 Select Drafts, $5 Skrewball Whiskey, $5 Corazon Tequila, $3 Domestic Beers (4-7pm), $3 Select Whiskeys (4-7pm), $5 House Wine Glasses (4-7pm)",
    specials_url: "https://smalltabs.com/details.php?id=589",
    food_specials: "$7 Ground Beef or Chicken Nacho Platters",
    food_specials_url: "https://smalltabs.com/details.php?id=589",
  },
  {
    name: "Kirkwood Bar & Grill",
    address: "Lakeview @ 2934 N Sheffield Ave",
    specials: "$4 All Ciders, $5 Jello Shots",
    specials_url: "https://smalltabs.com/details.php?id=13",
  },
  {
    name: "Hangge-Uppe",
    address: "Near North Side @ 16 W Division St",
    specials: "$5 Bacardi Flavored Rum",
    specials_url: "https://smalltabs.com/details.php?id=84",
  },
  {
    name: "The Fireplace Inn",
    address: "Old Town @ 1448 N Wells St",
    specials: "$5 Skyy Vodka Bombs",
    specials_url: "https://smalltabs.com/details.php?id=442",
  },
  {
    name: "Vines on Clark",
    address: "Wrigleyville @ 3554 N Clark St",
    specials: "$5 You-Call-Its",
    specials_url: "https://smalltabs.com/details.php?id=33",
  },
  {
    name: "Murphy's Bleachers",
    address: "Wrigleyville @ 3653 N Sheffield Ave",
    specials:
      "$4 Southern Comfort Drinks, $14 Lagunitas IPA & Pilsner Pitchers",
    specials_url: "https://smalltabs.com/details.php?id=32",
    food_specials: "$6 Fish & Chips",
    food_specials_url: "https://smalltabs.com/details.php?id=32",
  },
  {
    name: "Delilah's",
    address: "Lincoln Park @ 2771 N Lincoln Ave",
    specials: "$3 Labatt Blue, $3 Maker's Mark Bourbon",
    specials_url: "https://smalltabs.com/details.php?id=26",
  },
  {
    name: "Leona's Old Irving",
    address: "Irving Park @ 3877 N Elston Ave",
    specials:
      "$5 Cocktails (6-9pm), $5 Frozen Margaritas (6-9pm), $5 Rocks Margaritas (6-9pm), $5 Long Island Iced Teas (6-9pm)",
    specials_url: "https://smalltabs.com/details.php?id=667",
    food_specials: "$3 off Wing Dings",
    food_specials_url: "https://smalltabs.com/details.php?id=667",
  },
  {
    name: "Flo & Santos",
    address: "South Loop @ 1310 S Wabash Ave",
    specials: "$18 Polish Vodka Flights",
    specials_url: "https://smalltabs.com/details.php?id=489",
  },
  {
    name: "GRK Bar",
    address: "Loop @ 400 S Wells St",
    specials: "$5 Shots, $1 off Select Drafts",
    specials_url: "https://smalltabs.com/details.php?id=621",
  },
  {
    name: "Maxbar",
    address: "Lincoln Park @ 2247 N Lincoln Ave",
    specials: "$2 Fireball Whiskey Shots, $100 Fireball Whiskey Bottles",
    specials_url: "https://smalltabs.com/details.php?id=252",
  },
  {
    name: "Mahoney's Pub & Grille",
    address: "Near North Side @ 551 N Odgen Ave",
    specials: "$5 Jameson Whiskey",
    specials_url: "https://smalltabs.com/details.php?id=65",
  },
  {
    name: "Celtic Crown Public House",
    address: "North Center @ 4301 N Western Ave",
    specials:
      "$4 Founders All Day IPA, $5 Stoli Vodka Mules, $2 Miller Lite Drafts (3-7pm), $2 Well Cocktails",
    specials_url: "https://smalltabs.com/details.php?id=76",
    food_specials: "$7 Turkey Pesto Sandwich, $7 Green Ranch BLT Sandwich",
    food_specials_url: "https://smalltabs.com/details.php?id=76",
  },
  {
    name: "Flagship Tavern & Grill",
    address: "Lakeview @ 1622 W Belmont Ave",
    specials: "$15 Domestic Buckets",
    specials_url: "https://smalltabs.com/details.php?id=552",
  },
  {
    name: "Durkin's Tavern",
    address: "Lincoln Park @ 810 W Diversey Ave",
    specials: "$4 Fireball Whiskey Shots, $3 Bud Light Drafts",
    specials_url: "https://smalltabs.com/details.php?id=22",
  },
  {
    name: "Emerald Loop",
    address: "Loop @ 216 N Wabash Ave",
    specials: "$4.75 Beer of the Month",
    specials_url: "https://smalltabs.com/details.php?id=42",
    food_specials: "$14 Lobster Mac & Cheese, $12 Cajun Tilapia",
    food_specials_url: "https://smalltabs.com/details.php?id=42",
  },
  {
    name: "Bobby Love's",
    address: "Lakeview @ 3729 N Halsted St",
    specials: "$6 Absolute Vodka Cocktails",
    specials_url: "https://smalltabs.com/details.php?id=337",
  },
  {
    name: "G&L Fire Escape",
    address: "North Center @ 2157 W Grace St",
    specials: "$3 Powers Whiskey Shots, $4 Wells",
    specials_url: "https://smalltabs.com/details.php?id=533",
  },
  {
    name: "Country Club Bar",
    address: "Wrigleyville @ 3462 N Clark St",
    specials:
      "$6 Tito's Vodka Cocktails, $4 Revolution Anti-Hero, $3 Shiner Premium",
    specials_url: "https://smalltabs.com/details.php?id=207",
    food_specials: "Half Price Appetizers",
    food_specials_url: "https://smalltabs.com/details.php?id=207",
  },
  {
    name: "Vaughans Pub Northwest Side",
    address: "Jefferson Park @ 5485 N Northwest Hwy",
    specials:
      "$3.50 Amstel Light Bottles, $4 Blue Moon Drafts, $4 Powers Irish Whiskey Shots",
    specials_url: "https://smalltabs.com/details.php?id=43",
    food_specials:
      "$12 All-You-Can-Eat Fish & Chips, $7.50 Pub Burger & Fries (11am-3pm), $7.50 Chicken Sandwich & Fries (11am-3pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=43",
  },
  {
    name: "High Noon Saloon",
    address: "Wicker Park @ 1560 N Milwaukee Ave",
    specials: "$5 Frozen Margaritas, $5 Old Forester Bourbon Shots",
    specials_url: "https://smalltabs.com/details.php?id=601",
  },
  {
    name: "O'Leary's Public House",
    address: "River North @ 541 N Wells St",
    specials: "$4.50 Corona Light Bottles",
    specials_url: "https://smalltabs.com/details.php?id=361",
  },
  {
    name: "Sidebar Grille",
    address: "Loop @ 221 N LaSalle St",
    specials:
      "$3 Fernet or Fireball Shots (4pm-Close), $5 Draft Beers (4-6pm), $6 Select Wine Glasses (4-6pm), $7 Svedka Vodka Mules (4-6pm)",
    specials_url: "https://smalltabs.com/details.php?id=10",
    food_specials: "$10 Featured Flatbread (4pm-Close)",
    food_specials_url: "https://smalltabs.com/details.php?id=10",
  },
  {
    name: "The Call",
    address: "Andersonville @ 1547 W Bryn Mawr Ave",
    specials: "$2.50 Well Cocktails (7-9pm), $3 Domestic Beers (7-9pm)",
    specials_url: "https://smalltabs.com/details.php?id=343",
  },
  {
    name: "SideDoor",
    address: "Streeterville @ 100 E Ontario St",
    food_specials:
      "Half Price Avocado Mash, Stuffed Mushrooms, Chips & Dip, IPA Beer Pretzels, & Deviled Eggs from 3-5pm",
    food_specials_url: "https://smalltabs.com/details.php?id=574",
  },
  {
    name: "Reverie",
    address: "River North @ 414 N Orleans St",
    food_specials: "$10 Mix & Match Lunch",
    food_specials_url: "https://smalltabs.com/details.php?id=584",
  },
  {
    name: "Holiday Club",
    address: "Uptown @ 4000 N Sheridan Rd",
    specials:
      "$5 Svedka Vodka Drinks, $5 Grape, Cherry, & Blueberry Bombs, $4.50 Pabst Blue Ribbon 24oz Tallboys",
    specials_url: "https://smalltabs.com/details.php?id=179",
    food_specials: "$5 Chicken Sandwich",
    food_specials_url: "https://smalltabs.com/details.php?id=179",
  },
  {
    name: "Standard Bar & Grill",
    address: "Wicker Park @ 1332 N Milwaukee Ave",
    specials: "$6 Ketel One Vodka Drinks",
    specials_url: "https://smalltabs.com/details.php?id=676",
    food_specials:
      "$20 After-Work Burger Deal (Cheeseburger with Fries, Domestic Bottles, & Well Drinks from 6-9pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=676",
  },
  {
    name: "Lizzie McNeill's Irish Pub",
    address: "Streeterville @ 400 N McClurg St",
    specials:
      "$5 Sam Adams Oktoberfest, $6 Seagrams 7 Whiskey Drinks, $5 Crown Apple Shots",
    specials_url: "https://smalltabs.com/details.php?id=477",
  },
  {
    name: "Easy Bar",
    address: "Wicker Park @ 1944 W Division St",
    specials: "$5 Jameson Shots",
    specials_url: "https://smalltabs.com/details.php?id=215",
  },
  {
    name: "Dark Horse Tap & Grille",
    address: "Wrigleyville @ 3443 N Sheffield Ave",
    specials:
      "$5 Bomb Shots, $5 Stoli Vodka Cocktails, $4 Lagunitas Drafts, $3 Fireball Whiskey Shots",
    specials_url: "https://smalltabs.com/details.php?id=201",
  },
  {
    name: "Pitchfork Food & Saloon",
    address: "Irving Park @ 2922 W Irving Park Road",
    specials: "$4 Goose Island Green Line, $6 Moscow Mules",
    specials_url: "https://smalltabs.com/details.php?id=234",
  },
  {
    name: "Irish Eyes",
    address: "Lincoln Park @ 2519 N Lincoln Ave",
    specials: "$3.50 Pabst Blue Ribbon Tallboys",
    specials_url: "https://smalltabs.com/details.php?id=339",
  },
  {
    name: "Bourbon on Division",
    address: "Wicker Park @ 2050 W Division St",
    specials:
      "$5 Deep Eddy Rum Lemon Drops, $20 Domestic Buckets, $5 Tito's Vodka or Tullamore Dew Whiskey Mixed Drinks (9-11pm)",
    specials_url: "https://smalltabs.com/details.php?id=710",
  },
  {
    name: "Black Rock Pub & Kitchen",
    address: "Lakeview @ 3614 N Damen Ave",
    specials:
      "$1 off Off Color Brewery Drafts & Bottles, $4 Slow & Low Rye Shots",
    specials_url: "https://smalltabs.com/details.php?id=59",
    food_specials: "40¢ Wings",
    food_specials_url: "https://smalltabs.com/details.php?id=59",
  },
  {
    name: "Paddy Long's",
    address: "Lincoln Park @ 1028 W Diversey Ave",
    specials: "$4 Beer of the Month",
    specials_url: "https://smalltabs.com/details.php?id=119",
    food_specials: "$13.95 Fish Fry",
    food_specials_url: "https://smalltabs.com/details.php?id=119",
  },
  {
    name: "The Cubby Bear",
    address: "Wrigleyville @ 1059 W Addison St",
    specials: "$5 Domestic Tallboys",
    specials_url: "https://smalltabs.com/details.php?id=150",
  },
  {
    name: "Kasey's Tavern",
    address: "Printers Row @ 701 S Dearborn St",
    specials:
      "$4 New Belgium Voodoo Ranger IPA Drafts, $4 Carlsburg Tallboys, $3 Hamm's Tallboys, $3 Coors Banquet Bottles",
    specials_url: "https://smalltabs.com/details.php?id=125",
  },
  {
    name: "Templestowe Pub",
    address: "Irving Park @ 3135 W Montrose Ave",
    specials: "$3 Fireball Whiskey Shots, $3 Import Bottles",
    specials_url: "https://smalltabs.com/details.php?id=340",
  },
  {
    name: "Porkchop Hyde Park",
    address: "Hyde Park @ 1516 E Harper Ct",
    specials: "Half Price Drinks (10pm-Close)",
    specials_url: "https://smalltabs.com/details.php?id=684",
    food_specials: "Half Price Appetizers (10pm-Close)",
    food_specials_url: "https://smalltabs.com/details.php?id=684",
  },
  {
    name: "Aberdeen Tap",
    address: "West Loop @ 440 N Aberdeen St",
    specials: "$5 Jameson Whiskey Shots, $3 Pabst Blue Ribbon Drafts",
    specials_url: "https://smalltabs.com/details.php?id=457",
  },
  {
    name: "Pizzeria Serio",
    address: "Lakeview @ 1708 N Belmont Ave",
    specials: "$2 Pabst Blue Ribbon Tallboys, $8 Beer Flights",
    specials_url: "https://smalltabs.com/details.php?id=385",
  },
  {
    name: "J.P. Burke's Patio & Tap",
    address: "Lakeview @ 2913 N Lincoln Ave",
    specials:
      "$5 Guinness & Carlsberg Drafts, $5 Jack Daniels Whiskey Drinks, $5 Captain Morgan Rum Drinks",
    specials_url: "https://smalltabs.com/details.php?id=532",
  },
  {
    name: "Seven Lions",
    address: "Loop @ 130 S Michigan Ave",
    specials:
      "$9 Specialty Cocktails, $24 Select Wine Bottles (3-6pm), Half Price Featured Drafts (3-6pm)",
    specials_url: "https://smalltabs.com/details.php?id=683",
    food_specials:
      "$8 Hummus (3-6pm), $8 Pulled Pork Nachos (3-6pm), $8 Crispy Chicken Sliders (3-6pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=683",
  },
  {
    name: "Lizard's Liquid Lounge",
    address: "Irving Park @ 3058 W Irving Park Rd",
    specials:
      "$4 Stella Artois Drafts, $4 Great Lakes Burning River Drafts, $5 Microbrews",
    specials_url: "https://smalltabs.com/details.php?id=98",
  },
  {
    name: "Knife & Tine",
    address: "Lincoln Park @ 1417 W Fullerton Ave",
    specials:
      "Half Price Draft Beers (3-6pm), Half Price Craft Cocktails (3-6pm), Half Price Wine Glasses (3-6pm)",
    specials_url: "https://smalltabs.com/details.php?id=640",
    food_specials: "$5 Bar Snacks (3-6pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=640",
  },
  {
    name: "Lokal Lincoln Park",
    address: "Lincoln Park @ 2500 N Ashland Ave",
    food_specials: "$10 Mussels & Truffle Fries",
    food_specials_url: "https://smalltabs.com/details.php?id=614",
  },
  {
    name: "Big City Tap",
    address: "Lakeview @ 1010 W Belmont Ave",
    specials: "$6 Jameson Whiskey, $1 Jello Shots, $1 Apple Pucker Shots",
    specials_url: "https://smalltabs.com/details.php?id=306",
    food_specials: "Half Price Bar Snacks (until 9pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=306",
  },
  {
    name: "Big Star",
    address: "Wicker Park @ 1531 N Damen Ave",
    specials: "$3 Old Heaven Hill Whiskey Shots",
    specials_url: "https://smalltabs.com/details.php?id=341",
  },
  {
    name: "Franklin Tap",
    address: "Loop @ 325 S Franklin St",
    specials:
      "$5 Two Brothers Pale Frank Drafts, $5 Yukon Jack Wicked Hot Shots",
    specials_url: "https://smalltabs.com/details.php?id=135",
    food_specials: "$5 Select Appetizers (after 5pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=135",
  },
  {
    name: "The Hampton Social",
    address: "River North @ 353 W Hubbard St",
    specials: "Half Price Specialty Cocktails (4-6pm)",
    specials_url: "https://smalltabs.com/details.php?id=636",
    food_specials: "Half Price Pizzas (4-6pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=636",
  },
  {
    name: "Lottie's Pub",
    address: "Bucktown @ 1925 W Cortland St",
    specials: "$4 Corona & Corona Light",
    specials_url: "https://smalltabs.com/details.php?id=79",
    food_specials: "50¢ Jumbo Wings",
    food_specials_url: "https://smalltabs.com/details.php?id=79",
  },
  {
    name: "Fremont",
    address: "River North @ 15 W Illinois St",
    specials:
      "$3 Beers (5-9pm), $4 Mixed Drinks (5-9pm), $5 Mule Bar (5-9pm), $5 Wine Glasses (5-9pm), $6 Tito's Vodka Cocktails (5-9pm)",
    specials_url: "https://smalltabs.com/details.php?id=658",
  },
  {
    name: "Lincoln Station",
    address: "Lincoln Park @ 2432 N Lincoln Ave",
    specials: "$4 Featured Drafts",
    specials_url: "https://smalltabs.com/details.php?id=248",
    food_specials: "$10.95 All-You-Can-Eat Fish Fry",
    food_specials_url: "https://smalltabs.com/details.php?id=248",
  },
  {
    name: "Lincoln Tap Room",
    address: "Lakeview @ 3010 N Lincoln Ave",
    specials:
      "$4 Angry Orchard Cider, $5 Call & Premium Shots, $3 Two Brothers Outlaw IPA Cans, $3 Two Brothers Sidekick Citrus Ale Cans, $4.50 Three Olives Vodka Cocktails",
    specials_url: "https://smalltabs.com/details.php?id=334",
  },
  {
    name: "Bird's Nest",
    address: "Lincoln Park @ 2500 N Southport Ave",
    specials: "$4 Blue Line Pilsner, $5 Svedka Vodka Bombs, $5 Red Bull Bombs",
    specials_url: "https://smalltabs.com/details.php?id=6",
  },
  {
    name: "Jerk Modern Jamaican Grill",
    address: "Noble Square @ 811 W Chicago Ave",
    specials: "$3 Mystery Beer (4-7pm), $7 Select Cocktails (4-7pm)",
    specials_url: "https://smalltabs.com/details.php?id=634",
  },
  {
    name: "Duke of Perth",
    address: "Lakeview @ 2913 N Clark St",
    food_specials: "$11.95 All-You-Can-Eat Fish & Chips",
    food_specials_url: "https://smalltabs.com/details.php?id=92",
  },
  {
    name: "Joe's Bar",
    address: "Near North Side @ 940 W Weed St",
    specials:
      "$2 Fireball Whiskey Shots (8-10pm), $2 Budweiser & Coors Light Bottles (8-10pm), $3 Vodka Mixers (8-10pm)",
    specials_url: "https://smalltabs.com/details.php?id=14",
  },
  {
    name: "Butcher's Tap",
    address: "Lakeview @ 3553 N Southport Ave",
    specials:
      "$5 Tullamore Dew Whiskey, Half Price Tito's Vodka Cocktails (4-6pm)",
    specials_url: "https://smalltabs.com/details.php?id=624",
  },
  {
    name: "Gio's Bar & Grill",
    address: "Lincoln Square @ 4857 N Damen Ave",
    specials: "$4 Vodka Cocktails, $4 5 Rabbit Drafts, $3.50 Fireball Shots",
    specials_url: "https://smalltabs.com/details.php?id=374",
  },
  {
    name: "Nisei Lounge",
    address: "Wrigleyville @ 3439 N Sheffield Ave",
    specials:
      "$5 Jameson Whiskey Shots, $3 Mickey's Big Mouth Bottles, $4 Old Style Tallboys, $4 Pabst Blue Ribbon Drafts, $3 Malort Shots",
    specials_url: "https://smalltabs.com/details.php?id=307",
  },
  {
    name: "Lion Head Pub",
    address: "Lincoln Park @ 2251 N Lincoln Ave",
    food_specials: "$1 Fish Tacos, 25¢ Wings (4-7pm, with beverage purchase)",
    food_specials_url: "https://smalltabs.com/details.php?id=25",
  },
  {
    name: "Reed's Local",
    address: "Avondale @ 3017 W Belmont Ave",
    specials: "$4 Old Crow Whiskey & Hamm's Can Combo, $2 Hamm's Cans",
    specials_url: "https://smalltabs.com/details.php?id=585",
  },
  {
    name: "Cork Lounge",
    address: "Lakeview @ 1822 W Addison St",
    specials:
      "$2 Pabst Blue Ribbon Drafts, $4 Mimosas, $4 Apple Pie Shots, $5 Genessee Cream Ale & Jim Beam Shot Combo",
    specials_url: "https://smalltabs.com/details.php?id=326",
  },
  {
    name: "Clark Street Dog",
    address: "Lakeview @ 3040 N Clark St",
    specials:
      "$2 Bud Light Drafts, $3.50 Goose Island Drafts, $3.50 Lagunitas Drafts, $5 Picklebacks, $8 Mules",
    specials_url: "https://smalltabs.com/details.php?id=472",
  },
  {
    name: "Furious Spoon",
    address: "Wicker Park @ 1571 N Milwaukee Ave",
  },
  {
    name: "Scot's Bar",
    address: "North Center @ 1829 W Montrose Ave",
    specials: "$3.50 Well Drinks, $3.50 Miller Lite Drafts",
    specials_url: "https://smalltabs.com/details.php?id=263",
  },
  {
    name: "State Restaurant",
    address: "Lincoln Park @ 935 W Webster Ave",
    food_specials:
      "$6.99 Food Menu (with drink purchase, some exclusions apply)",
    food_specials_url: "https://smalltabs.com/details.php?id=229",
  },
  {
    name: "Tripoli Tap",
    address: "Lincoln Park @ 1147 W Armitage Ave",
    specials: "$3 Coors Light Bottles",
    specials_url: "https://smalltabs.com/details.php?id=450",
  },
  {
    name: "Twisted Shamrock",
    address: "Garfield Ridge @ 6462 S Central Ave",
    specials:
      "$3.50 Amstel Light, Heineken, or Shiner Bock, $3 Pinnacle Vodka O-Bombs",
    specials_url: "https://smalltabs.com/details.php?id=704",
  },
  {
    name: "Devon Seafood Grill",
    address: "Near North Side @ 39 E Chicago Ave",
    food_specials:
      "$1 Oysters (4-7pm), $7.50 Appetizers (4-7pm, 9pm-Close), $2.50 Jumbo Shrimp Cocktail (4-7pm, 9pm-Close)",
    food_specials_url: "https://smalltabs.com/details.php?id=689",
  },
  {
    name: "Taco Joint River North",
    address: "River North @ 158 W Ontario St",
    specials: "$5 Modelo Especial Can & Olmeca Tequila Blanco Shot Combo",
    specials_url: "https://smalltabs.com/details.php?id=542",
  },
  {
    name: "Commonwealth Tavern",
    address: "Roscoe Village @ 2000 W Roscoe St",
    specials: "$6 Craft Cocktails (4-7pm), $6 Moscow Mules, $6 Summer Sunsets",
    specials_url: "https://smalltabs.com/details.php?id=588",
    food_specials: "Half Price Appetizers (3-7pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=588",
  },
  {
    name: "Hook & Ladder",
    address: "Lincoln Park @ 2270 N Lincoln Ave",
    specials:
      "$2.50 Domestic Bottles, $3 Import/Craft Bottles, $4 All Drafts, $3 Shots, $4 Bombs, $6 Wine Glasses, $6 Mimosas, $4 Well Drinks, $5 Call Drinks",
    specials_url: "https://smalltabs.com/details.php?id=593",
  },
  {
    name: "Atmosphere",
    address: "Andersonville @ 5355 N Clark St",
    specials: "$5 Fireball Whiskey Shots",
    specials_url: "https://smalltabs.com/details.php?id=96",
  },
  {
    name: "Original Mother's",
    address: "Near North Side @ 26 W Division St",
    specials:
      "$6 Pabst Blue Ribbon Tallboys, $5 Bacardi Rum, $5 Wolf Berry & Black Razz Bombs, $5 Sailor Jerry Rum",
    specials_url: "https://smalltabs.com/details.php?id=69",
  },
  {
    name: "The Drinkingbird",
    address: "Lincoln Park @ 2201 N Clybourn Ave",
    specials: "$5 Schlitz & Dickel Whiskey Shot Combo",
    specials_url: "https://smalltabs.com/details.php?id=48",
  },
  {
    name: "Waterhouse Tavern",
    address: "Lakeview @ 3407 N Paulina St",
    specials: "$4 Fireball Whiskey, $15 Bud Light Buckets",
    specials_url: "https://smalltabs.com/details.php?id=212",
  },
  {
    name: "Bar Takito",
    address: "West Loop @ 201 N Morgan St",
  },
  {
    name: "Higgins' Tavern",
    address: "Lakeview @ 3259 N Racine Ave",
    specials: "$11 Miller Lite & Coors Light Pitchers",
    specials_url: "https://smalltabs.com/details.php?id=17",
  },
  {
    name: "Streeter's Tavern",
    address: "Near North Side @ 50 E Chicago Ave",
    specials: "$5 Jim Beam Bourbon",
    specials_url: "https://smalltabs.com/details.php?id=72",
  },
  {
    name: "Gideon Welles",
    address: "Lincoln Square @ 4500 N Lincoln Ave",
    specials: "$5 Select Craft Drafts",
    specials_url: "https://smalltabs.com/details.php?id=603",
  },
  {
    name: "Leader Bar",
    address: "Irving Park @ 3000 W Irving Park Rd",
    specials:
      "$15 Budweiser, Bud Light, Miller Lite, & Miller High Life Buckets, $18 Amstel Light, Heineken, Heineken Light, Tecate, & Newcastle Brown Ale Buckets",
    specials_url: "https://smalltabs.com/details.php?id=381",
    food_specials: "Half Price Appetizers from 4-7pm",
    food_specials_url: "https://smalltabs.com/details.php?id=381",
  },
  {
    name: "The Scout",
    address: "South Loop @ 1301 S Wabash Ave",
    specials: "$3 Sam Adams Boston Lager Drafts",
    specials_url: "https://smalltabs.com/details.php?id=451",
  },
  {
    name: "Bulldog Ale House (Loyola)",
    address: "Rogers Park @ 6606 N Sheridan Rd",
    specials: "$5 Jameson Whiskey, $5 Guinness, $6 Irish Car Bomb",
    specials_url: "https://smalltabs.com/details.php?id=663",
    food_specials: "$10.99 All-You-Can-Eat Fish Fry",
    food_specials_url: "https://smalltabs.com/details.php?id=663",
  },
  {
    name: "Bar Louie Dearborn Station",
    address: "Printers Row @ 47 W Polk St",
    food_specials:
      "Half Price Select Appetizers (4-7pm), Half Price Flatbreads (4-7pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=567",
  },
  {
    name: "Hawkeye's Bar & Grill",
    address: "University Village @ 1458 W Taylor St",
    specials: "$10 Domestic Bottles",
    specials_url: "https://smalltabs.com/details.php?id=30",
    food_specials: "$2 Pita Pizzas (after 3pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=30",
  },
  {
    name: "The Other Side Bar",
    address: "Lincoln Park @ 2436 N Clark St",
    specials: "$5 Moscow Mules",
    specials_url: "https://smalltabs.com/details.php?id=192",
  },
  {
    name: "Ph.D Pub",
    address: "University Village @ 1257 S Halsted St",
    specials:
      "$3.50 Goose Island Oktoberfest 12oz Mason Jar Drafts, $3 Pabst Blue Ribbon & Rolling Rock Tallboys, $3 Bud Light Drafts, $9 Bud Light Pitchers, $3.50 Tullamore Dew Shots, $4 Carlsberg Drafts, $4 Fireball Shots, $4 Apple Moonshine Shots, $6 Vodka Lemonades, $8 Ph.D Vodka Mules",
    specials_url: "https://smalltabs.com/details.php?id=570",
  },
  {
    name: "Fatpour Tap Works",
    address: "Wicker Park @ 2005 W Division St",
    specials: "$5 Pabst Blue Ribbon & Select Shot Combo",
    specials_url: "https://smalltabs.com/details.php?id=459",
  },
  {
    name: "Emerald Isle",
    address: "Edison Park @ 6686 N Northwest Hwy",
    specials:
      "$18 Domestic Buckets, $5 Long Island Iced Teas, $4 Bombs, $3 Fireball Whiskey Shots",
    specials_url: "https://smalltabs.com/details.php?id=288",
    food_specials: "$3 Half Dozen Wings (any style)",
    food_specials_url: "https://smalltabs.com/details.php?id=288",
  },
  {
    name: "Links Taproom",
    address: "Wicker Park @ 1559 N Milwaukee Ave",
    food_specials: "$11 Fish Fry w/ Potato Pancake & Fries",
    food_specials_url: "https://smalltabs.com/details.php?id=568",
  },
  {
    name: "The Lodge",
    address: "Near North Side @ 21 W Division Street",
    specials: "$4 Fat Tire Drafts, $6 Bombs",
    specials_url: "https://smalltabs.com/details.php?id=68",
  },
  {
    name: "Mullen's Bar & Grill",
    address: "Rogers Park @ 7301 N Western Ave",
    specials: "$5 Flavored Vodka Drinks, $5 Bomb Shots (excludes Car Bombs)",
    specials_url: "https://smalltabs.com/details.php?id=460",
    food_specials: "$9 Meatloaf",
    food_specials_url: "https://smalltabs.com/details.php?id=460",
  },
  {
    name: "Belford Tavern",
    address: "Irving Park @ 3200 N Pulaski Rd",
    specials:
      "$5 Grey Goose Vodka Drinks & Shots, $3 Jameson Whiskey Shots, $3 Rotating Revolution 16oz Drafts, $3.50 Malort Shots, $3.50 Jameson Whiskey Shots, $2.25 Domestic 18oz Drafts",
    specials_url: "https://smalltabs.com/details.php?id=581",
  },
  {
    name: "Ranalli's",
    address: "Lincoln Park @ 1925 N Lincoln Ave",
    specials:
      "$7 Mules, $40 Large Specialty Cocktails (Mega Mule, Red Menace, & Tennessee Top Hat)",
    specials_url: "https://smalltabs.com/details.php?id=559",
  },
  {
    name: "The Roost Carolina Kitchen",
    address: "North Center @ 1467 W Irving Park Rd",
    specials: "$5 Boilermakers (9-11pm), 25% off Signature Cocktails (9-11pm)",
    specials_url: "https://smalltabs.com/details.php?id=672",
  },
  {
    name: "Edgewater Mexican Cafe",
    address: "Edgewater @ 1055 W Bryn Mawr Ave",
    specials: "$6 Wine Glasses, $6 Palomas, $6 House Margaritas (4-7pm)",
    specials_url: "https://smalltabs.com/details.php?id=711",
  },
  {
    name: "Deleece Restaurant",
    address: "Lakeview @ 3747 N Southport Ave",
    food_specials: "Brunch served from 9am-2:30pm",
    food_specials_url: "https://smalltabs.com/details.php?id=295",
  },
  {
    name: "Pasta Bowl Lincoln Square",
    address: "Lincoln Square @ 4343 N Lincoln Ave",
    specials: "$5 Moscow Mules",
    specials_url: "https://smalltabs.com/details.php?id=699",
  },
  {
    name: "Monsignor Murphy's",
    address: "Lakeview @ 3019 N Broadway St",
    specials: "$3 Pabst Blue Ribbon Cans, $3 Miller Lite Cans",
    specials_url: "https://smalltabs.com/details.php?id=246",
  },
  {
    name: "Harmony Grill",
    address: "Lakeview @ 3159 N Southport Ave",
    specials: "$4 Fireball Whiskey",
    specials_url: "https://smalltabs.com/details.php?id=242",
  },
  {
    name: "Hopsmith Tavern",
    address: "Near North Side @ 15 W Division St",
    specials: "$6 Pabst Blue Ribbon & Jack Daniels Whiskey Shot Combo",
    specials_url: "https://smalltabs.com/details.php?id=607",
    food_specials: "Half Price Appetizers (4-6pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=607",
  },
  {
    name: "Farraguts",
    address: "Andersonville @ 5240 N Clark St",
    specials: "$3 Miller Lite Drafts, $3 Pabst Blue Ribbon Drafts",
    specials_url: "https://smalltabs.com/details.php?id=445",
  },
  {
    name: "Vintage Lounge",
    address: "University Village @ 1449 W Taylor St",
    specials: "$5 Martinis",
    specials_url: "https://smalltabs.com/details.php?id=650",
    food_specials: "Half Price Select Appetizers",
    food_specials_url: "https://smalltabs.com/details.php?id=650",
  },
  {
    name: "Rocky's",
    address: "Bridgeport @ 234 W 31st St",
    specials:
      "$5 Black & Blues, $3 Non-Premium Domestic Beers, $4 Premium Domestic & Import Beers, $12 Domestic Buckets",
    specials_url: "https://smalltabs.com/details.php?id=378",
  },
  {
    name: "Four Shadows Tavern",
    address: "Lincoln Park @ 2758 N Ashland Ave",
    specials: "$5 Fireball Whiskey, $5 Stoli Vodka Flavors",
    specials_url: "https://smalltabs.com/details.php?id=29",
  },
  {
    name: "Galvin's Public House",
    address: "Portage Park @ 5901 W Lawrence Ave",
    specials: "$4 Blue Moon Drafts",
    specials_url: "https://smalltabs.com/details.php?id=604",
    food_specials: "$11 All-You-Can-Eat Fish & Chips",
    food_specials_url: "https://smalltabs.com/details.php?id=604",
  },
  {
    name: "The Monkey's Paw",
    address: "Lincoln Park @ 2524 N Southport Ave",
    specials:
      "$3 Rebel Yell Whiskey (4:30-6:30pm), $3 off All Drafts (4:30-6:30pm), $3 off All Wine Glasses (4:30-6:30pm)",
    specials_url: "https://smalltabs.com/details.php?id=453",
  },
  {
    name: "DS Tequila Company",
    address: "Lakeview @ 3352 N Halsted St",
    specials: "$12 40oz Fiesta Bowls",
    specials_url: "https://smalltabs.com/details.php?id=573",
  },
  {
    name: "Gannon's Pub",
    address: "North Center @ 4264 N Lincoln Ave",
    specials: "$4 Harp Drafts",
    specials_url: "https://smalltabs.com/details.php?id=16",
    food_specials: "$7.75 Fish & Chips",
    food_specials_url: "https://smalltabs.com/details.php?id=16",
  },
  {
    name: "Lowcountry South Loop",
    address: "South Loop @ 1132 S Wabash Ave",
    specials: "$24 Sangria Carafes (5-7pm), Half Price Beer & Wine (5-7pm)",
    specials_url: "https://smalltabs.com/details.php?id=708",
    food_specials: "$10 Mussels & Fries (5-7pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=708",
  },
  {
    name: "80 Proof",
    address: "Old Town @ 1500 N Wells St",
    specials:
      "$3 Tequila Shots (5-8pm), $4 All Beers (5-8pm), $5 All Call Drinks (5-8pm)",
    specials_url: "https://smalltabs.com/details.php?id=660",
  },
  {
    name: "Blue Frog Bar & Grill",
    address: "River North @ 676 N LaSalle Dr",
    specials: "$6 Specialty Cocktails",
    specials_url: "https://smalltabs.com/details.php?id=391",
    food_specials: "Half Price Appetizers (4-8pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=391",
  },
  {
    name: "Wheel House",
    address: "Lakeview @ 3553 N Southport Ave",
    specials: "$5 UV Bombs, $4 Craft Can Beers",
    specials_url: "https://smalltabs.com/details.php?id=169",
    food_specials: "$7 Fish & Chips, $10 Crab Cake Melts",
    food_specials_url: "https://smalltabs.com/details.php?id=169",
  },
  {
    name: "Legno Italian Gastropub",
    address: "Portage Park @ 4250 N Central Ave",
    specials:
      "$4 Select Vandermill Ciders, $2 Domestic Bottles (3-6pm), $3 Malort Shots (3-6pm), $5 Tito's Vodka Mixed Drinks (3-6pm), $6 White or Red Sangria Glasses (3-6pm)",
    specials_url: "https://smalltabs.com/details.php?id=590",
    food_specials:
      "Complimentary House Made Chips (3-6pm), $4 BBQ Pork Sliders (2) (3-6pm), $4 Jalapeno Poppers (2) (3-6pm), $5 Buffalo Wings (6) (3-6pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=590",
  },
  {
    name: "McCormick & Schmick's",
    address: "Near North Side @ 41 E Chestnut St",
    specials:
      "$6 Canyon Road Chardonnay, Canyon Cabernet Sauvignon, & Bringer White Zinfandel Wine Glasses (4-7pm), $7 Agave Rita, All American, & Talk of the Town Cocktails (4-7pm), $9 Urban Influence, Brandy Sidebar, & Sour Apple Martinis (4-7pm)",
    specials_url: "https://smalltabs.com/details.php?id=605",
  },
  {
    name: "The North End",
    address: "Lakeview @ 3733 N Halsted St",
    specials: "$5 Fireball Whiskey Shots",
    specials_url: "https://smalltabs.com/details.php?id=174",
  },
  {
    name: "Raw Bar & Grill",
    address: "Wrigleyville @ 3720 N Clark St",
    specials:
      "$2.50 Domestic Beers (4-7pm), $3.50 Craft Drafts (4-7pm), $3 Well Mixers (4-7pm)",
    specials_url: "https://smalltabs.com/details.php?id=205",
    food_specials: "Half Price Appetizers",
    food_specials_url: "https://smalltabs.com/details.php?id=205",
  },
  {
    name: "Harrigan's Pub",
    address: "Lakeview @ 2816 N Halsted St",
    specials: "$6 Makers Mark Manhattans, $2 Rolling Rock Cans (12-6pm)",
    specials_url: "https://smalltabs.com/details.php?id=648",
  },
  {
    name: "The Atlantic Bar & Grill",
    address: "Lincoln Square @ 5062 N Lincoln Ave",
    specials: "$4 Wine Spritzers, $4 Stoli Vodka Drinks",
    specials_url: "https://smalltabs.com/details.php?id=101",
    food_specials: "$4 Crostini Menu",
    food_specials_url: "https://smalltabs.com/details.php?id=101",
  },
  {
    name: "Renaldi's After Dark",
    address: "Lakeview @ 2831 N Broadway St",
    specials: "$4 Guinness Bottles",
    specials_url: "https://smalltabs.com/details.php?id=504",
  },
  {
    name: "Brownstone Tavern",
    address: "North Center @ 3937 N Lincoln Ave",
    specials:
      "$5 Stella Artois, $5 Jameson Whiskey Shots, $7 Absolut Vodka Mules",
    specials_url: "https://smalltabs.com/details.php?id=9",
  },
  {
    name: "Mason House",
    address: "River North @ 613 N Wells St",
    specials:
      "$5 Beer Cans (5-7pm), $5 Red & White Wine Glasses (5-7pm), $8 Craft Cocktails (5-7pm)",
    specials_url: "https://smalltabs.com/details.php?id=713",
    food_specials: "$1.50 Oysters (5-7pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=713",
  },
  {
    name: "The Land on Lincoln",
    address: "Lakeview @ 3032 N Lincoln Ave",
    specials:
      "$5 Vodka, $5 Bourbon, $2 Mystery Beer, $4 Drafts (4-7pm), $4 Wine Glasses (4-7pm)",
    specials_url: "https://smalltabs.com/details.php?id=165",
    food_specials:
      "Half Price Nonna's Meatball Sandwich, Half Price Snacks (4-7pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=165",
  },
  {
    name: "The Green Lady",
    address: "Lakeview @ 3328 N Lincoln Ave",
    specials: "$3 Pabst Blue Ribbon Cans",
    specials_url: "https://smalltabs.com/details.php?id=213",
  },
  {
    name: "King Crab House",
    address: "Lincoln Park @ 312 N Halsted St",
    specials: "Half Price Beer (4-6pm), Half Price Well Drinks (4-6pm)",
    specials_url: "https://smalltabs.com/details.php?id=702",
    food_specials: "Half Price Appetizers (4-6pm), Half Price Entrees (4-6pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=702",
  },
  {
    name: "Roscoe's Tavern",
    address: "Lakeview @ 3356 N Halsted St",
    specials:
      "$5 Jack Daniels Honey Shots, $5 Skyy Vodka Bombs, $15 Absolut Blue Hawaiian Pitchers, $15 Absolut Pink Lemonade Pitchers",
    specials_url: "https://smalltabs.com/details.php?id=173",
  },
  {
    name: "Rockwood Place",
    address: "Wrigleyville @ 3466 N Clark St",
    specials: "$3 Bud Light Drafts, $5 Flavored Bombs, $6 Margaritas",
    specials_url: "https://smalltabs.com/details.php?id=350",
    food_specials: "Half Price Pizzas",
    food_specials_url: "https://smalltabs.com/details.php?id=350",
  },
  {
    name: "Racine Plumbing Bar & Grill",
    address: "Lincoln Park @ 2642 N Lincoln Ave",
    specials:
      "$35 Drink Package including Draft Beers, Well Drinks, Select Call Drinks, Domestic Bottles and Cans, & Half Price Food (9pm-12am)",
    specials_url: "https://smalltabs.com/details.php?id=357",
  },
  {
    name: "Simone's Bar",
    address: "Pilsen @ 960 W 18th St",
    food_specials: "$8 Half Pound Burger & Pabst Blue Ribbon Tallboy Combo",
    food_specials_url: "https://smalltabs.com/details.php?id=107",
  },
  {
    name: "Berlin",
    address: "Lakeview @ 954 W Belmont Ave",
    specials: "$3 Bacardi Rum Bombs, $5 Tropical Sex Pints, $6 Stoli Vodka",
    specials_url: "https://smalltabs.com/details.php?id=349",
  },
  {
    name: "George Street Pub",
    address: "Lakeview @ 2858 N Halsted St",
    specials: "$5 Seasonal Drafts",
    specials_url: "https://smalltabs.com/details.php?id=630",
  },
  {
    name: "Rockit Burger Bar",
    address: "Wrigleyville @ 3700 N Clark St",
    specials: "$3 Select Beers, $5 Evan Williams Whiskey Shots",
    specials_url: "https://smalltabs.com/details.php?id=233",
  },
  {
    name: "Kit Kat Lounge",
    address: "Lakeview @ 3700 N Halsted St",
    food_specials: "$30 Prix-Fixe Menu (Salad, Entree, & Martini)",
    food_specials_url: "https://smalltabs.com/details.php?id=196",
  },
  {
    name: "Tavern 57",
    address: "Lincoln Park @ 1059 W Wrightwood Ave",
    specials:
      "$2 off Wine Glasses (4-8pm), $2 off Ciders (4-8pm), $3 off Well Drinks (4-8pm), $3 Michelob Ultra Bottles (4-8pm), $3 Blue Moon Bottles (4-8pm), $4 Chicago Craft Drafts (4-8pm)",
    specials_url: "https://smalltabs.com/details.php?id=24",
  },
  {
    name: "Black Iron Tavern",
    address: "West Loop @ 401 N Milwaukee Ave",
    specials: "$5 Moscow Mules (3-6pm), $5 You-Call-It Well Drinks (3-6pm)",
    specials_url: "https://smalltabs.com/details.php?id=671",
    food_specials:
      "$18 Fish & Chips and Lagunitas Draft Combo, $2 Chipotle Carnitas, Chicken, or Fried Fish Tacos (3-6pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=671",
  },
  {
    name: "Sherry's Bar",
    address: "West Rogers Park @ 5652 N Western Ave",
    specials:
      "$5 Long Island Iced Teas, $9 Old Style Buckets, $13 Miller Lite Buckets",
    specials_url: "https://smalltabs.com/details.php?id=645",
  },
  {
    name: "Mojo Bar & Grill",
    address: "Irving Park @ 2958 W Irving Park Rd",
    specials: "$5 Well Vodka Drinks",
    specials_url: "https://smalltabs.com/details.php?id=643",
    food_specials: "$5 Fish & Chips",
    food_specials_url: "https://smalltabs.com/details.php?id=643",
  },
  {
    name: "Devour 312",
    address: "Lincoln Park @ 1450 W Webster Ave",
    specials:
      "$5 Drafts (3-6pm), $5 Captain Morgan Rum, Tito's Vodka, Milagro Tequila, Fireball, Jameson, & Jack Daniels Whiskey Shots (3-6pm)",
    specials_url: "https://smalltabs.com/details.php?id=690",
  },
  {
    name: "Village Tap Bar & Grill",
    address: "Roscoe Village @ 2055 W Roscoe St",
    specials:
      "$2.50 Pabst Blue Ribbon Cans, $4 Budweiser, Bud Light, Miller Lite, & Miller High Life Bottles",
    specials_url: "https://smalltabs.com/details.php?id=269",
  },
  {
    name: "Kelsey's",
    address: "Lincoln Park @ 2265 N Lincoln Ave",
    specials: "$3.50 Curious Travelers, $3.50 Sam Adams, $5 Dublin Donkeys",
    specials_url: "https://smalltabs.com/details.php?id=154",
  },
  {
    name: "Southport Lanes",
    address: "Lakeview @ 3325 N Southport Ave",
    specials: "$3 Schiltz Drafts",
    specials_url: "https://smalltabs.com/details.php?id=281",
  },
  {
    name: "Altiro Latin Fusion",
    address: "Roscoe Village @ 2116 W Roscoe St",
    specials:
      "$1.99 Champagne (2-5pm), $2.49 Imported Mexican Beers (2-5pm), $4.99 Signature Craft Margaritas (2-5pm)",
    specials_url: "https://smalltabs.com/details.php?id=632",
    food_specials: "$1.99 Gourmet Tacos (2-5pm), $1.99 Ala Papa Bravo (2-5pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=632",
  },
  {
    name: "Mr. Brown's Lounge Loop",
    address: "Loop @ 81 E Wacker Dr",
    specials:
      "Half Price Island Rum Punch (3-6pm), Half Off Red Stripe Bottles (3-6pm)",
    specials_url: "https://smalltabs.com/details.php?id=615",
  },
  {
    name: "Leadway Bar & Grill",
    address: "Lincoln Square @ 5223 N Damen Ave",
    specials:
      "$3 Point & Pabst Blue Ribbon Bottles, $3.50 Budweiser, Bud Light, Miller Genuine Draft, Miller Lite, Miller High Life, & Old Style Bottles",
    specials_url: "https://smalltabs.com/details.php?id=375",
  },
  {
    name: "Big Chicks",
    address: "Uptown @ 5024 N Sheridan Rd",
    specials: "$2 off Pitchers (4-9pm)",
    specials_url: "https://smalltabs.com/details.php?id=261",
    food_specials: "$7 Third Pound Cheeseburgers with Fries",
    food_specials_url: "https://smalltabs.com/details.php?id=261",
  },
  {
    name: "Leona's Rogers Park",
    address: "Rogers Park @ 6935 N Sheridan Ave",
    specials:
      "$5 Cocktails (6-9pm), $5 Frozen Margaritas (6-9pm), $5 Rocks Margaritas (6-9pm), $5 Long Island Iced Teas (6-9pm)",
    specials_url: "https://smalltabs.com/details.php?id=668",
    food_specials: "$3 off Wing Dings",
    food_specials_url: "https://smalltabs.com/details.php?id=668",
  },
  {
    name: "Nola Gastropub",
    address: "Lakeview @ 3481 N Clark St",
    specials:
      "$3.50 Founders All Day IPA, $3.50 Founders Rubaeus, $4 Beer of the Month",
    specials_url: "https://smalltabs.com/details.php?id=642",
  },
  {
    name: "Compass Bar",
    address: "Lincoln Park @ 433 W Diversey Pkwy",
    food_specials: "Half Price Pizza from 4-6pm",
    food_specials_url: "https://smalltabs.com/details.php?id=586",
  },
  {
    name: "Cactus Bar & Grill",
    address: "Loop @ 404 S Wells St",
    specials: "$25 Lagunitas Buckets, $6 Patron Silver Tequila Shots",
    specials_url: "https://smalltabs.com/details.php?id=133",
  },
  {
    name: "Fifolet",
    address: "Wicker Park @ 1942 W Division St",
    specials:
      "$4 Lagunitas Sumpin' Easy Drafts (5-9pm), $3 Jameson Whiskey Shots (5-9pm)",
    specials_url: "https://smalltabs.com/details.php?id=695",
    food_specials: "$9 Half Po'Boy & Soup Special (5-9pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=695",
  },
  {
    name: "Riverview Tavern",
    address: "Roscoe Village @ 1958 W Roscoe St",
    specials:
      "$1 off Ciders, $1 off Wine Glasses, $5 Brewery-of-the-Month Drafts",
    specials_url: "https://smalltabs.com/details.php?id=220",
  },
  {
    name: "Wabash Tap",
    address: "South Loop @ 1233 S Wabash Ave",
    specials: "$4 Drafts (4-6pm), $14 Buckets (4-6pm)",
    specials_url: "https://smalltabs.com/details.php?id=142",
  },
  {
    name: "Allium",
    address: "Near North Side @ 120 E Delaware St",
    specials: "Half Price Select Spirits, Wines, & Draft Beers (4-6pm)",
    specials_url: "https://smalltabs.com/details.php?id=687",
    food_specials: "Half Price Bar Bites (4-6pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=687",
  },
  {
    name: "Bootlegger's",
    address: "Near North Side @ 11 W Division St",
    specials:
      "$3 Southern Comfort, $3 Shellback Rum, $5 Wild Turkey Bourbon, $4 Miller Lite Drafts",
    specials_url: "https://smalltabs.com/details.php?id=66",
  },
  {
    name: "Prohibition Pub & Grill",
    address: "Lincoln Park @ 2138 N Halsted Ave",
    specials: "$4 Well Drinks",
    specials_url: "https://smalltabs.com/details.php?id=564",
    food_specials: "$5 Fried Chicken Sandwich",
    food_specials_url: "https://smalltabs.com/details.php?id=564",
  },
  {
    name: "Paddy O'Fegan's",
    address: "West Loop @ 204 N Halsted St",
    specials:
      "$1 off Tequila, $15 Leinenkugel's Grapefruit Shandy Buckets, $3 Miller Lite Drafts (4-7pm), $5 Rolling Rock Tallboys (4-7pm), $5 Paddy's Whiskey (4-7pm)",
    specials_url: "https://smalltabs.com/details.php?id=485",
    food_specials:
      "$10 Chicken Torta with Posole Soup, $5 Loaded Nachos (4-7pm), $3 Jalapeno & Cheddar Hot Dogs (4-7pm), $3 Wrigley Field Smokies (4-7pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=485",
  },
  {
    name: "Francesca's Bryn Mawr",
    address: "Edgewater @ 1039 W Bryn Mawr Ave",
    food_specials: "$15.99 Prix Fixe Lunch Menu",
    food_specials_url: "https://smalltabs.com/details.php?id=429",
  },
  {
    name: "Bridget McNeill's Bar & Kitchen",
    address: "Lakeview @ 420 W Belmont Ave",
    specials: "$4.20 Draft Beers (5-7pm), $6 Wine Glasses (5-7pm)",
    specials_url: "https://smalltabs.com/details.php?id=347",
    food_specials: "$12.99 Large Pizzas (with drink purchase)",
    food_specials_url: "https://smalltabs.com/details.php?id=347",
  },
  {
    name: "Four Treys Tavern",
    address: "Roscoe Village @ 3333 N Damen Ave",
    specials:
      "$5.50 Bombs, $3.75 Well Drinks, $2.50 Pabst Blue Ribbon, $3.50 Old Style Tallboys, $4 Jameson Whiskey Shots, $3 Domestic Bottles, $4-4.50 Import Bottles",
    specials_url: "https://smalltabs.com/details.php?id=78",
  },
  {
    name: "Park Tavern",
    address: "West Loop @ 1645 W Jackson Blvd",
    specials:
      "$5 Jameson Whiskey, $5 Select Wine Glasses, $3 Tallboy Cans (3-5pm), $4 Well Drinks (3-5pm), $4 House Wine Glasses (3-5pm), Half Price 16oz Drafts (3-5pm)",
    specials_url: "https://smalltabs.com/details.php?id=494",
    food_specials: "$15 All-You-Can-Eat Fish Fry (4pm-Close)",
    food_specials_url: "https://smalltabs.com/details.php?id=494",
  },
  {
    name: "Hubbard Inn",
    address: "River North @ 110 W Hubbard St",
    food_specials:
      "$2 Raw Bar (selections include Shrimp, Lobster, Scallops, King Crab, & Oysters)",
    food_specials_url: "https://smalltabs.com/details.php?id=554",
  },
  {
    name: "Stretch Bar & Grill",
    address: "Wrigleyville @ 3485 N Clark St",
    specials:
      "$30 Domestic Tallboys, Domestic Drafts, Call Cocktails, Wine, & Select Appetizers Happy Hour Package (7-10pm), $25 Domestic Drafts, Well Cocktails, Wine, & Select Appetizer Happy Hour Package (7-10pm)",
    specials_url: "https://smalltabs.com/details.php?id=81",
  },
  {
    name: "Casati's Pizza Vino",
    address: "Lincoln Park @ 444 W Fullerton Pkwy",
    food_specials: "$10 & Under Bar Menu",
    food_specials_url: "https://smalltabs.com/details.php?id=703",
  },
  {
    name: "Vaughans Pub Lakeview",
    address: "Lakeview @ 2917 N Sheffield Ave",
    specials:
      "$4.50 Blue Moon Drafts, $6 Margaritas, $6 Bombs, $16 Miller Family Buckets, $3 Domestic Bottles (4:30-6:30pm), $4 Well Drinks (4:30-6:30pm), $4.50 All American Drafts (4:30-6:30pm)",
    specials_url: "https://smalltabs.com/details.php?id=44",
    food_specials: "$2 Meatball Sliders, $2 Brisket Sliders, $5 Nachos",
    food_specials_url: "https://smalltabs.com/details.php?id=44",
  },
  {
    name: "Side Street Saloon",
    address: "Lakeview @ 1456 W George St",
    specials: "$3.25 Pabst Blue Ribbon Bottles",
    specials_url: "https://smalltabs.com/details.php?id=187",
    food_specials: "$5.50 Half Pound Cheeseburger & Fries",
    food_specials_url: "https://smalltabs.com/details.php?id=187",
  },
  {
    name: "Nick's Beer Garden",
    address: "Wicker Park @ 1516 N Milwaukee Ave",
    specials: "$1 off Draft Beers (4-7pm)",
    specials_url: "https://smalltabs.com/details.php?id=449",
  },
  {
    name: "Estelle's Cafe & Lounge",
    address: "Wicker Park @ 2013 W North Ave",
    specials:
      "$4 Three Floyd's Drafts (5-8pm), $3 Rebel Yell Whiskey Shots (5-8pm)",
    specials_url: "https://smalltabs.com/details.php?id=216",
  },
  {
    name: "The Arrogant Frog Bar",
    address: "Lincoln Park @ 1365 W Fullerton Ave",
    specials:
      "$3 Bud Light Drafts, $4 Fireball Whiskey Shots, $4 Craft Beers, $5 Well Cocktails, $5 Malibu Rum Cocktails",
    specials_url: "https://smalltabs.com/details.php?id=240",
  },
  {
    name: "Innjoy (Wicker Park)",
    address: "Wicker Park @ 2051 W Division St",
    specials:
      "$4 Dos Equis Drafts, $8 Milagro Tequila Margaritas, $5 Fireball Whiskey Shots",
    specials_url: "https://smalltabs.com/details.php?id=163",
    food_specials: "Half Price Shrimp",
    food_specials_url: "https://smalltabs.com/details.php?id=163",
  },
  {
    name: "Tuman's Tap & Grill",
    address: "Ukrainian Village @ 2159 W Chicago Ave",
    specials: "$3.50 Pabst Blue Ribbon Drafts",
    specials_url: "https://smalltabs.com/details.php?id=662",
  },
  {
    name: "Will's Northwoods Inn",
    address: "Lakeview @ 3030 N Racine Ave",
    specials:
      "$4 Sierra Nevada Drafts, $3 Schiltz Tallboys, $2.50 Pabst Blue Ribbon, $3 Miller High Life Bottles",
    specials_url: "https://smalltabs.com/details.php?id=77",
    food_specials: "$12.95 All-You-Can-Eat Fish Fry",
    food_specials_url: "https://smalltabs.com/details.php?id=77",
  },
  {
    name: "Headquarters Beercade River North",
    address: "River North @ 213 W Institute St",
  },
  {
    name: "The Boss Bar",
    address: "River North @ 420 N Clark St",
    food_specials:
      "$10 Burger & Miller Lite Draft Combo, $24 Cheese Pizza & Miller Lite Pitcher Combo",
    food_specials_url: "https://smalltabs.com/details.php?id=560",
  },
];

const saturday = [
  {
    name: "Taco Joint Lincoln Park",
    address: "Lincoln Park @ 1969 N Halsted St",
    specials: "$5 Modelo Especial Can & Olmeca Tequila Blanco Shot Combo",
    specials_url: "https://smalltabs.com/details.php?id=541",
  },
  {
    name: "Black Rock Pub & Kitchen",
    address: "Lakeview @ 3614 N Damen Ave",
    specials:
      "$1 off Off Color Brewery Drafts & Bottles, $4 Slow & Low Rye Shots",
    specials_url: "https://smalltabs.com/details.php?id=59",
    food_specials: "40¢ Wings",
    food_specials_url: "https://smalltabs.com/details.php?id=59",
  },
  {
    name: "Side Street Saloon",
    address: "Lakeview @ 1456 W George St",
    specials: "$3.25 Pabst Blue Ribbon Bottles",
    specials_url: "https://smalltabs.com/details.php?id=187",
    food_specials: "$5.50 Half Pound Cheeseburger & Fries",
    food_specials_url: "https://smalltabs.com/details.php?id=187",
  },
  {
    name: "Grandview Tavern",
    address: "West Loop @ 1202 W Grand Ave",
    specials:
      "$3 Hamms Cans, $5 Jameson Whiskey Shots, $5 Fireball Whiskey Shots",
    specials_url: "https://smalltabs.com/details.php?id=476",
    food_specials: "$9 Fish Tacos",
    food_specials_url: "https://smalltabs.com/details.php?id=476",
  },
  {
    name: "Kincade's Bar & Grill",
    address: "Lincoln Park @ 950 W Armitage Ave",
    specials:
      "$4 Draft of the Day, $6 Makers Mark Bourbon Cocktails, $7 Pabst Blue Ribbon & Jameson Whiskey Shot Combo",
    specials_url: "https://smalltabs.com/details.php?id=153",
  },
  {
    name: "Rudy's Bar & Grille",
    address: "Loop @ 69 E Madison St",
    food_specials:
      "$11.95 Fish & Chips, $12.95 Salmon Burgers, Half Price Appetizers (3-5pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=380",
  },
  {
    name: "Rocky's",
    address: "Bridgeport @ 234 W 31st St",
    specials:
      "$5 Black & Blues, $3 Non-Premium Domestic Beers, $4 Premium Domestic & Import Beers, $12 Domestic Buckets",
    specials_url: "https://smalltabs.com/details.php?id=378",
  },
  {
    name: "El Tequilas Bar & Grill",
    address: "Lincoln Park @ 2826 N Lincoln Ave",
    specials: "$3 Budweiser (4-6pm), $3 Tecate (4-6pm), $5 Margaritas (4-6pm)",
    specials_url: "https://smalltabs.com/details.php?id=678",
  },
  {
    name: "Gio's Bar & Grill",
    address: "Lincoln Square @ 4857 N Damen Ave",
    specials: "$4 Vodka Cocktails, $4 5 Rabbit Drafts, $3.50 Fireball Shots",
    specials_url: "https://smalltabs.com/details.php?id=374",
  },
  {
    name: "Knife & Tine",
    address: "Lincoln Park @ 1417 W Fullerton Ave",
    specials:
      "Half Price Draft Beers (3-6pm), Half Price Craft Cocktails (3-6pm), Half Price Wine Glasses (3-6pm)",
    specials_url: "https://smalltabs.com/details.php?id=640",
    food_specials: "$5 Bar Snacks (3-6pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=640",
  },
  {
    name: "Kit Kat Lounge",
    address: "Lakeview @ 3700 N Halsted St",
    food_specials: "$30 Prix-Fixe Menu (Salad, Entree, & Martini)",
    food_specials_url: "https://smalltabs.com/details.php?id=196",
  },
  {
    name: "SideDoor",
    address: "Streeterville @ 100 E Ontario St",
    food_specials:
      "Half Price Avocado Mash, Stuffed Mushrooms, Chips & Dip, IPA Beer Pretzels, & Deviled Eggs from 3-5pm",
    food_specials_url: "https://smalltabs.com/details.php?id=574",
  },
  {
    name: "Dark Horse Tap & Grille",
    address: "Wrigleyville @ 3443 N Sheffield Ave",
    specials:
      "$5 Bomb Shots, $5 Stoli Vodka Cocktails, $4 Lagunitas Drafts, $3 Fireball Whiskey Shots",
    specials_url: "https://smalltabs.com/details.php?id=201",
  },
  {
    name: "Timothy O'Toole's",
    address: "Near North Side @ 622 N Fairbanks St",
    specials:
      "$12 Miller Lite, Coors Light, & Bud Light Pitchers, $6 Jameson Whiskey Cocktails, $6 Jameson Whiskey Shots",
    specials_url: "https://smalltabs.com/details.php?id=195",
  },
  {
    name: "Finley Dunne's Tavern",
    address: "Lakeview @ 3458 N Lincoln Ave",
    specials: "$5 UV Vodka Bombs, $2 Miller High Life Drafts",
    specials_url: "https://smalltabs.com/details.php?id=5",
    food_specials: "$12 All-You-Can-Eat Blue Moon Fish Fry",
    food_specials_url: "https://smalltabs.com/details.php?id=5",
  },
  {
    name: "Longman & Eagle",
    address: "Logan Square @ 2657 N Kedzie Ave",
    specials:
      "$2 Old Milwaukee & Pabst Blue Ribbon Cans, $3 Old Style Drafts, $3 Select Whiskey Shots",
    specials_url: "https://smalltabs.com/details.php?id=348",
  },
  {
    name: "McGee's Tavern",
    address: "Lincoln Park @ 950 W Webster Ave",
    specials: "$3 Bud Light Drafts",
    specials_url: "https://smalltabs.com/details.php?id=21",
  },
  {
    name: "Tripoli Tap",
    address: "Lincoln Park @ 1147 W Armitage Ave",
    specials: "$3 Coors Light Bottles",
    specials_url: "https://smalltabs.com/details.php?id=450",
  },
  {
    name: "Halligan Bar",
    address: "Lincoln Park @ 2274 N Lincoln Ave",
    specials:
      "$3 Budweiser & Bud Light Bottles, $3.50 Vegas Bombs, $3.50 Captain Morgan Rum & Coke, $4 Stoli Vodka Drinks, $5 Bombs, $2 Bud Light Drafts, $3 Jameson Whiskey Shots, $3.50 Goose Island 312 Drafts, $3.50 Guinness, $4 Stoli Vodka Drinks",
    specials_url: "https://smalltabs.com/details.php?id=130",
  },
  {
    name: "Murphy's Bleachers",
    address: "Wrigleyville @ 3653 N Sheffield Ave",
    specials:
      "$4 Southern Comfort Drinks, $14 Lagunitas IPA & Pilsner Pitchers",
    specials_url: "https://smalltabs.com/details.php?id=32",
    food_specials: "$6 Fish & Chips",
    food_specials_url: "https://smalltabs.com/details.php?id=32",
  },
  {
    name: "Gideon Welles",
    address: "Lincoln Square @ 4500 N Lincoln Ave",
    specials: "$5 Select Craft Drafts",
    specials_url: "https://smalltabs.com/details.php?id=603",
  },
  {
    name: "The Cubby Bear",
    address: "Wrigleyville @ 1059 W Addison St",
    specials: "$5 Domestic Tallboys",
    specials_url: "https://smalltabs.com/details.php?id=150",
  },
  {
    name: "Cellars Bar & Grill",
    address: "Edgewater @ 5900 N Broadway St",
    specials: "$5 Sobieski Vodka Martinis (5-10pm)",
    specials_url: "https://smalltabs.com/details.php?id=620",
  },
  {
    name: "Leadway Bar & Grill",
    address: "Lincoln Square @ 5223 N Damen Ave",
    specials:
      "$3 Point & Pabst Blue Ribbon Bottles, $3.50 Budweiser, Bud Light, Miller Genuine Draft, Miller Lite, Miller High Life, & Old Style Bottles",
    specials_url: "https://smalltabs.com/details.php?id=375",
  },
  {
    name: "Twisted Shamrock",
    address: "Garfield Ridge @ 6462 S Central Ave",
    specials:
      "$3.50 Amstel Light, Heineken, or Shiner Bock, $3 Pinnacle Vodka O-Bombs",
    specials_url: "https://smalltabs.com/details.php?id=704",
  },
  {
    name: "Maxbar",
    address: "Lincoln Park @ 2247 N Lincoln Ave",
    specials: "$2 Fireball Whiskey Shots, $100 Fireball Whiskey Bottles",
    specials_url: "https://smalltabs.com/details.php?id=252",
  },
  {
    name: "Higgins' Tavern",
    address: "Lakeview @ 3259 N Racine Ave",
    specials: "$11 Miller Lite & Coors Light Pitchers",
    specials_url: "https://smalltabs.com/details.php?id=17",
  },
  {
    name: "Four Shadows Tavern",
    address: "Lincoln Park @ 2758 N Ashland Ave",
    specials: "$5 Fireball Whiskey, $5 Stoli Vodka Flavors",
    specials_url: "https://smalltabs.com/details.php?id=29",
  },
  {
    name: "The Drinkingbird",
    address: "Lincoln Park @ 2201 N Clybourn Ave",
    specials: "$5 Schlitz & Dickel Whiskey Shot Combo",
    specials_url: "https://smalltabs.com/details.php?id=48",
  },
  {
    name: "Bar Takito",
    address: "West Loop @ 201 N Morgan St",
  },
  {
    name: "Franklin Tap",
    address: "Loop @ 325 S Franklin St",
    specials:
      "$5 Two Brothers Pale Frank Drafts, $5 Yukon Jack Wicked Hot Shots",
    specials_url: "https://smalltabs.com/details.php?id=135",
    food_specials: "$5 Select Appetizers (after 5pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=135",
  },
  {
    name: "Declan's Irish Pub",
    address: "Near North Side @ 1240 N Wells St",
    specials: "$4 Select Craft Draft, $5 Jack Daniels Fire",
    specials_url: "https://smalltabs.com/details.php?id=365",
    food_specials: "$10 Fish & Chips",
    food_specials_url: "https://smalltabs.com/details.php?id=365",
  },
  {
    name: "Gino's North",
    address: "Edgewater @ 1111 W Granville Ave",
    specials: "$3 Sangria Glasses",
    specials_url: "https://smalltabs.com/details.php?id=238",
  },
  {
    name: "George Street Pub",
    address: "Lakeview @ 2858 N Halsted St",
    specials: "$5 Seasonal Drafts",
    specials_url: "https://smalltabs.com/details.php?id=630",
  },
  {
    name: "Tavern 57",
    address: "Lincoln Park @ 1059 W Wrightwood Ave",
    specials:
      "$2 off Wine Glasses (4-8pm), $2 off Ciders (4-8pm), $3 off Well Drinks (4-8pm), $3 Michelob Ultra Bottles (4-8pm), $3 Blue Moon Bottles (4-8pm), $4 Chicago Craft Drafts (4-8pm)",
    specials_url: "https://smalltabs.com/details.php?id=24",
  },
  {
    name: "Tai's Til 4",
    address: "Lakeview @ 3611 N Ashland Ave",
    specials: "$7 Flagship Bombs",
    specials_url: "https://smalltabs.com/details.php?id=549",
  },
  {
    name: "The Beetle Bar & Grill",
    address: "Humboldt Park @ 2532 W Chicago Ave",
    specials: "$4 Curious Traveler",
    specials_url: "https://smalltabs.com/details.php?id=2",
    food_specials: "$8 Fish Fry",
    food_specials_url: "https://smalltabs.com/details.php?id=2",
  },
  {
    name: "The Grafton",
    address: "Lincoln Square @ 4530 N Lincoln Ave",
    specials: "$5 Berghoff Reppin' Red Drafts",
    specials_url: "https://smalltabs.com/details.php?id=260",
    food_specials: "$11 The Labor Day Burger",
    food_specials_url: "https://smalltabs.com/details.php?id=260",
  },
  {
    name: "Mrs. Murphy & Sons Irish Bistro",
    address: "North Center @ 3905 N Lincoln Ave",
    specials:
      "$5 Specialty Irish Cocktails (4:30-6:30pm), $5 Irish Beers (4:30-6:30pm)",
    specials_url: "https://smalltabs.com/details.php?id=651",
    food_specials: "$5 Appetizer Bites (4:30-6:30pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=651",
  },
  {
    name: "Hubbard Inn",
    address: "River North @ 110 W Hubbard St",
    food_specials:
      "$2 Raw Bar (selections include Shrimp, Lobster, Scallops, King Crab, & Oysters)",
    food_specials_url: "https://smalltabs.com/details.php?id=554",
  },
  {
    name: "Belford Tavern",
    address: "Irving Park @ 3200 N Pulaski Rd",
    specials:
      "$5 Grey Goose Vodka Drinks & Shots, $3 Jameson Whiskey Shots, $3 Rotating Revolution 16oz Drafts, $3.50 Malort Shots, $3.50 Jameson Whiskey Shots, $2.25 Domestic 18oz Drafts",
    specials_url: "https://smalltabs.com/details.php?id=581",
  },
  {
    name: "The Fifty/50",
    address: "Wicker Park @ 2047 W Division St",
    specials:
      "$6 Tito's Vodka Drinks, $5 Ketel One Vodka Drinks (3-6pm), Half Price Craft Beers (3-6pm), $5 Wine Glasses (3-6pm)",
    specials_url: "https://smalltabs.com/details.php?id=127",
    food_specials: "Half Price Appetizers (3-6pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=127",
  },
  {
    name: "Wabash Tap",
    address: "South Loop @ 1233 S Wabash Ave",
    specials: "$4 Drafts (4-6pm), $14 Buckets (4-6pm)",
    specials_url: "https://smalltabs.com/details.php?id=142",
  },
  {
    name: "Dimo's Pizza",
    address: "Wicker Park @ 1615 N Damen Ave",
    food_specials:
      "$9 Pizza Slice, Bourbon Shot, & Pabst Blue Ribbon or Miller High Life Tallboy Combo",
    food_specials_url: "https://smalltabs.com/details.php?id=679",
  },
  {
    name: "Porkchop Hyde Park",
    address: "Hyde Park @ 1516 E Harper Ct",
    specials: "Half Price Drinks (10pm-Close)",
    specials_url: "https://smalltabs.com/details.php?id=684",
    food_specials: "Half Price Appetizers (10pm-Close)",
    food_specials_url: "https://smalltabs.com/details.php?id=684",
  },
  {
    name: "Vines on Clark",
    address: "Wrigleyville @ 3554 N Clark St",
    specials: "$5 You-Call-Its",
    specials_url: "https://smalltabs.com/details.php?id=33",
  },
  {
    name: "Gaslight Bar & Grille",
    address: "Lincoln Park @ 2450 N Clark St",
    specials:
      "$15 Domestic Buckets, $5 Tullamore Dew Whiskey Shots, $5 Trop Bombs, $3.50 College Beer of the Day",
    specials_url: "https://smalltabs.com/details.php?id=358",
    food_specials:
      "Free Burgers (with beverage purchase, limited quantities), Half Price Appetizers (5-7pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=358",
  },
  {
    name: "Sluggers",
    address: "Wrigleyville @ 3540 N Clark St",
    specials:
      "$6 Goose Island Green Line Drafts, $6 Sam Adams Drafts, $6 Pinnacle Flavored Vodka Cocktails",
    specials_url: "https://smalltabs.com/details.php?id=53",
  },
  {
    name: "Subterranean Lounge",
    address: "Wicker Park @ 2011 W North Ave",
    specials: "$5 UV Vodka Cocktails",
    specials_url: "https://smalltabs.com/details.php?id=56",
  },
  {
    name: "Standard Bar & Grill",
    address: "Wicker Park @ 1332 N Milwaukee Ave",
    specials: "$6 Ketel One Vodka Drinks",
    specials_url: "https://smalltabs.com/details.php?id=676",
    food_specials:
      "$20 After-Work Burger Deal (Cheeseburger with Fries, Domestic Bottles, & Well Drinks from 6-9pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=676",
  },
  {
    name: "The Monkey's Paw",
    address: "Lincoln Park @ 2524 N Southport Ave",
    specials:
      "$3 Rebel Yell Whiskey (4:30-6:30pm), $3 off All Drafts (4:30-6:30pm), $3 off All Wine Glasses (4:30-6:30pm)",
    specials_url: "https://smalltabs.com/details.php?id=453",
  },
  {
    name: "Butcher's Tap",
    address: "Lakeview @ 3553 N Southport Ave",
    specials:
      "$5 Tullamore Dew Whiskey, Half Price Tito's Vodka Cocktails (4-6pm)",
    specials_url: "https://smalltabs.com/details.php?id=624",
  },
  {
    name: "Park Tavern",
    address: "West Loop @ 1645 W Jackson Blvd",
    specials:
      "$5 Jameson Whiskey, $5 Select Wine Glasses, $3 Tallboy Cans (3-5pm), $4 Well Drinks (3-5pm), $4 House Wine Glasses (3-5pm), Half Price 16oz Drafts (3-5pm)",
    specials_url: "https://smalltabs.com/details.php?id=494",
    food_specials: "$15 All-You-Can-Eat Fish Fry (4pm-Close)",
    food_specials_url: "https://smalltabs.com/details.php?id=494",
  },
  {
    name: "Compass Bar",
    address: "Lincoln Park @ 433 W Diversey Pkwy",
    food_specials: "Half Price Pizza from 4-6pm",
    food_specials_url: "https://smalltabs.com/details.php?id=586",
  },
  {
    name: "Keenan O'Reilly's",
    address: "Lakeview @ 3916 N Ashland Ave",
    specials:
      "$3.50 Goose Island & Sam Adams Bottles, $2 Pabst Blue Ribbon Cans, $2.50 Miller High Life Tallboys, $3 Labatt Blue Drafts, $2.50 Old Style Drafts",
    specials_url: "https://smalltabs.com/details.php?id=454",
  },
  {
    name: "Clover",
    address: "Near West Side @ 722 W Grand Ave",
    specials:
      "$5 Tullamore Dew Whiskey, $8 Pabst Blue Ribbon Tallboy & Jameson Whiskey Shot Combo, Half Price Drinks (5-7pm)",
    specials_url: "https://smalltabs.com/details.php?id=625",
  },
  {
    name: "Southport Lanes",
    address: "Lakeview @ 3325 N Southport Ave",
    specials: "$3 Schiltz Drafts",
    specials_url: "https://smalltabs.com/details.php?id=281",
  },
  {
    name: "Paddy O'Fegan's",
    address: "West Loop @ 204 N Halsted St",
    specials:
      "$1 off Tequila, $15 Leinenkugel's Grapefruit Shandy Buckets, $3 Miller Lite Drafts (4-7pm), $5 Rolling Rock Tallboys (4-7pm), $5 Paddy's Whiskey (4-7pm)",
    specials_url: "https://smalltabs.com/details.php?id=485",
    food_specials:
      "$10 Chicken Torta with Posole Soup, $5 Loaded Nachos (4-7pm), $3 Jalapeno & Cheddar Hot Dogs (4-7pm), $3 Wrigley Field Smokies (4-7pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=485",
  },
  {
    name: "Fremont",
    address: "River North @ 15 W Illinois St",
    specials:
      "$3 Beers (5-9pm), $4 Mixed Drinks (5-9pm), $5 Mule Bar (5-9pm), $5 Wine Glasses (5-9pm), $6 Tito's Vodka Cocktails (5-9pm)",
    specials_url: "https://smalltabs.com/details.php?id=658",
  },
  {
    name: "Trader Todd's",
    address: "Lakeview @ 3216 N Sheffield Ave",
    specials: "$1 Rolling Rock Drafts (4:30-6:30pm)",
    specials_url: "https://smalltabs.com/details.php?id=455",
    food_specials: "$2 Select Appetizers (4:30-6:30pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=455",
  },
  {
    name: "Corcoran's Grill & Pub",
    address: "Lincoln Park @ 1615 N Wells St",
    specials:
      "$4.50 Corona & Corona Light Bottles, $7 Moscow Mules, $5 All Shots",
    specials_url: "https://smalltabs.com/details.php?id=41",
    food_specials: "$12 All-You-Can-Eat Fish & Chips",
    food_specials_url: "https://smalltabs.com/details.php?id=41",
  },
  {
    name: "Avenue Tavern",
    address: "Lakeview @ 2916 N Broadway St",
    specials:
      "$10 Miller Lite Pitchers, $16 Margarita Pitchers, $16 Long Island Iced Tea Pitchers",
    specials_url: "https://smalltabs.com/details.php?id=170",
  },
  {
    name: "Foundation Room at House of Blues",
    address: "River North @ 329 N Dearborn St",
    specials:
      "$6 Select Wine Glasses (5-7pm), $5 Well Drinks (5-7pm), $4 Domestic Beers (5-7pm)",
    specials_url: "https://smalltabs.com/details.php?id=622",
  },
  {
    name: "Flo & Santos",
    address: "South Loop @ 1310 S Wabash Ave",
    specials: "$18 Polish Vodka Flights",
    specials_url: "https://smalltabs.com/details.php?id=489",
  },
  {
    name: "Scarlet Bar",
    address: "Lakeview @ 3320 N Halsted St",
    specials: "$6 Ketel One Vodka Cocktails",
    specials_url: "https://smalltabs.com/details.php?id=262",
  },
  {
    name: "Country Club Bar",
    address: "Wrigleyville @ 3462 N Clark St",
    specials:
      "$6 Tito's Vodka Cocktails, $4 Revolution Anti-Hero, $3 Shiner Premium",
    specials_url: "https://smalltabs.com/details.php?id=207",
    food_specials: "Half Price Appetizers",
    food_specials_url: "https://smalltabs.com/details.php?id=207",
  },
  {
    name: "The Full Shilling",
    address: "Wrigleyville @ 3724 N Clark St",
    specials:
      "$5 Fireball Whiskey, $20 Table Tappers, Half Price Drinks (6-9pm)",
    specials_url: "https://smalltabs.com/details.php?id=623",
    food_specials: "$7.95 Fish & Chips, $1 Hot Dogs",
    food_specials_url: "https://smalltabs.com/details.php?id=623",
  },
  {
    name: "Mother's Too",
    address: "Near North Side @ 14 W Division St",
    specials: "$5 Sailor Jerry Rum, $5.50 Jim Beam Bourbon",
    specials_url: "https://smalltabs.com/details.php?id=67",
  },
  {
    name: "Fatpour Tap Works",
    address: "Wicker Park @ 2005 W Division St",
    specials: "$5 Pabst Blue Ribbon & Select Shot Combo",
    specials_url: "https://smalltabs.com/details.php?id=459",
  },
  {
    name: "Harbee Liquors & Tavern",
    address: "Pilsen @ 1345 W 18th St",
    specials: "$3 Budweiser & Miller Family Beers",
    specials_url: "https://smalltabs.com/details.php?id=548",
  },
  {
    name: "Weather Mark Tavern",
    address: "South Loop @ 1503 S Michigan Ave",
    specials: "$2 off All Drafts (3-6pm), $5 Lagunitas Beers",
    specials_url: "https://smalltabs.com/details.php?id=143",
    food_specials: "$12.50 All-You-Can-Eat Fish Fry",
    food_specials_url: "https://smalltabs.com/details.php?id=143",
  },
  {
    name: "Mojo Bar & Grill",
    address: "Irving Park @ 2958 W Irving Park Rd",
    specials: "$5 Well Vodka Drinks",
    specials_url: "https://smalltabs.com/details.php?id=643",
    food_specials: "$5 Fish & Chips",
    food_specials_url: "https://smalltabs.com/details.php?id=643",
  },
  {
    name: "The Boss Bar",
    address: "River North @ 420 N Clark St",
    food_specials:
      "$10 Burger & Miller Lite Draft Combo, $24 Cheese Pizza & Miller Lite Pitcher Combo",
    food_specials_url: "https://smalltabs.com/details.php?id=560",
  },
  {
    name: "Duke of Perth",
    address: "Lakeview @ 2913 N Clark St",
    food_specials: "$11.95 All-You-Can-Eat Fish & Chips",
    food_specials_url: "https://smalltabs.com/details.php?id=92",
  },
  {
    name: "Butch McGuires",
    address: "Near North Side @ 20 W Division St",
    specials:
      "$5 Sam Adams Lager Drafts, $5 Sam Adams Seasonal Drafts, $4 Mystery Shots, Half Price Drafts (5-7pm), Half Price Mixed Drinks (5-7pm), Half Price Wine (5-7pm)",
    specials_url: "https://smalltabs.com/details.php?id=617",
  },
  {
    name: "Fat Cat",
    address: "Uptown @ 4840 N Broadway St",
    specials:
      "$6 Uptown Royale (4-6pm), $6 Four Roses Manhattan (4-6pm), $6 Prairie Organic Gin & Ginger (4-6pm), $5 Select Craft Beers (4-6pm), $5 Highballs (4-6pm), $6 Select Wines (4-6pm)",
    specials_url: "https://smalltabs.com/details.php?id=120",
  },
  {
    name: "Blackfinn Ameripub",
    address: "River North @ 65 W Kinzie St",
    specials: "$5 Bacardi Cocktails",
    specials_url: "https://smalltabs.com/details.php?id=543",
  },
  {
    name: "Brickhouse Tavern",
    address: "Wrigleyville @ 3647 N Clark St",
    specials: "$5 You-Call-It's",
    specials_url: "https://smalltabs.com/details.php?id=681",
    food_specials: "Half Price Appetizers (after 3pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=681",
  },
  {
    name: "Reed's Local",
    address: "Avondale @ 3017 W Belmont Ave",
    specials: "$4 Old Crow Whiskey & Hamm's Can Combo, $2 Hamm's Cans",
    specials_url: "https://smalltabs.com/details.php?id=585",
  },
  {
    name: "Devon Seafood Grill",
    address: "Near North Side @ 39 E Chicago Ave",
    food_specials:
      "$1 Oysters (4-7pm), $7.50 Appetizers (4-7pm, 9pm-Close), $2.50 Jumbo Shrimp Cocktail (4-7pm, 9pm-Close)",
    food_specials_url: "https://smalltabs.com/details.php?id=689",
  },
  {
    name: "Innjoy (Wicker Park)",
    address: "Wicker Park @ 2051 W Division St",
    specials:
      "$4 Dos Equis Drafts, $8 Milagro Tequila Margaritas, $5 Fireball Whiskey Shots",
    specials_url: "https://smalltabs.com/details.php?id=163",
    food_specials: "Half Price Shrimp",
    food_specials_url: "https://smalltabs.com/details.php?id=163",
  },
  {
    name: "The Bedford",
    address: "Wicker Park @ 1612 W Division St",
    specials: "$8 Draft Cocktails",
    specials_url: "https://smalltabs.com/details.php?id=416",
  },
  {
    name: "Bulldog Ale House (Loyola)",
    address: "Rogers Park @ 6606 N Sheridan Rd",
    specials: "$5 Jameson Whiskey, $5 Guinness, $6 Irish Car Bomb",
    specials_url: "https://smalltabs.com/details.php?id=663",
    food_specials: "$10.99 All-You-Can-Eat Fish Fry",
    food_specials_url: "https://smalltabs.com/details.php?id=663",
  },
  {
    name: "River Shannon",
    address: "Lincoln Park @ 425 W Armitage Ave",
    specials: "$6 Stoli Vodka, $6 Stella Artois Bottles",
    specials_url: "https://smalltabs.com/details.php?id=70",
  },
  {
    name: "Brownstone Tavern",
    address: "North Center @ 3937 N Lincoln Ave",
    specials:
      "$5 Stella Artois, $5 Jameson Whiskey Shots, $7 Absolut Vodka Mules",
    specials_url: "https://smalltabs.com/details.php?id=9",
  },
  {
    name: "Cactus Bar & Grill",
    address: "Loop @ 404 S Wells St",
    specials: "$25 Lagunitas Buckets, $6 Patron Silver Tequila Shots",
    specials_url: "https://smalltabs.com/details.php?id=133",
  },
  {
    name: "Ph.D Pub",
    address: "University Village @ 1257 S Halsted St",
    specials:
      "$3.50 Goose Island Oktoberfest 12oz Mason Jar Drafts, $3 Pabst Blue Ribbon & Rolling Rock Tallboys, $3 Bud Light Drafts, $9 Bud Light Pitchers, $3.50 Tullamore Dew Shots, $4 Carlsberg Drafts, $4 Fireball Shots, $4 Apple Moonshine Shots, $6 Vodka Lemonades, $8 Ph.D Vodka Mules",
    specials_url: "https://smalltabs.com/details.php?id=570",
  },
  {
    name: "Delilah's",
    address: "Lincoln Park @ 2771 N Lincoln Ave",
    specials: "$3 Labatt Blue, $3 Maker's Mark Bourbon",
    specials_url: "https://smalltabs.com/details.php?id=26",
  },
  {
    name: "Troquet River North",
    address: "River North @ 111 W Huron St",
    specials:
      "$4 Select Beers (4-7pm), $5 House Mixed Drinks (4-7pm), $6 House Red & White Wine Glasses (4-7pm)",
    specials_url: "https://smalltabs.com/details.php?id=649",
    food_specials:
      "Mimosa Brunch (10am-3pm), $4 Truffle Frites (4-7pm), $5 Salmon Rilette (4-7pm), $6 Croque Monsieur & Croque Végétarien (4-7pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=649",
  },
  {
    name: "Bobby Love's",
    address: "Lakeview @ 3729 N Halsted St",
    specials: "$6 Absolute Vodka Cocktails",
    specials_url: "https://smalltabs.com/details.php?id=337",
  },
  {
    name: "Estelle's Cafe & Lounge",
    address: "Wicker Park @ 2013 W North Ave",
    specials:
      "$4 Three Floyd's Drafts (5-8pm), $3 Rebel Yell Whiskey Shots (5-8pm)",
    specials_url: "https://smalltabs.com/details.php?id=216",
  },
  {
    name: "O'Leary's Public House",
    address: "River North @ 541 N Wells St",
    specials: "$4.50 Corona Light Bottles",
    specials_url: "https://smalltabs.com/details.php?id=361",
  },
  {
    name: "ZED451",
    address: "River North @ 739 N Clark St",
    specials: "$4.51 Grey Goose Vodka Cocktails (4:30-7pm)",
    specials_url: "https://smalltabs.com/details.php?id=639",
  },
  {
    name: "O'Donovan's Pub",
    address: "North Center @ 2100 W Irving Park Rd",
    specials:
      "$15 Giant 48oz Cocktails, $5 Margaritas, $3 Tecate Cans, $13 Tecate Buckets, $1 off Tequila Shots",
    specials_url: "https://smalltabs.com/details.php?id=157",
    food_specials: "$2 Tacos",
    food_specials_url: "https://smalltabs.com/details.php?id=157",
  },
  {
    name: "Altiro Latin Fusion",
    address: "Roscoe Village @ 2116 W Roscoe St",
    specials:
      "$1.99 Champagne (2-5pm), $2.49 Imported Mexican Beers (2-5pm), $4.99 Signature Craft Margaritas (2-5pm)",
    specials_url: "https://smalltabs.com/details.php?id=632",
    food_specials: "$1.99 Gourmet Tacos (2-5pm), $1.99 Ala Papa Bravo (2-5pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=632",
  },
  {
    name: "Crossroads at House of Blues",
    address: "River North @ 329 N Dearborn St",
    specials:
      "Half Price Select Wine Bottles (3-6pm), $8 Pabst Blue Ribbon Can & Jameson Whiskey Shot Combo (3-6pm), $2 off Select Drafts (3-6pm)",
    specials_url: "https://smalltabs.com/details.php?id=619",
    food_specials: "Half Price Appetizers (3-6pm), $9.95 Fish & Chips (3-6pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=619",
  },
  {
    name: "Bourbon on Division",
    address: "Wicker Park @ 2050 W Division St",
    specials:
      "$5 Deep Eddy Rum Lemon Drops, $20 Domestic Buckets, $5 Tito's Vodka or Tullamore Dew Whiskey Mixed Drinks (9-11pm)",
    specials_url: "https://smalltabs.com/details.php?id=710",
  },
  {
    name: "Francois Frankie",
    address: "Loop @ 222 W Randolph St",
    specials:
      "$5 Drafts (3-6pm), $10 Red & White Wine Glasses (3-6pm), $10 Cocktail of the Week (3-6pm)",
    specials_url: "https://smalltabs.com/details.php?id=712",
  },
  {
    name: "Rockwood Place",
    address: "Wrigleyville @ 3466 N Clark St",
    specials: "$3 Bud Light Drafts, $5 Flavored Bombs, $6 Margaritas",
    specials_url: "https://smalltabs.com/details.php?id=350",
    food_specials: "Half Price Pizzas",
    food_specials_url: "https://smalltabs.com/details.php?id=350",
  },
  {
    name: "Monsignor Murphy's",
    address: "Lakeview @ 3019 N Broadway St",
    specials: "$3 Pabst Blue Ribbon Cans, $3 Miller Lite Cans",
    specials_url: "https://smalltabs.com/details.php?id=246",
  },
  {
    name: "J.P. Burke's Patio & Tap",
    address: "Lakeview @ 2913 N Lincoln Ave",
    specials:
      "$5 Guinness & Carlsberg Drafts, $5 Jack Daniels Whiskey Drinks, $5 Captain Morgan Rum Drinks",
    specials_url: "https://smalltabs.com/details.php?id=532",
  },
  {
    name: "Alice's Lounge",
    address: "Avondale @ 3556 W Belmont Ave",
  },
  {
    name: "Small Bar Logan Square",
    address: "Logan Square @ 2956 N Albany Ave",
    specials:
      "$3 Pabst Blue Ribbon Bottles, $3 Miller Lite & Miller High Life Cans",
    specials_url: "https://smalltabs.com/details.php?id=80",
  },
  {
    name: "Distilled Chicago",
    address: "Lincoln Park @ 1480 W Webster Ave",
    food_specials: "$10 Country Fried Chicken Sandwich",
    food_specials_url: "https://smalltabs.com/details.php?id=656",
  },
  {
    name: "WestEnd",
    address: "West Loop @ 1326 W Madison St",
    specials:
      "Half Price Drafts (excluding Guinness) (5-7pm), Half Price Wine Glasses (5-7pm), Half Price Well Drinks (5-7pm)",
    specials_url: "https://smalltabs.com/details.php?id=11",
    food_specials: "Half Price Appetizers (excluding Nachos) (5-7pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=11",
  },
  {
    name: "Legno Italian Gastropub",
    address: "Portage Park @ 4250 N Central Ave",
    specials:
      "$4 Select Vandermill Ciders, $2 Domestic Bottles (3-6pm), $3 Malort Shots (3-6pm), $5 Tito's Vodka Mixed Drinks (3-6pm), $6 White or Red Sangria Glasses (3-6pm)",
    specials_url: "https://smalltabs.com/details.php?id=590",
    food_specials:
      "Complimentary House Made Chips (3-6pm), $4 BBQ Pork Sliders (2) (3-6pm), $4 Jalapeno Poppers (2) (3-6pm), $5 Buffalo Wings (6) (3-6pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=590",
  },
  {
    name: "Pasta Bowl Lincoln Square",
    address: "Lincoln Square @ 4343 N Lincoln Ave",
    specials: "$5 Moscow Mules",
    specials_url: "https://smalltabs.com/details.php?id=699",
  },
  {
    name: "Duffy's Tavern",
    address: "Lincoln Park @ 422 W Diversey Ave",
    specials:
      "$1 Miller Lite & Coors Light Bottles (5-7pm), $2 Well Drinks (5-7pm), $3 Fireball Whiskey Shots (5-7pm), $4 Wine Glasses (5-7pm)",
    specials_url: "https://smalltabs.com/details.php?id=23",
  },
  {
    name: "Leader Bar",
    address: "Irving Park @ 3000 W Irving Park Rd",
    specials:
      "$15 Budweiser, Bud Light, Miller Lite, & Miller High Life Buckets, $18 Amstel Light, Heineken, Heineken Light, Tecate, & Newcastle Brown Ale Buckets",
    specials_url: "https://smalltabs.com/details.php?id=381",
    food_specials: "Half Price Appetizers from 4-7pm",
    food_specials_url: "https://smalltabs.com/details.php?id=381",
  },
  {
    name: "Kroll's South Loop",
    address: "South Loop @ 1736 S Michigan Ave",
    specials:
      "$5 Bushmills Whiskey Cocktails (4-6pm), $4 Absolut Vodka Cocktails (4-6pm), $3 Deschutes Cans (4-6pm), $5 Keke Key Lime Martinis (4-6pm), $6 House Margaritas (4-6pm)",
    specials_url: "https://smalltabs.com/details.php?id=146",
    food_specials: "Half Price Appetizers (5-7pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=146",
  },
  {
    name: "Innjoy (Logan Square)",
    address: "Logan Square @ 2200 N Milwaukee Ave",
    specials:
      "$7 Martinis, $5 Pabst Blue Ribbon Tallboy & Hipster Whiskey Shot Combo",
    specials_url: "https://smalltabs.com/details.php?id=688",
    food_specials: "$7 Bruschette",
    food_specials_url: "https://smalltabs.com/details.php?id=688",
  },
  {
    name: "Holiday Club",
    address: "Uptown @ 4000 N Sheridan Rd",
    specials:
      "$5 Svedka Vodka Drinks, $5 Grape, Cherry, & Blueberry Bombs, $4.50 Pabst Blue Ribbon 24oz Tallboys",
    specials_url: "https://smalltabs.com/details.php?id=179",
    food_specials: "$5 Chicken Sandwich",
    food_specials_url: "https://smalltabs.com/details.php?id=179",
  },
  {
    name: "Casati's Pizza Vino",
    address: "Lincoln Park @ 444 W Fullerton Pkwy",
    food_specials: "$10 & Under Bar Menu",
    food_specials_url: "https://smalltabs.com/details.php?id=703",
  },
  {
    name: "Mullen's Bar & Grill",
    address: "Rogers Park @ 7301 N Western Ave",
    specials: "$5 Flavored Vodka Drinks, $5 Bomb Shots (excludes Car Bombs)",
    specials_url: "https://smalltabs.com/details.php?id=460",
    food_specials: "$9 Meatloaf",
    food_specials_url: "https://smalltabs.com/details.php?id=460",
  },
  {
    name: "Kirkwood Bar & Grill",
    address: "Lakeview @ 2934 N Sheffield Ave",
    specials: "$4 All Ciders, $5 Jello Shots",
    specials_url: "https://smalltabs.com/details.php?id=13",
  },
  {
    name: "G&O",
    address: "West Loop @ 459 N Ogden Ave",
    specials:
      "$3 House Whiskey or Bourbon Shot (with draft beer purchase), $3 Tito's Vodka (4-6pm), $3 Ford's Gin (4-6pm), $3 Drink of the Week (4-6pm)",
    specials_url: "https://smalltabs.com/details.php?id=641",
  },
  {
    name: "G&L Fire Escape",
    address: "North Center @ 2157 W Grace St",
    specials: "$3 Powers Whiskey Shots, $4 Wells",
    specials_url: "https://smalltabs.com/details.php?id=533",
  },
  {
    name: "Pizzeria Serio",
    address: "Lakeview @ 1708 N Belmont Ave",
    specials: "$2 Pabst Blue Ribbon Tallboys, $8 Beer Flights",
    specials_url: "https://smalltabs.com/details.php?id=385",
  },
  {
    name: "The Green Lady",
    address: "Lakeview @ 3328 N Lincoln Ave",
    specials: "$3 Pabst Blue Ribbon Cans",
    specials_url: "https://smalltabs.com/details.php?id=213",
  },
  {
    name: "Prohibition Pub & Grill",
    address: "Lincoln Park @ 2138 N Halsted Ave",
    specials: "$4 Well Drinks",
    specials_url: "https://smalltabs.com/details.php?id=564",
    food_specials: "$5 Fried Chicken Sandwich",
    food_specials_url: "https://smalltabs.com/details.php?id=564",
  },
  {
    name: "Furious Spoon",
    address: "Wicker Park @ 1571 N Milwaukee Ave",
  },
  {
    name: "Bar Louie Dearborn Station",
    address: "Printers Row @ 47 W Polk St",
    food_specials:
      "Half Price Select Appetizers (4-7pm), Half Price Flatbreads (4-7pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=567",
  },
  {
    name: "Wild Goose Bar & Grill",
    address: "North Center @ 4265 N Lincoln Ave",
    specials:
      "$5 Guinness Imperial Drafts, $5 Metropolitan Flywheel Drafts, $5 Select Martinis",
    specials_url: "https://smalltabs.com/details.php?id=37",
    food_specials: "$8 All-You-Can-Eat Fish Fry",
    food_specials_url: "https://smalltabs.com/details.php?id=37",
  },
  {
    name: "City Pool Hall",
    address: "West Loop @ 640 W Hubbard St",
    specials: "$4 Modelo & Corona",
    specials_url: "https://smalltabs.com/details.php?id=561",
  },
  {
    name: "GRK Bar",
    address: "Loop @ 400 S Wells St",
    specials: "$5 Shots, $1 off Select Drafts",
    specials_url: "https://smalltabs.com/details.php?id=621",
  },
  {
    name: "Lizard's Liquid Lounge",
    address: "Irving Park @ 3058 W Irving Park Rd",
    specials:
      "$4 Stella Artois Drafts, $4 Great Lakes Burning River Drafts, $5 Microbrews",
    specials_url: "https://smalltabs.com/details.php?id=98",
  },
  {
    name: "Mahoney's Pub & Grille",
    address: "Near North Side @ 551 N Odgen Ave",
    specials: "$5 Jameson Whiskey",
    specials_url: "https://smalltabs.com/details.php?id=65",
  },
  {
    name: "Deleece Restaurant",
    address: "Lakeview @ 3747 N Southport Ave",
    food_specials: "Brunch served from 9am-2:30pm",
    food_specials_url: "https://smalltabs.com/details.php?id=295",
  },
  {
    name: "Lizzie McNeill's Irish Pub",
    address: "Streeterville @ 400 N McClurg St",
    specials:
      "$5 Sam Adams Oktoberfest, $6 Seagrams 7 Whiskey Drinks, $5 Crown Apple Shots",
    specials_url: "https://smalltabs.com/details.php?id=477",
  },
  {
    name: "Kasey's Tavern",
    address: "Printers Row @ 701 S Dearborn St",
    specials:
      "$4 New Belgium Voodoo Ranger IPA Drafts, $4 Carlsburg Tallboys, $3 Hamm's Tallboys, $3 Coors Banquet Bottles",
    specials_url: "https://smalltabs.com/details.php?id=125",
  },
  {
    name: "Davenport's Piano Bar",
    address: "Wicker Park @ 1383 N Milwaukee Ave",
  },
  {
    name: "Flagship Tavern & Grill",
    address: "Lakeview @ 1622 W Belmont Ave",
    specials: "$15 Domestic Buckets",
    specials_url: "https://smalltabs.com/details.php?id=552",
  },
  {
    name: "The Lodge",
    address: "Near North Side @ 21 W Division Street",
    specials: "$4 Fat Tire Drafts, $6 Bombs",
    specials_url: "https://smalltabs.com/details.php?id=68",
  },
  {
    name: "Fado Irish Pub",
    address: "River North @ 100 W Grand Ave",
    specials:
      "$7 Old Fashioneds (5-9pm), $7 Manhattans (5-9pm), $7 Whiskey Sours (5-9pm), $5 Carlsberg Beer (5-9pm), $7 Red & White Wine Glasses (5-9pm)",
    specials_url: "https://smalltabs.com/details.php?id=583",
    food_specials: "$6 Select Snacks (5-9pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=583",
  },
  {
    name: "Mad River Bar & Grille",
    address: "Lakeview @ 2909 N Sheffield Ave",
    food_specials: "Half Price Appetizers (5-8pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=317",
  },
  {
    name: "Aberdeen Tap",
    address: "West Loop @ 440 N Aberdeen St",
    specials: "$5 Jameson Whiskey Shots, $3 Pabst Blue Ribbon Drafts",
    specials_url: "https://smalltabs.com/details.php?id=457",
  },
  {
    name: "Scot's Bar",
    address: "North Center @ 1829 W Montrose Ave",
    specials: "$3.50 Well Drinks, $3.50 Miller Lite Drafts",
    specials_url: "https://smalltabs.com/details.php?id=263",
  },
  {
    name: "Sports Corner Bar & Grill",
    address: "Wrigleyville @ 956 W Addison St",
    specials: "$5 You-Call-Its",
    specials_url: "https://smalltabs.com/details.php?id=328",
    food_specials: "$2 Sliders",
    food_specials_url: "https://smalltabs.com/details.php?id=328",
  },
  {
    name: "Fireside Restaurant & Lounge",
    address: "Edgewater @ 5739 N Ravenswood Ave",
    specials: "$2.25 Pabst Blue Ribbon Tallboys",
    specials_url: "https://smalltabs.com/details.php?id=441",
    food_specials: "Complimentary Happy Hour Buffet (4-6pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=441",
  },
  {
    name: "Hangge-Uppe",
    address: "Near North Side @ 16 W Division St",
    specials: "$5 Bacardi Flavored Rum",
    specials_url: "https://smalltabs.com/details.php?id=84",
  },
  {
    name: "Raw Bar & Grill",
    address: "Wrigleyville @ 3720 N Clark St",
    specials:
      "$2.50 Domestic Beers (4-7pm), $3.50 Craft Drafts (4-7pm), $3 Well Mixers (4-7pm)",
    specials_url: "https://smalltabs.com/details.php?id=205",
    food_specials: "Half Price Appetizers",
    food_specials_url: "https://smalltabs.com/details.php?id=205",
  },
  {
    name: "Bridget McNeill's Bar & Kitchen",
    address: "Lakeview @ 420 W Belmont Ave",
    specials: "$4.20 Draft Beers (5-7pm), $6 Wine Glasses (5-7pm)",
    specials_url: "https://smalltabs.com/details.php?id=347",
    food_specials: "$12.99 Large Pizzas (with drink purchase)",
    food_specials_url: "https://smalltabs.com/details.php?id=347",
  },
  {
    name: "Northwoods Lounge",
    address: "Norwood Park @ 5342 N Cumberland Ave",
    specials: "$3 Fireball Shots, $1 House Shots",
    specials_url: "https://smalltabs.com/details.php?id=551",
  },
  {
    name: "Ranalli's",
    address: "Lincoln Park @ 1925 N Lincoln Ave",
    specials:
      "$7 Mules, $40 Large Specialty Cocktails (Mega Mule, Red Menace, & Tennessee Top Hat)",
    specials_url: "https://smalltabs.com/details.php?id=559",
  },
  {
    name: "New Line Tavern",
    address: "West Loop @ 201 N Clinton St",
    specials: "$5 Goose Island Beers, $8 Signature Cocktails",
    specials_url: "https://smalltabs.com/details.php?id=301",
  },
  {
    name: "Sherry's Bar",
    address: "West Rogers Park @ 5652 N Western Ave",
    specials:
      "$5 Long Island Iced Teas, $9 Old Style Buckets, $13 Miller Lite Buckets",
    specials_url: "https://smalltabs.com/details.php?id=645",
  },
  {
    name: "Porter Kitchen & Deck",
    address: "West Loop @ 150 N Riverside Ave",
    specials:
      "$7 Moscow Mules (3:30-5:30pm), $8 Classic Margaritas (3:30-5:30pm), $9 Old Fashioneds (3:30-5:30pm), $9 Select Wine Glasses (3:30-5:30pm)",
    specials_url: "https://smalltabs.com/details.php?id=682",
  },
  {
    name: "State Restaurant",
    address: "Lincoln Park @ 935 W Webster Ave",
    food_specials:
      "$6.99 Food Menu (with drink purchase, some exclusions apply)",
    food_specials_url: "https://smalltabs.com/details.php?id=229",
  },
  {
    name: "Pasta Bowl Wicker Park",
    address: "Wicker Park @ 1852 W North Ave",
    specials: "$5 Moscow Mules",
    specials_url: "https://smalltabs.com/details.php?id=638",
  },
  {
    name: "Seven Lions",
    address: "Loop @ 130 S Michigan Ave",
    specials:
      "$9 Specialty Cocktails, $24 Select Wine Bottles (3-6pm), Half Price Featured Drafts (3-6pm)",
    specials_url: "https://smalltabs.com/details.php?id=683",
    food_specials:
      "$8 Hummus (3-6pm), $8 Pulled Pork Nachos (3-6pm), $8 Crispy Chicken Sliders (3-6pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=683",
  },
  {
    name: "The Call",
    address: "Andersonville @ 1547 W Bryn Mawr Ave",
    specials: "$2.50 Well Cocktails (7-9pm), $3 Domestic Beers (7-9pm)",
    specials_url: "https://smalltabs.com/details.php?id=343",
  },
  {
    name: "Templestowe Pub",
    address: "Irving Park @ 3135 W Montrose Ave",
    specials: "$3 Fireball Whiskey Shots, $3 Import Bottles",
    specials_url: "https://smalltabs.com/details.php?id=340",
  },
  {
    name: "Will's Northwoods Inn",
    address: "Lakeview @ 3030 N Racine Ave",
    specials:
      "$4 Sierra Nevada Drafts, $3 Schiltz Tallboys, $2.50 Pabst Blue Ribbon, $3 Miller High Life Bottles",
    specials_url: "https://smalltabs.com/details.php?id=77",
    food_specials: "$12.95 All-You-Can-Eat Fish Fry",
    food_specials_url: "https://smalltabs.com/details.php?id=77",
  },
  {
    name: "The Temple Bar",
    address: "Lakeview @ 3001 N Ashland Ave",
    specials: "$4 Lagunitas Drafts",
    specials_url: "https://smalltabs.com/details.php?id=305",
    food_specials: "$8.25 Fish & Chips",
    food_specials_url: "https://smalltabs.com/details.php?id=305",
  },
  {
    name: "Nola Gastropub",
    address: "Lakeview @ 3481 N Clark St",
    specials:
      "$3.50 Founders All Day IPA, $3.50 Founders Rubaeus, $4 Beer of the Month",
    specials_url: "https://smalltabs.com/details.php?id=642",
  },
  {
    name: "Pasta Bowl Lincoln Park",
    address: "Lincoln Park @ 2434 N Clark St",
    specials: "$5 Moscow Mules",
    specials_url: "https://smalltabs.com/details.php?id=637",
  },
  {
    name: "Celtic Crown Public House",
    address: "North Center @ 4301 N Western Ave",
    specials:
      "$4 Founders All Day IPA, $5 Stoli Vodka Mules, $2 Miller Lite Drafts (3-7pm), $2 Well Cocktails",
    specials_url: "https://smalltabs.com/details.php?id=76",
    food_specials: "$7 Turkey Pesto Sandwich, $7 Green Ranch BLT Sandwich",
    food_specials_url: "https://smalltabs.com/details.php?id=76",
  },
  {
    name: "Mr. Brown's Lounge Loop",
    address: "Loop @ 81 E Wacker Dr",
    specials:
      "Half Price Island Rum Punch (3-6pm), Half Off Red Stripe Bottles (3-6pm)",
    specials_url: "https://smalltabs.com/details.php?id=615",
  },
  {
    name: "Farraguts",
    address: "Andersonville @ 5240 N Clark St",
    specials: "$3 Miller Lite Drafts, $3 Pabst Blue Ribbon Drafts",
    specials_url: "https://smalltabs.com/details.php?id=445",
  },
  {
    name: "DS Tequila Company",
    address: "Lakeview @ 3352 N Halsted St",
    specials: "$12 40oz Fiesta Bowls",
    specials_url: "https://smalltabs.com/details.php?id=573",
  },
  {
    name: "Big Chicks",
    address: "Uptown @ 5024 N Sheridan Rd",
    specials: "$2 off Pitchers (4-9pm)",
    specials_url: "https://smalltabs.com/details.php?id=261",
    food_specials: "$7 Third Pound Cheeseburgers with Fries",
    food_specials_url: "https://smalltabs.com/details.php?id=261",
  },
  {
    name: "Original Mother's",
    address: "Near North Side @ 26 W Division St",
    specials:
      "$6 Pabst Blue Ribbon Tallboys, $5 Bacardi Rum, $5 Wolf Berry & Black Razz Bombs, $5 Sailor Jerry Rum",
    specials_url: "https://smalltabs.com/details.php?id=69",
  },
  {
    name: "Jefferson Tap & Grille",
    address: "Near West Side @ 325 N Jefferson St",
    specials:
      "$6 Sam Adams Boston Lager & Seasonal Jumbo Mugs, $5 Wine Glasses",
    specials_url: "https://smalltabs.com/details.php?id=302",
  },
  {
    name: "Racine Plumbing Bar & Grill",
    address: "Lincoln Park @ 2642 N Lincoln Ave",
    specials:
      "$35 Drink Package including Draft Beers, Well Drinks, Select Call Drinks, Domestic Bottles and Cans, & Half Price Food (9pm-12am)",
    specials_url: "https://smalltabs.com/details.php?id=357",
  },
  {
    name: "Lion Head Pub",
    address: "Lincoln Park @ 2251 N Lincoln Ave",
    food_specials: "$1 Fish Tacos, 25¢ Wings (4-7pm, with beverage purchase)",
    food_specials_url: "https://smalltabs.com/details.php?id=25",
  },
  {
    name: "Lowcountry South Loop",
    address: "South Loop @ 1132 S Wabash Ave",
    specials: "$24 Sangria Carafes (5-7pm), Half Price Beer & Wine (5-7pm)",
    specials_url: "https://smalltabs.com/details.php?id=708",
    food_specials: "$10 Mussels & Fries (5-7pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=708",
  },
  {
    name: "Riverview Tavern",
    address: "Roscoe Village @ 1958 W Roscoe St",
    specials:
      "$1 off Ciders, $1 off Wine Glasses, $5 Brewery-of-the-Month Drafts",
    specials_url: "https://smalltabs.com/details.php?id=220",
  },
  {
    name: "Edgewater Mexican Cafe",
    address: "Edgewater @ 1055 W Bryn Mawr Ave",
    specials: "$6 Wine Glasses, $6 Palomas, $6 House Margaritas (4-7pm)",
    specials_url: "https://smalltabs.com/details.php?id=711",
  },
  {
    name: "Stretch Bar & Grill",
    address: "Wrigleyville @ 3485 N Clark St",
    specials:
      "$30 Domestic Tallboys, Domestic Drafts, Call Cocktails, Wine, & Select Appetizers Happy Hour Package (7-10pm), $25 Domestic Drafts, Well Cocktails, Wine, & Select Appetizer Happy Hour Package (7-10pm)",
    specials_url: "https://smalltabs.com/details.php?id=81",
  },
  {
    name: "Streeter's Tavern",
    address: "Near North Side @ 50 E Chicago Ave",
    specials: "$5 Jim Beam Bourbon",
    specials_url: "https://smalltabs.com/details.php?id=72",
  },
  {
    name: "Harrigan's Pub",
    address: "Lakeview @ 2816 N Halsted St",
    specials: "$6 Makers Mark Manhattans, $2 Rolling Rock Cans (12-6pm)",
    specials_url: "https://smalltabs.com/details.php?id=648",
  },
  {
    name: "Galvin's Public House",
    address: "Portage Park @ 5901 W Lawrence Ave",
    specials: "$4 Blue Moon Drafts",
    specials_url: "https://smalltabs.com/details.php?id=604",
    food_specials: "$11 All-You-Can-Eat Fish & Chips",
    food_specials_url: "https://smalltabs.com/details.php?id=604",
  },
  {
    name: "The Other Side Bar",
    address: "Lincoln Park @ 2436 N Clark St",
    specials: "$5 Moscow Mules",
    specials_url: "https://smalltabs.com/details.php?id=192",
  },
  {
    name: "Ovie Bar & Grill",
    address: "West Loop @ 120 N Canal St",
    specials: "$6 Craft Beer Drafts (3-6pm), $7 Select Wine Glasses (3-6pm)",
    specials_url: "https://smalltabs.com/details.php?id=501",
  },
  {
    name: "Bar Louie University Village",
    address: "University Village @ 1325 S Halsted St",
    specials:
      "$3.25 Drafts (4-7pm), $4.25 Wine Glasses (4-7pm), $5.25 Signature Martinis (4-7pm)",
    specials_url: "https://smalltabs.com/details.php?id=654",
    food_specials:
      "Half Price Select Appetizers (4-7pm), Half Price Flatbreads (4-7pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=654",
  },
  {
    name: "The Hampton Social",
    address: "River North @ 353 W Hubbard St",
    specials: "Half Price Specialty Cocktails (4-6pm)",
    specials_url: "https://smalltabs.com/details.php?id=636",
    food_specials: "Half Price Pizzas (4-6pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=636",
  },
  {
    name: "Simone's Bar",
    address: "Pilsen @ 960 W 18th St",
    food_specials: "$8 Half Pound Burger & Pabst Blue Ribbon Tallboy Combo",
    food_specials_url: "https://smalltabs.com/details.php?id=107",
  },
  {
    name: "Lokal Lincoln Park",
    address: "Lincoln Park @ 2500 N Ashland Ave",
    food_specials: "$10 Mussels & Truffle Fries",
    food_specials_url: "https://smalltabs.com/details.php?id=614",
  },
  {
    name: "20 East",
    address: "Near North Side @ 20 E Delaware St",
    specials:
      "$3 Domestic Beers (3-6pm), $4 Absolut Vodka Mixed Drinks (3-6pm), $5 Select Wine Glasses (3-6pm)",
    specials_url: "https://smalltabs.com/details.php?id=661",
    food_specials: "$7 Mini Burgers, $7 Hummus, $7 Truffle Fries, $7 Brussels",
    food_specials_url: "https://smalltabs.com/details.php?id=661",
  },
  {
    name: "The Roost Carolina Kitchen",
    address: "North Center @ 1467 W Irving Park Rd",
    specials: "$5 Boilermakers (9-11pm), 25% off Signature Cocktails (9-11pm)",
    specials_url: "https://smalltabs.com/details.php?id=672",
  },
  {
    name: "John Barleycorn River North",
    address: "River North @ 149 W Kinzie St",
    specials: "$5 Budweiser, Bud Light, Coors Light, & Miller Lite Bottles",
    specials_url: "https://smalltabs.com/details.php?id=491",
  },
  {
    name: "Bulldog Ale House (South Loop)",
    address: "South Loop @ 901 S State St",
    specials: "$5 Jameson Whiskey, $5 Guinness, $6 Irish Car Bombs",
    specials_url: "https://smalltabs.com/details.php?id=686",
    food_specials: "$10.99 All-You-Can-Eat Fish Fry",
    food_specials_url: "https://smalltabs.com/details.php?id=686",
  },
  {
    name: "The Pony Inn",
    address: "Lakeview @ 1638 W Belmont Ave",
    food_specials:
      "Half Price Appetizers from 4-8pm, Half Price Sandwiches from 4-8pm",
    food_specials_url: "https://smalltabs.com/details.php?id=275",
  },
  {
    name: "Paddy Long's",
    address: "Lincoln Park @ 1028 W Diversey Ave",
    specials: "$4 Beer of the Month",
    specials_url: "https://smalltabs.com/details.php?id=119",
    food_specials: "$13.95 Fish Fry",
    food_specials_url: "https://smalltabs.com/details.php?id=119",
  },
  {
    name: "Blue Frog Bar & Grill",
    address: "River North @ 676 N LaSalle Dr",
    specials: "$6 Specialty Cocktails",
    specials_url: "https://smalltabs.com/details.php?id=391",
    food_specials: "Half Price Appetizers (4-8pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=391",
  },
  {
    name: "The Graystone Tavern",
    address: "Lakeview @ 3441 N Sheffield Ave",
    specials: "$5 Jack Daniels Fire Shots",
    specials_url: "https://smalltabs.com/details.php?id=653",
  },
  {
    name: "Commonwealth Tavern",
    address: "Roscoe Village @ 2000 W Roscoe St",
    specials: "$6 Craft Cocktails (4-7pm), $6 Moscow Mules, $6 Summer Sunsets",
    specials_url: "https://smalltabs.com/details.php?id=588",
    food_specials: "Half Price Appetizers (3-7pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=588",
  },
  {
    name: "The Hidden Shamrock",
    address: "Lincoln Park @ 2723 N Halsted St",
    specials:
      "Half Price Craft Cocktails, $3 Rotating Drafts, $3 Whiskey Shots",
    specials_url: "https://smalltabs.com/details.php?id=336",
  },
  {
    name: "Sheffield's",
    address: "Lakeview @ 3258 N Sheffield Ave",
    specials: "$4 Brewery-of-the-Month Drafts",
    specials_url: "https://smalltabs.com/details.php?id=54",
  },
  {
    name: "Glascott's Saloon",
    address: "Lincoln Park @ 2158 N Halsted St",
    specials: "$5 Stella Artois Drafts, $5 Red Bull Bombs",
    specials_url: "https://smalltabs.com/details.php?id=46",
  },
  {
    name: "Goldie's",
    address: "North Center @ 3839 N Lincoln Ave",
    specials: "$1 Pabst Blue Ribbon Drafts",
    specials_url: "https://smalltabs.com/details.php?id=122",
  },
  {
    name: "Big Star",
    address: "Wicker Park @ 1531 N Damen Ave",
    specials: "$3 Old Heaven Hill Whiskey Shots",
    specials_url: "https://smalltabs.com/details.php?id=341",
  },
  {
    name: "Monk's Pub",
    address: "Loop @ 205 W Lake St",
    specials:
      "$4 Budweiser, Bud Light, Coors Light, Miller High Life, Miller Lite, Old Style, & Schiltz Bottles",
    specials_url: "https://smalltabs.com/details.php?id=144",
  },
  {
    name: "The North End",
    address: "Lakeview @ 3733 N Halsted St",
    specials: "$5 Fireball Whiskey Shots",
    specials_url: "https://smalltabs.com/details.php?id=174",
  },
  {
    name: "Leona's Old Irving",
    address: "Irving Park @ 3877 N Elston Ave",
    specials:
      "$5 Cocktails (6-9pm), $5 Frozen Margaritas (6-9pm), $5 Rocks Margaritas (6-9pm), $5 Long Island Iced Teas (6-9pm)",
    specials_url: "https://smalltabs.com/details.php?id=667",
    food_specials: "$3 off Wing Dings",
    food_specials_url: "https://smalltabs.com/details.php?id=667",
  },
  {
    name: "Pint",
    address: "Wicker Park @ 1547 N Milwaukee Ave",
    food_specials: "Half Price Fish & Chips",
    food_specials_url: "https://smalltabs.com/details.php?id=218",
  },
  {
    name: "The Arrogant Frog Bar",
    address: "Lincoln Park @ 1365 W Fullerton Ave",
    specials:
      "$3 Bud Light Drafts, $4 Fireball Whiskey Shots, $4 Craft Beers, $5 Well Cocktails, $5 Malibu Rum Cocktails",
    specials_url: "https://smalltabs.com/details.php?id=240",
  },
  {
    name: "Merkle's Bar & Grill",
    address: "Wrigleyville @ 3516 N Clark St",
    specials:
      "$3 Domestic Cans, $4 Well Cocktails, $4 Bloody Marys, $5 Craft Drafts, $5 Crown Apple Shots",
    specials_url: "https://smalltabs.com/details.php?id=18",
    food_specials: "$2 Tacos, $4 Burger & Fries",
    food_specials_url: "https://smalltabs.com/details.php?id=18",
  },
  {
    name: "Ravenswood Station Bar & Grill",
    address: "Lincoln Square @ 4709 N Damen Ave",
    specials:
      "$7 Call Vodka Mixed Drinks, $6.50 Guinness 20oz Drafts, $5.50 Fat Tire Drafts",
    specials_url: "https://smalltabs.com/details.php?id=100",
    food_specials: "$6.75 Fish & Chips, $7 Grilled Fish Tacos",
    food_specials_url: "https://smalltabs.com/details.php?id=100",
  },
  {
    name: "High Noon Saloon",
    address: "Wicker Park @ 1560 N Milwaukee Ave",
    specials: "$5 Frozen Margaritas, $5 Old Forester Bourbon Shots",
    specials_url: "https://smalltabs.com/details.php?id=601",
  },
  {
    name: "Devour 312",
    address: "Lincoln Park @ 1450 W Webster Ave",
    specials:
      "$5 Drafts (3-6pm), $5 Captain Morgan Rum, Tito's Vodka, Milagro Tequila, Fireball, Jameson, & Jack Daniels Whiskey Shots (3-6pm)",
    specials_url: "https://smalltabs.com/details.php?id=690",
  },
  {
    name: "The Rambler Kitchen & Tap",
    address: "North Center @ 4128 N Lincoln Ave",
    specials:
      "$4 Hard Seltzers, $4 Select Drafts, $5 Skrewball Whiskey, $5 Corazon Tequila, $3 Domestic Beers (4-7pm), $3 Select Whiskeys (4-7pm), $5 House Wine Glasses (4-7pm)",
    specials_url: "https://smalltabs.com/details.php?id=589",
    food_specials: "$7 Ground Beef or Chicken Nacho Platters",
    food_specials_url: "https://smalltabs.com/details.php?id=589",
  },
  {
    name: "Crossroads Bar & Grill",
    address: "West Loop @ 1120 W Madison St",
    specials:
      "$4 Goose Island Green Line, $4 Goose Island 312, $5 Captain Morgan Rum Cocktails",
    specials_url: "https://smalltabs.com/details.php?id=267",
  },
  {
    name: "Vintage Lounge",
    address: "University Village @ 1449 W Taylor St",
    specials: "$5 Martinis",
    specials_url: "https://smalltabs.com/details.php?id=650",
    food_specials: "Half Price Select Appetizers",
    food_specials_url: "https://smalltabs.com/details.php?id=650",
  },
  {
    name: "Kelsey's",
    address: "Lincoln Park @ 2265 N Lincoln Ave",
    specials: "$3.50 Curious Travelers, $3.50 Sam Adams, $5 Dublin Donkeys",
    specials_url: "https://smalltabs.com/details.php?id=154",
  },
  {
    name: "Clark Street Dog",
    address: "Lakeview @ 3040 N Clark St",
    specials:
      "$2 Bud Light Drafts, $3.50 Goose Island Drafts, $3.50 Lagunitas Drafts, $5 Picklebacks, $8 Mules",
    specials_url: "https://smalltabs.com/details.php?id=472",
  },
  {
    name: "Lincoln Tap Room",
    address: "Lakeview @ 3010 N Lincoln Ave",
    specials:
      "$4 Angry Orchard Cider, $5 Call & Premium Shots, $3 Two Brothers Outlaw IPA Cans, $3 Two Brothers Sidekick Citrus Ale Cans, $4.50 Three Olives Vodka Cocktails",
    specials_url: "https://smalltabs.com/details.php?id=334",
  },
  {
    name: "Monty's Tap",
    address: "Near North Side @ 600 W Chicago Ave",
    specials:
      "$4 Select Beers (3:30-5:30pm), $6 Moscow Mules (3:30-5:30pm), $7 Sauvignon Blanc, Pinot Noir, & Rosé Glasses (3:30-5:30pm)",
    specials_url: "https://smalltabs.com/details.php?id=707",
  },
  {
    name: "Deuces & The Diamond Club",
    address: "Wrigleyville @ 3505 N Clark St",
    specials: "$12+ Seasonal Beer Flights",
    specials_url: "https://smalltabs.com/details.php?id=408",
  },
  {
    name: "Edison Park Inn",
    address: "Edison Park @ 6715 N Olmsted Ave",
    specials: "$16 Domestic Bottles, $2 Shot of the Day",
    specials_url: "https://smalltabs.com/details.php?id=190",
  },
  {
    name: "Matisse Tavern & Grill",
    address: "Lincoln Park @ 674 W Diversey Pkwy",
    specials: "$5 Martinis",
    specials_url: "https://smalltabs.com/details.php?id=222",
  },
  {
    name: "Mr. Brown's Lounge West Town",
    address: "Ukrainian Village @ 2301 W Chicago Ave",
    specials:
      "$7 Rum Punch (3-6pm), $4 Jameson Whiskey Shots (3-6pm), $4 Red Stripe Bottles (3-6pm)",
    specials_url: "https://smalltabs.com/details.php?id=363",
  },
  {
    name: "Gallery Cabaret",
    address: "Bucktown @ 2020 N Oakley Ave",
    specials:
      "$6 Hammeson (Hamm's & Jameson Whiskey), $6 Jackhammer (Hamm's & Jack Daniels Whiskey), $3 Fireball Whiskey Shots, $3 Malort Shots",
    specials_url: "https://smalltabs.com/details.php?id=116",
  },
  {
    name: "Hook & Ladder",
    address: "Lincoln Park @ 2270 N Lincoln Ave",
    specials:
      "$2.50 Domestic Bottles, $3 Import/Craft Bottles, $4 All Drafts, $3 Shots, $4 Bombs, $6 Wine Glasses, $6 Mimosas, $4 Well Drinks, $5 Call Drinks",
    specials_url: "https://smalltabs.com/details.php?id=593",
  },
  {
    name: "Hawkeye's Bar & Grill",
    address: "University Village @ 1458 W Taylor St",
    specials: "$10 Domestic Bottles",
    specials_url: "https://smalltabs.com/details.php?id=30",
    food_specials: "$2 Pita Pizzas (after 3pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=30",
  },
  {
    name: "Cortland's Garage",
    address: "Bucktown @ 1645 W Cortland St",
    food_specials: "Buy One, Get One Free Appetizers from 2pm-6pm",
    food_specials_url: "https://smalltabs.com/details.php?id=60",
  },
  {
    name: "The Irish Oak",
    address: "Wrigleyville @ 3511 N Clark St",
    specials: "$6 Budweiser Tallboys & Shot Combo, $25 Fish Bowls",
    specials_url: "https://smalltabs.com/details.php?id=199",
    food_specials: "$10 All-You-Can-Eat Fish & Chips",
    food_specials_url: "https://smalltabs.com/details.php?id=199",
  },
  {
    name: "Headquarters Beercade River North",
    address: "River North @ 213 W Institute St",
  },
  {
    name: "80 Proof",
    address: "Old Town @ 1500 N Wells St",
    specials:
      "$3 Tequila Shots (5-8pm), $4 All Beers (5-8pm), $5 All Call Drinks (5-8pm)",
    specials_url: "https://smalltabs.com/details.php?id=660",
  },
  {
    name: "J & M Tap",
    address: "Ukrainian Village @ 957 N Leavitt St",
    specials:
      "$2 Pabst Blue Ribbon Drafts, $2.25 Point Drafts, $3 Domestic Bottles, $3 Pabst Blue Ribbon & Schiltz Tallboys, $4 Stella Artois Drafts, $4 Import & Craft Bottles, $4 Jameson Whiskey Shots, $4 Jim Beam Bourbon & Rye Shots, $5 Makers Mark Bourbon Drinks, $5 Stoli Vodka Drinks, $5 Crown Royal Whiskey Drinks",
    specials_url: "https://smalltabs.com/details.php?id=540",
  },
  {
    name: "Charlie's",
    address: "Lakeview @ 3726 N Broadway St",
    specials: "$10 Long Island Iced Teas, $3 Apple Pie Shots",
    specials_url: "https://smalltabs.com/details.php?id=264",
  },
  {
    name: "The Abbey Pub",
    address: "Irving Park @ 3420 W Grace St",
    specials: "$4 Smithwicks, $4 Harp, $5 Jameson Black, $5 2 Gingers Whiskey",
    specials_url: "https://smalltabs.com/details.php?id=31",
    food_specials: "$9.95 Fish & Chips, Half Price Appetizers until 6pm",
    food_specials_url: "https://smalltabs.com/details.php?id=31",
  },
  {
    name: "Crossroads Public House",
    address: "Lincoln Park @ 2630 N Clark St",
    specials:
      "$4 Fireball Whiskey Shots, $5 Featured Cocktails, $5 Three Olvie Vodka Bombs, $10 Long Island Iced Tea Pitchers",
    specials_url: "https://smalltabs.com/details.php?id=208",
  },
  {
    name: "Toon's Bar & Grill",
    address: "Lakeview @ 3857 N Southport Ave",
    specials: "$1 off Stoli Vodka Cocktails, $4.50 Lagunitas Drafts",
    specials_url: "https://smalltabs.com/details.php?id=203",
    food_specials: "$10 House-Smoked Baby Back Ribs, $4.50 Po'boys",
    food_specials_url: "https://smalltabs.com/details.php?id=203",
  },
  {
    name: "Tuman's Tap & Grill",
    address: "Ukrainian Village @ 2159 W Chicago Ave",
    specials: "$3.50 Pabst Blue Ribbon Drafts",
    specials_url: "https://smalltabs.com/details.php?id=662",
  },
  {
    name: "Wheel House",
    address: "Lakeview @ 3553 N Southport Ave",
    specials: "$5 UV Bombs, $4 Craft Can Beers",
    specials_url: "https://smalltabs.com/details.php?id=169",
    food_specials: "$7 Fish & Chips, $10 Crab Cake Melts",
    food_specials_url: "https://smalltabs.com/details.php?id=169",
  },
  {
    name: "Jake Melnick's Corner Tap",
    address: "Near North Side @ 41 E Superior St",
    specials: "$5.50 Krombacher Pils",
    specials_url: "https://smalltabs.com/details.php?id=311",
  },
  {
    name: "Emerald Loop",
    address: "Loop @ 216 N Wabash Ave",
    specials: "$4.75 Beer of the Month",
    specials_url: "https://smalltabs.com/details.php?id=42",
    food_specials: "$14 Lobster Mac & Cheese, $12 Cajun Tilapia",
    food_specials_url: "https://smalltabs.com/details.php?id=42",
  },
  {
    name: "Mason House",
    address: "River North @ 613 N Wells St",
    specials:
      "$5 Beer Cans (5-7pm), $5 Red & White Wine Glasses (5-7pm), $8 Craft Cocktails (5-7pm)",
    specials_url: "https://smalltabs.com/details.php?id=713",
    food_specials: "$1.50 Oysters (5-7pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=713",
  },
  {
    name: "Lokal Wicker Park",
    address: "Wicker Park @ 1904 W North Ave",
    food_specials: "$10 Mussels & Truffle Fries",
    food_specials_url: "https://smalltabs.com/details.php?id=471",
  },
  {
    name: "Allium",
    address: "Near North Side @ 120 E Delaware St",
    specials: "Half Price Select Spirits, Wines, & Draft Beers (4-6pm)",
    specials_url: "https://smalltabs.com/details.php?id=687",
    food_specials: "Half Price Bar Bites (4-6pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=687",
  },
  {
    name: "6 Degrees",
    address: "Bucktown @ 1935 N Damen Ave",
    specials: "$5 Fireball Whiskey",
    specials_url: "https://smalltabs.com/details.php?id=225",
  },
  {
    name: "Derby Bar & Grill",
    address: "Lincoln Park @ 1224 W Webster Ave",
    specials:
      "$20 Fish Bowls, $7 Lagunitas Fatpours, $5 Pabst Blue Ribbon Can & Select Shot Combo",
    specials_url: "https://smalltabs.com/details.php?id=458",
    food_specials: "Half Price Appetizers (4-6pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=458",
  },
  {
    name: "Vaughans Pub Lakeview",
    address: "Lakeview @ 2917 N Sheffield Ave",
    specials:
      "$4.50 Blue Moon Drafts, $6 Margaritas, $6 Bombs, $16 Miller Family Buckets, $3 Domestic Bottles (4:30-6:30pm), $4 Well Drinks (4:30-6:30pm), $4.50 All American Drafts (4:30-6:30pm)",
    specials_url: "https://smalltabs.com/details.php?id=44",
    food_specials: "$2 Meatball Sliders, $2 Brisket Sliders, $5 Nachos",
    food_specials_url: "https://smalltabs.com/details.php?id=44",
  },
  {
    name: "Village Tap Bar & Grill",
    address: "Roscoe Village @ 2055 W Roscoe St",
    specials:
      "$2.50 Pabst Blue Ribbon Cans, $4 Budweiser, Bud Light, Miller Lite, & Miller High Life Bottles",
    specials_url: "https://smalltabs.com/details.php?id=269",
  },
  {
    name: "Sidebar Grille",
    address: "Loop @ 221 N LaSalle St",
    specials:
      "$3 Fernet or Fireball Shots (4pm-Close), $5 Draft Beers (4-6pm), $6 Select Wine Glasses (4-6pm), $7 Svedka Vodka Mules (4-6pm)",
    specials_url: "https://smalltabs.com/details.php?id=10",
    food_specials: "$10 Featured Flatbread (4pm-Close)",
    food_specials_url: "https://smalltabs.com/details.php?id=10",
  },
  {
    name: "Links Taproom",
    address: "Wicker Park @ 1559 N Milwaukee Ave",
    food_specials: "$11 Fish Fry w/ Potato Pancake & Fries",
    food_specials_url: "https://smalltabs.com/details.php?id=568",
  },
  {
    name: "Irish Eyes",
    address: "Lincoln Park @ 2519 N Lincoln Ave",
    specials: "$3.50 Pabst Blue Ribbon Tallboys",
    specials_url: "https://smalltabs.com/details.php?id=339",
  },
  {
    name: "Taqueria & Bar",
    address: "Lincoln Park @ 1450 W Webster Ave",
    specials: "$4 Shots, $2 Grab Bag Beers",
    specials_url: "https://smalltabs.com/details.php?id=565",
  },
  {
    name: "Hash House a Go Go",
    address: "Near North Side @ 1212 N State St",
    food_specials: "$14.95 Fried or Roasted Chicken Dinner",
    food_specials_url: "https://smalltabs.com/details.php?id=600",
  },
  {
    name: "Cork Lounge",
    address: "Lakeview @ 1822 W Addison St",
    specials:
      "$2 Pabst Blue Ribbon Drafts, $4 Mimosas, $4 Apple Pie Shots, $5 Genessee Cream Ale & Jim Beam Shot Combo",
    specials_url: "https://smalltabs.com/details.php?id=326",
  },
  {
    name: "Brando's Speakeasy",
    address: "Loop @ 343 S Dearborn St",
    specials:
      "$3 Bud Light, $3 Old Style, Pabst Blue Ribbon, & Miller High Life Tallboys",
    specials_url: "https://smalltabs.com/details.php?id=276",
  },
  {
    name: "Four Star Lounge",
    address: "Lincoln Park @ 2666 N Halsted St",
    specials:
      "$4 Jack Daniels Whiskey, Jim Beam Bourbon, Bacardi Rum, Jose Cuervo Tequila, Ketel One Vodka, & Beefeater Gin Well Drinks (5-8pm), $4 Revolution Fist City, Revolution Anti-Hero, Goose Island 312, Revolution Eugene Porter, and Blue Moon (5-8pm), $5 House Cabernet & Chardonnay Wine Glasses (5-8pm), $2 Malort Shots (5-8pm), $2 Fireball Whiskey Shots (5-8pm), $3 Jameson Whiskey Shots (5-8pm), $3 Jim Beam Bourbon Shots (5-8pm), $5 Vodka or Gin Martinis (5-8pm)",
    specials_url: "https://smalltabs.com/details.php?id=608",
    food_specials: "$5 Shrimp Cocktail (5-8pm), $5 Hummus Platter (5-8pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=608",
  },
  {
    name: "Roscoe's Tavern",
    address: "Lakeview @ 3356 N Halsted St",
    specials:
      "$5 Jack Daniels Honey Shots, $5 Skyy Vodka Bombs, $15 Absolut Blue Hawaiian Pitchers, $15 Absolut Pink Lemonade Pitchers",
    specials_url: "https://smalltabs.com/details.php?id=173",
  },
  {
    name: "Redmond's Ale House",
    address: "Wrigleyville @ 3358 N Sheffield Ave",
    specials:
      "$3 Tallboys, $4 Fireball Whiskey Shots, $6 Jameson Whiskey Shots",
    specials_url: "https://smalltabs.com/details.php?id=20",
  },
  {
    name: "Moe's Tavern",
    address: "Avondale @ 2937 N Milwaukee Ave",
    specials:
      "$3 Pabst Blue Ribbon Drafts, $3 Malort Shots, $3 Zacharias Harris Bourbon, $3 Well Drinks, $3 Craft Beer of the Month",
    specials_url: "https://smalltabs.com/details.php?id=423",
  },
  {
    name: "Lincoln Station",
    address: "Lincoln Park @ 2432 N Lincoln Ave",
    specials: "$4 Featured Drafts",
    specials_url: "https://smalltabs.com/details.php?id=248",
    food_specials: "$10.95 All-You-Can-Eat Fish Fry",
    food_specials_url: "https://smalltabs.com/details.php?id=248",
  },
  {
    name: "Joe's Bar",
    address: "Near North Side @ 940 W Weed St",
    specials:
      "$2 Fireball Whiskey Shots (8-10pm), $2 Budweiser & Coors Light Bottles (8-10pm), $3 Vodka Mixers (8-10pm)",
    specials_url: "https://smalltabs.com/details.php?id=14",
  },
  {
    name: "Bird's Nest",
    address: "Lincoln Park @ 2500 N Southport Ave",
    specials: "$4 Blue Line Pilsner, $5 Svedka Vodka Bombs, $5 Red Bull Bombs",
    specials_url: "https://smalltabs.com/details.php?id=6",
  },
  {
    name: "The Atlantic Bar & Grill",
    address: "Lincoln Square @ 5062 N Lincoln Ave",
    specials: "$4 Wine Spritzers, $4 Stoli Vodka Drinks",
    specials_url: "https://smalltabs.com/details.php?id=101",
    food_specials: "$4 Crostini Menu",
    food_specials_url: "https://smalltabs.com/details.php?id=101",
  },
  {
    name: "Yak-Zies Wrigleyville",
    address: "Wrigleyville @ 3710 N Clark St",
    specials: "$5 Fat Tire, $5 Fireball Whiskey",
    specials_url: "https://smalltabs.com/details.php?id=149",
    food_specials: "$5 Fish Sandwiches",
    food_specials_url: "https://smalltabs.com/details.php?id=149",
  },
  {
    name: "Havana",
    address: "River North @ 412 N Clark St",
    specials: "$20 House Mojito Pitchers",
    specials_url: "https://smalltabs.com/details.php?id=417",
  },
  {
    name: "Spyners Pub",
    address: "Lincoln Square @ 4623 N Western Ave",
    specials:
      "$3.50 Stella Artois, $3.50 Jose Cuervo Gold Tequila Shots, $3.50 Dooley's Shots",
    specials_url: "https://smalltabs.com/details.php?id=97",
  },
  {
    name: "AliveOne",
    address: "Lincoln Park @ 2683 N Halsted St",
    specials: "$5 Jameson Shots, $3 Pabst Blue Ribbon Bottles",
    specials_url: "https://smalltabs.com/details.php?id=214",
  },
  {
    name: "Harmony Grill",
    address: "Lakeview @ 3159 N Southport Ave",
    specials: "$4 Fireball Whiskey",
    specials_url: "https://smalltabs.com/details.php?id=242",
  },
  {
    name: "Third Rail Tavern",
    address: "West Loop @ 1133 W Madison St",
    specials:
      "$5 Goose Island, Three Floyds, & Bell's Brewery Drafts (5-9pm), $8 Bulleit Bourbon or Rye Manhattans (5-9pm), $8 Bulleit Bourbon or Rye Old Fashioneds (5-9pm)",
    specials_url: "https://smalltabs.com/details.php?id=303",
  },
  {
    name: "Waterhouse Tavern",
    address: "Lakeview @ 3407 N Paulina St",
    specials: "$4 Fireball Whiskey, $15 Bud Light Buckets",
    specials_url: "https://smalltabs.com/details.php?id=212",
  },
  {
    name: "Emerald Isle",
    address: "Edison Park @ 6686 N Northwest Hwy",
    specials:
      "$18 Domestic Buckets, $5 Long Island Iced Teas, $4 Bombs, $3 Fireball Whiskey Shots",
    specials_url: "https://smalltabs.com/details.php?id=288",
    food_specials: "$3 Half Dozen Wings (any style)",
    food_specials_url: "https://smalltabs.com/details.php?id=288",
  },
  {
    name: "Nisei Lounge",
    address: "Wrigleyville @ 3439 N Sheffield Ave",
    specials:
      "$5 Jameson Whiskey Shots, $3 Mickey's Big Mouth Bottles, $4 Old Style Tallboys, $4 Pabst Blue Ribbon Drafts, $3 Malort Shots",
    specials_url: "https://smalltabs.com/details.php?id=307",
  },
  {
    name: "Woodhaven Bar & Kitchen",
    address: "River North @ 712 N Clark St",
    specials: "$7 Pabst Blue Ribbon & Jameson Whiskey Boilermakers (5-8pm)",
    specials_url: "https://smalltabs.com/details.php?id=331",
  },
  {
    name: "Big City Tap",
    address: "Lakeview @ 1010 W Belmont Ave",
    specials: "$6 Jameson Whiskey, $1 Jello Shots, $1 Apple Pucker Shots",
    specials_url: "https://smalltabs.com/details.php?id=306",
    food_specials: "Half Price Bar Snacks (until 9pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=306",
  },
  {
    name: "Renaldi's After Dark",
    address: "Lakeview @ 2831 N Broadway St",
    specials: "$4 Guinness Bottles",
    specials_url: "https://smalltabs.com/details.php?id=504",
  },
  {
    name: "Mac's Wood Grilled",
    address: "Wicker Park @ 1801 W Division St",
    specials: "$4 Paddy Irish Whiskey Shots, $5 Moscow Mules",
    specials_url: "https://smalltabs.com/details.php?id=631",
  },
  {
    name: "Leona's Rogers Park",
    address: "Rogers Park @ 6935 N Sheridan Ave",
    specials:
      "$5 Cocktails (6-9pm), $5 Frozen Margaritas (6-9pm), $5 Rocks Margaritas (6-9pm), $5 Long Island Iced Teas (6-9pm)",
    specials_url: "https://smalltabs.com/details.php?id=668",
    food_specials: "$3 off Wing Dings",
    food_specials_url: "https://smalltabs.com/details.php?id=668",
  },
  {
    name: "Cleo's",
    address: "Ukrainian Village @ 1935 W Chicago Ave",
    specials: "$2 off Bulleit Whiskey, $4 Well Drinks",
    specials_url: "https://smalltabs.com/details.php?id=49",
    food_specials: "$6 Fish & Chips",
    food_specials_url: "https://smalltabs.com/details.php?id=49",
  },
  {
    name: "Benchmark",
    address: "Old Town @ 1510 N Wells St",
    specials:
      "$4 Truly & White Claw Cans (5-8pm), $5 Jack Daniels Whiskey Shots, $5 El Jimador Tequila Shots",
    specials_url: "https://smalltabs.com/details.php?id=508",
    food_specials: "Free Burgers (limited quantities, with drink purchase)",
    food_specials_url: "https://smalltabs.com/details.php?id=508",
  },
  {
    name: "Pippin's Tavern",
    address: "Near North Side @ 806 N Rush St",
    specials:
      "$5.50 Malort, $5 Maestro Dobel Tequila, $4 Wondermint, $5 Revel Stoke Roasted Pecan Whiskey, $6 Don Q Gran Anejo Mules, $6 Bulldog Gin Rickeys",
    specials_url: "https://smalltabs.com/details.php?id=71",
  },
  {
    name: "Bottom Lounge",
    address: "West Loop @ 1375 W Lake St",
    specials: "$3.50 Schiltz Drafts, $4 Budweiser & Bud Light Bottles",
    specials_url: "https://smalltabs.com/details.php?id=436",
  },
  {
    name: "Pitchfork Food & Saloon",
    address: "Irving Park @ 2922 W Irving Park Road",
    specials: "$4 Goose Island Green Line, $6 Moscow Mules",
    specials_url: "https://smalltabs.com/details.php?id=234",
  },
  {
    name: "Durkin's Tavern",
    address: "Lincoln Park @ 810 W Diversey Ave",
    specials: "$4 Fireball Whiskey Shots, $3 Bud Light Drafts",
    specials_url: "https://smalltabs.com/details.php?id=22",
  },
  {
    name: "Bootlegger's",
    address: "Near North Side @ 11 W Division St",
    specials:
      "$3 Southern Comfort, $3 Shellback Rum, $5 Wild Turkey Bourbon, $4 Miller Lite Drafts",
    specials_url: "https://smalltabs.com/details.php?id=66",
  },
  {
    name: "Crown Liquors",
    address: "Logan Square @ 2821 N Milwaukee Ave",
    specials: "$5 Craft Beers, $7 Cocktails",
    specials_url: "https://smalltabs.com/details.php?id=591",
  },
  {
    name: "The Scout",
    address: "South Loop @ 1301 S Wabash Ave",
    specials: "$3 Sam Adams Boston Lager Drafts",
    specials_url: "https://smalltabs.com/details.php?id=451",
  },
  {
    name: "Atmosphere",
    address: "Andersonville @ 5355 N Clark St",
    specials: "$5 Fireball Whiskey Shots",
    specials_url: "https://smalltabs.com/details.php?id=96",
  },
  {
    name: "The Fireplace Inn",
    address: "Old Town @ 1448 N Wells St",
    specials: "$5 Skyy Vodka Bombs",
    specials_url: "https://smalltabs.com/details.php?id=442",
  },
  {
    name: "O'Shaughnessy's Public House",
    address: "Lincoln Square @ 4557 N Ravenswood Ave",
    specials: "$5 Founders All-Day IPA",
    specials_url: "https://smalltabs.com/details.php?id=299",
    food_specials: "$10.95 All-You-Can-Eat Fish & Chips, $12.50 Fish Tacos",
    food_specials_url: "https://smalltabs.com/details.php?id=299",
  },
  {
    name: "King Crab House",
    address: "Lincoln Park @ 312 N Halsted St",
    specials: "Half Price Beer (4-6pm), Half Price Well Drinks (4-6pm)",
    specials_url: "https://smalltabs.com/details.php?id=702",
    food_specials: "Half Price Appetizers (4-6pm), Half Price Entrees (4-6pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=702",
  },
  {
    name: "Jerk Modern Jamaican Grill",
    address: "Noble Square @ 811 W Chicago Ave",
    specials: "$3 Mystery Beer (4-7pm), $7 Select Cocktails (4-7pm)",
    specials_url: "https://smalltabs.com/details.php?id=634",
  },
  {
    name: "Emmit's Irish Pub",
    address: "West Loop @ 495 N Milwaukee Ave",
    specials: "$4 Fireball Whiskey",
    specials_url: "https://smalltabs.com/details.php?id=487",
    food_specials: "$8.95 Fish & Chips",
    food_specials_url: "https://smalltabs.com/details.php?id=487",
  },
  {
    name: "Francesca's Bryn Mawr",
    address: "Edgewater @ 1039 W Bryn Mawr Ave",
    food_specials: "$15.99 Prix Fixe Lunch Menu",
    food_specials_url: "https://smalltabs.com/details.php?id=429",
  },
  {
    name: "Christina's Place",
    address: "Irving Park @ 3759 N Kedzie Ave",
    specials:
      "$2 Pabst Blue Ribbon Cans, $3 Guinness Drafts, $5 Jameson Whiskey Shots, $5 Malort Shots, $5 Fireball Whiskey Shots",
    specials_url: "https://smalltabs.com/details.php?id=235",
  },
  {
    name: "Nick's Beer Garden",
    address: "Wicker Park @ 1516 N Milwaukee Ave",
    specials: "$1 off Draft Beers (4-7pm)",
    specials_url: "https://smalltabs.com/details.php?id=449",
  },
  {
    name: "Leona's Hyde Park",
    address: "Hyde Park @ 1236 E 53rd St",
    specials:
      "$5 Cocktails (6-9pm), $5 Frozen Margaritas (6-9pm), $5 Rocks Margaritas (6-9pm), $5 Long Island Iced Teas (6-9pm)",
    specials_url: "https://smalltabs.com/details.php?id=666",
    food_specials: "$3 off Wing Dings",
    food_specials_url: "https://smalltabs.com/details.php?id=666",
  },
  {
    name: "Berlin",
    address: "Lakeview @ 954 W Belmont Ave",
    specials: "$3 Bacardi Rum Bombs, $5 Tropical Sex Pints, $6 Stoli Vodka",
    specials_url: "https://smalltabs.com/details.php?id=349",
  },
  {
    name: "Gannon's Pub",
    address: "North Center @ 4264 N Lincoln Ave",
    specials: "$4 Harp Drafts",
    specials_url: "https://smalltabs.com/details.php?id=16",
    food_specials: "$7.75 Fish & Chips",
    food_specials_url: "https://smalltabs.com/details.php?id=16",
  },
  {
    name: "Taco Joint River North",
    address: "River North @ 158 W Ontario St",
    specials: "$5 Modelo Especial Can & Olmeca Tequila Blanco Shot Combo",
    specials_url: "https://smalltabs.com/details.php?id=542",
  },
  {
    name: "Hopsmith Tavern",
    address: "Near North Side @ 15 W Division St",
    specials: "$6 Pabst Blue Ribbon & Jack Daniels Whiskey Shot Combo",
    specials_url: "https://smalltabs.com/details.php?id=607",
    food_specials: "Half Price Appetizers (4-6pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=607",
  },
  {
    name: "Leona's Stony Island",
    address: "Calumet Heights @ 9157 S Stony Island Ave",
    specials:
      "$5 Cocktails (6-9pm), $5 Frozen Margaritas (6-9pm), $5 Rocks Margaritas (6-9pm), $5 Long Island Iced Teas (6-9pm)",
    specials_url: "https://smalltabs.com/details.php?id=669",
    food_specials: "$3 off Wing Dings",
    food_specials_url: "https://smalltabs.com/details.php?id=669",
  },
  {
    name: "Decibel Bar",
    address: "Uptown @ 4437 N Broadway Ave",
    specials: "$2 House Shots, $4 Bacardi, $4 Mimosas",
    specials_url: "https://smalltabs.com/details.php?id=553",
  },
  {
    name: "Takito Kitchen",
    address: "Wicker Park @ 2013 W Division St",
    food_specials:
      "Brunch Served from 11am-3pm, $12 Tacos, Soup & Salad Lunch Special (from 11am-3pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=579",
  },
  {
    name: "Four Treys Tavern",
    address: "Roscoe Village @ 3333 N Damen Ave",
    specials:
      "$5.50 Bombs, $3.75 Well Drinks, $2.50 Pabst Blue Ribbon, $3.50 Old Style Tallboys, $4 Jameson Whiskey Shots, $3 Domestic Bottles, $4-4.50 Import Bottles",
    specials_url: "https://smalltabs.com/details.php?id=78",
  },
  {
    name: "Dugan's on Halsted",
    address: "West Loop @ 128 S Halsted St",
    specials:
      "$2.50 Bud Light Drafts, $3.50 Hoegaarden, $2.50 Pabst Blue Ribbon Bottles",
    specials_url: "https://smalltabs.com/details.php?id=424",
  },
  {
    name: "Easy Bar",
    address: "Wicker Park @ 1944 W Division St",
    specials: "$5 Jameson Shots",
    specials_url: "https://smalltabs.com/details.php?id=215",
  },
  {
    name: "Reverie",
    address: "River North @ 414 N Orleans St",
    food_specials: "$10 Mix & Match Lunch",
    food_specials_url: "https://smalltabs.com/details.php?id=584",
  },
  {
    name: "Vaughans Pub Northwest Side",
    address: "Jefferson Park @ 5485 N Northwest Hwy",
    specials:
      "$3.50 Amstel Light Bottles, $4 Blue Moon Drafts, $4 Powers Irish Whiskey Shots",
    specials_url: "https://smalltabs.com/details.php?id=43",
    food_specials:
      "$12 All-You-Can-Eat Fish & Chips, $7.50 Pub Burger & Fries (11am-3pm), $7.50 Chicken Sandwich & Fries (11am-3pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=43",
  },
  {
    name: "Lottie's Pub",
    address: "Bucktown @ 1925 W Cortland St",
    specials: "$4 Corona & Corona Light",
    specials_url: "https://smalltabs.com/details.php?id=79",
    food_specials: "50¢ Jumbo Wings",
    food_specials_url: "https://smalltabs.com/details.php?id=79",
  },
  {
    name: "Fifolet",
    address: "Wicker Park @ 1942 W Division St",
    specials:
      "$4 Lagunitas Sumpin' Easy Drafts (5-9pm), $3 Jameson Whiskey Shots (5-9pm)",
    specials_url: "https://smalltabs.com/details.php?id=695",
    food_specials: "$9 Half Po'Boy & Soup Special (5-9pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=695",
  },
  {
    name: "The Land on Lincoln",
    address: "Lakeview @ 3032 N Lincoln Ave",
    specials:
      "$5 Vodka, $5 Bourbon, $2 Mystery Beer, $4 Drafts (4-7pm), $4 Wine Glasses (4-7pm)",
    specials_url: "https://smalltabs.com/details.php?id=165",
    food_specials:
      "Half Price Nonna's Meatball Sandwich, Half Price Snacks (4-7pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=165",
  },
  {
    name: "Jack & Gingers",
    address: "Bucktown @ 2048 W Armitage Ave",
    specials: "$4 Well Drinks, $2 off Bulleit Whiskey, $5 Jack & Gingers",
    specials_url: "https://smalltabs.com/details.php?id=50",
    food_specials: "$6 Fish & Chips",
    food_specials_url: "https://smalltabs.com/details.php?id=50",
  },
  {
    name: "Boiler Room",
    address: "Logan Square @ 2210 N California Ave",
    food_specials:
      "$10 PB&J Special: Pizza Slice, Pabst Blue Ribbon Tallboy, & Jameson Whiskey Shot Combo",
    food_specials_url: "https://smalltabs.com/details.php?id=333",
  },
  {
    name: "Bridge House Tavern",
    address: "River North @ 321 N Clark St",
    specials: "$20 Tiger Tallboy Buckets",
    specials_url: "https://smalltabs.com/details.php?id=484",
  },
  {
    name: "McCormick & Schmick's",
    address: "Near North Side @ 41 E Chestnut St",
    specials:
      "$6 Canyon Road Chardonnay, Canyon Cabernet Sauvignon, & Bringer White Zinfandel Wine Glasses (4-7pm), $7 Agave Rita, All American, & Talk of the Town Cocktails (4-7pm), $9 Urban Influence, Brandy Sidebar, & Sour Apple Martinis (4-7pm)",
    specials_url: "https://smalltabs.com/details.php?id=605",
  },
  {
    name: "The Kerryman",
    address: "Near North Side @ 661 N Clark St",
    specials:
      "$4 Guiness (4-9pm), $5 Jameson Shots (4-9pm), $6 Tito's Vodka Drinks (4-9pm)",
    specials_url: "https://smalltabs.com/details.php?id=62",
    food_specials: "$10 Fish & Chips (4-9pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=62",
  },
  {
    name: "Black Iron Tavern",
    address: "West Loop @ 401 N Milwaukee Ave",
    specials: "$5 Moscow Mules (3-6pm), $5 You-Call-It Well Drinks (3-6pm)",
    specials_url: "https://smalltabs.com/details.php?id=671",
    food_specials:
      "$18 Fish & Chips and Lagunitas Draft Combo, $2 Chipotle Carnitas, Chicken, or Fried Fish Tacos (3-6pm)",
    food_specials_url: "https://smalltabs.com/details.php?id=671",
  },
  {
    name: "Rockit Burger Bar",
    address: "Wrigleyville @ 3700 N Clark St",
    specials: "$3 Select Beers, $5 Evan Williams Whiskey Shots",
    specials_url: "https://smalltabs.com/details.php?id=233",
  },
  {
    name: "Cary's Lounge",
    address: "West Rogers Park @ 2251 W Devon Ave",
    specials:
      "$2.50 Pabst Blue Ribbon & Schiltz Cans, $3 Old Style Drafts, $3 Budweiser, Bud Light, Coors Light, Miller Lite, & Miller High Life",
    specials_url: "https://smalltabs.com/details.php?id=287",
  },
];

const days = {
  sunday,
  monday,
  tuesday,
  wednesday,
  thursday,
  friday,
  saturday,
};

export default days;
