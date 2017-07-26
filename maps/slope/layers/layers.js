var baseLayer = new ol.layer.Group({
    'title': 'Base maps',
    layers: [
new ol.layer.Tile({
    'title': 'Stamen Terrain',
    'type': 'base',
    source: new ol.source.Stamen({
        layer: 'terrain'
    })
})
]
});
var format_Slope = new ol.format.GeoJSON();
var features_Slope = format_Slope.readFeatures(geojson_Slope, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Slope = new ol.source.Vector();
jsonSource_Slope.addFeatures(features_Slope);var lyr_Slope = new ol.layer.Vector({
                source:jsonSource_Slope, 
                style: style_Slope,
                title: "Slope %"
            });var format_County = new ol.format.GeoJSON();
var features_County = format_County.readFeatures(geojson_County, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_County = new ol.source.Vector();
jsonSource_County.addFeatures(features_County);var lyr_County = new ol.layer.Vector({
                source:jsonSource_County, 
                style: style_County,
                title: "County"
            });

lyr_Slope.setVisible(true);lyr_County.setVisible(true);
var layersList = [baseLayer,lyr_Slope,lyr_County];
lyr_Slope.set('fieldAliases', {'STATEFP': 'STATEFP', 'COUNTYFP': 'COUNTYFP', 'TRACTCE': 'TRACTCE', 'GEOID': 'GEOID', 'NAME': 'NAME', 'NAMELSAD': 'NAMELSAD', 'MTFCC': 'MTFCC', 'FUNCSTAT': 'FUNCSTAT', 'ALAND': 'ALAND', 'AWATER': 'AWATER', 'INTPTLAT': 'INTPTLAT', 'INTPTLON': 'INTPTLON', 'acres': 'acres', 'acs_mot_to': 'acs_mot_to', 'acs_car': 'acs_car', 'acs_transi': 'acs_transi', 'acs_taxi': 'acs_taxi', 'acs_mcycle': 'acs_mcycle', 'acs_bike': 'acs_bike', 'acs_walk': 'acs_walk', 'acs_mot_ot': 'acs_mot_ot', 'acs_mot_ho': 'acs_mot_ho', 'acs_motor': 'acs_motor', 'acs_nonmot': 'acs_nonmot', 'acs_car_n': 'acs_car_n', 'acs_tran_1': 'acs_tran_1', 'acs_taxi_n': 'acs_taxi_n', 'acs_bike_n': 'acs_bike_n', 'acs_walk_n': 'acs_walk_n', 'acs_motor_': 'acs_motor_', 'acs_nonm_1': 'acs_nonm_1', 'acs_pcar': 'acs_pcar', 'acs_ppt': 'acs_ppt', 'acs_ptx': 'acs_ptx', 'acs_pmc': 'acs_pmc', 'acs_pbc': 'acs_pbc', 'acs_pwk': 'acs_pwk', 'acs_mhi': 'acs_mhi', 'acs_plat': 'acs_plat', 'acs_pfemal': 'acs_pfemal', 'acs_p65y': 'acs_p65y', 'acs_prente': 'acs_prente', 'acs_hhsize': 'acs_hhsize', 'acs_walksc': 'acs_walksc', 'acs_tran_2': 'acs_tran_2', 'acs_bikesc': 'acs_bikesc', 'acs_acres': 'acs_acres', 'acs_contou': 'acs_contou', 'acs_slope': 'acs_slope', });
lyr_County.set('fieldAliases', {'STATEFP': 'STATEFP', 'COUNTYFP': 'COUNTYFP', 'COUNTYNS': 'COUNTYNS', 'GEOID': 'GEOID', 'NAME': 'NAME', 'NAMELSAD': 'NAMELSAD', 'LSAD': 'LSAD', 'CLASSFP': 'CLASSFP', 'MTFCC': 'MTFCC', 'CSAFP': 'CSAFP', 'CBSAFP': 'CBSAFP', 'METDIVFP': 'METDIVFP', 'FUNCSTAT': 'FUNCSTAT', 'ALAND': 'ALAND', 'AWATER': 'AWATER', 'INTPTLAT': 'INTPTLAT', 'INTPTLON': 'INTPTLON', });
lyr_Slope.set('fieldImages', {'STATEFP': 'Hidden', 'COUNTYFP': 'Hidden', 'TRACTCE': 'Hidden', 'GEOID': 'Hidden', 'NAME': 'Hidden', 'NAMELSAD': 'Hidden', 'MTFCC': 'Hidden', 'FUNCSTAT': 'Hidden', 'ALAND': 'Hidden', 'AWATER': 'Hidden', 'INTPTLAT': 'Hidden', 'INTPTLON': 'Hidden', 'acres': 'Hidden', 'acs_mot_to': 'Hidden', 'acs_car': 'Hidden', 'acs_transi': 'Hidden', 'acs_taxi': 'Hidden', 'acs_mcycle': 'Hidden', 'acs_bike': 'Hidden', 'acs_walk': 'Hidden', 'acs_mot_ot': 'Hidden', 'acs_mot_ho': 'Hidden', 'acs_motor': 'Hidden', 'acs_nonmot': 'Hidden', 'acs_car_n': 'Hidden', 'acs_tran_1': 'Hidden', 'acs_taxi_n': 'Hidden', 'acs_bike_n': 'Hidden', 'acs_walk_n': 'Hidden', 'acs_motor_': 'Hidden', 'acs_nonm_1': 'Hidden', 'acs_pcar': 'Hidden', 'acs_ppt': 'Hidden', 'acs_ptx': 'Hidden', 'acs_pmc': 'Hidden', 'acs_pbc': 'Hidden', 'acs_pwk': 'Hidden', 'acs_mhi': 'Hidden', 'acs_plat': 'Hidden', 'acs_pfemal': 'Hidden', 'acs_p65y': 'Hidden', 'acs_prente': 'Hidden', 'acs_hhsize': 'Hidden', 'acs_walksc': 'Hidden', 'acs_tran_2': 'Hidden', 'acs_bikesc': 'Hidden', 'acs_acres': 'Hidden', 'acs_contou': 'Hidden', 'acs_slope': 'TextEdit', });
lyr_County.set('fieldImages', {'STATEFP': 'TextEdit', 'COUNTYFP': 'TextEdit', 'COUNTYNS': 'TextEdit', 'GEOID': 'TextEdit', 'NAME': 'TextEdit', 'NAMELSAD': 'TextEdit', 'LSAD': 'TextEdit', 'CLASSFP': 'TextEdit', 'MTFCC': 'TextEdit', 'CSAFP': 'TextEdit', 'CBSAFP': 'TextEdit', 'METDIVFP': 'TextEdit', 'FUNCSTAT': 'TextEdit', 'ALAND': 'TextEdit', 'AWATER': 'TextEdit', 'INTPTLAT': 'TextEdit', 'INTPTLON': 'TextEdit', });
lyr_Slope.set('fieldLabels', {'acs_slope': 'inline label', });
lyr_County.set('fieldLabels', {'STATEFP': 'no label', 'COUNTYFP': 'no label', 'COUNTYNS': 'no label', 'GEOID': 'no label', 'NAME': 'no label', 'NAMELSAD': 'no label', 'LSAD': 'no label', 'CLASSFP': 'no label', 'MTFCC': 'no label', 'CSAFP': 'no label', 'CBSAFP': 'no label', 'METDIVFP': 'no label', 'FUNCSTAT': 'no label', 'ALAND': 'no label', 'AWATER': 'no label', 'INTPTLAT': 'no label', 'INTPTLON': 'no label', });
lyr_County.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});