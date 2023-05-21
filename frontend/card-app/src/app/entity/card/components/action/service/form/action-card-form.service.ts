import { Injectable } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ICard } from '../../../../interface/card.interface';

type NewCard = Omit<ICard, 'id'>

type TypeCardForm = {
  id: FormControl<number | null>;
  ru: FormControl<string | null>;
  en: FormControl<string | null>;
}

// type TypeCardFormContent = {
//   id: FormControl<number | null>;
//   ru: FormControl<string | null>;
//   en: FormControl<string | null>;
// }

@Injectable()
export class ActionCardFormService {
  cardForm?: FormGroup<TypeCardForm>;

  constructor(
    protected fb: FormBuilder
  ) { }

  createCradForm(): FormGroup<TypeCardForm> {
    return this.fb.group({
      id: new FormControl<number | null>(null),
      ru: new FormControl<string | null>(null),
      en: new FormControl<string | null>(null),
    })
  }

  udateCardForm(data: ICard, form: FormGroup): void {
    form.setValue(
      { ...data }
    )
  }

  resetCardForm(form: FormGroup): void {
    form.reset()
  }

}
