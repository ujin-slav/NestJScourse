import { ApiProperty } from "@nestjs/swagger";
import { Model, Table,Column,DataType, BelongsToMany } from "sequelize-typescript";
import { UserRoles } from "src/roles/user.roles.model";
import {Role} from "../roles/roles.models";

interface UserCreationAttrs {
    email: string;
    password: string;
}
@Table({tableName:'user'})
export class User extends Model<User,UserCreationAttrs> {
    @ApiProperty({example: '1', description: 'Уникальный идентификатор'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;
    @ApiProperty({example: 'user@mail.ru', description: 'Почтовый адрес'})
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    email: string;

    @Column({type: DataType.STRING, allowNull: false})
    password: string;
    @ApiProperty({example: 'true', description: 'Забанен или нет'})
    @Column({type: DataType.BOOLEAN, defaultValue: false})
    banned: boolean;
    
    @BelongsToMany(() => Role, () => UserRoles)
    roles: Role[];

    @Column({type: DataType.STRING, allowNull: true})
    banReason: string;
    
} 

