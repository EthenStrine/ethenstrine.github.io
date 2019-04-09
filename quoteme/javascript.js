var quotes = [
    'This is my depressed stance. When you\'re depressed, it makes a lot of difference how you stand. The Vaguely Unpleasant thing you can do is straighten up and hold your head high because then you\'ll start to feel better. If you\'re going to get any joy out of being depressed, you\'ve got to stand like this.', 
    'To generalize is to be an idiot.',
    'Crap crap crap crap crap crap crap stupid stupid stupid stupid stupid crap.',
    'Time flies like an arrow; fruit flies like a banana',
    'Two things are infinite: the universe and human stupidity; and I\'m not sure about the universe.',
    'Never memorize something that you can look up',
    "Have you ever noticed how ‘What the hell’ is always the right decision to make?",
    
];

function newQuote() {
    var randomNumber = Math.floor(Math.random() * (quotes.length));
document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber]
}