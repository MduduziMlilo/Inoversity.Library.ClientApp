import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { merge } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';

import { environment } from '@env/environment';
import { Logger, UntilDestroy, untilDestroyed } from '@shared';
import { I18nService } from '@app/i18n';
import { DocumentDTO } from './models/library-document.model';
import { LibraryDocumentService } from './services/library-document.service';

const log = new Logger('App');

@UntilDestroy()
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Inoversity.Library.ClientApp';
  documents: DocumentDTO[] = [];
  documentToEdit?: DocumentDTO;

  constructor(
    private documentService: LibraryDocumentService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title,
    private translateService: TranslateService,
    // do not remove the analytics injection, even if the call in ngOnInit() is removed
    // this injection initializes page tracking through the router
    private i18nService: I18nService){
}

  ngOnInit(): void {
    this.documentService.getDocuments().subscribe((result: DocumentDTO[]) => (this.documents = result));

    if (environment.production) {
      Logger.enableProductionMode();
    }

    log.debug('init');

    // Setup translations
    this.i18nService.init(environment.defaultLanguage, environment.supportedLanguages);

    const onNavigationEnd = this.router.events.pipe(filter((event) => event instanceof NavigationEnd));

    // Change page title on navigation or language change, based on route data
    merge(this.translateService.onLangChange, onNavigationEnd)
      .pipe(
        map(() => {
          let route = this.activatedRoute;
          while (route.firstChild) {
            route = route.firstChild;
          }
          return route;
        }),
        filter((route) => route.outlet === 'primary'),
        switchMap((route) => route.data),
        untilDestroyed(this)
      )
      .subscribe((event) => {
        const title = event['title'];
        if (title) {
          this.titleService.setTitle(this.translateService.instant(title));
        }
      });
  }

  createDocumentList(documents: DocumentDTO[]){
    this.documents = documents;
  }
  initNewDocument() {
    this.documentToEdit = new DocumentDTO(null);
  }

  editDocument(document: DocumentDTO) {
    this.documentToEdit = document;
  }

  updateDocumentList(documents: DocumentDTO[]) {
    this.documents = documents;
  }

  ngOnDestroy() {
    this.i18nService.destroy();
  }
}
