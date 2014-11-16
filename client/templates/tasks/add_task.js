Template.addTask.events({ 
	'submit form': function(e) {
    	e.preventDefault();
    	var currentListId = this._id;
    	var tasks = this.tasks || []

    	tasks.push({title: $(e.target).find('[name=title]').val()})


		Lists.update(currentListId, {$set: {'tasks':tasks}}, function(error) { if (error) {
        // display the error to the user
		alert(error.reason); } else {
        	Router.go('listPage', {_id: currentListId});
      	}
	});

  }
});