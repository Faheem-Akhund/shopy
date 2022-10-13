import { Component, OnInit } from '@angular/core';
import { MovieComponent } from '../movie/movie.component';
import { AuthService } from '../services/auth.service';
import { NotificationsService } from '../services/notification/notifications.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  user = localStorage.getItem('user')
  constructor(private auth: NotificationsService) { }
  showNotification = true;
  newCategory = false;
  noticications: NOTIFICATIONS[] = []

  notificationcount = 0;

  ngOnInit(): void {
    this.viewImage();
  }
  disable() {
    this.newCategory = !this.newCategory
  }
  readNotification(notId: number, id: number) {
    this.noticications[notId].received = true;
    if (this.notificationcount >= 1) {
      this.notificationcount = this.notificationcount - 1;
    }
    this.auth.receiveNotification(id).toPromise().then(res => {
      if (res.code == 1) {

      }
    });
  }
  viewImage() {
    this.auth.userNotifications().toPromise().then(res => {
      this.noticications = res.object;
      this.notificationcount = this.noticications.length
      for (let i = 0; i < this.noticications.length; i++) {
        if (this.noticications[i].received === true) {
          this.notificationcount = this.notificationcount - 1;
        }
      }
    });
  }
}

interface NOTIFICATIONS {
  id: number;
  received: boolean;
  notificationStatus: string;
  time: string;

}
