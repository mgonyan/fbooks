import { Book, Category } from '../../model';

export default class BookBuilder {
  private title: string = 'Default title';
  private description: string = 'Default description';
  private categories: Category[] = [];

  public withTitle(title: string): BookBuilder {
    this.title = title;

    return this;
  }

  public withDescription(description: string): BookBuilder {
    this.description = description;

    return this;
  }

  public withCategory(category: Category): BookBuilder {
    this.categories.push(category);

    return this;
  }

  public build(): Book {
    return new Book({
      title: this.title,
      description: this.description,
      categories: this.categories,
    });
  }
}
