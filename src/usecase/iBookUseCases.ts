import type { Book } from "@/model/entities/book";

export interface IBookUseCases {
  listBooks(): Promise<readonly Book[]>;
}
