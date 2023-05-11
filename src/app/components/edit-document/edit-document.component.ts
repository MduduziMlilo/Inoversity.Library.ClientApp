import { Component, Input, OnInit } from '@angular/core';
import { DocumentDTO } from 'src/app/models/library-document.model';
import { LibraryDocumentService } from 'src/app/services/library-document.service';

@Component({
  selector: 'app-edit-document',
  templateUrl: './edit-document.component.html',
  styleUrls: ['./edit-document.component.css']
})
export class EditDocumentComponent implements OnInit{
  @Input() document?: DocumentDTO

  /**
   *
   */
  constructor() {
    
  }

  ngOnInit(): void {
    
  }

  updateDocument(document: DocumentDTO){}

  createDocument(document: DocumentDTO){}

  deleteDocument(document: DocumentDTO){}
}
