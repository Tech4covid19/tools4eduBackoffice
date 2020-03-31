import { Injectable } from "@angular/core";
import { Apollo } from 'apollo-angular';
import { Testimonials } from './testimonialsList';
import { map } from 'rxjs/operators';
import gql from 'graphql-tag';
import { throwError } from "rxjs";


@Injectable()
export class TestimonialsListService{

   

    constructor(private apollo : Apollo){
       
    }

    getAllTestimonials(){
        const testimonialsQuery = gql`
            query {
                testimonies {
                    id,
                    text,
                    author,
                    occupation,
                    published
                }
            }
        `;

        return this.apollo.query<any>({
            query : testimonialsQuery,
            variables : {}
        }).pipe(
            map(response =>{
                
               return response;
            })
        )
    }
}