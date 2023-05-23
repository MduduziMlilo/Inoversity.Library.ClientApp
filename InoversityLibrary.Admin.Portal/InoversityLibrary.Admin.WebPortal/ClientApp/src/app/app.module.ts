import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouteReuseStrategy, RouterModule } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { environment } from '@env/environment';
import { CoreModule } from '@app/core';
import { RouteReusableStrategy, ApiPrefixInterceptor, ErrorHandlerInterceptor, SharedModule } from '@shared';
import { ToastsContainer } from './core/toast/toasts-container.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditDocumentComponent } from './components/edit-document/edit-document.component';
import { HomeModule } from './home/home.module';
import { ShellModule } from './shell/shell.module';
import { AuthorizeModule} from "@app/features/authorize/authorize.module";


@NgModule({
  declarations: [
    AppComponent,
    EditDocumentComponent
  ],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('./ngsw-worker.js', { enabled: environment.production }),
    FormsModule,
    HttpClientModule,
    RouterModule,
    TranslateModule.forRoot(),
    NgbModule,
    CoreModule.forRoot(),
    SharedModule,
    ShellModule,
    HomeModule,
    AuthorizeModule,
    ToastsContainer,
    AppRoutingModule, // must be imported as the last module as it contains the fallback route
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiPrefixInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorHandlerInterceptor,
      multi: true,
    },
    {
      provide: RouteReuseStrategy,
      useClass: RouteReusableStrategy,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
