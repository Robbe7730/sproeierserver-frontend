import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default class MessageController extends Controller {
  @service messages;
}
