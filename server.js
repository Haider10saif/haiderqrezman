


const Discord = require("discord.js");

const { Client, MessageEmbed } = require("discord.js");

const { Util } = require("discord.js");

const client = new Client({ disableEveryone: true });

const ytdl = require("ytdl-core");

const canvas = require("canvas");

const convert = require("hh-mm-ss");

const fetchVideoInfo = require("youtube-info");

const botversion = require("./package.json").version;

const simpleytapi = require("simple-youtube-api");

const moment = require("moment");

const fs = require("fs");

const util = require("util");

const gif = require("gif-search");

const ms = require("ms");

const jimp = require("jimp");

const { get } = require("snekfetch");

const guild = require("guild");

const dateFormat = require("dateformat");

const YouTube = require("simple-youtube-api");

const youtube = new YouTube("AIzaSyAWUm-uhkqYnqbIsgtxb0S6nj3SLYfB6fc"); 

const hastebins = require("hastebin-gen");

const getYoutubeID = require("get-youtube-id");

const yt_api_key = "AIzaSyAWUm-uhkqYnqbIsgtxb0S6nj3SLYfB6fc"; 

const pretty = require("pretty-ms");

const queue = new Map();

var table = require("table").table;

client.on("ready", () => {

  console.log(`Logged in as ${client.user.tag}!`);

});

const prefix = "-";

let antibots = JSON.parse(fs.readFileSync('./antibots.json' , 'utf8'));

client.on('message', message => {

    

      if(message.content.startsWith(prefix + "antibots on")) {

          if(!message.channel.guild) return;

          if(!message.member.hasPermission('ADMINISTRATOR')) return;

  antibots[message.guild.id] = {

  onoff: 'On',

  }

  let embed = new Discord.MessageEmbed()

.setColor("BLACK")

.setDescription(`**✅ Done Antibots On 

Activated by<@${message.author.id}>**`)

.setThumbnail("https://cdn.discordapp.com/icons/707034552987549788/a_f439b816d477aaeb4d3dd8eb7234da5c.gif?size=1024")

.setTimestamp();

        message.channel.send(embed)

            .then(e => {

          message.react("✅");

        })

                fs.writeFile("./antibots.json", JSON.stringify(antibots), (err) => {

              if (err) console.error(err)

              .catch(err => {

                console.error(err);

            });

              });

            }

    

          })

  client.on('message', message => {

    if(message.content.startsWith(prefix + "antibots off")) {

          if(!message.channel.guild) return;

          if(!message.member.hasPermission('ADMINISTRATOR')) return;

  antibots[message.guild.id] = {

  onoff: 'Off',

  }

  let embed = new Discord.MessageEmbed("Hai Der")

.setColor("BLACK")

.setDescription(`**✅ Done Antibots Off

Activated by<@${message.author.id}>**`)

 

        

.setThumbnail("https://cdn.discordapp.com/icons/707034552987549788/a_f439b816d477aaeb4d3dd8eb7234da5c.gif?size=1024")

.setTimestamp();

        message.channel.send(embed)

            .then(e => {

          message.react("✅");

        })

                fs.writeFile("./antibots.json", JSON.stringify(antibots), (err) => {

              if (err) console.error(err)

              .catch(err => {

                console.error(err);

            });

              });

            }

  

          })

  

  client.on("guildMemberAdd", member => {

    if(!antibots[member.guild.id]) antibots[member.guild.id] = {

  onoff: 'Off'

  }

    if(antibots[member.guild.id].onoff === 'Off') return;

  if(member.user.bot) return member.kick()

  })

  

  fs.writeFile("./antibots.json", JSON.stringify(antibots), (err) => {

  if (err) console.error(err)

  .catch(err => {

  console.error(err);

  });

  

  })

  

  

  

  

  

const antihack = JSON.parse(fs.readFileSync('./antihack.json' , 'utf8'));

const antijoin = JSON.parse(fs.readFileSync('./antijoin.json' , 'utf8'));

client.on('message', message => {

    if(message.content.startsWith(prefix + "antijoin on")) {

        if(!message.channel.guild) return message.reply('**This Command Only For Servers**');

        if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('**Sorry But You Dont Have Permission** `MANAGE_GUILD`' );

antijoin[message.guild.id] = {

onoff: 'On',

}

       let embed = new Discord.MessageEmbed()

    .setColor("#00000")

.setDescription(`**✅ Done Antijoin on

Activated by<@${message.author.id}> **`)

.setThumbnail("https://cdn.discordapp.com/icons/707034552987549788/a_f439b816d477aaeb4d3dd8eb7234da5c.gif?size=1024")

.setTimestamp();

 message.channel.send(embed)

.then(e => {

 message.react("✅");

 })

        

          fs.writeFile("./antijoin.json", JSON.stringify(antijoin), (err) => {

            if (err) return console.error(err)

            .catch(err => {

              console.error(err);

          });

            });

          }

        })

client.on('message', message => {

    if(message.content.startsWith(prefix + "antijoin off")) {

        if(!message.channel.guild) return message.reply('**This Command Only For Servers**');

        if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('**Sorry But You Dont Have Permission** `MANAGE_GUILD`' );

antijoin[message.guild.id] = {

onoff: 'Off',

}

 let embed = new Discord.MessageEmbed()

 .setColor("BLACK")

.setDescription(`**✅ | Done AntiJoin Off

Activated by<@${message.author.id}>**`)

.setThumbnail("https://cdn.discordapp.com/icons/707034552987549788/a_f439b816d477aaeb4d3dd8eb7234da5c.gif?size=1024")

.setTimestamp();

        message.channel.send(embed)

            .then(e => {

          message.react("✅");

        })

        

          fs.writeFile("./antijoin.json", JSON.stringify(antijoin), (err) => {

            if (err) return console.error(err)

            .catch(err => {

              console.error(err);

          });

            });

          }

        })

         

  //btrolie

//الحمايه

let anti = JSON.parse(fs.readFileSync("./antigreff.json", "UTF8"));//btrolie

let config = JSON.parse(fs.readFileSync("./config.json", "UTF8"));

client.on("message", message => {

    if(!message.channel.guild) return;

    let user = anti[message.guild.id+message.author.id]

    let num = message.content.split(" ").slice(1).join(" ");

    if(!anti[message.guild.id+message.author.id]) anti[message.guild.id+message.author.id] = {

        actions: 0

    }//btrolie

    if(!config[message.guild.id]) config[message.guild.id] = {

        banLimit: 3,

        chaDelLimit: 3,

        roleDelLimit: 3,//btrolie

        kickLimits: 3,

        roleCrLimits: 3,

        time: 30

    }

if(message.content.startsWith(prefix + "limit")) {//btrolie

 

    if(!message.member.hasPermission('MANAGE_GUILD')) return;

    if(message.content.startsWith(prefix + "limitbans")) {

        if(!num) return message.channel.send("**→ | Supply a number !");

        if(isNaN(num)) return message.channel.send("**→ | Supply a number !**");

        config[message.guild.id].banLimit = num;

       let embed = new Discord.MessageEmbed()

.setColor("BLACK")

        .setDescription(`**✅Done bans limit to [${config[message.guild.id].banLimit}]**`)

                         .setThumbnail("https://cdn.discordapp.com/icons/707034552987549788/a_f439b816d477aaeb4d3dd8eb7234da5c.gif?size=1024")

.setTimestamp();

    message.channel.send(embed)

       }

    if(message.content.startsWith(prefix + "limitkicks")) {

        if(!num) return message.channel.send("**→ | Supply a number !**");

        if(isNaN(num)) return message.channel.send("**→ | Supply a number !**");

        config[message.guild.id].kickLimits = num;

       let embed = new Discord.MessageEmbed()

.setColor("BLACK")

       .setDescription(`**✅Done kicks limit to  [${config[message.guild.id].kickLimits}]**`)

                         .setThumbnail("https://cdn.discordapp.com/icons/707034552987549788/a_f439b816d477aaeb4d3dd8eb7234da5c.gif?size=1024")

.setTimestamp();

    message.channel.send(embed)

       

       

       }

    if(message.content.startsWith(prefix + "limitroleDelete")) {

        if(!num) return message.channel.send("**→ | Supply a number !**");

        if(isNaN(num)) return message.channel.send("**→ | Supply a number !**");

        config[message.guild.id].roleDelLimit = num;

       let embed = new Discord.MessageEmbed()

.setColor("BLACK")

        .setDescription(`**✅Done Role Deleting limit to[${config[message.guild.id].roleDelLimit}]**`)

                         .setThumbnail("https://cdn.discordapp.com/icons/707034552987549788/a_f439b816d477aaeb4d3dd8eb7234da5c.gif?size=1024")

.setTimestamp();

    message.channel.send(embed) 

                      

       }

    if(message.content.startsWith(prefix + "limitroleCreate")) {

        if(!num) return message.channel.send("**→ | Supply a number !**");

        if(isNaN(num)) return message.channel.send("**→ | Supply a number !**");

        config[message.guild.id].roleCrLimits = num;

      let embed = new Discord. MessageEmbed()

      .setColor("BLACK")

        .setDescription(`**✅Done Role Creation limit to  [${config[message.guild.id].roleCrLimits}]**`)

                        .setThumbnail("https://cdn.discordapp.com/icons/707034552987549788/a_f439b816d477aaeb4d3dd8eb7234da5c.gif?size=1024")

.setTimestamp();

  message.channel.send(embed)

    

    }

  

    if(message.content.startsWith(prefix + "limitchannelDelete")) {

        if(!num) return message.channel.send("**→ | Supply a number !**");

        if(isNaN(num)) return message.channel.send("**→ | Supply a number !**");

        config[message.guild.id].chaDelLimit = num;

        message.channel.send(`**→ | Changed Channel Deleting limit to : ${config[message.guild.id].chaDelLimit}.**`)

    }

    if(message.content.startsWith(prefix + "limittime")) {

        if(!num) return message.channel.send("**→ | Supply a number !**");

        if(isNaN(num)) return message.channel.send("**→ | Supply a number !**");

        config[message.guild.id].time = num;//btrolie//btrolie

        message.channel.send(`**→ | Changed Times limit to : ${config[message.guild.id].time}.**`)

    }

    fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(e) {

        if(e) throw e;

    });

    fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {

        if(e) throw e;

        });

    }

});

client.on("channelDelete", async channel => {

    const entry1 = await channel.guild.fetchAuditLogs({

        type: 'CHANNEL_DELETE'

    }).then(audit => audit.entries.first())

    console.log(entry1.executor.username)

    const entry = entry1.executor//btrolie

    if (!config[channel.guild.id]) config[channel.guild.id] = {

        banLimit: 3,

        chaDelLimit: 3,

        roleDelLimit: 3,

        kickLimits: 3,

        roleCrLimits: 3//btrolie

    }

    if (!anti[channel.guild.id + entry.id]) {//btrolie

        anti[channel.guild.id + entry.id] = {

            actions: 1

        }

        setTimeout(() => {

            anti[channel.guild.id + entry.id].actions = "0"

        }, config[channel.guild.id].time * 1000)

    } else {

        anti[channel.guild.id + entry.id].actions = Math.floor(anti[channel.guild.id + entry.id].actions + 1)//btrolie

        console.log("TETS");

        setTimeout(() => {

            anti[channel.guild.id + entry.id].actions = "0"

        }, config[channel.guild.id].time * 1000)//btrolie

        if (anti[channel.guild.id + entry.id].actions >= config[channel.guild.id].chaDelLimit) {

            channel.guild.members.get(entry.id).ban().catch(e => channel.guild.owner.send(`**→ | ${entry.username} , Deleted many __Channles__.**`))

            anti[channel.guild.id + entry.id].actions = "0"

            fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {//btrolie

                if (e) throw e;

            });//btrolie

            fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {

                if (e) throw e;

            });

        }//btrolie

    }

    fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {

        if (e) throw e;

    });

    fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {

        if (e) throw e;

    });

});//btrolie

client.on("roleDelete", async channel => {

    const entry1 = await channel.guild.fetchAuditLogs({

        type: 'ROLE_DELETE'

    }).then(audit => audit.entries.first())

    console.log(entry1.executor.username)

    const entry = entry1.executor

    if (!config[channel.guild.id]) config[channel.guild.id] = {

        banLimit: 3,

        chaDelLimit: 3,//btrolie

        roleDelLimit: 3,

        kickLimits: 3,

        roleCrLimits: 3

    }

    if (!anti[channel.guild.id + entry.id]) {

        anti[channel.guild.id + entry.id] = {

            actions: 1

        }

        setTimeout(() => {

            anti[channel.guild.id + entry.id].actions = "0"

        }, config[channel.guild.id].time * 1000)

    } else {

        anti[channel.guild.id + entry.id].actions = Math.floor(anti[channel.guild.id + entry.id].actions + 1)

        console.log("TETS");

        setTimeout(() => {//btrolie

            anti[channel.guild.id + entry.id].actions = "0"

        }, config[channel.guild.id].time * 1000)

        if (anti[channel.guild.id + entry.id].actions >= config[channel.guild.id].roleDelLimit) {

            channel.guild.members.get(entry.id).ban().catch(e => channel.guild.owner.send(`**→ | ${entry.username} , Deleted many __Roles__!**`))

            anti[channel.guild.id + entry.id].actions = "0"

            fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {

                if (e) throw e;

            });

            fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {

                if (e) throw e;

            });

        }

    }//btrolie

    fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {

        if (e) throw e;

    });

    fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {

        if (e) throw e;

    });

});

client.on("roleCreate", async channel => {

    const entry1 = await channel.guild.fetchAuditLogs({

        type: 'ROLE_CREATE'

    }).then(audit => audit.entries.first())

    console.log(entry1.executor.username)

    const entry = entry1.executor

    if (!config[channel.guild.id]) config[channel.guild.id] = {

        banLimit: 3,

        chaDelLimit: 3,

        roleDelLimit: 3,//btrolie

        kickLimits: 3,

        roleCrLimits: 3

    }

    if (!anti[channel.guild.id + entry.id]) {

        anti[channel.guild.id + entry.id] = {

            actions: 1

        }

        setTimeout(() => {

            anti[channel.guild.id + entry.id].actions = "0"

        }, config[channel.guild.id].time * 1000)

    } else {

        anti[channel.guild.id + entry.id].actions = Math.floor(anti[channel.guild.id + entry.id].actions + 1)

        console.log("TETS");//btrolie

        setTimeout(() => {

            anti[channel.guild.id + entry.id].actions = "0"

        }, config[channel.guild.id].time * 1000)

        if (anti[channel.guild.id + entry.id].actions >= config[channel.guild.id].roleCrLimits) {

            channel.guild.members.get(entry.id).ban().catch(e => channel.guild.owner.send(`**→ | ${entry.username} , is creating many __Rooms__.**`))

            anti[channel.guild.id + entry.id].actions = "0"

            fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {

                if (e) throw e;

            });

            fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {

                if (e) throw e;

            });

        }

    }

    fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {

        if (e) throw e;

    });

    fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {

        if (e) throw e;

    });

});

client.on("message", msg => {

  if (msg.author.bot) return;

  if (msg.content.startsWith(prefix + "roles")) {

    let params = msg.content

      .slice(prefix.length)

      .trim()

      .split(/ +/g);

    if (!params[0])

      return msg.channel.send(

        `**syntax: ${prefix}role <all/humans/bots/@user> <name role/@role>`

      );

    if (params[0] === "all") {

      if (!params[1])

        return msg.channel.send(

          `**منشن الرتبة او اكتب اسمها \n syntax: ${prefix}role all <@role / name role>**`

        );

      let role =

        msg.mentions.roles.first() ||

        msg.guild.roles.find(r =>

          r.name.toLowerCase().startsWith(params[1].toLowerCase())

        );

      if (!role) return msg.channel.send(`**لم استطع ايجاد هذه الرتبة**`);

      msg.guild.members.forEach(m => {

        if (m.roles.some(r => r.id == role.id)) return;

        m.addRole(role);

      });

      msg.channel.send(`**done give all role @${role.name}**`);

    } else if (params[0] === "bots") {

      if (!params[1])

        return msg.channel.send(

          `**منشن الرتبة او اكتب اسمها \n syntax: ${prefix}role bots <@role / name role>**`

        );

      let role =

        msg.mentions.roles.first() ||

        msg.guild.roles.find(r =>

          r.name.toLowerCase().startsWith(params[1].toLowerCase())

        );

      if (!role) return msg.channel.send(`**لم استطع ايجاد هذه الرتبة**`);

      let bots = msg.guild.members.filter(m => m.user.bot);

      bots.forEach(bot => {

        if (bot.roles.some(r => r.id == role.id)) return;

        bot.addRole(role);

      });

      msg.channel.send(`**done give all bots role @${role.name}**`);

    } else if (params[0] === "humans") {

      if (!params[1])

        return msg.channel.send(

          `**منشن الرتبة او اكتب اسمها \n syntax: ${prefix}role humans <@role / name role>**`

        );

      let role =

        msg.mentions.roles.first() ||

        msg.guild.roles.find(r =>

          r.name.toLowerCase().startsWith(params[1].toLowerCase())

        );

      if (!role) return msg.channel.send(`**لم استطع ايجاد هذه الرتبة**`);

      let humans = msg.guild.members.filter(m => !m.user.bot);

      humans.forEach(h => {

        if (h.roles.some(r => r.id == role.id)) return;

        h.addRole(role);

      });

      msg.channel.send(`**done give all humans role @${role.name}**`);

    } else {

      if (!params[1])

        return msg.channel.send(

          `**منشن الرتبة او اكتب اسمها \n syntax: ${prefix}role @user <@role / name role>**`

        );

      let role =

        msg.mentions.roles.first() ||

        msg.guild.roles.find(r =>

          r.name.toLowerCase().startsWith(params[1].toLowerCase())

        );

      if (!role) return msg.channel.send(`**لم استطع ايجاد هذه الرتبة**`);

      let userID = params[0].slice(2, -1);

      let user = msg.guild.members.get(userID);

      if (!user) return;

      user.addRole(role);

      msg.channel.send(`**Done give ${user} @${role.name}**`);

    }

  }

});

client.on('message', message => {

if(message.content === prefix + 'topinvite') {

        let oi = message.mentions.users.first() ? message.mentions.users.first().id : message.author.id;

        let Tag = message.mentions.users.first() ? message.mentions.users.first().tag : message.author.tag;

        let Username = message.mentions.users.first() ? message.mentions.users.first().username : message.author.username;

        let Avatar = message.mentions.users.first() ? message.mentions.users.first().avatarURL : message.author.avatarURL;

       

        message.guild.fetchInvites().then(invs => {

            let member = client.guilds.get(message.guild.id).members.get(oi);

            let personalInvites = invs.filter(i => i.inviter.id === oi);

            let urll = invs.filter(i => i.inviter.id === oi);

            let link = urll.reduce((p , v) => v.url +` , Total de membros recrutados no convite: ${v.uses}.\n`+ p, `\nServidor: ${message.guild.name} \n `);

            let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);

            let inviteCode = personalInvites.reduce((p, v) => v.code);

            let possibleInvites = [['Total de membros recrutados:']];

            possibleInvites.push([inviteCount, inviteCode]);

            let user = message.mentions.users.first() || message.author;

            let mem = message.guild.member(user);

            let millisJoined = new Date().getTime() - mem.joinedAt.getTime();

            let daysJoined = millisJoined / 1000 / 60 / 60 / 24;

           

            var inviteInfo = new Discord.RichEmbed()

            .addField(`✅ **[invite members]** ${Username}`)

            .setThumbnail(client.user.avatarURL)

            .addField('**invites**', `** ** \`\`[Member ${Number(inviteCount)} ]\`\``)

            .addField('**joid at Server Member**', `** ** \`\`[ day ${daysJoined.toFixed(0)} ]\`\``)

            .addField('**link invite code**', ` ** **\`\`[${inviteCode || 'https://discord.ggZm2U6we'} ]\`\``)

            .setColor('#00000') 

            .setFooter(Tag, Avatar)

                             .setThumbnail("https://cdn.discordapp.com/icons/707034552987549788/a_f439b816d477aaeb4d3dd8eb7234da5c.gif?size=1024")

.setTimestamp();

            message.channel.send(inviteInfo);

    })

           

                                     

                                     

                                      };

});

client.on("message", async function (message) {

    if (!prefix) {

        var prefix = "-";

    }

    if (message.author.bot || !message.guild || !message.content.startsWith(prefix)) return;

    var args = message.content.slice(prefix.length).split(" ");

    var command = args[0];

    if (command =="server") {

        var { name, owner, id, memberCount, roles, channels, iconURL} = message.guild;

        var invite = await message.channel.createInvite();

        var embed = new Discord.MessageEmbed()

        .setDescription(`

> **∾ | serverOwner - <@${owner.user.id}>**

> **∾ | ServerID - ${id}**

> **∾ | Member - ${memberCount}**

> **∾ | Roles - ${roles.size}**

> **∾ | Channels - ${channels.size}**

> **∾ | InviteLink - [Invite](${invite})**

`)

.setAuthor(`${message.author.username}`, message.author.avatarURL)

.setTitle(` **${name} Server**`)

        .setTimestamp();

        if (iconURL) {

            embed.setThumbnail("https://media.discordapp.net/attachments/713592521011495002/716777682465194064/image0.gif?width=633&height=475")

        }

        message.channel.send({

            embed: embed

        });

    }

});

; 

client.on('message', Haider => {

  if(Haider.content === 'برب') {

    let embed = new Discord.MessageEmbed()

      .setColor("#00000")

    .setDescription(`

 <@${Haider.author.id}>  **لله معااك, تيت  **`)

    Haider.channel.send({embed:embed});

  }

});

   

// // // // // 

client.on("message", message => {// 

    if(!message.channel.guild) return;

if(message.content.startsWith(prefix+"serverinfo")) {// 

    if(message.author.bot) return;

    if(!message.channel.guild) return;

    if(message.guild.region === "brazil") {// 

    var br = "Brazil"

    var flag = ":flag_br:"

    } else if(message.guild.region === "eu-central") {// 

    var br = "Eu-Central"

    var flag = ":flag_eu:"

    } else if(message.guild.region === "hongkong") {// 

    var br = "Hongkong"

    var flag = ":flag_hk:"

    } else if(message.guild.region === "japan") {// 

    var br = "Japan"

    var flag = ":flag_jp:"

    } else if(message.guild.region === "russia") {// 

    var br = "Russia"

    var flag = ":flag_ru:"

    } else if(message.guild.region === "singapore") {// 

    var br = "Singapore"

    var flag = ":flag_sg:"

    } else if(message.guild.region === "southafrica") {// 

    var br = "Southafrica"

    var flag = ":flag_za:"

    } else if(message.guild.region === "sydney") {// 

    var br = "Sydney"

    var flag = ":flag_au:"

    } else if(message.guild.region === "us-central") {// 

    var br = "Us-Cetral"

    var flag = ":flag_us:"

    } else if(message.guild.region === "us-east") {// 

    var br = "Us-East"

    var flag = ":flag_us:"

    } else if(message.guild.region === "us-south") {// 

    var br = "Us-South"

    var flag = ":flag_us:"

    } else if(message.guild.region === "us-west") {// 

        var br = "Us-West"

        var flag = ":flag_us:"

    } else if(message.guild.region === "eu-west") {// 

    var br = "Eu-West"

    var flag = ":flag_eu:"

    } 

    var online = message.guild.members.cache.filter(m=>m.presence.status == 'online').size + message.guild.members.filter(m=>m.presence.status == 'dnd').size +  message.guild.members.filter(m=>m.presence.status == 'idle').size

    let embed = new Discord.MessageEmbed()

    .setColor("00000")

    .setThumbnail("https://media.discordapp.net/attachments/713592521011495002/716777682465194064/image0.gif?width=633&height=475")

    .setAuthor(message.guild.name, message.guild.iconURL)

    .setTitle(`**${message.guild.name} Information:**`)

    .setDescription("> **∾|Server Name** :`" + `${message.guild.name}` + "`\n" + "> **∾| Server ID** :`" + `${message.guild.id}` + "`\n" + 

    "> **∾| Server Region** :" + `${flag}\n` + 

    "> **∾| Server Owner** :" + `${message.guild.owner}` + "\n" + "\n" + "```md\n[Guild](Members)```" + "\n" + 

    "> **∾| `Total Bots** :`" + `${message.guild.members.cache.filter(member => member.user.bot).size}` + "`\n" + "> **∾|Total Members** :`" + `${message.guild.memberCount}` + "`\n" +

    "> **∾| Online Members** :`" + `${online}` + "`\n" + "> **∾|Offline Members** :`" + `${message.guild.members.cache.filter(m=>m.presence.status == 'offline').size}` + "`\n" + 

    "\n" + "```tex\n$ Guild Channels```" + "\n" + 

    "> **∾| Channels Size** :`" + `${message.guild.channels.cache.size}` + "`\n" + "> **∾| Text Channels** :`" + `${message.guild.channels.filter(m => m.type === 'text').size}` + "`\n" + "> **∾|Voice Channels** :`" + `${message.guild.channels.filter(m => m.type === 'voice').size}` + "`\n" +

    "> **∾| Afk Channel** :" + `${message.guild.afkChannel}` + "\n" + "> **∾| Afk Timeout** :`" + `${message.guild.afkTimeout} Second` + "`\n" + "> **∾|System Channel** :" + `${message.guild.systemChannel}` + "\n" +

    "\n" +"```fix\nMore Information```" + "\n" +

    "> **∾| Roles Size** :`" + `${message.guild.roles.cache.size}` + "`\n" +  "> **∾|Emojis Size** :`" + `${message.guild.emojis.size}` + "`\n" + 

    "> **∾| Created At** :`" + `${message.guild.createdAt}` + "`\n" + "> **∾|Verified** :`" + `${message.guild.verified}` + "`\n" +"> **∾|VerificationLevel** :`" + `${message.guild.verificationLevel}` + "`\n")

    .setFooter(message.author.tag, message.author.avatarURL())

    message.channel.send(embed)

    

}

}) //

client.on('message', message => {

if(message.content.startsWith(prefix + 'bot')) {

var ping = `${Date.now() - message.createdTimestamp}`

let info = new Discord.MessageEmbed()

.setColor('#00000')

.setAuthor(`<${message.author.username}>`, message.author.avatarURL)

.setDescription(`

> **∾ | Bot ping: \`${ping}\`**

> **∾ | Servers Size: \`${client.guilds.cache.size}\`**

> **∾ | Bot Prefix: \`${prefix}\`**

> **∾ | Bot Owner:  <@586582627822338048>**

> **∾ | Users Bot:   \`${client.users.cache.size}\`**`) // ا

.setTitle(` **Infinity Bot Information**`)

.setThumbnail("https://media.discordapp.net/attachments/713592521011495002/716777682465194064/image0.gif?width=633&height=475")

.setTitle(`Server Support`)

.setURL("https://discord.gg/p2AkyVM" )

.setFooter(`${client.user.username}`, client.user.avatarURL())

message.channel.send(info)

}

});

client.on("message", message => {

  if (message.content.startsWith("رابط")) {

    message.channel

      .createInvite({

        thing: true,

        maxUses: 5,

        maxAge: 86400

      })

      .then(invite => message.author.send(invite.url));

    const embed = new Discord.MessageEmbed("Hai Der")

      .setColor("#00000")

    .setThumbnail("https://media.discordapp.net/attachments/713592521011495002/716777682465194064/image0.gif?width=633&height=475")

      .setDescription(

        "**    <:yes:712381578034020433> تم ارسال الرابط على الخاص   **"

      )

      .setAuthor(client.user.username, client.user.avatarURL)

      .setFooter(message.author.tag);

    message.channel.sendEmbed(embed).then(message => {

      message.delete(10000);

    });

    const Embed11 = new Discord.RichEmbed().setColor("RANDOM")

    .setThumbnail("https://media.discordapp.net/attachments/713592521011495002/716777682465194064/image0.gif?width=633&height=475")

          .setAuthor(client.user.username, client.user.avatarURL)

      .setDescription(`** مدة الرابط : يوم 

 __عدد استخدامات الرابط : __5 **`);

    message.author.sendEmbed(Embed11);

  }

});

client.on('message', message => {

  if(!message.channel.guild) return;

if (message.content.startsWith('-ping')) {

if(!message.channel.guild) return;

var msg = `${Date.now() - message.createdTimestamp}`

var api = `${Math.round(client.ws.ping)}`

if (message.author.bot) return;

let embed = new Discord.MessageEmbed()

.setAuthor(message.author.username,message.author.avatarURL)

.setColor('#00000')

.addField('> ∾ |**Ping Bot Infinity:**',api +"ms 📉 ")

.setThumbnail("https://cdn.discordapp.com/icons/707034552987549788/a_f439b816d477aaeb4d3dd8eb7234da5c.gif?size=1024")

.setTimestamp();

message.channel.send({embed:embed});

}

});

 

 

function clean(text) {

  if (typeof (text) === "string")

    return text.replace(/`/g, "`" + String.fromCharCode(8203))

    .replace(/@/g, "@" + String.fromCharCode(8203));

  else

    return text;

}

client.on('message', message => {

    if (message.content === "-invite") {

             if (message.author.bot) return

    let embed = new Discord.MessageEmbed()

.setThumbnail(message.author.avatarURL())

 .setFooter("Infinity Bot Team")

.setTitle(' > **  ∾|IInvite Bot**')

.setURL("https://discord.com/oauth2/authorize?client_id=718599043206610954&permissions=8&scope=bot")

.setColor('#00000')

.setThumbnail("https://media.discordapp.net/attachments/713592521011495002/716777682465194064/image0.gif?width=633&height=475")

.addField('> **  ∾|To See Bot Info Use `-bot`**', '> **Infinity Team**')

.setTimestamp();

 message.channel.send(embed);

   }

});

/// Role Membe

client.on ("guildMemberAdd", member => {

  

   var role = member.guild.roles.find ("name", "∾ | Member");

   member.addRole (role);

  

})

client.on('message', message => {

    if(message.content == prefix + "users") {

    const mkcode = new Discord.MessageEmbed()

    

    .setThumbnail("https://media.discordapp.net/attachments/713592521011495002/716777682465194064/image0.gif?width=633&height=475")

    .setFooter(`${client.user.username}`, client.user.avatarURL())

    .setColor('#00000')

    .addField(`» All Users Count`,`

    >  ** ∾ | Users & Bots:   ${client.users.cache.size}**

    >  ** ∾ | Users: ${client.users.cache.filter(m =>!m.bot).size} ** 

    >  ** ∾ | Bots:  ${client.users.cache.filter(m=>m.bot).size}**  ` , true) 

    .addField(`» All Users Status`,`

   >   ** ∾ | Online: ${client.users.cache.filter(m=>m.presence.status == 'online').size}** 

   >   ** ∾ | Offline: ${client.users.cache.filter(m=>m.presence.status == 'offline').size}** 

   >   ** ∾ | Dnd:${client.users.cache.filter(m=>m.presence.status == 'dnd').size}** 

   >   ** ∾ | Idle: ${client.users.cache.filter(m=>m.presence.status == 'idle').size}**  `, true)

            .setTimestamp();

        message.channel.send(`- <@${client.user.id}> **#Users Informations**\n- **#Requested by** ${message.author}`,{embed: mkcode});

        }

});

 client.on('ready', () => {

  client.user.setPresence('idle')

    client.user.setActivity(`INFINITY BOT - SOON`)

	console.log(`Logged In As ${client.user.tag}!`);	console.log('Ready! Go,');

	console.log('By Developer Hai Der')

 });

client.on('message' , async message =>{

if(message.content.toLowerCase().startsWith(prefix + "clear")){

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.sendMessage('لا تمتلك صلاحية MANAGE MESSAGES');

const mes_count = message.content.split(/ +/).slice(1).shift();

await message.channel.bulkDelete('99').catch(WoW =>{});

let embed = new Discord.MessageEmbed()

   .setAuthor(message.author.username)

.setAuthor(`${message.author.username}`, message.author.avatarURL())

   .setColor('#00000')

   .setDescription(`  **تم مسح الشات**,  <:yes:712381578034020433> `)

  .setThumbnail("https://media.discordapp.net/attachments/713592521011495002/716777682465194064/image0.gif?width=633&height=475")

 .setFooter(`${client.user.username}`, client.user.avatarURL())

   message.channel.send(embed).then(message => {message.delete(5000)})

  {};

} 

});

          

             

 

 

 

      

client.on('message', message => {

    const prefix = '-'

var args = message.content.split(" ").slice(1);    

if(message.content.startsWith(prefix + 'info')) {

var year = message.author.createdAt.getFullYear()

var month = message.author.createdAt.getMonth()

var day = message.author.createdAt.getDate()

var men = message.mentions.users.first();  

let args = message.content.split(' ').slice(1).join(' ');

if (args == '') {

var z = message.author;

}else {

var z = message.mentions.users.first();

}

let d = z.createdAt;          

let n = d.toLocaleString();   

let x;                       

let y;                        

let embed = new Discord.MessageEmbed()

.setAuthor(`${message.author.username}`, message.author.avatarURL())

.setColor("> **∾| #00000**")

.addField('> **∾| Name **',`**<@` + `${z.id}` + `>**`, true)

.addField('> **∾| ID **', "**"+ `${z.id}` +"**",true)

.addField('> **∾| Playing **','**'+y+'**' , true)

.addField('> **∾| Discrim **',"**#" +  `${z.discriminator}**`,true)

.addField('> **∾| Created At**', message.author.createdAt.toLocaleString())

.addField("> **∾| Joined At**", message.member.joinedAt.toLocaleString())    

.setThumbnail("https://cdn.discordapp.com/icons/707034552987549788/a_f439b816d477aaeb4d3dd8eb7234da5c.gif?size=1024")

 .setFooter(`${client.user.username}`, client.user.avatarURL())

message.channel.send(embed);

    if (!message) return message.reply('** **').catch(console.error);

}

});

client.on('message',message =>{

  var command = message.content.toLowerCase().split(" ")[0];

    var args = message.content.toLowerCase().split(" ");

    var userM = message.mentions.users.first()

    if(command == prefix + 'unban') {

        if(!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send(':no_entry: | You dont have **BAN_MEMBERS** Permission!');

        if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.channel.send(':no_entry: | I dont have **BAN_MEMBERS** Permission!');

        if(!args[1]) return  message.channel.send(':information_source:  `#kick <@id>` يجب تحديد شخص');

        if(args[1].length < 16) return message.reply(':no_entry: | This ID is not id user!');

        message.guild.fetchBans().then(bans => {

            var Found = bans.find(m => m.id === args[1]);

            if(!Found) return message.channel.send(`:no_entry: | <@${message.author.id}> This preson not have any ban from this server! :unlock:`);

            message.guild.unban(args[1]);

            message.channel.send(`:white_check_mark: Successfully \`\`UNBANNED\`\` <@${args[1]}> From the server!`);

            }

        )}

      })

client.on('message', message => {

if(message.content.startsWith(prefix + 'move all')) {

 if (!message.member.hasPermission("MOVE_MEMBERS")) return message.channel.send('**لايوجد لديك صلاحية سحب الأعضاء**');

   if(!message.guild.member(client.user).hasPermission("MOVE_MEMBERS")) return message.reply("**لايوجد لدي صلاحية السحب**");

if (message.member.voiceChannel == null) return message.channel.send(`**الرجاء الدخول لروم صوتي**`)

 var author = message.member.voiceChannelID;

 var m = message.guild.members.filter(m=>m.voiceChannel)

 message.guild.members.filter(m=>m.voiceChannel).forEach(m => {

 m.setVoiceChannel(author)

 })

 message.channel.send(`**تم سحب جميع الأعضاء ال الروم**`)

 }

   });

    

client.on('message', message => {

  if (message.author.x5bz) return;

  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];

  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "kick") {

               if(!message.channel.guild) return message.reply('** This command only for servers**');

  if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("**You Don't Have ` KICK_MEMBERS ` Permission**");

  if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("**I Don't Have ` KICK_MEMBERS ` Permission**");

  let user = message.mentions.users.first();

  let reason = message.content.split(" ").slice(2).join(" ");

  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");

  if(!reason) return message.reply ("**اكتب سبب الطرد**");

  if (!message.guild.member(user)

  .kickable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");

  message.guild.member(user).kick();

  const kickembed = new Discord.RichEmbed()

  .setAuthor(`KICKED!`, user.displayAvatarURL)

  .setColor("RANDOM")

  .setTimestamp()

  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')

  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')

  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')

  message.channel.send({

    embed : kickembed

  })

}

});

    

   client.on('message',function(message) {

  if (message.author.bot) return;

                  if(!message.channel.guild) return;

                    if (message.content === prefix + "members status") {

 const embed = new Discord.MessageEmbed()

    .setDescription(`**Members info :sparkles:

🔵 Members OnLine:  ${message.guild.members.filter(m=>m.presence.status == 'online').size}

🔴 Members DND:      ${message.guild.members.filter(m=>m.presence.status == 'dnd').size}

🔶 Members Idle:    ${message.guild.members.filter(m=>m.presence.status == 'idle').size}

⚫ Members All:   ${message.guild.memberCount - message.guild.members.filter(m=>m.user.bot).size}

🤖 Bot All ${message.guild.members.filter(m=>m.user.bot).size} **`)

 .setColor("#00000")

 .setThumbnail("https://cdn.discordapp.com/icons/707034552987549788/a_f439b816d477aaeb4d3dd8eb7234da5c.gif?size=1024")

  .setTimestamp();

 message.channel.send({embed});

    }

      }); 

client.on('message', message => {

if(!message.channel.guild) return;

if(message.content.startsWith(prefix + 'move')) {

 if (message.member.hasPermission("MOVE_MEMBERS")) {

 if (message.mentions.users.size === 0) {

 return message.channel.send("``لاستخدام الأمر اكتب هذه الأمر : " +prefix+ "move [USER]``")

}

if (message.member.voiceChannel != null) {

 if (message.mentions.members.first().voiceChannel != null) {

 var authorchannel = message.member.voiceChannelID;

 var usermentioned = message.mentions.members.first().id;

var embed = new Discord.RichEmbed()

 .setTitle("Succes!")

 .setColor("#000000")

 .setDescription(`لقد قمت بسحب <@${usermentioned}> الى الروم الصوتي الخاص بك✅ `)

var embed = new Discord.RichEmbed()

.setTitle(`You are Moved in ${message.guild.name}`)

 .setColor("RANDOM")

.setDescription(`**<@${message.author.id}> Moved You To His Channel!\nServer --> ${message.guild.name}**`)

 message.guild.members.get(usermentioned).setVoiceChannel(authorchannel).then(m => message.channel.send(embed))

message.guild.members.get(usermentioned).send(embed)

} else {

message.channel.send("``لا تستطيع سحب "+ message.mentions.members.first() +" `يجب ان يكون هذه العضو في روم صوتي`")

}

} else {

 message.channel.send("**``يجب ان تكون في روم صوتي لكي تقوم بسحب العضو أليك``**")

}

} else {

message.react("❌")

 }}});

client.on('message', message => {

  if (message.author.bot) return;

  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];

  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command === "say") {

if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));

  if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`' );

          message.delete()

    message.channel.sendMessage(args.join(" "))

  }

  

 

if (command == "embed") {

if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));

  if(!message.member.hasPermission('MANAGE_MESSAGES')) return      message.channel.send('**للأسف لا تمتلك صلاحية** `MANAGE_MESSAGES`' );

    let say = new Discord.RichEmbed()

    .setDescription(args.join("  "))

    .setColor("#00000")

    message.channel.sendEmbed(say);

    message.delete();

    

  }

});

client.on("message", message => {

  if (message.author.bot) return;

   if (message.content === prefix + "help") {

    

          

        

    

 let embed = new Discord.MessageEmbed()

.setColor("#00000")

.setDescription(` **__Hai Der Bot__**

\`\`\`ADMIN ORDER\`\`\`

**

`)

                  .setThumbnail("https://cdn.discordapp.com/icons/707034552987549788/a_f439b816d477aaeb4d3dd8eb7234da5c.gif?size=1024")

.setTimestamp()

.setImage(message.author.avatarURL())

    message.author.send(embed)

    .then(e => {

          message.react("✅");

        })

  }

});

 

client.on('message', async message =>{

  if (message.author.ali) return;

  let alim = message.mentions.users.first();

  if (!message.content.startsWith(prefix)) return;

  if(!message.channel.guild) return message.channel.send('**This Command Only For Servers ! **')

  if(!message.member.hasPermission('MANAGE_ROLES'));

  if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply("**I Don't Have MANAGE_ROLES Permission**")

  var command = message.content.split(" ")[0];

  command = command.slice(prefix.length);

  var args = message.content.split(" ").slice(1);

    if(command == "mute") {

      let muteali = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

      if(!muteali) return message.channel.send("**Mention User $mute @ali**")

      if(muteali.hasPermission("MANAGE_MESSAGES"))return      message.channel.send('**My role is low give me a higher role to mute this user***');

      let muterole = message.guild.roles.find(`name`, "Muted");

  

      if(!muterole){

        try{

          muterole = await message.guild.createRole({

            name: "Muted",

            color: "#000000",

            permissions:[]

          })

          message.guild.channels.forEach(async (channel, id) => {

            await channel.overwritePermissions(muterole, {

              SEND_MESSAGES: false,

              ADD_REACTIONS: false

            });

          });

        }catch(e){

          console.log(e.stack);

        }

      }

      await(muteali.addRole(muterole.id));

      message.channel.send(`**@${alim.username} Has been muted! **`);

        message.delete();

    }

  }); //By Ali

/*Unmute By Ali */

      client.on('message', async message => {

        let mention = message.mentions.members.first();

      let command = message.content.split(" ")[0];

         command = command.slice(prefix.length);

        let args = message.content.split(" ").slice(1);	 

      if(command === `unmute`) {2

       if(!message.channel.guild) return message.channel.send('**This Command Only For Servers ! **')

        if(!message.member.hasPermission("MUTE_MEMBERS")) return message.channel.sendMessage('**You Dont Have MANAGE_ROLES Permission**')

      if(!message.guild.member(client.user).hasPermission("MUTE_MEMBERS")) return message.reply("**I Don't Have MANAGE_ROLES Permission**")

      

        let ali = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);

           if(!ali) return message.channel.send('**Mention User $unmute @user*').then(msg => {

            msg.delete(100000);

            message.delete(1000000); 

          });

      

        let role = message.guild.roles.find (r => r.name === "Muted");

        

        if(!role || !ali.roles.has(role.id)) return message.channel.sendMessage(`**${mention.user.username} Is Not Muted**`)

      

        await ali.removeRole(role) 

        message.channel.sendMessage(`**${mention.user.username}  Unmuted! **`);      

        return;

      

        }

      

                }); 

/* Unban By Ali */

client.on('message',message =>{

  var command = message.content.toLowerCase().split(" ")[0];

    var args = message.content.toLowerCase().split(" ");

    var user = message.mentions.users.first()

    if(command == prefix + 'unban') {

        if(!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send("**You Don't Have BAN_MEMBERS Permission**");

        if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have BAN_MEMBERS Permission**");

        if(!args[1]) return  message.channel.send('**Mention User Or Type ID**');

        if(args[1].length < 16) return message.reply('** This ID is not id user!**');

        message.guild.fetchBans().then(bans => {

            var Found = bans.find(m => m.id === args[1]);

            if(!Found) return message.channel.send(`**I Can't Find <@${args[1]}> In The Ban List**`);

            message.guild.unban(args[1]);

            message.channel.send(`**<@${args[1]}> Unbanned!**`);

            }

        )}

      }) 

  client.on('message', message => {

	var prefix = "-"

  if (message.author.Infinity) return;

  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];

  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "ban") {

               if(!message.channel.guild) return message.reply('** This Command Only For Servers**');

         

  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**You Don't Have BAN_MEMBERS Permission**");

  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have BAN_MEMBERS Permission**");

  let user = message.mentions.users.first();

  let reason = message.content.split(" ").slice(2).join(" ");

  if (message.mentions.users.size < 1) return message.reply("**Mention User **");

  if(!reason) return message.reply ("**Type Reason **");

  if (!message.guild.member(user)

  .bannable) return message.reply("**My role is low give me a higher role to ban this user**");

  message.guild.member(user).ban(7, user);

  message.channel.send(`**${user.username} Banned!**`)

}

});

client.on('message', async message =>{

  if (message.author.Infinity) return;

  let alim = message.mentions.users.first();

  if (!message.content.startsWith(prefix)) return;

  if(!message.channel.guild) return message.channel.send('**This Command Only For Servers ! **')

  if(!message.member.hasPermission('MANAGE_ROLES'));

  if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply("**I Don't Have MANAGE_ROLES Permission**")

  var command = message.content.split(" ")[0];

  command = command.slice(prefix.length);

  var args = message.content.split(" ").slice(1);

    if(command == "mute") {

      let muteali = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

      if(!muteali) return message.channel.send("**Mention User $mute @ali**")

      if(muteali.hasPermission("MANAGE_MESSAGES"))return      message.channel.send('**My role is low give me a higher role to mute this user***');

      let muterole = message.guild.roles.find(`name`, "Muted");

  

      if(!muterole){

        try{

          muterole = await message.guild.createRole({

            name: "Infinity Mute",

            color: "#000000",

            permissions:[]

          })

          message.guild.channels.forEach(async (channel, id) => {

            await channel.overwritePermissions(muterole, {

              SEND_MESSAGES: false,

              ADD_REACTIONS: false

            });

          });

        }catch(e){

          console.log(e.stack);

        }

      }

      await(muteali.addRole(muterole.id));

      message.channel.send(`**@${alim.username} Has been muted! **`);

        message.delete();

    }

  }); 

      client.on('message', async message => {

        let mention = message.mentions.members.first();

      let command = message.content.split(" ")[0];

         command = command.slice(prefix.length);

        let args = message.content.split(" ").slice(1);	 

      if(command === `unmute`) {2

       if(!message.channel.guild) return message.channel.send('**This Command Only For Servers ! **')

        if(!message.member.hasPermission("MUTE_MEMBERS")) return message.channel.sendMessage('**You Dont Have MANAGE_ROLES Permission**')

      if(!message.guild.member(client.user).hasPermission("MUTE_MEMBERS")) return message.reply("**I Don't Have MANAGE_ROLES Permission**")

      

        let ali = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);

           if(!ali) return message.channel.send('**Mention User $unmute @ali**').then(msg => {

            msg.delete(100000);

            message.delete(1000000); 

          });

      

        let role = message.guild.roles.find (r => r.name === "Muted");

        

        if(!role || !ali.roles.has(role.id)) return message.channel.sendMessage(`**${mention.user.username} Is Not Muted**`)

      

        await ali.removeRole(role) 

        message.channel.sendMessage(`**${mention.user.username}  Unmuted! **`);      

        return;

      

        }

      

                });

client.login(process. env.BOT_TOKEN) ;
