module.exports = {
  title: "Emil Lindberg's portfolio",
  header: 'Emil Lindberg',
  description: "Software developer based in Stockholm, Sweden. Loves to create and play video games, make and listen to music, exercise, learn new things and nerd about science and scepticism.",
  name: 'Emil Lindberg',
  footerTitle: 'Software Developer',
  email: 'hello@emillindberg.com',

  cta: {
    label: 'Contact',
    url: 'mailto:hello@emillindberg.com'
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
      name: "Cat Voxel City",
      description: "You drive through a city and throw cats on objects to gain points while you avoid vehicles and obstacles.",
      projectDescription: "A mobile game I’m developing together with graphic designer <a href='http://www.alkazmi.com/'> Hassan Al Kazmi</a>. I’m responsible for the implementation of the gameplay. I also create tools for assisting Hassan's workflow.",
      technicalDescription: 'Uses <a href="https://unity3d.com/unity">Unity game engine</a> with following libraries: <a href="http://dotween.demigiant.com/">DOTween</a>, <a href="https://sites.google.com/site/carloswilkes/lean/lean-touch">Lean Touch</a> and <a href="https://forum.unity.com/threads/animfollow-active-ragdoll-is-now-free-to-download.220812/">AnimFollow</a>.',
      tags: ["Mobile game", "Unity"],
      alt: "A car drives through a city and fires its weapon on a tree that falls into pieces.",
      img: 'cat-voxel-city_01.png',
      buttons: [
        {
          text: "Gameplay video",
          url: "https://youtu.be/9mRTfZzEfmk"
        }
      ]
    }, 
    {
      name: "Brick Racer",
      description: "A mobile racing game with an online high score table. I'm currently remaking and monetizing it so I can release it on mobile markets.",
      projectDescription: 'Made with the <a href="https://unity3d.com/unity">Unity game engine</a> using C#. Used <a href="https://www.dreamlo.com">dreamlo</a> for the high score table.',
      technicalDescription:  'Made for the <a href="https://ldjam.com/events/ludum-dare/40/results/fun/jam/"> Ludum Dare 40 Jam</a> competition. "Brick Racer" got ranked #12 out of 1818 games in the fun category!',
      tags: ["Mobile game","Unity", "Ludum Dare 40"],
      alt: "A car drives through a city and fires its weapon on a tree that falls into pieces.",
      img: 'brick-racer_01.png',
      buttons: [
        {
          text: "Game page",
          url: "https://ldjam.com/events/ludum-dare/40/brick-racer"
        },
        {
          text: "Gameplay video",
          url: "https://youtu.be/EoBphxAYUcQ"
        },
        {
          text: "Source",
          url: 'https://github.com/e4lime/ludum-dare-40-space-racer'
        }
      ]
    },
    {
      name: "Get The Treasure!",
      projectDescription: 'A 7-man group project work for the last course in my game development bachelor program. I was assigned "Lead Programmer" and were responsible for the gameplay and networking functionality. I was also the SCRUM-master for a few sprints.',
      description: 'Get The Treasure! is an online multiplayer game where you play as one of four burglars who breaks into a museum. The goal is to steal as much loot as possible while preventing the other burglars from looting more than you. The game never got finished beyond a vertical slice.',
      technicalDescription: 'Made with the <a href="https://unity3d.com/unity">Unity game engine</a> using C#. The Networking was implemented with much-appreciated help from the now obsolete "<a href="https://forum.unity.com/threads/ultimate-unity-networking-project-add-multiplayer-to-your-game-today.75385/">Ultimate Unity Networking project</a>."',
      tags: ["Online Multiplayer", "Unity"],
      img: 'get-the-treasure_01.png',
      alt: 'An over the shoulder thirdperson camera is showing a burglar from behind in a big room. A trap is lying on the floor infront of him. Paintings that can be looted hangs on the wall.',
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
    },
    {
      name: "Tic-Tac-Toe Online",
      description: "A classic Tic-tac-toe game with a game server room.",
      projectDescription: "Clients connect to a master server which keeps track of active game servers. Clients can create their custom games and register them with the master server so other clients can easily find them. The custom games themselves run on the hosting client.",
      technicalDescription: 'Made in Java with the network package <a href="https://docs.oracle.com/javase/7/docs/api/java/net/package-summary.html">java.net</a>.',
      tags: ["Online Multiplayer", "Java"],
      img: 'ttto_multiple_01.png',
      alt: "The masterserver, the client's game lobby and two clients playing a game.",
      buttons: [
        {
          text: "Screenshots & source",
          url: "https://github.com/e4lime/tic-tac-toe-online"
        }
      ]
    },
    { // Swap technicalDescription with projectDescription for ludum dare games. "Made for ludum..." is less interesting than technology
      name: 'Mutrix',
      description: "An FPS-puzzle game where you control your characters eyes to detect abnormalities among game objects in a 3D-world. Abnormalities are game objects that aren't visible for both your eyes. By steering your character's left and right eye separately, you can align your eyes to detect these defects.",
      technicalDescription:  'Made for the <a href="http://ludumdare.com/compo/rules/"> Ludum Dare 37 Compo</a> competition. "Mutrix" got ranked #39 in innovation!',
      projectDescription: 'Made with the <a href="https://unity3d.com/unity">Unity game engine</a> using C# and <a href="http://dotween.demigiant.com/">DOTween</a>.',
      tags: ['Unity', 'Ludum Dare 37'],
      img: 'mutrix_01.png',
      alt: 'Screen is split vertically in the middle into two screens. The left screen represent the left eye and the right screen the right eye. ',
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
    { // Swap technicalDescription with projectDescription for ludum dare games. "Made for ludum..." is less interesting than technology
      name: 'Hi Pluto!',
      description: '"Hi Pluto!" is a classic infinite vertical jumping game where you play as Earth jumping upwards on asteroids to reach Pluto. Control Earth\'s horizontal movement with your mouse and aim for the asteroids and the golden comet checkpoints while you avoid dropping out of the screen.',
      technicalDescription: 'Made for the <a href="https://ldjam.com/events/ludum-dare/38"> Ludum Dare 38 Compo</a> competition.',
      projectDescription: 'Made with the <a href="https://unity3d.com/unity">Unity game engine</a> using C# and <a href="http://dotween.demigiant.com/">DOTween</a>. Implemented <a href="https://unity3d.com/unity/features/analytics">Unity Analytics</a> to gain insight on how users would interact within the game. Graphics were made with <a href="https://www.blender.org/">Blender</a> and <a href="https://krita.org/en/">Krita</a>.',
      tags: ['Game Analytics', 'Unity', 'Mobile Game', 'Standalone', 'Ludum Dare 38'],
      img: 'hi-pluto!_01.png',
      alt: 'Earth, asteroids and a comet is shown. Jupiter and Mars are in the background.',
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
      name: "Lime Engine",
      description: "A simple game engine with a top-down shooter game built upon the engine.",
      technicalDescription: "Made with C++ and <a href='https://www.libsdl.org/'>Simple DirectMedia Layer (SDL) 1.2</a>",
      tags: ["C++", "SDL 1.2"],
      alt: 'Gameplay where the player fires at alot of enemy ships.',
      img: 'lime-engine_01.png',
      buttons: [
        {
          text: "Source",
          url: "https://github.com/e4lime/lime-engine"
        }
      ]
    },
  ],
  otherProjects: [
    {
      name: 'Beneath',
      projectDescription: 'An 8-man project work for a 3D animation program. We had a half semester worth of time to produce a short 3D animation in Maya using Disneys 12 animation principles. Our group created everything, but the primary focus of the project was the animation. My tasks were animation, 3D-modelling and UV-mapping and some MEL-scripting. I animated the scene from 2:54 to the end credits. I created tools with MEL to assist parts of the project, such as the animation of the shaking utility hole cover and the water rendering.',
      description: 'Beneath is a 3D animated short film about a father and a son who works as sewer explorers in Stockholm. Beneath was shown at <a href="http://tellusbio.nu/">Biocafé Tellus</a>.',
      technicalDescription: 'Made with <a href="https://www.autodesk.com/products/maya/overview">Autodesk Maya</a>.',
      tags: ['3D Animation', 'MEL', 'Autodesk Maya'],
      alt: 'Part of my scene. The father holds a lit flashlight.',
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
