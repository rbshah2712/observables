import { Component, OnInit } from '@angular/core';
import { FreeapiService } from './services/freeapi.service';
import {Comments} from './classes/comments';
import { Posts } from './classes/posts';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'observables';
  lstcomments : Comments[];
  lstposts : Posts[];
  objPosts :Posts;
  objPuts :Posts;
  objPatchs :Posts;
  message: String;


  constructor(private freeapiservice:FreeapiService){

  }

  ngOnInit(){
    this.freeapiservice.getComments().
    subscribe(
      data => 
      {
        this.lstcomments = data;
      }
    );
  


  this.freeapiservice.getCommentById().
  subscribe(
    data => 
    {
      this.lstposts = data;
    }
  );

    var opost = new Posts();
    opost.body = 'testbody';
    opost.title = 'testtitle';
    opost.userId = 20;

    this.freeapiservice.post(opost).subscribe(
      data => 
    {
      this.objPosts = data;
    }
    )

    var opost = new Posts();
    opost.body = 'update testbody';
    opost.title = 'update testtitle';
    opost.userId = 20;

    this.freeapiservice.put(opost).subscribe(
      data => 
    {
      this.objPuts = data;
    }
    )

    
    var opost = new Posts();
   
    opost.title = 'patched testtitle';

    this.freeapiservice.patch(opost).subscribe(
      data => 
    {
      this.objPatchs = data;
    }
    )

    this.freeapiservice.delete().subscribe(
      data => 
    {
      this.message = "Resource Delete Successfully";
    }
    )
}

}
