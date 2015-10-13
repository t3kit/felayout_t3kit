jQuery(function($) {
    var substringMatcher = function(strs) {
        return function findMatches(q, cb) {
            var matches, substrRegex;

            // an array that will be populated with substring matches
            matches = [];

            // regex used to determine if a string contains the substring `q`
            substrRegex = new RegExp(q, 'i');

            // iterate through the pool of strings and for any string that
            // contains the substring `q`, add it to the `matches` array
            $.each(strs, function(i, str) {
                if (substrRegex.test(str)) {
                    // the typeahead jQuery plugin expects suggestions to a
                    // JavaScript object, refer to typeahead docs for more info
                    matches.push({ value: str });
                }
            });

            cb(matches);
        };
    };
    var states = ['map', 'isotope', 'Newsletter', 'subscription', 'tabs',
        'accordion', 'carousel', 'icons', 'design', 'pxa', 'Pixelant',
        'core', 't3layout', 'FElayout', 'bootstrap', 'pxa core', 'search', 'content',
        'contact', 'news', 'language', 'site', 'Pixalant Core',
        'RTE', 'images', 'link', 'tablae', 'form', 'file'
    ];
    $('#the-basics .typeahead').typeahead({
        hint: false,
        highlight: true,
        minLength: 2
    },
    {
        name: 'quicksearch',
        displayKey: 'value',
        source: substringMatcher(states)
    });
});
