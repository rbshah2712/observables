import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InputService {

  constructor(private httpclient:HttpClient) { }

  getAlbums() : Observable<any> {
    return this.httpclient.get("https://jsonplaceholder.typicode.com/albums");
  }

  getPhotosByAlbumId(selectedAlbumId : string):Observable<any>{
    let Param1 = new HttpParams().set('albumId',selectedAlbumId);
    return this.httpclient.get("https://jsonplaceholder.typicode.com/photos",{params:Param1});
  }
}
