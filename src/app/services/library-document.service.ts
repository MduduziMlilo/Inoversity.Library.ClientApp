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
    return this.httpClient.get<any>(`${this.baseUrl}/api/${this.url}`).pipe(map(response => response.data));
  }
}
