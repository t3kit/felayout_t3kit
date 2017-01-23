module.exports.register = function(Handlebars)  {
    Handlebars.registerHelper('addNavData', function() {

        var devDir = /dev/i;

        // add data to page colection
        var collection = this.pages;
        for (var i in collection) {
            var pageSrc = collection[i].src;
            var devIndex = devDir.exec(pageSrc).index;
            var collectionMenuLevels;
            var collectionParentsArr;
            if (devIndex > 0) {
                collectionMenuLevels = pageSrc.substr(devIndex).match(/\//ig).length - 2;
                collectionParentsArr = pageSrc.substr(devIndex).split('/');
            } else {
                collectionMenuLevels = pageSrc.match(/\//ig).length - 2;
                collectionParentsArr = pageSrc.split('/');
            }
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
            } else if (collectionMenuLevels === 6) {
                collection[i].parent1 = collectionParentsArr[collectionMenuLevels - 3];
                collection[i].parent2 = collectionParentsArr[collectionMenuLevels - 2];
                collection[i].parent3 = collectionParentsArr[collectionMenuLevels - 1];
                collection[i].parent4 = collectionParentsArr[collectionMenuLevels];
                collection[i].parent5 = collectionParentsArr[collectionMenuLevels + 1];
            } else if (collectionMenuLevels === 7) {
                collection[i].parent1 = collectionParentsArr[collectionMenuLevels - 4];
                collection[i].parent2 = collectionParentsArr[collectionMenuLevels - 3];
                collection[i].parent3 = collectionParentsArr[collectionMenuLevels - 2];
                collection[i].parent4 = collectionParentsArr[collectionMenuLevels - 1];
                collection[i].parent5 = collectionParentsArr[collectionMenuLevels];
                collection[i].parent6 = collectionParentsArr[collectionMenuLevels + 1];
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
        var thisPageSrc = this.page.src;
        var thisDevIndex = devDir.exec(thisPageSrc).index;
        var menuLevels;
        var parentsArr;
        if (thisDevIndex > 0) {
            menuLevels = thisPageSrc.substr(thisDevIndex).match(/\//ig).length - 2;
            parentsArr = thisPageSrc.substr(thisDevIndex).split('/');
        } else {
            menuLevels = thisPageSrc.match(/\//ig).length - 2;
            parentsArr = thisPageSrc.split('/');
        }
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
        } else if (menuLevels === 6) {
            this.page.parent1 = parentsArr[menuLevels - 3];
            this.page.parent2 = parentsArr[menuLevels - 2];
            this.page.parent3 = parentsArr[menuLevels - 1];
            this.page.parent4 = parentsArr[menuLevels];
            this.page.parent5 = parentsArr[menuLevels + 1];
        } else if (menuLevels === 7) {
            this.page.parent1 = parentsArr[menuLevels - 4];
            this.page.parent2 = parentsArr[menuLevels - 3];
            this.page.parent3 = parentsArr[menuLevels - 2];
            this.page.parent4 = parentsArr[menuLevels - 1];
            this.page.parent5 = parentsArr[menuLevels];
            this.page.parent6 = parentsArr[menuLevels + 1];
        }
    });
};
