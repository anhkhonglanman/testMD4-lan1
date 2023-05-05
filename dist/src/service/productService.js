"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("../data-source");
const product_1 = require("../entity/product");
class ProductService {
    constructor() {
        this.getAll = async () => {
            let products = await this.productRepository.find({
                relations: {
                    category: true
                }
            });
            return products;
        };
        this.findProductById = async (id) => {
            let product = await this.productRepository.find({
                relations: {
                    category: true,
                },
                where: {
                    id: id
                }
            });
            return product;
        };
        this.add = async (product) => {
            await this.productRepository.save(product);
        };
        this.delete = async (id) => {
            await this.productRepository.delete({ id: id });
        };
        this.update = async (id, updateProduct) => {
            await this.productRepository.update({ id: id }, updateProduct);
        };
        this.productRepository = data_source_1.AppDataSource.getRepository(product_1.Product);
    }
}
exports.default = new ProductService();
//# sourceMappingURL=productService.js.map