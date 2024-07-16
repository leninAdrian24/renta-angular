import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencysListComponent } from './currencys-list.component';

describe('CurrencysListComponent', () => {
  let component: CurrencysListComponent;
  let fixture: ComponentFixture<CurrencysListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CurrencysListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrencysListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
