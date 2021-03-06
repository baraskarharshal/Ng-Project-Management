import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  fname = '';
  lname = '';
  role = '';
  location = '';
  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit() {}

  onSave() {
    this.activeModal.close('Close click');
  }

  onCancel() {
    this.activeModal.close('Close click');
  }
}
