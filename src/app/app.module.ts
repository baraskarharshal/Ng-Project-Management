import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { AppRoutingModule } from './app-routing.module';
import { ProjectComponent } from './project/project.component';
import { UsersComponent } from './users/users.component';
import { DomainsComponent } from './domains/domains.component';

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  declarations: [AppComponent, HelloComponent, SidenavComponent, ProjectComponent, UsersComponent, DomainsComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
