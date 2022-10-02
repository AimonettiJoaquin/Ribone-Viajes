const ImageRepository = require("../repositories/imageRepository");
const DestinationRepository = require("../repositories/destinationRepository");
const imageRepository = new ImageRepository();
const destinationRepository = new DestinationRepository();

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

module.exports = {
  uploadDestinationImage,
};