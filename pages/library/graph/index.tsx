import Link from 'next/link';
import React from 'react';
import ElementGraph from '../../../src/components/Library/ElementGraph'


function Graph() {



    return <div >    
    <Link style={{textAlign:"center"}} href={'/library'}>
    Library
</Link>
  <ElementGraph></ElementGraph>
</div>
  }
  
  export default Graph
  