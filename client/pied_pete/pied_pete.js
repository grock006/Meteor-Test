var Data = new Meteor.Collection("data");

Template.home.events({
	'click .data': function(){
		Data.insert({
			data: 'this is my data',
			name: 'name',
			social: "250"
		});

	}
})


Template.home.helpers({
	data_return: function(){
		return Data.find({});
	}
})
