import { Test, TestingModule } from '@nestjs/testing';
import { MovieServiceService } from './movie-service.service';

describe('MovieServiceService', () => {
  let service: MovieServiceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MovieServiceService],
    }).compile();

    service = module.get<MovieServiceService>(MovieServiceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
