import { storiesOf } from '@storybook/html';

const stories = storiesOf('Alerts', module);

stories.add('info', () => ('<div class="sprk-c-Alert sprk-c-Alert--info" role="alert" data-sprk-alert="container" data-id="alert-info-1" data-analytics="object.action.event" ><div class="sprk-c-Alert__content"> <svg class="sprk-c-Alert__icon sprk-c-Icon sprk-c-Icon--l sprk-c-Icon--stroke-current-color" viewBox="0 0 64 64" aria-hidden="true" > <use xlink:href="#bell"></use> </svg><p class="sprk-c-Alert__text"> This is important information.</p></div><button class="sprk-c-Alert__icon sprk-c-Alert__icon--dismiss" type="button" title="Dismiss" data-sprk-alert="dismiss" > <svg class="sprk-c-Icon sprk-c-Icon--stroke-current-color" viewBox="0 0 64 64" aria-hidden="true" > <use xlink:href="#close"></use> </svg> </button></div>'));

stories.add('success', () => ('<div class="sprk-c-Alert sprk-c-Alert--success" role="alert" data-sprk-alert="container" data-id="alert-success-1" data-analytics="object.action.event" ><div class="sprk-c-Alert__content"> <svg class="sprk-c-Alert__icon sprk-c-Icon sprk-c-Icon--l sprk-c-Icon--stroke-current-color" viewBox="0 0 512 512" aria-hidden="true" > <use xlink:href="#check-mark"></use> </svg><p class="sprk-c-Alert__text"> This is a success message.</p></div><button class="sprk-c-Alert__icon sprk-c-Alert__icon--dismiss" type="button" title="Dismiss" data-sprk-alert="dismiss" > <svg class="sprk-c-Icon sprk-c-Icon--stroke-current-color" viewBox="0 0 64 64" aria-hidden="true" > <use xlink:href="#close"></use> </svg> </button></div>'));

stories.add('fail', () => ('<div class="sprk-c-Alert sprk-c-Alert--fail" role="alert" data-sprk-alert="container" data-id="alert-fail-1" data-analytics="object.action.event" ><div class="sprk-c-Alert__content"> <svg class="sprk-c-Alert__icon sprk-c-Icon sprk-c-Icon--l sprk-c-Icon--stroke-current-color" viewBox="0 0 576 512" aria-hidden="true" > <use xlink:href="#exclamation"></use> </svg><p class="sprk-c-Alert__text"> This is a failure message to alert that something was not successful.</p></div><button class="sprk-c-Alert__icon sprk-c-Alert__icon--dismiss" type="button" title="Dismiss" data-sprk-alert="dismiss" > <svg class="sprk-c-Icon sprk-c-Icon--stroke-current-color" viewBox="0 0 64 64" aria-hidden="true" > <use xlink:href="#close"></use> </svg> </button></div>'));
