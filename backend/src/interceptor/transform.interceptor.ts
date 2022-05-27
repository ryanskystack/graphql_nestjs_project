import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GqlContextType } from '@nestjs/graphql';
export interface Response<T> {
  data: T;
}

@Injectable()
export class ResultInterceptor<T> implements NestInterceptor<T, Response<T>> {
  intercept(context: ExecutionContext, next: CallHandler): Observable<Response<T>> {
    
      // HTTP (REST) Context
      if (context.getType() === 'http') {
          return next.handle().pipe(
              map((rawData) => ({
                  code: (rawData && rawData.code) || 100000,
                  msg: (rawData && rawData.msg) || 'success',
                  currTime: new Date(),
                  data: rawData ? (!rawData.code && !rawData.msg ? rawData : rawData.data || undefined) : undefined,
              }))
          );
      }
      // GraphQL Context
      else if (context.getType<GqlContextType>() === 'graphql') {
          return next.handle();
      }
      return next.handle();
  }
}
