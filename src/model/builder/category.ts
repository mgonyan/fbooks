import { Category } from '../../model';

export default class CategoryBuilder {
  private name: string;

  constructor() {
    this.name = 'Category name';
  }

  public withName(name: string): CategoryBuilder {
    this.name = name;
    return this;
  }

  public build(): Category {
    return new Category({ name: this.name });
  }
}
