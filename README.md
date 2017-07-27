# steamid-converter-bot #
This is a nodejs steam bot that converts steamid or profile link to steam64 format.

# How To Setup #
Make sure you have npm and nodejs installed on your server.

Install required modules:
  ```
  npm install steam-user
  npm install steamidconvert
  ```

Upload the bot to your server change fill in your info in config.json.

Now run the bot with the following command:
  ```
  nodejs bot.js
  ```

The bot will now login and add you as a friend on steam.

# BOT Commands #
```
!steamid <STEAMID/PROFILE LINK>
!add_friend <STEAM64>
!remove_friend <STEAM64>
```
!stamid returns the steamid in steam64 format.
!add_friend adds a friend to the bot (admin only command)
!remove_friend removes a friend from the bot (admin only command)

[Bot Test / Interface](http://i.imgur.com/p3hE7iv.png)
