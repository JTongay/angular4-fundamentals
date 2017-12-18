/**
 * Created by jtongay on 6/12/17.
 */
import { Component, OnInit } from '@angular/core'
import { EventService } from './shared/event.service'
import { ActivatedRoute } from '@angular/router'
import { IEvent } from './shared/index'

@Component({
    selector: 'events-list',
    template: `
<div>
    <h1>Upcoming Angular Events</h1>
    <hr>
    <div class="row">
        <div class="col-md-6" *ngFor="let event of events">
            <event-thumbnail [event]="event"></event-thumbnail>
        </div>
    </div>
</div>`,
    styles: [`
    
    `]
})
export class EventsListComponent implements OnInit {

    events:IEvent[]

    constructor(
        private eventService:EventService,
        private route:ActivatedRoute
    ) {

    }

    ngOnInit(){
        this.events = this.route.snapshot.data['events']
    }

}
