import 'bulma/css/bulma.min.css';
import React from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ProfileCard from './ProfileCard';
import AlexaImage from './assets/images/alexa.png';
import CortanaImage from './assets/images/cortana.png';
import SiriImage from './assets/images/siri.png';

function App() {
  return (
    <>
      <section className="hero is-primary is-fullheight">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">Personal Digital Assistants</h1>
            <p className="subtitle">
              A collection of personal digital assistants
            </p>
            <div className="columns is-centered">
              <div className="column is-3by1 is-centered is-align-content-stretch">
                <ProfileCard
                  title="Alexa"
                  handle="alexa99"
                  image={AlexaImage}
                  description="Alexa was created by Amazon and helps you buy things" />
              </div>
              <div className="column is-3by1 is-centered is-align-content-stretch">
                <ProfileCard
                  title="Cortana"
                  handle="cortana32"
                  image={CortanaImage}
                  description="Cortana was made by Microsoft Who knows what it does?" />
              </div>
              <div className="column is-3by1 is-centered is-align-content-stretch">
                <ProfileCard
                  title="Siri"
                  handle="siri01"
                  image={SiriImage}
                  description="Siri was created by Apple and is being phased out." />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
