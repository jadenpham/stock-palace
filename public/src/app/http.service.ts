import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import {* as bcrypt} from "bcrypt";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }
  

  register(user){
    // let hashed= bcrypt.hash(user.password);
    // console.log(hashed, "this is the hashed pw")
    // console.log(user, "this is the user info")
    return this._http.post('/a/register', user)
  }
  sell(item){
    return this._http.post('/a/create', item);
  }
  getAll(){
    return this._http.get('/a/all');
  }
  one_item(id){
    return this._http.get(`/a/one/${id}`);
  }
}

