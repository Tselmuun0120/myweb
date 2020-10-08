import React from "react";
import image1 from "../../assets/images/image1.jpg";
import image2 from "../../assets/images/image2.jpg";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.scss";


function App() {
  return (
    <div className="App">
      <img src={image1} className="App-image" alt="image" />
      <h5>
        The people who are crazy enough to think they can change the world are
        the ones who do.
      </h5>
      <h1>Timeline</h1>

      <div className="Dev">
        <div className="Text">
          <div className="Year">
            <h4 className="On">24 Feb 1955</h4>{" "}
            <p>
              Steven Paul was born in San Francisco, the son of Abdulfattah
              Jandali and Joanne Schieble. He is quickly adopted by Paul and
              Clara Jobs
            </p>
          </div>
          <div className="Year">
            <h4 className="On">1969</h4>{" "}
            <p>
              Steve Jobs meets Steve Wozniak, 5 years older, through a mutual
              friend. Woz and Steve share a love of electronics, Bob Dylan, and
              pranks
            </p>
          </div>
          <div className="Year">
            <h4 className="On">Mar 1976</h4>{" "}
            <p>
              Woz and Steve show early Apple I board at the Homebrew Computer
              Club
            </p>
          </div>
          <div className="Year">
            <h4 className="On">28 Aug 1976</h4>{" "}
            <p>
              Steve Jobs and Woz show off the Apple I at the Personal Computing
              Festival in Atlantic City, with help from Dan Kottke
            </p>
          </div>
          <div className="Year">
            <h4 className="On">1978</h4>{" "}
            <p>
              At Apple, work starts on the Apple III and the Lisa, while Jef
              Raskin begins The Book of Macintosh
            </p>
          </div>
          <div className="Year">
            <h4 className="On">May 1980</h4>{" "}
            <p>
              Apple launches the Apple III, which will prove a disastrous flop
            </p>
          </div>
          <div className="Year">
            <h4 className="On">Jan 1983</h4>{" "}
            <p>
              Launch of the Lisa computer. The Lisa team later merges with the
              Mac team under Steve Jobs's leadership
            </p>
          </div>
          <div className="Year">
            <h4 className="On">8 Apr 1983</h4>{" "}
            <p>
              PepsiCo CEO John Sculley becomes Apple's CEO after having been
              wooed by Steve Jobs for several months
            </p>
          </div>
          <div className="Year">
            <h4 className="On">17 Sep 1985</h4>{" "}
            <p>
              Steve Jobs resigns from Apple and starts NeXT with five other
              refugees from Apple. Apple announces it will sue NeXT
            </p>
          </div>
          <div className="Year">
            <h4 className="On">Dec 1996</h4>{" "}
            <p>
              Apple, which was desperately looking for a modern operating system
              to buy, eventually buys NeXT for $400 million. Steve Jobs is named
              "informal adviser" to Apple CEO Gil Amelio
            </p>
          </div>
          <div className="Year">
            <h4 className="On">6 May 1998</h4>
            <p>
              Steve Jobs introduces Apple's revolutionary iMac at the Flint
              Center auditorium in Cupertino, 14 years after he had introduced
              the Macintosh at that same place
            </p>
          </div>
          <div className="Year">
            <h4 className="On">5 Oct 1999</h4>
            <p>
              Introduction of the iMac DVs and of iMovie, the first of Apple's
              first Digital Hub app
            </p>
          </div>
          <div className="Year">
            <h4 className="On">28 Apr 2003</h4>
            <p>
              Apple opens the revolutionary online iTunes Music Store in the US,
              after negotiating landmark deals with all major music labels
            </p>
          </div>
          <div className="Year">
            <h4 className="On">15 Jan 2008</h4>
            <p>
              At Macworld 2008, Steve Jobs introduces MacBook Air, with the
              tagline 'the world's thinnest notebook.' Three years later, it
              will come to redefine all of Apple's notebook product line
            </p>
          </div>
          <div className="Year">
            <h4 className="On">24 Aug 2011</h4>
            <p>
              Steve Jobs resigns as CEO of Apple, with the words 'I have always
              said if there ever came a day when I could no longer meet my
              duties and expectations as Apple's CEO, I would be the first to
              let you know.{" "}
            </p>
          </div>
          <div className="Year">
            <h4 className="On">5 Oct 2011</h4>{" "}
            <p>Steve Jobs dies at home, surrounded by his family</p>
          </div>
        </div>

        <div className="Author">
          <img src={image2} className="Author-image" alt="image" />

          <div className="Para">
            <div className="Jil">
              <h6 className="Off">Born</h6>{" "}
              <p className="Ner">
                Steve Paul Jobs February 24, 1955 San Francisco, California,
                U.S.{" "}
              </p>
            </div>
            <div className="Jil">
              <h6 className="Off">Died</h6>{" "}
              <p className="Ner">
                October 5, 2011 (aged 56) Palo Alto, California,US.
              </p>
            </div>
            <div className="Jil">
              <h6 className="Off">Occupation</h6>{" "}
              <p className="Ner">
                Co-founder, Chairman, and CEO of Apple Inc. Primary investor and
                CEO of Pixar founder and CEO of NeXT
              </p>
            </div>
            <div className="Jil">
              <h6 className="Off">Parents</h6>{" "}
              <p className="Ner">
                Paul Jobs (adoptive father) Clara Jobs (adoptive mother)
                Abdulfattah Jandali (biological father) Joanne Schieble Simpson
                (biological mother)
              </p>
            </div>
            <div className="Jil">
              <h6 className="Off">Children</h6>{" "}
              <p className="Ner">
                with Brennan; Lisa Brennan (b.1978) with Powell; Reed Jobs
                (b.1991) Erin Jobs (b.1995) Eve Jobs (b.1998)
              </p>
            </div>
            <div className="Jil">
              <h6 className="Off">Cause of death</h6>{" "}
              <p className="Ner">Pancreatic cancer and respiratory arrest</p>
            </div>
          </div>
        </div>
      </div>

      <footer className="End">
        <p className="Bichig">
          "Have the courage to follow your heart and intuition. They somehow
          know what you truly want to become."
        </p>
        <h3 className="Steve">-STEVE JOBS</h3>
        <p className="Link">
          Do read more about this impeccable personality here.
        </p>
      </footer>
    </div>
  );
}

export default App;