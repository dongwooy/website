var size = 0;
var ranges_PovertyRate = [[0.000000, 14.000000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(250,250,250,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(250,250,250,1.0)'})
    })]],
[14.000000, 19.600000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(222,222,222,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(222,222,222,1.0)'})
    })]],
[19.600000, 25.660000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(195,195,195,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(195,195,195,1.0)'})
    })]],
[25.660000, 32.600000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(168,168,168,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(168,168,168,1.0)'})
    })]],
[32.600000, 40.300000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(141,141,141,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(141,141,141,1.0)'})
    })]],
[40.300000, 47.400000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(113,113,113,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(113,113,113,1.0)'})
    })]],
[47.400000, 55.400000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(86,86,86,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(86,86,86,1.0)'})
    })]],
[55.400000, 61.800000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(59,59,59,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(59,59,59,1.0)'})
    })]],
[61.800000, 70.880000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(32,32,32,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(32,32,32,1.0)'})
    })]],
[70.880000, 96.600000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(5,5,5,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(5,5,5,1.0)'})
    })]]];
var styleCache_PovertyRate={}
var style_PovertyRate = function(feature, resolution){
    var value = feature.get("pov");
    var style = ranges_PovertyRate[0][2];
    for (i = 0; i < ranges_PovertyRate.length; i++){
        var range = ranges_PovertyRate[i];
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

    if (!styleCache_PovertyRate[key]){
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
        styleCache_PovertyRate[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_PovertyRate[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};