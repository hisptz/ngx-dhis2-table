import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NgxDhis2TableModule } from 'projects/ngx-dhis2-table/src/public_api';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule, NgxDhis2TableModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
