import {Component, OnDestroy, OnInit, Optional, ViewChild} from '@angular/core';
import {ConstantsService} from './services/constants.service';
import {ConfigOptionsService} from './services/config-options.service';
import {ConfigOptions} from './models/config-options.model';
import {LocalStorageService} from './services/local-storage.service';
import {ProductListComponent} from './products';
import {Meta, Title} from '@angular/platform-browser';
import {PublicCartService} from './services';
import {NavigationEnd, Router} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  lastVisited: string;
  private sub: Subscription;

  @ViewChild('productList') productList: ProductListComponent;

  constructor(public publicCartService: PublicCartService,
              private titleService: Title,
              private metaService: Meta,
              private router: Router,
              @Optional() constantsService: ConstantsService,
              @Optional() configService: ConfigOptionsService,
              private localStorageService: LocalStorageService) {

    if (!!configService) {
      configService.configure(new ConfigOptions(1, 'admin', 'admin@admin.com'));
    } else {
      console.log('ConfigService not initialized');
    }

    if (!!constantsService) {
      console.log(constantsService.getConst());
    }
    this.lastVisited = this.localStorageService.getItem('lastVisited');
    localStorageService.setItem('lastVisited', new Date().toLocaleString());
  }

  onActivate($event) {
    console.log('Activated Component', $event);
  }

  onDeactivate($event) {
    console.log('Deactivated Component', $event);
  }

  displayMessages(): void {
    this.router.navigate([{outlets: {popup: ['public-cart']}}]);
    this.publicCartService.isDisplayed = true;
  }

  ngOnInit() {
    this.setPageTitlesAndMeta();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  private setPageTitlesAndMeta() {
    this.sub = this.router.events
      .filter(event => event instanceof NavigationEnd)
      .map(() => this.router.routerState.root)
      .map(route => {
        while (route.firstChild) {
          route = route.firstChild;
        }
        return route;
      })
      .filter(route => route.outlet === 'primary')
      .switchMap(route => route.data)
      .subscribe(
        data => {
          this.titleService.setTitle(data['title']);
          this.metaService.addTags(data['meta']);
        }
      );
  }
}
