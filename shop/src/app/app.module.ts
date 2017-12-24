import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {ConstantsService} from './services/constants.service';
import {GeneratorService} from './services/generator.service';
import {ConfigOptionsService} from './services/config-options.service';
import {FontChangerDirective} from './directives/font-changer.directive';
import {LocalStorageService} from './services/local-storage.service';
import {Router, RouterModule} from '@angular/router';
import {appRouterComponents, AppRoutingModule} from './app.routing.module';
import {MessagesComponent} from './components';
import {AuthService, CartService, DialogService, MessagesService} from './services';
import {AuthGuard} from './guards/auth.guard';
import {ProductsModule} from './products/products.module';

@NgModule({
  declarations: [
    AppComponent,
    FontChangerDirective,
    appRouterComponents,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ProductsModule,
    AppRoutingModule,
  ],
  exports: [
    FontChangerDirective,
  ],
  providers: [
    ConfigOptionsService,
    CartService,
    {provide: ConstantsService, useValue: new ConstantsService()},
    {provide: GeneratorService, useFactory: () => new GeneratorService(10)},
    LocalStorageService,
    MessagesService, AuthGuard, DialogService, AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(router: Router) {
    console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }
}
