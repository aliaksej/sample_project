bmb.test.config.FavoritesListViewModel = function ($injector, vlvRsiFavoriteItems) {

    $injector.invoke(bmb.core.list.PaginatedListViewModel, this);

    this.getCollection = function () {
        return vlvRsiFavoriteItems.getFavoriteItems(this.params);
    };

    var originalPrepareParams = this.prepareParams;
    this.prepareParams = function () {
        debugger;
    };
};