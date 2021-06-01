import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class MessageController extends Controller {
  @service store;
  @service messages;

  @action
  sendMessage() {
    this.publish("sprinklers/active", "1", true);
  }

  async publish(topic, body, retain=false) {
    let message = this.store.createRecord('mqtt-message', {
      messageType: 'PUBLISH',
      topic,
      body,
      retain
    });

    await message.save();

    await this.messages.updateMessages();
  }
}
