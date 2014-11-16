Router.configure({
  layoutTemplate: 'layout'
});


Router.route('/', {name: 'home'});
Router.route('/lists', {name: 'listsList'});
Router.route('/lists/add', {name: 'addList'});
Router.route('/lists/:_id/add', {
	name: 'addTask',
	data: function() { return Lists.findOne(this.params._id);}
});
Router.route('/lists/:_id', {
	name: 'listPage',
	data: function() { return Lists.findOne(this.params._id); }
});