import { Component, OnInit, SimpleChanges } from '@angular/core';

import { Testimonials } from './testimonialsList';
import { TestimonialsListService } from './testimonialsList.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-testimonialsList',
  templateUrl: './testimonialsList.component.html',
  styleUrls: ['./testimonialsList.component.scss']
})
export class TestimonialsListComponent implements OnInit {



  testimonialsList : Array<Testimonials>;


  constructor(private service : TestimonialsListService, private router : Router, private activatedRoute : ActivatedRoute) {

    this.testimonialsList = new Array<Testimonials>();

   }


  ngOnInit() {
    this.service.getAllTestimonials().subscribe( response => {
      if(response){
 
        this.testimonialsList.push(...response.data.testimonies);
        console.log(this.testimonialsList);

        //this.testimonialsList = response
      }
     /*  if(response){
        this.testimonailsList;
      } */

    })
  }


  redirect($event){
    if($event){
      this.router.navigate(['criarEditar'], {queryParams : {id : $event.id}, relativeTo : this.activatedRoute});
    }
  }
  

  testimonialSubmit(form){
    if(form && form.valid){
      //SERVICO PARA CRIAR TESTEMUNHO
    }
  }

}
