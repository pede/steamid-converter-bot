# steamid-converter-bot #
Is a nodejs steambot that converts steamid and profile link to steam64 format.

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

# MIT License #

Copyright (c) 2017 Michel Daoud

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
