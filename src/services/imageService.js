const ImageRepository = require("../repositories/imageRepository");
const DestinationRepository = require("../repositories/destinationRepository");
const LodgingRepository = require("../repositories/lodgingRepository");
const imageRepository = new ImageRepository();
const destinationRepository = new DestinationRepository();
const lodgingRepository = new LodgingRepository();

const uploadDestinationImage = async (idDestination, file) => {
  const destination = await destinationRepository.findById(idDestination);
  if (destination.image) {
    await imageRepository.deleteImage(destination.image);
  }
  const imageURL = await imageRepository.uploadImage(
    destination.name,
    file.buffer,
    file.mimetype
  );
  return await destinationRepository.update(idDestination, { image: imageURL });
};

const uploadLodgingImage = async (idLodging, file) => {
  const lodging = await lodgingRepository.findById(idLodging);
  if (lodging.image) {
    await imageRepository.deleteImage(lodging.image);
  }
  const imageURL = await imageRepository.uploadImage(
    lodging.name,
    file.buffer,
    file.mimetype
  );
  return await lodgingRepository.update(idLodging, { image: imageURL });
};

module.exports = {
  uploadDestinationImage,
  uploadLodgingImage
};