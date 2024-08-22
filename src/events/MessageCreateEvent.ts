// https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-messageCreate
import { Message } from 'discord.js';
import BaseEvent from '../utils/structures/BaseEvent';
import DiscordClient from '../client/client';
import { getRepository } from 'typeorm';
import { GuildConfiguration } from '../typeorm/entities/GuildConfiguration';
const wait = require('node:timers/promises').setTimeout;

export default class messageCreate extends BaseEvent {
  constructor(
    private readonly guildConfigRepository = getRepository(GuildConfiguration)
  ) {
    super('messageCreate');
  }
  
  async run(client: DiscordClient, message: Message) {
    const config = client.configs.get(message.guildId!);
    if (message.content.toLowerCase() == config?.prefix+'prefix' || message.content.toLowerCase() == 'prefix') {
      message.reply('Prefix คือ : **`'+config?.prefix+'`**');
    }; if (message.content.toLowerCase() == config?.prefix+'ping' || message.content.toLowerCase() == 'ping') {
      message.reply('🏓 **Pong**!  <a:loading2:1231898437474193498>').then((Message) => {
      let ping = Math.round(client.ws.ping);
      wait(ping * 2);
      if (ping >= 999){Message.edit('🏓 **Pong**!  <a:loading:1211212089947979807>'+' `'+ping+'ms`');}
      else if (ping >= 501){Message.edit('🏓 **Pong**!  <:ping3:1231145932436017213>'+' `'+ping+'ms`');}
      else if (ping >= 401 && ping <= 500){Message.edit('🏓 **Pong**!  <:ping2:1231145930317762600>'+' `'+ping+'ms`');}
      else if (ping >= 251 && ping <= 400){Message.edit('🏓 **Pong**!  <:ping1:1231145926710530130>'+' `'+ping+'ms`');}
      else if (ping >= 0 && ping <= 250){Message.edit('🏓 **Pong**!  <:ping:1231145924898586685>'+' `'+ping+'ms`');}
      else if (ping == -1){Message.edit('🏓 **Pong**!  Error to checking latency. Please try again.');}
      else {Message.edit('🏓 **Pong**!  Error to checking latency. `'+ping+'ms`')}
      })
    };
  }
}
