import type { IBookDataSource } from "@/model/datasources/iBookDataSource";
import type { Book } from "@/model/entities/book";

export class MemoryBookDataSource implements IBookDataSource {
  private readonly books: readonly Book[];

  constructor(books: readonly Book[] = []) {
    this.books = books.map((book) => ({ ...book }));
  }

  async list(): Promise<readonly Book[]> {
    return this.books.map((book) => ({ ...book }));
  }
}
