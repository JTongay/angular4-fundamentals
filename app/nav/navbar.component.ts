/**
 * Created by jtongay on 6/13/17.
 */
import { Component } from '@angular/core'
import { AuthService } from '../user/auth.service'
import {ISession} from "../events/shared/event.model";
import { EventService } from '../events/index';

@Component({
    selector: 'nav-bar',
    templateUrl: 'app/nav/navbar.component.html',
    styles: [`
        .nav.navbar-nav {
            font-size: 15px;
        }
        #searchForm {
            margin-right: 100px;
        }
        li > a.active {
            color: #F97924;
        }
        @media (max-width: 1200px) {
            #searchForm {
                display: none;
            }
        }
    `]
})
export class NavbarComponent {

    searchTerm: string = '';
    foundSessions: ISession[];

    constructor(
      private auth:AuthService,
      private eventService:EventService
    ){}

    searchSessions(searchTerm) {
      console.log(searchTerm)
      this.eventService.searchSessions(searchTerm).subscribe(sessions => {
        this.foundSessions = sessions;
        console.log(this.foundSessions);
      })
    }

}