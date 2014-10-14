define([
    'views/view', 
    'text!views/categories/categories.html',
    'app'
], function(View, html, app){
    var model = {
        categories: app.data.categories,
        onCategorySelect: function(e){
            var cat = e.data.name;
            $.publish('/category/selected', [cat]);
            APP.instance.navigate('todos?category=' + cat);
        }
    };
    
    return new View('categories', html, model);
});