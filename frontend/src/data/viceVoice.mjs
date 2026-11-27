// Original Vice Voice editorial copy. Facts, IDs and source records are never modified.
const lines = {
  "Vehicle": [
    "A closer look at the ride.",
    "Life on four wheels, or fewer.",
    "The details behind the machine.",
    "From the showroom to the source file."
  ],
  "Vehicle spotlight": [
    "A machine in the spotlight.",
    "A closer look at the ride.",
    "The picture tells part of the story."
  ],
  "Weapon": [
    "The hardware on record.",
    "A closer look at the arsenal.",
    "The details behind the equipment."
  ],
  "Character": [
    "Everybody has a story.",
    "Get to know the face.",
    "There is more to the story.",
    "A closer look at the cast."
  ],
  "Region": [
    "Beyond the postcard.",
    "A different corner of paradise.",
    "Take the scenic route."
  ],
  "Location": [
    "Every place has a story.",
    "Around the next corner.",
    "A little more of Leonida.",
    "Take the long way around."
  ],
  "Mission": [
    "Every job has a catch.",
    "One thing leads to another.",
    "The story behind the job."
  ],
  "Collectible": [
    "Some things are worth looking for.",
    "The devil is in the details.",
    "Hidden or not, every detail counts."
  ],
  "Challenge": [
    "Nothing comes easy.",
    "Make it count.",
    "A little something to work toward."
  ],
  "Trophy": [
    "Something to show for it.",
    "Every milestone counts.",
    "Make your mark."
  ],
  "Cheat": [
    "Play by your own rules.",
    "A different way to play.",
    "Your game, your call."
  ],
  "Radio station": [
    "The city has a soundtrack.",
    "Good music travels fast.",
    "Straight from the airwaves.",
    "Stay tuned."
  ],
  "Price reference": [
    "Paradise has a price tag.",
    "The price of admission.",
    "Money talks."
  ],
  "Guide": [
    "Know before you go.",
    "Get the lowdown.",
    "A little local knowledge."
  ],
  "Story": [
    "There is more to the story.",
    "A closer look at the headlines.",
    "Behind the story."
  ],
  "Image": [
    "Paradise, caught in the act.",
    "A closer look at the frame.",
    "The picture tells part of the story."
  ],
  "Artwork": [
    "Paradise on paper.",
    "First impressions count.",
    "A closer look at the art."
  ],
  "Video": [
    "The big picture.",
    "The camera never tells the whole story.",
    "Roll the footage."
  ]
};
const fallback = ["Get the lowdown.","A closer look.","The details on record."];
export const dossierVoice = (item) => {
  const options = Object.prototype.hasOwnProperty.call(lines,item.kind) ? lines[item.kind] : fallback;
  const key = String(item.id || item.path || '');
  let hash = 0;
  for (const char of key) hash = (Math.imul(hash,31) + char.codePointAt(0)) >>> 0;
  return options[hash % options.length];
};
