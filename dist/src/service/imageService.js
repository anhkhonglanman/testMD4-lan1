"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("../data-source");
const image_1 = require("../entity/image");
class ImageService {
    constructor() {
        this.addImage = async (id, data) => {
            console.log(data);
            await data.forEach(item => {
                this.imageRepository.save({ house: id, imageURL: `${item}` });
            });
        };
        this.upDateImage = async (data, id) => {
            await this.deleteImage(id);
            await this.addImage(id, data);
        };
        this.deleteImage = async (idHouse) => {
            await this.imageRepository
                .createQueryBuilder('users')
                .delete()
                .from(image_1.Image)
                .where({ house: idHouse })
                .execute();
        };
        this.imageRepository = data_source_1.AppDataSource.getRepository(image_1.Image);
    }
}
exports.default = new ImageService();
//# sourceMappingURL=imageService.js.map