import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'utils/prisma/prisma.service';
import { UserDto } from './user.dto';

@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService) {}

  public async getAllUser() {
    return await this.prismaService.user.findMany();
  }

  public async getUserById(id: number) {
    return await this.prismaService.user.findFirst({ where: { id } });
  }

  public async createUser(data: UserDto) {
    try {
      const created = await this.prismaService.user.create({
        data,
      });
      return created;
    } catch (e) {
      throw new BadRequestException('สร้างข้อมูลไม่สำเร็จ');
    }
  }

  public async updateUser(data: UserDto, id: number) {
    try {
      const updated = await this.prismaService.user.update({
        data,
        where: { id },
      });
      return updated;
    } catch (e) {
      throw new BadRequestException('ไม่แก้ไขข้อมูลได้');
    }
  }

  public async deleteUser(id: number) {
    try {
      const deleted = await this.prismaService.user.delete({ where: { id } });
      return deleted;
    } catch (e) {
      throw new BadRequestException('ไม่สามารถลบข้อมูลได้');
    }
  }
}
