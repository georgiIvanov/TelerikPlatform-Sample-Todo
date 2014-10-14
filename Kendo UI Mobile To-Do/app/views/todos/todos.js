define([
    'views/view',
    'text!views/todos/todos.html',
    'app'
], function (View, html, app) {

    var navbar;
    var category;
    var fetched = {};
    var fetchMaybe = function (type, cb) {
        if (!fetched[type]) {
            fetched[type] = true;
            app.data[type].fetch(cb);
        } else {
            cb();
        }
    };

    var findCategory = function (id) {
        return $.Deferred(function (dfd) {
            if (!id) {
                dfd.resolve(app.defaults.category);
            } else {
                fetchMaybe("categories", function () {
                    app.data.categories.filter({
                        field: "Id",
                        operator:"eq",
                        value: id
                    });
                    dfd.resolve(app.data.categories.view()[0]);
                });
            }
        }).promise();
    };

    var model = kendo.observable({
        todos: app.data.todos,
        removeTodo: function (e) {
            this.todos.remove(e.data);
            this.todos.sync();
        }
    });

    var events = {
        init: function (e) {
            navbar = e.view.header.find('.km-navbar').data('kendoMobileNavBar');
        },
        show: function (e) {
            this.loader.show();
        },
        afterShow: function (e) {
            var self = this;
            fetchMaybe("todos", function () {
                findCategory(e.view.params.category).then(function (category) {
                    self.loader.hide();
                    model.todos.filter({
                        field: 'category',
                        operator: 'eq',
                        value: category.id
                    });
                    navbar.title(category.name);
                });
            });
            navbar.title(category);
        }
    };

    return new View('todos', html, model, events);
});