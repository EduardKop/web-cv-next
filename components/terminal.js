import Typed from 'typed.js';
import React from 'react';

const TypedTerminal = () => {
	// Create reference to store the DOM element containing the animation
	const el = React.useRef(null);
  // Create reference to store the Typed instance itself
	const typed = React.useRef(null);

  React.useEffect(() => {
    const options = {
    	strings:['npm <span class="text">i next react reat-dom typescript</span>^1000\n `installing components...` ^1000\n `Installing packages....`^1000\n`Success!`^1000\n`Happy hacking!`^1000\nnpm <span class="text">i -D eslint eslint-config-next prettier</span>^1000\n`Success!`^1000\nnpm <span class="text">npm i --save-dev @babel/core @babel/cli @babel/node</span>^1000\n`Success!`^1000\nnpm <span class="text">i redux react-redux prop-types</span>^1000\n`🚀`^1000\n'],
      typeSpeed: 40,
      backSpeed: 0,
      loop: true
    };
    
    // elRef refers to the <span> rendered below
    typed.current = new Typed(el.current, options);
    
    
    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      typed.current.destroy();
    }
  }, [])
  let symb = '>'
  return (
    
      <div className="terminal-window">
  <header>
    <div className="button green"></div>
    <div className="button yellow"></div>
    <div className="button red"></div>
  </header>
  <section className="terminal">
    <div className="history"></div>
    {symb} <span className='startSimbol'>$</span>
    &nbsp;<span className="prompt"></span>
    <span className="typed-cursor">
    <h1></h1>
    </span>
    <div className="type-wrap">
  <span style={{ whiteSpace: 'pre' }} ref={el} />
</div>
  </section>
</div>
    
    
     
  );
}


export default TypedTerminal