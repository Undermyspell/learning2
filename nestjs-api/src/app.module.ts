import { Module } from '@nestjs/common';
import { ConfigModule } from "@nestjs/config";
import { MongooseModule } from "@nestjs/mongoose";
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ImagesController } from './controllers/images.controller';
import { EventService } from "./services/event.service";
import { ImagesService } from './services/images.service';
import { Event, EventSchema } from "./schemas/event.schema";

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_ENDPOINT}/${process.env.MONGO_DATABASE}?retryWrites=true&w=majority`, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }),
    MongooseModule.forFeature([{ name: Event.name, schema: EventSchema }])
  ],
  controllers: [AppController, ImagesController],
  providers: [AppService, ImagesService, EventService],
})
export class AppModule { }
