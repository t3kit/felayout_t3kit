module.exports.register = function(Handlebars, options)  {
    Handlebars.registerHelper('ifChildrensActive_addClass', function(array, fn) {
        var parentName = this.basename;
        var menuLevel = this.menuLevel;
        var total = array.length;
        var buffer = '';
        var i = 0;
        var j = total;
        while (i < j) {
            var item = array[i];
            if (parentName === item['parent' + menuLevel]) {
                if (item.isCurrentPage) {
                    buffer += fn.fn(item);
                }
            }
            i++;
        }
        return buffer;
    });
};
