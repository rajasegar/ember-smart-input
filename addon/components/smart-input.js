import { computed } from '@ember/object';
import Component from '@ember/component';
import layout from '../templates/components/smart-input';

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
  inputId: computed('elementId', function() {
    return `input-${this.get('elementId')}`;
  }),
  inputClass: computed('style', function() {
    return `input__field input__field--${this.get('style')}`;
  }),
  filled: false,
  inputVal: '',
  actions: {
    fill() {
      this.set('filled', true);
    },
    unfill() {
      let _inputVal = this.get('inputVal').trim();
      if(_inputVal === "") {
        this.set('filled', false);
      }
    }
  }
});
