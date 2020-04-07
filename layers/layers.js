var wms_layers = [];


        var lyr_googleImageries_0 = new ol.layer.Tile({
            'title': 'google Imageries',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://www.google.com/maps/vt/lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });
var format_State_covid_1 = new ol.format.GeoJSON();
var features_State_covid_1 = format_State_covid_1.readFeatures(json_State_covid_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_State_covid_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_State_covid_1.addFeatures(features_State_covid_1);
var lyr_State_covid_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_State_covid_1, 
                style: style_State_covid_1,
                interactive: true,
    title: 'State_covid<br />\
    <img src="styles/legend/State_covid_1_0.png" /> 0 - 59 <br />\
    <img src="styles/legend/State_covid_1_1.png" /> 59 - 119 <br />\
    <img src="styles/legend/State_covid_1_2.png" /> 119 - 178 <br />\
    <img src="styles/legend/State_covid_1_3.png" /> 178 - 238 <br />\
    <img src="styles/legend/State_covid_1_4.png" /> 238 - 297 <br />\
    <img src="styles/legend/State_covid_1_5.png" /> 297 - 356 <br />\
    <img src="styles/legend/State_covid_1_6.png" /> 356 - 416 <br />\
    <img src="styles/legend/State_covid_1_7.png" /> 416 - 475 <br />\
    <img src="styles/legend/State_covid_1_8.png" /> 475 - 535 <br />\
    <img src="styles/legend/State_covid_1_9.png" /> 535 - 594 <br />\
    <img src="styles/legend/State_covid_1_10.png" /> 594 - 653 <br />\
    <img src="styles/legend/State_covid_1_11.png" /> 653 - 713 <br />\
    <img src="styles/legend/State_covid_1_12.png" /> 713 - 772 <br />\
    <img src="styles/legend/State_covid_1_13.png" /> 772 - 832 <br />\
    <img src="styles/legend/State_covid_1_14.png" /> 832 - 891 <br />'
        });

lyr_googleImageries_0.setVisible(true);lyr_State_covid_1.setVisible(true);
var layersList = [lyr_googleImageries_0,lyr_State_covid_1];
lyr_State_covid_1.set('fieldAliases', {'State': 'State', 'Confirmed': 'Confirmed', 'Recovered': 'Recovered', 'Deaths': 'Deaths', 'Active': 'Active', });
lyr_State_covid_1.set('fieldImages', {'State': 'TextEdit', 'Confirmed': 'Range', 'Recovered': 'Range', 'Deaths': 'Range', 'Active': 'Range', });
lyr_State_covid_1.set('fieldLabels', {'State': 'inline label', 'Confirmed': 'inline label', 'Recovered': 'inline label', 'Deaths': 'inline label', 'Active': 'inline label', });
lyr_State_covid_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});