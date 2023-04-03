import { Injectable } from '@nestjs/common';
import { User } from './interfaces/user.interface';


let users: User[] = [
  { id: 1, firstname: 'John', lastname: 'Doe', age: 31 },
  { id: 2, firstname: 'Jane', lastname: 'Doe', age: 25 },
  { id: 3, firstname: 'Jim', lastname: 'Beam', age: 55 },
];


@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  find(){
    return users;
  }

  findById(id: number) {
    return users.find(user => user.id === id);
  }

  create(id: number, user: any) {
  user.push.find(user => user.id === id);
  }

  update(id: number, user: User) {
    const index = users.findIndex(user => user.id === id);
    users[index] = user;
  }

  delete(id: number) {
    users = users.filter(user => user.id === id);
  }
}