import { CanDeactivateFn } from '@angular/router';
import { OrderViewComponent } from '../order-view/order-view.component';

export const canLeaveViewGuard: CanDeactivateFn<OrderViewComponent> = (component, currentRoute, currentState, nextState) => {
  return component.canDeactivate ? component.canDeactivate() : true;
};
