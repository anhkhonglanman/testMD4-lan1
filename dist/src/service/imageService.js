"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("../data-source");
const image_1 = require("../entity/image");
class ImageService {
    constructor() {
        this.addImage = async (id, data) => {
            await data.forEach(item => {
                this.imageRepository.save({ house: id, imageURL: `${item}` });
            });
        };
        this.upDateImage = async (imageData, id) => {
            await Promise.all(imageData.map(async (item) => {
                const qb = this.imageRepository.createQueryBuilder('image');
                await qb.update()
                    .set({ imageURL: item })
                    .where('house = :id', { id: id })
                    .execute();
            }));
        };
        this.findImageByIdHouse = async (id) => {
            return await this.imageRepository.query(`select imageURL from image where houseId = ${id}`);
        };
        this.imageRepository = data_source_1.AppDataSource.getRepository(image_1.Image);
    }
}
exports.default = new ImageService();
//# sourceMappingURL=imageService.js.map