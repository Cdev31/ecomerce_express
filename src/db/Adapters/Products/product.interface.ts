
export interface Product {
    find(): void

    findById(id:string): void

    create(data): void

    update(id, data): void

    delete(id): void
}