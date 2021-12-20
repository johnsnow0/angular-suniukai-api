import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PagrindinisService } from 'src/app/servisai/pagrindinis.service';


@Component({
  selector: 'app-ikelti-suniuka',
  templateUrl: './ikelti-suniuka.component.html',
  styleUrls: ['./ikelti-suniuka.component.css']
})
export class IkeltiSuniukaComponent implements OnInit {

  constructor(private suniukoServisas: PagrindinisService) { }

  ngOnInit(): void {
  }

suniukoForma = new FormGroup({
vardas: new FormControl(''),
nuotrauka: new FormControl(''),
veisle: new FormControl('')
});

idetiSuniuka() {

  this.suniukoServisas.siustiSuniuka(this.suniukoForma.value);
  
  console.log(this.suniukoForma.value);
  this.suniukoForma.reset();

}



}
