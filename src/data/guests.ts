import { Guest } from '../types';

export const GUESTS: Guest[] = [
  // --- BOOKED ---
  {
    slug: 'elon-musk',
    name: 'Elon Musk',
    title: 'X CEO / Mars Optimization Officer',
    daysPlus: 0,
    column: 'booked',
    combos: [
      {
        id: 1,
        headline: [{ text: 'THE' }, { text: '$1 TRILLION', accent: 'green' }, { text: 'BET' }],
        title: "Why He Says Tesla Is an AI Company | Elon Musk, X CEO",
      },
      {
        id: 2,
        headline: [{ text: 'MARS BY' }, { text: '2040', accent: 'red' }],
        title: "The Most Outrageous Promise He's Made | Elon Musk, X CEO",
      },
      {
        id: 3,
        headline: [{ text: 'HE SLEEPS' }, { text: '4 HOURS', accent: 'red' }],
        title: "The Habit He Refuses to Change | Elon Musk, X CEO",
      },
    ],
  },
  {
    slug: 'sam-altman',
    name: 'Sam Altman',
    title: 'OpenAI CEO',
    daysPlus: 0,
    column: 'booked',
    combos: [
      {
        id: 1,
        headline: [{ text: 'AGI IS' }, { text: 'CLOSER', accent: 'red' }, { text: 'THAN YOU THINK' }],
        title: "Sam Altman's Honest AGI Timeline | OpenAI CEO",
      },
      {
        id: 2,
        headline: [{ text: '$100B' , accent: 'green' }, { text: 'WAS NOT ENOUGH' }],
        title: "Why OpenAI Needed More Money | Sam Altman",
      },
      {
        id: 3,
        headline: [{ text: 'HE ALMOST' }, { text: 'GOT FIRED', accent: 'red' }],
        title: "The Board That Tried to Remove Sam Altman | OpenAI",
      },
    ],
  },
  {
    slug: 'brene',
    name: 'Brené Brown',
    title: 'Researcher / Author',
    daysPlus: 0,
    column: 'booked',
    combos: [
      {
        id: 1,
        headline: [{ text: 'VULNERABILITY' }, { text: 'IS NOT', accent: 'red' }, { text: 'WEAKNESS' }],
        title: "The Research That Changed How We Talk About Feelings | Brené Brown",
      },
      {
        id: 2,
        headline: [{ text: 'SHAME' }, { text: 'RUNS', accent: 'red' }, { text: 'EVERYTHING' }],
        title: "What Shame Is Actually Doing to Your Life | Brené Brown",
      },
      {
        id: 3,
        headline: [{ text: '20 YEARS' }, { text: 'OF DATA', accent: 'green' }],
        title: "Why Brave Leaders Are Also the Most Criticized | Brené Brown",
      },
    ],
  },
  {
    slug: 'naval',
    name: 'Naval Ravikant',
    title: 'Wisdom Tweeter @ AngelList',
    daysPlus: 0,
    column: 'booked',
    combos: [
      {
        id: 1,
        headline: [{ text: 'GET RICH' }, { text: 'WITHOUT', accent: 'red' }, { text: 'LUCK' }],
        title: "The Tweetstorm That Changed Silicon Valley | Naval Ravikant",
      },
      {
        id: 2,
        headline: [{ text: 'SPECIFIC' }, { text: 'KNOWLEDGE', accent: 'green' }],
        title: "Why Generalists Lose in the AI Era | Naval Ravikant",
      },
      {
        id: 3,
        headline: [{ text: 'HAPPINESS' }, { text: 'IS A SKILL', accent: 'red' }],
        title: "What He Learned From a Decade of Investing | Naval Ravikant",
      },
    ],
  },

  // --- RECORDED ---
  {
    slug: 'sadhguru',
    name: 'Sadhguru',
    title: 'Yogi @ Isha Foundation',
    daysPlus: 3,
    column: 'recorded',
    combos: [
      {
        id: 1,
        headline: [{ text: 'INNER' }, { text: 'ENGINEERING', accent: 'green' }],
        title: "What Sadhguru Says About the Mind and AI | Isha Foundation",
      },
      {
        id: 2,
        headline: [{ text: 'HE MEDITATES' }, { text: '6 HOURS', accent: 'red' }, { text: 'A DAY' }],
        title: "The Daily Practice Behind the Global Yogi | Sadhguru",
      },
      {
        id: 3,
        headline: [{ text: 'CONSCIOUSNESS' }, { text: 'OVER', accent: 'red' }, { text: 'CODE' }],
        title: "Why He Thinks AI Is Missing the Point | Sadhguru",
      },
    ],
  },
  {
    slug: 'sara',
    name: 'Sara Blakely',
    title: 'Founder @ Spanx',
    daysPlus: 5,
    column: 'recorded',
    combos: [
      {
        id: 1,
        headline: [{ text: '$5,000' , accent: 'green' }, { text: 'TO A BILLION' }],
        title: "Sara Blakely's Bootstrapped Path to a Billion Dollars | Spanx",
      },
      {
        id: 2,
        headline: [{ text: 'EVERY FAILURE' }, { text: 'WAS THE', accent: 'red' }, { text: 'LESSON' }],
        title: "Why She Celebrated Failure at the Dinner Table | Sara Blakely",
      },
      {
        id: 3,
        headline: [{ text: 'SHE SOLD' }, { text: 'WITHOUT', accent: 'red' }, { text: 'A FACTORY' }],
        title: "How Spanx Launched With Zero Manufacturing | Sara Blakely",
      },
    ],
  },
  {
    slug: 'grant',
    name: 'Adam Grant',
    title: 'Organizational Psychologist',
    daysPlus: 2,
    column: 'recorded',
    combos: [
      {
        id: 1,
        headline: [{ text: 'GIVERS' }, { text: 'WIN', accent: 'green' }, { text: 'LAST' }],
        title: "The Research That Proves Nice Guys Finish First | Adam Grant",
      },
      {
        id: 2,
        headline: [{ text: 'RETHINK' }, { text: 'EVERYTHING', accent: 'red' }],
        title: "Why You're Probably Wrong About How You Work | Adam Grant",
      },
      {
        id: 3,
        headline: [{ text: 'ORIGINALS' }, { text: 'PROCRASTINATE', accent: 'red' }],
        title: "The Surprising Habit of the Most Creative People | Adam Grant",
      },
    ],
  },

  // --- PLANS DRAFTED ---
  {
    slug: 'bartlett',
    name: 'Steven Bartlett',
    title: 'Founder of Diary of a CEO & Investor',
    daysPlus: 8,
    column: 'plans-drafted',
    combos: [
      {
        id: 1,
        imageUrl: 'https://release-pipeline.vercel.app/steven-c1-money.png',
        headline: [],
        title: "How Steven Bartlett Built a Media Empire Before 30 | DOAC",
      },
      {
        id: 2,
        imageUrl: 'https://release-pipeline.vercel.app/steven-c2-cries.png',
        headline: [],
        title: "The Moment He Almost Quit Everything | Steven Bartlett",
      },
      {
        id: 3,
        imageUrl: 'https://release-pipeline.vercel.app/steven-c3-scale.png',
        headline: [],
        title: "Why He Invests in Founders, Not Ideas | Steven Bartlett",
      },
    ],
  },
  {
    slug: 'reshma',
    name: 'Reshma Saujani',
    title: 'Founder @ Girls Who Code',
    daysPlus: 12,
    column: 'plans-drafted',
    combos: [
      {
        id: 1,
        headline: [{ text: 'SHE LOST' }, { text: 'THE ELECTION', accent: 'red' }, { text: 'TWICE' }],
        title: "Why Losing Led to Girls Who Code | Reshma Saujani",
      },
      {
        id: 2,
        headline: [{ text: 'TEACH GIRLS' }, { text: 'TO BE', accent: 'red' }, { text: 'BRAVE' }],
        title: "The Bravery Gap Nobody Talks About | Reshma Saujani",
      },
      {
        id: 3,
        headline: [{ text: '500K GIRLS' }, { text: 'IN CODE', accent: 'green' }],
        title: "Building the Largest Girls-in-Tech Movement | Reshma Saujani",
      },
    ],
  },
  {
    slug: 'whitney',
    name: 'Whitney Wolfe Herd',
    title: 'Founder & CEO @ Bumble',
    daysPlus: 10,
    column: 'plans-drafted',
    combos: [
      {
        id: 1,
        headline: [{ text: 'SHE SUED' }, { text: 'TINDER', accent: 'red' }],
        title: "What Really Happened at Tinder Before Bumble | Whitney Wolfe Herd",
      },
      {
        id: 2,
        headline: [{ text: 'WOMEN' }, { text: 'MAKE', accent: 'green' }, { text: 'THE FIRST MOVE' }],
        title: "The One Rule That Made Bumble a Billion Dollar App | Whitney Wolfe Herd",
      },
      {
        id: 3,
        headline: [{ text: 'IPO AT' }, { text: '31', accent: 'green' }],
        title: "Taking Bumble Public While Pregnant | Whitney Wolfe Herd",
      },
    ],
  },
  {
    slug: 'harari',
    name: 'Yuval Noah Harari',
    title: 'Historian / Author',
    daysPlus: 15,
    column: 'plans-drafted',
    combos: [
      {
        id: 1,
        headline: [{ text: 'AI WILL' }, { text: 'REWRITE', accent: 'red' }, { text: 'HISTORY' }],
        title: "Why Yuval Harari Says AI Is Different From Every Other Tool",
      },
      {
        id: 2,
        headline: [{ text: 'HOMO SAPIENS' }, { text: 'ARE HACKABLE', accent: 'red' }],
        title: "The Warning From the Author of Sapiens | Yuval Noah Harari",
      },
      {
        id: 3,
        headline: [{ text: '21 LESSONS' }, { text: 'FOR A.I.', accent: 'green' }, { text: 'AGE' }],
        title: "What History Teaches Us About Surviving AI | Yuval Noah Harari",
      },
    ],
  },

  // --- IN PROGRESS ---
  {
    slug: 'gaffigan',
    name: 'Jim Gaffigan',
    title: 'Comedian / Hot Pocket Connoisseur',
    daysPlus: 18,
    column: 'in-progress',
    combos: [
      {
        id: 1,
        headline: [{ text: '5 KIDS.' }, { text: 'ONE BEDROOM.', accent: 'red' }],
        title: "How a Comedian Survives Family Tours | Jim Gaffigan",
      },
      {
        id: 2,
        headline: [{ text: 'HOT POCKETS' }, { text: 'BUILT', accent: 'green' }, { text: 'MY CAREER' }],
        title: "The Bit That Bought Him a House | Jim Gaffigan",
      },
      {
        id: 3,
        headline: [{ text: 'WHY HE' }, { text: 'TURNED DOWN', accent: 'red' }, { text: 'NETFLIX' }],
        title: "The Comedian's Case for Owning Your Audience | Jim Gaffigan",
      },
    ],
  },
  {
    slug: 'ferriss',
    name: 'Tim Ferriss',
    title: 'Author / Podcaster',
    daysPlus: 20,
    column: 'in-progress',
    combos: [
      {
        id: 1,
        headline: [{ text: '4 HOURS' }, { text: 'A WEEK', accent: 'green' }],
        title: "The 4-Hour Workweek 15 Years Later | Tim Ferriss",
      },
      {
        id: 2,
        headline: [{ text: 'MICRO-DOSING' }, { text: 'CHANGED', accent: 'red' }, { text: 'HIM' }],
        title: "What Tim Ferriss Says About Psychedelics and Performance",
      },
      {
        id: 3,
        headline: [{ text: '500 EPISODES' }, { text: 'OF SECRETS', accent: 'green' }],
        title: "The #1 Pattern Tim Ferriss Found Across 500 Podcast Guests",
      },
    ],
  },

  // --- READY ---
  {
    slug: 'keanu',
    name: 'Keanu Reeves',
    title: 'Actor / Motorcycle Enthusiast',
    daysPlus: 24,
    column: 'ready',
    combos: [
      {
        id: 1,
        headline: [{ text: 'HE GAVE BACK' }, { text: '$80M', accent: 'green' }],
        title: "The Matrix Salary Decision That Changed Hollywood | Keanu Reeves",
      },
      {
        id: 2,
        headline: [{ text: 'WHY HE LIVES' }, { text: 'ALONE', accent: 'red' }],
        title: "The Most Famous Recluse in Showbiz | Keanu Reeves",
      },
      {
        id: 3,
        headline: [{ text: 'ARCH MOTORCYCLE', accent: 'green' }, { text: 'THE QUIET BET' }],
        title: "Why an Actor Started a Motorcycle Company | Keanu Reeves",
      },
    ],
  },
  {
    slug: 'esther',
    name: 'Esther Perel',
    title: 'Therapist / Author',
    daysPlus: 22,
    column: 'ready',
    combos: [
      {
        id: 1,
        headline: [{ text: 'DESIRE' }, { text: 'NEEDS', accent: 'red' }, { text: 'DISTANCE' }],
        title: "Esther Perel on Why Familiarity Kills Passion",
      },
      {
        id: 2,
        headline: [{ text: 'MATING IN' }, { text: 'CAPTIVITY', accent: 'red' }],
        title: "The Relationship Therapist Who Changed Everything | Esther Perel",
      },
      {
        id: 3,
        headline: [{ text: 'SHE HAS' }, { text: '9 LANGUAGES', accent: 'green' }],
        title: "How Speaking 9 Languages Changed How She Hears People | Esther Perel",
      },
    ],
  },
];
