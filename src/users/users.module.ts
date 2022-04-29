import { forwardRef, Module } from '@nestjs/common';
import { User } from './user.models';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import {SequelizeModule} from "@nestjs/sequelize";
import { Role } from 'src/roles/roles.models';
import { UserRoles } from 'src/roles/user.roles.model';
import { RolesModule } from 'src/roles/roles.module';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [
    SequelizeModule.forFeature([User, Role, UserRoles]),
    RolesModule,
    forwardRef(() => AuthModule),
],
  exports:[UsersService]
})
export class UsersModule {}
