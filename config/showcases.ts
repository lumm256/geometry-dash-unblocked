const NEXT_PUBLIC_SHOWCASE_LIST = process.env.NEXT_PUBLIC_SHOWCASE_LIST

const ENV_SHOWCASE_LIST = NEXT_PUBLIC_SHOWCASE_LIST && NEXT_PUBLIC_SHOWCASE_LIST.split(',').map(i => {
  return {
    url: i,
    title: '',
    description: '',
    og: ''
  }
}) || []

export const showcases = [
  {
    title: 'Geometry Dash',
    description: 'Geometry Dash',
    url: '/geometry-dash',
    og: 'https://game.geometry-dash-unblocked.com/Geometry-Dash.png'
  },
  {
    title: 'Geometry Dash Meltdown',
    description: 'Geometry Dash Meltdown',
    url: '/geometry-dash-meltdown',
    og: 'https://game.geometry-dash-unblocked.com/Geometry-Dash-Meltdown.png'
  },
  {
    title: 'Geometry Dash Subzero',
    description: 'Geometry Dash Subzero',
    url: '/geometry-dash-subzero',
    og: 'https://game.geometry-dash-unblocked.com/Geometry-Dash-Subzero.png'
  },
  {
    title: 'Geometry Dash Subzero HACKED',
    description: 'Geometry Dash Subzero HACKED',
    url: '/geometry-dash-subzero-hacked',
    og: 'https://game.geometry-dash-unblocked.com/Geometry-Dash-Subzero-HACKED.png'
  },
  {
    title: 'Geometry Dash Cadenza',
    description: 'Geometry Dash Cadenza',
    url: '/geometry-dash-cadenza',
    og: 'https://game.geometry-dash-unblocked.com/Geometry-Dash-Cadenza.png'
  },
  {
    title: 'Geometry Dash World Toxic Factory',
    description: 'Geometry Dash World Toxic Factory',
    url: '/geometry-dash-world-toxic-factory',
    og: 'https://game.geometry-dash-unblocked.com/Geometry-Dash-World-Toxic-Factory.png'
  }
].concat(ENV_SHOWCASE_LIST)