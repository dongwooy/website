var size = 0;

var styleCache_MajorArterials={}
var style_MajorArterials = function(feature, resolution){
    var value = ""
    var size = 0;
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(227,26,28,0.6)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 2}),
    })];
    if ("" !== null) {
        var labelText = String("");
    } else {
        var labelText = ""
    }
    var key = value + "_" + labelText

    if (!styleCache_MajorArterials[key]){
        var text = new ol.style.Text({
              font: '11.7px \'Noto Sans\', sans-serif',
              text: labelText,
              textBaseline: "center",
              textAlign: "left",
              offsetX: 5,
              offsetY: 3,
              fill: new ol.style.Fill({
                color: 'rgba(0, 0, 0, 255)'
              }),
            });
        styleCache_MajorArterials[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_MajorArterials[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};