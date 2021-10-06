(
    function () {
        let App=window.App;
        let imageProvider=new App.ImageProvider('[data-url-selector="url_image"]');
        let imagePresenter=new App.ImagePresenter('[data-presenter-selector="presenter"]');
        let imageProcessor=new App.ImageProcessor();
        let tags=new App.Tags('[data-result-selector="tags"]');
        let colors=new App.Colors('[data-result-selector="colors"]');
        function getTags(urlImage){
            imageProcessor.getTags(urlImage).then(function(response){
                tags.presentTags(response);
            })
        }
        function showImage(urlImage){
            imagePresenter.showImage(urlImage);
        }
        function getColors(urlImage){
            imageProcessor.getColors(urlImage).then(function(response){
                colors.presentColors(response);
                }

            )
        }
        imageProvider.addUrlImageHandler(getTags,getColors,showImage);
    }

)();