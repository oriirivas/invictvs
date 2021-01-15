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
    console.log(this.id);
  }

  ngOnInit(): void {
    this.setData()
  }

  setData(){
     this.data.find( item => {
       console.log('id', this.id)
       console.log('item', item.id)
      if(item.id==this.id){
        this.currentData = item.data
        this.arrayLength = item.data.length
        console.log('dentro',this.arrayLength);
      }
   })
  }

  data: CompetitionModel[] = [
    {
      'id':1,
      'data': [
        { 
          'name': 'Contanza riquelme',
          'category': 'juvenil',
          'place': 1,
          'video': '',
          'year': 2019,
        },
        { 
          'name': 'Contanza riquelme',
          'category': 'Master 40',
          'place': 2,
          'video': '',
          'year': 2019,
        },
        { 
          'name': 'Contanza riquelme',
          'category': 'juvenil',
          'place': 3,
          'video': '',
          'year': 2019,
        },
        { 
          'name': 'Contanza riquelme',
          'category': 'juvenil',
          'place': 1,
          'video': '',
          'year': 2019,
        },

      ]
    },
    {
      'id':2,
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
      'id':3,
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
      'id':4,
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
      'id':5,
      'data': [
        { 
          'name': 'Contanza riquelme',
          'category': 'juvenil',
          'place': 1,
          'video': '',
          'year': 2019,
        }
      ]
    },{
      'id':6,
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
      'id':7,
      'data': [
        { 
          'name': 'Contanza riquelme',
          'category': 'juvenil',
          'place': 1,
          'video': '',
          'year': 2019,
        }
      ]
    }
  ]



  // MedalModel[] = [
    // { 
    //   'name': 'Contanza riquelme',
    //   'category': 'juvenil',
    //   'place': 1,
    //   'video': '',
    //   'year': 2019,
    // }
  // ]
}
