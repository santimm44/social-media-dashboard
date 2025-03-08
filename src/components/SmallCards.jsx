import React from 'react'

export const SmallCards = (props) => {
 
  return (
    <div className='bg-cardBackground rounded-md p-7 flex flex-col gap-y-7'>
        <div className='flex justify-between'>
            <h4 className="text-textColor">{props.socialInfo.Header}</h4>
            <img src={props.socialInfo.SocialMediaIcon} alt="SocialMedia ICon" />
        </div>
        <div className='flex justify-between'>
            <h1 className='font-bold text-2xl'>{props.socialInfo.Number}</h1>
            <div className='flex items-baseline'>
                <img className="h-[1vh] w-auto" src={props.socialInfo.ArrowIcon} alt="Arrow Icon" />
                <h4 className='text-limeGreen w-2/3 overflow-x-clip'>{props.socialInfo.TotalChange}</h4>
            </div>
        </div>
    </div>
  )
}
