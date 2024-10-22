"use client"
import React from 'react'

const Sidebar = () => {
    const [showProjects, setShowProjects] = React.useState(true);
    const [showPriority, setShowPriority] = React.useState(true);

    const sidebarClassNames = 'fxed flex-col h-[100%] justify-between shadow-xl transition-all duration-300 h-full z-40 dark:bg-black overflow-y-auto bg-white w-64';
  return (
    <div className={sidebarClassNames}>
        <div className='flex h-[100%] w-full flex-col justify-start'>
            <div className='z-50 flex h-16 w-full items-center justify-between bg-white px-4 py-3 dark:bg-dark-bg'>
                <div className='text-xl font-bold text-gray-800 dark:text-white'>
                    EDLIST
                </div>
            </div>
        </div>
    </div>
  )
}

export default Sidebar