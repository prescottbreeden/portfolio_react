import React, { useState } from 'react';
import blueCube from '../assets/img/cube_primary.png';
import angular from '../assets/img/tlogos/angular.png';
import csharp from '../assets/img/tlogos/csharp.png';
import css from '../assets/img/tlogos/css.png';
import dapper from '../assets/img/tlogos/dapper.png';
import dotnet from '../assets/img/tlogos/dotnet.png';
import electron from '../assets/img/tlogos/electron.png';
import elm from '../assets/img/tlogos/elm.png';
import express from '../assets/img/tlogos/express.png';
import flask from '../assets/img/tlogos/flask.png';
import fsharp from '../assets/img/tlogos/fsharp.png';
import git from '../assets/img/tlogos/git.png';
import graphQL from '../assets/img/tlogos/graphQL.png';
import haskell from '../assets/img/tlogos/haskell.png';
import html from '../assets/img/tlogos/html.png';
import javascript from '../assets/img/tlogos/javascript.png';
import linux from '../assets/img/tlogos/linux.png';
import mongodb from '../assets/img/tlogos/mongodb.png';
import mongoose from '../assets/img/tlogos/mongoose.png';
import mssql from '../assets/img/tlogos/mssql.png';
import mysql from '../assets/img/tlogos/mysql.png';
import nodejs from '../assets/img/tlogos/nodejs.png';
import python from '../assets/img/tlogos/python.png';
import react from '../assets/img/tlogos/react.png';
import redux from '../assets/img/tlogos/redux.png';
import sass from '../assets/img/tlogos/sass.png';
import typescript from '../assets/img/tlogos/typescript.png';
import yarn from '../assets/img/tlogos/yarn.png';
import vim from '../assets/img/tlogos/vim.png';
import { TECH_FAVE } from '../constants';
import {
  compose,
  curry,
  doNothing,
  either,
  equals,
  identity,
  prop,
} from '../utils';

interface HoneyCombProps {}
export const HoneyComb: React.FC<HoneyCombProps> = (props) => {
  const images: any = {
    angular,
    blueCube,
    csharp,
    css,
    dapper,
    dotnet,
    electron,
    elm,
    express,
    flask,
    fsharp,
    git,
    graphQL,
    haskell,
    html,
    javascript,
    linux,
    mongodb,
    mongoose,
    mssql,
    mysql,
    nodejs,
    python,
    react,
    redux,
    sass,
    typescript,
    vim,
    yarn,
  };

  // -- local state --
  const [selected, setSelected] = useState<string>('blueCube');

  // -- component logic --
  const handleClick = (tech: string) => {
    setSelected(tech);
  };
  const handleKeyPress = curry((tech: string, event: any) =>
    compose(
      either(() => handleClick(tech), doNothing),
      equals('Enter'),
      prop('key')
    )(event)
  );

  // -- display logic --
  const getImg = compose(either(identity, blueCube), prop(selected));

  const getDescription = compose(prop('description'), prop(selected));

  return (
    <>
      <section className="tech">
        <h2 className="tech__header">Some of My Favorite Tech</h2>
        <ul className="grid clear">
          {Object.keys(TECH_FAVE).map((tech: any, i: number) => {
            return (
              <li key={i} className="hex-container">
                <p
                  className={`hexagon img-${i + 1} tech__animate-${i + 1}`}
                  onClick={() => handleClick(tech)}
                  onKeyPress={handleKeyPress(tech)}
                  tabIndex={0}
                >
                  <span className="transparent">${tech}</span>
                </p>
              </li>
            );
          })}
        </ul>
        <div className="tech__details">
          <div className="tech__details--container">
            <div className="tech__logo-box">
              <div className="tech__logo-pad">
                <div className="tech__logo" id="tech_image">
                  <img
                    alt="tech cube"
                    height="auto"
                    src={getImg(images)}
                    width="auto"
                  />
                </div>
              </div>
            </div>
            <div className="tech__explain" id="blurb">
              {equals('blueCube', selected) ? (
                <p>
                  Click on a logo above to learn more about some of my favorite
                  tech!
                </p>
              ) : (
                <p>{getDescription(TECH_FAVE)}</p>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
