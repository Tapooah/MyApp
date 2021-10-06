(
    function (window) {
        let App = window.App || {};

        function ImageProcessor() {
            this.token = 'Basic YWNjXzg3ZjU0MDAzYWI3OGM3NTphYzRmM2Y1ZDkyODNhYzE4ZTQxMGI0ZjczZjZmZmVhNA==';
        }

        function getResponse(urlImage, endpoint) {
            let data = {
                url: urlImage,
                token: this.token
            }
            return $.ajax({
                type: 'POST',
                contentType: 'application/json',
                data: JSON.stringify(data),
                url: 'http://imaggaservice.herokuapp.com/' + endpoint
            });


        ImageProcessor.prototype.getTags = function (urlImage) {
            return getResponse.call(this, urlImage, "tagging");
        };
        ImageProcessor.prototype.getColors = function (urlImage) {
            return getResponse.call(this, urlImage, "colors");
        };
    }

App.ImageProcessor = ImageProcessor;
window.App = App;

}

)
(window);