import uuid from 'uuid/v4';

import Category from './category';

export default class Book {
  private id: string;
  private title: string;
  private description: string;
  private categories: Category[];

  constructor(fields: {
    title: string;
    description: string;
    categories: Category[];
  }) {
    this.id = uuid();
    this.title = fields.title;
    this.description = fields.description;
    this.categories = fields.categories;
  }

  public getId(): string {
    return this.id;
  }

  public getCategories(): Category[] {
    return this.categories;
  }
}
