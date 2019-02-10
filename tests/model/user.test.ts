import {
  UserBuilder,
  CategoryBuilder,
  BookBuilder,
} from '../../src/model/builder';

import { User } from '../../src/model';

describe('User', () => {
  it('creates a user', () => {
    const user = new UserBuilder().build();
    expect(user).toBeInstanceOf(User);
  });
  it('has a name', () => {
    const user = new UserBuilder().withName('Manuel').build();
    expect(user.getName()).toEqual('Manuel');
  });
  it('likes a book and its category', () => {
    const user = new UserBuilder().build();
    const category = new CategoryBuilder().withName('Crime').build();
    const book = new BookBuilder()
      .withTitle('Book title')
      .withDescription('Book desc')
      .withCategory(category)
      .build();

    user.likesBook(book);
    expect(user.getLikedBooks()).toEqual([book]);
    expect(user.getLikedCategories()).toEqual([category]);
  });
  it('likes a category', () => {
    const user = new UserBuilder().build();
    const crime = new CategoryBuilder().withName('Crime').build();
    const history = new CategoryBuilder().withName('History').build();

    user.likesCategory(crime);
    user.likesCategory(history);
    expect(user.getLikedCategories()).toEqual([crime, history]);
  });
  it('likes categories', () => {
    const user = new UserBuilder().build();
    const crime = new CategoryBuilder().withName('Crime').build();
    const history = new CategoryBuilder().withName('History').build();

    user.likesCategories([crime, history]);

    expect(user.getLikedCategories()).toEqual([crime, history]);
  });
  it('cannot have duplicate liked categories', () => {
    const user = new UserBuilder().withName('Manuel').build();
    const history = new CategoryBuilder().withName('History').build();
    user.likesCategory(history);
    user.likesCategory(history);

    expect(user.getLikedCategories()).toHaveLength(1);
    expect(user.getLikedCategories()).toEqual([history]);
  });
  it('cannot have duplicate liked books', () => {
    const user = new UserBuilder().withName('Manuel').build();
    const history = new CategoryBuilder().withName('History').build();
    const book = new BookBuilder().withCategory(history).build();
    user.likesBook(book);
    user.likesBook(book);

    expect(user.getLikedBooks()).toHaveLength(1);
    expect(user.getLikedBooks()).toEqual([book]);

    expect(user.getLikedCategories()).toHaveLength(1);
    expect(user.getLikedCategories()).toEqual([history]);
  });
});
