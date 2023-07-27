import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateFileDto } from './dto/create-file.dto';
import { UpdateFileDto } from './dto/update-file.dto';
import { FileEntity } from './entities/file.entity.js';

@Injectable()
export class FilesService {
  constructor(
    @InjectRepository(FileEntity)
    private repository: Repository<FileEntity>,
  ) {}

  // create(createFileDto: CreateFileDto) {
  //   return 'This action adds a new file';
  // }

  findAll() {
    return this.repository.find();
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} file`;
  // }
  //
  // update(id: number, updateFileDto: UpdateFileDto) {
  //   return `This action updates a #${id} file`;
  // }
  //
  // remove(id: number) {
  //   return `This action removes a #${id} file`;
  // }
}
