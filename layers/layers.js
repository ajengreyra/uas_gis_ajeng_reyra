var wms_layers = [];

var format_ADMINISTRASIKECAMATAN_AR_50K_0 = new ol.format.GeoJSON();
var features_ADMINISTRASIKECAMATAN_AR_50K_0 = format_ADMINISTRASIKECAMATAN_AR_50K_0.readFeatures(json_ADMINISTRASIKECAMATAN_AR_50K_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ADMINISTRASIKECAMATAN_AR_50K_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADMINISTRASIKECAMATAN_AR_50K_0.addFeatures(features_ADMINISTRASIKECAMATAN_AR_50K_0);
var lyr_ADMINISTRASIKECAMATAN_AR_50K_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ADMINISTRASIKECAMATAN_AR_50K_0, 
                style: style_ADMINISTRASIKECAMATAN_AR_50K_0,
                popuplayertitle: 'ADMINISTRASIKECAMATAN_AR_50K',
                interactive: true,
                title: '<img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_0.png" /> ADMINISTRASIKECAMATAN_AR_50K'
            });
var format_JALAN_LN_50K_1 = new ol.format.GeoJSON();
var features_JALAN_LN_50K_1 = format_JALAN_LN_50K_1.readFeatures(json_JALAN_LN_50K_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JALAN_LN_50K_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JALAN_LN_50K_1.addFeatures(features_JALAN_LN_50K_1);
var lyr_JALAN_LN_50K_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JALAN_LN_50K_1, 
                style: style_JALAN_LN_50K_1,
                popuplayertitle: 'JALAN_LN_50K',
                interactive: true,
                title: '<img src="styles/legend/JALAN_LN_50K_1.png" /> JALAN_LN_50K'
            });
var format_SUNGAI_LN_50K_2 = new ol.format.GeoJSON();
var features_SUNGAI_LN_50K_2 = format_SUNGAI_LN_50K_2.readFeatures(json_SUNGAI_LN_50K_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUNGAI_LN_50K_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUNGAI_LN_50K_2.addFeatures(features_SUNGAI_LN_50K_2);
var lyr_SUNGAI_LN_50K_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SUNGAI_LN_50K_2, 
                style: style_SUNGAI_LN_50K_2,
                popuplayertitle: 'SUNGAI_LN_50K',
                interactive: true,
                title: '<img src="styles/legend/SUNGAI_LN_50K_2.png" /> SUNGAI_LN_50K'
            });
var format_PEMERINTAHAN_PT_50K_3 = new ol.format.GeoJSON();
var features_PEMERINTAHAN_PT_50K_3 = format_PEMERINTAHAN_PT_50K_3.readFeatures(json_PEMERINTAHAN_PT_50K_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PEMERINTAHAN_PT_50K_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PEMERINTAHAN_PT_50K_3.addFeatures(features_PEMERINTAHAN_PT_50K_3);
var lyr_PEMERINTAHAN_PT_50K_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PEMERINTAHAN_PT_50K_3, 
                style: style_PEMERINTAHAN_PT_50K_3,
                popuplayertitle: 'PEMERINTAHAN_PT_50K',
                interactive: true,
                title: '<img src="styles/legend/PEMERINTAHAN_PT_50K_3.png" /> PEMERINTAHAN_PT_50K'
            });
var format_RUMAHSAKIT_PT_50K_4 = new ol.format.GeoJSON();
var features_RUMAHSAKIT_PT_50K_4 = format_RUMAHSAKIT_PT_50K_4.readFeatures(json_RUMAHSAKIT_PT_50K_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RUMAHSAKIT_PT_50K_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RUMAHSAKIT_PT_50K_4.addFeatures(features_RUMAHSAKIT_PT_50K_4);
var lyr_RUMAHSAKIT_PT_50K_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RUMAHSAKIT_PT_50K_4, 
                style: style_RUMAHSAKIT_PT_50K_4,
                popuplayertitle: 'RUMAHSAKIT_PT_50K',
                interactive: true,
                title: '<img src="styles/legend/RUMAHSAKIT_PT_50K_4.png" /> RUMAHSAKIT_PT_50K'
            });
var format_PENDIDIKAN_PT_50K_5 = new ol.format.GeoJSON();
var features_PENDIDIKAN_PT_50K_5 = format_PENDIDIKAN_PT_50K_5.readFeatures(json_PENDIDIKAN_PT_50K_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PENDIDIKAN_PT_50K_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PENDIDIKAN_PT_50K_5.addFeatures(features_PENDIDIKAN_PT_50K_5);
var lyr_PENDIDIKAN_PT_50K_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PENDIDIKAN_PT_50K_5, 
                style: style_PENDIDIKAN_PT_50K_5,
                popuplayertitle: 'PENDIDIKAN_PT_50K',
                interactive: true,
                title: '<img src="styles/legend/PENDIDIKAN_PT_50K_5.png" /> PENDIDIKAN_PT_50K'
            });
var format_DERMAGA_PT_50K_6 = new ol.format.GeoJSON();
var features_DERMAGA_PT_50K_6 = format_DERMAGA_PT_50K_6.readFeatures(json_DERMAGA_PT_50K_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DERMAGA_PT_50K_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DERMAGA_PT_50K_6.addFeatures(features_DERMAGA_PT_50K_6);
var lyr_DERMAGA_PT_50K_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DERMAGA_PT_50K_6, 
                style: style_DERMAGA_PT_50K_6,
                popuplayertitle: 'DERMAGA_PT_50K',
                interactive: true,
                title: '<img src="styles/legend/DERMAGA_PT_50K_6.png" /> DERMAGA_PT_50K'
            });
var format_BANGUNAN_PT_50K_7 = new ol.format.GeoJSON();
var features_BANGUNAN_PT_50K_7 = format_BANGUNAN_PT_50K_7.readFeatures(json_BANGUNAN_PT_50K_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BANGUNAN_PT_50K_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BANGUNAN_PT_50K_7.addFeatures(features_BANGUNAN_PT_50K_7);
var lyr_BANGUNAN_PT_50K_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BANGUNAN_PT_50K_7, 
                style: style_BANGUNAN_PT_50K_7,
                popuplayertitle: 'BANGUNAN_PT_50K',
                interactive: true,
                title: '<img src="styles/legend/BANGUNAN_PT_50K_7.png" /> BANGUNAN_PT_50K'
            });
var format_AIRPORT_PT_50K_8 = new ol.format.GeoJSON();
var features_AIRPORT_PT_50K_8 = format_AIRPORT_PT_50K_8.readFeatures(json_AIRPORT_PT_50K_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AIRPORT_PT_50K_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AIRPORT_PT_50K_8.addFeatures(features_AIRPORT_PT_50K_8);
var lyr_AIRPORT_PT_50K_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AIRPORT_PT_50K_8, 
                style: style_AIRPORT_PT_50K_8,
                popuplayertitle: 'AIRPORT_PT_50K',
                interactive: true,
                title: '<img src="styles/legend/AIRPORT_PT_50K_8.png" /> AIRPORT_PT_50K'
            });

lyr_ADMINISTRASIKECAMATAN_AR_50K_0.setVisible(true);lyr_JALAN_LN_50K_1.setVisible(true);lyr_SUNGAI_LN_50K_2.setVisible(true);lyr_PEMERINTAHAN_PT_50K_3.setVisible(true);lyr_RUMAHSAKIT_PT_50K_4.setVisible(true);lyr_PENDIDIKAN_PT_50K_5.setVisible(true);lyr_DERMAGA_PT_50K_6.setVisible(true);lyr_BANGUNAN_PT_50K_7.setVisible(true);lyr_AIRPORT_PT_50K_8.setVisible(true);
var layersList = [lyr_ADMINISTRASIKECAMATAN_AR_50K_0,lyr_JALAN_LN_50K_1,lyr_SUNGAI_LN_50K_2,lyr_PEMERINTAHAN_PT_50K_3,lyr_RUMAHSAKIT_PT_50K_4,lyr_PENDIDIKAN_PT_50K_5,lyr_DERMAGA_PT_50K_6,lyr_BANGUNAN_PT_50K_7,lyr_AIRPORT_PT_50K_8];
lyr_ADMINISTRASIKECAMATAN_AR_50K_0.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_JALAN_LN_50K_1.set('fieldAliases', {'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_SUNGAI_LN_50K_2.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'LCODE': 'LCODE', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_PEMERINTAHAN_PT_50K_3.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FGSGOV': 'FGSGOV', 'REMARK': 'REMARK', 'LCODE': 'LCODE', });
lyr_RUMAHSAKIT_PT_50K_4.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'LCODE': 'LCODE', 'REMARK': 'REMARK', 'JPLYRS': 'JPLYRS', });
lyr_PENDIDIKAN_PT_50K_5.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FGGPDK': 'FGGPDK', 'REMARK': 'REMARK', 'LCODE': 'LCODE', 'JJGPDF': 'JJGPDF', });
lyr_DERMAGA_PT_50K_6.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'LCODE': 'LCODE', });
lyr_BANGUNAN_PT_50K_7.set('fieldAliases', {'REMARK': 'REMARK', 'LCODE': 'LCODE', });
lyr_AIRPORT_PT_50K_8.set('fieldAliases', {'KLSBMI': 'KLSBMI', 'REMARK': 'REMARK', 'NAMOBJ': 'NAMOBJ', 'LCODE': 'LCODE', });
lyr_ADMINISTRASIKECAMATAN_AR_50K_0.set('fieldImages', {'NAMOBJ': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_JALAN_LN_50K_1.set('fieldImages', {'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_SUNGAI_LN_50K_2.set('fieldImages', {'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'LCODE': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_PEMERINTAHAN_PT_50K_3.set('fieldImages', {'NAMOBJ': 'TextEdit', 'FGSGOV': 'TextEdit', 'REMARK': 'TextEdit', 'LCODE': 'TextEdit', });
lyr_RUMAHSAKIT_PT_50K_4.set('fieldImages', {'NAMOBJ': 'TextEdit', 'LCODE': 'TextEdit', 'REMARK': 'TextEdit', 'JPLYRS': 'TextEdit', });
lyr_PENDIDIKAN_PT_50K_5.set('fieldImages', {'NAMOBJ': 'TextEdit', 'FGGPDK': 'TextEdit', 'REMARK': 'TextEdit', 'LCODE': 'TextEdit', 'JJGPDF': 'TextEdit', });
lyr_DERMAGA_PT_50K_6.set('fieldImages', {'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'LCODE': 'TextEdit', });
lyr_BANGUNAN_PT_50K_7.set('fieldImages', {'REMARK': '', 'LCODE': '', });
lyr_AIRPORT_PT_50K_8.set('fieldImages', {'KLSBMI': 'TextEdit', 'REMARK': 'TextEdit', 'NAMOBJ': 'TextEdit', 'LCODE': 'TextEdit', });
lyr_ADMINISTRASIKECAMATAN_AR_50K_0.set('fieldLabels', {'NAMOBJ': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_JALAN_LN_50K_1.set('fieldLabels', {'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', });
lyr_SUNGAI_LN_50K_2.set('fieldLabels', {'NAMOBJ': 'no label', 'REMARK': 'no label', 'LCODE': 'no label', 'SHAPE_Leng': 'no label', });
lyr_PEMERINTAHAN_PT_50K_3.set('fieldLabels', {'NAMOBJ': 'no label', 'FGSGOV': 'no label', 'REMARK': 'no label', 'LCODE': 'no label', });
lyr_RUMAHSAKIT_PT_50K_4.set('fieldLabels', {'NAMOBJ': 'no label', 'LCODE': 'no label', 'REMARK': 'no label', 'JPLYRS': 'no label', });
lyr_PENDIDIKAN_PT_50K_5.set('fieldLabels', {'NAMOBJ': 'no label', 'FGGPDK': 'no label', 'REMARK': 'no label', 'LCODE': 'no label', 'JJGPDF': 'no label', });
lyr_DERMAGA_PT_50K_6.set('fieldLabels', {'NAMOBJ': 'no label', 'REMARK': 'no label', 'LCODE': 'no label', });
lyr_BANGUNAN_PT_50K_7.set('fieldLabels', {'REMARK': 'no label', 'LCODE': 'no label', });
lyr_AIRPORT_PT_50K_8.set('fieldLabels', {'KLSBMI': 'no label', 'REMARK': 'no label', 'NAMOBJ': 'no label', 'LCODE': 'no label', });
lyr_AIRPORT_PT_50K_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});