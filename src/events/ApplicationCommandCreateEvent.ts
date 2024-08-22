// https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-applicationCommandCreate
import { ApplicationCommand } from 'discord.js';
import BaseEvent from '../utils/structures/BaseEvent';
import DiscordClient from '../client/client';

export default class ApplicationCommandCreate extends BaseEvent {
  constructor() {
    super('applicationCommandCreate');
  }
  
  async run(client: DiscordClient, command: ApplicationCommand) {
    console.log('hi')
  }
}