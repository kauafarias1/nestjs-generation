import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Tema } from "./entities/tema.entity";
import { TemaService } from "./services/tema.service";
import { temaControler } from "./controlers/tema.controller";

@Module({
    imports: [TypeOrmModule.forFeature([Tema])],
    providers: [TemaService],
    controllers: [temaControler],
    exports: [TemaService],
})
export class TemaModule {}