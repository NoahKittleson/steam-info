import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    var appid;
    return Ember.$.getJSON('http://localhost:4000/steam/games').then(function(response){
      var list = response.applist.apps.app;
      console.log(list);
      var findAppIDFromTitle = function(){
        for(var item in list) {
          if (item.name === params.name) {
            appid = item.appid;
          }

        }
      };
      findAppIDFromTitle('Counter-Strike');

    });
  },
});
