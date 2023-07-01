import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{

  businessid:any;
  userdata:any;

  constructor(private route:ActivatedRoute){}

  ngOnInit(): void {
    this.businessid = this.route.snapshot.paramMap.get('businessid');
  }

  load(){
    this.userdata = new FormGroup({
      id: new FormControl(0),
      name: new FormControl(""),
      usertype: new FormControl(""),
      mobileno: new FormControl(""),
      email: new FormControl(""),
      username: new FormControl(""),
      password: new FormControl(""),
      businessid: new FormControl(this.businessid),
    })
  }

  Save(data:any){}

}
