

const settings = {
  grid: {
    spacing: Number('40'),
  },
  currency: {
    CAD_XAF: 426.07,
  },
  // presets: [
  //   {
  //     name: 'make',
  //     title: 'Marque',
  //     active: true,
  //   },
  //   {
  //     name: 'bodyType',
  //     title: 'Types de corps',
  //     active: true,
  //   },
  //   {
  //     name: 'color',
  //     title: 'Couleurs',
  //     active: true,
  //   },
  // ],
  pageSections: [
    {
      name: 'siteinfo',
      title: 'Site info',
      active: true,
      linkList: [
        {
          name: 'admin',
          title: 'Admin',
          active: true,
        },
        {
          name: 'infos',
          title: 'Infos',
        },
      ],
    },
    {
      name: 'carinventory',
      title: 'Inventaire de voitures',
      active: false,
      linkList: [
        {
          name: 'carinvent',
          title: 'Toutes les voitures',
        },
      ],
    },
    {
      name: 'presets',
      title: 'Modifier les paramètres',
      active: false,
      linkList: [
        {
          name: 'make',
          title: 'Marque',
        },
        {
          name: 'bodyType',
          title: 'Types de corps',
        },
        {
          name: 'color',
          title: 'Couleurs',
        },
      ],
    },
  ],
  adminDefault: {
    id: '-LIkl4k0oAv47lZc1GqQ',
    // name: "admin",  --- online
    // password: "11"
  },
  colors: {
    themePrimary: '#520000',
    themeSecondary: '#1DB2D4',
  },
};

export const appText = {
  brand: `Dealer KS`,
  loginIntro: `<b>[login - introText]</b> Chocolate bar apple pie lollipop brownie carrot 
  cake halvah chocolate bar. Toffee candy tiramisu gummi bears. Halvah 
  cake cheesecake.`,
  about: ``,
};


export default settings;
