
// TODO: add more coplements, remove hard-coded name, make chance of response much lower

var complements = [
  "Rishi, you are smart, and everyone secretly thinks you are super cool.",
  "I wish everyone could be more like you, Rishi.",
  "You have an unbelievably deserving life.",
  "Your co-workers don't deserve someone as perfect as you, Rishi",
  ];


module.exports = function (req, res, next) {
  var userName = req.body.user_name;
  var randomIndex = Math.floor(Math.random() * complements.length);
  var botPayload = {
    text : complements[randomIndex]
  };

  // avoid infinite loop
  if (userName === 'branden') {
    return res.status(200).json(botPayload);
  } else {
    return res.status(200).end();
  }
}
