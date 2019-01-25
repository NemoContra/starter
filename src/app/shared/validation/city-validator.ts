import { AbstractControl, ValidatorFn } from '@angular/forms';

export function validateCity (validCities: string[]): ValidatorFn {
  return (c: AbstractControl) => {
    if (c.value && !validCities.find(city => city.toLowerCase() === c.value.toLowerCase())) {
      return {
        city: {
          actualValue: c.value,
          validCities: validCities
        }
      };
    }
    return null;
  };
}
