import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HandlerService } from 'src/app/services/handler.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private route: ActivatedRoute, private handlerService: HandlerService) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.handlerService.updateTitle(data['pageTitle']);
    })
  }

}
