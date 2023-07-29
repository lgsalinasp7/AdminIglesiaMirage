import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaWebIglesiaComponent } from './pagina-web-iglesia.component';

describe('PaginaWebIglesiaComponent', () => {
  let component: PaginaWebIglesiaComponent;
  let fixture: ComponentFixture<PaginaWebIglesiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaWebIglesiaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaWebIglesiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
