import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { ProdutosComponent } from './produtos/produtos.component';



@NgModule({
  declarations: [
    NavbarComponent,
    ProdutosComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarComponent,
    ProdutosComponent
  ]
})
export class HomeModule { }
