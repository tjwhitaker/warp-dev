Meteor.startup(function() {
	Jobs.remove({});
	Jobs.allow({
		admin: function(userId, method, params) {
			return true;
		}
	});

	Jobs.startJobServer();

	var queue = Jobs.processJobs('warptest', function(job, callback) {
		console.log('Working Job: %s', job.doc._id);
		Meteor.call('warptest', job.data.websiteId, job.data.userId);
		job.done();
		callback();
	});
});
