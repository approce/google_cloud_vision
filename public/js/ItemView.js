define([
    'text!js/MainView.html',
    'marionette'
], function (template) {

    return Marionette.ItemView.extend({
        template: _.template(template),

        ui: {
            image          : '#image',
            imageFile      : '#image-file',
            imageContainer : '#image-container',
            pendingBar     : '#pending',
            labelsContainer: '#labels-container'
        },

        events: {
            'change @ui.imageFile': readFile
        },

        onRender: function () {
            this.ui.imageContainer.hide();
        }
    });

    function readFile(e) {
        var view  = this,
            files = e.target.files,
            file  = files && files[0];

        var reader    = new FileReader();
        reader.onload = function (e) {
            view.ui.imageContainer.show();
            view.ui.image.attr('src', e.target.result);
            view.triggerMethod('image:uploaded', e.target.result);
        };
        reader.readAsDataURL(file);
    }
});