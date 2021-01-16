import React, { CSSProperties } from 'react';
import { ICON_TABLE } from '../constants';
import { map, randomString, safeGet } from '../utils';

type IconComponentProps = {
  name: string;
  className: string;
  style?: CSSProperties;
};

export const Icon: React.FC<IconComponentProps> = (props) => {
  const { className, name, style = {} } = props;
  const icon = ICON_TABLE[name] ? ICON_TABLE[name] : ICON_TABLE['profile'];
  const get = safeGet(icon);

  const path = (d: string) => <path d={d} key={randomString()} />;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={get('viewBox')}
      role="img"
      aria-label={name}
      className={className}
      style={style}
    >
      <title>{name}</title>
      {map(path, get('paths'))}
    </svg>
  );
};
