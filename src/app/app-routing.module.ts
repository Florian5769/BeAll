import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthService } from 'src/providers/auth/auth.service';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';


const routes: Routes = [{
  path: '',
  component: LoginComponent
},
{
  path: '', component: SidebarComponent,  canActivate : [AuthService], children: [
    {
      path: 'dashboard',
      component: DashboardComponent
    },
    {
      path: 'users',
      component: UserComponent
    }
  ]
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
