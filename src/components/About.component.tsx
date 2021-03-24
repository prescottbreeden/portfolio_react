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
              proficient in Microsoft stacks using C# and F# and my first great
              love was Python. I am experienced in designing SQL, noSQL, and
              GraphQL data architecture. I am an open-source contributor. I am
              passionate about software design and functional programming, and
              from time to time, I like to blog about it.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
