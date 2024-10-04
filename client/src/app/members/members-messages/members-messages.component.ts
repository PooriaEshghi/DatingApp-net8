import { Component, inject, input, output, ViewChild} from '@angular/core';
import { MessageService } from '../../_services/message.service';
import { Message } from '../../_models/messages';
import { TimeagoModule } from 'ngx-timeago';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-members-messages',
  standalone: true,
  imports: [TimeagoModule, FormsModule],
  templateUrl: './members-messages.component.html',
  styleUrl: './members-messages.component.css'
})
export class MembersMessagesComponent {
  @ViewChild('messageForm') messageForm?: NgForm;
  private messageService = inject(MessageService);
  username = input.required<string>();
  messages = input.required<Message[]>();
  messageContent = '';
  updateMessages = output<Message>();

  sendMessage(){

    this.messageService.sendMessage(this.username(), this.messageContent).subscribe({
      next: message => {
        this.updateMessages.emit(message);
        this.messageForm?.reset();
      }
    })
  }

}
