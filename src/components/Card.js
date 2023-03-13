import React from 'react'

const Card = (props) => {
  return (
    <li class="w-full my-2 inline-flex items-center gap-x-3.5 py-3 px-4 text-sm font-medium bg-white border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-gray-800 dark:border-gray-700 dark:text-white">
      <div class="w-full justify-between">
        <i class={props.icon + " fa-solid"}></i>
        <span class="ml-4">{props.name}</span>
      </div>
      <i class="fa-solid fa-bars"></i>
    </li>
  )
}

export default Card