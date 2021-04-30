import { ValidationErrors } from '@angular/forms';

export interface FormError {
    controlName: string;
    errors: ValidationErrors;
}