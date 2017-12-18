import './rxjs-extensions'
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule } from '@angular/router'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http';

import { appRoutes } from './routes'

import {
    EventsListComponent,
    EventThumbnailComponent,
    EventService,
    EventDetailsComponent,
    CreateEventComponent,
    // EventRouteActivator,
    EventsListResolver,
    EventResolver,
    CreateSessionComponent,
    SessionListComponent,
    UpvoteComponent,
    VoterService,
    DurationPipe,
    LocationValidator
} from './events/index'

import {
    CollapsibleWellComponent,
    SimpleModalComponent,
    ModalTriggerDirective,
    JQ_TOKEN,
    TOASTR_TOKEN,
    Toastr
} from './common/index'

import { EventsAppComponent } from './events-app.component'
import { NavbarComponent } from './nav/navbar.component'
import { Error404Component } from './error/404.component'
import { AuthService } from './user/auth.service'

declare let toastr: Toastr;
declare let $: Object;


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        RouterModule.forRoot(appRoutes)
    ],
    declarations: [
        EventsAppComponent,
        EventsListComponent,
        EventThumbnailComponent,
        NavbarComponent,
        EventDetailsComponent,
        CreateEventComponent,
        CreateSessionComponent,
        SessionListComponent,
        CollapsibleWellComponent,
        SimpleModalComponent,
        Error404Component,
        DurationPipe,
        UpvoteComponent,
        ModalTriggerDirective,
        LocationValidator
    ],
    providers: [
        EventService,
        AuthService,
        { provide: TOASTR_TOKEN, useValue: toastr },
        { provide: JQ_TOKEN, useValue: $},
        {
            provide: 'canDeactivateCreateEvent',
            useValue: checkDirtyState
        },
        VoterService,
        EventsListResolver,
        EventResolver
    ],
    bootstrap: [EventsAppComponent]
})
export class AppModule { }

function checkDirtyState(component:CreateEventComponent) {
    if(component.isDirty)
        return window.confirm('You have not saved this event, do you really want to cancel?')
    return true
}