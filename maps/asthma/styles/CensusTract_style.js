var size = 0;

var styleCache_CensusTract={}
var style_CensusTract = function(feature, resolution){
    var value = ""
    var size = 0;
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(188,188,188,0.6)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), 
    })];
    if ("" !== null) {
        var labelText = String("");
    } else {
        var labelText = ""
    }
    var key = value + "_" + labelText

    if (!styleCache_CensusTract[key]){
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
        styleCache_CensusTract[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_CensusTract[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};