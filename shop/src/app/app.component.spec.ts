import { TestBed, ComponentFixture, ComponentFixtureAutoDetect, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, Component, Directive, Input } from '@angular/core';

import { RouterOutletStubComponent, RouterStub, LocalStorageServiceStub } from './test/stubs';
import { AppComponent } from './app.component';
import { PublicCartService } from './services/index';
import { Router } from '@angular/router';
import { LocalStorageService } from './services/local-storage.service';
import { APP_BASE_HREF } from '@angular/common';


describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed
      .configureTestingModule({
        declarations: [
          AppComponent,
           RouterOutletStubComponent
        ],
        providers: [
          PublicCartService,
          {provide: Router, useClass: RouterStub},
          {provide: LocalStorageService, useClass: LocalStorageServiceStub},
          { provide: APP_BASE_HREF, useValue: '/' }
        ]
      })
      .compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
