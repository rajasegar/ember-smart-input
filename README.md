# ember-smart-input

[![Build Status](https://travis-ci.org/rajasegar/ember-smart-input.svg?branch=master)](https://travis-ci.org/rajasegar/ember-smart-input) 
[![npm](https://img.shields.io/npm/dm/ember-smart-input.svg)](https://www.npmjs.com/package/ember-smart-input)
[![npm version](http://img.shields.io/npm/v/ember-smart-input.svg?style=flat)](https://npmjs.org/package/ember-smart-input "View this project on npm")
[![dependencies Status](https://david-dm.org/rajasegar/ember-smart-input/status.svg)](https://david-dm.org/rajasegar/ember-smart-input)
[![devDependencies Status](https://david-dm.org/rajasegar/ember-smart-input/dev-status.svg)](https://david-dm.org/rajasegar/ember-smart-input?type=dev)
[![EmberObserver](http://emberobserver.com/badges/ember-smart-input.svg?branch=master)](http://emberobserver.com/addons/ember-smart-input)

Simple ideas for enhancing text input interactions 

## Demo
[Demo](http://rajasegar.github.io/ember-smart-input)

## Installation

* `ember install ember-smart-input`

## Usage

In your template:
```hbs
{{smart-input label="First Name" style="haruki"}}
```

which will get rendered as:
```html
<span class="input input--haruki">
    <input class="input__field input__field--haruki" type="text" id="input-1" />
    <label class="input__label input__label--haruki" for="input-1">
        <span class="input__label-content input__label-content--haruki">First Name</span>
    </label>
</span>
```
For validation indicators with label color changes:
```hbs
  {{smart-input label="Name" style="hoshi" labelColor="color-1"}}
  {{smart-input label="Name" style="hoshi" labelColor="color-2"}}
  {{smart-input label="Name" style="hoshi" labelColor="color-3"}}
```


## Running Tests

* `npm test` (Runs `ember try:each` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

See the [Contributing](CONTRIBUTING.md) guide for details.


## Credits
* [Mary Lou](https://github.com/crnacura)
