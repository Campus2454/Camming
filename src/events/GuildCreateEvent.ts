// https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-guildCreate
import { Guild } from 'discord.js';
import BaseEvent from '../utils/structures/BaseEvent';
import DiscordClient from '../client/client';
import { getRepository, FindOneOptions } from 'typeorm';
import { GuildConfiguration } from '../typeorm/entities/GuildConfiguration';

export default class guildCreate extends BaseEvent {
  constructor(
    private readonly guildConfigRepository = getRepository(GuildConfiguration)
  ) {
    super('guildCreate');
  }

  async run(client: DiscordClient, guild: Guild) {
    const chalk = require('chalk');

    const options: FindOneOptions<GuildConfiguration> = {
      where: {
        guildId: guild.id
      }
    };
    const config = await this.guildConfigRepository.findOne(options);
    if (config) {
      console.log((chalk.green(' joined')),`${guild.name}`,(chalk.yellow(`| server count ${client.guilds.cache.size} | A configuration was found!`)));
      client.configs.set(guild.id, config);
    } else {
      console.log((chalk.green(' joined')),`${guild.name}`,(chalk.yellow(`| server count ${client.guilds.cache.size} | A configuration was NOT found. Creating One.`)));
      const newConfig = this.guildConfigRepository.create({
        guildId: guild.id,
      });
      const savedConfig = await this.guildConfigRepository.save(newConfig);
      client.configs.set(guild.id, savedConfig);
    }
  }
}
