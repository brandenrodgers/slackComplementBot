# slackComplementBot
A complementing slackbot

This bot will randomly respond to a given person with overly-nice, funny messages. You can put it in any channel.

To add this to your Slack:

1. In complementbot.js change:
  - the SLACK_NAME to be the slack username of the person you want the bot to respond to
  - The NAME to be the first name of that person
  - the RESPONSE_CHANCE to the frequency (as a %) that you want the bot to respond 
  
2. Deploy via Heroku

3. Add the bot to Slack Outgoing Webhooks. Specify which channel you want the bot in and the URL
   will be https://<heroku-app-name>.herokuapp.com/complement
