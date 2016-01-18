module.exports.register = function(Handlebars)  {
    Handlebars.registerHelper('mainMenu_firstLevel', function(collection, fn) {
        // build main menu, first level
        var array = collection.slice().sort(function(a, b) {
            return a.data.position - b.data.position;
        });
        var total = array.length;
        var buffer = '';
        var i = 0;
        var j = total;
        while (i < j) {
            var item = array[i];
            if (!item.data.hideInMenu) {
                if (item.menuLevel === 1) {
                    buffer += fn.fn(item);
                }
            }
            i++;
        }
        return buffer;
    });
};
