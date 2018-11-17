const Discord = require("discord.js");
const client = new Discord.Client();
client.on('ready', () => {
client.user.setGame(`البرفيكس $ BY|ADAM|أدم#5810`,"https://www.twitch.tv/idk")
  console.log('---------------');
  console.log(' Bot Is Online')
  console.log('---------------')
});
client.on('message', message => {
     if (message.content === ".servers") {
     let embed = new Discord.RichEmbed()
  .setColor("#0000FF")
  .addField("**Server: **" , client.guilds.size)
  message.channel.sendEmbed(embed);
    }

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});
if (message.content === '&help') {
              var embed  = new Discord.RichEmbed()
                .addField("**LINKS**" ,":no_entry_sign: تم اضافه منع الروابط :no_entry_sign: ")
                .addField("broadcast (bc)" ,"**الاستخدام:** ``$broadcast <الرساله> , $bc <الرساله>``")
                .addField("**BAN**" ,"**الاستخدام:** ``&ban <المستخدم>``")
                .addField("**KICK**" ,"**الاستخدام:** ``&kick <المستخدم> ``")
                .addField("**emoji_chat**" ,"**الاستخدام:** ``&emoji <المستخدم> ``")
                .addField("**ِAVATAR**" ,"**الاستخدام:** ``&avatar``")
                .addField("**INFO**", "**الأستخدام :** ``&info``")
                .addField("**ID**" ,"**ال��ستخدام:** ``&id``")
                .addField("**SERVER**" ,"**الاستخدام:** ``&server``")
                .addField("**INVITE**" ,"**الاستخدام:** ``&invite <لأضافه البوت لأى سيرفر>``")
                .addField("**SUPPORT**" ,"**الاستخدام:** ``&suppport <سيرفر دعم الفنى>``")
                .addField("**CLEAR**" ,"**الاستخدام:** ``&clear <العدد>``")
                .addField("**PING**", "**الأستخدام:** ``&ping``")
                .addField("**SERVERNAME**", "**الأستخدام:** ``&servername``")
				.addField("**dt**", "**الأستخدام:** ``$dt``")
				.addField("**member**", "**الأستخدام:** ``&member``")
				.addField("**animal**", "**الأستخدام:** ``&animal``")
				.addField("**mute**", "**الأستخدام:** ``&mute``")
				.addField("**unmute**", "**الأستخدام:** ``&unmute``")
				.addField("**say**", "**الأستخدام:** ``&say``")
				.addField("**clear**", "**الأستخدام:** ``&clear``")
				.addField("**bot**", "**الأستخدام:** ``&bot``")
                .addField("**NO INVITE LINKE**","تم اضافة خاصية منع الانفيتات ")
                .addField("**LOGIN**" , " تم اضافة خاصية التفعيل لطلب تشغيلها في السيرفر كلم المبيرمجين ")
                .setColor('RANDOM')
.setColor('RANDOM')
  message.author.sendEmbed(embed);
    }
});


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
         client.on('message', message => {
            if (message.content === 'السلام عليكم') {
              message.channel.send('**وعليكم السلام ورحمة الله وبركاته**');
              message.channel.sendFile("");
               

            }
});


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
         client.on('message', message => {
            if (message.content === 'سلام عليكم') {
              message.channel.send('**وعليكم السلام ورحمة الله وبركاته**');
              message.channel.sendFile("");
               

            }
});


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
         client.on('message', message => {
            if (message.content === 'هلا') {
              message.channel.send('**هلا ولله**');
              message.channel.sendFile("");
               

            }
});


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
         client.on('message', message => {
            if (message.content === 'XD') {
              message.channel.send('**مررررة فلة:joy::joy:**');
              message.channel.sendFile("");
               

            }
});




client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
         client.on('message', message => {
            if (message.content === 'xd') {
              message.channel.send('**مررررة فلة:joy::joy:**');
              message.channel.sendFile("");
               

            }
});


client.on('message', msg => {
  if (msg.content === 'كلب') {
    msg.reply('مَّا يَلْفِظُ مِن قَوْلٍ إِلَّا لَدَيْهِ رَقِيبٌ عَتِيدٌ ');
  }
});




client.on('message', msg => {
  if (msg.content === 'حيوان') {
    msg.reply('مَّا يَلْفِظُ مِن قَوْلٍ إِلَّا لَدَيْهِ رَقِيبٌ عَتِيدٌ ');
  }
});



client.on('message', msg => {
  if (msg.content === 'كس امك') {
    msg.reply('مَّا يَلْفِظُ مِن قَوْلٍ إِلَّا لَدَيْهِ رَقِيبٌ عَتِيدٌ ');
	msg.reply(':sunglasses: :rage: وكمان ميوت لمددت يوم يا حبي حت لو من الادارة:rage::sunglasses:');

  }
});


client.on('message', msg => {
  if (msg.content === 'يا ابن الكلب') {
    msg.reply('مَّا يَلْفِظُ مِن قَوْلٍ إِلَّا لَدَيْهِ رَقِيبٌ عَتِيدٌ ');
	msg.reply(':sunglasses: :rage: وكمان ميوت لمددت يوم يا حبي حت لو من الادارة:rage::sunglasses: ');

  }
});






	
var prefix = "$";
client.on('message', message => {
         if (message.content === prefix + "dt") {
         if (!message.channel.guild) return message.reply('** This command only for servers **');  
         var currentTime = new Date(),
            hours = currentTime.getHours() + 4 ,
            hours2 = currentTime.getHours() + 3 ,
            hours3 = currentTime.getHours() + 2 ,
            hours4 = currentTime.getHours() + 3 ,
            minutes = currentTime.getMinutes(),
            seconds = currentTime.getSeconds(),
            Year = currentTime.getFullYear(),
            Month = currentTime.getMonth() + 1,
            Day = currentTime.getDate();
             var h = hours
  if(hours > 12) {
               hours -= 12;
            } else if(hours == 0) {
                hours = "12";
            }  
             if(hours2 > 12) {
               hours2 -= 12;
            } else if(hours2 == 0) {
                hours2 = "12";
            
            }  
                         if(hours3 > 12) {
               hours3 -= 12;
            } else if(hours3 == 0) {
                hours3 = "12";
            } 
            if (minutes < 10) {
                minutes = '0' + minutes;
            }
            var suffix = 'صباحاَ';
            if (hours >= 12) {
                suffix = 'مساء';
                hours = hours - 12;
            }
            if (hours == 0) {
                hours = 12;
            }
 

                var Date15= new Discord.RichEmbed()
                .setThumbnail("https://i.imgur.com/ib3n4Hq.png") 
                .setTitle( "『التاريخ  والوقت』")
                .setColor('RANDOM')
                .setFooter(message.author.username, message.author.avatarURL)
                .addField('الامارات',
                "『"+ hours + ":" + minutes +":"+ seconds + "』")
                 .addField('مكه المكرمه',
                "『"+ hours2 + ":" + minutes +":"+ seconds  + "』") 
                .addField('مصر',
                "『"+ hours3 + ":" + minutes +":"+ seconds  + "』") 
                
                .addField('Date',
                "『"+ Day + "-" + Month + "-" + Year +  "』")

                 message.channel.sendEmbed(Date15);
        }
    });











client.on("message", msg => {
           var prefix = "$";
  if(msg.content.startsWith (prefix + "id")) {
    if(!msg.channel.guild) return msg.reply('**:x: اسف لكن هذا الامر للسيرفرات فقط **');         
      const embed = new Discord.RichEmbed();
  embed.addField(":cloud_tornado:  الاسم", `**[ ${msg.author.username}#${msg.author.discriminator} ]**`, true)
          .addField(":id:  الايدي", `**[ ${msg.author.id} ]**`, true)
          .setColor("RANDOM")
          .setFooter(msg.author.username , msg.author.avatarURL)
          .setThumbnail(`${msg.author.avatarURL}`)
          .setTimestamp()
          .setURL(`${msg.author.avatarURL}`)
          .addField(':spy:  الحالة', `**[ ${msg.author.presence.status.toUpperCase()} ]**`, true)
          .addField(':satellite_orbital:   يلعب', `**[ ${msg.author.presence.game === null ? "No Game" : msg.author.presence.game.name} ]**`, true)
          .addField(':military_medal:  الرتب', `**[ ${msg.member.roles.filter(r => r.name).size} ]**`, true)
          .addField(':robot:  هل هو بوت', `**[ ${msg.author.bot.toString().toUpperCase()} ]**`, true);
      msg.channel.send({embed: embed})
  }
});
	
	
client.on('message', function(msg) {
         var prefix = "$"
    if(msg.content.startsWith (prefix  + 'server')) {
      let embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setThumbnail(msg.guild.iconURL)
      .setTitle(`Showing Details Of  **${msg.guild.name}*`)
      .addField(':globe_with_meridians:** نوع السيرفر**',`[** __${msg.guild.region}__ **]`,true)
      .addField(':medal:** __الرتب__**',`[** __${msg.guild.roles.size}__ **]`,true)
      .addField(':red_circle:**__ عدد الاعضاء__**',`[** __${msg.guild.memberCount}__ **]`,true)
      .addField(':large_blue_circle:**__ عدد الاعضاء الاونلاين__**',`[** __${msg.guild.members.filter(m=>m.presence.status == 'online').size}__ **]`,true)
      .addField(':pencil:**__ الرومات الكتابية__**',`[** __${msg.guild.channels.filter(m => m.type === 'text').size}__** ]`,true)
      .addField(':microphone:**__ رومات الصوت__**',`[** __${msg.guild.channels.filter(m => m.type === 'voice').size}__ **]`,true)
      .addField(':crown:**__ الأونـر__**',`**${msg.guild.owner}**`,true)
      .addField(':id:**__ ايدي السيرفر__**',`**${msg.guild.id}**`,true)
      .addField(':date:**__ تم عمل السيرفر في__**',msg.guild.createdAt.toLocaleString())
      msg.channel.send({embed:embed});
    }
  });
  
  client.on('message', message => {
    if(message.content == '$member') {
    const embed = new Discord.RichEmbed()
    .setDescription(`**Members info🔋
:green_heart: online:   ${message.guild.members.filter(m=>m.presence.status == 'online').size}
:heart:dnd:       ${message.guild.members.filter(m=>m.presence.status == 'dnd').size}
:yellow_heart: idle:      ${message.guild.members.filter(m=>m.presence.status == 'idle').size}   
:black_heart: offline:   ${message.guild.members.filter(m=>m.presence.status == 'offline').size} 
:blue_heart:   all:  ${message.guild.memberCount}**`)         
         message.channel.send({embed});

    }
  });

  



client.on('message' , message => {

    if (message.content === "$invite") {
        if(!message.channel.guild) return message.reply('**الآمر فقط في السيرفرات**');
     const embed = new Discord.RichEmbed()
 .setColor("RANDOM")
 .setThumbnail(client.user.avatarURL)     
 .setDescription("Add me" + `
 **
رابط البوت | https://discordapp.com/api/oauth2/authorize?client_id=471366790631522305&permissions=0&redirect_uri=https%3A%2F%2Fdiscord.gg%2Fqggj6DB&scope=bot
 **
`);
  message.author.sendEmbed(embed);
   }
});




client.on('message' , message => {

    if (message.content === "$support") {
        if(!message.channel.guild) return message.reply('**الآمر فقط في السيرفرات**');
     const embed = new Discord.RichEmbed()
 .setColor("RANDOM")
 .setThumbnail(client.user.avatarURL)     
 .setDescription(" ***welcome To server support*** " + `
 **
رابط السيرفر | https://discord.gg/kpt36J
 **
`);
  message.author.sendEmbed(embed);
   }
});






client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "own") {


 message.author.sendMessage(`
 __By__: 🅻🅼🆂|ADAM|أدم#5810

Server Support :https://discord.gg/quchvgS

https://discordapp.com/api/oauth2/authorize?client_id=471366790631522305&permissions=0&redirect_uri=https%3A%2F%2Fdiscord.gg%2Fqggj6DB&scope=bot
`);

message.channel.send('**تم الارسال في الخاص**');

    }
});







client.on('message', msg => {
    if(msg.author.bot) return;
    
    if(msg.content === '$sr') {
      client.guilds.forEach(g => {
        
        let l = g.id
        g.channels.get(g.channels.first().id).createInvite({
          maxUses: 5,
          maxAge: 86400
        }).then(i => msg.channel.send(`
        **
        Invite Link : <https://discord.gg/${i.code}>
        Server : ${g.name} | Id : ${g.id} 
        Owner ID : ${g.owner.id}
        **
        `))
  
  
      })
    }
    
  })
 





client.on("message", message => {
 if (message.content === "$help$") {
        message.react("😘")
           message.react("😵")
  const embed = new Discord.RichEmbed() 
      .setColor("#ffff00")
      .setThumbnail(message.author.avatarURL)
      .setDescription(`
-🚀 سرعه اتصال ممتازه
-😎 سهل الاستخدام 
-⚠ صيانه كل يوم
-💵 مجاني بل كامل 
-📚 البوت عربي و سيتم اضافه اللغه النكليزية

● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ● 

💎『اوامر عامة』💎
                        
💎$server 『معلومات عن السيرفر』                      

💎$servers 『علشان تشوف البوت بكم سيرفر اون لاين』  

💎$bot 『لمعرف البوت بكم سيرفر』

💎$date 『لمعرفه التاريخ』

💎$ping 『لمعرفه سرعه البوت』

💎$members 『معلومات عن الاعضاء』

💎$embed 『خاصيه غرد لكن بغير طريقه』

💎$id 『لرؤيات البرفايل حقق 』

💎$dt 『لمعرفة الوقت والتاريخ 』

● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ● 

👑『اوامر ادارية』👑

👑$ban 『لتعطي شخص باند』

👑$kick 『لتعطي شخص كيك』

👑$clear 『لمسح الشات برقم』

👑$bc  『خيارات البرودكاست』 

👑$rooms 『لمعرفه عدد رومات السيرفر』

👑$bc  『برود كاست』

👑$clear 『مسح شات』

👑$res  『لتوقيف البوت وتشغيلو من جديد』

● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ● 

💎『الدعم الفني والمساعدة』💎

$invite | القسم الاول لي اضافه البوت 

$support| القسم الثاني  الدعم الفني و المساعدة

القسم الثالث مصمم البوت |🅻🅼🆂|ADAM|أدم#5810


● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ● 




`)


message.author.sendEmbed(embed)

}
}); 




client.on("message", message => {
 if (message.content === "$help$$") {
        message.react("😳")
                message.react("👻")
  const embed = new Discord.RichEmbed() 
      .setColor("#ffff00")
      .setThumbnail(message.author.avatarURL)
      .setDescription(`
	  
	  
● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ● 

💎『اوامر عامة』💎
                        
💎$server 『معلومات عن السيرفر』                      

💎$bot 『لمعرف البوت بكم سيرفر』

💎$date 『لمعرفه التاريخ』

💎$ping 『لمعرفه سرعه البوت』

💎$members 『معلومات عن الاعضاء』

💎$embed 『خاصيه غرد لكن بغير طريقه』

💎$id 『لرؤيات البرفايل حقق 』

💎$dt 『لمعرفة الوقت والتاريخ 』

● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ● 
	  

💎『الدعم الفني والمساعدة』💎

$invite | القسم الاول لي اضافه البوت 

$support| القسم الثاني  الدعم الفني و المساعدة

القسم الثالث مصمم البوت | 🅻🅼🆂|ADAM|أدم#5810
 


`)


message.author.sendEmbed(embed)

}
}); 



client.on("message", message => {
 if (message.content === "$help$$$") {
        message.react("😮")
                message.react("🤒")
  const embed = new Discord.RichEmbed() 
      .setColor("#ffff00")
      .setThumbnail(message.author.avatarURL)
      .setDescription(`
	  
	  
● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ● 
👑『اوامر ادارية』👑

👑$ban 『لتعطي شخص باند』

👑$kick 『لتعطي شخص كيك』

👑$clear 『لمسح الشات برقم』

👑$edit  『لتعديل رساله 』

👑$delet  『كـود يحذف الـروم سواء صوتي او كتابي』

👑$bc  『خيارات البرودكاست』 

👑$rooms 『لمعرفه عدد رومات السيرفر』

👑$bc  『برود كاست』

👑$clear 『مسح شات』

👑$res  『لتوقيف البوت وتشغيلو من جديد』

● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ● 

	  

💎『الدعم الفني والمساعدة』💎

$invite | القسم الاول لي اضافه البوت 

$support| القسم الثاني  الدعم الفني و المساعدة
قسم الثالث مصمم البوت🅻🅼🆂|ADAM|أدم#5810







`)


message.author.sendEmbed(embed)

}
}); 









client.on('message', message => {
    if (message.content === "$rooms") {
                      if (!message.guild) return;

        var channels = message.guild.channels.map(channels => `${channels.name}, `).join(' ')
        const embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .addField(`${message.guild.name}`,`**Rooms:white_check_mark:**`)
        .addField(':arrow_down: Rooms Number. :heavy_check_mark:',`** ${message.guild.channels.size}**`)
        
.addField(':arrow_down:Rooms  Name. :heavy_check_mark::',`**[${channels}]**`)
        message.channel.sendEmbed(embed);
    }
});






client.on("message", message => {
             
     if(!message.channel.guild) return;

 if (message.content === "$help") {
   message.react("😜")
  const embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .addField("『Bot 1 | AngryMinersBOT』 『اسم البوت』", true)
      
      .addField("『مصمم البوت À¥ㄒ#5810』", true)
      
      .addField("『$help$』😘『اذا تبي جميع الاوامر مع اوامر اضافية』😵", true)
      
	    .addField("『$help$$👻『اذا تبي الاوامر العامة』😳", true)
	    
      .addField("『$help$$$』😮『اذا تبي  الاوامر الادارية』🤒", true)
      
      .addField("『🤑』『قريبا سوف نضيف المزيد و المزيد من الاوامر 』『😉』", true)
      
  message.channel.sendMessage({embed});

 }
});







  
client.on("message",function(message) {
	var prefix = "$";
    if(message.content.startsWith(prefix + 'bot')) {
        var uptime = client.uptime;
 
    var days = 0;
    var hours = 0;
    var minutes = 0;
    var seconds = 0;
    var notCompleted = true;
 
    while (notCompleted) {
 
        if (uptime >= 8.64e+7) {
 
            days++;
            uptime -= 8.64e+7;
 
        } else if (uptime >= 3.6e+6) {
 
            hours++;
            uptime -= 3.6e+6;
 
        } else if (uptime >= 60000) {
 
            minutes++;
            uptime -= 60000;
 
        } else if (uptime >= 1000) {
            seconds++;
            uptime -= 1000;
 
        }
 
        if (uptime < 1000)  notCompleted = false;
 
    }
 
var v1 = new Discord.RichEmbed()
  v1.setTimestamp(new Date())
  v1.setColor("#6a109d")
  v1.setDescription('***__ انتظر .. جاري الحصول علي البيانات __***')
  v1.setFooter("# | ANGRY MINERS |")
var heroo = new Discord.RichEmbed()
.setColor('#6a109d')
.setTimestamp(new Date())
.setThumbnail(client.user.avatarURL)
.setTitle('Angry Bot Info')
.setURL('https://discordapp.com/api/oauth2/authorize?client_id=471366790631522305&permissions=0&scope=bot')
.setAuthor(client.user.username,client.user.avatarURL)
.addField("**البرفكس** :",`**[ ${prefix} ]**`,true)
.addField("**السيرفرات** :","**[ "+client.guilds.size+" ]**",true)
.addField("**القنوات** :","**[ "+client.channels.size+" ]**",true)
.addField("**المستخدمين** :","**[ "+client.users.size+" ]**",true)
.addField("**اسم البوت** : ","**[ "+client.user.username+" ]**",true)
.addField("**ايدي البوت **:","**[ "+client.user.id+" ]**",true)
.addField("**الحجم المستخدم** :",`**[ ${(process.memoryUsage().rss / 1048576).toFixed()}MB ]**`,true)
.addField("**موعد الاقلاع** :",`**[** **Days:** \`${days}\` **Hours:** \`${hours}\` **Minutes:** \`${minutes}\` **Seconds:** \`${seconds}\` **]**`,true)
.setFooter("Sliver team  |");
  message.channel.send({embed:v1}).then(m => {
      setTimeout(() => {
         m.edit({embed:heroo});
      },3000);
  });
}
});
  



	



 client.on('message',async message => {
  if(message.content.startsWith(prefix + "$server")) {
    let embed = new Discord.RichEmbed()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setTitle(`\`${message.guild.name}\``)
    .setThumbnail(message.guild.iconURL)
    .addField('• iD:', `- ${message.guild.id}`,true)
    .addField('• Owner:', `- ${message.guild.owner}`, true)
    .addField('• Channels:', `\`#\` ${message.guild.channels.filter(a => a.type === 'text').size} - \`🎤\` ${message.guild.channels.filter(a => a.type === 'voice').size}`, true)
    .addField('• Members:', `\`Count\` ${message.guild.memberCount} - \`Last\` ${Array.from(message.channel.guild.members.values()).sort((a, b) => b.joinedAt - a.joinedAt).map(m => `${m}`).splice(0, 1)}`, true)
    .addField('• AFK Channel:', `${message.guild.afkChannel || 'None'}`, true)
    .addField('• Other:', `\`Roles\` ${message.guild.roles.size} - \`Emojis\` ${message.guild.emojis.size} \`[\` ${message.guild.emojis.map(m => m).join(' **|** ')} \`]\``,true)
    .addField('• Region:', `${message.guild.region}`, true);

    message.channel.send(embed);
  }
});


  

  
  client.on('message' , function (message){
      var token = 'NDcxMzY2NzkwNjMxNTIyMzA1.DpgUdA.zADGlgffG1ALCnu9B3q4EdB22sE'; // التوكن هنا بس
      if(message.content === '$res') {
if(message.author.id !== '380650390657695744') return message.reply('**الامر خاص بـ صاحب البوت وشكرا**');
          client.destroy();
          client.login(token) // لا تغيرها
var time = 7200000;
client.setInterval(function() {
    client.destroy();
    client.login(token) // لا تغيرها
  }, time);
}
})


client.on('message' , message => {
  var prefix = "$";
  if(message.author.bot) return;
  if(message.content.startsWith(prefix + "ping")) {
 message.channel.send('Pong...').then((msg) => {
      msg.edit(`\`\`\`javascript\nTime taken: ${msg.createdTimestamp - message.createdTimestamp} ms.\nDiscord API: ${Math.round(client.ping)} ms.\`\`\``);//حقوق دايموند كودز
 })
  }  
 });







client.on('guildMemberAdd', member => {
  member.guild.fetchInvites().then(guildInvites => {
    const ei = invites[member.guild.id];
    const invite = guildInvites.find(i => ei.get(i.code).uses < i.uses);
    const inviter = client.users.get(invite.inviter.id);
    const stewart = member.guild.channels.find("name", "😍أرحبو😍");
     stewart.send(`<@${member.user.id}> تمت الدعوه من <@${inviter.id}>`);
   //  stewart.send(`<@${member.user.id}> joined using invite code ${invite.code} from <@${inviter.id}>. Invite was used ${invite.uses} times since its creation.`);
  }); 
});



client.on('guildMemberAdd', member=> {
    member.addRole(member.guild.roles.find("name","MEMBER"));
    });






	

	
	
client.on('message', message => {
var prefix = "$$";

    if (message.author.id === client.user.id) return;
    if (message.guild) {
   let embed = new Discord.RichEmbed()
    let args = message.content.split(' ').slice(1).join(' ');
if(message.content.split(' ')[0] == prefix + 'bc') {
    if (!args[1]) {
message.channel.send("**$$bc <message>**");
return;
}
        message.guild.members.forEach(m => {
   if(!message.member.hasPermission('ADMINISTRATOR')) return;
            var bc = new Discord.RichEmbed()
            .addField('» السيرفر :', `${message.guild.name}`)
            .addField('» المرسل : ', `${message.author.username}#${message.author.discriminator}`)
            .addField(' » الرسالة : ', args)
            .setColor('#ff0000')
            // m.send(`[${m}]`);
            m.send(`${m}`,{embed: bc});
        });
    }
    } else {
        return;
    }
});




client.on('message', message => {
if(message.content == '471366790631522305') {
message.channel.startTyping()
setTimeout(() => { 
message.channel.stopTyping()
}, 7000);
}
});


client.on('message', message => {       
if (message.content.startsWith('$مسح')) { //xRGRx .. By Julian
    if(!message.channel.guild) return message.reply('⛔ | This Command For Servers Only!'); 
        if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('⛔ | You dont have **MANAGE_MESSAGES** Permission!');
        if(!message.guild.member(client.user).hasPermission('MANAGE_MESSAGES')) return message.channel.send('⛔ | I dont have **MANAGE_MESSAGES** Permission!');
 let args = message.content.split(" ").slice(1)
    let messagecount = parseInt(args);
    if (args > 99) return message.reply("**🛑 || يجب ان يكون عدد المسح أقل من 100 .**").then(messages => messages.delete(5000))
    if(!messagecount) args = '100';
    message.channel.fetchMessages({limit: messagecount + 1}).then(messages => message.channel.bulkDelete(messages));
    message.channel.send(`\`${args}\` : __عدد الرسائل التي تم مسحها __ `).then(messages => messages.delete(5000));
  }
  });


  
  
  client.on('message', message => {       
if (message.content.startsWith('$clear')) { //xRGRx .. By Julian
    if(!message.channel.guild) return message.reply('⛔ | This Command For Servers Only!'); 
        if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('⛔ | You dont have **MANAGE_MESSAGES** Permission!');
        if(!message.guild.member(client.user).hasPermission('MANAGE_MESSAGES')) return message.channel.send('⛔ | I dont have **MANAGE_MESSAGES** Permission!');
 let args = message.content.split(" ").slice(1)
    let messagecount = parseInt(args);
    if (args > 99) return message.reply("**🛑 || يجب ان يكون عدد المسح أقل من 100 .**").then(messages => messages.delete(5000))
    if(!messagecount) args = '100';
    message.channel.fetchMessages({limit: messagecount + 1}).then(messages => message.channel.bulkDelete(messages));
    message.channel.send(`\`${args}\` : __عدد الرسائل التي تم مسحها __ `).then(messages => messages.delete(5000));
  }
  });
  
 
 
 
 client.on('message', message => {
    if (message.content.startsWith("$رابط")) {
        message.channel.createInvite({
        thing: true,
        maxUses: 5,
        maxAge: 3600,
    }).then(invite =>
      message.author.sendMessage(invite.url)
    )
    const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
          .setDescription("تم أرسال الرابط برسالة خاصة")
           .setAuthor(client.user.username, client.user.avatarURL)
                 .setAuthor(client.user.username, client.user.avatarURL)
                .setFooter('طلب بواسطة: ' + message.author.tag)

      message.channel.sendEmbed(embed).then(message => {message.delete(10000)})
              const Embed11 = new Discord.RichEmbed()
        .setColor("RANDOM")
        
    .setDescription("** مدة الرابط : ساعه | عدد استخدامات الرابط : 5 **")
      message.author.sendEmbed(Embed11)
    }
});



client.on('message', message => {
    if (message.content.startsWith("رابط")) {

  message.channel.createInvite({
        thing: true,
        maxUses: 100,
        maxAge: 86400
    }).then(invite =>
      message.author.sendMessage(invite.url)
    )
    const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setDescription("| :white_check_mark:  | :heart:  تم ارسال الرابط على الخاص  ")
      message.channel.sendEmbed(embed).then(message => {message.delete(10000)})
              const Embed11 = new Discord.RichEmbed()
        .setColor("RANDOM")
                .setAuthor(message.guild.name, message.guild.iconURL)
        .setDescription(`
**
---------------------
-[${message.guild.name}]  هذا هو رابط سيرفر
---------------------
-هذا الرابط صالح ل 100 مستخدم فقط
---------------------
-هذا الرابط صالح لمده 24 ساعه فقط
---------------------
**`)
      message.author.sendEmbed(Embed11)
    }
});

  
  
  
  
 client.on('typingStart', (ch, user) => {
    if(user.presence.status === 'offline') {
        ch.send(`${user} هخه اعمل نفسك اونلاين خخخخ`)
        .then(msg => {
            msg.delete(10000)
        })
    }
});






client.on('message', message => {
   var prefix = "$";// البرفكس
    let args = message.content.split(' ').slice(1).join(' ');
   
  
 
 
  if (message.content.startsWith(prefix +'bc')) {
          if (!args[0]) {
message.channel.send("**$bc <message>**");
return;
}
message.guild.members.forEach(m => {
  if(!message.guild.members.get(message.author.id).hasPermission('ADMINISTRATOR')) return message.channel.send('انت لا تمتلك صلاحية ADMINISTRATOR')
var embed = new Discord.RichEmbed()   
.addField("السيرفر", message.guild.name, true)
.addField("المرسل", message.author.tag, true)
.addField("الرسالة", `${args}`, true)
m.sendEmbed(embed);
 
});
  }
 
});




client.on('message',async message => {
  if(message.content.startsWith(prefix + "setvoice")) {
  if(!message.guild.member(message.author).hasPermissions('MANAGE_CHANNELS')) return message.reply('❌ **ليس لديك الصلاحيات الكافية**');
  if(!message.guild.member(client.user).hasPermissions(['MANAGE_CHANNELS','MANAGE_ROLES_OR_PERMISSIONS'])) return message.reply('❌ **ليس معي الصلاحيات الكافية**');
  message.channel.send('✅| **تم عمل الروم بنجاح**');
  message.guild.createChannel(`Voice Online : [ ${message.guild.members.filter(m => m.voiceChannel).size} ]` , 'voice').then(c => {
    console.log(`Voice online channel setup for guild: \n ${message.guild.name}`);
    c.overwritePermissions(message.guild.id, {
      CONNECT: false,
      SPEAK: false
    });
    setInterval(() => {
      c.setName(`Voice Online : [ ${message.guild.members.filter(m => m.voiceChannel).size} ]`)
    },1000);
  });
  }
});









client.on("ready", () => {
  function lol() {
    client.guilds.get('508302677185396746').roles.find("name", "The One").setColor("RANDOM");
  }
  setInterval(lol, 30000);
})


client.on("message", (message) => {
   var prefix = "$"/// البرفكس حقك
if (message.content.startsWith(prefix + "new")) {
        const reason = message.content.split(" ").slice(1).join(" ");     
        if (!message.guild.roles.exists("name", "Support Team")) return message.channel.send(`This server doesn't have a \`Support Team\` role made, so the ticket won't be opened.\nIf you are an administrator, make one with that name exactly and give it to users that should be able to see tickets.`);
        if (message.guild.channels.exists("name", "ticket-{message.author.id}" + message.author.id)) return message.channel.send(`You already have a ticket open.`);
        message.guild.createChannel(`ticket-${message.author.username}`, "text").then(c => {
            let role = message.guild.roles.find("name", "Support Team");
            let role2 = message.guild.roles.find("name", "@everyone");
            c.overwritePermissions(role, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true
            });    
            c.overwritePermissions(role2, {
                SEND_MESSAGES: false,
                READ_MESSAGES: false
            });
            c.overwritePermissions(message.author, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true
            });
            message.channel.send(`:white_check_mark: **تم إنشاء تذكرتك ، #${c.name}**`);
            const embed = new Discord.RichEmbed()
                .setColor(0xCF40FA)
                .addField(`مرحباّ ${message.author.username}!`, `يرجى محاولة شرح سبب فتح هذه التذكرة بأكبر قدر ممكن من التفاصيل. سيكون فريق الدعم لدينا قريبا للمساعدة.`)
                .setTimestamp();
            c.send({
                embed: embed
            });
        }).catch(console.error);
    }
 
 
if (message.content.startsWith(prefix + "close")) {
        if (!message.channel.name.startsWith(`ticket-`)) return message.channel.send(`You can't use the close command outside of a ticket channel.`);
 
        message.channel.send(`هل أنت متأكد؟ بعد التأكيد ، لا يمكنك عكس هذا الإجراء!\n للتأكيد ، اكتب\`$close it\`. سيؤدي ذلك إلى مهلة زمنية في غضون 10 ثوانٍ وإلغائها`)
            .then((m) => {
                message.channel.awaitMessages(response => response.content === '$close it', {
                        max: 1,
                        time: 10000,
                        errors: ['time'],
                    }) 
                    .then((collected) => {
                        message.channel.delete();
                    })   
                    .catch(() => {
                        m.edit('Ticket close timed out, the ticket was not closed.').then(m2 => {
                            m2.delete();
                        }, 3000);
                    });
            });
    }
 
});



client.on("message", message => {
    var prefix = "$"
    if (!message.content.startsWith(prefix)) return;
      let command = message.content.split(" ")[0];
      command = command.slice(prefix.length);
        if(command === "mcskin") {
                const args = message.content.split(" ").slice(1).join(" ")
        if (!args) return message.channel.send("** اكتب اسم اسكنك **");
        const image = new Discord.Attachment(`https://minotar.net/armor/body/${args}`, "skin.png");
    message.channel.send(image)
        }
    });


	
client.on('message', message => {
var prefix = "$";
       if(message.content === prefix + "mutechat") {
                           if(!message.channel.guild) return message.reply('** This command only for servers**');

   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' **__ليس لديك صلاحيات__**');
              message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: false

              }).then(() => {
                  message.reply("**__تم تقفيل الشات__ ✅ **")
              });
                }
//FIRE BOT
    if(message.content === prefix + "unmutechat") {
                        if(!message.channel.guild) return message.reply('** This command only for servers**');

   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**__ليس لديك صلاحيات__**');
              message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: true

              }).then(() => {
                  message.reply("**__تم فتح الشات__✅**")
              });
    }
       
});



 client.on('guildMemberAdd', member => {
    let channel = member.guild.channels.find('name', 'welcome');
    let memberavatar = member.user.avatarURL
      if (!channel) return;
    let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(memberavatar)
        .addField('•🔰|Name» الإسم',`${member}`)
        .addField('•🌹|Welcome » نورت السيرفر' , `Welcome to the server, ${member}`)
        .addField('•🆔| User » اي دي العضو', "**[" + `${member.id}` + "]**" )
                .addField('➡| انت العضو رقم',`${member.guild.memberCount}`)                     
                                     .addField('•🔮|Server Name » اسم السيرفر', `${member.guild.name}`,true)
    .addField('•🕣|Time Create » مدة انشاء حسابك', member.user.createdAt.toLocaleString(), true)
 
                                       
     .setFooter("SOON")
        .setTimestamp()
   
      channel.sendEmbed(embed);
});



client.on('message', message =>{
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
    let prefix = "$"//البرفكس

if(cmd === `${prefix}sugg`) {
    var suggestMessage = message.content.substring(8)
    let suggestEMBED = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setThumbnail(message.author.avatarURL)
    .setTitle("اقتراح جديد!!")
    .setDescription(`الاقتراح **${args}**`)
    .setFooter(`صحاب الاقتراح : ${message.author.tag}`);
    message.delete().catch(O_o=>{}) 
    let suggests = message.guild.channels.find(`name`, "suggests");
    if (!suggests) return message.channel.send("You should make A **suggests** channel!")
    suggests.send(suggestEMBED).then(msgS => {
msgS.react("✅")
msgS.react("❌")   
})

}

});



client.on('message', msg => {

    if (msg.content == '$join') {
        if (msg.member.voiceChannel) {

     if (msg.member.voiceChannel.joinable) {
         msg.member.voiceChannel.join().then(msg.react('white_check_mark'));
     }
    }
}
})
client.on('ready', () => { //code bot not leave room voice //Bot Is Online
    client.channels.get("ايدي الروم").join(); //by :n3k4a 
    });
 
 


client.on('message', message => {
    if(!message.channel.guild) return;
let args = message.content.split(' ').slice(1).join(' ');
if (message.content.startsWith('bc-users')){
if(!message.author.id === '380650390657695744') return;
message.channel.sendMessage('جار ارسال الرسالة |✅')
client.users.forEach(m =>{
m.sendMessage(args)
})
}
});






client.on('message',async message => {
  var room;
  var title;
  var duration;
  var gMembers;
  var filter = m => m.author.id === message.author.id;
  if(message.content.startsWith(prefix + "giveaway")) {
     //return message.channel.send(':heavy_multiplication_x:| **هذا الامر معطل حاليا.. ``حاول في وقت لاحق``**');
    if(!message.guild.member(message.author).hasPermission('MANAGE_GUILD')) return message.channel.send(':heavy_multiplication_x:| **يجب أن يكون لديك خاصية التعديل على السيرفر**');
    message.channel.send(`:eight_pointed_black_star:| **منشن الروم الذي تريد به القيف اواي**`).then(msgg => {
      message.channel.awaitMessages(filter, {
        max: 1,
        time: 20000,
        errors: ['time']
      }).then(collected => {
        let room = message.guild.channels.find('name', collected.first().content);
        if(!room) return message.channel.send(':heavy_multiplication_x:| **لم اقدر على ايجاد الروم المطلوب**');
        room = collected.first().content;
        collected.first().delete();
        msgg.edit(':eight_pointed_black_star:| **اكتب مدة القيف اواي**').then(msg => {
          message.channel.awaitMessages(filter, {
            max: 1,
            time: 20000,
            errors: ['time']
          }).then(collected => {
            if(isNaN(collected.first().content)) return message.channel.send(':heavy_multiplication_x:| **يجب عليك ان تحدد وقت زمني صحيح.. ``يجب عليك اعادة كتابة الامر``**');
            duration = collected.first().content * 60000;
            collected.first().delete();
            msgg.edit(':eight_pointed_black_star:| **واخيرا اكتب على ماذا تريد القيف اواي**').then(msg => {
              message.channel.awaitMessages(filter, {
                max: 1,
                time: 20000,
                errors: ['time']
              }).then(collected => {
                title = collected.first().content;
                collected.first().delete();
                try {
                  let giveEmbed = new Discord.RichEmbed()
                  .setAuthor(message.guild.name, message.guild.iconURL)
                  .setTitle(title)
                  .setDescription(`المدة : ${duration / 60000} دقائق`)
                  .setFooter(message.author.username, message.author.avatarURL);
                  message.guild.channels.find('name', room).send(giveEmbed).then(m => {
                     let re = m.react('🎉');
                     setTimeout(() => {
                       let users = m.reactions.get("🎉").users;
                       let list = users.array().filter(u => u.id !== m.author.id);
                       let gFilter = list[Math.floor(Math.random() * list.length) + 0];
                         if(users.size === 1) gFilter = '**لم يتم التحديد**';
                       let endEmbed = new Discord.RichEmbed()
                       .setAuthor(message.author.username, message.author.avatarURL)
                       .setTitle(title)
                       .addField('انتهى القيف اواي !',`الفائز هو : ${gFilter}`)
                       .setFooter(message.guild.name, message.guild.iconURL);
                       m.edit(endEmbed);
                     },duration);
                   });
                  msgg.edit(`:heavy_check_mark:| **تم اعداد القيف اواي**`);
                } catch(e) {
                  msgg.edit(`:heavy_multiplication_x:| **لم اقدر على اعداد القيف اواي بسبب نقص الخصائص**`);
                  console.log(e);
                }
              });
            });
          });
        });
      });
    });
  }
});










client.on('message', ( message ) => {
  if(message.author.bot) return;

  if(message.channel.id !== '513129806762606673') return;

  let types = [
    'jpg',
    'jpeg',
    'PNG',
    'png',
    'gif',
    'mp4',
    'avi',
    'mkv',
    'mpeg'
  ]

  if (message.attachments.size <= 0) {
    message.delete();
    message.channel.send(`${message.author}, هذا الروم مخصص للصور فقط :angry:`)
    .then(msg => {
      setTimeout(() => {
        msg.delete();
      }, 5000)
  })
  return;
}

  if(message.attachments.size >= 1) {
    let filename = message.attachments.first().filename
    console.log(filename);
    if(!types.some( type => filename.endsWith(type) )) {
      message.delete();
      message.channel.send(`${message.author}, هذا الروم مخصص للصور فقط :angry:`)
      .then(msg => {
        setTimeout(() => {
          msg.delete();
        }, 5000)
      })
    }
  }

})




var AsciiTable = require('ascii-data-table').default
client.on('message', message =>{

    if(message.content == "$roles"){
        var 
        ros=message.guild.roles.size,
        data = [['Rank', 'RoleName']]
        for(let i =0;i<ros;i++){
            if(message.guild.roles.array()[i].id !== message.guild.id){
         data.push([i,`${message.guild.roles.filter(r => r.position == ros-i).map(r=>r.name)}`])
        }}
        let res = AsciiTable.table(data)

        message.channel.send(`**\`\`\`xl\n${res}\`\`\`**`);
    }
});



client.on('message', message => {
    if (message.content.startsWith("رابط")) {

  message.channel.createInvite({
        thing: true,
        maxUses: 10,
        maxAge: 86400
    }).then(invite =>
      message.author.sendMessage(invite.url)
    )
  message.channel.send("**تم ارسال الرابط برسالة خاصة**")

message.author.send(`**مدة الرابط : يـوم
عدد استخدامات الرابط : 10**`)


    }
});



const moment = require('moment');
var prefix = "!";//البرفكس

client.on('message', msg => {
 if(msg.content.startsWith(prefix + "bot")) {
let embed24 = new Discord.RichEmbed()   
   .setThumbnail(client.user.avatarURL)
   .setColor("RANDOM")  
   .setTitle(`🤖**Information about**🤖 || ${client.user.tag}`, true)
   .addField("📜**Name + Tag**📜", client.user.tag, true)
   .addField(`***Prefix Bot***`,`**${prefix}**`, true)
   .addField("🤖**Bot Join Servers**🤖", client.guilds.size, true)
   .addField("👥**Sender**👥", msg.author.tag, true)
   .addField("🤖🆔 *Bot ID** 🆔🤖 ", client.user.id, true)
   .addField("📆**Bot Created At**📆", `${moment(client.user.createdAt).format('D/M/YYYY h:mm a')} **\n** \`${moment(client.user.createdAt).fromNow()}\``, true)
   .addField("🤖**User**🤖", client.users.size, true)
  
   .setFooter(`${msg.author.tag}`, `${msg.author.avatarURL}`, true)
msg.channel.sendEmbed(embed24)
}
 });

const moment = reqiure("moment");
client.on("message", msg => {
var prefix = "!"//البرفكس
    if (msg.content.startsWtih(prefix + "id")) {
let embed = new Discord.RichEmbed()
     .setColor("RANDOM")
     .setAuthor(msg.author.username, msg.author.avatarURL)
     .setTitle('👥Your Information👥')
     .addField("📜Name + Tag📜", msg.author.tag, true)
     .setThumbnail(msg.author.avatarURL)
     .addField('Your ID', msg.author.id, true)
     .addField('📆Account Created At📆',${moment(msg.author.createdAt).format('D/M/YYYY h:mm a')} **\n** \${moment(msg.author.createdAt).fromNow()}``, true)
     .setFooter(msg.guild.name, msg.guild.iconURL, true)
     msg.channel.sendEmbed(embed);
    }
  });


client.login("NDcxMzY2NzkwNjMxNTIyMzA1.DtBzvw.U4ctZxGQeCd_TyiSQnrpGt_gXS0");
