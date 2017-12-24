import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import './../../services/rxjs-extensions';


@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class AdminDashboardComponent implements OnInit {

  sessionId: Observable<string>;
  token: Observable<string>;


  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.sessionId = this.route
      .queryParamMap
      .map(params => params.get('session_id') || 'None');

    this.token = this.route
      .fragment
      .map(fragment => fragment || 'None');

  }

}
