import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
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
import {TimingInterceptor} from './services/timing-interceptor';
import { ProcessOrderComponent } from './components/process-order/process-order.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FontChangerDirective,
    appRouterComponents,
    PublicCartComponent,
    ProcessOrderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ProductsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
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
    OrderService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TimingInterceptor,
      multi: true,
    }

  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(router: Router) {
    console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }
}
