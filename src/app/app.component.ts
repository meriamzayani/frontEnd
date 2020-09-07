import { Component, OnInit } from '@angular/core';
import { FuckService } from '../app/fuck.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig} from '@angular/material/dialog';
import { TryComponent } from './try/try.component';
import { ToastrService } from 'ngx-toastr';
import { Title } from '@angular/platform-browser';





@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'uplaod';
  hello:any;
  projectPath:string;
  process:Object=new Object();
  originUrl:string;
  UploadStatus:Boolean
  show:boolean=true;
  pullDirectory:string;
  ngOnInit():void{
    
      this.titleService.setTitle( "DEMO" );
  
  }
  
  constructor(private titleService: Title,public fuckService:FuckService,public dialog:MatDialog,private toastr: ToastrService) { }


getProcess()
{
  
  if (this.projectPath==null){console.log("empty");this.emptyToaster()}else
  {
    this.fuckService.getProcess(this.projectPath,this.originUrl).then(data=>{
      this.process=data;
      if(Object.keys(this.process).length==0){this.noToaster();}
     
      })

      
    
  }


  

/*try {
  console.log(typeof this.process);
  console.log(Object.keys(this.process).length);
  if(Object.keys(this.process).length==0){
    this.emptyToaster();}
  
} catch (error) {
  console.log("path empty");
 
}*/


  
  /*if(!this.process){}else{  
    console.log(typeof this.process);
    console.log(Object.keys(this.process).length);
  }
    
  if(Object.keys(this.process).length==0){
    this.showToaster();}*/

   /* const dialogConfig = new MatDialogConfig();
    dialogConfig.width="40%";
    dialogConfig.height="35%";
    this.dialog.open(TryComponent,dialogConfig)*/
}


emptyToaster(){
  this.toastr.error("Error, Path required.")
}
noToaster(){
  this.toastr.error("Error, choose a valid Talend project.")
}

successToaster(){
  this.toastr.success("Success, Job uploaded successfully.")
}















/*sendPath()
{
  this.fuckService.sendPath(this.hello).subscribe(data=>{
    
    this.process=data;
  
  })
}
*/




 /*  filesPicked(files) {

    for (let i = 0; i < files.length; i++) {

        const file = files[i];

        const path = file.webkitRelativePath.split('/');
        console.log(path)

    // upload file using path

      

    }
   // console.log(files[1])
    const path = files[1].webkitRelativePath.split('/');
    console.log(path)
    this.hello=path;
    this.sendPath();

}
*/






OpenDialog(processName:string)
{
  const dialogConfig = new MatDialogConfig();
  dialogConfig.width="40%";
  dialogConfig.height="35%";
  let dialogRef=this.dialog.open(TryComponent,{data:{name:processName}});
  dialogRef.afterClosed().subscribe(message=>{this.show=dialogRef.componentInstance.show;this.successToaster();})


}


//c:/users/meriam/desktop/stage


download()
{
  this.fuckService.download(this.pullDirectory).subscribe(data=>{console.log(data);})
}



}
