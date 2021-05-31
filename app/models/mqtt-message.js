import Model, { attr } from '@ember-data/model';

export default class MqttMessageModel extends Model {
  @attr('string') messageType;
  @attr('date') createdAt;
  @attr('string') topic;
  @attr('string') body;
  @attr('boolean') retain;
}
