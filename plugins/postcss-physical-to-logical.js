const postcss = require('postcss');
const map = require('../logical-properties');

module.exports = postcss.plugin('postcss-physical-to-logical', function () {
    return function (css) {      
      css.walkRules((rule) => {
        rule.walkDecls((declaration) => {
          const key = declaration.prop;
          const value = declaration.value;
          if(map[key]) {
            switch (map[key]['type']) {
              case 'replaceValue':
                declaration.value = map[key][value];
                break;
              case 'createProps':
                const values = value.split(" ");
                map[key][values.length] && map[key][values.length].forEach((property, i) => {
                  declaration.cloneAfter({
                    prop: property,
                    value: values.length === 1 ? values[0] : values[i]
                  })
                });
                declaration.remove();
                break;
              case 'replaceProp':
                declaration.prop = map[key]['value'] ;
                break;
              default:
                break;
            }
          }
        });
      })
  
    };
  });