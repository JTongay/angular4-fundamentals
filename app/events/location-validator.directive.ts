/**
 * Created by jtongay on 11/27/17.
 */
import { Directive } from '@angular/core';
import { Validator, FormGroup, NG_VALIDATORS } from '@angular/forms';

// wtf
@Directive({
  selector: '[validateLocation]',
  providers: [{ provide: NG_VALIDATORS, useExisting: LocationValidator, multi: true }]
})

// NG_VALIDATORS -> list of validators built into angular
// useExisting -> overrides whatever is provided, so in this case, the LocationValidator is overriding all of the NG_VALIDATORS
// multi: true -> so the LocationValidator doesn't completely override the NG_VALIDATORS, add this line to just add this validator to the list of validators built into angular

export class LocationValidator implements Validator {

  validate(formGroup: FormGroup): { [key: string]: any } {
    let addressControl = formGroup.controls['address'];
    let cityControl = formGroup.controls['city'];
    let countryControl = formGroup.controls['country'];
    // wtf
    let onlineUrlControl = (<FormGroup>formGroup.root).controls['onlineUrl'];

    if((addressControl && addressControl.value && cityControl && cityControl.value && countryControl && countryControl.value) || (onlineUrlControl && onlineUrlControl.value)) {
      return null
    } else {
      return {
        validateLocation: false
      }
    }

  }

}