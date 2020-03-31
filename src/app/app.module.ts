import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AuthGuardService } from './services/authGuard.service'

//import { GraphQLModule } from './apollo.module';

import { onError, ErrorHandler } from 'apollo-link-error';
import { ApolloBoostModule, ApolloBoost, APOLLO_OPTIONS, InMemoryCache} from 'apollo-angular-boost';
import { AuthService } from './services/auth.service';
import { HttpLink } from 'apollo-angular-link-http';
import ApolloClient from 'apollo-boost';
import { ArraySortPipe } from './app.pipes';

const API_URL = 'https://cnom3x70jk.execute-api.eu-central-1.amazonaws.com/dev/graphql';

/* export function providerApollo(httpLink : HttpLink){
    const token = localStorage.getItem('token');
    let auth, apolloInstance;
  
    if(token){
         auth = setContext((request, PreviousContext) => ({
            headers : {
                Authorization : `Bearer ${token}`
            }
        }))
      }
        if(auth){
          apolloInstance = ApolloLink.from([auth, httpLink.create({uri : API_URL})]);
        }else{
          apolloInstance = ApolloLink.from([httpLink.create({uri : API_URL})]);
        }
     
        const cache = new InMemoryCache();
        console.log(apolloInstance);
  
        return {
            apolloInstance,
            cache
        }
  } */




@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,

    //
    ApolloBoostModule

  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    //ArraySortPipe
  ],
  exports : [
    //ArraySortPipe
  ],

  providers: [
    //ArraySortPipe,
    AuthGuardService,
    AuthService,
    {
      provide : APOLLO_OPTIONS,
      useFactory(httpLink : HttpLink){
        const token = localStorage.getItem('token');
        return {
         /*  fetchOptions: {
            mode: 'no-cors',
          }, */
          cache: new InMemoryCache({
            addTypename: false
          }),
          link : httpLink.create({
            uri: API_URL
          }),
          headers : new HttpHeaders({
            Authorization : `Bearer ${token}`,
            /* "Access-Control-Allow-Origin" : "*",
            "Access-COntrol-Allow-Methods" : "GET,POST,OPTIONS,DELETE,PUT" */
          })
        }
      },
      deps : [HttpLink]
    }
   /*  {
      provide : providerApollo,
      useFactory : httpLink => {
        return {
          link : httpLink.create({
            uri : API_URL
          }),
          cache : new InMemoryCache()
        }
      },
      deps : [HttpLink],
      multi : true
    } */
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
   /*  const token = localStorage.getItem('token');

    const client = new ApolloClient({
      
      uri : API_URL,
      onError : ({graphQLErrors, networkError,operation}) =>{
        console.log(networkError);
  
      },
      headers : new HttpHeaders({
        Authorization : `Bearer ${token}`
      })
    }) */
    
    

    /* boost.create({
      uri : API_URL,
      onError : ({graphQLErrors, networkError}) => {
      },
    
      httpOptions : {
      headers : new HttpHeaders({
        Authorization : `Bearer ${token}`
      })
     }
    }) */
 }
