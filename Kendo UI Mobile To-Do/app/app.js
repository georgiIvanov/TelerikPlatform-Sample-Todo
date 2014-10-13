define([
    'datasources/categoriesDatasource',
    'datasources/todosDataSource'
], function(catDataSrc, todosDataSource){
   
    var app = {
        init: function(){
            this.instance = new kendo.mobile.Application(document.body, {
                skin: 'flat',
                initialView: 'todos'
            });  
        },
        data: {
            categories: catDataSrc,
            todos: todosDataSource
        }
    };
    
    return app;
});