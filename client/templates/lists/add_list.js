Template.addList.events({ 
	'submit form': function(e) {
    	e.preventDefault();
		var list = {
			title: $(e.target).find('[name=title]').val()
		};
		console.log(list);

	list._id = Lists.insert(list);
     Router.go('listsList');
  }
});