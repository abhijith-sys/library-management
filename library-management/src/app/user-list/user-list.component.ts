import { Component } from '@angular/core';
import { User } from '../../assets/interface/user.interface';
import { dummyUsers } from '../../dummy/duydata';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {

  users: User[] = dummyUsers;

}
