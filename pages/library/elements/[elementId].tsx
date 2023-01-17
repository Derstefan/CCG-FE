import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import ElementPortFolio from '../../../src/components/Library/Element-portfolio';
function PortFolio() {
  const router = useRouter()

  const [elementId, setElementId] = useState(router.query.elementId);
  if(!elementId){
    return "wrong";
  }
  if(elementId!==router.query.elementId){
    setElementId(router.query.elementId);
  }
  
  

  return <div style={{textAlign:"center"}}>    <Link href={'/library'}>
  Library
</Link><ElementPortFolio elementId={elementId.toString()} /></div>

}
  
  export default PortFolio
  