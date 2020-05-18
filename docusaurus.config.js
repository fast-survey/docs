module.exports = {
  title: 'MSE Survey Tool',
  tagline: 'fully customizable surveys built with modern tools',
  url: 'https://mse-survey-tool-docs.netlify.app',
  baseUrl: '/',
  favicon: 'img/favicon_512.ico',
  organizationName: 'mse-survey-tool', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.
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
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Versions',
          items: [
            {
              label: 'Differences?',
              href: '/versions',
              target: '_self'
            },
            {
              label: 'Version 2.0',
              href: '/docs/doc2',
              target: '_self'
            },
          ],
        },
        {
          title: 'Built with',
          items: [
            {
              html: `
                <a href="https://reactjs.org/" target="_blank" rel="noreferrer noopener" aria-label="ReactJS">
                  <img style="max-height: 1.6rem" src="/img/branding/React_White_768.png" alt="ReactJS""/>
                </a>
              `,
            },
            {
              html: `
                <a href="https://fastapi.tiangolo.com/" target="_blank" rel="noreferrer noopener" aria-label="FastAPI">
                  <img style="max-height: 1.6rem" src="/img/branding/FastAPI_White_768.png" alt="FastAPI""/>
                </a>
              `,
            },
            {
              html: `
                <a href="https://material-ui.com/" target="_blank" rel="noreferrer noopener" aria-label="Material-UI">
                  <img style="max-height: 1.6rem" src="/img/branding/Material-UI_White_768.png" alt="Material-UI"/>
                </a>
              `,
            },
            {
              html: `
                <a href="https://v2.docusaurus.io/" target="_blank" rel="noreferrer noopener" aria-label="Docusaurus">
                  <img style="max-height: 1.6rem" src="/img/branding/Docusaurus_White_768.png" alt="Docusaurus" />
                </a>
              `,
            },
          ],
        },
        {
          title: 'Powered by',
          items: [
            {
              html: `
                <a href="https://cloud.google.com/" target="_blank" rel="noreferrer noopener" aria-label="Powered by the Google Platform">
                  <img style="max-width: 14rem" src="/img/branding/GCP_White_768.png" alt="Powered by the Google Platform" />
                </a>
              `,
            },
            {
              html: `
                <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer noopener" aria-label="MongoDB">
                  <img style="max-width: 8rem" src="/img/branding/MongoDB_768.png" alt="MongoDB" />
                </a>
              `,
            },
            {
              html: `
                <a href="https://sendgrid.com/" target="_blank" rel="noreferrer noopener" aria-label="SendGrid">
                  <img style="max-width: 7rem" src="/img/branding/Sendgrid_White_734.png" alt="SendGrid" />
                </a>
              `,
            },
            {
              html: `
                <a href="https://www.netlify.com/" target="_blank" rel="noreferrer noopener" aria-label="Netlify">
                  <img style="max-width: 6rem" src="/img/branding/Netlify_White_768.png" alt="Netlify" />
                </a>
              `,
            },
          ],
        }
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
