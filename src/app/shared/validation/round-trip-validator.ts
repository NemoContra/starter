import { FormGroup } from '@angular/forms';

export function validateRoundTrip(g: FormGroup): object {
  let from = g.controls['from'];
  let to = g.controls['to'];

  if (!from || !to) return null;

  if (from.value === to.value) {
    return { roundTrip: true };
  }

  return null;
}
