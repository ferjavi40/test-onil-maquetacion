import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { NavbarComponent } from './navbar/navbar.component';



@NgModule({
  declarations: [
    HeaderComponent,
    BodyComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HeaderComponent,
    BodyComponent,
    NavbarComponent
  ]
})
export class OnilModule { }
