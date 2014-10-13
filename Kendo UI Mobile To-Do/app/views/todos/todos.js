define([
    'views/view',
    'text!views/todos/todos.html',
    'app'
], function(View, html, app){
   
    var navbar;
    var category;
    var model = kendo.observable({
        todos: app.data.todos,
        removeTodo: function(e){
            this.todos.remove(e.data);
        }
    });
    
    var events = {
        init: function(e){
            navbar = e.view.header.find('.km-navbar').data('kendoMobileNavBar');
        },
        afterShow: function(e){
            category = e.view.params.category || 'Work';
            model.todos.filter({
                field: 'category',
                operator: 'eq',
                value: category
            });
            navbar.title(category);
        }
    };
    
    return new View('todos', html, model, events);
});