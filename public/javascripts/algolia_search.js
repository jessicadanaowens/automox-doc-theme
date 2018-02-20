function initAlgoliaSearch() {
    var client = algoliasearch("DU78FLOKML", "2fcf674f4d062950acc089d166eacd1e");
    var index = client.initIndex('docs_automox');
    var zendesk_index = client.initIndex('zendesk_automox_articles');

    var searchInput = document.getElementById("aa-search-input");
    var inputContainer = document.getElementById("aa-input-container");


    //initialize autocomplete on search input (ID selector must match)
    autocomplete('#aa-search-input',
        { hint: true, debug:false }, [
            {
                source: autocomplete.sources.hits(index, { hitsPerPage: 3 }),
                displayKey: 'title',
                templates: {
                    header: '<div class="aa-suggestions-category">Documentation</div>',
                    suggestion: function(suggestion) {
                        return '<span><a href="' +
                            suggestion.url + '">' +
                            suggestion._highlightResult.title.value + '</a></span>'
                    }
                }
            },
            {
                source: autocomplete.sources.hits(zendesk_index, { hitsPerPage: 3 }),
                displayKey: 'title',
                templates: {
                    header: '<div class="aa-suggestions-category">Knowledge Base Articles</div>',
                    suggestion: function(suggestion) {
                        return '<span><a href="https://support.automox.com/hc/en-us/articles/' +
                            suggestion.id + '">' +
                            suggestion._highlightResult.title.value + '</a></span>'
                    }
                }
            }
            //Handle add/removing a class based on if text has been entered in the search input
            //attach custom event handler - autocomplete:updated triggers when dataset is rendered
        ]).on('autocomplete:updated', function() {
        if (searchInput.value.length > 0) {
            inputContainer.classList.add("input-has-value");
        }
        else {
            inputContainer.classList.remove("input-has-value");
        }
    });

    //Handle clearing the search input on close icon click
    document.getElementById("icon-close").addEventListener("click", function() {
        searchInput.value = "";
        inputContainer.classList.remove("input-has-value");
    });
};

$(function() {
    initAlgoliaSearch();
});
