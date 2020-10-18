import React,{useState, useEffect} from 'react'

export default function index() {
  const [story, setStory] = useState('fdfdf')
  useEffect(()=>{
    console.log(story)
  },[story])
  return (
    <div>
    <div id='editable' onChange={e=>setStory(e.currentTarget.innerHTML)} contentEditable='true'>
      fuckers always taking about fucking chutia
    </div>
    <div>{story}</div>
    </div>
  )
}
