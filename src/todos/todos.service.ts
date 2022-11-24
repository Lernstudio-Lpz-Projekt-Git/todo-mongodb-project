import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Todo, TodoDocument } from 'src/schemas/todo.schema';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

@Injectable()
export class TodosService {
  constructor(@InjectModel(Todo.name) private todoModel: Model<TodoDocument>) {}

  async create(createTodoDto: CreateTodoDto): Promise<Todo> {
    const createdTodo = new this.todoModel(createTodoDto);
    return createdTodo.save();
  }

  async findAll(): Promise<Todo[]> {
    return this.todoModel.find().exec();
  }

  async findOne(id: string): Promise<Todo> {
    return this.todoModel.findOne({ _id: id }).exec();
  }

  async update(id: string, updateTodoDto: UpdateTodoDto) {
    return this.todoModel
      .findByIdAndUpdate({ _id: id }, { $set: { ...updateTodoDto } })
      .setOptions({ overwrite: true, new: true })
      .populate('todo_name')
      .populate('todo_descr')
      .populate('todo_done')
      .exec();
  }

  async remove(id: string) {
    return this.todoModel.findByIdAndRemove({ _id: id }).exec();
  }
}
