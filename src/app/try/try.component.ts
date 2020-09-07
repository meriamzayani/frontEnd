import { Component, OnInit , Inject } from '@angular/core';
import { FuckService } from '../fuck.service';
import {MatDialogRef, MAT_DIALOG_DATA, } from '@angular/material/dialog';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-try',
  templateUrl: './try.component.html',
  styleUrls: ['./try.component.css']
})
export class TryComponent implements OnInit {
message:string

show:boolean = true;

  constructor(public fuckService:FuckService,public dialogRef:MatDialogRef<AppComponent>,@Inject(MAT_DIALOG_DATA) public processName:any) { }

  ngOnInit(): void {
  
  }

  upload()
  {
   this.fuckService.upload(this.processName.name,this.message).subscribe()

    console.log("the message is :"+this.message)
    this.show=false;
  }

}
