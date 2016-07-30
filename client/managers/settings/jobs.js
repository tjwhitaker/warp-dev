Template.jobs.helpers({
	jobs: function() {
		return Jobs.find();
	},
	strip: function(num, str) {
		return str.substr(0, num) + "...";
	},
	runAt: function() {
		return moment(this.after).fromNow();
	},
	lastUpdated: function() {
		return moment(this.updated).fromNow();
	},
	numRepeats: function(repeats) {
		if (repeats > Job.forever - 7199254740935)
			return "∞";
		else
			return repeats;
	},
	numRetries: function(retries) {
		if (retries > Job.forever - 7199254740935)
			return "∞";
		else
			return retries;
	}
});
