require([
    'js/ItemView'
], function (ItemView) {
    var key = 'AIzaSyD4Ea9er9W8o9zuLIRmLFEXqyJbnIkprOY';

    var itemView = new ItemView({el: 'body'});

    itemView.render();

    itemView.on('image:uploaded', function (file) {
        itemView.ui.pendingBar.show();
        itemView.ui.labelsContainer.empty();
        execute(file).then(parseResponse.bind(itemView));
    });

    function execute(file) {
        file        = file.substring(file.indexOf('base64,') + 7);
        var url     = 'https://vision.googleapis.com/v1/images:annotate?key=' + key;
        var payload = JSON.stringify(generatePayload(file));

        return $.ajax({
            type       : 'POST',
            contentType: 'application/json',
            url        : url,
            data       : payload
        })
    }

    function generatePayload(file) {
        return {
            requests: [{
                image   : {
                    content: file
                },
                features: {
                    type      : 'LABEL_DETECTION',
                    maxResults: 10
                }
            }]
        };
    }

    function parseResponse(response) {
        var container = this.ui.labelsContainer;
        var labels    = response.responses[0].labelAnnotations;

        this.ui.pendingBar.hide();

        labels.forEach(function (entry) {
            var dscr  = entry.description;
            var score = Math.round(entry.score * 100);
            var el    = '<div>' + dscr + ' : ' + score + '%</div>';

            container.append(el);
        });
    }
});
