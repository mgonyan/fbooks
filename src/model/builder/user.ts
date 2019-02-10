import { User, Book, Category } from '../../model';
import { BookBuilder, CategoryBuilder } from '.';

export default class UserBuilder {
  private name: string;
  private likedBook?: Book;

  constructor() {
    this.name = 'User name';
  }

  public withName(name: string): UserBuilder {
    this.name = name;
    return this;
  }

  public withALikedBook(): UserBuilder {
    const crime = new CategoryBuilder().withName('Crime').build();

    this.likedBook = new BookBuilder()
      .withTitle('Liked book')
      .withDescription('Book desc')
      .withCategory(crime)
      .build();

    return this;
  }

  public build(): User {
    const user = new User({ name: this.name });

    if (this.likedBook) {
      user.likesBook(this.likedBook);
    }

    return user;
  }
}
