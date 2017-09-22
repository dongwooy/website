var size = 0;
var ranges_Std = [[0.001292, 0.021073, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(250,250,250,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(250,250,250,1.0)'})
    })]],
[0.021073, 0.027435, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(222,222,222,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(222,222,222,1.0)'})
    })]],
[0.027435, 0.031002, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(195,195,195,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(195,195,195,1.0)'})
    })]],
[0.031002, 0.033452, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(168,168,168,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(168,168,168,1.0)'})
    })]],
[0.033452, 0.035818, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(141,141,141,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(141,141,141,1.0)'})
    })]],
[0.035818, 0.038123, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(113,113,113,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(113,113,113,1.0)'})
    })]],
[0.038123, 0.040821, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(86,86,86,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(86,86,86,1.0)'})
    })]],
[0.040821, 0.044457, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(59,59,59,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(59,59,59,1.0)'})
    })]],
[0.044457, 0.050131, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(32,32,32,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(32,32,32,1.0)'})
    })]],
[0.050131, 0.083185, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(5,5,5,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(5,5,5,1.0)'})
    })]]];
var styleCache_Std={}
var style_Std = function(feature, resolution){
    var value = feature.get("std");
    var style = ranges_Std[0][2];
    for (i = 0; i < ranges_Std.length; i++){
        var range = ranges_Std[i];
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

    if (!styleCache_Std[key]){
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
        styleCache_Std[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_Std[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};