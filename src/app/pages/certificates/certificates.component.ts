import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HandlerService } from 'src/app/services/handler.service';

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.scss']
})
export class CertificatesComponent implements OnInit {

  constructor(private route: ActivatedRoute, private handlerService: HandlerService) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.handlerService.updateTitle(data['pageTitle']);
    })
  }

}
