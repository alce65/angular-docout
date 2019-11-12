import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
import { UtilsModule } from './utils/utils.module';

registerLocaleData(localeEs, 'es');

 // providers: [ { provide: LOCALE_ID, useValue: 'es' } ],

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgbModule,
    CoreModule,
    UtilsModule
  ],
  providers: [ {provide: LOCALE_ID , useValue: 'es-ES'} ],
  bootstrap: [AppComponent]
})
export class AppModule { }
