import React from 'react';

import CookieWarning from '../../components/CookieWarning';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Preview from '../../components/Preview';
import Toolkit from '../../components/Toolkit';

import { useStore } from '../../store';

import './Layout.scss';

const Layout = () => {
  const { state } = useStore();

  return (
    <div>
      <CookieWarning />
      <Header />
      <div className="main container">
        {state.sharing ? (
          <Preview />
        ) : (
          <>
            <div className="tool-blurb">
              <h1>Social Toolkit</h1>
              <p>
                This is a 'social toolkit' which lets a user choose a share
                graphic, choose an 'action', then share it to various social
                media platforms.
              </p>
              <p>The steps are:</p>
              <ol>
                <li>Choose a graphic to share</li>
                <li>Choose a colour scheme</li>
                <li>Choose an action for your share</li>
                <li>
                  Preview and share on social media platforms (Facebook,
                  Twitter, Whatsapp)
                </li>
              </ol>
            </div>
            <Toolkit />
          </>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
