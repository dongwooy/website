var size = 0;
var ranges_HHDensity = [[0.000000, 4.160000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(250,250,250,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(250,250,250,1.0)'})
    })]],
[4.160000, 6.438000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(222,222,222,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(222,222,222,1.0)'})
    })]],
[6.438000, 7.827000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(195,195,195,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(195,195,195,1.0)'})
    })]],
[7.827000, 9.430000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(168,168,168,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(168,168,168,1.0)'})
    })]],
[9.430000, 11.420000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(141,141,141,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(141,141,141,1.0)'})
    })]],
[11.420000, 13.588000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(113,113,113,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(113,113,113,1.0)'})
    })]],
[13.588000, 16.449000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(86,86,86,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(86,86,86,1.0)'})
    })]],
[16.449000, 21.928000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(59,59,59,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(59,59,59,1.0)'})
    })]],
[21.928000, 36.058000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(32,32,32,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(32,32,32,1.0)'})
    })]],
[36.058000, 2556.270000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(5,5,5,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(5,5,5,1.0)'})
    })]]];
var styleCache_HHDensity={}
var style_HHDensity = function(feature, resolution){
    var value = feature.get("hhden");
    var style = ranges_HHDensity[0][2];
    for (i = 0; i < ranges_HHDensity.length; i++){
        var range = ranges_HHDensity[i];
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

    if (!styleCache_HHDensity[key]){
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
        styleCache_HHDensity[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_HHDensity[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};