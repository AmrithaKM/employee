import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { HomeComponent } from './home/home.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component'
import { FormsModule } from '@angular/forms';
import { NamefilterPipe } from './namefilter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    EditEmployeeComponent,
    HomeComponent,
    AddEmployeeComponent,
    NamefilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
