import Component from "@glimmer/component";
import { inject as service } from '@ember/service'

export default class ActiveSprinklerComponent extends Component {
  @service messages;

  get activeSprinklerName() {
    let message = this.messages.sprinklerMessages[0];

    if (!message) {
      return "Laden...";
    }
    switch (message.body) {
      case '0':
        return "Geen";
      case '1':
        return "Sproeier 1";
      case '2':
        return "Sproeier 2";
      case '3':
        return "Sproeier 3";
      default:
        return "Onbekend";
    }
  }
}
