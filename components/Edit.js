import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import TextareaAutosize from 'react-textarea-autosize'
import { countryList } from '@/data'

function Editprofile() {

    const [height, setHeight] = useState(Array.from({length: (120)}, (_, i) => 120 + i * 1))

    
    const [chosenLoc, setChosenLoc] = useState("");
    const [chosenGender, setChosenGender] = useState();
    const [chosenHeight, setChosenHeight] = useState();
    const [chosenSmoke, setChosenSmoke] = useState();
    const [chosenDrink, setChosenDrink] = useState();
    const [chosenChild, setChosenChild] = useState();

    const [locSelected, setLocSelected] = useState(false);
    const [genderSelected, setGenderSelected] = useState(false);

    const [bioButton, setBioButton] = useState();
    const [locButton, setLocButton] = useState();
    const [genderButton, setGenderButton] = useState();
    const [heightButton, setHeightButton] = useState();
    const [natoButton, setNatoButton] = useState();
    const [smokeButton, setSmokeButton] = useState();
    const [drinkButton, setDrinkButton] = useState();
    const [childButton, setChildButton] = useState();

    


  return (
    <div className="flex flex-col h-[100vh] w-[100vw] overflow-y-scroll scrollbar-hide">
        <div className="flex w-full h-fit p-5 text-2xl items-center">
            <div className="flex font-mono">Edit profile</div>
        </div>
        <div className="flex flex-col ">
            <div className="flex p-2"><strong>Bio</strong></div>
            {bioButton ? <TextareaAutosize placeholder="new bio here" minRows={4} className="p-1 rounded-2xl w-[100vw] px-2 text-sm border-2 border-slate-200"></TextareaAutosize>: <div className="p-2 pl-5 pb-8">bio will be rendered here </div>}

            <div className= 'flex w-auto'>
                <div className='flex text-sm align-center items-center border-1 bg-slate-100 rounded-full px-3 py-1 flex w-auto ml-4 mb-4 gap-2' onClick={() => setBioButton(true)}><Image src="/edit.png" width={20} height={17}></Image>Edit</div>
                {bioButton ? <div className='flex text-sm align-center items-center border-1 bg-red-300 rounded-full px-3 py-1 flex w-auto ml-4 mb-4 gap-2' onClick={() => setBioButton(false)}>Cancel</div> : <></>}             
                </div>
        </div>
        <div>

            <div className="flex p-2"><strong>Location</strong></div>
            {locButton ? <div className="flex flex-wrap gap-2 p-2 pl-5 pb-8">
                            {/* {locations.map((el, index) => <><input type="checkbox" id={el} className="appearance-none peer"/><label for={el} id="loc" key={index} onClick={() => setChosenLoc(el)} className="flex cursor-pointer peer-checked:bg-blue-500 hover:bg-blue-100 border-2 rounded-3xl p-1 px-2">{el}</label></>)} */}
                            
                            {/* <><input type="checkbox" id="Sydney CBD" className="appearance-none peer/sydneycbd"/><label for="Sydney CBD" id="loc" onClick={() => setChosenLoc("Sydney CBD")} className="flex cursor-pointer peer-checked/sydneycbd:bg-blue-500 hover:bg-blue-100 border-2 rounded-3xl p-1 px-2">Sydney CBD</label></>
                            <><input type="checkbox" id="check" className="appearance-none peer/innerwest"/><label for="check" id="loc" onClick={() => setChosenLoc("Inner West")} className="flex cursor-pointer peer-checked/innerwest:bg-blue-500 hover:bg-blue-100 border-2 rounded-3xl p-1 px-2">Inner West</label></>
                            <><input type="checkbox" id="check" className="appearance-none peer"/><label for="check" id="loc" onClick={() => setChosenLoc("")} className="flex cursor-pointer peer-checked:bg-blue-500 hover:bg-blue-100 border-2 rounded-3xl p-1 px-2">Sydney CBD</label></>
                            <><input type="checkbox" id="check" className="appearance-none peer"/><label for="check" id="loc" onClick={() => setChosenLoc("")} className="flex cursor-pointer peer-checked:bg-blue-500 hover:bg-blue-100 border-2 rounded-3xl p-1 px-2">Sydney CBD</label></>
                            <><input type="checkbox" id="check" className="appearance-none peer"/><label for="check" id="loc" onClick={() => setChosenLoc("")} className="flex cursor-pointer peer-checked:bg-blue-500 hover:bg-blue-100 border-2 rounded-3xl p-1 px-2">Sydney CBD</label></>
                            <><input type="checkbox" id="check" className="appearance-none peer"/><label for="check" id="loc" onClick={() => setChosenLoc("")} className="flex cursor-pointer peer-checked:bg-blue-500 hover:bg-blue-100 border-2 rounded-3xl p-1 px-2">Sydney CBD</label></>
                            <><input type="checkbox" id="check" className="appearance-none peer"/><label for="check" id="loc" onClick={() => setChosenLoc("")} className="flex cursor-pointer peer-checked:bg-blue-500 hover:bg-blue-100 border-2 rounded-3xl p-1 px-2">Sydney CBD</label></>
                            <><input type="checkbox" id="check" className="appearance-none peer"/><label for="check" id="loc" onClick={() => setChosenLoc("")} className="flex cursor-pointer peer-checked:bg-blue-500 hover:bg-blue-100 border-2 rounded-3xl p-1 px-2">Sydney CBD</label></>
                            <><input type="checkbox" id="check" className="appearance-none peer"/><label for="check" id="loc" onClick={() => setChosenLoc("")} className="flex cursor-pointer peer-checked:bg-blue-500 hover:bg-blue-100 border-2 rounded-3xl p-1 px-2">Sydney CBD</label></>
                            <><input type="checkbox" id="check" className="appearance-none peer"/><label for="check" id="loc" onClick={() => setChosenLoc("")} className="flex cursor-pointer peer-checked:bg-blue-500 hover:bg-blue-100 border-2 rounded-3xl p-1 px-2">Sydney CBD</label></>
                            <><input type="checkbox" id="check" className="appearance-none peer"/><label for="check" id="loc" onClick={() => setChosenLoc("")} className="flex cursor-pointer peer-checked:bg-blue-500 hover:bg-blue-100 border-2 rounded-3xl p-1 px-2">Sydney CBD</label></>
                            <><input type="checkbox" id="check" className="appearance-none peer"/><label for="check" id="loc" onClick={() => setChosenLoc("")} className="flex cursor-pointer peer-checked:bg-blue-500 hover:bg-blue-100 border-2 rounded-3xl p-1 px-2">Sydney CBD</label></>
                            <><input type="checkbox" id="check" className="appearance-none peer"/><label for="check" id="loc" onClick={() => setChosenLoc("")} className="flex cursor-pointer peer-checked:bg-blue-500 hover:bg-blue-100 border-2 rounded-3xl p-1 px-2">Sydney CBD</label></>
                            <><input type="checkbox" id="check" className="appearance-none peer"/><label for="check" id="loc" onClick={() => setChosenLoc("")} className="flex cursor-pointer peer-checked:bg-blue-500 hover:bg-blue-100 border-2 rounded-3xl p-1 px-2">Sydney CBD</label></>
                            <><input type="checkbox" id="check" className="appearance-none peer"/><label for="check" id="loc" onClick={() => setChosenLoc("")} className="flex cursor-pointer peer-checked:bg-blue-500 hover:bg-blue-100 border-2 rounded-3xl p-1 px-2">Sydney CBD</label></>
                            <><input type="checkbox" id="check" className="appearance-none peer"/><label for="check" id="loc" onClick={() => setChosenLoc("")} className="flex cursor-pointer peer-checked:bg-blue-500 hover:bg-blue-100 border-2 rounded-3xl p-1 px-2">Sydney CBD</label></>
                            <><input type="checkbox" id="check" className="appearance-none peer"/><label for="check" id="loc" onClick={() => setChosenLoc("")} className="flex cursor-pointer peer-checked:bg-blue-500 hover:bg-blue-100 border-2 rounded-3xl p-1 px-2">Sydney CBD</label></>
                            <><input type="checkbox" id="check" className="appearance-none peer"/><label for="check" id="loc" onClick={() => setChosenLoc("")} className="flex cursor-pointer peer-checked:bg-blue-500 hover:bg-blue-100 border-2 rounded-3xl p-1 px-2">Sydney CBD</label></>
                            <><input type="checkbox" id="check" className="appearance-none peer"/><label for="check" id="loc" onClick={() => setChosenLoc("")} className="flex cursor-pointer peer-checked:bg-blue-500 hover:bg-blue-100 border-2 rounded-3xl p-1 px-2">Sydney CBD</label></>
                            <><input type="checkbox" id="check" className="appearance-none peer"/><label for="check" id="loc" onClick={() => setChosenLoc("")} className="flex cursor-pointer peer-checked:bg-blue-500 hover:bg-blue-100 border-2 rounded-3xl p-1 px-2">Sydney CBD</label></>
                            <><input type="checkbox" id="check" className="appearance-none peer"/><label for="check" id="loc" onClick={() => setChosenLoc("")} className="flex cursor-pointer peer-checked:bg-blue-500 hover:bg-blue-100 border-2 rounded-3xl p-1 px-2">Sydney CBD</label></> */}
                            <div className="flex w-[100vw] justify-center ">
                                <select className="flex bg-white p-5 border-b-2 border-black w-full scrollbar-hide" onChange={(e) => setChosenLoc(e.target.value)}>
                                    <option>Select one</option>
                                    <option>Sydney CBD</option>
                                    <option>Inner West</option>
                                    <option>Eastern Suburbs</option>
                                    <option>South East</option>
                                    <option>Shire</option>
                                    <option>South West</option>
                                    <option>Western Sydney</option>
                                    <option>Penrith Area</option>
                                    <option>Hills District</option>
                                    <option>North Sydney</option>
                                    <option>Northern Beaches</option>
                                    <option>North Shore</option>
                                </select>                                
                            </div>
                        </div>
            
                      : 
                         
                         <div className="p-2 pl-5 pb-8">Location will be rendered here </div>}

            <div className= 'flex w-auto'>
                <div className='flex text-sm align-center items-center border-1 bg-slate-100 rounded-full px-3 py-1 flex w-auto ml-4 mb-4 gap-2' onClick={() => setLocButton(true)}><Image src="/edit.png" width={20} height={17}></Image>Edit</div>
                {locButton ? <div className='flex text-sm align-center items-center border-1 bg-red-300 rounded-full px-3 py-1 flex w-auto ml-4 mb-4 gap-2' onClick={() => setLocButton(false)}>Cancel</div> : <></>}             
                </div>
        </div>
        <div>
            <div className="flex p-2"><strong>Gender</strong></div>
            {genderButton ? 
                <div className="flex flex-wrap gap-2 p-2 pl-5 pb-8">
                    <div className="flex w-[100vw] justify-center ">
                    <select className="flex bg-white p-5 border-b-2 border-black w-full scrollbar-hide" onChange={(e) => setChosenGender(e.target.value)}>
                        <option>Select one</option>
                        <option>Female</option>
                        <option>Male</option>
                        <option>Non-binary</option>
                        <option>Other</option>
                        <option>Trans</option>
                    </select>                                
                    </div>
                </div>
            
            : <div className="p-2 pl-5 pb-8">Gender will be rendered here </div>}

            <div className= 'flex w-auto'>
                <div className='flex text-sm align-center items-center border-1 bg-slate-100 rounded-full px-3 py-1 flex w-auto ml-4 mb-4 gap-2' onClick={() => setGenderButton(true)}><Image src="/edit.png" width={20} height={17}></Image>Edit</div>
                {genderButton ? <div className='flex text-sm align-center items-center border-1 bg-red-300 rounded-full px-3 py-1 flex w-auto ml-4 mb-4 gap-2' onClick={() => setGenderButton(false)}>Cancel</div> : <></>}             
                </div>
        </div>
        
        <div>
            <div className="flex p-2"><strong>Height</strong></div>
            {heightButton ? 
                <div className="flex flex-wrap gap-2 p-2 pl-5 pb-8">
                    <div className="flex w-[100vw] justify-center ">
                    <select className="flex bg-white p-5 border-b-2 border-black w-full scrollbar-hide" onChange={(e) => setChosenHeight(e.target.value)}>
                        <option>Select</option>
                        {height.map((el, index) => <option>{el}cm</option>)}
                    </select>                                
                    </div>
                </div>
            
            : <div className="p-2 pl-5 pb-8">Height will be rendered here </div>}

            <div className= 'flex w-auto'>
                <div className='flex text-sm align-center items-center border-1 bg-slate-100 rounded-full px-3 py-1 flex w-auto ml-4 mb-4 gap-2' onClick={() => setHeightButton(true)}><Image src="/edit.png" width={20} height={17}></Image>Edit</div>
                {heightButton ? <div className='flex text-sm align-center items-center border-1 bg-red-300 rounded-full px-3 py-1 flex w-auto ml-4 mb-4 gap-2' onClick={() => setHeightButton(false)}>Cancel</div> : <></>}             
            </div>
        </div>

        <div>
            <div className="flex p-2"><strong>Nationality</strong></div>
            {natoButton ? 
                <><input placeholder="Start typing" className="flex bg-white p-5 border-b-2 border-black w-[85vw] px-2 mx-5 scrollbar-hide" list="nationalities"/>
                <datalist id="nationalities">
                    {countryList.map((el, index) => <option value={el}/>)}
                    
                </datalist></>
                :
                <div className="p-2 pl-5 pb-8">Nationality will be rendered here </div>
            }
            <div className= 'flex mt-5 w-auto'>
                <div className='flex text-sm align-center items-center border-1 bg-slate-100 rounded-full px-3 py-1 flex w-auto ml-4 mb-4 gap-2' onClick={() => setNatoButton(true)}><Image src="/edit.png" width={20} height={17}></Image>Edit</div>
                {natoButton ? <div className='flex text-sm align-center items-center border-1 bg-red-300 rounded-full px-3 py-1 flex w-auto ml-4 mb-4 gap-2' onClick={() => setNatoButton(false)}>Cancel</div> : <></>}             
            </div>
        </div>


        <div>
            <div className="flex p-2"><strong>Smoker status</strong></div>
            {smokeButton ? 
                <div className="flex flex-wrap gap-2 p-2 pl-4 pb-8">
                    <div className="flex w-[100vw]  text-sm gap-2">
                            <><input type="checkbox" id="smokeyes" className="appearance-none peer/yes"/><label for="smokeyes" id="yes" onClick={() => setChosenSmoke("Yes")} className="flex cursor-pointer peer-checked/yes:bg-blue-300 hover:bg-slate-300 border-2 rounded-3xl p-1 px-2">Yes</label></>
                            <><input type="checkbox" id="smokeno" className="appearance-none peer/no"/><label for="smokeno" id="no" onClick={() => setChosenSmoke("No")} className="flex cursor-pointer peer-checked/no:bg-blue-300 hover:bg-blue-100 border-2 rounded-3xl p-1 px-2">No</label></>
                            <><input type="checkbox" id="smokesometimes" className="appearance-none peer/sometimes"/><label for="smokesometimes" id="loc" onClick={() => setChosenSmoke("Sometimes")} className="flex cursor-pointer peer-checked/sometimes:bg-blue-300 hover:bg-blue-100 border-2 rounded-3xl p-1 px-2">Sometimes</label></> 
  
                    </div>
                </div>
            
            : <div className="p-2 pl-5 pb-8">Smoke status will be rendered here </div>}

            <div className= 'flex w-auto'>
                <div className='flex text-sm align-center items-center border-1 bg-slate-100 rounded-full px-3 py-1 flex w-auto ml-4 mb-4 gap-2' onClick={() => setSmokeButton(true)}><Image src="/edit.png" width={20} height={17}></Image>Edit</div>
                {smokeButton ? <div className='flex text-sm align-center items-center border-1 bg-red-300 rounded-full px-3 py-1 flex w-auto ml-4 mb-4 gap-2' onClick={() => setSmokeButton(false)}>Cancel</div> : <></>}             
                </div>
        </div>

        <div>
            <div className="flex p-2"><strong>Drinker status</strong></div>
            {drinkButton ? 
                <div className="flex flex-wrap gap-2 p-2 pl-4 pb-8">
                    <div className="flex w-[100vw]  text-sm gap-2">
                            <><input type="checkbox" id="drinkyes" className="appearance-none peer/yes"/><label for="drinkyes" id="yes" onClick={() => setChosenDrink("Yes")} className="flex cursor-pointer peer-checked/yes:bg-blue-300 hover:bg-blue-100 border-2 rounded-3xl p-1 px-2">Yes</label></>
                            <><input type="checkbox" id="drinkno" className="appearance-none peer/no"/><label for="drinkno" id="no" onClick={() => setChosenDrink("No")} className="flex cursor-pointer peer-checked/no:bg-blue-300 hover:bg-blue-100 border-2 rounded-3xl p-1 px-2">No</label></>
                            <><input type="checkbox" id="drinksometimes" className="appearance-none peer/sometimes"/><label for="drinksometimes" id="loc" onClick={() => setChosenDrink("Sometimes")} className="flex cursor-pointer peer-checked/sometimes:bg-blue-300 hover:bg-blue-100 border-2 rounded-3xl p-1 px-2">Sometimes</label></> 
  
                    </div>
                </div>
            
            : <div className="p-2 pl-5 pb-8">Drink status will be rendered here </div>}

            <div className= 'flex w-auto'>
                <div className='flex text-sm align-center items-center border-1 bg-slate-100 rounded-full px-3 py-1 flex w-auto ml-4 mb-4 gap-2' onClick={() => setDrinkButton(true)}><Image src="/edit.png" width={20} height={17}></Image>Edit</div>
                {drinkButton ? <div className='flex text-sm align-center items-center border-1 bg-red-300 rounded-full px-3 py-1 flex w-auto ml-4 mb-4 gap-2' onClick={() => setDrinkButton(false)}>Cancel</div> : <></>}             
                </div>
        </div>

        <div>
            <div className="flex p-2"><strong>Children</strong></div>
            {childButton ? 
                <div className="flex flex-wrap gap-2 p-2 pl-4 pb-8">
                    <div className="flex w-[100vw]  text-sm gap-2">
                            <><input type="checkbox" id="childyes" className="appearance-none peer/yes"/><label for="childyes" id="yes" onClick={() => setChosenChild("Yes")} className="flex cursor-pointer peer-checked/yes:bg-blue-300 hover:bg-blue-100 border-2 rounded-3xl p-1 px-2">Yes</label></>
                            <><input type="checkbox" id="childno" className="appearance-none peer/no"/><label for="childno" id="no" onClick={() => setChosenChil("No")} className="flex cursor-pointer peer-checked/no:bg-blue-300 hover:bg-blue-100 border-2 rounded-3xl p-1 px-2">No</label></>
  
                    </div>
                </div>
            
            : <div className="p-2 pl-5 pb-8">Childre status will be rendered here </div>}

            <div className= 'flex w-auto'>
                <div className='flex text-sm align-center items-center border-1 bg-slate-100 rounded-full px-3 py-1 flex w-auto ml-4 mb-4 gap-2' onClick={() => setChildButton(true)}><Image src="/edit.png" width={20} height={17}></Image>Edit</div>
                {childButton ? <div className='flex text-sm align-center items-center border-1 bg-red-300 rounded-full px-3 py-1 flex w-auto ml-4 mb-4 gap-2' onClick={() => setChildButton(false)}>Cancel</div> : <></>}             
                </div>
        </div>

            <div className="flex items-center justify-center p-10 text-center">          
                {bioButton || locButton || genderButton || heightButton || smokeButton || drinkButton || childButton ? <div className='flex text-lg align-center items-center border-1 bg-green-200 rounded-full px-3 py-1 flex w-auto ml-4 mb-4 gap-2'>Save Changes</div> : <></>}
            </div>

    </div>
  )
}

export default Editprofile