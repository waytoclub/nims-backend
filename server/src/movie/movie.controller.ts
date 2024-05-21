import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { get } from 'http';
import { MovieDto } from '../dto/Movie.dto';
import { MovieServiceService } from 'src/movie-service/movie-service.service';
 
@Controller('movie')
export class MovieController {
    constructor(private readonly service: MovieServiceService) {}

    @Post('/create-movie')
    async createMovie(@Body() movie: MovieDto ) {
       return await this.service.create(movie);
    }

    @Get('/get-movies')
    async getMovies() {
       return await this.service.findAll();
    }

    @Get('/search-movies/:search')
    async searchMovies(@Param('searchg') search) {
       return await this.service.findByTitle(search);
    }
}
