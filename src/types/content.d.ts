declare module '*.svg' {
  const content: React.FC<React.SVGAttributes<SVGElement>> | any;
  export default content;
}

declare module '*.woff2';
declare module '*.woff';
declare module '*.ttf';

declare module '*.jpg';
declare module '*.jpeg';
declare module '*.png';
declare module '*.svg';
