import { Injectable } from "@angular/core";
import { CardsInterface } from "../interfaces/cards";

@Injectable({
  providedIn: 'root'
})
export class Cards {
  private Cards:CardsInterface[] = [
    {
      name:'users',
      borderColor: "border-blue-700",
      routerLink: "/administration/users/list",
      backgroundColor: "bg-blue-700",
      count: 0,
      textColor: "text-blue-700",
      title: "Users",
      svgClass: "bi bi-person-fill",
      svgPath: "M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6",
    },
    {
      name: "clients",
      borderColor: "border-green-700",
      routerLink: "/clients/list",
      backgroundColor: "bg-green-700",
      count: 0,
      textColor: "text-green-700",
      title: "Clients",
      svgClass: "bi bi-people-fill",
      svgPath: "M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"
    },
    {
      name: "cars",
      borderColor: "border-red-700",
      routerLink: "/cars/list",
      backgroundColor: "bg-red-700",
      count: 0,
      textColor: "text-red-700",
      title: "Cars",
      svgClass: "bi bi-car-front-fill",
      svgPath: "M2.52 3.515A2.5 2.5 0 0 1 4.82 2h6.362c1 0 1.904.596 2.298 1.515l.792 1.848c.075.175.21.319.38.404.5.25.855.715.965 1.262l.335 1.679q.05.242.049.49v.413c0 .814-.39 1.543-1 1.997V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.338c-1.292.048-2.745.088-4 .088s-2.708-.04-4-.088V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.892c-.61-.454-1-1.183-1-1.997v-.413a2.5 2.5 0 0 1 .049-.49l.335-1.68c.11-.546.465-1.012.964-1.261a.8.8 0 0 0 .381-.404l.792-1.848ZM3 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2m10 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2M6 8a1 1 0 0 0 0 2h4a1 1 0 1 0 0-2zM2.906 5.189a.51.51 0 0 0 .497.731c.91-.073 3.35-.17 4.597-.17s3.688.097 4.597.17a.51.51 0 0 0 .497-.731l-.956-1.913A.5.5 0 0 0 11.691 3H4.309a.5.5 0 0 0-.447.276L2.906 5.19Z"
    },
    {
      name: "typeCars",
      borderColor: "border-yellow-400",
      routerLink: "/cars/types/list",
      backgroundColor: "bg-yellow-400",
      count: 0,
      textColor: "text-yellow-400",
      title: "Types",
      svgClass: "bi bi-tags-fill",
      svgPath: "M2 2a1 1 0 0 1 1-1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 2 6.586zm3.5 4a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3 M1.293 7.793A1 1 0 0 1 1 7.086V2a1 1 0 0 0-1 1v4.586a1 1 0 0 0 .293.707l7 7a1 1 0 0 0 1.414 0l.043-.043z"
    }
  ];
  getCards(): CardsInterface[] {
    return this.Cards;
  }
}
