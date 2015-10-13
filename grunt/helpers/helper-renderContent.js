module.exports.register = function(Handlebars, options) {
    Handlebars.registerHelper('renderContent', function(template, options) {
        var partial = Handlebars.partials[template];
        partial = Handlebars.compile(partial);
        function update(obj) {
            var sources = [].slice.call(arguments, 1);
            sources.forEach(function(source) {
                Object.getOwnPropertyNames(source).forEach(function(propName) {
                    Object.defineProperty(obj, propName,
                        Object.getOwnPropertyDescriptor(source, propName));
                });
            });
            return obj;
        }
        var context = update({}, this, options.hash);
        return new Handlebars.SafeString(partial(context));
    });
};
