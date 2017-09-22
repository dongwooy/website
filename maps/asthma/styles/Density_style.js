var size = 0;
var ranges_Density = [[0.000000, 4.038200, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(250,250,250,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(250,250,250,1.0)'})
    })]],
[4.038200, 8.082000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(222,222,222,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(222,222,222,1.0)'})
    })]],
[8.082000, 10.842700, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(195,195,195,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(195,195,195,1.0)'})
    })]],
[10.842700, 13.638600, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(168,168,168,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(168,168,168,1.0)'})
    })]],
[13.638600, 16.101000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(141,141,141,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(141,141,141,1.0)'})
    })]],
[16.101000, 19.519600, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(113,113,113,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(113,113,113,1.0)'})
    })]],
[19.519600, 23.727700, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(86,86,86,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(86,86,86,1.0)'})
    })]],
[23.727700, 30.400000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(59,59,59,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(59,59,59,1.0)'})
    })]],
[30.400000, 40.380800, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(32,32,32,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(32,32,32,1.0)'})
    })]],
[40.380800, 147.706000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(5,5,5,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(5,5,5,1.0)'})
    })]]];
var styleCache_Density={}
var style_Density = function(feature, resolution){
    var value = feature.get("dens");
    var style = ranges_Density[0][2];
    for (i = 0; i < ranges_Density.length; i++){
        var range = ranges_Density[i];
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

    if (!styleCache_Density[key]){
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
        styleCache_Density[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_Density[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};