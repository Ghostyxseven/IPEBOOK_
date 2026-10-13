import type { IBookDataSource } from "@/model/datasources/iBookDataSource";
import type { IBookUseCases } from "@/usecase/iBookUseCases";

export class BookUseCases implements IBookUseCases {
  constructor(private readonly dataSource: IBookDataSource) {}

  listBooks() {
    return this.dataSource.list();
  }
}
