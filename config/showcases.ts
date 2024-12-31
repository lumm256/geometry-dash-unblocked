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
    og: 'https://cdn2.scratch.mit.edu/get_image/project/105500895_480x360.png'
  },
  {
    title: 'Geometry Dash Meltdown',
    description: 'Geometry Dash Meltdown',
    url: '/geometry-dash-meltdown',
    og: 'https://cdn2.scratch.mit.edu/get_image/project/319667603_480x360.png'
  },
  {
    title: 'Geometry Dash Subzero',
    description: 'Geometry Dash Subzero',
    url: '/geometry-dash-subzero',
    og: 'https://cdn2.scratch.mit.edu/get_image/project/216343253_480x360.png'
  },
  {
    title: 'Geometry Dash Subzero HACKED',
    description: 'Geometry Dash Subzero HACKED',
    url: '/geometry-dash-subzero-hacked',
    og: 'https://cdn2.scratch.mit.edu/get_image/project/301411780_480x360.png'
  },
  {
    title: 'Geometry Dash Cadenza',
    description: 'Geometry Dash Cadenza',
    url: '/geometry-dash-cadenza',
    og: 'https://cdn2.scratch.mit.edu/get_image/project/356595737_480x360.png'
  },
  {
    title: 'Geometry Dash World Toxic Factory',
    description: 'Geometry Dash World Toxic Factory',
    url: '/geometry-dash-world-toxic-factory',
    og: 'https://cdn2.scratch.mit.edu/get_image/project/224236914_480x360.png'
  },
  {
    title: 'geometry dash wave unblocked',
    description: 'geometry dash wave unblocked',
    url: '/geometry-dash-wave-unblocked',
    og: 'https://uploads.scratch.mit.edu/get_image/project/898033846_480x360.png'
  },
  {
    title: 'geometry dash unblocked 66',
    description: 'geometry dash unblocked 66',
    url: '/geometry-dash-unblocked-66',
    og: 'https://cdn2.scratch.mit.edu/get_image/project/194164289_480x360.png'
  },
  {
    title: 'geometry dash unblocked 76',
    description: 'geometry dash unblocked 76',
    url: '/geometry-dash-unblocked-76',
    og: 'https://cdn2.scratch.mit.edu/get_image/project/915587918_480x360.png'
  },
  {
    title: 'geometry dash 2.2 unblocked',
    description: 'geometry dash 2.2 unblocked',
    url: '/geometry-dash-2.2-unblocked',
    og: 'https://cdn2.scratch.mit.edu/get_image/project/245970184_480x360.png'
  }
].concat(ENV_SHOWCASE_LIST)