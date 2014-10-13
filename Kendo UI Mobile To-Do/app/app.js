define([
    'datasources/categoriesDataSource',
    'datasources/todosDataSource',
], function (catDataSrc, todosDataSource) {

    var app = {
        init: function () {
            var self = this;

            require(['views/todos/todos'], function () {
                self.instance = new kendo.mobile.Application(document.body, {
                    skin: 'flat',
                    initialView: 'todos'
                });
            });


        },
        data: {
            categories: catDataSrc,
            todos: todosDataSource
        }
    };

    return app;
});