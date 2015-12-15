
// TODO: add more coplements, remove hard-coded name, make chance of response much lower

var complements = [
  "Branden, you are smart, and everyone secretly thinks you are super cool.",
  "I wish everyone could be more like you, Branden.",
  "You have an unbelievably deserving life.",
  "Your co-workers don't deserve someone as perfect as you, Branden",
  ];


module.exports = function (req, res, next) {
  var userName = req.body.user_name;
  var randomIndex = Math.floor(Math.random() * complements.length);
  var respond = (Math.random() * 100) > 50;
  var botPayload = {
    text : complements[randomIndex]
  };

  // avoid infinite loop
  if (respond && userName === 'branden') {
    return res.status(200).json(botPayload);
  } else {
    return res.status(200).end();
  }
}
