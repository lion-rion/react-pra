import React, { useState } from 'react'

const TypeSwitch = () => {
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
    <>
    <div class="inline-flex rounded-md shadow-sm">
      <button onClick={changeType} style={{ backgroundColor: type ? 'orange' : 'white' }} value="yaml" type="button" class="py-3 px-4 inline-flex justify-center items-center gap-2 -ml-px first:rounded-l-lg first:ml-0 last:rounded-r-lg border font-medium bg-white text-gray-700 align-middle hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all text-sm dark:bg-gray-800 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400">
        Small
      </button>
      <button onClick={changeType2} type="button" style={{ backgroundColor: type2 ? 'orange' : 'white' }} class="py-3 px-4 inline-flex justify-center items-center gap-2 -ml-px first:rounded-l-lg first:ml-0 last:rounded-r-lg border font-medium bg-white text-gray-700 align-middle hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all text-sm dark:bg-gray-800 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400">
        Small
      </button>
    </div>
    </>
  )
}

export default TypeSwitch
