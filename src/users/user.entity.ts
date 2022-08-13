import {
  AfterInsert,
  AfterRemove,
  AfterUpdate,
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  email: string;
  @Column()
  password: string;

  @AfterInsert()
  logInsert() {
    console.log(`User with id ${this.id} has been inserted`);
  }
  @AfterUpdate()
  logUpdate() {
    console.log(`User with id ${this.id} has been updated`);
  }
  @AfterRemove()
  logRemove() {
    console.log(`User with id ${this.id} has been removed`);
  }
}
