export class DocumentDTO {

    constructor (public id: number | null, public title: string, public author: string, public publisher: string, public publishedDate: string){}

    static create(id: number | null, title: string, author: string, publisher: string, publishedDate: string){
        return new DocumentDTO(id, title, author, publisher, publishedDate);
    }
}