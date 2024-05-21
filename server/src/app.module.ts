import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MovieController } from './movie/movie.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { MovieSchema } from './schema/movie.schema';
import { MovieServiceService } from './movie-service/movie-service.service';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/moviedb'),
    MongooseModule.forFeature([{ name: 'Movie', schema: MovieSchema }])
  ],
  controllers: [AppController, MovieController],
  providers: [AppService, MovieServiceService],
})
export class AppModule {}
