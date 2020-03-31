import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClipboardModule } from 'ngx-clipboard';

import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { TestimonialsComponent } from '../../pages/testimonials/createEdit/testimonials.component';
import { TestimonialsListComponent } from '../../pages/testimonials/testimonialsList/testimonialsList.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BlogFormComponent } from '../../pages/blogForm/blogForm.component';
import { VideosComponent } from '../../pages/videos/videos.component';
import { TestimonialsListService } from '../../pages/testimonials/testimonialsList/testimonialsList.service';
// import { ToastrModule } from 'ngx-toastr';
import { ComponentsModule } from '../../components/components.module';

import { CustomTableComponent } from '../../components/table/table.component';
import { ArraySortPipe } from '../../app.pipes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    ClipboardModule,
    ReactiveFormsModule,
    ComponentsModule

  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TablesComponent,
    IconsComponent,
    MapsComponent,
    TestimonialsComponent,
    TestimonialsListComponent,
    BlogFormComponent,
    VideosComponent,
    //ArraySortPipe
  ],
  providers : [
    //ArraySortPipe,
    TestimonialsListService
  ],
  exports : [
    //ArraySortPipe
  ]
})

export class AdminLayoutModule {}
