import uuid from 'uuid/v4';

export default class Category {
  private id: string;
  private name: string;

  constructor(fields: { name: string }) {
    this.id = uuid();
    this.name = fields.name;
  }

  public getId(): string {
    return this.id;
  }
}
