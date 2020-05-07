import {animate, state, style, transition, trigger} from '@angular/animations';

export const EditRecipeTrigger = trigger('editRecipeTrigger', [
  state('0', style({opacity: 1, transform: 'translateX(0px)'})),
  transition('void => *', [
    style({opacity: 0, transform: 'translateX(-100px)'}),
    animate(500)
  ]),
  transition('* => void', [
    animate(500, style({opacity: 0, transform: 'translateX(200px)'}))
  ])
]);
