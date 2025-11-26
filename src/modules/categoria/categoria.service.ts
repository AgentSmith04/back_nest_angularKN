import { Injectable, Inject } from '@nestjs/common';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';
import { Repository } from 'typeorm';
import { Categoria } from './entities/categoria.entity';

@Injectable()
export class CategoriaService {
  constructor(
    @Inject('CATEGORIA_REPOSITORY')
    private readonly categoriaRepository: Repository<Categoria>,
  ) {}

  // Crear nueva categoría
  async create(createCategoriaDto: CreateCategoriaDto): Promise<Categoria> {
    const nuevaCategoria = this.categoriaRepository.create(createCategoriaDto);
    return await this.categoriaRepository.save(nuevaCategoria);
  }

  // Listar todas
  async findAll(): Promise<Categoria[]> {
    return await this.categoriaRepository.find(({order:{id:"asc"}}));
  }

  // Buscar una por id
  async findOne(id: number): Promise<Categoria | null> {
    return await this.categoriaRepository.findOne({ 
      where: { id:id } });
  }

  // Actualizar
  async update(
    id: number,
    updateCategoriaDto: UpdateCategoriaDto,
  ): Promise<Categoria | null> {
    await this.categoriaRepository.update(id, updateCategoriaDto);
    return this.findOne(id);
  }

  // Eliminar
  async remove(id: number) {
    return await this.categoriaRepository.delete(id);
  }
}
