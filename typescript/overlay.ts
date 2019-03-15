import * as GeoTIFF from 'geotiff';

(async function() {
    const someUrl='https://s3.eu-west-2.amazonaws.com/spatial-production/AVAfarm/sentinel-s2-l1c/ndvi/2017-06-06_ndvi.tif'
    const tiff = await GeoTIFF.fromUrl(someUrl);
    const image = await tiff.getImage(); 
    const width = image.getWidth();
    const height = image.getHeight();
    const tileWidth = image.getTileWidth();
    const tileHeight = image.getTileHeight();
    const samplesPerPixel = image.getSamplesPerPixel();
    // when we are actually dealing with geo-data the following methods return
    // meaningful results:
    const origin = image.getOrigin();
    const resolution = image.getResolution();
    const bbox = image.getBoundingBox();
    const [red] = await image.readRasters();
    console.log(image)
  })()