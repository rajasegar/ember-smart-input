import Ember from 'ember';
import layout from '../templates/components/smart-input';

const {
  computed,
  Component
} = Ember;

export default Component.extend({
  layout,
  tagName: 'span',
  classNames: ['input'],
  classNameBindings: ['inputStyle'],
  inputStyle: computed('style', function() {
    return `input--${this.get('style')}`;
  })
});
