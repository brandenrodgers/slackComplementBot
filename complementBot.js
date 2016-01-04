

var SLACK_NAME = "rishishiva"; // the username that the bot will respond to
var NAME = "rishi"; // Display name
var RESPONSE_CHANCE = 40; // % chance of a response from the bot

// Add '@' symbols wherever you want to use the person's name (only 1 per sentence)
var complements = [
  "@, you are smart, and everyone here thinks you are super cool.",
  "I wish everyone could be more like you, @.",
  "Your co-workers don't deserve someone as perfect as you, @.",
  "You're so delightful, @. I bet you make babies smile.",
  "@, you are a strong, independant man. Don't let anyone here tell you otherwise.",
  "On a scale from 1 to 10, @ is an 11.",
  "@, You're even more beautiful on the inside than you are on the outside.",
  "You are making a difference, @.",
  "@, I bet you sweat glitter.",
  "Colors seem brighter when you're around, @.",
  "I bet @ could survive a Zombie apocalypse.",
  "Isn't @ like a breath of fresh air?",
  "I bet @ does crossword puzzles in ink.",
  "How does @ keep being so funny and making everyone laugh all the time?",
  "Forget this guys, lets just talk about how great @ is instead.",
  "Does anyone have a Band Aid? I scraped my knee falling for @.",
  "I appreciate @ more than Santa appreciates chimney grease.",
  "Is it hot in here? Or is it just @?",
  "Have you been going to the gym @? You look good today.",
  "@, Your smile is contagious, you have the best laugh, and we appreciate you.",
  "I think we can all agree that @ is by far the most influential person in our lives.",
  "This company would be nothing without you, @",
  "I literally would not exist if it weren't for you, @",
  "I'm sure all of that is very important, but what really matters is how good @ looks today",
  "Every second we're not talking about @'s killer legs is a wasted second.",
  "It's been far too long since we've talked about how easy it is to get lost in @'s eyes",
  "@ is so smart. He should run for president.",
  "Don't you just want to pinch @'s cute little cheeks",
  "I wish @ was ten stories tall so he could hug each and every one of us at the same time",
  "@, you matter.",
  "Let's all just stop working so we can spend more time thinking about @",
  "It's hard to get work done here when @'s eyes are so deep and distracting. Am I right guys?",
  "We're so blessed to have @ in this chat.",
  "@ why don't you notice me? I'm trying so hard to get your attention.",
  "@ you're amazing. Let's run away.",
  ];


module.exports = function (req, res, next) {
  var userName = req.body.user_name.toLowerCase();
  var respond = (Math.random() * 100) <= RESPONSE_CHANCE;

  // only send a complement to this person
  if (respond && userName === SLACK_NAME) {
    var randomIndex = Math.floor(Math.random() * complements.length); // pick a random index
    var complement = replaceName(NAME, complements[randomIndex]);
    var botPayload = {text : complement};
 
    // send response
    return res.status(200).json(botPayload);

  } else { 
    // send nothing
    return res.status(200).end();
  }
};

// Replaces the '@' symbol in the sentence with the given name
// Note: the sentence can only have one '@' symbol
var replaceName = function(name, sentence) {
  var before = '', after = '';
  name = name.charAt(0).toUpperCase() + name.slice(1); // capitalize the name
  
  for (var i = 0; i < sentence.length; i++) {
    if (sentence[i] === '@') {
      after = sentence.substring(i+1, sentence.length);
      break;
    } else {
      before += sentence[i];
    } 
  }
  return (before !== sentence) ? before + name + after : sentence;
};



