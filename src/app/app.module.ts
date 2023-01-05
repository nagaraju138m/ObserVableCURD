import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { RegisterComponent } from './register/register.component';
import { MainComponent,  } from './main/main.component';

  // material imports
  import {MatToolbarModule} from '@angular/material/toolbar';
  import {MatIconModule} from '@angular/material/icon';
  import {MatTableModule} from '@angular/material/table';
  import {MatButtonModule} from '@angular/material/button';
  import {MatDialogModule} from '@angular/material/dialog';
  import {MatFormFieldModule} from '@angular/material/form-field';
  import {MatInputModule} from '@angular/material/input';
  import {MatSelectModule} from '@angular/material/select';
  import {MatDatepickerModule} from '@angular/material/datepicker';
  import { MatNativeDateModule } from '@angular/material/core';
  import {MatRadioModule} from '@angular/material/radio';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule
  ],

  declarations: [
    AppComponent,
    NavbarComponent,
    RegisterComponent,
    MainComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
