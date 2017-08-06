# ember-smart-input

[![Build Status](https://travis-ci.org/rajasegar/ember-smart-input.svg?branch=master)](https://travis-ci.org/rajasegar/ember-smart-input) 
[![npm](https://img.shields.io/npm/dm/ember-smart-input.svg)](https://www.npmjs.com/package/ember-smart-input)
[![npm version](http://img.shields.io/npm/v/ember-smart-input.svg?style=flat)](https://npmjs.org/package/ember-smart-input "View this project on npm")
[![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)
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


## Running Tests

* `npm test` (Runs `ember try:each` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).

## Credits
* [Mary Lou](https://github.com/crnacura)
