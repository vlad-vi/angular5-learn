import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {ConstantsService} from './services/constants.service';
import {GeneratorService} from './services/generator.service';
import {ConfigOptionsService} from './services/config-options.service';
import {FontChangerDirective} from './directives/font-changer.directive';
import {LocalStorageService} from './services/local-storage.service';
import {Router} from '@angular/router';
import {appRouterComponents, AppRoutingModule} from './app.routing.module';
import {PublicCartComponent} from './components';
import {AuthService, DialogService, PublicCartService} from './services';
import {AuthGuard} from './guards/auth.guard';
import {ProductsModule} from './products/products.module';
import {OrderService} from './services/order.service';

@NgModule({
  declarations: [
    AppComponent,
    FontChangerDirective,
    appRouterComponents,
    PublicCartComponent
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
    {provide: ConstantsService, useValue: new ConstantsService()},
    {provide: GeneratorService, useFactory: () => new GeneratorService(10)},
    LocalStorageService,
    PublicCartService, AuthGuard, DialogService, AuthService,
    OrderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(router: Router) {
    console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }
}
