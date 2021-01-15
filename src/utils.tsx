/**
*  Converts a string with pixel measurement into a parsed number. By default
*  this function will grab the fontSize of the document body.
*  @param size string optional pixel size e.g. "42px"
*  @returns the current computed fontsize for manual REM calculations
*/
export const pixelSize = (size = getComputedStyle(document.body).fontSize) => {
    return size ? parseFloat(size.split('px')[0]) : 1;
  };

export const headerHeight = pixelSize() * 3;
/**
 * Scrolls the window to an element
 * @param element the element to scroll to
 * @param behavior how you want it to scroll
 */
export const scrollToElement = (
  element: any,
  behavior: 'smooth' | 'auto' | undefined
) => {
  const { top } = element.getBoundingClientRect();
  const diff = top + window.pageYOffset;
  window.scroll({
    top: diff - 0,
    behavior: behavior,
  });
};

 /* Scrolls the window to the specified Anchors
 * @param anchor the anchor to scroll to
 * @param behavior how you want it to scroll
 */
export const scrollToAnchor = (
  anchor: string = '',
  behavior: 'smooth' | 'auto' | undefined = 'smooth'
) => {
  if (!anchor) {
    window.scroll({ top: 0, behavior: 'smooth' });
  } else {
    const divToFocus = document.getElementById(anchor);
    if (divToFocus) {
      scrollToElement(divToFocus, behavior);
    }
  }
};

export const either = curry((pred1: Function, pred2: Function, val: any) => {
  return !!val ? pred1(val) : pred2(val);
});

/**
 *  trace :: string -> a -> a
 */
export const trace = curry((msg: string, a: any) => {
  console.log(msg, a);
  return a;
});

/**
 *  identity :: a -> a
 */
export const identity = (a: any) => a;

/**
 *  prop :: String -> Object -> a
 */
export const prop = curry((p: string, obj: any) => obj[p]);

/**
 *  add :: a -> b -> a + b
 */
export const add = curry((a: any, b: any) => a + b);
/**
 *  subtract :: a -> b -> a - b
 */
export const subtract = curry((a: any, b: any) => a - b);
/**
 *  equals :: a -> a -> bool
 */
export const equals = curry((a: any, b: any) => {
  return JSON.stringify(a) === JSON.stringify(b);
});

/**
 *  gt :: a -> b -> boolean
 */
export const gt = curry((a: any, b: any) => b > a);

/**
 *  gte :: a -> b -> boolean
 */
export const gte = curry((a: any, b: any) => b >= a);

/**
 *  gt :: a -> b -> boolean
 */
export const lt = curry((a: any, b: any) => b < a);

/**
 *  map :: (a -> b) -> [a] -> [b]
 */
export const map = curry((fn: any, xs: any[]) => xs.map(fn));

/**
 *  compose :: ((a -> b), (b -> c),  ..., (y -> z)) -> a -> z
 */
export const compose = (...fns: any) => (...args: any) => 
  fns.reduceRight((res: any, fn: any) => [fn.call(null, ...res)], args)[0];

/**
 *  curry :: ((a, b, ...) -> c) -> a -> b -> ... -> c
 */
export function curry(fn: Function) {
  const arity = fn.length;

  return function $curry(...args: any): any {
    if (args.length < arity) {
      return $curry.bind(null, ...args);
    }

    return fn.call(null, ...args);
  };
}

export class Maybe {
  $value: any;

  get isNothing() {
    return this.$value === null || this.$value === undefined;
  }

  get isJust() {
    return !this.isNothing;
  }

  constructor(x: any) {
    this.$value = x;
  }

  // ----- Pointed Maybe
  static of(x: any) {
    return new Maybe(x);
  }

  // ----- Functor Maybe
  map(fn: Function) {
    return this.isNothing ? this : Maybe.of(fn(this.$value));
  }

  // ----- Applicative Maybe
  ap(f: any) {
    return this.isNothing ? this : f.map(this.$value);
  }

  // ----- Monad Maybe
  chain(fn: Function) {
    return this.map(fn).join();
  }

  join() {
    return this.isNothing ? this : this.$value;
  }

  // ----- Traversable Maybe
  sequence(of: any) {
    return this.traverse(of, identity);
  }

  traverse(of: any, fn: Function) {
    return this.isNothing ? of(this) : fn(this.$value).map(Maybe.of);
  }
}

export const maybe = (x: any) => new Maybe(x);
