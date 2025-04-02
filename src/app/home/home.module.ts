import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { TableComponent } from './home-page/components/table/table.component';


@NgModule({
  declarations: [
    HomePageComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    TableModule,
    ButtonModule
  ]
})
export class HomeModule { }
