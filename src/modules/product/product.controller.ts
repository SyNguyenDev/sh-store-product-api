import {
  Controller,
  UseFilters,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { ProductService } from './product.service';
import {
  CreateProductListRequest,
  ProductServiceControllerMethods,
} from './protos/product';
import { GrpcExceptionFilter } from 'src/exeptions/grpcExeption.filter';
import { GetProductDto } from './dto/get-product.dto';

@Controller()
@ProductServiceControllerMethods()
@UseFilters(GrpcExceptionFilter)
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @GrpcMethod('ProductService', 'GetProductList')
  @UsePipes(ValidationPipe)
  async getProductList({ page, limit }: GetProductDto) {
    const { products, total } = await this.productService.getProductList(
      page,
      limit,
    );

    return {
      products: products.map((product) => ({
        id: product.id,
        name: product.name,
        description: product.description,
        price: product.price,
        priceDiscount: product.price || 0,
        stock: product.stockItems,
        imageUrl: product.images,
        ...product,
      })),
      total,
    };
  }

  @GrpcMethod('ProductService', 'CreateProductList')
  async createProductList(request: CreateProductListRequest) {
    const products = await this.productService.createProductList(request);

    return products;
  }
}
