import { DataSource, Repository } from 'typeorm';
import { Product } from '../entities/product.entity';
import { Product as IProduct } from '../protos/product';
import { Injectable } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';

@Injectable()
export class ProductRepository extends Repository<Product> {
  constructor(@InjectDataSource() datasource: DataSource) {
    super(Product, datasource.createEntityManager());
  }

  getProducts(page: number, pageSize: number) {
    return this.findAndCount({
      skip: (page - 1) * pageSize,
      take: pageSize,
    });
  }

  createProducts(products: IProduct[]) {
    const productMap = products.map((product) => ({
      ...product,
      aboutItem: JSON.stringify(product.aboutItem) as any,
      color: JSON.stringify(product.color) as any,
      images: JSON.stringify(product.images) as any,
    }));

    return this.insert(productMap);
  }
}
