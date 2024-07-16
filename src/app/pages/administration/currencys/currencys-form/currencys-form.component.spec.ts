import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencysFormComponent } from './currencys-form.component';

describe('CurrencysFormComponent', () => {
  let component: CurrencysFormComponent;
  let fixture: ComponentFixture<CurrencysFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CurrencysFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrencysFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
