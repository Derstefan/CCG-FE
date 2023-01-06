import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import ElementPortFolio from '../../../src/components/Library/Element-portfolio';
function PortFolio() {
  const router = useRouter()
  const elementId = router.query.elementId;
  if(!elementId || elementId[1]){
    return "wrong";
  }

  return <div style={{textAlign:"center"}}>    <Link href={'/library'}>
  Library
</Link><ElementPortFolio elementId={elementId[0]} /></div>

}
  
  export default PortFolio
  