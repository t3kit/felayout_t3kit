module.exports.register = function(Handlebars)  {
    Handlebars.registerHelper('subNavExpandActive', function(collection, menuLevel, fn) {

        var parent;
        var mainParent;
        var ml;
        var mmm;
        if (this.page.basename === undefined) {
            parent = this.parent1;
            mainParent = this.basename;
            ml = this.menuLevel;
            mmm = this.isCurrentPage;
        } else {
            parent = this.page.parent1;
            mainParent = this.page.basename;
            ml = this.page.menuLevel;
            mmm = this.page.isCurrentPage;
        }

        var realMenuLvl = menuLevel - 1;

        var array = collection.slice().sort(function(a, b) {
            return a.data.position - b.data.position;
        });
        var total = array.length;
        var buffer = '';
        var i = 0;
        var j = total;

        var current;
        var newCollection = array.slice();
        newCollection.forEach(function(elem) {
            if (elem.isCurrentPage) {
                current = elem['parent' + realMenuLvl];
            }
        });

        console.log(current);
        while (i < j) {
            var item = array[i];
                if (mmm) {
                    if (parent === item['parent' + realMenuLvl] || mainParent === item['parent' + realMenuLvl] ) {
                        if (!item.data.hideInMenu) {
                            if (item.menuLevel === menuLevel) {
                                buffer += fn.fn(item);
                            }
                        }
                    }
                } else if (item['parent' + realMenuLvl] === current) {
                    if (mainParent === item['parent' + realMenuLvl]) {
                        if (!item.data.hideInMenu) {
                            if (item.menuLevel === menuLevel) {
                                buffer += fn.fn(item);
                            }
                        }
                    }
                }
            i++;
        }

        return buffer;
    });
};
