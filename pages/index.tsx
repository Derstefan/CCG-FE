import Link from 'next/link';
import React from 'react';
import Game from '../src/components/Game';

function HomePage() {
    return <div style={{textAlign:"center"}}>    
    <Link href={'/library'}>
    Library
</Link>

<Game/></div>
  }
  
  export default HomePage
  