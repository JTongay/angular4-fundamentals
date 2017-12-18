/**
 * Created by jtongay on 6/27/17.
 */
import { Injectable } from '@angular/core'
import { Resolve } from '@angular/router'
import { EventService } from './shared/event.service'

@Injectable()
export class EventsListResolver implements Resolve<any>{

    constructor(private eventService:EventService){

    }

    resolve(){
        return this.eventService.getEvents().map(events => events);
        // This is for when you hook up http. getEvents() returns an observable, which we would normally want to subscribe() to it, but in a
        // resolver, it subscribes already for us. NO NEED TO SUBSCRIBE IN A RESOLVER
        // return this.eventService.getEvents()
    }

}