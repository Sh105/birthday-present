// Edit the personal details in this file. The experience reads all personal copy from here.
export const birthdayContent = {
  recipientName: "My Love",
  age: 24,
  backgroundMusic: "/assets/music/background.mp3",
  voiceMessage: "/assets/music/voice-message.mp3",
  spotifyPlaylist:
    "https://open.spotify.com/playlist/38zWzlrPPBxIAWt3BZAQHe?si=88a2081b65e3487d&pt=951925cf394abe398b5a5f159970ad13",
  storyMessage:
    "[ADD YOUR PERSONAL STORY HERE — a few honest lines about what this journey means to you.]",
  finalMessage:
    "[ADD YOUR FINAL BIRTHDAY MESSAGE HERE — this is the quiet last letter he will read.]",
} as const;

export const wishes = [
  "My favorite place will always be next to you.",
  "Thank you for making ordinary days feel so special.",
  "I hope 24 brings you as much love, care, kindness and happiness as much as you bring them to me.",
  "One of the best things that ever happened to me is meeting you.",
  "You make me feel loved in ways I never knew I needed.",
  "I still get excited every time I see your name on my phone.",
  "Your smile and laugh can fix any bad day.",
  "I'm so proud of the man you're becoming.",
  "Thank you for being my safe place.",
  "If I could relive one thing forever, it would be our best memories together.",
  "You make my heart feel at home.",
  "I hope this year brings you closer to every dream you're chasing.",
  "I hope this year you get to achieve your dreams even the little ones.",
  "You're so handsome, but your heart is my favorite thing about you.",
  "Every birthday of yours is another year I get to celebrate you.",
  "I love how you make me laugh when I least expect it.",
  "Never forget how loved, appreciated, and admired you are.",
  "Thank you for choosing me every day.",
  "The world is lucky to have someone like you in it.",
  "You deserve all the success, happiness, and peace coming your way.",
  "Being your girlfriend is one of my favorite things ever.",
  "I can't wait to create more memories with you every day.",
  "Even after all this time, you still give me butterflies and make me nervous.",
  "I hope when you read this, you smile because that's exactly what you do to me.",
] as const;

export type Letter = { title: string; mood: "stars" | "rain" | "flowers" | "soft"; pages: string[] };

const letterTitles = [
  "Open when you're upset",
  "Open when you're lonely",
  "Open when you're proud of yourself",
  "Open when you're stressed",
  "Open when you've had a bad day",
  "Open when you can't sleep",
  "Open when you're sick",
  "Open when you're doubting yourself",
  "Open when you feel like you aren't enough",
  "Open when you're crying",
  "Open when you miss me",
  "Open when we're arguing",
] as const;

export const letters: Letter[] = letterTitles.map((title, index) => ({
  title,
  mood: index === 4 ? "rain" : index === 5 ? "stars" : index === 10 ? "flowers" : "soft",
  pages: [
    `[ADD PAGE 1 OF “${title.toUpperCase()}” HERE]`,
    `[ADD PAGE 2 OF “${title.toUpperCase()}” HERE]`,
  ],
}));
