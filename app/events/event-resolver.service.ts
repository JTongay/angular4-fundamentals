/**
 * Created by jtongay on 11/27/17.
 */
import { Injectable } from '@angular/core'
import {Resolve, ActivatedRouteSnapshot} from '@angular/router'
import { EventService } from './shared/event.service'

@Injectable()
export class EventResolver implements Resolve<any>{

  constructor(private eventService:EventService){

  }

  resolve(route: ActivatedRouteSnapshot){
    return this.eventService.getEvent(route.params['id']);
    // This is for when you hook up http. getEvents() returns an observable, which we would normally want to subscribe() to it, but in a
    // resolver, it subscribes already for us. NO NEED TO SUBSCRIBE IN A RESOLVER
    // return this.eventService.getEvents()
  }

}