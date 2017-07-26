var size = 0;

var styleCache_county_scag_utm={}
var style_county_scag_utm = function(feature, resolution){
    var value = ""
    var size = 0;
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(43,131,186,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), 
    })];
    if ("" !== null) {
        var labelText = String("");
    } else {
        var labelText = ""
    }
    var key = value + "_" + labelText

    if (!styleCache_county_scag_utm[key]){
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
        styleCache_county_scag_utm[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_county_scag_utm[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};