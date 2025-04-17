import { Controller, Get ,Post} from '@nestjs/common';
import { AppService } from 'src/app.service';

@Controller('db-access')
export class DbAccessController {
    constructor(private readonly appService: AppService) {}

    @Get()
      getHello(): string {
        return "coucou";
      }

}
