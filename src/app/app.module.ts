import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { ProductFilterPipe }from './list/list.filter'
import { routes } from './app.router';
import { DefaultDispComponent } from './default-disp/default-disp.component';
@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ProductFilterPipe,
    DefaultDispComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
