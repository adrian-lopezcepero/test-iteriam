// https://github.com/NetanelBasal/ngx-take-until-destroy
/* tslint:disable */

import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

const isFunction = (value: unknown) => (typeof value === 'function');

export const untilDestroyed = (componentInstance, destroyMethodName = 'ngOnDestroy') => <T>(source: Observable<T>) => {

  const originalDestroy = componentInstance[destroyMethodName];
  if (isFunction(originalDestroy) === false) {
    throw new Error(
      `${componentInstance.constructor.name} is using untilDestroyed but doesn't implement ${destroyMethodName}`
    );
  }
  if (!componentInstance.takeUntilDestroy) {
    componentInstance.takeUntilDestroy = new Subject();

    componentInstance[destroyMethodName] = function() {
      if (isFunction(originalDestroy) ) {
        originalDestroy.apply(this, arguments);
      }
      componentInstance.takeUntilDestroy.next(true);
      componentInstance.takeUntilDestroy.complete();
    };
  }
  return source.pipe(takeUntil<T>(componentInstance.takeUntilDestroy));
};
