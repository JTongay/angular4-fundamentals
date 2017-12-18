/**
 * Created by jtongay on 11/27/17.
 */
import { Injectable } from '@angular/core';
import {ISession} from "../shared/event.model";
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable'

@Injectable()
export class VoterService {

  constructor(
    private http: Http
  ) {}

  deleteVoter(session: ISession, voterName: string) {
    session.voters = session.voters.filter(voter => voter !== voterName);
  }

  addVoter(session: ISession, voterName: string) {
    session.voters.push(voterName);
  }

  addVoterToServer(eventId: number, session: ISession, voterName: string) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({headers: headers});
    let url = `/api/events/${eventId}/sessions/${session.id}/voters/${voterName}`;

    // self subscribing to a post or delete request because it doesn't care about what the api is returning,
    // just want the request to happen, so you don't subscribe to this when you call in your component
    this.http.post(url, JSON.stringify({}), options).map((res: Response) => {
      return res.json();
    }).catch(this.handleError).subscribe();
  }

  userHasVoted(session: ISession, voterName: string) {
    return session.voters.some(voter => voter === voterName)
  }

  private handleError(error: Response) {
    return Observable.throw(error.statusText);
  }

}
