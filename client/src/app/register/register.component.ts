import { Component, input, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  model: any = {}
  // @Input()
  // usersFormHomeComponent:any;
  usersFormHomeComponent = input.required<any>()

  register(){
    console.log(this.model);

  }
  cancel(){
    console.log('cancelled');

  }

}
