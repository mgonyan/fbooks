import uuid from 'uuid/v4';

import Category from './category';
import Book from './book';

export default class User {
  private id: string;
  private name: string;
  private categories: Category[] = [];
  private books: Book[] = [];

  constructor(fields: { name: string }) {
    this.id = uuid();
    this.name = fields.name;
  }

  public getId(): string {
    return this.id;
  }
  public getName(): string {
    return this.name;
  }

  public likesBook(book: Book): void {
    const bookHasDifferentId = (currentBook: Book) =>
      currentBook.getId() != book.getId();

    if (this.getLikedBooks().every(bookHasDifferentId)) {
      this.books.push(book);
      this.likesCategories(book.getCategories());
    }
  }

  public likesCategory(category: Category): void {
    const categoryHasDifferentId = (currentCategory: Category) =>
      currentCategory.getId() != category.getId();

    if (this.categories.every(categoryHasDifferentId)) {
      this.categories.push(category);
    }
  }

  public likesCategories(categories: Category[]): void {
    const addNewCategory = (category: Category) => this.likesCategory(category);

    categories.forEach(addNewCategory);
  }

  public getLikedBooks(): Book[] {
    return this.books;
  }

  public getLikedCategories(): Category[] {
    return this.categories;
  }

  public dislikes(book: Book): void {
    const booksEqualToDislikeOne = (currentBook: Book) =>
      currentBook.getId() !== book.getId();

    this.books = this.books.filter(booksEqualToDislikeOne);
  }
}
