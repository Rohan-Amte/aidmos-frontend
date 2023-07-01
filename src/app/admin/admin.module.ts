import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { LandingComponent } from './landing.component';
import { UsertypesComponent } from './usertypes/usertypes.component';
import { UsersComponent } from './users/users.component';
import { MenusComponent } from './menus/menus.component';
import { ModulesComponent } from './modules/modules.component';
import { ModulemenusComponent } from './modulemenus/modulemenus.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { BusinessesComponent } from './businesses/businesses.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material/core';


@NgModule({
  declarations: [
    LandingComponent,
    UsertypesComponent,
    UsersComponent,
    MenusComponent,
    ModulesComponent,
    ModulemenusComponent,
    BusinessesComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule
  ]
})
export class AdminModule { }
