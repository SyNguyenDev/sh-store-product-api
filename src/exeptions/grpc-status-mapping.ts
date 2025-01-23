import { status } from '@grpc/grpc-js';
import { HttpStatus } from '@nestjs/common';

export class GrpcMapping {
  static convertHttpToGrpcStatus(httpStatus: HttpStatus): status {
    switch (httpStatus) {
      case HttpStatus.OK:
        return status.OK;
      case HttpStatus.NOT_FOUND:
        return status.NOT_FOUND;
      case HttpStatus.UNAUTHORIZED:
        return status.UNAUTHENTICATED;
      case HttpStatus.FORBIDDEN:
        return status.PERMISSION_DENIED;
      case HttpStatus.BAD_REQUEST:
        return status.INVALID_ARGUMENT;
      case HttpStatus.SERVICE_UNAVAILABLE:
        return status.UNAVAILABLE;
      case HttpStatus.INTERNAL_SERVER_ERROR:
        return status.INTERNAL;
      default:
        return status.UNKNOWN;
    }
  }
}
