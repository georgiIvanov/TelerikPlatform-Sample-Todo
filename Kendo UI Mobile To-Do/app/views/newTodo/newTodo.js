define([
    'views/view',
    'text!views/newTodo/newTodo.html'
       ], function (View, html) {
    var model = kendo.observable({
        text: null,
        add: function (e) {
            $.publish('/newTodo/add', [this.get('text')]);
        },
        close: function (e) {
            modalView.close();
        }
    });

    var events = {
        init: function(e){
            modalView = e.sender;
        },
        open: function(){
            model.set("text", "");
        }
    };

    return new View('newTodo', html, model, events);
});