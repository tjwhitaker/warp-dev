Meteor.methods({
	'scheduleJob': function(userId, websiteId, settings) {
		var job = new Job(Jobs, 'warptest', {userId: userId, websiteId: websiteId});

		job.repeat({repeats: settings.repeats, wait: settings.delay}).save();
	},
    'cancelJobs': function() {
        var ids = Jobs.find({ status: { $in: Job.jobStatusCancellable }}, { fields: { _id: 1 }})
                      .map(function(d) {return d._id});
        if (ids.length > 0) Jobs.cancelJobs(ids);
    },
    'removeJobs': function() {
        var ids = Jobs.find({ status: { $in: Job.jobStatusRemovable }}, { fields: { _id: 1 }})
                      .map(function(d) {return d._id});
        
        if (ids.length > 0) Jobs.removeJobs(ids);
    }
});
