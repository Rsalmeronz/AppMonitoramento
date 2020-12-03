import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PeriodicidadePage } from './periodicidade.page';

describe('PeriodicidadePage', () => {
  let component: PeriodicidadePage;
  let fixture: ComponentFixture<PeriodicidadePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeriodicidadePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PeriodicidadePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
