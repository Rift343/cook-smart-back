import { Test, TestingModule } from '@nestjs/testing';
import { RecetteService } from './recette.service';

describe('RecetteService', () => {
  let service: RecetteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RecetteService],
    }).compile();

    service = module.get<RecetteService>(RecetteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a recette', () => {
    const dto = { name: 'Recette 1', description: 'Test recette' };
    const result = service.create(dto);
    expect(result).toHaveProperty('id');
  });
});
