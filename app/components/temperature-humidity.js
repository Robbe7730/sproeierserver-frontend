import Component from "@glimmer/component";
import { inject as service } from '@ember/service'

export default class TemperatureHumidityComponent extends Component {
  @service messages;

  get lastTemperature() {
    let message = this.messages.temperatureMessages[0];

    if (!message) {
      return "??";
    }

    return message.body;
  }

  get lastHumidity() {
    let message = this.messages.humidityMessages[0];

    if (!message) {
      return "??";
    }

    return message.body;
  }
}
