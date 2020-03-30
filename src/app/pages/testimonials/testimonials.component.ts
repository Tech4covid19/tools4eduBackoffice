import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent implements OnInit {

  testimonialForm : FormGroup;

  constructor(private formBuilder : FormBuilder) {
    this.testimonialForm = this.formBuilder.group({
      author    : [{value : "", disabled : true}, Validators.required],
      ocupation : ['', Validators.required],
      text      : ['', Validators.required]
    })
   }

  ngOnInit() {
  }

  testimonialSubmit(form){
    if(form && form.valid){
      //SERVICO PARA CRIAR TESTEMUNHO
    }
  }

}
