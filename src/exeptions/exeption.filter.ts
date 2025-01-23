import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common';
import { FastifyReply } from 'fastify';

@Catch()
export class AppExceptionFilter implements ExceptionFilter {
  catch(ex: HttpException, host: ArgumentsHost) {
    const context = host.switchToHttp();
    const response = context.getResponse<FastifyReply>();

    const status = ex.getStatus();
    const res = ex.getResponse();

    response.status(status).send({
      status,
      code: `ERROR_${status}`,
      message: res['message'] || res || ex.message,
    });
  }
}
