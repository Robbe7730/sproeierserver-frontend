import Service from '@ember/service';
import { tracked } from 'tracked-built-ins';
import { inject as service } from '@ember/service';
import { createCache, getValue } from '@glimmer/tracking/primitives/cache';

export default class MessagesService extends Service {
  @service store;

  messages = tracked([]);

  sprinklerMessagesCache = createCache(() => {
    return this.messages.filter((message) => message.topic === 'sprinklers/active');
  })

  async updateMessages() {
    console.log("Updating");
    const queryResult = await this.store.query('mqtt-message', {
      sort: '-created-at',
    });
    this.messages.length = 0;
    this.messages.push(...queryResult.toArray())
  }

  get sprinklerMessages() {
    return getValue(this.sprinklerMessagesCache);
  }

  get lastActiveSprinklerMessage() {
    if (this.sprinklerMessages.length === 0) {
      return null;
    }
    return this.sprinklerMessages[0];
  }
}
