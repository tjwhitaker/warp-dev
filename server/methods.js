Meteor.methods({
	'warpdrive': function(userId, url) {

		import phantomas from 'phantomas';

		var metrics = Async.runSync(function (done) {
			var task = phantomas(url, function(err, json, results) {
				var metrics = results.getMetrics();
				metrics.time = new Date();
				done(err, metrics);
			});

			task.on('progress', function(progress) {
			    // reports page loading progress
				console.log("Loading Progress: %d%", progress);
			});

			task.on('log', function(msg) {
			    // emitted on every log message sent by phantomas
			    console.log("Log: %s", msg);
			});

			task.on('error', function(exitCode) {
			    // reports phantomas exit code (if not zero)
			    console.log("Exit Code: %d", exitCode);
			});
		});

		Meteor.users.update({_id: userId}, {$push: {metrics: metrics.result}});
		console.log('Updated User: %s', userId);
	}
});
