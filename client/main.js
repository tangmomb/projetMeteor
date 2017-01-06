import { Template } from 'meteor/templating';
/*import { ReactiveVar } from 'meteor/reactive-var';*/

import './main.html';

import { Accounts } from 'meteor/accounts-base';

Accounts.ui.config({
  passwordSignupFields: 'USERNAME_ONLY',

});

Template.contenu.helpers({
  touslestutos: function ()
  {
    return tutos.find();
  }
});

Template.contenu.events({
  "click #add_tuto" : function (event, template)
  {
    var img_tuto = template.find("#image-tuto").value;
    var nouveau_tuto = template.find("#nom-tuto").value;
    var texte_tuto = template.find("#description-tuto").value;
    var theme_tuto = template.find("#selector").value;
    tutos.insert( {image: img_tuto, name : nouveau_tuto, description: texte_tuto, theme : theme_tuto });
  },
  'click .delete'() {
    tutos.remove(this._id);
  },
  "click .recherche" : function (event, template)
  {
    var search_tuto = template.find(".inputsearch").value;
    tutos.find( { search : search_tuto});
  },
});

connection.insert({
  text,
  createdAt: new Date(), // current time
  owner: Meteor.userId(),
  username: Meteor.user().username,
});


/*
Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
});
*/

