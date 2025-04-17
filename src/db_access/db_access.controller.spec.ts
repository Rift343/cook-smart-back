import { Test, TestingModule } from '@nestjs/testing';
import { DbAccessController } from './db_access.controller';

describe('DbAccessController', () => {
  let controller: DbAccessController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DbAccessController],
    }).compile();

    controller = module.get<DbAccessController>(DbAccessController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
