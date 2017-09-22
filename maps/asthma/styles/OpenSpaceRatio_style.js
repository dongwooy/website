var size = 0;
var ranges_OpenSpaceRatio = [[0.000000, 0.000000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(247,252,245,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(247,252,245,1.0)'})
    })]],
[0.000000, 0.000000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(231,246,227,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(231,246,227,1.0)'})
    })]],
[0.000000, 0.000000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(207,236,201,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(207,236,201,1.0)'})
    })]],
[0.000000, 0.000000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(177,223,171,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(177,223,171,1.0)'})
    })]],
[0.000000, 0.000000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(142,208,139,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(142,208,139,1.0)'})
    })]],
[0.000000, 0.000000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(102,189,111,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(102,189,111,1.0)'})
    })]],
[0.000000, 0.005058, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(61,166,89,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(61,166,89,1.0)'})
    })]],
[0.005058, 0.025948, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,139,69,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(35,139,69,1.0)'})
    })]],
[0.025948, 0.086538, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(3,111,46,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(3,111,46,1.0)'})
    })]],
[0.086538, 0.956930, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,68,27,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(0,68,27,1.0)'})
    })]]];
var styleCache_OpenSpaceRatio={}
var style_OpenSpaceRatio = function(feature, resolution){
    var value = feature.get("oratio");
    var style = ranges_OpenSpaceRatio[0][2];
    for (i = 0; i < ranges_OpenSpaceRatio.length; i++){
        var range = ranges_OpenSpaceRatio[i];
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

    if (!styleCache_OpenSpaceRatio[key]){
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
        styleCache_OpenSpaceRatio[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_OpenSpaceRatio[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};