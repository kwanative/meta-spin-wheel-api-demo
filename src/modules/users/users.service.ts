import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}
  create(createUserDto: CreateUserDto) {
    return "This action adds a new user";
  }

  async findByIp(ip: string) {
    let user;
    user = await this.prisma.users.findFirst({
      where: {
        ip_address: ip,
      },
    });

    if (!user) {
      user = await this.prisma.users.create({
        data: {
          ip_address: ip,
          level: "Iron Start",
        },
      });
    }
    return user;
  }

  async findAll() {
    return await this.prisma.users.findMany();
  }

  findOne(id: string) {
    return `This action returns a #${id} user`;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const user = await this.prisma.users.findFirst({
      where: {
        id,
      },
    });

    let updatedUser;
    if (user !== null) {
      updatedUser = await this.prisma.users.update({
        where: {
          id,
        },
        data: updateUserDto,
      });
    }
    return updatedUser;
  }

  remove(id: string) {
    return this.prisma.users.delete({
      where: { id },
    });
  }
}
