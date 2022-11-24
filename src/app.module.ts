import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodosModule } from './todos/todos.module';

@Module({
  //imports: [TodosModule],
  imports: [
    MongooseModule.forRoot(
      //`mongodb+srv://Admin:admin2022@cluster0.1c4calc.mongodb.net/todos`,
      `mongodb://localhost:27017/todos`,
    ),
    TodosModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
