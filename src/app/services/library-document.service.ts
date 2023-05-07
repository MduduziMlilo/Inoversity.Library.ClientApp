import { Injectable } from '@angular/core';
import { DocumentDTO } from '../models/library-document.model';

@Injectable({
  providedIn: 'root'
})
export class LibraryDocumentService {

  constructor() { }

  public getDocuments():  DocumentDTO[] {
    let documentDTO = DocumentDTO.create(1, "My Title", "Mduduzi", "Mduduzi", "My Date");
    let documentDTO2 = DocumentDTO.create(2, "My Title", "Mduduzi", "Mduduzi", "My Date")
    return [documentDTO, documentDTO2];
  }
}
