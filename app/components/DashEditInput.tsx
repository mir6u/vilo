import React from 'react'

const DashEditInput = ({ name, icon, value }: any) => {
  return (
    <div className="flex flex-col bg-[#35353e] rounded-xl cursor-pointer hover:bg-opacity-70 p-2 gap-3">
      <div className='flex-row gap-3 flex'>{icon} <p className='text-lg'>{name}</p>
      </div>
      <input type="text" value={value} placeholder={name} className='rounded-lg outline-none font-mono text-white py-2 pl-2 bg-[#595962]' />
    </div>
  )
}

export default DashEditInput