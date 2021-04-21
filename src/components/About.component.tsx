import React from 'react';

interface AboutProps {}
export const About: React.FC<AboutProps> = () => {
  return (
    <>
      <section className="about">
        <div className="about__text-box">
          <h2 className="about__heading">Who I Am</h2>
          <div className="about__blurb">
            <p>
              In a nutshell, I am a programmer. I am a full-stack software
              engineer that specializes in JavaScript, Node, and React. I am
              proficient with Microsoft stacks, Scala, and Python, and I love
              hacking Haskell, Elm and Lisp. I am experienced with designing and
              consuming SQL, noSQL, and GraphQL data. I am an open-source
              contributor. I am passionate about software design and functional
              programming, and I thrive in agile environments.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
