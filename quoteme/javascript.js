var quotes = [
    'This is my depressed stance. When you\'re depressed, it makes a lot of difference how you stand. The Vaguely Unpleasant thing you can do is straighten up and hold your head high because then you\'ll start to feel better. If you\'re going to get any joy out of being depressed, you\'ve got to stand like this.', 
    'To generalize is to be an idiot.',
    'Crap crap crap crap crap crap crap stupid stupid stupid stupid stupid crap.',
    'Time flies like an arrow; fruit flies like a banana',
    'Two things are infinite: the universe and human stupidity; and I\'m not sure about the universe.',
    'Never memorize something that you can look up',
    "Have you ever noticed how ‘What the hell’ is always the right decision to make?",
    'Beauty is in the eye of the beholder and it may be necessary from time to time to give a stupid or misinformed beholder a black eye.',
    "Saying 'I notice you're a nerd' is like saying, 'Hey, I notice that you'd rather be intelligent than be stupid, that you'd rather be thoughtful than be vapid, that you believe that there are things that matter more than the arrest record of Lindsay Lohan. Why is that?' In fact, it seems to me that most contemporary insults are pretty lame. Even 'lame' is kind of lame. Saying 'You're lame' is like saying 'You walk with a limp.' Yeah, whatever, so does 50 Cent, and he's done all right for himself.",
    'The story so far\: <b>In the beginning the Universe was created\.</b> This has made a lot of people very angry and been widely regarded as a bad move\.',
];

function newQuote() {
    var randomNumber = Math.floor(Math.random() * (quotes.length));
document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber]
}