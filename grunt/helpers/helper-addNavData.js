module.exports.register = function(Handlebars)  {
    Handlebars.registerHelper('addNavData', function() {

        // add data to page colection
        var collection = this.pages;
        for (var i in collection) {
            var collectionMenuLevels = collection[i].src.match(/\//ig).length - 2;
            var collectionParentsArr = collection[i].src.split('/');
            collection[i].menuLevel = collectionMenuLevels;
            if (collectionMenuLevels === 2) {
                collection[i].parent1 = collectionParentsArr[collectionMenuLevels + 1];
            } else if (collectionMenuLevels === 3) {
                collection[i].parent1 = collectionParentsArr[collectionMenuLevels];
                collection[i].parent2 = collectionParentsArr[collectionMenuLevels + 1];
            } else if (collectionMenuLevels === 4) {
                collection[i].parent1 = collectionParentsArr[collectionMenuLevels - 1];
                collection[i].parent2 = collectionParentsArr[collectionMenuLevels];
                collection[i].parent3 = collectionParentsArr[collectionMenuLevels + 1];
            } else if (collectionMenuLevels === 5) {
                collection[i].parent1 = collectionParentsArr[collectionMenuLevels - 2];
                collection[i].parent2 = collectionParentsArr[collectionMenuLevels - 1];
                collection[i].parent3 = collectionParentsArr[collectionMenuLevels];
                collection[i].parent4 = collectionParentsArr[collectionMenuLevels + 1];
            }
        }

        // check if top level page has subpages, and add data
        var newCollection = collection.slice();
        collection.forEach(function(elem) {
            var collectionElem = elem;
            newCollection.forEach(function(elem) {
                if (elem.parent1 === collectionElem.basename) {
                    collectionElem.subpages = true;
                }
            });
        });

        // add data to each page
        var menuLevels = this.page.src.match(/\//ig).length - 2;
        var parentsArr = this.page.src.split('/');
        this.page.menuLevel = menuLevels;
        if (menuLevels === 2) {
            this.page.parent1 = parentsArr[menuLevels + 1];
        } else if (menuLevels === 3) {
            this.page.parent1 = parentsArr[menuLevels];
            this.page.parent2 = parentsArr[menuLevels + 1];
        } else if (menuLevels === 4) {
            this.page.parent1 = parentsArr[menuLevels - 1];
            this.page.parent2 = parentsArr[menuLevels];
            this.page.parent3 = parentsArr[menuLevels + 1];
        } else if (menuLevels === 5) {
            this.page.parent1 = parentsArr[menuLevels - 2];
            this.page.parent2 = parentsArr[menuLevels - 1];
            this.page.parent3 = parentsArr[menuLevels];
            this.page.parent4 = parentsArr[menuLevels + 1];
        }
    });
};
