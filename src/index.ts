require('dotenv').config();
import "reflect-metadata";
import { registerSlashCommands, registerCommands, registerEvents } from './utils/registry';
import { } from 'dotenv';
import DiscordClient from './client/client';
import { GuildConfiguration } from "./typeorm/entities/GuildConfiguration";
import { getRepository, createConnection } from "typeorm";
import { Collection, IntentsBitField } from 'discord.js';
import { slashCommands } from "./slashCommands/SlashCommands";
import chalk from 'chalk';
const wait = require('node:timers/promises').setTimeout;
const client = new DiscordClient({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.MessageContent,
    IntentsBitField.Flags.DirectMessages,
  ],
});
(async () => {
  const connection_start = new Date().getTime();
  await createConnection({
    type: 'mysql',
    host: process.env.MYSQL_DB_HOST,
    port: 3306,
    username: process.env.MYSQL_DB_USER,
    password: process.env.MYSQL_DB_PASSWORD,
    database: process.env.MYSQL_DB_DATABASE,
    synchronize: true,
    entities: [GuildConfiguration],
  })
  .then(() => {
    const connection_time = new Date().getTime() - connection_start;console.log((chalk.green(' - ✔')),'Connected to the database successfully.',(chalk.yellow(` (${connection_time}ms)`)));})
  .catch((error) => {console.log((chalk.red(' - ✖',error)));});

  // client.prefix = config.prefix || client.prefix;
  const configRepo = getRepository(GuildConfiguration);
  const guildConfigs = await configRepo.find();
  const configs = new Collection<string, GuildConfiguration>();
  guildConfigs.forEach((config) => configs.set(config.guildId, config));

  client.configs = configs;
  // console.log(client.configs);

  client.on('interactionCreate', async (interaction) => {
    const myInstance = new slashCommands();
    myInstance.slashCommands(interaction, client);
  });
  // await registerCommands(client, '../commands');
  await registerEvents(client, '../events');

  const start_login = new Date().getTime();
  module.exports = { start_login };

  await client.login(process.env.BOT_TOKEN);
})();