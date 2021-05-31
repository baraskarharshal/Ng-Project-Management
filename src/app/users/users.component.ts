import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { AddUserComponent } from './add-user/add-user.component';
import { User } from './user.config';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users$: Observable<User[]>;

  constructor(private modalService: NgbModal) {}

  ngOnInit() {}

  onClickAddUser() {
    const modalRef = this.modalService.open(AddUserComponent, {
      backdrop: 'static'
    });
    modalRef.componentInstance.name = 'World';
  }
}
