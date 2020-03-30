import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent implements OnInit {

  title : string = '';
  description : string = '';
  videoId : string = '';
    
  selectedHost = 1;
  options = [
    { name : "youtube", value : 1, link : "https://www.youtube.com/watch?v="}
  ]

  constructor(private formBuilder : FormBuilder) {
   
   }

  ngOnInit() {
  }

  videoFormSubmit(){
    if(this.title){
      if(this.description){
        if(this.videoId){
          const host = this.options.find(host => host.value == this.selectedHost);
          
          if(host){
            const videoURL = `${host.link}${this.videoId}`;
            console.log(videoURL);

          }

        }else{
          console.log("videoID is empty")
        }

        }else{
         console.log("description is empty");
        }
      }else{
        console.log("title is empty");
      }
      
  }

}
