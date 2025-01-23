import { Injectable } from '@nestjs/common';
import { ProductRepository } from './repositories/product.repository';
import { CreateProductListRequest } from './protos/product';

@Injectable()
export class ProductService {
  constructor(private readonly productRepository: ProductRepository) {}

  async getProductList(page: number, pageSize: number) {
    const [products, total] = await this.productRepository.getProducts(
      page,
      pageSize,
    );

    return { products, total };
  }

  async createProductList({ products }: CreateProductListRequest) {
    await this.productRepository.createProducts(products);

    return { products };
  }
}
