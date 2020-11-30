import React from 'react';

import styles from '../scss/footer.module.scss';

export default function Footer() {
  return (
    <div>
      {/* ===========================================================================================
                        Footer Links
          =========================================================================================== */}

      <footer className={styles.footer}>
        <h1 className={styles.heading}>
          {' '}
          Contact Us
          <hr/>
        </h1>
        <div className={styles['footer-content']}>
          <div className={styles.badges}>
            {/* Dev.to */}
            <a href="https://dev.to/codetrophs">
              <img src="/SVG/dev_to.svg" alt="Dev.to"/>
              Dev.to
            </a>
            {/* Discord */}
            <a href="https://discord.gg/HYPt5RX">
              <img src="/SVG/footer-discord.svg" alt="Discord"/>
              Discord
            </a>
            {/* Twitter */}
            <a href="https://twitter.com/CodeTrophs">
              <img src="/SVG/footer-twitter.svg" alt="Twitter"/>
              Twitter
            </a>
            {/* Github */}
            <a href="https://github.com/CodeTrophs">
              <img src="/SVG/footer-github.svg" alt="Github"/>
              Github
            </a>
            {/* LinkedIn */}
            <a href="https://www.linkedin.com/company/codetrophs">
              <img src="/SVG/footer-linkedin.svg" alt="LinkedIn"/>
              LinkedIn
            </a>
            {/* Slack */}
            <a href="https://join.slack.com/t/codetrophs/shared_invite/zt-jxiadt9c-4vIl~bWsIeECQEiHZ9d9yw">
              <img src="/SVG/footer-slack.svg" alt="Slack"/>
              Slack
            </a>

            <a href="https://github.com/CodeTrophs/Frontend">
              <img src="/SVG/pencil.svg" alt="pencil"/>
              Edit this page
            </a>
            <a href="https://github.com/CodeTrophs">
              <img src="/SVG/code.svg" alt="</>"/>
              View Source Code
            </a>
          </div>
        </div>
        <div className={styles['partner-logo']}>
          <img src="/logo/logo.png" alt="Powered by CodeTrophs"/>
        </div>
      </footer>
    </div>
  );
}
