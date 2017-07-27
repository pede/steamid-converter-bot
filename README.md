# steamid-converter-bot #
This is a nodejs steam bot that converts steamid or profile link to steam64 format.

# How To Setup #
Make sure you have npm and nodejs installed on your server.

Install required modules:
  ```
  npm install steam-user
  npm install steamidconvert
  ```
  - [steamidconvert by. babofitos](https://www.npmjs.com/package/steamidconvert)
  - [steam-user by. doctormckay](https://www.npmjs.com/package/steam-user)

Upload the bot to your server and change the config.json file.

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

<img src="http://i.imgur.com/p3hE7iv.png" />

[Bot Test / Interface](http://i.imgur.com/p3hE7iv.png)

# Donation #

[If you like my work feel free to send me a donation](https://steamcommunity.com/tradeoffer/new/?partner=44509024&token=u1I8566N)
