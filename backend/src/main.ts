import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ResultInterceptor } from './interceptor/transform.interceptor';
const cors = require('cors');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //allow cors
  app.use(cors());
  //use interceptor for unify data types
  app.useGlobalInterceptors(new ResultInterceptor())
  await app.listen(8000);
}
bootstrap();
