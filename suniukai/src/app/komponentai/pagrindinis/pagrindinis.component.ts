import { Component, OnInit } from '@angular/core';

import { PagrindinisService } from 'src/app/servisai/pagrindinis.service';

@Component({
  selector: 'app-pagrindinis',
  templateUrl: './pagrindinis.component.html',
  styleUrls: ['./pagrindinis.component.css']
})
export class PagrindinisComponent implements OnInit {

suo: any;

  constructor(private gautiSuniuka: PagrindinisService) { }

  ngOnInit(): void {
    this.gautiSuni();
  }

gautiSuni() {

  this.gautiSuniuka.gautiSuniuka().subscribe((data)=>this.suo = data);

  console.log(this.suo);
}

atvaizduotiObjekta(objektas: any) {
  return JSON.stringify(objektas, null, 2);(objektas);
}

}
