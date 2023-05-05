declare class ProductService {
    private productRepository;
    constructor();
    getAll: () => Promise<any>;
    findProductById: (id: any) => Promise<any>;
    add: (product: any) => Promise<void>;
    delete: (id: any) => Promise<void>;
    update: (id: any, updateProduct: any) => Promise<void>;
}
declare const _default: ProductService;
export default _default;
