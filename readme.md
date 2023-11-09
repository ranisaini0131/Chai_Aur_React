=> React after compilation converts into HTML+CSS+JS, browser ko HTML+CSS+JS hi samjh aati hai.
=> React makes easy to manage and buil complex froentnd where we are handling state changes in multiple componenets.

=> React is Libarary. Libraries are cool, we can change anything accoding to our need, Frameworks are like millitary, they worked as it is they were written.
=> Props in React are properties of JS.

=> npm is a node package manager, used to install packages, dependencies n all
=> npx is a node package executer, it directly executes not add or install
=> devDependencies are only used for development

=> one way to create react app :- npx create-react-app 01basicReact, but it is very slow becuase it is bulky

1. npm run start, runs the project on browser
2. npm run build, created the build folder creates and all the js code which we write in react, converts into js files and during application production time, this build folder serves to the user not src folder

=> Another way to create React app fastly, using [Vite]
npm create vite@latest
npm install, to install required dependencies or package
npm run dev
=> Vite is faster than CRA(create-react-app) because it uses esbuild instead of babel and webpack

Lec3
=>React creates its own DOM which is called Virtual DOM.
=> Whenever state changes, React re renders that part of component where change has happened.
=> React diffs old virtual dom with new virtual dom and apply patches to real DOM.

JSX
JSX stands for JavaScript XML. JSX allows us to write HTML in React. JSX makes it easier to write and add HTML in React.
=>It allows us to make custom tags.
Rules:=

1. componenets extension should be .jsx
2. Componenet name should be start from capital letter.
3. JSX will return only one element, so [<></>] called fragments used, inside this other elements used.

Injection of js file into index.html
=>In CRA, react-script injects it behind the scene into index.html
=>But In Vite, it directly added into index.html using script tag

Why it is called SPA
=> becuase here is only 1 index.html file and only one root element fetchedd by DOM, we are manipulating it only, so it is SPA without any refresh
