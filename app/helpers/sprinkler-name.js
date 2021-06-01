import { helper } from '@ember/component/helper';

export default helper(function sprinklerName(params) {
  let [message] = params;
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
});
