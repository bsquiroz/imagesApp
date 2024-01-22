import { ImageI } from "../../interfaces/ImagesInterface";

import { ImageApp } from "./imagesApp.model";

export class ImagesAppServices {
  async findAll() {
    return await ImageApp.find();
  }

  async findById(id: string) {
    return await ImageApp.findById(id);
  }

  async create(dto: ImageI) {
    return await ImageApp.create(dto);
  }
}
