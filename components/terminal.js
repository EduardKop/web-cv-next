import Typed from 'typed.js';
import React from 'react';

const TypedTerminal = () => {
	// Create reference to store the DOM element containing the animation
	const el = React.useRef(null);
  // Create reference to store the Typed instance itself
	const typed = React.useRef(null);
  const usingArr = 
  [`<span class="string">JS</string><span class="white">,</string><span class="string">React</string><span class="white">,</string><span class="string">Redux</string><span class="white">,</string><span class="string">NEXT.js</string><span class="white">,</string><span class="string">HTML/CSS</string><span class="white">,</string><span class="string">Sass/Less</string><span class="white">,</string><span class="string">Flex/Grid</string><span class="white">,</string>
    <span class="string">Firebase</string><span class="white">,</string><span class="string">NodeJS</string>`]
  const learningNow = 
  [`<span class="string">Docker</string><span class="white">,</string><span class="string">MongoDB</string>`]
  const planToTeach = 
  [`<span class="string">Vue</string><span class="white">,</string><span class="string">NestJS</string>`]
  React.useEffect(() => {
    const options = {
      strings: [
        '<span class="const">const</span> <span class="variable">aboutMe</span> <span class="const">= {</span>\n' +
        '  name: <span class="string">\'Eduard Koryntyk\'</span><span class="white">,</string>\n' +
        '  age: <span class="number">25</span><span class="white">,</string>\n' +
        '  education: <span class="string">\'Computer Engineering TNEU\'</span><span class="white">,</string>\n' +
        '  skills: <span class="const">{</span>\n' +
        '    using: <span class="arr"><span class="arr">[</span>'+usingArr+'<span class="arr">]</span></span><span class="white">,</string>\n' +
        '    learningNow: <span class="arr"><span class="arr">[</span>'+learningNow+'<span class="arr">]</span></span><span class="white">,</string>\n' +
        '    planToTeach: <span class="arr"><span class="arr">[</span>'+planToTeach+'<span class="arr">]</span></span><span class="white">,</string>\n' +
        '  <span class="parentheses">}</span><span class="white">,</string>\n' +
        '<span class="const">}</span>;\n' 
      ],
      typeSpeed: 30,
      backSpeed: 0,
      loop: true,
      backDelay: 5000, // This will cause a 2 second delay before the next loop
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


