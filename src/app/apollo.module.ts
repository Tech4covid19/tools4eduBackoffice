/* import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { setContext } from 'apollo-link-context';
import { ApolloLink } from 'apollo-link';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { NgModule, ModuleWithProviders, APP_INITIALIZER } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

const API_URL = 'https://cnom3x70jk.execute-api.eu-central-1.amazonaws.com/dev/graphql';

export function providerApollo(httpLink : HttpLink){
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
  
        return {
            apolloInstance,
            cache
        }
  }

  @NgModule({
      imports : [
          HttpClientModule,
          ApolloModule,
          HttpLinkModule
      ],
      providers : [{
          provide : providerApollo,
          useFactory : providerApollo,
          deps : [HttpLink],
          multi : true
      }]
  })

  export class GraphQLModule {

  }


 */