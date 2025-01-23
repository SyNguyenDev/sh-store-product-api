// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.6.1
//   protoc               v5.29.3
// source: src/modules/product/protos/product.proto

/* eslint-disable */
import { Metadata } from "@grpc/grpc-js";
import { GrpcMethod, GrpcStreamMethod } from "@nestjs/microservices";
import { Observable } from "rxjs";

export const protobufPackage = "product";

export interface GetProductListRequest {
  page: number;
  limit: number;
}

export interface CreateProductListRequest {
  products: Product[];
}

export interface Product {
  id: number;
  name: string;
  category: string;
  description: string;
  aboutItem: string[];
  price: number;
  discount: number;
  rating: number;
  stockItems: number;
  brand: string;
  color: string[];
  images: string[];
  reviews: Review[];
}

export interface Review {
  content: string;
  rating: number;
  author: string;
  image: string;
  date: string;
}

export interface GetProductListResponse {
  products: Product[];
  total: number;
}

export interface CreateProductListResponse {
  products: Product[];
}

export const PRODUCT_PACKAGE_NAME = "product";

export interface ProductServiceClient {
  getProductList(request: GetProductListRequest, metadata?: Metadata): Observable<GetProductListResponse>;

  createProductList(request: CreateProductListRequest, metadata?: Metadata): Observable<CreateProductListResponse>;
}

export interface ProductServiceController {
  getProductList(
    request: GetProductListRequest,
    metadata?: Metadata,
  ): Promise<GetProductListResponse> | Observable<GetProductListResponse> | GetProductListResponse;

  createProductList(
    request: CreateProductListRequest,
    metadata?: Metadata,
  ): Promise<CreateProductListResponse> | Observable<CreateProductListResponse> | CreateProductListResponse;
}

export function ProductServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = ["getProductList", "createProductList"];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcMethod("ProductService", method)(constructor.prototype[method], method, descriptor);
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcStreamMethod("ProductService", method)(constructor.prototype[method], method, descriptor);
    }
  };
}

export const PRODUCT_SERVICE_NAME = "ProductService";
