import { find, findAll, focus, render } from '@ember/test-helpers';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | smart input', function(hooks) {
  setupRenderingTest(hooks);

  test('it should have a label', async function(assert) {
    await render(hbs`{{smart-input label="First Name" style="haruki"}}`);

    assert.equal(find('.input__label-content').textContent.trim(), 'First Name');
  });

  test('it should have a style', async function(assert) {

    await render(hbs`{{smart-input label="First Name" style="haruki"}}`);
    assert.equal(findAll('.input--haruki').length, 1);
  });

  test('it should have a span wrapper with classes', async function(assert) {
    await render(hbs`{{smart-input label="First Name" style="haruki"}}`);

    assert.equal(findAll('span.input').length, 1);
  });

  test('it should have a focus class', async function(assert) {

    await render(hbs`{{smart-input label="First Name" style="haruki"}}`);
    assert.equal(findAll('span.input--filled').length, 0);
    await focus('input');
    assert.equal(findAll('span.input--filled').length, 1);
    //await findAll('input').blur();
    //assert.equal(findAll('span.input--filled').length, 0);
  });

  test('it should have an input element', async function(assert) {
    await render(hbs`{{smart-input label="First Name" style="haruki"}}`);
    assert.equal(findAll('input.input__field').length, 1);
  });

  test('it should have a label element', async function(assert) {
    await render(hbs`{{smart-input label="First Name" style="haruki"}}`);
    assert.equal(findAll('label.input__label').length, 1);
  });

  test('it should only have a label color if it is specified', async function(assert) {
    await render(hbs`{{smart-input label="First Name" style="haruki"}}`);
    assert.equal(findAll('label.input__label--haruki-green').length, 0);
  });

  test('it should  have a label color', async function(assert) {
    await render(hbs`{{smart-input label="Name" style="hoshi" labelColor="color-1"}}`);
    assert.equal(findAll('label.input__label--hoshi-color-1').length, 1);
  });
});
