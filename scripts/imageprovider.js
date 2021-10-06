(
    function(window){
        let App=window.App || {};
        let $=window.jQuery;
        function ImageProvider(selector){
            this.$inputElement=$(selector);

        }
        ImageProvider.prototype.addUrlImageHandler=function(getTags,getColors,showImage){
            this.$inputElement.on('input',function (event) {
                let urlImage=event.target.value;
                getTags(urlImage);
                getColors(urlImage);
                showImage(urlImage);
            })


        }
        App.ImageProvider=ImageProvider;
        window.App=App;

    }

)(window);