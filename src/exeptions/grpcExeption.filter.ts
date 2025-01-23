import { Catch, RpcExceptionFilter, HttpException } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';
import { throwError } from 'rxjs';
import { GrpcException } from './grpc-exceptions';

@Catch()
export class GrpcExceptionFilter implements RpcExceptionFilter<RpcException> {
  catch(exception: RpcException | HttpException) {
    return throwError(() => new GrpcException(exception));
  }
}
