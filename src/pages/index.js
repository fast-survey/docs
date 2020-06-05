import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
    {
        title: <>Beautiful Surveys</>,
        imageUrl: 'img/undraw_customer_survey_f9ur.svg',
        description: (
            <>
                Minimalistic design based on Google Material Design. Fast interface
                with full client-side form validation built-in.
            </>
        ),
    },
    {
        title: <>Transparent, Secure and Open Source</>,
        imageUrl: 'img/undraw_open_source_1qxw.svg',
        description: (
            <>
                Full transparency regarding data privacy. All functionality without any
                cookies or local storage. Rich documentation and an MIT licence for full
                reusability as well as instructions for self-hosting.

                <br/><br/>

                All services can be modified and fully replaced independently of each other
                since the whole communication takes place with REST and all API's are well
                documented.
            </>
        ),
    },
    {
        title: <>Build with Modern Tools</>,
        imageUrl: 'img/undraw_hacker_mindset_gjwq.svg',
        description: (
            <>
                A fully responsive single page application built with React. Asynchronous,
                efficient backend code with automatic API-reference documentation based on
                the OpenAPI standard. Fully cloud hosted on GCP.
            </>
        ),
    },
];

function Feature({imageUrl, title, description}) {
    const imgUrl = useBaseUrl(imageUrl);
    return (
        <div className={classnames('col col--4', styles.feature)}>
            {imgUrl && (
                <div className="text--center">
                    <img className={styles.featureImage} src={imgUrl} alt={title}/>
                </div>
            )}
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
}

function Home() {
    const context = useDocusaurusContext();
    const {siteConfig = {}} = context;
    return (
        <Layout
            description="Fully customizable surveys built with modern tools."
            image={"/img/rocket_bg.png"}
        >
            <header className={classnames('hero hero--primary', styles.heroBanner, styles.heroBannerLight)}>
                <div className="container">
                    <h1 className="hero__title">{siteConfig.title}</h1>
                    <p className="hero__subtitle">{siteConfig.tagline}</p>
                    <div className={styles.buttons}>
                        <Link
                            className={classnames(
                                'button button--outline button--secondary button--lg',
                                styles.getStarted,
                                styles.getStartedButton,
                            )}
                            to={useBaseUrl('docs/general/getting-started')}>
                            Get Started
                        </Link>
                    </div>
                </div>
            </header>
            <main>
                {features && features.length && (
                    <section className={styles.features}>
                        <div className="container">
                            <div className="row">
                                {features.map((props, idx) => (
                                    <Feature key={idx} {...props} />
                                ))}
                            </div>
                        </div>
                    </section>
                )}
            </main>
        </Layout>
    );
}

export default Home;
