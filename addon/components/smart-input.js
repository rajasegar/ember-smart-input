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
  classNameBindings: ['inputStyle', 'filled:input--filled'],
  inputStyle: computed('style', function() {
    return `input--${this.get('style')}`;
  }),
  inputLabelColor: computed('labelColor', function() {
    return this.get('labelColor') ? `input__label--${this.get('style')}-${this.get('labelColor')}` : null;
  }),
  filled: false
});
