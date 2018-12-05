//

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
  // functional: true,
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
  computed: {
    Icon: function Icon() {
      var ref = this;
      var name = ref.name;
      if (Icons[name] === undefined) {
        console.error(("存在未注册的图标" + name));
        return {}
      }
      return Icons[name]
    },
    classes: function classes() {
      var obj;

      return ( obj = {}, obj[("m-icon-" + (this.name))] = true, obj )
    },
    height: function height() {
      return typeof this.size === 'number' ? this.size : sizeMap[this.size]
    },
    width: function width() {
      return this.height / (Number(this.Icon.height) / Number(this.Icon.width))
    },
    viewBox: function viewBox() {
      return this.Icon.viewBox
    }
  },
  mounted: function mounted(){
    console.log(this.Icon);
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
var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{staticClass:"m-icon",class:_vm.classes,staticStyle:{"fill":"currentColor"},attrs:{"xmlns":"http://www.w3.org/2000/svg","version":"1.1","height":_vm.height,"width":_vm.width,"viewBox":_vm.viewBox}},[(_vm.Icon && _vm.Icon.paths)?_vm._l((_vm.Icon.paths),function(path,i){return _c('path',{key:("path-" + i),attrs:{"d":path}})}):_vm._e(),_vm._v(" "),(_vm.Icon && _vm.Icon.polygons)?_vm._l((_vm.Icon.polygons),function(polygon,i){return _c('polygon',_vm._b({key:("polygon-" + i)},'polygon',polygon,false))}):_vm._e()],2)};
var __vue_staticRenderFns__ = [];

  /* style */
  var __vue_inject_styles__ = undefined;
  /* scoped */
  var __vue_scope_id__ = undefined;
  /* module identifier */
  var __vue_module_identifier__ = undefined;
  /* functional template */
  var __vue_is_functional_template__ = false;
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
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
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
