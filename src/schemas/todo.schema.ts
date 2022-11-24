import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TodoDocument = Todo & Document;

@Schema()
export class Todo {
  @Prop()
  todo_name: string;

  @Prop()
  todo_descr: string;

  @Prop()
  todo_done: boolean;
}

export const TodoSchema = SchemaFactory.createForClass(Todo);
