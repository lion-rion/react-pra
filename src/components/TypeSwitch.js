import React, { useState } from 'react'

const TypeSwitch = (props) => {
  const [ChildIndent,setIndent] = useState(props.item1);
  const [type, setType] = useState(true);
  const [type2, setType2] = useState(false);
  const changeType = (e) => {
    setIndent(e.target.value);
    setType(true);
    setType2(false);
  }
  props.setIndent(ChildIndent);

  const changeType2 = (e) => {
    setIndent(e.target.value); 
    setType(false);
    setType2(true);
  }
  
  return (
    <div class="mx-3">
      <div class="opacity-50 text-xs">{props.name}</div>
      <div class="inline-flex rounded-md shadow-sm ">
        <button onClick={changeType} style={{ backgroundColor: type ? '#E6F1FE' : 'white' }} value={props.item1} type="button" class="py-2 px-4 inline-flex justify-center items-center gap-2 -ml-px first:rounded-l-lg first:ml-0 last:rounded-r-lg border font-medium bg-white text-gray-700 align-middle hover:bg-gray-50 focus:z-10 focus:outline-none transition-all text-sm dark:bg-gray-800 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400">
        {props.item1}
        </button>
        <button onClick={changeType2} style={{ backgroundColor: type2 ? '#E6F1FE' : 'white' }} value={props.item2} type="button" class="py-2 px-4 inline-flex justify-center items-center gap-2 -ml-px first:rounded-l-lg first:ml-0 last:rounded-r-lg border font-medium bg-white text-gray-700 align-middle hover:bg-gray-50 focus:z-10 focus:outline-none transition-all text-sm dark:bg-gray-800 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400">
        {props.item2}
        </button>
      </div>
    </div>
  )
}

export default TypeSwitch
