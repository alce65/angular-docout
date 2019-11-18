import { Component, OnInit } from '@angular/core';
import { UserModel } from '../models/user.model';
import { UsersService } from '../services/users.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'doc-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: Array<UserModel>;
  selectedUser: FormControl;
  newUser: UserModel;
  modifyUser: UserModel;
  fcName: FormControl;
  fcEmail: FormControl;
  mensajes: Array<string>;
  isModif: boolean;

  constructor(private usersService: UsersService) {
    this.mensajes = [
      'Para añadir usuarios seleccion la opción vacia'
    ];
   }

  ngOnInit() {
    this.selectedUser = new FormControl();
    this.fcName = new FormControl();
    this.fcEmail = new FormControl();
    this.getUsers();
    this.isModif = false;
  }

   private async  getUsers() {
      this.users = await this.usersService.readAll();
   }

   onSelectUser() {
     console.log(this.selectedUser.value);
     this.isModif = false;
   }

   async onAddUser() {
     if(!this.fcName.value || !this.fcEmail.value) {
       return;
     }
     this.newUser = await this.usersService.create(
       new UserModel(null, this.fcName.value, this.fcEmail.value)
      );
     this.fcName.setValue('');
     this.fcEmail.setValue('');
     console.log(this.newUser);
     this.getUsers();
   }

  onModifyBtn() {
    this.isModif = true;
    this.fcName.setValue(this.selectedUser.value.name);
    this.fcEmail.setValue(this.selectedUser.value.email);
  }

   async onModifyUser() {
    const i = + this.selectedUser.value.id;
    if (isNaN(i)) {
      return;
    }
    this.modifyUser = await this.usersService.update(i,
      new UserModel(null, this.fcName.value, this.fcEmail.value));
    console.log(this.modifyUser);
    this.getUsers();
   }
   

   async onDeleteUser() {
     const i = + this.selectedUser.value.id;
     if (isNaN(i)) {
       return;
     }
     console.log(i);
     const r = await this.usersService.delete(i);
     console.log(r);
     this.getUsers();
   }
}
