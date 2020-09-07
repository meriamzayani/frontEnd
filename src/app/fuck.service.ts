import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FuckService {

  constructor(private httpClient:HttpClient) {}
  getProcess(path:string,originUrl:string)
  {
    return  this.httpClient.get("http://localhost:8080/getProcess?mc="+path+"&oUrl="+originUrl).toPromise();
  }


upload(processName:string,message:string)
{
  return  this.httpClient.get("http://localhost:8080/upload?pn="+processName+"&msg="+message);
  console.log("from service with love"+message)
}

download(pullDirectory:string)
{
  return  this.httpClient.get("http://localhost:8080/download?pd="+pullDirectory);
  
}

}
