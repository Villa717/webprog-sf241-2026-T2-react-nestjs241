import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // ADD THIS LINE:
  app.setGlobalPrefix('api'); 
  
  // Enable CORS so the frontend can talk to the backend
  app.enableCors(); 

  await app.listen(process.env.PORT || 3000);
}
bootstrap();