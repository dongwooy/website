var size = 0;
var ranges_walkscore = [[0.000000, 20.000000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.4)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(247,252,245,0.4)'})
    })]],
[20.000000, 40.000000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.4)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(201,233,194,0.4)'})
    })]],
[40.000000, 60.000000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.4)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(122,199,123,0.4)'})
    })]],
[60.000000, 80.000000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.4)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(41,146,74,0.4)'})
    })]],
[80.000000, 100.000000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.4)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(0,68,27,0.4)'})
    })]]];
var styleCache_walkscore={}
var style_walkscore = function(feature, resolution){
    var value = feature.get("walkscore");
    var style = ranges_walkscore[0][2];
    for (i = 0; i < ranges_walkscore.length; i++){
        var range = ranges_walkscore[i];
        if (value > range[0] && value<=range[1]){
            style =  range[2];
        }
    };
    if ("" !== null) {
        var labelText = String("");
    } else {
        var labelText = ""
    }
    var key = value + "_" + labelText

    if (!styleCache_walkscore[key]){
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
        styleCache_walkscore[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_walkscore[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};