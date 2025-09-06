import { useEffect } from 'react'

export default function useTitleChange(title) {
    useEffect(()=>{
        document.title=`${title} Filminfo`;
    },[title])
  return null;
}
