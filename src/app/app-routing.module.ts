import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthService } from 'src/providers/auth/auth.service';
import { SettingsComponent } from './settings/settings.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EventComponent } from './event/event.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { ArticlesComponent } from './articles/articles.component';


const routes: Routes = [{
  path: '',
  component: LoginComponent
},
{
  path: '', component: SidebarComponent, canActivate: [AuthService], children: [
    {
      path: 'dashboard',
      component: DashboardComponent
    },
    {
      path: 'users',
      component: UserComponent
    },
    {
      path: 'events',
      component: EventComponent
    },
    {
      path: 'articles',
      component: ArticlesComponent
    },
    {
      path: 'transactions',
      component: TransactionsComponent
    },
    {
      path: 'settings',
      component: SettingsComponent
    }
  ]
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
