Template.resources.helpers({
    'resources': function() {
        var website = Websites.findOne(FlowRouter.getParam('id'));
        var offenders = website.data[0].offenders;
        var resources = [];

        for (var i = 0; i < offenders.cssCount.length; i++) {
            resources.push(offenders.cssCount[i]);
        }

        for (var i = 0; i < offenders.jsCount.length; i++) {
            resources.push(offenders.jsCount[i]);
        }

        for (var i = 0; i < offenders.imageCount.length; i++) {
            resources.push(offenders.imageCount[i]);
        }

        for (var i = 0; i < offenders.webfontCount.length; i++) {
            resources.push(offenders.webfontCount[i]);
        }

        return resources;
    }
});
