import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateteMovieDto } from './dto/update-movie.dto';
import { Movie } from './entity/movie.entity';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
    constructor(readonly moviesService: MoviesService) {}
    @Get()
    getAll(): Movie[] {
        return ;
    }
    
    @Get("search")
    search(@Query("year") searchingYear: string){
        return `We are searching for a movie made after: ${searchingYear}`;
    }

    @Get("/:id")
    getOne(@Param("id") movieId: number): Movie {
        return this.moviesService.getOne(movieId);
    }

    @Post()
    create(@Body() movieData: CreateMovieDto){
        return this.moviesService.create(movieData)
    }
    
    @Delete("/:id")
    remove(@Param("id") movieId: number){
        return this.moviesService.deleteOne(movieId)
    }

    @Patch("/:id")
    patch(@Param("id") movieId: number, @Body() updateData: UpdateteMovieDto){
        return this.moviesService.update(movieId, updateData)
    }
}
