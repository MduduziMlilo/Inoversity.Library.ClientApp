import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DocumentDTO } from 'src/app/models/library-document.model';
import { LibraryDocumentService } from 'src/app/services/library-document.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-edit-document',
  templateUrl: './edit-document.component.html',
  styleUrls: ['./edit-document.component.css']
})
export class EditDocumentComponent implements OnInit{
  @Input() document?: DocumentDTO
  @Output() documentUpdated = new EventEmitter<DocumentDTO[]>();

  /**
   *
   */
  constructor(private documentService: LibraryDocumentService, private location: Location) {
    
  }

  ngOnInit(): void {
    
  }

  updateDocument(document: DocumentDTO){
    this.documentService
    .updateDocument(document)
    .subscribe((documents: DocumentDTO[]) => this.documentUpdated.emit(documents));
    this.location;
  }

  createDocument(document: DocumentDTO){
    this.documentService
    .createDocument(document)
    .subscribe((documents: DocumentDTO[]) => this.documentUpdated.emit(documents));
  }

  deleteDocument(document: DocumentDTO){
    this.documentService
    .deleteDocument(document)
    .subscribe((documents: DocumentDTO[]) => this.documentUpdated.emit(documents));
  }
}
