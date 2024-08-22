import BaseEvent from '../../utils/structures/BaseEvent';
import DiscordClient from '../../client/client';
import { ActivityType, Options } from 'discord.js';
import { slashCommands } from '../../slashCommands/SlashCommands';
import chalk from 'chalk';
const { start_login } = require('../../index');

export default class ReadyEvent extends BaseEvent {
  constructor() {
    super('ready');
  }
  async run (client: DiscordClient) {
    const time_login = new Date().getTime() - start_login;
    console.log((chalk.green(' - ✔')),'Bot has logged in.',(chalk.yellow(` (${time_login}ms)`)));
    client.user?.setActivity({ name: `camming.xyz | /help`, type: ActivityType.Playing})
  }
}
