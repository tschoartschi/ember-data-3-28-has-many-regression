import RESTAdapter from '@ember-data/adapter/rest';

export default class ApplicationAdapter extends RESTAdapter {
  host = 'https://api.roomle.com/v2';
  coalesceFindRequests = true;
}
