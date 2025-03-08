import { useEffect, useState } from "react";
import "./App.css";
import { LargeCards } from "./components/LargeCards";
import { SmallCards } from "./components/SmallCards";
import { ToggleTheme } from "./components/ToggleTheme";
import { socialMediaData } from "./Services/DataService";
import "./index.css"

function App() {
  const [socialData, setSocialData] = useState({});
  const[toggleState, setToggleState]= useState("")

  useEffect(()=>{
    setToggleState("dark")
    getData()
  },[])

  const getData = async ()=>{
    const dummyVariable = await socialMediaData()
    setSocialData(dummyVariable);
  }

  const toggleMode = ()=>{
    if(toggleState == "dark"){
      setToggleState("light")
    }
    else{
      setToggleState("dark")
    }
  }


  return (
    <>
      <div className={`${toggleState} h-screen max-md:h-full w-screen overflow-auto inter`}>
        <div className="bg-topBackground h-1/3 text-whiteText">
          <header className="flex justify-between p-[3rem_5rem]">
            <div>
              <h1 className="text-4xl">Social Media Dashboard</h1>
              <h3 className="text-textColor">Total Followers: 23,004</h3>
            </div>
            <div className="flex gap-x-4">
              <p className="text-textColor">Dark Mode</p>
              <ToggleTheme onClick={toggleMode} />
            </div>
          </header>
          <section className="grid md:grid-cols-4 gap-7 p-[0rem_5rem] mt-[1rem]">
            {socialData.Following ? socialData.Following.map((data, index)=>{
              return(
                <LargeCards socialInfo={data}/>
              )
            }) : null}
          </section>
        </div>


        <div className="bg-background h-2/3 text-whiteText pt-32">
          <header className="p-[2rem_5rem]">
            <h2 className="text-4xl">Overview - Today</h2>
          </header>

          <section className="grid md:grid-cols-4 gap-7  p-[0rem_5rem] ">
          {socialData.Overview ? socialData.Overview.map((data, index)=>{
              return(
                <SmallCards index={index} socialInfo={data}/>
              )
            }) : null}
          </section>
        </div>
      </div>
    </>
  );
}

export default App;
