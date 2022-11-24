// Beispiel für: SQL Databases in a NestJS Application With TypeORM
// wird in dieem Projekt aber nicht verwendet, stattdessen: SCHEMAS
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Todo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  todo_name: string;

  @Column()
  todo_descr: string;

  @Column()
  todo_done: boolean;
}
