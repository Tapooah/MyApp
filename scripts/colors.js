(
    function () {
        let App = window.App || {};

        function Colors(selector) {
            this.$colorsElement = $(selector);

        }

        Colors.prototype.presentColors = function (colors) {
            let colorsObj = JSON.parse(colors);
            if (!colorsObj.results || colorsObj.results.length == 0) {
                alert("Wrong url image");
            }
            else {
                let imageColors = colorsObj.results[0].info.image_colors;
                this.$colorsElement.empty();//delete prev. colors

                imageColors.forEach(function (color) {
                    this.addRow(color);
                }.bind(this));
            }
        }
        Colors.prototype.addRow = function (color) {
            let row = new RowColor(color);
            this.$colorsElement.append(row.$colorElement);
        }

        function RowColor(color) {
            let text_color = 'white';
            if (color.b > 127) {
                text_color = 'black';
            }


            let $div = $('<div></div>', {
                class: "row justify-content-center"
            });
            let $label = $('<label></label>', {});
            let content = color.closest_palette_color + " - " + Math.round(color.percent);
            $label.append(content);
            $label.css({backgroundColor: color.html_code, color: text_color});
            $div.append($label);
            this.$colorElement = $div;
        }

        App.Colors = Colors;
        window.App = App;

    }

)();