bmb.test.config.$module.controller("DateIntervals", function ($injector) {

    // Inheritance
    $injector.invoke(bmb.research.history.manager.HistoryDateIntervals, this);

    var self = this;

    this.last_7_days = function () {
        return {
            dateFrom: self.getOffsetDate(7),
            dateTo: new Date()
        };
    };

});