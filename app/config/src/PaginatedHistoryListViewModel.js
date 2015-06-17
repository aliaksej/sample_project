bmb.test.config.$module.controller("PaginatedHistoryListViewModel", function ($injector, historyModel, dateIntervals) {

    $injector.invoke(
        bmb.research.history.list.HistoryViewListModel,
        this,
        { historyModel: historyModel, dateIntervals: dateIntervals }
    );

    $injector.invoke(bmb.core.list.PaginatedListViewModel, this);

    this.maxLength = 30;

});
