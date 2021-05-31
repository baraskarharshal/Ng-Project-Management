import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { AppRoutingModule } from './app-routing.module';
import { ProjectComponent } from './project/project.component';
import { UsersComponent } from './users/users.component';
import { DomainsComponent } from './domains/domains.component';
import { AddUserComponent } from './users/add-user/add-user.component';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { usersReducer } from './users/state/users.reducer';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgbModalModule,
    StoreModule.forRoot({ users: usersReducer })
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    SidenavComponent,
    ProjectComponent,
    UsersComponent,
    DomainsComponent,
    AddUserComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
