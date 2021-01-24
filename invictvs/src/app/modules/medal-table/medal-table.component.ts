import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { SortList } from '../helpers/sort';
import { CompetitionModel, MedalModel } from './medal-model';
@Component({
  selector: 'app-medal-table',
  templateUrl: './medal-table.component.html',
  styleUrls: ['./medal-table.component.css']
})
export class MedalTableComponent implements OnInit {
  id: number = 0;
  arrayLength: number = 0;
  currentData: MedalModel[];
  private sortList: SortList;

  constructor(private rutaActiva: ActivatedRoute) {
    this.id = this.rutaActiva.snapshot.params.id
    this.sortList = new SortList();
    window.scroll(1, 0);
  }

  ngOnInit(): void {
    this.setData()
  }

  setData() {
    this.data.find(item => {
      if (item.id == this.id) {
        this.currentData = this.sortList.sortByAttributeDesc(item.data, "year");
        console.log( this.currentData)
        // this.currentData = item.data
        this.arrayLength = item.data.length
        // console.log(this.arrayLength);
        
      }
    })
  }

  data: CompetitionModel[] = [
    {
      'id': 1, //CHILEAN POLE SPORT
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
      'id': 2, //CHILE POLE CHAMPIONSHIP
      'data': [
        {
          'name': 'Claudia Concha',
          'category': 'Master 40',
          'place': 1,
          'video': 'https://youtu.be/Ct0euOF3Oe4',
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
          'video': 'https://www.youtube.com/watch?v=8mq2gHl4EZ4',
          'year': 2017,
        },
        {
          'name': 'Fernanda Pizarro',
          'category': 'Elite Femenino',
          'place': 3,
          'video': 'https://www.youtube.com/watch?v=x53Tf6geauM',
          'year': 2017,
        },
        {
          'name': 'Ricardo Bustos',
          'category': 'Elite Masculino',
          'place': 1,
          'video': 'https://www.youtube.com/watch?v=gebgtvmp5qU',
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
          'video': 'https://www.youtube.com/watch?v=21ElAx3VQUQ',
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
          'video': 'https://www.youtube.com/watch?v=etd_EelQFrA',
          'year': 2018,
        },
        {
          'name': 'Sandra Loyola',
          'category': 'Amateur Femenino 1',
          'place': 2,
          'video': 'https://www.youtube.com/watch?v=GZvipj_idKU',
          'year': 2019,
        },
        {
          'name': 'Emilia Jhonson',
          'category': 'Infantil B1',
          'place': 2,
          'video': 'https://www.youtube.com/watch?v=ykUiqWeyUA4',
          'year': 2019,
        },
        {
          'name': 'Constanza Riquelme',
          'category': 'Juvenil',
          'place': 2,
          'video': '',
          'year': 2019,
        },
        {
          'name': 'Betty Fuenzalida',
          'category': 'Master 40 Amateur Fem',
          'place': 1,
          'video': '',
          'year': 2019,
        },
        {
          'name': 'Anita Papic',
          'category': 'Master 40 Elite',
          'place': 1,
          'video': 'https://www.youtube.com/watch?v=NIkcTPjxnag&t=3s',
          'year': 2019,
        },
        {
          'name': 'Claudia Palma',
          'category': 'Master 40 Elite',
          'place': 3,
          'video': 'https://www.youtube.com/watch?v=jo4__1i8VVw',
          'year': 2019,
        },
        {
          'name': 'Carmen Munizaga',
          'category': 'Master 50',
          'place': 2,
          'video': '',
          'year': 2019,
        },
        {
          'name': 'Giany Moreno',
          'category': 'Profesional',
          'place': 1,
          'video': '',
          'year': 2019,
        },
        {
          'name': 'Stephany Butler',
          'category': 'Profesional',
          'place': 3,
          'video': '',
          'year': 2019,
        },
        {
          'name': 'Paloma & Paulina',
          'category': 'Pole Show',
          'place': 1,
          'video': 'https://www.youtube.com/watch?v=F5L5UoB1Ak4',
          'year': 2019,
        },
      ]
    },
    {
      'id': 3, //PAN AMERICAN POLE CHAMPIONSHIP
      'data': [
        {
          'name': 'Felipe Alvarado',
          'category': 'Amateur Masculino',
          'place': 2,
          'video': 'https://www.youtube.com/watch?v=Jgk_dW5UJrk',
          'year': 2017,
        },
        {
          'name': 'Carolina Luzzi',
          'category': 'Master 40',
          'place': 2,
          'video': 'https://www.youtube.com/watch?v=w1QfNAyCoEE',
          'year': 2017,
        },
        {
          'name': 'Anita Papic',
          'category': 'Master 40',
          'place': 3,
          'video': 'https://www.youtube.com/watch?v=2v8IzspvXss',
          'year': 2017,
        },
        {
          'name': 'Eliana Gallardo',
          'category': 'Elite Femenino',
          'place': 2,
          'video': 'https://www.youtube.com/watch?v=wbQHxhVn2xE',
          'year': 2017,
        },
        {
          'name': 'Paloma Schneider',
          'category': 'Elite Femenino',
          'place': 3,
          'video': 'https://www.youtube.com/watch?v=ZzRyfKbPZ-Q',
          'year': 2017,
        },
        {
          'name': 'Felipe Mendoza',
          'category': 'Elite Masculino',
          'place': 1,
          'video': 'https://www.youtube.com/watch?v=h2q59as_nbQ',
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
          'video': 'https://www.youtube.com/watch?v=OTQuB231bMc',
          'year': 2017,
        },
        {
          'name': 'Felipe Mendoza',
          'category': 'Pole Stars',
          'place': 3,
          'video': 'https://www.youtube.com/watch?v=pNwy8m6sWs4',
          'year': 2017,
        },
        {
          'name': 'Paulina Cifuentes',
          'category': 'Profesional',
          'place': 1,
          'video': 'https://www.youtube.com/watch?v=k2NcDQbYfWo',
          'year': 2018,
        },
        {
          'name': 'Anita Papic',
          'category': 'Master 40',
          'place': 1,
          'video': 'https://www.youtube.com/watch?v=fLx6vRgJT1w',
          'year': 2018,
        },
        {
          'name': 'Claudia Palma',
          'category': 'Master 40',
          'place': 3,
          'video': 'https://www.youtube.com/watch?v=8BOFj4hBR9U',
          'year': 2018,
        },
        {
          'name': 'Felipe Mendoza',
          'category': 'Pole Stars',
          'place': 2,
          'video': 'https://www.youtube.com/watch?v=a06RMHZxPF0',
          'year': 2018,
        },
        {
          'name': 'Ricardo Bustos',
          'category': 'Pole Stars',
          'place': 3,
          'video': 'https://www.youtube.com/watch?v=urGwdyK3P5o',
          'year': 2018,
        },
        {
          'name': 'Constanza Riquelme',
          'category': 'Juvenil Femenino',
          'place': 1,
          'video': 'https://www.youtube.com/watch?v=dqIUXoo-kkk&t=1s',
          'year': 2019,
        },
        {
          'name': 'Anita Papic',
          'category': 'Master 40',
          'place': 1,
          'video': 'https://www.youtube.com/watch?v=NIkcTPjxnag&t=5s',
          'year': 2019,
        },{
          'name': 'Sandra Loyola',
          'category': 'Amateur Femenino',
          'place': 2,
          'video': 'https://www.youtube.com/watch?v=gX_tVV8A5Wo',
          'year': 2019,
        },
        {
          'name': 'Martina Le-bert',
          'category': 'Amateur Femenino',
          'place': 3,
          'video': '',
          'year': 2019,
        }
      ]
    },
    {
      'id': 4, //Amateur pole championship
      'data': [
        {
          'name': 'Betty Fuenzalida',
          'category': 'Master 40 Amateur Fem',
          'place': 1,
          'video': '',
          'year': 2019,
        },
        {
          'name': 'Sandra Loyola',
          'category': 'Amateur Femenino',
          'place': 1,
          'video': '',
          'year': 2019,
        },
        {
          'name': 'Martina Le-bert',
          'category': 'Amateur Femenino',
          'place': 3,
          'video': '',
          'year': 2019,
        }
      ]
    },
    {
      'id': 5, //ELEVATE POLE CHAMPIONSHIP
      'data': [
        {
          'name': 'Claudia Palma',
          'category': 'Profesional Femenino',
          'place': 3,
          'video': 'https://www.youtube.com/watch?v=6WgvotD_1YI',
          'year': 2017,
        }
      ]
    },
    {
      'id': 6, //Exotic doll
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
      'id': 7, //EN EQUILIBRIO POLE CHAMPIONSHIP
      'data': [
        {
          'name': 'Cheryl Palma',
          'category': 'Profesional',
          'place': 3,
          'video': 'https://www.youtube.com/watch?v=yYDAomp_jA0',
          'year': 2018,
        },
        {
          'name': 'Sandra Loyola',
          'category': 'Profesional Femenino',
          'place': 1,
          'video': '',
          'year': 2019,
        },
        {
          'name': 'Cheryl Palma',
          'category': 'Profesional Femenino',
          'place': 2,
          'video': '',
          'year': 2019,
        },
        {
          'name': 'Constanza Riquelme',
          'category': 'Juvenil Elite',
          'place': 1,
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
