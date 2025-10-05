const consumirNasaGibs = (req, res) => {
    const { date } = req.query; // Espera uma data no formato AAAA-MM-DD
  
    if (!date) {
      return res.status(400).json({ msg: 'Por favor, forneça uma data no formato AAAA-MM-DD.' });
    }
  
    // Camada MODIS de Cor Real. Outras camadas podem ser usadas para análise (ex: NDVI)
    const layer = 'MODIS_Terra_CorrectedReflectance_TrueColor';
    const tileMatrixSet = 'GoogleMapsCompatible_Level9';
    const format = 'jpeg';
  
    // Monta a URL do template que o Leaflet usará
    const templateUrl = `https://gibs.earthdata.nasa.gov/wmts/epsg3857/best/${layer}/default/${date}/${tileMatrixSet}/{z}/{y}/{x}.${format}`;
    
    res.json({ templateUrl });
  };
  
  module.exports = consumirNasaGibs;