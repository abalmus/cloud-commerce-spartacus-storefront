import { Component, OnInit } from '@angular/core';
import { ConfigurableRoutesService } from '@spartacus/core';

@Component({
  selector: 'cx-storefront',
  templateUrl: './storefront.component.html',
  styleUrls: ['./storefront.component.scss']
})
export class StorefrontComponent implements OnInit {
  constructor(private configurableRoutesService: ConfigurableRoutesService) {}

  ngOnInit() {
    this.configurableRoutesService.translateRouterConfig('en');
  }
}
