// Edit the personal details in this file. The experience reads all personal copy from here.
export const birthdayContent = {
  recipientName: "My Love",
  age: 24,
  backgroundMusic: "/assets/music/background.mp3",
  spotifyPlaylist:
    "https://open.spotify.com/playlist/38zWzlrPPBxIAWt3BZAQHe?si=88a2081b65e3487d&pt=951925cf394abe398b5a5f159970ad13",
  storyMessage:
    "[ADD YOUR PERSONAL STORY HERE — a few honest lines about what this journey means to you.]",
  finalMessage:
    "Happy 24th Birthday, my love. Thank you for being you. I love you endlessly.",
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

// The twelve "Open When" letters, exactly as written. Each page array is one
// page of the letter reader — split at natural paragraph pauses.
export const letters: Letter[] = [
  {
    title: "Open when you're upset",
    mood: "soft",
    pages: [
      `Hi, love.

If you're opening this, I'm guessing something happened that's weighing heavy on your heart. I wish I could be there to wrap my arms around you, sit with you, let you vent, and remind you that you don't have to carry everything alone, especially when I'm here with you. But since we still have a few more years before I can actually do that whenever you need me, I decided to write this little letter for you instead. ❤️

Whatever happened today doesn't define you. It doesn't define your week, your month, or who you are either. Bad moments happen, even to good people like you. And as awful as this moment feels right now, please remember that it will pass too. The hurt, the anger, the frustration, the disappointment—all of those feelings will pass.`,
      `You're allowed to feel upset. You're allowed to be frustrated, disappointed, hurt, or angry. You don't have to force yourself to "get over it" right away. Please be kind to yourself, just like you're always kind to me.

You don't have to be strong every second of every day. Rest if you need to. Cry if you need to. Sit quietly if that's what helps. Eat something if you haven't, drink some water, and take a deep breath. I know that's easier said than done but promise me you'll at least try. And please remember that one bad day doesn't erase everything good about you. Nothing that happened today could make me think less of you.`,
      `I believe in you, even on the days you don't believe in yourself. You're stronger than you realize, and I'm always in your corner. No matter how upset you are right now, remember this: you're loved more than you know.

I love you on your good days, your bad days, and every day in between.

When you're ready, text me. Vent to me, complain to me, tell me what happened, or just send me a random picture. You don't have to have the right words. I'll be here.

I love you.

— Your lovey ❤️`,
    ],
  },
  {
    title: "Open when you're lonely",
    mood: "soft",
    pages: [
      `Hey, handsome.

If you're opening this, I'm guessing you're having one of those days where the distance feels especially fucking horrible, and honestly, I hate that I can't just be there with you when you need me beside you.

I wish I could be there right now. I wish I could just pull you into my arms, lay next to you, hold your hand, bother you until you laugh, or just sit beside you without needing a phone between us. I wish I could give you the kind of comfort you actually deserve instead of trying to fit it into a little piece of paper. And I know sometimes hearing "you're never alone" doesn't magically make you feel less lonely, because the truth is, sometimes you don't want a text, a phone call, or a letter. You want your person there. You want to be able to reach over and touch them, hug them, look at them, and feel like they're actually beside you.

I want that too……..`,
      `If today is one of those days where you miss me a little extra or feel lonely, please don't feel bad about it. You don't have to pretend the distance doesn't hurt or pretend you're okay with it all the time. Trust me, I know it's hard because I feel like that too. But while I can't be there physically yet, I hope you remember that there is a 5'2 girly somewhere out here who is thinking about you, praying for you, worrying about whether you've eaten, hoping you're getting enough rest, getting excited when she sees your name pop up on her phone, and smiling over the stupid little things you do. And one day, all of these things we've had to imagine will just be normal to us the hugs that last way too long, the random drives with music loud as fuck and absolutely nowhere to go, the spontaneous dates, sitting in cafés together, going to the movies, stealing each other's food (which I advise you not to do 🥰), laughing over something that isn't even funny, falling asleep next to each other instead of through a phone call, and being able to look at you and think, "WTF, you're actually here."`,
      `Until then, when the loneliness gets really bad, let this letter be my little piece of me being there with you. I'm always rooting for you. I'm praying for your safety, your health, your success, your happiness, and for life to become a little kinder to you every day. And if you're lonely because you miss me, well… congratulations, handsome…… I miss you even more❤️.

We're still here, and we're still us, which is the greatest gift to me.

I love you so fucking much.

— Your girl ❤️`,
    ],
  },
  {
    title: "Open when you're proud of yourself",
    mood: "soft",
    pages: [
      `My love, my everything,

Whatever happened today, I hope you let yourself be proud of it, and I mean actually proud. Not the kind where you immediately think, "Okay, but I could've done better," or start thinking about the next thing you need to fix, accomplish, or improve.

Just stop for a second. Look at yourself and recognize how far you've fucking come.`,
      `I've watched you grow in so many ways, and I don't think you always give yourself enough credit for it. I've seen how hard you work, how much you care, how much you push yourself, and how badly you want to build a good life for yourself.

You're becoming the man you want to be one day at a time, and even when you feel like you still have so much left to figure out or plan, that doesn't erase everything you've already accomplished. You are allowed to be proud of yourself before you've reached the finish line or the ultimate goal. You are allowed to celebrate the little wins. You are allowed to look back at an older version of yourself and think, "Damn, I really have come a long way." So today, don't minimize it. Don't brush it off. Don't immediately move on to whatever comes next.

Let yourself smile. Let yourself feel proud.

You worked for this.`,
      `If I were there, you already know I'd be making a much bigger deal about it than you probably would. I'd be hugging you, annoying you, telling you how proud I am, and probably finding some excuse for us to celebrate because I need to celebrate everything you do.

Keep going, keep growing, and keep chasing the life you want. But remember that becoming better doesn't mean you have to constantly be dissatisfied with who you are right now. You can be proud of the man you are and still be excited about the man you're becoming.

I'm proud of you, handsome.

Always.

— Your girl ❤️`,
    ],
  },
  {
    title: "Open when you're stressed",
    mood: "soft",
    pages: [
      `Hi, baby.

Let's pause for a second…… I'm serious. Pause. Put everything down for just a minute and take a breath.

Breathe in slowly: 1, 2, 3, 4.
Hold it for a second: 1, 2, 3, 4, 5, 6, 7.
Then let it out: 1, 2, 3, 4, 5, 6, 7, 8.

Now repeat it again.`,
      `I know your mind is probably going a hundred miles an hour right now, thinking about everything you need to do, everything that could go wrong, everything you haven't gotten done yet, and probably about five other things at the same time. But you don't have to solve everything right now. What you need is to get your hands off everything, let everything drop, and feel the weight on your shoulders getting a little lighter, because whatever is stressing you out can wait five minutes while you slow down and take care of yourself.

Try to unclench your jaw, drop your shoulders, let everything go. Imagine you're in a completely empty space where nothing is there. Take a sip of water, eat something if you haven't, sit down for a minute if you can, and breathe just like you did earlier in the letter.`,
      `You don't have to be productive every second to be doing enough. You don't have to have everything figured out today. It's okay to take a break. It's okay to take a step back. It's okay to rest because rest doesn't make you lazy or less hardworking. Sometimes resting is exactly what you need to be able to keep going. If today doesn't or didn't go perfectly, that's okay. If something takes longer than you wanted, that's okay. If you make a mistake, that's okay too.

One stressful day doesn't mean you've failed. One bad moment doesn't undo all the work you've already put in. Take everything one thing at a time, love. You don't have to carry tomorrow while you're still trying to get through today. I know how hard you work. I see how much you care and how much you want to do well, and I'm so fucking proud of you for that. But I'm even more proud of you, not just for what you can provide or accomplish, but for who you are. So please, at least for this moment be a little kinder to yourself because you deserve the same patience and kindness you give me.`,
      `Now let's take one more deep breath for me.

You are okay.
You can handle this.
You can do it.
You got this!

And for right now, that's enough.

I love you so much.

— Your baby ❤️`,
    ],
  },
  {
    title: "Open when you've had a bad day",
    mood: "rain",
    pages: [
      `Hi, my love.

You've opened this, so I know today has been bad for you. I'm sorry today was horrible. I know some days just feel like they couldn't possibly get any worse, and after you've been holding so much in, sometimes all you want to do is completely lose your shit and crash the fuck out. First things first…... breathe. I knowwwwww you are tired of me saying "breathe," but I also know you, and I know you're always on go mode and don't let yourself breathe so let's take a breath.`,
      `Right now, you don't have to pretend you're okay just because the day is over. If you need to cry, cry. If you need to be angry, be angry. If you need to go to the gym and let it all out, go ahead. If you want to turn your brain off and disappear into a game for a while and forget about everything, do that. If you want to talk to me about everything that pissed you off today, please come to me. And if you don't want to talk at all, that's okay too, because I can just stay on the phone with you and exist beside you in silence.

You've told me before not to hold everything in and to let myself feel things instead of keeping them bottled up, so I'm telling you the same thing now. Let it out, love. Cry as much as you need to. Be frustrated. Feel whatever you need to feel. You don't have to make yourself okay before you're ready to keep going.`,
      `Just don't let one horrible day convince you that everything is horrible. Yeah, we can admit today was bad, but you are not bad. Your life isn't defined by one awful day, one mistake, one stressful week, or one thing that didn't go the way you wanted it to. So let today stay where it belongs: in the past. Tomorrow doesn't need you to have everything figured out. It just needs you to wake up, take a breath, and take it one day at a time. And if I were there, I'd hug you until you got sick of me, make you your favorite food yes, even that chicken Alfredo pasta you love, which I know is confusing because how can you make Alfredo pasta when you hate it, but sit back and watch me do it 🤚😌 and don't worry I'll make myself something else so we can eat together then we'd probably put something on the TV, play something, or just lay there doing absolutely nothing while eating.`,
      `I'd tell you that it's okay, I'd remind you that you're loved, and I'd probably annoy you until I got at least one smile out of you. Since I can't physically be there yet, let this letter be my little piece of that. I hope tonight you can leave today behind you, VERY far behind you, and give yourself permission to rest. Tomorrow is another day, and even if tomorrow doesn't feel exciting yet, remember that every ordinary day is still one day closer to the life we're working toward. One day closer to the random drives, the dates, the stupid little everyday things, and eventually to us coming home to each other, married and settled down. ❤️

So, for tonight can you do me a favor? Please just take care of yourself. Drink some water, eat something, take a shower, get comfortable, cry if you need to, and then try to get some fucking sleep PLEASEEEE.

You've survived every bad day you've had so far, and you WILL get through this one too.

I love you so much.

— Your bebé ❤️`,
    ],
  },
  {
    title: "Open when you can't sleep",
    mood: "stars",
    pages: [
      `Hey, sleepyhead.

So… it's one of those nights, huh?

Before you start getting annoyed at yourself for still being awake, let's slow down and take a breath. And please don't get frustrated with yourself for being awake. You don't have to force yourself to sleep. I know it's late. I know you probably got work tomorrow but you don't have to figure out why you're awake, and you definitely don't have to solve your entire life at 3 a.m.

Whatever is on your mind can wait until tomorrow. Whatever happened today is over for tonight. Whatever needs to be figured out will still be there after you've rested. But right now, there's nowhere you need to be, nothing you need to accomplish. It's just you, your bed, and a few quiet hours where you don't have to do anything for anyone or pretend that you're okay when you're not. Tonight is not for solving things and work can wait until you clock in, plans can wait, responsibilities can wait, and everything will still be there tomorrow, and you'll be able to deal with it with a little more energy after you've rested.`,
      `For right now, you don't have to do anything except get comfortable, unclench your jaw, drop your shoulders, and let everything relax.

Take a slow breath in…
and let it out.

Now do it again.

You don't have to sleep immediately baby, just let your body rest even if your mind is still awake, you can give yourself permission to lie there without doing anything, no worrying about the time, no checking the clock. No thinking, "I have to fall asleep now."

Just breathe.`,
      `If your thoughts start running again, let them pass. You don't have to follow every thought your brain gives you tonight. You've done more than enough for today. You've worked enough. You've worried enough. You've thought enough.

Now you can put everything down for a few hours.

And I hope you remember something I've told you before: you don't have to earn rest. You don't have to accomplish something first, you don't have to have everything figured out before you're allowed to close your eyes, and you can just rest because you're tired.

So let this letter be a tiny goodnight hug from me—not one that asks you to think about anything or miss anything. Just a little reminder that somewhere out here, your girl loves you very much and wants you to take care of yourself.

Now put the phone down when you're ready.

Close your eyes, take a slow breath, and let your shoulders relax.`,
      `Remember that you are safe, you are loved, you are allowed to rest and tomorrow can wait.

Tonight, you don't need to be the man who has everything figured out.

And if you don't fall asleep right away? That's okay.

Just stay there, breathe, and let yourself rest.

I hope your mind gets quiet, your body gets comfortable, and sleep finds you without you having to chase it and tomorrow will come when it comes, you don't need to meet it yet.

So for now just rest handsome and one day, instead of reading this letter when you can't sleep, you'll just roll over and find me right beside you.

Goodnight, my love.

Sweet dreams.

I love you.

— Your babe ❤️`,
    ],
  },
  {
    title: "Open when you're sick",
    mood: "soft",
    pages: [
      `Hi, baby.

First of all…

Did you drink water?
Did you take your medicine?
Did you actually rest or are you pretending you're completely fine when you feel like absolute shit?

You better answer honestly.`,
      `I already know how you get when you're sick, and you do turn into my little baby and somehow become even harder on yourself than usual, so I'm giving you permission to stop trying to push through everything for once. You don't have to be productive right now, you don't have to worry about everything you need to get done, your only job right now is to take care of yourself and let your body do its thing, take what you need, get something to eat if you can, keep yourself hydrated, get comfortable, and let yourself sleep.

I hate knowing you're not feeling well especially because I can't just show up at your door and take care of you myself. If I could I'd be right there annoying you every five minutes asking if you need anything, making sure you're comfortable, bringing you whatever you need, and telling you to stop pretending you're okay and go back to sleep. I'd make you soup, bring you tea, tuck you into bed, play with your hair, and give you approximately a million forehead kisses until you get annoyed with me.`,
      `Since I can't do all of that right now, let this letter be a little reminder that you don't have to deal with feeling shitty all by yourself.

I'm here for you, baby.

If you want to complain, complain to me. If you're feeling miserable tell me. If you need someone to keep you company, call me. If you don't feel like talking at all, that's okay too. You don't have to entertain me or pretend you're feeling better than you are. You can just be my sick, grumpy, sleepy baby, and I'll still be right here. And please don't be hard on yourself for needing to slow down, being sick doesn't mean you're being lazy or falling behind. You're allowed to rest, you're allowed to have someone take care of you, you're allowed to just feel crappy for a little while without worrying about everything else so get comfortable, my love and let yourself be taken care of for once.`,
      `Imagine this letter giving you a forehead kiss for me and if you're still feeling like shit tomorrow, I'm expecting an update from my patient asap but until then take care of yourself and remember that your girl is right here whenever you need her.

Get better soon, baby.

I love you way too much to let you skip taking care of yourself.

— Your girl ❤️`,
    ],
  },
  {
    title: "Open when you're doubting yourself",
    mood: "soft",
    pages: [
      `Hi, my love.

If you're opening this, I'm guessing that little voice in your head is being especially fucking loud today. The one that makes you question yourself, replay everything you did wrong, wonder if you're actually capable of what you want, and somehow makes you forget about everything you've already accomplished so for a minute, I need you to stop listening to that voice and listen to me instead.

I wish you could see yourself through my eyes. I really, really do. Because I don't think you realize how much I see in you. I see someone who works his ass off, someone who cares deeply, someone who wants to do well, someone who wants to build a good life for himself, and someone who keeps trying even when things don't go the way he wanted them to. I see how much you care about doing things right. I see how much thought you put into things. I see how hard you push yourself. And sometimes I wish you could step outside of your own head for five minutes and see the person I get to see.`,
      `You are hardworking, intelligent, caring, funny as hell, thoughtful, and so much more capable than you give yourself credit for. I know you don't always see those things. I know one mistake can sometimes feel bigger to you than everything you've done right. You can accomplish ten things and somehow your brain will choose the one thing that didn't go perfectly and make you feel like you didn't do enough.

Please don't do that to yourself, baby.

One bad day doesn't erase all the good days. One mistake doesn't erase everything you've learned and not knowing exactly what you're doing sometimes doesn't mean you're incapable of figuring it out.`,
      `You are allowed to learn. You're allowed to fuck up. You're allowed to change your mind, take your time, and still be proud of yourself while you're figuring things out and when you can't believe in yourself, I need you to borrow my belief in you for a little while because I've spent enough time knowing you to see things in you that you sometimes can't see in yourself. I've watched you grow. I've watched you work. I've watched you figure shit out. I've watched you care about people even when you're exhausted yourself, and I've watched you keep going through days that were harder than you let people know.

I'm so fucking proud of you for that.`,
      `So don't let one moment make you question your entire ability. Don't let one setback convince you that you're going nowhere. And don't compare where you are right now to some imaginary version of where you think you should be.

Look at how far you've already come.

Think about the things you once didn't know how to do that you can do now. Think about the things that used to scare you that you've already gotten through. You're growing, baby, and growth isn't always obvious or pretty. Sometimes it's messy. Sometimes it's taking a step forward, sometimes it's stopping to figure out where the hell you're going. That doesn't mean you're failing, it means you're human so when you're doubting yourself, come back to this letter.`,
      `Read it as many times as you need to, and until you can see yourself the way I see you, let me remind you.

You are doing better than you think.

I love you, babe more than you probably realize.

Now go a little easier on my boy, okay? You've got enough people in this world judging you. You don't need to be one of them and until you can believe in yourself again, borrow some of my belief in you.

I've got plenty. ❤️

— Your girl`,
    ],
  },
  {
    title: "Open when you feel like you aren't enough",
    mood: "soft",
    pages: [
      `My love,

If you're reading this, I want you to remember something I hope you never, ever forget which is you do not have to earn your worth with me. I know you've spent so much of your life feeling like you have to be the strong one, the responsible one, the one who fixes things, provides, figures things out, and makes sure everyone else is okay.

I know being able to give, provide, and take care of the people you love means a lot to you, and I know that when you can't do those things the way you want to, it can make you feel like you've somehow failed or that you're not enough but baby, please listen to me. When it comes to me, you don't have to prove yourself through money, gifts, trips, or anything material. I don't love you because of what you can buy me. I don't love you because of how much money you make. I don't love you because you can fix every problem.

I love you because you're you.`,
      `I love the way you make me laugh until my face hurts. I love our stupid conversations, our games, our shows, and our calls where we're barely doing anything but still don't want to hang up. I love hearing about your day. I love hearing you talk about the things you're excited about. I love watching you work toward the things you want. I love seeing how hard you try, even when you don't realize how much I notice it.

You were never "not enough" because you couldn't give me more and you don't have to constantly prove that you're worthy of loving me because you already are, I don't want you carrying the weight of our entire relationship like you're supposed to single handedly fix everything, we're a team, remember? We figure things out together. We carry things together. We repair things together. We don't destroy each other trying to make everything perfect.`,
      `So when that voice in your head tells you that you're not doing enough, or that you should be further ahead, or that you need to become someone else before you're worthy of being loved, I want you to come back to this letter.

You are loved when you're successful. You are loved when you're struggling. You are loved when you have everything figured out. You are loved when you don't. You are loved when you have a lot to give. You are loved when you don't have much to give at all and even on the days when you feel like you have nothing to offer me, your presence is still something I will always cherish and love.

You don't have to be my provider to be my person. You don't have to fix everything to be my safe place. You don't have to give me the world for me to choose you. And I sure as hell don't need some perfect version of you who has everything figured out, has all the money, has the perfect career, and never struggles.

To put it simply: I want you.`,
      `My man who makes me laugh, the man who loves me even when I'm hard to love and understand, the man I can sit on FaceTime with for hours doing absolutely nothing and loving it, the man who tries his best, the man who cares, the man who is still growing, the man who sometimes doesn't know what the hell he's doing but keeps trying anyway, the man who makes me feel safe, the man who feels like home when my own home feels unsafe and weird.

You don't have to arrive at some imaginary finish line before you become enough. You are already enough to be loved.

So please always remember that.

I love you.

— Your love ❤️`,
    ],
  },
  {
    title: "Open when you're crying",
    mood: "soft",
    pages: [
      `Hey, sweetheart.

If you're opening this, I'm guessing you're having one of those moments where everything just feels like too much. And if there are tears on this page by the time you're done reading, that's okay. Really you don't have to wipe them away or feel embarrassed about them.

Crying doesn't make you weak. It doesn't make you dramatic, and it doesn't mean you can't handle things. Sometimes you've just been carrying too much for too long, and your body needs somewhere to let it out.

So cry as much as you need to.`,
      `If I were there, I wouldn't tell you to stop. I wouldn't tell you to calm down or ask you why you're crying before you're ready to talk. I'd just pull you into my arms, let you cry against me, rub your back, wipe your tears when you let me, and stay there until you felt a little lighter.

You don't have to pretend with me. You don't have to smile for me. You don't have to act like everything is okay just because I'm here. You can be completely honest with me, even when you're sad, overwhelmed, frustrated, angry, or just don't know what the hell you're feeling.

I'll love every version of you. The happy you, the excited you, the quiet you, the stressed out you, and even the you who's crying right now and if you don't know what you need, that's okay too. You don't always need to explain everything. Sometimes you just need someone to stay.`,
      `So let me stay with you through this little piece of paper.

Take a breath for me. Wipe your tears when you're ready. Drink some water. Take your time. You don't have to suddenly feel better just because you've finished reading this.

Whatever made you cry doesn't make you any less strong, and it doesn't change how I see you.

You are still my handsome boy. You are still loved. You are still cared for. And you're still allowed to have bad days and soft moments and days where you just need to cry and when you're ready, come find me. You can tell me everything, tell me nothing, send me a stupid picture, or just sit on FaceTime with me and let me keep you company.

You don't have to carry it all by yourself, okay?

Now come here, baby. Consider this your biggest fucking hug until I can give you a real one.

I love you so much.

— Your girl ❤️`,
    ],
  },
  {
    title: "Open when you miss me",
    mood: "flowers",
    pages: [
      `Hi, baby.

If you're reading this, I'm guessing you're missing me a little extra today and if you are just know that I'm probably missing you too.

I wish I could teleport to you for five minutes. Actually, who am I kidding? If I could teleport to you, there is absolutely no way I'd only stay for five minutes. I'd probably spend the first few minutes just staring at you because after all this time, I know seeing you in person for the first time would feel unreal. Then I'd hug you for way longer than either of us needed to.

I miss the things we haven't even gotten to experience yet. I miss the idea of walking beside you, holding your hand without thinking about it, leaning on your shoulder, stealing your hoodie, bothering you in person instead of through a screen, going on random drives, getting food together, sitting somewhere doing absolutely nothing, and laughing at something stupid that probably isn't even funny.`,
      `I miss the ordinary things most.

The kind of things other couples probably don't even think twice about because they get to do them whenever they want. I want to know what it's like to just be with you without having to say goodbye because a call has to end or because we're both going to sleep in completely different places and I know missing someone can hurt sometimes. So if you're having one of those days where the distance feels especially heavy, you don't have to pretend it doesn't. I miss you too. I wish you were here too but for now, let this letter be a little piece of me reaching you from wherever I am.

Close your eyes for a second and imagine me giving you the biggest hug I possibly can. Imagine me squeezing you way too tightly and refusing to let go because I finally fucking got to hug you after all this time.

That's where I'd rather be.

With you.`,
      `And until we get to have all those little things we've talked about, remember that you're loved from miles away. You're thought about, prayed for, missed, and cared for more than you probably realize.

I love you more than these miles can measure, and I can't wait for the day when missing each other doesn't have to mean sitting on opposite sides of a screen.

Until then bebé consider this your long-distance hug.

I love you so much.

— Your bebé ❤️`,
    ],
  },
  {
    title: "Open when we're arguing",
    mood: "soft",
    pages: [
      `Hi, love.

If you're opening this it probably means we're not seeing eye to eye right now, and things between us probably aren't feeling very good. Before anything else, I want you to remember that I love you, even when I'm frustrated, even when you're frustrated, and even when we're both upset and not communicating the way we would want or should be. That love doesn't suddenly disappear. One disagreement one bad conversation, or one difficult moment doesn't erase everything we've built together.

We're on the same team. It's never me versus you. It's us versus the problem. Whatever we're arguing about is something we can work through together. We don't have to make each other the enemy just because we're hurt, angry, or disappointed.`,
      `I never want our pride to become bigger than our relationship. I don't want either of us to care more about being right than understanding each other. So when we're both calm enough to actually talk, let's listen to each other instead of trying to win, explain how we feel instead of attacking, and try to understand where the other person is coming from instead of assuming the worst. And if one of us needs a little space before we can have that conversation, that's okay too. Taking a moment to breathe and calm down isn't giving up on us. Sometimes it's exactly what we need so we don't say something out of anger that we don't actually mean.

We're going to misunderstand each other sometimes. We are going to have bad conversations. We are going to get annoyed with each other. And that is part of being two people who are learning how to love each other better. What matters to me is that we don't let one difficult moment turn into something bigger than it needs to be.`,
      `So whatever we're upset about right now, let's remember that we're not trying to defeat each other. We're trying to understand each other. We don't have to solve everything in one conversation, and we don't have to have all the right words immediately. We just have to keep choosing to come back and talk when we're ready.

No argument will ever be more important to me than us so let's take a breath baby and let yourself calm down I'll do the same and when we're ready, let's come back to each other and figure this out together.

Again it's us versus the problem.

Always.

I love you.

— Your girl ❤️`,
    ],
  },
];
