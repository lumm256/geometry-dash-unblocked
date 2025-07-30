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
    title: 'Geometry Dash Unblocked 76',
    description: 'geometry dash unblocked 76',
    url: '/geometry-dash-unblocked-76',
    og: 'https://images.geometry-dash-lite.org/gdu/geometry-dash-unblocked-76.webp'
  },
  {
    title: 'Geometry Dash Unblocked 66',
    description: 'geometry dash unblocked 66',
    url: '/geometry-dash-unblocked-66',
    og: 'https://images.geometry-dash-lite.org/gdu/geometry-dash-unblocked-66.webp'
  },
  {
    title: 'Geometry Dash Subzero HACKED',
    description: 'Geometry Dash Subzero HACKED',
    url: '/geometry-dash-subzero-hacked',
    og: 'https://images.geometry-dash-lite.org/gdu/geometry-dash-subzero-hacked.webp'
  },
  {
    title: 'Geometry Dash Subzero',
    description: 'Geometry Dash Subzero',
    url: '/geometry-dash-subzero',
    og: 'https://images.geometry-dash-lite.org/gdu/geometry-dash-subzero.webp'
  },
  {
    title: 'Geometry Dash Wave Unblocked',
    description: 'geometry dash wave unblocked',
    url: '/geometry-dash-wave-unblocked',
    og: 'https://images.geometry-dash-lite.org/gdu/geometry-dash-wave-unblocked.webp'
  },
  {
    title: 'Geometry Dash Meltdown',
    description: 'Geometry Dash Meltdown',
    url: '/geometry-dash-meltdown',
    og: 'https://images.geometry-dash-lite.org/gdu/geometry-dash-meltdown.webp'
  },
  {
    title: 'Geometry Dash Cadenza',
    description: 'Geometry Dash Cadenza',
    url: '/geometry-dash-cadenza',
    og: 'https://images.geometry-dash-lite.org/gdu/geometry-dash-cadenza.webp'
  },
  {
    title: 'Geometry Dash World Toxic Factory',
    description: 'Geometry Dash World Toxic Factory',
    url: '/geometry-dash-world-toxic-factory',
    og: 'https://images.geometry-dash-lite.org/gdu/geometry-dash-world-toxic-factory.webp'
  },
  {
    title: 'Geometry Dash 2.2 Unblocked',
    description: 'geometry dash 2.2 unblocked',
    url: '/geometry-dash-2.2-unblocked',
    og: 'https://images.geometry-dash-lite.org/gdu/geometry-dash-2.2-unblocked.webp'
  },
  {
    title: 'Geometry Dash',
    description: 'Geometry Dash',
    url: '/geometry-dash',
    og: 'https://images.geometry-dash-lite.org/gdu/geometry-dash.webp'
  }
].concat(ENV_SHOWCASE_LIST)