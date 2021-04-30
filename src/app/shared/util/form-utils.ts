import { FormGroup } from '@angular/forms';
import { FormError } from './models/form-error.model';

export const formErrors = (form: FormGroup): FormError[] =>
    Object.keys(form.controls)
        .filter(name => form.get(name).invalid)
        .map(name => ({
            controlName: name,
            errors: form.get(name).errors
        } as FormError));

