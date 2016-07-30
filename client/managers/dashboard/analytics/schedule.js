Template.schedule.events({
    'click #schedule-job-button': function() {
        var userId = Meteor.userId();
        var websiteId = FlowRouter.getParam('id');
        var settings = {
            repeats: 1,
            delay: 10
        };

        Meteor.call('scheduleJob', userId, websiteId, settings);
    }
});

Template.schedule.helpers({
	'loadScheduleChart': function() {
		var chart = nv.models.scatterChart()
                             .forceX([0,24])
		                     .showLegend(false)
		                     .color(["black"]);
		var week = ["Sunday", "Saturday", "Friday", "Thursday", "Wednesday", "Tuesday", "Monday"];
		var values = [];

		chart.xAxis.tickFormat(d3.format(',.0f'));
		chart.yAxis.tickFormat(function(d, i) {
			return week[d];
		});

		for (var i = 0; i < 24; i++) {
			if (Math.random() > 0.75) values.push({x: i, y: 0, size: (Math.random() > 0.75) ? 300 : 0});
			if (Math.random() > 0.75) values.push({x: i, y: 1, size: (Math.random() > 0.75) ? 300 : 0});
			if (Math.random() > 0.75) values.push({x: i, y: 2, size: (Math.random() > 0.75) ? 300 : 0});
			if (Math.random() > 0.75) values.push({x: i, y: 3, size: (Math.random() > 0.75) ? 300 : 0});
			if (Math.random() > 0.75) values.push({x: i, y: 4, size: (Math.random() > 0.75) ? 300 : 0});
			if (Math.random() > 0.75) values.push({x: i, y: 5, size: (Math.random() > 0.75) ? 300 : 0});
			if (Math.random() > 0.75) values.push({x: i, y: 6, size: (Math.random() > 0.75) ? 300 : 0});
		}

		var data = [
			{
				key: 'Test', 
				values: values
			}
		];

		nv.addGraph(function() {
			d3.select('#schedule-chart svg')
			  .datum(data)
			  .call(chart);

			nv.utils.windowResize(chart.update);
			return chart;
		});


		$(document).on("click", "#schedule-chart svg", function(e) {
		    console.log (e.target.__data__);
			values.push({x: 0, y: 0, size: 300});
    		data[0].values = values;

		    d3.select('#schedule-chart svg').datum(data).call(chart);
		    nv.utils.windowResize(chart.update);

	    });

	}
});
