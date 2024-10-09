import { Component, inject } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-roles-modal',
  standalone: true,
  imports: [],
  templateUrl: './roles-modal.component.html',
  styleUrl: './roles-modal.component.css'
})
export class RolesModalComponent {
bsModalRef = inject(BsModalRef);
username = '';
title = '';
// list: string[] = [];
availableRoles: string[] = [];
selectedRoles: string[] = [];
rolesUpdated = false;

updateChecked(checkValue:string){
  if(this.selectedRoles.includes(checkValue)){
    this.selectedRoles = this.selectedRoles.filter(r => r !== checkValue)
  } else {
    this.selectedRoles.push(checkValue);
  }
}
onSelectRoles(){
  this.rolesUpdated = true;
  this.bsModalRef.hide();
}
}
