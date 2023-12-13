=> React after compilation converts into HTML+CSS+JS, browser ko HTML+CSS+JS hi samjh aati hai.
=> React makes easy to manage and buil complex froentnd where we are handling state changes in multiple componenets.
=>React actually helps us to update the UI, on 1 variable change it reacts on many places.

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

1. components extension should be .jsx
2. Componenet name should be start from capital letter.
3. JSX will return only one element, so [<></>] called fragments used, inside this other elements used.

Injection of js file into index.html
=>In CRA, react-script injects it behind the scene into index.html
=>But In Vite, it directly added into index.html using script tag

Why it is called SPA
=> becuase here is only 1 index.html file and only one root element fetched by DOM, we are manipulating it only, so it is SPA without any refresh

\***\*\*\*\*\***\*\*\*\*\***\*\*\*\*\***index.html me jo div create krte h, use main.jsx [jo main js file hoti h], usme target krte h by using DOM, or uss div me apne componenets ko render krwate h using render methods**\*\***\*\***\*\***

=>In react, using {} we can evaluate the JavaScript values or output dynamically, {} = Evaluated expression

=> onClick={addValue} is correct not {addValue()}, becuase we want to execute it on click, not with the code

=> Hooks are like functions, every hook responsible for performing a particular task.
=> UseState() = it is responsible for the propogation of changed variables on UI
Usage-
const [counter, setCounter]= useState()
-> setCounter is a function for updating counter variable, in useState() here we can give anything for initialization, this will initialize counter variable
-> It acts as a bridge, whatever the changes happens in variable, it propogate on UI

\***\*\*\*\*\***\*\*\***\*\*\*\*\***Virtual DOM(abb use ni hota, but padhna zaruri h)**\*\***\***\*\***

createRoot() creates a DOM (tree) like structure behind the scene, it creates virtual DOM to compare it with the main DOM, and update only the changes happening (not the full DOM), thats why it doesn't refreash page everytime.
Whereas the DOM of Browser, repaint the whole DOM on every reload

So, Js creates DOM to track the changes aand the replace the changes constantly, called Virtual DOM
But if there too many updated send on network oneafter another then it is not good, to optimizely manage Virtual DOM for this, we use React Fiber.

=>React Fibre helps us in updating UI, if there are muliple updates, then it will directly update the UI by final update.
=>Other key features include the ability to pause, abort, or reuse work as new updates come in; the ability to assign priority to different types of updates; and new concurrency primitives.

=> Hydration is the process, when the page loads the button and images loaded first, but they didn't work then when the JS injects then it will work, the process of injecting JS called hydration.

=> Reconciliation
The algorithm React uses to diff one tree with another to determine which parts need to be changed.
Reconciliation is the algorithm behind what is popularly understood as the "virtual DOM."

\***\*\*\*\*\***Props
=> Props are read-only data passed down from parent component to child component,likw we used Card components in App Component, so we can send data into Card Component from App Componenet using props.
=>In function we have the access of props
=> They are immutable and cannot change their value once they have been assigned

<!-- useCallBack (Memoization Technique) -->

=>useCallback is a React Hook that lets you cache a function definition between re-renders.
agar koi function repeat ho rh h, to use cache me rakh lo jitna har baar run ho rha hisse memory save hoti h
research more

Memoization is a technique that can be used to improve the performance of React applications. It works by caching the results of previous function calls, so that if the same function is called with the same arguments, the results can be returned immediately without having to recalculate them.

<!-- //useEffect() -->

Reloads the page on every change, has function and dependencies two args

<!-- useRef( Hooks) -->

=>used to take refrences,
=>to get refrence, jha se bhi chaniye usme ref={} attribute lgana hoga
=>can have any default value

\***\*\*\*\*\*\*\***\*\***\*\*\*\*\*\*\***Lec 12\***\*\*\*\*\***\*\*\***\*\*\*\*\***
REACT ROUETR DOM

=> it is a third party package
=>we have to install it
=>gives us features like link, navlink

=>Link- it used in place of a tag, a tag should not be used in react, it refreshes the page on every load
link, a tag types kaam krta h, khudk attributes n all use krk
it uses to in place of href

=>NavLink
