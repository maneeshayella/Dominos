import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';



@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
