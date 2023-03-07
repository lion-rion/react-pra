import React, { useState } from 'react';

const Toggle = () => {
  const [boolState, setBoolState] = useState(false)
  const handleCheckboxClick = () => setBoolState(!boolState)
  return (
    <>
      <div class="flex items-center">
        <input checked={boolState} type="checkbox" onChange={handleCheckboxClick} id="hs-basic-with-description-unchecked" class="relative shrink-0 w-[3.25rem] h-7 bg-gray-100 checked:bg-none checked:bg-blue-600 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 border border-transparent ring-1 ring-transparent ring-offset-white appearance-none dark:bg-gray-700 dark:checked:bg-blue-600

        before:inline-block before:w-6 before:h-6 before:bg-white checked:before:bg-blue-200 before:translate-x-0 checked:before:translate-x-full before:shadow before:rounded-full before:transform before:ring-0 before:transition before:ease-in-out before:duration-200 dark:before:bg-gray-400 dark:checked:before:bg-blue-200"/>
        <label for="hs-basic-with-description-unchecked" class="text-sm text-gray-500 ml-3 dark:text-gray-400">indent 4</label>
      </div>
    </>
  );
}

export default Toggle