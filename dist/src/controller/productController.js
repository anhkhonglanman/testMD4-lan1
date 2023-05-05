"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const productService_1 = __importDefault(require("../service/productService"));
const categoryService_1 = __importDefault(require("../service/categoryService"));
class ProductController {
    constructor() {
        this.productService = productService_1.default;
        this.categoryService = categoryService_1.default;
        this.findAll = async (req, res) => {
            let listProduct = await this.productService.getAll();
            res.status(200).json(listProduct);
        };
        this.addProduct = async (req, res) => {
            if (!req.body.name) {
                res.status(400).json({
                    message: 'ko tim thay'
                });
            }
            else {
                await this.productService.add(req.body);
                res.status(201).json({ message: 'ok' });
            }
        };
        this.deleteProduct = async (req, res) => {
            let id = req.params.id;
            await this.productService.delete(id);
            res.status(200).json({ message: 'xoa thanh cong' });
        };
        this.showFormUpdate = async (req, res) => {
            let id = req.params.id;
            let product = await this.productService.findProductById(id);
            res.status(200).json(product);
        };
        this.updateProduct = async (req, res) => {
            let id = req.params.id;
            console.log(id);
            let updateProduct = req.body;
            console.log(updateProduct);
            await this.productService.update(id, updateProduct);
            res.status(200).json({ message: 'sua thanh cong' });
        };
        this.productService = productService_1.default;
        this.categoryService = categoryService_1.default;
    }
}
exports.default = new ProductController();
//# sourceMappingURL=productController.js.map