import { InjectionToken } from "@angular/core";
// OpaqueToken is depracated as of Angular 4
/**
 * Created by jtongay on 6/14/17.
 */

export let TOASTR_TOKEN = new InjectionToken('toastr');

export interface Toastr {
  success (msg: string, title?: string): void;
  info (msg: string, title?:string): void;
  warning (msg: string, title?:string): void;
  error (msg: string, title?:string): void;
}