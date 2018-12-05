var prefix = 'm-icon';

var Icons = {};

var sizeMap = {
  xs: 12,
  sm: 24,
  md: 32,
  lg: 40,
  xl: 50,
};

var script = {
  name: 'MIcon',
  functional: true,
  props: {
    name: {
      type: String,
      require: true
    },
    // color: {
    //   type: String,
    //   default: '#000000',
    // },
    size:  {
      type: Number,
      default: sizeMap['md'],
    },
  },
  render: function render (createElement, context){
    var name = context.props.name;
    var icon = Icons[name];
    if (icon === undefined) {
      console.error(("存在未注册的图标" + name));
      return React.createElement( 'template', null )
    }
    var height = context.props.size ? context.props.size : 20;
    var width = height / (Number(icon.height) / Number(icon.width));
    var staticClasses = context.data.staticClass !== undefined ? context.data.staticClass : '';
    var classes = context.data.class !== undefined ? context.data.class : '';
    var styles = Object.assign({fill:'currentColor'}, context.data.style, context.data.staticStyle);

    return (
      React.createElement( 'svg', { xmlns: "http://www.w3.org/2000/svg", version: "1.1", staticClass: (prefix + " " + prefix + "--" + name + " " + staticClasses), class: classes, style: styles, height: height, width: width, viewBox: icon.viewBox },
        icon.paths ? icon.paths.map(function (path) { return React.createElement( 'path', { d: path }); }) : '',
        icon.polygons ? icon.polygons.map(function (path) { return React.createElement( 'polygon', { points: path }); }) : ''
      )
    )
  }
};

/**
 * 自定义icon
 * custom icon register
 * @param sources
 */
function register(sources) {
  if ( sources === void 0 ) sources = [];

  sources.forEach(function (source) {
    if (source.d) {
      if (!source.paths) {
        source.paths = [];
      }
      source.paths.push({ d: source.d });
    }

    if (source.points) {
      if (!source.polygons) {
        source.polygons = [];
      }
      source.polygons.push({ points: source.points });
    }
    Icons[source.name] = source;
    delete source.name;
  });
}

/* script */
            var __vue_script__ = script;
            
/* template */

  /* style */
  var __vue_inject_styles__ = undefined;
  /* scoped */
  var __vue_scope_id__ = undefined;
  /* module identifier */
  var __vue_module_identifier__ = undefined;
  /* functional template */
  var __vue_is_functional_template__ = undefined;
  /* component normalizer */
  function __vue_normalize__(
    template, style, script$$1,
    scope, functional, moduleIdentifier,
    createInjector, createInjectorSSR
  ) {
    var component = (typeof script$$1 === 'function' ? script$$1.options : script$$1) || {};

    // For security concerns, we use only base name in production mode.
    component.__file = "icon.vue";

    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;

      if (functional) { component.functional = true; }
    }

    component._scopeId = scope;

    return component
  }
  /* style inject */
  
  /* style inject SSR */
  

  
  var MIcon = __vue_normalize__(
    {},
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    undefined,
    undefined
  );

MIcon.install = function install(Vue, data) {
  Vue.component(MIcon.name, MIcon);
  register(data);
};

MIcon.register = register;

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(MIcon);
}

export default MIcon;
