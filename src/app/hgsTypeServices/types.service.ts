import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { hgsTypes } from '../shared/models/models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TypesService {

  constructor(private http:HttpClient) { }

  addGrievance(data:hgsTypes){
    return this.http.post('http://localhost:3000/hgsTypes', data);
  }

  // GrievanceList(){
  //   return this.http.get<hgsTypes>('http://localhost:3000/hgsTypes');
  // }
  GrievanceList(): Observable<hgsTypes[]> {
    return this.http.get<hgsTypes[]>('http://localhost:3000/hgsTypes');
  }

  deleteUser(id: string){
    return this.http.delete(`http://localhost:3000/hgsTypes/${id}`);
  }

  getUser(id: string) {
    return this.http.get<hgsTypes>(`http://localhost:3000/hgsTypes/${id}`);
  }

  // updateGrievance(id: string) {
  //   return this.http.get<hgsTypes>(`http://localhost:3000/hgsTypes/${id}`);
  // }
  updateGrievance(product: hgsTypes) {
    return this.http.put<hgsTypes>(`http://localhost:3000/hgsTypes/${product.id}`,product);
  }

}
