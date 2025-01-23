import { HttpException } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';
import { status } from '@grpc/grpc-js';
import { GrpcMapping } from './grpc-status-mapping';

export class GrpcException extends RpcException {
  public code!: number;
  public override message!: string;

  constructor(error: RpcException | HttpException) {
    super(error);
    this.message = error.message;
    if (error instanceof HttpException) {
      const httpStatus = error.getStatus();
      this.code = GrpcMapping.convertHttpToGrpcStatus(httpStatus);
    } else {
      this.code = status.UNKNOWN;
    }
  }
}
