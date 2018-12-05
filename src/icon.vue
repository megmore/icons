<script lang="jsx">
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
    render (createElement, context){
      const name = context.props.name
      const icon = Icons[name]
      if (icon === undefined) {
        console.error(`存在未注册的图标${name}`)
        return <template />
      }
      const height = context.props.size ? context.props.size : 20
      const width = height / (Number(icon.height) / Number(icon.width))
      const staticClasses = context.data.staticClass !== undefined ? context.data.staticClass : ''
      const classes = context.data.class !== undefined ? context.data.class : ''
      const styles = Object.assign({fill:'currentColor'}, context.data.style, context.data.staticStyle)

      return (
        <svg xmlns="http://www.w3.org/2000/svg"
             version="1.1"
             staticClass={`${prefix} ${prefix}--${name} ${staticClasses}`}
             class={classes}
             style={styles}
             height={height}
             width={width}
             viewBox={icon.viewBox}
        >
          {icon.paths ? icon.paths.map(path => <path d={path} />) : ''}
          {icon.polygons ? icon.polygons.map(path => <polygon points={path} />) : ''}
        </svg>
      )
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

