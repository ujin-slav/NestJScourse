import { ApiProperty } from "@nestjs/swagger";
import { Model, Table,Column,DataType } from "sequelize-typescript";

interface RoleCreationAttrs {
    value: string;
    description: string;
}
@Table({tableName:'roles'})
export class Role extends Model<Role,RoleCreationAttrs> {
   
    @ApiProperty({example: '1', description: 'Уникальный идентификатор'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({example: 'ADMIN', description: 'Уникальное Значение роли '})
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    value: string;

    @ApiProperty({example: 'Администратор', description: 'Описание роли'})
    @Column({type: DataType.STRING, allowNull: false})
    description: string;

    
} 
