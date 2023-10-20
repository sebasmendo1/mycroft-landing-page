import React from 'react';
import './App.css';
import { ThemeProvider } from './ThemeProvider';
import Header from './components/Header';
import Features from './components/Features';

import hero_image from './images/hero-image.png'
import note from './images/icons/icon-notes.svg'
import download from './images/icons/icon-hdDownloads.svg'
import editor_mode from './images/icons/icon-editor-mode.svg'
import polls from './images/icons/icon-polls.svg'
import screenshare from './images/icons/icon-screenshare.svg'
import whiteboard from './images/icons/icon-whiteboard.svg'

function App() {
  return (
    <div className="App">
      <ThemeProvider>

        <div className="hero-banner">
          <Header />
          <div>
            <h1>Online research doesn't have to be dull and dated.</h1>
            <p>Meet Mycroft, a seamless and secure online conferencing platform that offers effortless full-service support and accessible self-service functionality.</p>
            <button className='button-white'>Get a Demo</button>
          </div>
          <img className="hero-image" src={hero_image}></img>
        </div>


        <div className="features">
          <h1>We’ve got all the features you’ve been looking for</h1>
            <div className="features-wrapper-1">
              <Features icon={note} header="Notes" description="Timestamped notes that allow you to capture key moments of a session.  Notes are accessible within the platform and for download once the groups are complete."/>
              <Features icon={download} header="HD Downloads" description="Instantly available after completion.  You can access within the platform, or from a file we share with you through Dropbox"/>
              <Features icon={editor_mode} header="Editor Mode" description="Create clips of your favorite quotes and download them directly from the platform to compile a highlight reel."/>
             </div>
            <div className='features-wrapper-2'> 
              <Features icon={polls} header="Polls" description="Multiple poll types are available to capture participant feedback: open-end, single select, multi select, and ranking."/>
              <Features icon={screenshare} header="Screenshare" description="Both the moderator and participants can share their screen (with the ability to disable participant screenshare)"/>
              <Features icon={whiteboard} header="Whiteboard" description="Type or draw and work with your participants live"/>
            </div>
          </div>

        <div className="features"> 
          <div className="feature-left">
            <image></image>
            <div>
              <h3>Enhanced Lobby</h3>
              <p>Mycroft is designed to incorporate the best elements from the in-person facility experience.  While participants wait in the lobby, researchers have the ability to invite people to a 1-on1 video chat rescreen to ensure you are selecting the best to participate..  Respondents can receive an additional survey upon entry, with instant results for review.  </p>
            </div>
          </div>

          <div className="feature-right">
            <div>
              <h3>Full-Time Support</h3>
              <p>With Mycroft, you can expect top-notch support from project kick-off through file delivery.  We take on the extra tasks of running tech checks with each respondent ahead of their participation day, all stim and poll uploads, and live support in each session to ensure all participant and client issuers are resolved, should any arise.</p>
            </div>
            <image></image>
          </div>

          <div className="feature-left">
            <image></image>
            <div>
              <h3>Security</h3>
              <p>Privacy is paramount in market research.  Mycroft is built on Amazon Web Services, which has security practices second to none.  On top of that, we do all we can to ensure participant information and stimulus is protected, with password-protected sessions, respondent-specific watermark overlay on stimulus, and data destruction after 90 days.</p>
            </div>
          </div>
        
        </div>

        <div className="companies">
          <h2>Trusted by the most innovative companies</h2>
          <div className="company-list">
            <div className="company-logo">
              <image></image>
            </div>
            <div className="company-logo">
              <image></image>
            </div>
            <div className="company-logo">
              <image></image>
            </div>
            <div className="company-logo">
              <image></image>
            </div>
          </div>
        </div>

        <div className="quotes">
          <p>“It is often hard to find business partners who are artistic and creative, and who have a keen awareness of deadlines, client interactions, etc. Mycroft is one of very few organizations I have worked with over the years that excels in both the expressive and organizational sides of business They are professional, innovative, and punctual. Their ability to think outside the box and problem solve makes working with them a pleasure. I consider Mycroft an invaluable partner in providing inventive solutions for me and my team.”</p>
          <h6>— Shannon Marrs, Founder and Chief Client Advocate, Chirp Research</h6>
        </div>

        <div className="call-to-action">
          <h3>Ready for the upgrade?</h3>
          <p>Request a demo and a representative will be in touch shortly.</p>
        </div>

        <div className="footer">
          <p>@ 2023 Mycroft, Inc. All rights reserved.</p>
        </div>
      </ThemeProvider>
    </div>
    
  );
}

export default App;
