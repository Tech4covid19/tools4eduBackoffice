import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-blogForm',
  templateUrl: './blogForm.component.html',
  styleUrls: ['./blogForm.component.scss']
})
export class BlogFormComponent implements OnInit {

   private blogForm : FormGroup;

  constructor(private formBuilder : FormBuilder) {
    this.blogForm = this.formBuilder.group({
      title    : ['', Validators.required],
      content : ['', Validators.required],
      videoId      : ['', Validators.required]
    })
   }

 
  blogFormSubmit(form){
    if(form && form.valid){
      //SERVICO PARA CRIAR TESTEMUNHO
    }
  } 
  ngOnInit() {
  }


}
