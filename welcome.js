// authenticates you with the API standard library
// type `await lib.` to display API autocomplete
const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

// Discord-Canvas
const canvas = require("discord-canvas"),
welcomeCanvas = new canvas.Welcome();
const user = await lib.discord.users['@0.1.5'].retrieve({
  user_id: context.params.event.user.id,
}); 
let members = await lib.discord.guilds['@0.1.0'].retrieve({
  guild_id: `Guild_ID`, // Put your Guild ID
  with_counts: true,
});

// Config
const servername = `Server_Name`
 const pfp = `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png`
const WelcomeChannel_ID = `Channel_ID`
let animebackgrounds = [
  'http://1.bp.blogspot.com/-K4Lwzyoeo-Q/ViH--oxVfsI/AAAAAAAACh0/Hp673VzUuZ4/w1200-h630-p-k-no-nu/tut-animebg.jpg',
  'https://cdn.dribbble.com/users/3228050/screenshots/10870423/nightcityscape_4x.png',
  'https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/123740332/original/934af649631a2dc8730f0b63cfed1e63908b6f08/create-anime-background-style.jpg',
  'https://images4.alphacoders.com/900/thumb-350-900059.jpg',
  'https://c4.wallpaperflare.com/wallpaper/425/739/655/cityscape-guilty-crown-tokyo-night-wallpaper-preview.jpg',
  'https://t4.ftcdn.net/jpg/02/97/79/83/360_F_297798377_VB9egqGnRKcZxU53wybEHLRnnTrcvlAH.jpg',
];

  let animebackgrounds2 = Math.floor(Math.random() * animebackgrounds.length);
  let animebackgrounds3 = animebackgrounds[animebackgrounds2];


// Welcome Card
let image = await welcomeCanvas
  .setUsername(user.username)
  .setDiscriminator(user.discriminator)
  .setMemberCount(`${members.approximate_member_count} members left!`)
  .setGuildName(servername)
  .setAvatar(pfp)
  .setColor("border", "#8015EA")
  .setColor("username-box", "#8015EA")
  .setColor("discriminator-box", "#8015EA")
  .setColor("message-box", "#8015EA")
  .setColor("title", "#8015EA")
  .setColor("avatar", "#8015EA")
  .setBackground(`${animebackgrounds3}`)
  .toAttachment();

  
  // Sending the message!
   let Attachment = await lib.discord.channels['@0.2.0'].messages.create({
    channel_id: `${WelcomeChannel_ID}`,
    content: ``,
    file: await image.toBuffer(),
    filename: 'welcome.png',
  });
