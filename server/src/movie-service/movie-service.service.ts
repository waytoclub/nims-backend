import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MovieDto } from 'src/dto/Movie.dto';
import { Movie, MovieDocument } from 'src/schema/movie.schema';

@Injectable()
export class MovieServiceService {
    constructor(@InjectModel(Movie.name) private readonly model: Model<MovieDocument>) {}

    async findAll(): Promise<Movie[]> {
        return await this.model.find().exec();
    }
    
      async findOne(id: string): Promise<Movie> {
        return await this.model.findById(id).exec();
      }

      async findByTitle(search): Promise<Movie> {
        return await this.model.aggregate([{ $project: { title: 1, description: 1 } },
          { $match : { title : search } }]).exec();
      }
    
      async create(MovieDto: MovieDto): Promise<Movie> {
        return await new this.model({
          ...MovieDto,
          createdAt: new Date(),
        }).save();
      }
}
