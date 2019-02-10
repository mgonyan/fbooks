import { User } from '../../model';

export default class UserBuilder {
  private name: string;

  constructor() {
    this.name = 'User name';
  }

  public withName(name: string): UserBuilder {
    this.name = name;
    return this;
  }

  public build(): User {
    return new User({ name: this.name });
  }
}
