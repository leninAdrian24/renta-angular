import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypesFormComponent } from './types-form.component';

describe('TypesFormComponent', () => {
  let component: TypesFormComponent;
  let fixture: ComponentFixture<TypesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TypesFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
