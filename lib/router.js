Router.configure({
  layoutTemplate: 'layout'
});


Router.route('/', {name: 'home'});

Router.route('/list', {name: 'listsList'});

Router.route('/list/add', {name: 'addList'});