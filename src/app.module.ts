import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { MongooseModule } from '@nestjs/mongoose';
import * as dotenv from 'dotenv';
dotenv.config();

@Module({
  imports: [
    ProductsModule,
    MongooseModule.forRoot(
      `mongodb://anyone:${process.env.MONGOPASS}@proyecto-final-shard-00-00.obuuu.mongodb.net:27017,proyecto-final-shard-00-01.obuuu.mongodb.net:27017,proyecto-final-shard-00-02.obuuu.mongodb.net:27017/?ssl=true&replicaSet=atlas-xzhi9f-shard-0&authSource=admin&retryWrites=true&w=majority`,
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
