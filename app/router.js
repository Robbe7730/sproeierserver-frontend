import EmberRouter from '@ember/routing/router';
import config from 'sproeierserver-frontend/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('message');
  this.route('sprinkler');
  this.route('temperature');
  this.route('battery');
});
