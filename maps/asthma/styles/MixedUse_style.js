var size = 0;
var ranges_MixedUse = [[0.000000, 0.042505, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(250,250,250,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(250,250,250,1.0)'})
    })]],
[0.042505, 0.083738, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(222,222,222,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(222,222,222,1.0)'})
    })]],
[0.083738, 0.124570, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(195,195,195,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(195,195,195,1.0)'})
    })]],
[0.124570, 0.172456, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(168,168,168,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(168,168,168,1.0)'})
    })]],
[0.172456, 0.223880, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(141,141,141,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(141,141,141,1.0)'})
    })]],
[0.223880, 0.283892, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(113,113,113,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(113,113,113,1.0)'})
    })]],
[0.283892, 0.355716, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(86,86,86,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(86,86,86,1.0)'})
    })]],
[0.355716, 0.488044, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(59,59,59,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(59,59,59,1.0)'})
    })]],
[0.488044, 0.668093, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(32,32,32,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(32,32,32,1.0)'})
    })]],
[0.668093, 0.979570, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(5,5,5,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(5,5,5,1.0)'})
    })]]];
var styleCache_MixedUse={}
var style_MixedUse = function(feature, resolution){
    var value = feature.get("lum");
    var style = ranges_MixedUse[0][2];
    for (i = 0; i < ranges_MixedUse.length; i++){
        var range = ranges_MixedUse[i];
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

    if (!styleCache_MixedUse[key]){
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
        styleCache_MixedUse[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_MixedUse[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};