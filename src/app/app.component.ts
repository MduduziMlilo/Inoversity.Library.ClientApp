import { Component } from '@angular/core';
import { DocumentDTO } from './models/library-document.model';
import { LibraryDocumentService } from './services/library-document.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Inoversity.Library.ClientApp';
  documents: DocumentDTO[] = [];
  documentToEdit?: DocumentDTO;

  constructor(private documentService: LibraryDocumentService){
}

  ngOnInit(): void {
    this.documentService.getDocuments().subscribe((result: DocumentDTO[]) => (this.documents = result));
  }

  initNewDocument() {
    this.documentToEdit = new DocumentDTO(null);
  }

  editDocument(document: DocumentDTO) {
    this.documentToEdit = document
  }
}
