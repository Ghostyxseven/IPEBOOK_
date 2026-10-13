import { MemoryBookDataSource } from "@/infra/datasources/memoryBookDataSource";
import { BookUseCases } from "@/usecase/bookUseCases";
import type { IBookUseCases } from "@/usecase/iBookUseCases";

// Única implementação disponível nesta fundação; sem seleção de backend fictício.
export const bookUseCases: IBookUseCases = new BookUseCases(
  new MemoryBookDataSource(),
);
