import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { TestimonialsComponent } from '../../pages/testimonials/createEdit/testimonials.component';
import { TestimonialsListComponent } from '../../pages/testimonials/testimonialsList/testimonialsList.component';
import { BlogFormComponent } from '../../pages/blogForm/blogForm.component';
import { VideosComponent } from '../../pages/videos/videos.component';


export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'tables',         component: TablesComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'testemunhos',    component: TestimonialsListComponent,
        children : [{path : 'criarEditar', component : TestimonialsComponent }] },
    { path: 'blogForm',       component: BlogFormComponent },
    { path: 'videos',         component: VideosComponent}
];
