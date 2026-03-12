import mysteryOfLove from '../assets/Sufjan_Stevens_-_Mystery_of_Love_(mp3.pm).mp3';
import sunflowerBouquet from '../assets/sunflower_bouquet.png';
import img854 from '../assets/IMG_854.jpeg';
import photo1 from '../assets/photo1.jpeg';
import photo3 from '../assets/photo3.jpeg';
import photo5 from '../assets/photo5.jpeg';
import photo7 from '../assets/photo7.jpeg';
import photo8 from '../assets/photo8.jpeg';
import photo9 from '../assets/photo9.jpeg';
import photo13 from '../assets/photo13.jpeg';
import photo15 from '../assets/photo15.jpeg';
import guitarImage from '../assets/guitar_on_stand.png';
import theBeatles from '../assets/The Beatles - While My Guitar Gently Weeps.mp3';

export const roomItems = [
  {
    id: 'window',
    title: 'A Note From The Window',
    type: 'text',
    content: "If I could show you the world through my eyes, you'd see how everything looks more beautiful since you came into my life. Every sunrise reminds me of your smile, Sreeparna.",
    position: { top: '35%', left: '50%' }
  },
  {
    id: 'frame',
    title: 'Our Memories',
    type: 'gallery',
    items: [
      { src: photo3, caption: "I remember that time we were just laughing and blushing." },
      { src: photo1, caption: "It's the simple moments that I treasure the most." },
      { src: img854, caption: "You make every memory special." },
      { src: photo5, caption: "I love this picture of us." },
      { src: photo7, caption: "Always smiling when I am with you." },
      { src: photo8, caption: "To many more memories like this." },
      { src: photo9, caption: "Every moment is precious." },
      { src: photo13, caption: "Forever in my heart." },
      { src: photo15, caption: "You are my favorite person." }
    ],
    position: { top: '30%', left: '20%' }
  },
  {
    id: 'vase',
    title: 'Sunflowers For You',
    type: 'image',
    src: sunflowerBouquet,
    content: "Just like sunflowers always turn to the sun, my heart always turns toward you. You bring light into my world.",
    position: { top: '45%', right: '28%' }
  },
  {
    id: 'bookcase',
    title: 'Love Stories',
    type: 'carousel',
    items: [
      '"In vain have I struggled. It will not do. My feelings will not be repressed. You must allow me to tell you how ardently I admire and love you." — Jane Austen',
      '"I am yours, don\'t give myself back to me." — Rumi',
      '"Whatever our souls are made of, his and mine are the same." — Emily Brontë',
      '"I love you not only for what you are, but for what I am when I am with you." — Roy Croft',
      '"If I had a flower for every time I thought of you... I could walk through my garden forever." — Alfred Tennyson'
    ],
    position: { top: '35%', right: '15%' }
  },
  {
    id: 'jar',
    title: 'Notes For You',
    type: 'carousel',
    items: [
      "I love the way you laugh when you think no one is watching.",
      "Your kindness makes the world a better place.",
      "Every day with you is a new adventure.",
      "You make even the mundane feel extraordinary.",
      "Your smile can brighten the darkest days.",
      "I'm so lucky to have you in my life.",
      "Just hearing your voice calms my soul.",
      "I admire your passion and dedication to everything you do.",
      "Thank you for always being my biggest supporter.",
      "You have the most beautiful soul.",
      "I love the way your eyes light up when you're excited.",
      "You make me want to be a better person every single day."
    ],
    position: { top: '60%', right: '18%' }
  },
  {
    id: 'radio',
    title: 'Music Box',
    type: 'audio',
    src: mysteryOfLove,
    content: "This plays our favorite song on loop. It reminds me of the rhythm of our hearts beating together. (Click play to listen!)",
    position: { bottom: '15%', left: '15%' }
  },
  {
    id: 'teddy',
    title: 'A Hug in a Note',
    type: 'text',
    content: "You're loved more than a teddy bear can love. Here is a soft hug from afar, hoping it brings a warm smile to your beautiful face.",
    position: { bottom: '10%', left: '30%' }
  },
  {
    id: 'gift',
    title: 'Open Me!',
    type: 'text',
    content: "You are the greatest surprise and most treasured gift I could ever ask for. Thank you for being you.",
    position: { bottom: '12%', right: '25%' }
  },
  {
    id: 'switch',
    position: { top: '40%', left: '8%' }
  },
  {
    id: 'cat',
    title: 'Sleepy Kitty',
    type: 'text',
    content: "Even the little kitty knows how comforting it is to just be near you.",
    position: { bottom: '5%', left: '50%' }
  },
  {
    id: 'envelope',
    title: 'A Secret Letter',
    type: 'letter',
    content: "My dearest Sreeparna,\n\nI just wanted to take a moment to write you this little note. Creating this tiny space for you was just a small way to show how much you mean to me.\n\nYou light up my world in ways words can't fully express. Thank you for being the amazing, beautiful person you are.\n\nYours always,\nIshan ❤️",
    position: { bottom: '6%', right: '12%' }
  },
  {
    id: 'guitar',
    title: 'A Song For You',
    type: 'audio',
    src: theBeatles,
    image: guitarImage,
    content: "A song that makes me think of you. (Click play to listen!)",
    position: { bottom: '25%', right: '40%' }
  },
  {
    id: 'crystalBall',
    title: 'Magic Crystal Ball',
    type: 'generator',
    items: [
      "I love how your smile brightens up my darkest days.",
      "I love the way you laugh at my silly jokes.",
      "I love how safe I feel when I'm with you.",
      "My favorite memory is when we were just laughing and blushing.",
      "I love your passion and how much you care about the things you love.",
      "I love the way your eyes sparkle when you talk about your favorite things.",
      "I love how you always know exactly how to comfort me.",
      "Every single conversation we have is a treasure to me.",
      "You are the most beautiful person I know, inside and out.",
      "I love just existing in the same space as you.",
      "I love the warmth of your heart and the kindness you show everyone."
    ],
    position: { top: '55%', left: '30%' }
  },
  {
    id: 'bed',
    title: 'Come Cuddle~ 🛏️',
    type: 'carousel',
    items: [
      "Let's cuddle, cutu~ I promise I'll be the big spoon 🥄💕",
      "Bed is empty without you. Come here and let me hold you tight 🤗",
      "Warning: Cuddling with me may cause excessive giggles, warmth, and an inability to leave 😏",
      "I'd share my blanket with you… that's how much I love you 🥹",
      "You + me + this bed = the best nap ever imagined 💤💕",
      "Psst… I saved a pillow fort spot just for you 🏰",
      "Unpopular opinion: the best place in the world is right here, next to you 🥺",
      "I'd stay up all night just talking to you, but I'd also love to fall asleep holding you 🌙",
      "You make even sleep feel like an adventure 💛",
      "Between you and me, all my best dreams have you in them 💭❤️"
    ],
    position: { top: '54%', left: '1%' }
  },
  {
    id: 'laptop',
    title: 'God Forbid 💻😩',
    type: 'text',
    content: "God forbid a man tries to fix his bug... 😜",
    position: { bottom: '5%', right: '8%' }

  }
];
