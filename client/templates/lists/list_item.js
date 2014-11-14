  Template.listItem.events({
    // "click .toggle-checked": function () {
    //   // Set the checked property to the opposite of its current value
    //   Tasks.update(this._id, {$set: {checked: ! this.checked}});
    // },
    "click .delete": function () {
      Lists.remove(this._id);
    }
  });