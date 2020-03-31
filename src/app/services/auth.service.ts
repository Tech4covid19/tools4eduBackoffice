import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Apollo } from 'apollo-angular';
import { map } from 'rxjs/operators';
import gql from 'graphql-tag';





@Injectable()
export class AuthService{
    private isAuthenticated    = new BehaviorSubject<boolean>(false);
    private isAuthenticated$   = this.isAuthenticated.asObservable(); 

    constructor(private apollo : Apollo){
        
    }

    private updateLogIn(isAuthenticatedUpdate : boolean){
        this.isAuthenticated.next(isAuthenticatedUpdate);
    }

    public isLoggedIn(){
        return this.isAuthenticated.value;
    }

    public getToken(){
        return !!localStorage.getItem("token");
    }

    public setToken(token : string){
        localStorage.setItem('token', token);
    }

    public logout(){
        this.updateLogIn(false);
        this.setToken(undefined);
    }

    public login(/* email : string, password : string */ provider : string){
     /*    const loginQuery = gql `query XXXXXXXX($email : String!, $password : String!){
            user {
                name
                image
            }
        }`
 */
const loginQuery = gql `query ($provider : String!){
    provider(code : $provider) {
        title
    }
}`
        return this.apollo.query<any>({
                query : loginQuery,
                variables : {
                    provider
                  /*   email,
                    password */
                }
            }).pipe(
                map( response => {
                    if(response){
                        //check if login is OK
                        localStorage.setItem('token', response.data.token);
                        this.updateLogIn(true);
                        return response;
                    }
                })
            )
            



        
     /*    return this.apollo.query<any>({
                query : loginQuery,
                variables : {
                    provider
                    //email,
                   // password
                }
            }).pipe(
                map( response => {
                    if(response){
                        //check if login is OK
                        localStorage.setItem('token', response.data.token);
                        this.updateLogIn(true);
                        return {response}
                    }
                })
            ) */

    }

}