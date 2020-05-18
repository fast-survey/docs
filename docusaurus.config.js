module.exports = {
  title: 'MSE Survey Tool',
  tagline: 'fully customizable surveys built with modern tools',
  url: 'https://mse-survey-tool.github.io',
  baseUrl: '/',
  favicon: 'img/favicon_512.ico',
  organizationName: 'mse-survey-tool', // Usually your GitHub org/user name.
  projectName: 'project-docs', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'MSE Survey Tool',
      logo: {
        alt: 'MSE Logo',
        src: 'img/MSELogoOld.svg',
      },
      links: [
        {
          to: 'docs/doc1',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          href: 'https://github.com/mse-survey-tool',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: '...',
            },
            {
              label: '...',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: '...',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/mse-survey-tool',
            },
            {
              label: 'Development Progress',
              href: 'https://github.com/mse-survey-tool',
            },
            {
              label: 'Survey Frontend',
              href: 'https://mse-survey-frontend.ey.r.appspot.com/'
            }
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Felix Böhm, Moritz Makowski`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
