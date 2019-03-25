const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '-'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`Jokrs Codes/Type -help`,"http://twitch.tv/S-F")
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});


client.on("message", message => {

            if (message.content.startsWith(prefix + "obc")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` : عدد الاعضاء المستلمين`); 
 message.delete(); 
};     
});


client.on('message', message => {
    if(!message.channel.guild) return;
let args = message.content.split(' ').slice(1).join(' ');
if (message.content.startsWith(prefix + "obc")){
if(!message.author.id === '484361588766146560') return;
message.channel.sendMessage('جار ارسال الرسالة |:white_check_mark:')
client.users.forEach(m =>{
m.sendMessage(args)
})
}
});


client.on('message',async message => {
  if(message.channel.type === 'dm') return;
  if(message.author.bot) return;
  let args = message.content.split(' ');
  if(args[0] === `${prefix}bc`) {
  if(!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send('- **أنت لا تملك الصلاحيات اللازمة لأستخدام هذا الأمر**');
  if(!args[1]) return message.channel.send('- **يجب عليك كتابة الرسالة بعد الأمر**');

  let msgCount = 0;
  let errorCount = 0;
  let successCount = 0;
    let status;
    if(msgCount === message.guild.memberCount) {
        status = 'Sent';
    } else if(msgCount !== message.guild.memberCount) {
        status = 'Sending';
    }
  message.channel.send(`**- [ 🔖 :: ${msgCount} ] ・عدد الرسائل المرسلة**\n**- [ 📥 :: ${successCount} ] ・عدد الرسائل المستلمة**\n**- [ 📤 :: ${errorCount} ]・عدد الرسائل الغير مستلمة\n- [ ▫ :: ${status} ]・حالة الرسائل المرسلة**`).then(msg => {
    message.guild.members.forEach(g => {
      g.send(args.slice(1).join(' ')).then(() => {
        successCount++;
        msgCount++;
                if(!msg) return;
        msg.edit(`**- [ 🔖 :: ${msgCount} ] ・عدد الرسائل المرسلة**\n**- [ 📥 :: ${successCount} ] ・عدد الرسائل المستلمة**\n**- [ 📤 :: ${errorCount} ]・عدد الرسائل الغير مستلمة\n- [ ▫ :: ${status} ]・حالة الرسائل المرسل**`);
      }).catch(e => {
        errorCount++;
        msgCount++;
                if(!msg) return;
        msg.edit(`**- [ 🔖 :: ${msgCount} ] ・عدد الرسائل المرسلة**\n**- [ 📥 :: ${successCount} ] ・عدد الرسائل المستلمة**\n**- [ 📤 :: ${errorCount} ]・عدد الرسائل الغير مستلمة\n- [ ▫ :: ${status} ]・حالة الرسائل المرسل**`);
      });
    });
  });
}
});


client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help") {
		 message.channel.send('**The Message Was Sent On Private**');
            
	
		 


 message.author.sendMessage(`
 **
╔[❖════════════❖]╗
        Prefix = ' - '
╚[❖════════════❖]╝

╔[❖════════════❖]╗
            Commands
╚[❖════════════❖]╝

[❖═════════════════════════════❖]
        Why Jokars BRoadCast
1- :rocket: سرعة اتصال ممتازة
2- :beginner: سهل الاستخدام
3- :warning: صيانه يوميه
4- :money_with_wings: مجاني بالكامل
5- :shield: يحتوي على مانع اختراق سيرفرات للحفاظ على امان سيرفرك
6- يحتوي علي جميع اوامر البرودكاست التي تحتاجها
7- يعمل علي خوادم مستقلة
[❖═════════════════════════════❖]

 ❖ ${prefix}bc <message> ➾ Message All Members In Server

 ❖ ${prefix}obc <message> ➾ Message To Online Members
 
 ❖ ${prefix}inv ➾ Link For Invite Me To Your Server
 
 ❖ ${prefix}ebc <message>  ➾ Embed Broadcast
 
 ❖ ${prefix}rbc <message> ➾ Message To Who Have Role
 
 ❖ ${prefix}bot ➾ Info Bot
 
 ❖ ${prefix}support ➾ Invite To Server Made Me
 
 ❖ ${prefix}set ➾ Create Rainbow Role
 
 ❖ ${prefix}nicks ➾ Change All Nicks
 
 ❖ ${prefix}vo  ➾ Made Voice Online Room
 
 ❖ ${prefix}baned ➾ Show How Many Banned On Your Server
 
 ❖ ${prefix}link ➾ Get Any Bot Invite Link
 
 ❖ ${prefix}hacklog ➾ Create Channel To Get Hack Logs

==================================================================

Support server : https"//discord.gg/xyp59ac

==================================================================

Server Made Me : Jokars Shop

================================================================== 

<@484361588766146560> OWNER {TheJokar#8422}

==================================================================

I Am In ${client.guilds.size} Servers

==================================================================

virson:0.0.2

==================================================================


`);

    }
});



client.on("message",(message) => {
    if(message.content.startsWith(prefix + "haklog")) {
        if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply("** You Don't Have Permission `Manage channels` To Do This Command");
        message.guild.createChannel("hack-log").then(c => {
            c.setPosition(1);
            temp[message.guild.id].channel = c.id
            message.channel.send("** Done I Created Channel Named hack-log To Start The AntiHack**");
        });
	       }})
var guilds = {};
client.on('guildBanAdd', function(guild) {
            const rebellog = client.channels.find("name", "hack-log"),
            Onumber = 3,
  Otime = 10000
guild.fetchAuditLogs({
    type: 22
}).then(audit => {
    let banner = audit.entries.map(banner => banner.executor.id)
    let bans = guilds[guild.id + banner].bans || 0 
    guilds[guild.id + banner] = {
        bans: 0
    }
      bans[guilds.id].bans += 1; 
if(guilds[guild.id + banner].bans >= Onumber) {
try {
let roles = guild.members.get(banner).roles.array();
guild.members.get(banner).removeRoles(roles);
  guild.guild.member(banner).kick();

} catch (error) {
console.log(error)
try {
guild.members.get(banner).ban();
  rebellog.send(`<@!${banner.id}>
حآول العبث بالسيرفر @everyone`);
guild.owner.send(`<@!${banner.id}>
حآول العبث بالسيرفر ${guild.name}`)
    setTimeout(() => {
 guilds[guild.id].bans = 0;
  },Otime)
} catch (error) {
console.log(error)
}
}
}
})
});
 let channelc = {};
  client.on('channelCreate', async (channel) => {
  const rebellog = client.channels.find("name", "hack-log"),
  Oguild = channel.guild,
  Onumber = 3,
  Otime = 10000;
  const audit = await channel.guild.fetchAuditLogs({limit: 1});
  const channelcreate = audit.entries.first().executor;
  console.log(` A ${channel.type} Channel called ${channel.name} was Created By ${channelcreate.tag}`);
   if(!channelc[channelcreate.id]) {
    channelc[channelcreate.id] = {
    created : 0
     }
 }
 channelc[channelcreate.id].created += 1;
 if(channelc[channelcreate.id].created >= Onumber ) {
    Oguild.members.get(channelcreate.id).kick();
rebellog.send(`<@!${channelcreate.id}>
حآول العبث بالسيرفر @everyone`);
channel.guild.owner.send(`<@!${channelcreate.id}>
حآول العبث بالسيرفر ${channel.guild.name}`)
}
  setTimeout(() => {
 channelc[channelcreate.id].created = 0;
  },Otime)
  });

let channelr = {};
  client.on('channelDelete', async (channel) => {
  const rebellog = client.channels.find("name", "Hack-Log"),
  Oguild = channel.guild,
  Onumber = 3,
  Otime = 10000;
  const audit = await channel.guild.fetchAuditLogs({limit: 1});
  const channelremover = audit.entries.first().executor;
  console.log(` A ${channel.type} Channel called ${channel.name} was deleted By ${channelremover.tag}`);
   if(!channelr[channelremover.id]) {
    channelr[channelremover.id] = {
    deleted : 0
     }
 }
 channelr[channelremover.id].deleted += 1;
 if(channelr[channelremover.id].deleted >= Onumber ) {
  Oguild.guild.member(channelremover).kick();
rebellog.send(`<@!${channelremover.id}>
حآول العبث بالسيرفر @everyone`);
channel.guild.owner.send(`<@!${channelremover.id}>
حآول العبث بالسيرفر ${channel.guild.name}`)
}
  setTimeout(() => {
 channelr[channelremover.id].deleted = 0;
  },Otime)
  });



client.on('ready', () => {
   console.log(`----------------`);
      console.log(`By TheJokar`);
        console.log(`---------------`);
      console.log(`ON ${client.guilds.size} Servers `);
    console.log(`---------------`);
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setGame(`Help ${client.users.size} Member`,"http://twitch.tv/y04zgamer")
   client.user.setStatus("dnd")
});




client.on('ready', () => {
   console.log(`----------------`);
      console.log(`To Jokars Shop`);
        console.log(`---------------`);
      console.log(`ON ${client.guilds.size} Servers `);
    console.log(`---------------`);
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setGame(`Type ${prefix}help`,"http://twitch.tv/y04zgamer")
   client.user.setStatus("dnd")
});




client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Plase HElp ME`);
        console.log(`---------------`);
      console.log(`ON ${client.guilds.size} Servers `);
    console.log(`---------------`);
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setGame(`In ${client.guilds.size} Server`,"http://twitch.tv/y04zgamer")
   client.user.setStatus("dnd")
});




client.on('guildMemberAdd', member => {
  member.addRole('name', "member")
});



client.on("message", async message => {
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    if(message.author.bot) return;
    if(message.content.indexOf(prefix) !== 0) return;

    if (command == "leave") {
        // if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("**Sorry, you don't have permission to use this!**");
        
 
        if(message.author.id != "484361588766146560") return message.reply("**Sorry, you don't have permission to use this!**");/* لو سمحت حط الايدي حقك*/

        
        if(!args[0] || args[1]) return message.reply(`**${prefix}leave <guild_id>**`);
        let definedGuild = client.guilds.get(args[0])
        if(!definedGuild) return message.reply(`** 404 : invalid guild id or this guild delted**`);
        client.guilds.get(args[0]).leave()
        .catch(error => { return message.reply(error.message) })
    }     
})


client.on('message', msg => {
    if(msg.content.startsWith(prefix + "link")) {
    if(msg.channel.type === 'dm') return;
const user = msg.mentions.users.first();
if(!user) return msg.channel.send('``' + '**قم بتحديد بوت**' + '``')
if(!user.bot) return msg.reply('\`منشن بوت\`');
msg.channel.send(`**Bot InviteURL : ** https://discordapp.com/oauth2/authorize?client_id=${user.id}&scope=bot&permissions=384064`)
    }
});


var KinG66S = {};
client.on('guildMemberRemove', member => {
KinG66S[member.id] = {roles: member.roles.array()};
});
 
client.on('guildMemberAdd', member => {
if(!KinG66S[member.user.id]) return;
console.log(KinG66S[member.user.id].roles.length);
for(let i = 0; i < KinG66S[member.user.id].roles.length + 1; i++) 
member.addRole(KinG66S[member.user.id].roles.shift());
}
});



client.on('guildCreate', guild => {
client.channels.get("ROOM ID").send(`:white_check_mark: **${client.user.tag} دخل سيرفر جديد
Server name: __${guild.name}__
Server owner: __${guild.owner}__
Server id: __${guild.id}__ 
Server Count: __${guild.memberCount}__**`)
});
client.on('guildDelete', guild => {
  client.channels.get("ROOM ID").send(`:negative_squared_cross_mark: **${client.user.tag} طلع من سيرفر
Server name: __${guild.name}__
Server owner: __${guild.owner}__
Server id: __${guild.id}__ 
Server Count: __${guild.memberCount}__**`)
});



client.on('message', message => {
    if (message.content.startsWith(prefix + "baned")) {
        message.guild.fetchBans()
        .then(bans => message.channel.send(`:small_orange_diamond: **Server Ban List :** ${bans.size} `))
  .catch(console.error);
}
});



client.on('message',async Epic => {
  var prefix = "+" ;
  if(Epic.content.startsWith(prefix + "vo")) {
  if(!Epic.guild.member(Epic.author).hasPermissions('MANAGE_CHANNELS')) return Epic.reply(':x: **I Dont Have Permissions**');
  if(!Epic.guild.member(client.user).hasPermissions(['MANAGE_CHANNELS','MANAGE_ROLES_OR_PERMISSIONS'])) return Epic.reply(':x: **You Dont Have Permissions**');
  Epic.guild.createChannel(`Voice Online : [ ${Epic.guild.members.filter(m => m.voiceChannel).size} ]` , 'voice').then(c => {
    console.log(`Voice Online Is Activation In ${Epic.guild.name}`);
    c.overwritePermissions(Epic.guild.id, {
      CONNECT: false,
      SPEAK: false
    });
    setInterval(() => {
      c.setName(`Voice Online :  ${Epic.guild.members.filter(m => m.voiceChannel).size} .`)
    },1000);
  });
  }
});




const dot = new Discord.Client();
client.on('message', message => {
    



client.on('message' , async (message) => {
       if(message.content.startsWith(`<@${client.user.id}>`)) {
              
 let responses = [
        'كيف يمكن اساعدك',
        'مرحبا',
        'لا تزعجني',
        'ايش تبي ',
        '${bans.size} تبي تكون منهم يا روح امك',
        'كيفك',
        '?',
        'جرب -help'
    ]
    
    // Fetch a random item from the array
    let fetched = responses[Math.floor(Math.random() * responses.length)];
   message.reply(fetched)
       }
  
});




client.on('message', async message => {
            if(message.content.includes('discord.gg')){ 
                if(message.member.hasPermission("MANAGE_GUILD")) return;
        if(!message.channel.guild) return;
        message.delete()
          var command = message.content.split(" ")[0];
    let muterole = message.guild.roles.find(`name`, "Muted");
    if(!muterole){
      try{
        muterole = await message.guild.createRole({
          name: "Muted",
          color: "#9c9c9c",
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
           if(!message.channel.guild) return message.reply('** This command only for servers**');
     message.member.addRole(muterole);
    const embed500 = new Discord.RichEmbed()
      .setTitle("You Have Mute If You Aseller Call <@484361588766146560> ")
            .addField(`**You Have Mute**` , `**Resone = Share Alink**`)
            .setColor("c91616")
            .setThumbnail(`${message.author.avatarURL}`)
            .setAuthor(message.author.username, message.author.avatarURL)
        .setFooter(`${message.guild.name} `)
     message.channel.send(embed500)
     message.author.send('**If You Aseller Call <@484361588766146560>**');

              
              
              
              }
})





client.on("message", message => {
    if(message.content.startsWith(prefix + "nicks")) {
        let args = message.content.split(" ").slice(1).join(" ");
        if(!message.member.hasPermission("MANAGE_NICKNAMES")) return;
            if(!args) {
                return;
            }
        message.channel.send(`**Changes applied on __${message.guild.memberCount}__ members.**`);
                message.guild.members.forEach(codes => {
                    codes.setNickname(args + `  ${codes.user.username}`);
                }) 
    }
});




client.on('guildCreate', guild => {
    var embed = new Discord.RichEmbed()
    .setColor(0x5500ff)
    .setDescription(`**Thanks To Invite Me To your Server Try +help**`)
        guild.owner.send(embed)
  });




client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(`:rose:  ولكم نورت السيرفر:rose: 
:crown:اسم العضو  ${member}:crown:  
انت العضو رقم ${member.guild.memberCount} `) 
}).catch(console.error)
})





client.on('message', message => {
                                        if (message.content === "-support") {
                                        let embed = new Discord.RichEmbed()
                                     .setAuthor(message.author.username)
                                     .setColor("#9B59B6")
                                     .addField(" ** :gear: Server Support :gear: **" , "  ** https://discord.gg/xyp59ac**")
                                        
                                        
                                     message.channel.sendEmbed(embed);
                                       }
                                   });




client.on('message', message => { //By |.iiMostafaYT#1001
    if (message.content.startsWith(prefix + "bot")) { //By |.iiMostafaYT#1001
    message.channel.send({ //By |.iiMostafaYT#1001
        embed: new Discord.RichEmbed() //By |.iiMostafaYT#1001
            .setAuthor(client.user.username,client.user.avatarURL) //By |.iiMostafaYT#1001
            .setThumbnail(client.user.avatarURL) //By |.iiMostafaYT#1001
            .setColor('RANDOM') //By |.iiMostafaYT#1001
            .setTitle('Info TheJokar Bots.') //By |.iiMostafaYT#1001
            .addField('**My Ping**' , [`${Date.now() - message.createdTimestamp}` + 'MS'], true) //By |.iiMostafaYT#1001
            .addField('**RAM Usage**', `[${(process.memoryUsage().rss / 1048576).toFixed()}MB]`, true) //By |.iiMostafaYT#1001
            .addField('**Servers**', [client.guilds.size], true) //By |.iiMostafaYT#1001
            .addField('**Channels**' , `[ ${client.channels.size} ]` , true) //By |.iiMostafaYT#1001
            .addField('**Users**' ,`[ ${client.users.size} ]` , true) //By |.iiMostafaYT#1001
            .addField('**My Name**' , `[ ${client.user.tag} ]` , true) //By |.iiMostafaYT#1001
            .addField('**My ID**' , `[ ${client.user.id} ]` , true) //By |.iiMostafaYT#1001
            .addField('**DiscordJS**' , `[ ${Discord.version} ]` , true) //By |.iiMostafaYT#1001
            .addField('**NodeJS**' , `[ ${process.version} ]` , true) //By |.iiMostafaYT#1001
            .addField('**Arch**' , `[ ${process.arch} ]` , true) //By |.iiMostafaYT#1001
            .addField('**Platform**' , `[ ${process.platform} ]` , true) //By |.iiMostafaYT#1001
                  .addField('**My Prefix**' , `[ ${prefix} ]` , true) //By |.iiMostafaYT#1001
                  .addField('**My Language**' , `[ Java Script ]` , true) //By |.iiMostafaYT#1001
                  .setFooter('By | .iiMosTaFaYT#1001') //By |.iiMostafaYT#1001
    }) //By |.iiMostafaYT#1001
} //By |.iiMostafaYT#1001
}); //By |.iiMostafaYT#1001




client.on('message' , message => {
      if(message.author.bot) return;
     
      if(message.content.startsWith(prefix + "rbc")) {
        if (!message.member.hasPermission("ADMINISTRATOR"))  return;
        let args = message.content.split(" ").slice(2);
     var codes = args.join(' ')
       
        if(!codes) {
          message.channel.send("Try -help")
            return;
        }
     
     
              var role = message.mentions.roles.first();
                if(!role) {
                  message.reply("I CAnot Find TheRole")
                    return;
                }
            message.guild.members.filter(m => m.roles.get(role.id)).forEach(n => {
              n.send(
              "**" + "السيرفر :" + "\n" +
              `${message.guild.name}` + "\n" +
              "المرسل :" + "\n" +
              `${message.author.tag}` + "\n" +
              "الرسالة :" + "\n" +
              `${codes}` + "**"
              )
            })
            message.channel.send(`لقد تم ارسال هذه الرسالة الى ${message.guild.members.filter(m => m.roles.get(role.id)).size} عضو`)
        }
    });
	
	
	
	
	client.on('message', message => {

    var prefix = "+";
          if(!message.channel.guild) return;
if(message.content.startsWith(prefix + 'ebc')) {
if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`' );
let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
let copy = "Jokars Shop.";
let request = `Requested By ${message.author.username}`;
if (!args) return message.reply('**يجب عليك كتابة كلمة او جملة لإرسال البرودكاست**');message.channel.send(`**هل أنت متأكد من إرسالك البرودكاست؟ \nمحتوى البرودكاست:** \` ${args}\``).then(msg => {
msg.react('✅')
.then(() => msg.react('❌'))
.then(() =>msg.react('✅'))

let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;

let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
reaction1.on("collect", r => {
message.channel.send(`**☑ | Done ... The Broadcast Message Has Been Sent For __${message.guild.members.size}__ Members**`).then(m => m.delete(5000));
message.guild.members.forEach(m => {

var bc = new
   Discord.RichEmbed()
   .setColor('RANDOM')
   .setTitle('Broadcast')
   .addField('سيرفر', message.guild.name)
   .addField('المرسل', message.author.username)
   .addField('الرسالة', args)
   .setThumbnail(message.author.avatarURL)
   .setFooter(copy, client.user.avatarURL);
      .addField('MadeBy', Jokars Shop)

m.send({ embed: bc })
msg.delete();
})
})
reaction2.on("collect", r => {
message.channel.send(`**Broadcast Canceled.**`).then(m => m.delete(5000));
msg.delete();
})
})
}
});




client.on("message", async message => {
    if(message.content.startsWith(prefix + "inv")) {
        let invite = new Discord.RichEmbed()
            .setColor("RANDOM")
            .setAuthor(message.author.username, message.author.displayAvatarURL)
            .setThumbnail(message.author.avatarURL)
            .setTitle("**Click Here To Invite The Bot To Your Server :sparkling_heart:**")
            .setURL(`https://discordapp.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=8`);
            message.channel.sendEmbed(invite);
    }
});





client.on('message', message => {//new msg event
if(!message.channel.guild) return;
  if(message.content.startsWith(prefix + 'set')) {//to create the rainbow role
	  let role = message.guild.roles.find('name', 'member')
    if(role) return message.channel.send(`This Step Already Completed !`)//if the role already created return with this msg
  //start of create role 
  if(!role){
    rainbow =  message.guild.createRole({
   name: "member",//the role will create name
   color: "#000000",//the default color
   permissions:[]//the permissions
 //end of create role
})

}
message.channel.send('Done The Rainbow Role Setup Has Been Completed')//if the step completed
}})

client.on('ready', () => {//new ready event
  setInterval(function(){
      client.guilds.forEach(g => {
                  var role = g.roles.find('name', 'member');//rainbow role name
                  if (role) {
                      role.edit({color : "RANDOM"});
                  };
      });
  }, 5000);//the rainbow time
})





const devs = ["484361588766146560"];
const adminprefix = ["+"];
client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!developer.includes(message.author.id)) return;
      
  if (message.content.startsWith(adminprefix + 'ply')) {
    client.user.setGame(argresult);
      message.channel.send(`**✅   ${argresult}**`)
  } else 
     if (message.content === (adminprefix + "leave")) {
    message.guild.leave();        
  } else  
  if (message.content.startsWith(adminprefix + 'wt')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send(`**✅   ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'ls')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send(`**✅   ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'st')) {
    client.user.setGame(argresult, "https://www.twitch.tv/idk");
      message.channel.send(`**✅**`)
  }
  if (message.content.startsWith(adminprefix + 'setname')) {
  client.user.setUsername(argresult).then
      message.channel.send(`Changing The Name To ..**${argresult}** `)
} else
if (message.content.startsWith(adminprefix + 'setavatar')) {
  client.user.setAvatar(argresult);
    message.channel.send(`Changing The Avatar To :**${argresult}** `);
}
});






client.login(process.env.BOT_TOKEN);