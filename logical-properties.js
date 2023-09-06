(function () {
  const map = {
    'top': {
      type: 'replaceProp',
      value: 'inset-block-start',
    },
    'bottom': {
      type: 'replaceProp',
      value: 'inset-block-end',
    },
    'left': {
      type: 'replaceProp',
      value: 'inset-inline-start',
    },
    'right': {
      type: 'replaceProp',
      value: 'inset-inline-end',
    },
    'margin-top': {
      type: 'replaceProp',
      value: 'margin-block-start',
    },
    'margin-bottom': {
      type: 'replaceProp',
      value: 'margin-block-end',
    },
    'margin-left': {
      type: 'replaceProp',
      value: 'margin-inline-start',
    },
    'margin-right': {
      type: 'replaceProp',
      value: 'margin-inline-end',
    },
    'padding-top': {
      type: 'replaceProp',
      value: 'padding-block-start',
    },
    'padding-bottom': {
      type: 'replaceProp',
      value: 'padding-block-end',
    },
    'padding-left': {
      type: 'replaceProp',
      value: 'padding-inline-start',
    },
    'padding-right': {
      type: 'replaceProp',
      value: 'padding-inline-end',
    },
    'border-top': {
      type: 'replaceProp',
      value: 'border-block-start',
    },
    'border-bottom': {
      type: 'replaceProp',
      value: 'border-block-end',
    },
    'border-left': {
      type: 'replaceProp',
      value: 'border-inline-start',
    },
    'border-right': {
      type: 'replaceProp',
      value: 'border-inline-end',
    },
    'min-width': {
      type: 'replaceProp',
      value: 'min-inline-size',
    },
    'min-height': {
      type: 'replaceProp',
      value: 'min-block-size',
    },
    'border-top': {
      type: 'replaceProp',
      value: 'border-block-start',
    },
    'border-bottom': {
      type: 'replaceProp',
      value: 'border-block-end',
    },
    'border-left': {
      type: 'replaceProp',
      value: 'border-inline-start',
    },
    'border-right': {
      type: 'replaceProp',
      value: 'border-inline-end',
    },
    'border-top-width': {
      type: 'replaceProp',
      value: 'border-block-start-width',
    },
    'border-bottom-width': {
      type: 'replaceProp',
      value: 'border-block-end-width',
    },
    'border-left-width': {
      type: 'replaceProp',
      value: 'border-inline-start-width',
    },
    'border-right-width': {
      type: 'replaceProp',
      value: 'border-inline-end-width',
    },
    'border-top-style': {
      type: 'replaceProp',
      value: 'border-block-start-style',
    },
    'border-bottom-style': {
      type: 'replaceProp',
      value: 'border-block-end-style',
    },
    'border-left-style': {
      type: 'replaceProp',
      value: 'border-inline-start-style',
    },
    'border-right-style': {
      type: 'replaceProp',
      value: 'border-inline-end-style',
    },
    'border-top-color': {
      type: 'replaceProp',
      value: 'border-block-start-color',
    },
    'border-bottom-color': {
      type: 'replaceProp',
      value: 'border-block-end-color',
    },
    'border-left-color': {
      type: 'replaceProp',
      value: 'border-inline-start-color',
    },
    'border-right-color': {
      type: 'replaceProp',
      value: 'border-inline-end-color',
    },
    'border-bottom-left-radius': {
      type: 'replaceProp',
      value: 'border-end-start-radius',
    },
    'border-bottom-right-radius': {
      type: 'replaceProp',
      value: 'border-end-end-radius',
    },
    'border-top-left-radius': {
      type: 'replaceProp',
      value: 'border-start-start-radius',
    },
    'border-top-right-radius': {
      type: 'replaceProp',
      value: 'border-start-end-radius',
    },
    'float': {
      type: 'replaceValue',
      'left': 'inline-start',
      'right': 'inline-end'
    },
    'clear': {
      type: 'replaceValue',
      'left': 'inline-start',
      'right': 'inline-end'
    },
    'text-align': {
      type: 'replaceValue',
      'left': 'start',
      'right': 'end'
    },
    'margin': {
      type: 'createProps',
      1: [
        'margin-block',
        'margin-inline'
      ],
      2: [
        'margin-block',
        'margin-inline'
      ],
      3: [
        'margin-block-start',
        'margin-inline',
        'margin-block-end'
      ],
      4: [
        'margin-block-start',
        'margin-inline-end',
        'margin-block-end',
        'margin-inline-start'
      ]
    },
    'padding': {
      type: 'createProps',
      1: [
        'padding-block',
        'padding-inline'
      ],
      2: [
        'padding-block',
        'padding-inline'
      ],
      3: [
        'padding-block-start',
        'padding-inline',
        'padding-block-end'
      ],
      4: [
        'padding-block-start',
        'padding-inline-end',
        'padding-block-end',
        'padding-inline-start'
      ]
    }
  }
  module.exports = map;
})()
