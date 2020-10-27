module.exports = {
    title: 'FastSurvey',
    tagline: 'fully customizable surveys built with modern tools',
    url: 'https://docs.fastsurvey.io/',
    baseUrl: '/',
    favicon: 'img/icons/favicon_512.ico',
    organizationName: 'fastsurvey', // Usually your GitHub org/user name.
    projectName: 'docs', // Usually your repo name.
    onBrokenLinks: 'ignore',
    themeConfig: {
        colorMode: {
            disableSwitch: true,
        },
        prism: {
            theme: require('prism-react-renderer/themes/github'),
            darkTheme: require('prism-react-renderer/themes/dracula'),
        },
        navbar: {
            title: 'FastSurvey',
            logo: {
                alt: 'FastSurvey Logo',
                src: 'img/icons/rocket_navbar_icon.svg',
            },
            items: [
                {
                    to: 'docs/general/getting-started',
                    activeBasePath: 'docs',
                    label: 'Documentation',
                    position: 'left',
                },
                {
                    href: 'https://github.com/fastsurvey',
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
                            href: '/docs/general/versions',
                            target: '_self',
                        },
                        {
                            label: 'Version 2.0',
                            href: '/docs/general/getting-started',
                            target: '_self',
                        },
                    ],
                },
                {
                    title: 'Built with',
                    items: [
                        {
                            html: `
                <a href="https://reactjs.org/" target="_blank" rel="noreferrer noopener" aria-label="ReactJS">
                  <img style="max-height: 1.6rem" src="/img/brands/React_White_768.png" alt="ReactJS""/>
                </a>
              `,
                        },
                        {
                            html: `
                <a href="https://fastapi.tiangolo.com/" target="_blank" rel="noreferrer noopener" aria-label="FastAPI">
                  <img style="max-height: 1.6rem" src="/img/brands/FastAPI_White_768.png" alt="FastAPI""/>
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
                  <img style="max-width: 12rem" src="/img/brands/GCP_White_768.png" alt="Powered by the Google Platform" />
                </a>
              `,
                        },
                        {
                            html: `
                <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer noopener" aria-label="MongoDB">
                  <img style="max-width: 6.5rem" src="/img/brands/MongoDB_768.png" alt="MongoDB" />
                </a>
              `,
                        },
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
                    editUrl: 'https://github.com/fastsurvey/docs/edit/master/',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            },
        ],
    ],
};
