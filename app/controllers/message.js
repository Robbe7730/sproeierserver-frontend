import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class MessageController extends Controller {
  @service store;

  @action
  sendMessage() {
    this.publish("hello/ember", "Hello world");
  }

  publish(topic, body, retain=false) {
    let message = this.store.createRecord('mqtt-message', {
      'messageType': 'PUBLISH',
      topic,
      body,
      retain
    });

    message.save();
  }
}
