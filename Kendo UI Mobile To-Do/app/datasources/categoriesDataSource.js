define([], function(){
    var cats = new kendo.data.DataSource({
        data: [
            {name: "Work"},
            {name: "Personal"},
            {name: "Other"}
        ] 
    });
    
    $.subscribe('/newCategory/add', function(e, text){
        var cat = cats.add({
            name: text 
        });
    });
    
    return cats;
});