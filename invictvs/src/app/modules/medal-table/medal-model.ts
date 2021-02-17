export class MedalModel {
    name:string;
    category:string;
    place:number;
    video:string;
    year:number;
  }

  export class CompetitionModel {
    id: number;
    name:string;
    data:MedalModel[];
}
