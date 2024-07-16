import { CUSTOM_ELEMENTS_SCHEMA, Component, Inject, OnDestroy, OnInit, PLATFORM_ID} from '@angular/core';
import { MaterialModule } from '../../core/material/material.module';
import { RouterModule } from '@angular/router';
import { register } from 'swiper/element/bundle';
import { CommonModule} from '@angular/common';
import { GraphqlService } from '../../core/services/graphql/graphql.service';
import { Cards } from '../../shared/utils/cards/cards/cards';
import { Config } from '../../shared/utils/cards/config/config';
import { CardsInterface } from '../../shared/utils/cards/interfaces/cards';
register();
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MaterialModule,RouterModule,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeComponent implements OnInit {
  cards!:CardsInterface[];
  sliderImages = [
    "img/dashboard/1.jpg",
    "img/dashboard/2.jpg",
    "img/dashboard/3.jpg",
  ];
  swiperInstance: any | null = null;
  constructor(
    private cardsConfig:Config,
  ) {
    this.cardsConfig.getCards().subscribe(cards=>{
      this.cards = cards;
    });
  }
  ngOnInit(): void {
  }
}
