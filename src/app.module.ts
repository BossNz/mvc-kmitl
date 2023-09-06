import { Module } from '@nestjs/common';
import { PrismaModule } from 'utils/prisma/prisma.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [PrismaModule, UserModule],
})
export class AppModule {}
