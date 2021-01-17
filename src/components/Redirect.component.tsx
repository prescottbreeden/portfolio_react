import React, { useEffect, useState } from 'react';
import { Redirect, useLocation } from 'react-router-dom';
import { equals } from '../utils';

interface RedirectProps {}
export const RedirectComponent: React.FC<RedirectProps> = () => {
  // -- dependencies --
  const { pathname } = useLocation();

  // -- local state --
  const [shouldRedirect, setShouldRedirect] = useState<boolean>(false);

  // -- lifecycle --
  useEffect(() => {
    equals('/', pathname) && setShouldRedirect(true);
  }, [pathname]);

  // -- display logic --
  return shouldRedirect ? <Redirect to="/about" /> : null;
};
