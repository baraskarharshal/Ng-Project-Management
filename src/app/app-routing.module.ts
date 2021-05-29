import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DomainsComponent } from './domains/domains.component';
import { HelloComponent } from './hello.component';
import { ProjectComponent } from './project/project.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {
    path: '',
    component: ProjectComponent
  },
  {
    path: 'users',
    component: UsersComponent
  },
  {
    path: 'domains',
    component: DomainsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
