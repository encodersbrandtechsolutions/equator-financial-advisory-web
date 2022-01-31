import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { HandlerService } from 'src/app/services/handler.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  dropdown = false;
  pageTitle = '';
  isHomePage = false;
  showMenu = false;

  subscriptions: Subscription[] = [];

  constructor(private handler: HandlerService) {}

  ngOnInit(): void {
    const pageTitleSubscription = this.handler.pageTitle.subscribe(
      (pageTitle) => {
        this.pageTitle = pageTitle;
      }
    );
    this.subscriptions.push(pageTitleSubscription);
  }

  ngOnDestroy() {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
