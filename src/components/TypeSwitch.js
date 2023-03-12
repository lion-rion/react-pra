import React, { useState } from 'react'

const TypeSwitch = (props) => {
  const [type, setType] = useState(true);
  const [type2, setType2] = useState(false);
  const changeType = (e) => {
    setType(true);
    setType2(false);
  }

  const changeType2 = (e) => {
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
        <button onClick={changeType2} type="button" style={{ backgroundColor: type2 ? '#E6F1FE' : 'white' }} value={props.item2} class="py-2 px-4 inline-flex justify-center items-center gap-2 -ml-px first:rounded-l-lg first:ml-0 last:rounded-r-lg border font-medium bg-white text-gray-700 align-middle hover:bg-gray-50 focus:z-10 focus:outline-none transition-all text-sm dark:bg-gray-800 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400">
        {props.item2}
        </button>
      </div>
    </div>
  )
}

export default TypeSwitch
