michalvalasek:autoform-bootstrap-colorpicker
=========================

An add-on Meteor package for [aldeed:autoform](https://github.com/aldeed/meteor-autoform). Provides a single custom input type, "bootstrap-colorpicker", which renders an input using the [bootstrap-colorpicker](http://mjolnic.com/bootstrap-colorpicker/) plugin.

Heavily inspired by the [aldeed:autoform-bs-datepicker](https://github.com/aldeed/meteor-autoform-bs-datepicker) package.

## Prerequisites

Bootstrap and Autoform must be installed separately.

In a Meteor app directory, enter:

```
$ meteor add twbs:bootstrap
$ meteor add aldeed:autoform
```

## Installation

In a Meteor app directory, enter:

```
$ meteor add michalvalasek:autoform-bootstrap-colorpicker
```

## Usage

Specify "bootstrap-colorpicker" for the `type` attribute of any input. This can be done in a number of ways:

In the schema, which will then work with a `quickForm` or `afQuickFields`:

```js
{
  color: {
    type: String,
    autoform: {
      type: "bootstrap-colorpicker"
    }
  }
}
```

Or on the `afFieldInput` component or any component that passes along attributes to `afFieldInput`:

```js
{{> afQuickField name="typeTest" type="bootstrap-colorpicker"}}

{{> afFormGroup name="typeTest" type="bootstrap-colorpicker"}}

{{> afFieldInput name="typeTest" type="bootstrap-colorpicker"}}
```

## Contributing

Anyone is welcome to contribute. Fork, make your changes, and then submit a pull request.

[![Support via Gittip](https://rawgithub.com/twolfson/gittip-badge/0.2.0/dist/gittip.png)](https://www.gittip.com/michalvalasek/)
