import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from 'src/users/user.models';
import { RolesController } from './roles.controller';
import { Role } from './roles.models';
import { RolesService } from './roles.service';
import { UserRoles } from './user.roles.model';

@Module({
  controllers: [RolesController],
  providers: [RolesService],
  imports: [
    SequelizeModule.forFeature([Role, User, UserRoles]),
]
})
export class RolesModule {}
