import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreModule, Store, combineReducers } from '@ngrx/store';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
import * as fromRoot from '../../routing/store';
import * as fromCmsReducer from '../../cms/store/reducers';
import { ProductCarouselComponent } from './product-carousel.component';
import { RouterTestingModule } from '@angular/router/testing';
import { PictureComponent } from '../../ui/components/media/picture/picture.component';
import { CmsModuleConfig } from '../../cms/cms-module-config';
import { CmsService } from '../../cms/facade/cms.service';
import { BootstrapModule } from '../../bootstrap.module';

const UseCmsModuleConfig: CmsModuleConfig = {
  cmsComponentMapping: {
    ProductCarouselComponent: 'ProductCarouselComponent'
  }
};

fdescribe('ProductCarouselComponent in CmsLib', () => {
  let store: Store<fromCmsReducer.CmsState>;
  let productCarouselComponent: ProductCarouselComponent;
  let fixture: ComponentFixture<ProductCarouselComponent>;
  let el: DebugElement;

  const mockComponentData = {
    uid: '001',
    typeCode: 'ProductCarouselComponent',
    modifiedTime: '2017-12-21T18:15:15+0000',
    popup: 'false',
    productCodes: '111111 222222 333333 444444',
    scroll: 'ALLVISIBLE',
    title: 'Mock Title',
    name: 'Mock Product Carousel',
    type: 'Product Carousel',
    container: 'false'
  };

  const MockCmsService = {
    getComponentData: () => of(mockComponentData)
  };

  const productCodeArray = ['111111', '222222', '333333', '444444'];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        StoreModule.forRoot({
          ...fromRoot.getReducers(),
          cms: combineReducers(fromCmsReducer.getReducers())
        }),
        BootstrapModule
      ],
      declarations: [ProductCarouselComponent, PictureComponent],
      providers: [
        { provide: CmsService, useValue: MockCmsService },
        { provide: CmsModuleConfig, useValue: UseCmsModuleConfig }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCarouselComponent);
    productCarouselComponent = fixture.componentInstance;

    el = fixture.debugElement;

    store = TestBed.get(Store);

    spyOn(store, 'select').and.returnValues(of(productCodeArray));
  });

  it('should be created', () => {
    expect(productCarouselComponent).toBeTruthy();
  });

  it('should contain cms content in the html rendering after bootstrap', () => {
    expect(productCarouselComponent.component).toBeNull();

    productCarouselComponent.onCmsComponentInit(mockComponentData.uid);
    fixture.detectChanges();
    expect(productCarouselComponent.component).toBe(mockComponentData);
    expect(el.query(By.css('H3')).nativeElement.textContent).toEqual(
      productCarouselComponent.component.title
    );
  });
});
