import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { DocumentDTO } from '../models/library-document.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LibraryDocumentService {
  private url = 'Documents'
  private baseUrl = 'https://localhost:7100'
  constructor(private httpClient: HttpClient) { }

  public getDocuments():  Observable<any> {
    return this.httpClient.get<any>(`${this.baseUrl}/api/${this.url}/all`).pipe(map(response => response.data));
  }

  public createDocument(document: DocumentDTO):  Observable<any> {
    return this.httpClient.post<DocumentDTO[]>(`${this.baseUrl}/api/${this.url}/add`, document);
  }

  public deleteDocument(document: DocumentDTO):  Observable<any> {
    return this.httpClient.delete<DocumentDTO[]>(`${this.baseUrl}/api/${this.url}/${document.id}`);
  }

  public updateDocument(document: DocumentDTO):  Observable<any> {
    return this.httpClient.put<DocumentDTO[]>(`${this.baseUrl}/api/${this.url}/${document.id}`, document);
  }
}
