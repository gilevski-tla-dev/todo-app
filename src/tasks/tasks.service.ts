import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TasksService {
  constructor(private prisma: PrismaService) {}

  async getAllTasks() {
    return await this.prisma.task.findMany();
  }

  async createTask(data: { name: string; description?: string }) {
    return await this.prisma.task.create({ data });
  }

  async updateTask(id: number, data: { name?: string; description?: string }) {
    return await this.prisma.task.update({
      where: { id },
      data,
    });
  }
}
