import { gql } from 'apollo-angular';
import { GraphqlService } from '../../../../core/services/graphql/graphql.service';
import { Cards } from '../cards/cards';
import { map } from 'rxjs';
import { Injectable } from '@angular/core';
import { CardsInterface } from '../interfaces/cards';
@Injectable({
  providedIn: 'root'
})
export class Config {
  constructor(public cards: Cards,private graphql:GraphqlService) {
  }
  getConfig() {
    return this.graphql.getDashboard().pipe(map((data:any)=>{
      let result; 
      if (data && data.usersPermissionsUsers && data.clients && data.cars && data.typeCars) {
        result = {
          users: data.usersPermissionsUsers.meta.pagination.total,
          clients: data.clients.meta.pagination.total,
          cars: data.cars.meta.pagination.total,
          typeCars: data.typeCars.meta.pagination.total,
          cards:this.cards.getCards()
        };
      }
      return result;
    }));
  }
  getCards(){
    return this.getConfig().pipe(map((data:any)=>{
      if(data){
        let keys:any = Object.keys(data);
        data.cards.forEach((card:CardsInterface)=>{
          if(keys.includes(card.name)){
            card.count = data[card.name];
          }
        });
        return data.cards;
      }
    }))
  }
}
