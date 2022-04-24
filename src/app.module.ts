import {Module} from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { SequelizeModule } from "@nestjs/sequelize";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { UsersModule } from './users/users.module';

@Module({
    controllers: [AppController],
    providers: [AppService],
    imports: [
        ConfigModule.forRoot({
            envFilePath:'.env'
        }),
        SequelizeModule.forRoot({
            dialect: 'postgres',
            host: process.env.POSTGRES_HOST,
            port: Number(process.env.POSTGRESS_PORT),
            username: process.env.POSTGRES_USER,
            password: process.env.POSTGRESS_PASSWORD,
            database: process.env.POSTGRES_DB,
            models:[],
            autoLoadModels: true
        }),
        UsersModule,
    ]
})
export class AppModule {}