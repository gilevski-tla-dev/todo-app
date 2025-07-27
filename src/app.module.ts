import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';
import { GroupsModule } from './groups/groups.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [TasksModule, GroupsModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
