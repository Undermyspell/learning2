import { FormGroup } from '@angular/forms';
export function FormValid(formName: string) {
  return function (target: Object, key: string | symbol, descriptor: PropertyDescriptor) {
    const original = descriptor.value;

      descriptor.value = function( ... args: any[]) {
          const formValid = this[formName].valid;
          if (formValid) {
            const result = original.apply(this, args);
            return result;
          } else {
            return null;
          }
    };

    return descriptor;
  };
}
