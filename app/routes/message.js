import Route from '@ember/routing/route';

export default class MessageRoute extends Route {
  model() {
    return this.store.query('mqtt-message', {
      sort: '-created-at'
    })
  }
}
