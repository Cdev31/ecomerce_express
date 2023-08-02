
export interface Role {
    find(): void

    findById(id:string): void

    create(data): void

    update(id:string, data): void

    delete(id:string): void
    
}