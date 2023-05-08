import {AppDataSource} from "../data-source";
import {Image} from "../entity/image";
class ImageService{
    private imageRepository;
    constructor() {
        this.imageRepository = AppDataSource.getRepository(Image)
    }

    addImage = async (id, data) => {
       await data.forEach(item=>{
           this.imageRepository.save({house : id ,imageURL:`${item}`})
        })
    }
    upDateImage = async (imageData,id) => {
        await Promise.all(imageData.map(async (item) => {
            const qb = this.imageRepository.createQueryBuilder('image');
            await qb.update()
                .set({ imageURL: item })
                .where('house = :id', { id: id })
                .execute();
        }));
    }

    findImageByIdHouse = async (id) => {
      return  await this.imageRepository.query(`select imageURL from image where houseId = ${id}`)
    }

}
export default new ImageService()