Meteor.methods({
	'scheduleJob': function(userId, websiteId, settings) {
		var job = new Job(Jobs, 'warptest', {userId: userId, websiteId: websiteId});

		job.repeat({repeats: settings.repeats, wait: settings.delay}).save();
	}
});
