import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FileEntity } from './entities/file.entity.js';
import { FilesService } from './files.service';
import { FilesController } from './files.controller';

@Module({
  controllers: [FilesController],
  providers: [FilesService],
  imports: [TypeOrmModule.forFeature([FileEntity])],
})
export class FilesModule {}
