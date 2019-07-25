import { HttpService } from './../http.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router, Route } from '@angular/router';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  constructor(private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router,
    ) { }
  this_id: any;
  item_data: any;
  ngOnInit() {
    this._route.params.subscribe((params: Params)=>{
      this.this_id = params['id'];
      console.log(this.this_id);
      this._httpService.one_item(params['id']).subscribe( data =>{
        this.item_data = data;
        // this._router.navigate(['']);
        // console.log(this.item_data, "this is the data we got back")
      })
  })

  }}
