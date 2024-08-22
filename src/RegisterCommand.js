require('dotenv').config();
const { REST, Routes, SlashCommandBuilder, ChannelType } = require('discord.js');

const chalk = require('chalk');
const commands = [
    new SlashCommandBuilder()
        .setName('prefix')
        .setDescription('Get or set the command prefix.')
        .setDescriptionLocalization('th', 'เช็คหรือตั้งค่าcommand prefix')
        .addStringOption(option => {
            return option
            .setName('prefix')
            .setDescription('Set the command prefix. example: !')
            .setDescriptionLocalization('th', 'ตั้งค่าcommand prefix (ตัวอย่าง: !)')
            .setMaxLength(1)
            .setMinLength(1)
            .setRequired(false)
        })
        .setDMPermission(false)
    ,
    new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Pong! See the latency of the bot.')
        .setDescriptionLocalization('th', 'Pong! ดูเวลาแฝงของบอท')
    ,
    new SlashCommandBuilder()
        .setName('help')
        .setDescription('Bot info & Commands.')
        .setDescriptionLocalization('th', 'ข้อมูลบอทและรายการคำสั่ง')
    ,
    new SlashCommandBuilder()
        .setName('ban')
        // .setNameLocalization('th', 'แบน')
        .setDescription('Ban user')
        .setDescriptionLocalization('th', 'แบนสมาชิก')
        .addUserOption(option => {
            return option
            .setName('user')
            .setDescription('Search and choose users or enter the ID user that you want to ban.')
            .setDescriptionLocalization('th', 'ค้นหาและเลือกผู้ใช้หรือป้อนIDผู้ใช้ที่คุณต้องการแบน')
            .setRequired(true)
        })
        .addStringOption(option => {
            return option
            .setName('reason')
            .setDescription('The reason for banning')
            .setDescriptionLocalization('th', 'เหตุผลในการแบน')
        })
        .setDMPermission(false)
    ,
    new SlashCommandBuilder()
        .setName('unban')
        .setDescription('Unban user')
        .setDescriptionLocalization('th', 'ปลดแบนสมาชิก')
        .addUserOption(option => {
            return option
            .setName('user')
            .setDescription('Search and choose users or enter the ID user that you want to unban.')
            .setDescriptionLocalization('th', 'ค้นหาและเลือกผู้ใช้หรือป้อนIDผู้ใช้ที่คุณต้องการปลดแบน')
            .setRequired(true)
        })
        .setDMPermission(false)
    ,
];

const dev = [
    new SlashCommandBuilder()
        .setName('test1')
        .setDescription('test1')
    ,
    new SlashCommandBuilder()
        .setName('welcome')
        .setDescription('Set a welcome channel for new members.')
        .setDescriptionLocalization('th', 'ตั้งค่าช่องต้อนรับสมาชิกใหม่')
        .addChannelOption(option => {
            return option
            .setName('channel')
            .setDescription('Messaging channel welcomes new members.')
            .setDescriptionLocalization('th', 'ช่องที่ต้องการให้บอทส่งข้อความ')
            .addChannelTypes(ChannelType.GuildText)
            .setRequired(true)
        })
        .setDMPermission(false)
    ,
    new SlashCommandBuilder()
        .setName('log')
        .setDescription('Set channels for sending audit records.')
        .setDescriptionLocalization('th', 'ตั้งค่าช่องสำหรับส่งบันทึกการตรวจสอบ')
        .addChannelOption(option => {
            return option
            .setName('channel')
            .setDescription('Channels for sending audit records.')
            .setDescriptionLocalization('th', 'ช่องที่ต้องการให้บอทส่งบันทึกการตรวจสอบ')
            .addChannelTypes(ChannelType.GuildText)
            .setRequired(true)
        })
        .setDMPermission(false)
    ,
    new SlashCommandBuilder()
        .setName('kick')
        .setDescription('Kick user')
        .setDescriptionLocalization('th', 'เตะสมาชิก')
        .addUserOption(option => {
            return option
            .setName('user')
            .setDescription('Search and choose users or enter the ID user that you want to kick.')
            .setDescriptionLocalization('th', 'ค้นหาและเลือกผู้ใช้หรือป้อนIDผู้ใช้ที่คุณต้องการเตะ')
            .setRequired(true)
        })
        .addStringOption(option => {
            return option
            .setName('reason')
            .setDescription('The reason for kicking')
            .setDescriptionLocalization('th', 'เหตุผลในการเตะ')
        })
        .setDMPermission(false)
    ,
];
const rest = new REST().setToken(process.env.BOT_TOKEN);
( async () => {
    try {
        console.log(chalk.yellow(' - Registering SlashCommands...'))
        await rest.put(Routes.applicationCommands(process.env.BOT_CLIENT_ID),
        { body: commands },
        );
        console.log(chalk.green(' - SlashCommands registered successfully!'))

        
        console.log(chalk.yellow(' - Registering SlashCommands2...'))
        await rest.put(Routes.applicationGuildCommands(process.env.BOT_CLIENT_ID, '1018508978445099098'),
        { body: dev },
        );
        console.log(chalk.green(' - SlashCommands2 registered successfully!'))
    } catch (error) {
        console.error(` - Register error : ${error}`)
    }
})();