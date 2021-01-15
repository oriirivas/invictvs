import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CompetitionModel, MedalModel } from './medal-model';
@Component({
  selector: 'app-medal-table',
  templateUrl: './medal-table.component.html',
  styleUrls: ['./medal-table.component.css']
})
export class MedalTableComponent implements OnInit {
  id: number =0;
  arrayLength: number =0;
  currentData: MedalModel[];
  constructor(private rutaActiva: ActivatedRoute) {
    this.id=this.rutaActiva.snapshot.params.id 
    window.scroll(1,0);
  }

  ngOnInit(): void {
    this.setData()
  }

  setData(){
     this.data.find( item => {
      if(item.id==this.id){
        this.currentData = item.data
        this.arrayLength = item.data.length
      }
   })
  }

  data: CompetitionModel[] = [
    {
      'id':1, //CHILEAN POLE SPORT
      'data': [
        { 
          'name': 'Marcia Zarate',
          'category': 'Master 40',
          'place': 1,
          'video': '',
          'year': 2017,
        },
        { 
          'name': 'Anita Papic',
          'category': 'Master 40',
          'place': 3,
          'video': '',
          'year': 2017,
        },
        { 
          'name': 'Fernanda Pizarro',
          'category': 'Profesional',
          'place': 3,
          'video': '',
          'year': 2017,
        }

      ]
    },
    {
      'id':2, //CHILE POLE CHAMPIONSHIP
      'data': [
        { 
          'name': 'Claudia Concha',
          'category': 'Master 40',
          'place': 1,
          'video': '',
          'year': 2017,
        },
        { 
          'name': 'Anita Papic',
          'category': 'Master 40',
          'place': 2,
          'video': '',
          'year': 2017,
        },
        { 
          'name': 'Carolina Luzzi',
          'category': 'Master 40',
          'place': 3,
          'video': '',
          'year': 2017,
        },
        { 
          'name': 'Stephany Butler',
          'category': 'Amateur Femenino 1',
          'place': 2,
          'video': '',
          'year': 2017,
        },
        { 
          'name': 'Paulina Cifuentes',
          'category': 'Profesional',
          'place': 1,
          'video': '',
          'year': 2017,
        },
        { 
          'name': 'Felipe Alvarado',
          'category': 'Amateur Masculino 1',
          'place': 1,
          'video': '',
          'year': 2017,
        },
        { 
          'name': 'Paloma Schneider',
          'category': 'Elite Femenino',
          'place': 1,
          'video': '',
          'year': 2017,
        },
        { 
          'name': 'Eliana Gallardo',
          'category': 'Elite Femenino',
          'place': 2,
          'video': '',
          'year': 2017,
        },
        { 
          'name': 'Fernanda Pizarro',
          'category': 'Elite Femenino',
          'place': 3,
          'video': '',
          'year': 2017,
        },
        { 
          'name': 'Ricardo Bustos',
          'category': 'Elite Masculino',
          'place': 1,
          'video': '',
          'year': 2017,
        },
        { 
          'name': 'Felipe Mendoza',
          'category': 'Elite Masculino',
          'place': 2,
          'video': '',
          'year': 2017,
        },
        { 
          'name': 'Valeria Cid',
          'category': 'Juvenil Femenino',
          'place': 2,
          'video': '',
          'year': 2018,
        },
        { 
          'name': 'Anita Papic',
          'category': 'Master 40',
          'place': 1,
          'video': '',
          'year': 2018,
        },
        { 
          'name': 'Claudia Palma',
          'category': 'Master 40',
          'place': 2,
          'video': '',
          'year': 2018,
        },
        { 
          'name': 'Carolina Luzzi',
          'category': 'Master 40',
          'place': 3,
          'video': '',
          'year': 2018,
        },
        { 
          'name': 'Milenka Pizarro',
          'category': 'Elite Femenino',
          'place': 1,
          'video': '',
          'year': 2018,
        },
        { 
          'name': 'Fernanda Pizarro',
          'category': 'Elite Femenino',
          'place': 2,
          'video': '',
          'year': 2018,
        },
        { 
          'name': 'Jomaris Rossell',
          'category': 'Elite Femenino',
          'place': 3,
          'video': '',
          'year': 2018,
        },
      ]
    },
    {
      'id':3, //PAN AMERICAN POLE CHAMPIONSHIP
      'data': [
        { 
          'name': 'Felipe Alvarado',
          'category': 'Amateur Masculino',
          'place': 2,
          'video': '',
          'year': 2017,
        },
        { 
          'name': 'Carolina Luzzi',
          'category': 'Master 40',
          'place': 2,
          'video': '',
          'year': 2017,
        },
        { 
          'name': 'Anita Papic',
          'category': 'Master 40',
          'place': 3,
          'video': '',
          'year': 2017,
        },
        { 
          'name': 'Eliana Gallardo',
          'category': 'Elite Femenino',
          'place': 2,
          'video': '',
          'year': 2017,
        },
        { 
          'name': 'Paloma Schneider',
          'category': 'Elite Femenino',
          'place': 3,
          'video': '',
          'year': 2017,
        },
        { 
          'name': 'Felipe Mendoza',
          'category': 'Elite Masculino',
          'place': 2,
          'video': '',
          'year': 2017,
        },
        { 
          'name': 'Felipe Mendoza',
          'category': 'Elite Masculino',
          'place': 1,
          'video': '',
          'year': 2017,
        },
        { 
          'name': 'Ricardo Bustos',
          'category': 'Elite Masculino',
          'place': 2,
          'video': '',
          'year': 2017,
        },
        { 
          'name': 'Ricardo Bustos',
          'category': 'Pole Stars',
          'place': 2,
          'video': '',
          'year': 2017,
        },
        { 
          'name': 'Felipe Mendoza',
          'category': 'Pole Stars',
          'place': 3,
          'video': '',
          'year': 2017,
        },
        { 
          'name': 'Paulina Cifuentes',
          'category': 'Profesional',
          'place': 1,
          'video': '',
          'year': 2018,
        },
        { 
          'name': 'Anita Papic',
          'category': 'Master 40',
          'place': 1,
          'video': '',
          'year': 2018,
        },
        { 
          'name': 'Claudia Palma',
          'category': 'Master 40',
          'place': 3,
          'video': '',
          'year': 2018,
        },
        { 
          'name': 'Felipe Mendoza',
          'category': 'Pole Stars',
          'place': 2,
          'video': '',
          'year': 2018,
        },
        { 
          'name': 'Ricardo Bustos',
          'category': 'Pole Stars',
          'place': 3,
          'video': '',
          'year': 2018,
        },
      ]
    },
    {
      'id':4, //Amateur pole championship
      'data': [
        { 
          'name': 'Contanza riquelme',
          'category': 'juvenil',
          'place': 1,
          'video': '',
          'year': 2019,
        }
      ]
    },
    {
      'id':5, //ELEVATE POLE CHAMPIONSHIP
      'data': [
        { 
          'name': 'Claudia Palma',
          'category': 'Profesional Femenino',
          'place': 3,
          'video': '',
          'year': 2017,
        }
      ]
    },  
    {
      'id':6, //Exotic doll
      'data': [
        { 
          'name': 'Felipe Mendoza',
          'category': 'Flow Work',
          'place': 1,
          'video': '',
          'year': 2019,
        }
      ]
    },
    {
      'id':7, //EN EQUILIBRIO POLE CHAMPIONSHIP
      'data': [
        { 
          'name': 'Cheryl Palma',
          'category': 'Profesional',
          'place': 3,
          'video': '',
          'year': 2019,
        }
      ]
    }

  ]


  // public getMedalNumber(id: number) {
  //   this.data.find( item => {
  //    if(item.id==this.id){
  //      return item.data.length
  //    }
  // })
  // }
}
