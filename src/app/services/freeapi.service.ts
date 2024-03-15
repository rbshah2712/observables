import { HttpClient,HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Posts } from '../classes/posts';

@Injectable({
  providedIn: 'root'
})
export class FreeapiService {


  constructor(private httpclient:HttpClient){

  }
  getComments():Observable<any>{
    return this.httpclient.get("https://jsonplaceholder.typicode.com/posts/1/comments");
    
  }

  getCommentById():Observable<any>{
    let Param1 = new HttpParams().set('userId',"1")
    return this.httpclient.get("https://jsonplaceholder.typicode.com/posts",{params:Param1});
  }

  post(opost:Posts):Observable<any>{
    return this.httpclient.post("https://jsonplaceholder.typicode.com/posts",opost);
  }

  put(opost:Posts):Observable<any>{
    return this.httpclient.put("https://jsonplaceholder.typicode.com/posts/1",opost);
  }

  patch(opost:Posts):Observable<any>{
    return this.httpclient.patch("https://jsonplaceholder.typicode.com/posts/1",opost);
  }

  delete():Observable<any>{
    return this.httpclient.delete("https://jsonplaceholder.typicode.com/posts/1");
  }
}
