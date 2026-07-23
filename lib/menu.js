import { formatDaysOfWeek } from "./date";

export function formatAsDollarAmount(number) {
  if (Number.isInteger(number)) {
    return `${number}`;
  } else {
    return `${number.toFixed(2)}`;
  }
}

// Combined "$5 Old Fashioned" / "50% off wings" style label, used for the
// compact special pills on place cards.
export function menuItemToString(item) {
  if (item.price) {
    return `$${formatAsDollarAmount(item.price)} ${item.name}`;
  } else if (item.discountPriceBy) {
    return `${formatAsDollarAmount(item.discountPriceBy)} off ${item.name}`;
  } else if (item.discountRate) {
    return `${item.discountRate}% off ${item.name}`;
  } else {
    return item.name;
  }
}

// Price-only label for the detail page's two-column specials list
// (item name on the left, this on the right). Empty when the item has no
// price/discount data of its own — its full name already carries the
// meaning in that case.
export function getPriceColumnLabel(item) {
  if (item.price) return `$${formatAsDollarAmount(item.price)}`;
  if (item.discountPriceBy) return `${formatAsDollarAmount(item.discountPriceBy)} off`;
  if (item.discountRate) return `${item.discountRate}% off`;
  return "";
}

function happyHourMenu(place) {
  return place.events
    .filter((event) => event.keywords === "happyHour")
    .flatMap((event) => event.menu);
}

export function getDrinkSpecials(place) {
  return happyHourMenu(place).filter((item) => item.category === "Drink");
}

export function getFoodSpecials(place) {
  return happyHourMenu(place).filter((item) => item.category === "Food");
}

// Picks up to `max` specials for a compact card, preferring one drink + one
// food special before filling remaining slots from either category.
export function getTopSpecials(place, max = 2) {
  const drinkItems = getDrinkSpecials(place);
  const foodItems = getFoodSpecials(place);

  const picks = [];
  if (drinkItems[0]) picks.push({ category: "Drink", label: menuItemToString(drinkItems[0]) });
  if (foodItems[0]) picks.push({ category: "Food", label: menuItemToString(foodItems[0]) });

  let d = 1;
  while (picks.length < max && drinkItems[d]) {
    picks.push({ category: "Drink", label: menuItemToString(drinkItems[d]) });
    d++;
  }

  let f = 1;
  while (picks.length < max && foodItems[f]) {
    picks.push({ category: "Food", label: menuItemToString(foodItems[f]) });
    f++;
  }

  return picks.slice(0, max);
}

// A stable key for "these two events offer the exact same deals" — order-
// independent, so events whose menu array just lists items in a different
// order still collapse together.
function menuSignature(menu) {
  return JSON.stringify(
    [...menu]
      .map((item) => [
        item.name,
        item.category,
        item.price ?? null,
        item.discountPriceBy ?? null,
        item.discountRate ?? null,
      ])
      .sort((a, b) => (a[0] + a[1]).localeCompare(b[0] + b[1])),
  );
}

// Groups the place's happy-hour events by identical menu, unioning the days
// each applies to. A place with the same deals every day collapses to one
// group covering all of them; a place with different deals on different
// days gets one group per distinct menu, each labeled with the days it
// actually applies to — instead of a single flat list that repeats the same
// items once per event.
export function getSpecialsByDay(place) {
  const happyHourEvents = place.events.filter((event) => event.keywords === "happyHour");

  const groups = [];
  for (const event of happyHourEvents) {
    if (!event.menu || event.menu.length === 0) continue;

    const days = (event.eventSchedule || []).flatMap((s) => s.byDay || []);
    const signature = menuSignature(event.menu);

    const existing = groups.find((g) => g.signature === signature);
    if (existing) {
      existing.days.push(...days);
    } else {
      groups.push({ signature, days, menu: event.menu });
    }
  }

  return groups.map((group) => ({
    daysLabel: formatDaysOfWeek(group.days),
    drinkSpecials: group.menu.filter((item) => item.category === "Drink"),
    foodSpecials: group.menu.filter((item) => item.category === "Food"),
  }));
}
