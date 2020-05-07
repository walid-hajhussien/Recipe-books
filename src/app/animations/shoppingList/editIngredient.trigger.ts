import {animate, group, state, style, transition, trigger} from '@angular/animations';

export const EditIngredientTrigger = trigger('editIngredientTrigger', [
  state('0', style({opacity: 1, transform: 'translateX(0px)'})),
  transition('void => *', [
    style({opacity: 0, transform: 'translateX(-100px)'}),
    animate(500)
  ]),
  transition('* => void', [
    group([
      animate(200, style({color: 'red'})),
      animate(500, style({opacity: 0, transform: 'translateX(300px)'}))
    ])
  ])
]);
