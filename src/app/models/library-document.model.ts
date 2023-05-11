export class DocumentDTO {

    constructor (public id: number | null, public title: string = "", public author: string="", public publisher: string="", public publishedDate?: Date | null){}

    static create(id: number | null, title: string = "", author: string="", publisher: string="", publishedDate?: Date | null){
        return new DocumentDTO(id, title, author, publisher, publishedDate);
    }
}