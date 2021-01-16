import React from 'react';

interface AboutProps {}
export const About: React.FC<AboutProps> = () => {
  return (
    <>
      <section className="about">
        <div className="about__text-box">
          <h2 className="about__heading">Who I Am</h2>
          <p className="about__blurb">
            There is nothing - absolutely nothing - half so much worth doing as
            simply messing about in code. It has the science I crave as a
            published research scientist. It is a bottomless pit of learning
            that I crave as a teacher. The art of it that being a former opera
            singer drives me to approach the craft of programming like any great
            art form, requiring dedication and patience. And most importantly:
            there is the human factor, from the friendships of your teammates to
            the importance of improving the human experience in pragmatic,
            direct ways. In a nutshell, I am a programmer. I am a full-stack
            software engineer that specializes in JavaScript, Node, and React. I
            am proficient in Microsoft stacks using C# and F#. I have experience
            designing SQL, noSQL, and GraphQL data architecture. I am an
            open-source contributor. I am passionate about software design and
            functional programming, and from time to time, I like to blog about
            it.
          </p>
        </div>
      </section>
    </>
  );
};
