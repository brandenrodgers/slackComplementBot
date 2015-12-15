
// TODO: add more coplements, remove hard-coded name, make chance of response much lower

var SLACK_NAME = "branden"; // the user that the bot will respond to
var RESPONSE_CHANCE = 100; // % chance of a response from the bot

var complements = [
  "@, you are smart, and everyone secretly thinks you are super cool.",
  "I wish everyone could be more like you, @.",
  "You have an unbelievably deserving life.",
  "Your co-workers don't deserve someone as perfect as you, @",
  ];


module.exports = function (req, res, next) {
  var userName = req.body.user_name;
  var respond = (Math.random() * 100) <= RESPONSE_CHANCE;

  // only send a complement to this person
  if (respond && userName === SLACK_NAME) {
    var randomIndex = Math.floor(Math.random() * complements.length); // pick a random index
    var complement = replaceName(userName, complements[randomIndex]);
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



