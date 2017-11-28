import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {CartModule} from './cart/cart.module';
import {ProductModule} from './product/product.module';
import {ConstantsService} from './services/constants.service';
import {GeneratorService} from './services/generator.service';
import {ConfigOptionsService} from './services/config-options.service';
import {FontChangerDirective} from './directives/font-changer.directive';
import {LocalStorageService} from './services/local-storage.service';
import {OrderByPipe} from './pipes/orderby.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FontChangerDirective,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CartModule,
    ProductModule,
  ],
  exports: [
    FontChangerDirective,
  ],
  providers: [
    ConfigOptionsService,
    { provide: ConstantsService, useValue: new ConstantsService()} ,
    { provide: GeneratorService, useFactory: () => new GeneratorService(10) },
    LocalStorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
