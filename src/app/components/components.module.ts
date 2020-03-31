import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CustomTableComponent } from './table/table.component'
import { ArraySortPipe } from '../app.pipes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgbModule
  ],
  declarations: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    CustomTableComponent,
    ArraySortPipe

  ],
  providers : [
    ArraySortPipe
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    CustomTableComponent
  ]
})
export class ComponentsModule { }
