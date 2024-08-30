export default function determineCurrentHappyHourVerbiage(happyHoursRightNow) {
  if (happyHoursRightNow > 1) {
    const multiplePhrases = [
      `There are ${happyHoursRightNow} happy hours happening right now. Get on it!`,
      `You've got options! ${happyHoursRightNow} happy hours are happening right now.`,
      `Hurry! ${happyHoursRightNow} happy hours are currently going on.`,
      `Don't miss out! ${happyHoursRightNow} happy hours are happening as we speak.`,
      `${happyHoursRightNow} happy hours are on right now! It's a good time to go out.`,
    ];
    return multiplePhrases[Math.floor(Math.random() * multiplePhrases.length)];
  }

  if (happyHoursRightNow === 1) {
    const singlePhrases = [
      `There's only one happy hour happening right now. Don't miss it!`,
      `Just one happy hour going on at the moment. Better hurry!`,
      `One happy hour is happening right now. It's the place to be!`,
    ];
    return singlePhrases[Math.floor(Math.random() * singlePhrases.length)];
  }

  return `There are ${happyHoursRightNow} happy hours happening right now.`;
}
