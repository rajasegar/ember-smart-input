import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('smart-input', 'Integration | Component | smart input', {
  integration: true
});

test('it should have a label', function(assert) {
  this.render(hbs`{{smart-input label="First Name" style="haruki"}}`);

  assert.equal(this.$('.input__label-content').text().trim(), 'First Name');
});

test('it should have a style', function(assert) {

  this.render(hbs`{{smart-input label="First Name" style="haruki"}}`);
  assert.equal(this.$('.input--haruki').length, 1);
});

test('it should have a span wrapper with classes', function(assert) {
  this.render(hbs`{{smart-input label="First Name" style="haruki"}}`);

  assert.equal(this.$('span.input').length, 1);
});

test('it should have a focus class', function(assert) {

  this.render(hbs`{{smart-input label="First Name" style="haruki"}}`);
  assert.equal(this.$('span.input--filled').length, 0);
  this.$('input').focus();
  assert.equal(this.$('span.input--filled').length, 1);
  this.$('input').blur();
  assert.equal(this.$('span.input--filled').length, 0);
});

test('it should have an input element', function(assert) {
  this.render(hbs`{{smart-input label="First Name" style="haruki"}}`);
  assert.equal(this.$('input.input__field').length, 1);
});

test('it should have a label element', function(assert) {
  this.render(hbs`{{smart-input label="First Name" style="haruki"}}`);
  assert.equal(this.$('label.input__label').length, 1);
});

test('it should only have a label color if it is specified', function(assert) {
  this.render(hbs`{{smart-input label="First Name" style="haruki"}}`);
  assert.equal(this.$('label.input__label--haruki-green').length, 0);
});

test('it should  have a label color', function(assert) {
  this.render(hbs`{{smart-input label="Name" style="hoshi" labelColor="color-1"}}`);
  assert.equal(this.$('label.input__label--hoshi-color-1').length, 1);
});
