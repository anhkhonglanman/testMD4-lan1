declare class ImageService {
    private imageRepository;
    constructor();
    addImage: (id: any, data: any) => Promise<void>;
    upDateImage: (imageData: any, id: any) => Promise<void>;
    findImageByIdHouse: (id: any) => Promise<any>;
}
declare const _default: ImageService;
export default _default;
