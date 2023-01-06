import Link from 'next/link';
import React from 'react';
import Library from '../../src/components/Library/Library';


function Lib() {



    return <div style={{textAlign:"center"}}>                    
    <Link href={'/'}>
    Back to Game
</Link>
{" "}
<Link href={'/library/graph'}>
    to Graph
</Link>
<Library/>



</div>
  }
  
  export default Lib
  