import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from '../styles.module.css';


function Tag(props) {
    return (
        <pre style={{display: "inline", padding: "1px 4px 1px 4px", backgroundColor: "rgb(230,230,230)"}}>{props.children}</pre>
    );
}

function Bad(props) {
    return (
        <span style={{fontWeight: 600, color: "rgb(220,40,40)"}}>{props.children}</span>
    );
}

function Good(props) {
    return (
        <span style={{fontWeight: 600, color: "rgb(38,186,38)"}}>{props.children}</span>
    );
}

const versions = [
    {
        title: <>Version 0</>,
        description: (
            <>
                This version has only been used for the very first survey with this tool. It did not
                include support for multiple surveys and <Bad>was only designed to run with the survey it
                was made for</Bad>.

                <br/>
                <br/>

                This was just a basic proof of concept.
            </>
        ),
    },
    {
        title: <>Version 1</>,
        description: (
            <>
                The basic layout of version 2 (routing, API-Design, etc.) was designed to handle multiple
                different surveys with all the features of the previous version.

                <br/><br/>

                <strong>However:</strong> <Bad>Creating new surveys was based on copying parts of the code</Bad> of an existing survey
                and modifying that code. Very flexible but definitely not feasible for a survey tool with
                the purpose of adding new surveys fast and easily.

                <br/><br/>

                In addition to that, the server side code (<Tag>Python 3</Tag>) was still using <Tag>flask</Tag>&nbsp;
                and <Tag>pymongo</Tag> which are <Bad>not asynchronous and therefore blocking during database requests and
                other time consuming operations</Bad>.

                <br/><br/>

                That's why this setup was not suited for an efficient survey tool!
            </>
        ),
    },
    {
        title: <>Version 2+</>,
        description: (
            <>
                From this version on <Good>new surveys can be defined by using a <Tag>json</Tag> config file</Good>.
                No more copy-pasting survey-code!

                <br/><br/>

                We already defined these config files for the past surveys as examples. Of course we provide rich
                documentation on how to write these config files as well as a full API reference.

                <br/><br/>

                We use <Tag>FastAPI</Tag> as our <Good>asynchronous backend framework</Good>. In combination with&nbsp;
                <Tag>motor</Tag> (an asynchronous wrapper for <Tag>pymongo</Tag>) the server side code is way more
                efficient than our last setup.

                <br/><br/>

                What performance increase are we talking about? We'll probably write a blog post about our findings soon :)
            </>
        ),
    },
];


function Version({title, description}) {
    return (
        <div className={classnames('col col--4', styles.feature)}>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
}


function WhichVersion() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <header className={classnames('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">Versions</h1>
          <p className="hero__subtitle">What is the difference between the versions?</p>
        </div>
      </header>
      <main>
        {versions && versions.length && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {versions.map((props, idx) => (
                  <Version key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default WhichVersion;
