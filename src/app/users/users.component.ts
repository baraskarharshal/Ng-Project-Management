import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddUserComponent } from './add-user/add-user.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  constructor(private modalService: NgbModal) {}

  ngOnInit() {}

  onClickAddUser() {
    const modalRef = this.modalService.open(AddUserComponent);
    modalRef.componentInstance.name = 'World';
  }
}
