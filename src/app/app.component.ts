import { Component, OnInit } from '@angular/core';
import { FreeapiService } from './services/freeapi.service';
import {Comments} from './classes/comments';
import { Posts } from './classes/posts';
import { InputService } from './services/input.service';
import { Albums } from './classes/albums';
import { Photos } from './classes/photos';

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
  lstAlbums : Albums[];
  AlbumSelected : number;
  lstPhotos : Photos[];


  lstStaticData :Photos[] = [
    {albumId: 1,id: 1,title:"Test Data Record1",url:"",thumbnailUrl:"https://via.placeholder.com/150/92c952"},
    {albumId: 1,id: 2,title:"Test Data Record2",url:"",thumbnailUrl:"https://via.placeholder.com/150/92c952"},
    {albumId: 1,id: 3,title:"Test Data Record3",url:"",thumbnailUrl:"https://via.placeholder.com/150/92c952"},
    {albumId: 1,id: 4,title:"Test Data Record4",url:"",thumbnailUrl:"https://via.placeholder.com/150/92c952"},


    {albumId: 2,id: 1,title:"Test Album Record1",url:"",thumbnailUrl:"https://via.placeholder.com/150/92c952"},
    {albumId: 2,id: 2,title:"Test Album Record2",url:"",thumbnailUrl:"https://via.placeholder.com/150/92c952"},
    {albumId: 2,id: 3,title:"Test Album Record3",url:"",thumbnailUrl:"https://via.placeholder.com/150/92c952"},
    {albumId: 2,id: 4,title:"Test Album Record4",url:"",thumbnailUrl:"https://via.placeholder.com/150/92c952"},

    {albumId: 3,id: 1,title:"Test New Album Record1",url:"",thumbnailUrl:"https://via.placeholder.com/150/92c952"},


  ];


  constructor(private freeapiservice:FreeapiService,private inputService : InputService){

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

    this.inputService.getAlbums().
    subscribe(
      data =>
      {
          this.lstAlbums = data;
      }
    
    )
}

OnAlbumSelected(selectedAlbumId:any):void{
  /*this.inputService.getPhotosByAlbumId(selectedAlbumId).
  subscribe(
    data =>
    {
        
      this.lstPhotos = data;
    }
  
  )*/

  this.lstPhotos = this.lstStaticData.filter(m=>m.albumId == selectedAlbumId);
}

}
