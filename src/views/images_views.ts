import Image from "../models/Image";
export default {
  render(image: Image) {
    return {
      id: image.id,
      url: image.path,
    };
  },
};
