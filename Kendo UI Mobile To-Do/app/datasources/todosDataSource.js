define([], function () {
    var category;
    var todos = new kendo.data.DataSource({
        data: [
            {
                title: "Talk to corporate",
                category: "Work"
            },{
                title: "Promote synergy",
                category: "Work"
            },{
                title: "Find out what synergy is",
                category: "Personal"
            },{
                title: "Eat some pot de creme",
                category: "Personal"
            }]
    });
    
    $.subscribe('/newTodo/add', function(e, text){
        todos.add({
            title: text,
            category: category || "Work"
        });
    });
    
    $.subscribe("/category/selected", function(e, cat){
        category = cat;
    });
    
    return todos;
});