import { Component, HostListener, inject, OnInit, ViewChild } from '@angular/core';
import { Member } from '../../_models/members';
import { AccountService } from '../../_services/account.service';
import { MembersService } from '../../_services/members.service';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { FormsModule, NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { PhotoEditComponent } from "../photo-edit/photo-edit.component";
import { DatePipe } from '@angular/common';
import { TimeagoModule } from 'ngx-timeago';


@Component({
  selector: 'app-member-edit',
  standalone: true,
  imports: [TabsModule, FormsModule, PhotoEditComponent, DatePipe, TimeagoModule],
  templateUrl: './member-edit.component.html',
  styleUrl: './member-edit.component.css'
})
export class MemberEditComponent implements OnInit {
  @ViewChild('editForm') editForm?: NgForm;
  @HostListener('window:beforeunload', ['$event']) notify($event: any) {
    if (this.editForm?.dirty) {
      $event.returnValue = true
    }
  }
  member?: Member;
  private accountService = inject(AccountService);
  private memberService = inject(MembersService);
  private tostr = inject(ToastrService);
  ngOnInit(): void {
    this.loadMember()
  }
  loadMember() {
    const user = this.accountService.currentUser();
    if (!user) return;
    this.memberService.getMember(user.username).subscribe({
      next: member => this.member = member
    })
  }
  updateMember() {
    this.memberService.updateMember(this.editForm?.value).subscribe({
      next: () => {
        this.tostr.success('Profile updated successfully')
        this.editForm?.reset(this.member)
      }
    })

  }
  onMemberChange(event: Member) {
    this.member = event;
  }

}
