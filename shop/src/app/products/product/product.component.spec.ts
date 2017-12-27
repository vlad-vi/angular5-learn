import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ProductComponent } from './product.component';
import {RouterTestingModule} from '@angular/router/testing';
import {PublicCartService} from '../../services';


describe('ProductComponent', () => {
  let component: ProductComponent,
    fixture: ComponentFixture<ProductComponent>,
    de: DebugElement,
    el: HTMLElement;

  beforeEach(async(() => {

    TestBed
      .configureTestingModule({
        imports: [RouterTestingModule],
        declarations: [ProductComponent],
        providers: [PublicCartService]
      })
      .compileComponents();

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;
    const product = {
      id: 5,
      itemsInStock: 3,
      price: 333,
      name: 'test'
    };
    component.product = product;
    de = fixture.debugElement.query(By.css('ul>li:first-child'));
    el = de.nativeElement;
  });


  it('should display original price', () => {
    fixture.detectChanges();
    expect(el.textContent).toContain(component.product.price.toString());
  });

  it('should display a different price', () => {
    component.product.price = 444;
    fixture.detectChanges();
    expect(el.textContent).toContain('444');
  });
});
