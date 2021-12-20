import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PagrindinisService {

  constructor(private http: HttpClient) { }

gautiSuniuka() {

  return this.http.get('https://rest-api-uzuotys4.herokuapp.com/suniukas');
}

siustiSuniuka(suniukas: any) {

  console.log(suniukas);
  
  return this.http.post('https://rest-api-uzuotys4.herokuapp.com/prideti', suniukas).subscribe(data=> console.log(data));
}


}
