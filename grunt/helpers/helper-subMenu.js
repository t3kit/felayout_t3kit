module.exports.register = function(Handlebars)  {
    Handlebars.registerHelper('subMenu', function(collection, menuLevel, fn) {

        // build submenu
        var parent;
        var mainParent;
        if (this.page.basename === undefined) {
            parent = this.parent1;
            mainParent = this.basename;
        } else {
            parent = this.page.parent1;
            mainParent = this.page.basename;
        }
        var realMenuLvl = menuLevel - 1;

        var array = collection.slice().sort(function(a, b) {
            return a.data.position - b.data.position;
        });
        var total = array.length;
        var buffer = '';
        var i = 0;
        var j = total;

        while (i < j) {
            var item = array[i];
            if (parent === item['parent' + realMenuLvl] || mainParent === item['parent' + realMenuLvl]) {
                if (!item.data.hideInMenu) {
                    if (item.menuLevel === menuLevel) {
                        buffer += fn.fn(item);
                    }
                }
            }
            i++;
        }
        return buffer;
    });
};
