module.exports = {
  title: 'Emil Lindberg',
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
      name: 'Mutrix',
      description:  'An FPS-puzzle game made for the <a href="http://ludumdare.com/compo/rules/"> Ludum Dare 37 Compo</a> competition. Got ranked #39 in innovation!',
      technicalDescription: 'Made with the Unity game engine using C#.',
      tags: ['Unity', 'C#', 'Ludum Dare 37'],
      img: 'mutrix_01.png',
      gitsource: '', //https://github.com/e4lime/ludum-dare-37-mutrix' (Using button instead)
      buttons: [
        {
          text: "Game page",
          url: "http://ludumdare.com/compo/ludum-dare-37/?action=preview&uid=35008"
        },
        {
          text: "Gameplay video",
          url: "https://youtu.be/j00fgO9FKAI"
        },
        {
          text: "Source",
          url: 'https://github.com/e4lime/ludum-dare-37-mutrix'
        }
      ]
    },
    {
      name: 'Hi Pluto!',
      description: 'Infinite vertical jumping game made for the <a href="https://ldjam.com/events/ludum-dare/38"> Ludum Dare 38 Compo</a> competition.',
      technicalDescription: 'Made with the Unity game engine using C#. Implemented <a href="https://unity3d.com/unity/features/analytics">Unity Analytics</a> to gain insight on how users would interact within the game.',
      tags: ['Unity', 'C#', 'Ludum Dare 38'],
      img: 'hi-pluto!_01.png',
      buttons: [
        {
          text: "Game page",
          url: "https://ldjam.com/events/ludum-dare/38/hi-pluto"
        },
        {
          text: "Gameplay video",
          url: "https://youtu.be/MKpjr7k8pFg"
        },
        {
          text: "Source",
          url: 'https://github.com/e4lime/ludum-dare-38-hi-pluto'
        }
      ]
    },
    {
      name: "Tic-Tac-Toe Online",
      description: "A classic Tic-tac-toe game with a game server room",
      technicalDescription: "Clients connect to a master server which keeps track of active game servers. Clients can create their custom games and register them with the master server so other clients can easily find them. The custom games themselves are run on the hosting client. Made in Java with the network package java.net.",
      tags: ["Online Multiplayer", "Java"],
      img: 'ttto_multiple_01.png',
      buttons: [
        {
          text: "Screenshots & source",
          url: "https://github.com/e4lime/tic-tac-toe-online"
        }
      ]
    },
    {
      name: "Lime Engine",
      description: "A simple game engine with a top down shooter game built upon the engine.",
      technicalDescription: "Made with C++ and Simple DirectMedia Layer (SDL) 1.2",
      tags: ["C++", "SDL 1.2"],
      img: 'lime-engine_01.png',
      buttons: [
        {
          text: "Source",
          url: "https://github.com/e4lime/lime-engine"
        }
      ]
    },
    {
      name: "Cat Voxel City",
      description: "A mobile game I'm making with graphic designer <a href='http://www.alkazmi.com/'> Hassan Al Kazmi</a>. You drive through a city and throw cats on objects to gain points while you avoid vechicles and obstacles.",
      technicalDescription: "Made with the Unity game engine using C#.",
      tags: ["Unity", "C#"],
      img: 'cat-voxel-city_01.png',
      buttons: [
        {
          text: "Gameplay video",
          url: "https://youtu.be/9mRTfZzEfmk"
        }
        //,
       // {
       //   text: "Source (Only script assets)",
        //  url: "www.google.com"
       // }
      ]
    }
    ,
    {
      name: "Get The Treasure!",
      projectDescription: 'A 7-man group project work for the last course in my game development bachelor program. I was assigned "Lead Programmer" and were responsible for the gameplay and networking functionality. I was also the SCRUM-master for a few sprints. Made in 2011.',
      description: 'Get The Treasure! is a online multiplayer game where you play as one of four burglars who breaks into a museum. The goal is to steal as much loot as possible while preventing the other burglars from stealing more than you. The game never got finished beyond a vertical slice.',
      technicalDescription: 'Made with the Unity game engine using C#. The Networking was done with much appreciated help from the now obsolete "<a href="https://forum.unity.com/threads/ultimate-unity-networking-project-add-multiplayer-to-your-game-today.75385/">Ultimate Unity Networking project</a>".',
      tags: ["Online Multiplayer", "Unity", "C#"],
      img: 'get-the-treasure_01.png',
      buttons: [
        {
          text: "Gameplay (Commentary in Swedish)",
          url: "https://youtu.be/SLyq6plJkrw"
        }, 
        {
          text: "Webplayer (obsolete)",
          url: "https://people.dsv.su.se/~emli5523/gtt/"
        }
      ]
    }
  ],
  otherProjects: [
    {
      name: 'Beneath',
      projectDescription: 'A 8-man project work for a 3D animation program. We had a half semester worth of time to create a short 3d-animation in Maya using Disneys 12 animation principles. Everything was created by our group but the main focus of the project was on the animation. My tasks were animation, 3D-modelling and UV-mapping and some MEL-scripting. I animated the scene from 2:54 to the end credits. I created tools with MEL to assist parts of the project, such as the animation of the shaking manhole lid and the water rendering.',
      description: 'Beneath is a 3-min animated 3D short film about a father and a son who works as sewer explorers in Stockholm. Beneath was shown at <a href="http://tellusbio.nu/">Biocafé Tellus</a>.',
      technicalDescription: 'Made with Maya.',
      tags: ['3D Animation', 'MEL', 'Maya'],
      alt: 'Combustion Screenshot', // alt description of image for accessibility. defaults to '{{name}} Screenshot'
      img: 'beneath_02.png',
      gitsource: '', //https://github.com/e4lime/ludum-dare-37-mutrix' (Using button instead)
      buttons: [
        {
          text: "Animation (Starts at my scene)",
          url: "https://youtu.be/pMTGHuOTu7g?t=2m53s"
        },
        {
          text: "From the beginning",
          url: "https://youtu.be/pMTGHuOTu7g"
        }
      ]
    }
  ]
}
