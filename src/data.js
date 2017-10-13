module.exports = {
  title: 'Emil Lindbergh',
  header: "Emil Lindberg",
  description: "Software developer based in Stockholm, Sweden. Love creating video games, play and listen to music, strength training and learning new things.",
  name: 'Emil Lindberg',
  footerTitle: 'Software Developer',
  email: 'hello@emillindberg.com',

  cta: {
    label: 'Get my resume',
    url: 'resume.pdf',
  },
  socials: [
    //{ icon: 'twitter', url: '//' },
    { icon: 'github-circled', url: 'https://github.com/e4lime' },
    { icon: 'mail-alt' }, // mail alt automatically links to mailto:email
    //{ icon: 'dribbble', url: '//' },
    //{ icon: 'skype', url: '//' },
    //{ icon: 'linkedin-squared', url: '//' }
  ],
  projects: [
    {
      name: 'Combustion',
      description: 'Combustion is a sleek, modern web client for the transmission bittorrent client.',
      tags: ['React', 'Javascript', 'Webpack', 'Mobx', 'CSSModules'],
      alt: 'Combustion Screenshot', // alt description of image for accessibility. defaults to '{{name}} Screenshot'
      img: 'combustion.png',
      url: '//'
    },
    {
      name: 'Merc-01',
      description: 'Merc-01 is a fast paced twin-stick shooter built on top of pyglet.',
      tags: ['Python', 'WebGL', 'Pyglet'],
      img: 'merc-01.png',
      url: '//'
    }
  ]
}
