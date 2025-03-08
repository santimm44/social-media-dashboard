import React, { useEffect, useState } from "react";

export const LargeCards = (prop) => {
  
  const [color, setColor]=useState();
  
  
  useEffect(() => {
    //console.log(prop.socialInfo.color ? setColor("border-t-"+ prop.socialInfo.color): setColor("border-t-red"))
    //prop.socialInfo.color ? console.log(color):console.log("null")
    
    setColor("border-t-"+prop.socialInfo.color)
  }, [])
  
  return (
    <div className={`bg-cardBackground border-t-4 ${prop.socialInfo.color !="instagram" ? null : prop.socialInfo.color } ${prop.socialInfo.color !="twitter" ? null : "border-t-twitter"} ${prop.socialInfo.color !="youtube" ? null : "border-t-youtube"} ${prop.socialInfo.color !="facebook" ? null : "border-t-facebook"} p-[1.5rem_4rem] flex flex-col items-center gap-y-4`}>
      <header className="flex gap-x-2">
        <img className="h-auto w-full" src={prop.socialInfo.SocialMediaIcon} alt="Social Media Icon" />
        <h3 className="text-textColor text-center w-2/3 overflow-clip">{prop.socialInfo.UserName}</h3>
      </header>
      <div className="text-center">
        <h1 className="font-bold text-4xl">{prop.socialInfo.Followers}</h1>
        <h3 className="text-textColor text-center tracking-[.175rem] ">{prop.socialInfo.FollowingType}</h3>
      </div>
      <div className="flex items-baseline">
        <img className="h-[1vh] w-auto" src={prop.socialInfo.ArrowIcon} alt="" />
        <h4 className="text-limeGreen text-center">{prop.socialInfo.TotalChange}</h4>
      </div>
    </div>
  );
};
