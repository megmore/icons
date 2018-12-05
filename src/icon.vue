<template>
  <svg xmlns="http://www.w3.org/2000/svg"
       version="1.1"
       class="m-icon"
       :class="classes"
       style="fill:currentColor"
       :height="height"
       :width="width"
       :viewBox="viewBox">
    <template v-if="Icon && Icon.paths">
      <path v-for="(path, i) in Icon.paths" :key="`path-${i}`" :d="path"/>
    </template>
    <template v-if="Icon && Icon.polygons">
      <polygon v-for="(polygon, i) in Icon.polygons" :key="`polygon-${i}`" v-bind="polygon"/>
    </template>
  </svg>
</template>
<script>
  const prefix = 'm-icon'

  const Icons = {}

  const sizeMap = {
    xs: 12,
    sm: 24,
    md: 32,
    lg: 40,
    xl: 50,
  }

  export default {
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
      Icon() {
        const { name } = this
        if (Icons[name] === undefined) {
          console.error(`存在未注册的图标${name}`)
          return {}
        }
        return Icons[name]
      },
      classes() {
        return {
          [`m-icon-${this.name}`]: true
        }
      },
      height() {
        return typeof this.size === 'number' ? this.size : sizeMap[this.size]
      },
      width() {
        return this.height / (Number(this.Icon.height) / Number(this.Icon.width))
      },
      viewBox() {
        return this.Icon.viewBox
      }
    },
    mounted(){
      console.log(this.Icon)
    }
  }

  /**
   * 自定义icon
   * custom icon register
   * @param sources
   */
  export function register(sources = []) {
    sources.forEach(source => {
      if (source.d) {
        if (!source.paths) {
          source.paths = []
        }
        source.paths.push({ d: source.d })
      }

      if (source.points) {
        if (!source.polygons) {
          source.polygons = []
        }
        source.polygons.push({ points: source.points })
      }
      Icons[source.name] = source
      delete source.name
    })
  }
</script>

