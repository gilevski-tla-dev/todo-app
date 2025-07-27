import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class GroupsService {
  constructor(private prisma: PrismaService) {}

  async getAllGroups() {
    return this.prisma.group.findMany();
  }

  async createGroup(data: { name: string; description?: string }) {
    return this.prisma.group.create({ data });
  }

  async updateGroup(id: number, data: { name?: string; description?: string }) {
    return await this.prisma.group.update({
      where: { id },
      data,
    });
  }

  async deleteGroup(id: number) {
    await this.prisma.group.delete({
      where: { id },
    });
    return {
      statusCode: 200,
      message: `Group with ID ${id} has been successfully deleted`,
    };
  }
}
