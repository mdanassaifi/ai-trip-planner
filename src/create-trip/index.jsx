import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { AI_PROMPT, SelectBudgetOptions, SelectTravelesList } from '@/constant/options';
import { chatSession } from '@/service/AIModal';
import React from 'react'
import GooglePlacesAutocomplete from 'react-google-places-autocomplete'
import { replace } from 'react-router-dom';
import { toast } from 'sonner';


function CreateTrip() {
  const [place,setPlace] = React.useState(null)

  const [FormData,setFormData] = React.useState({});
  const [openDialog,setOpenDialog] = React.useState();
  const handleInputChange = (name,value) => {

  
    setFormData({ 
      ...FormData,
      [name]:value
    })
  } 

  React.useEffect(()=>{
    console.log(FormData);
  },[FormData])

  const OnGenerateTrip=async()=>{
    
    const user=localStorage.getItem('user ');

    if(!user)
    {
      return;
    }



    if((FormData?.noOfDays>5&&FormData?.location)||!FormData?.budget||!FormData?.people)
    {
      toast("Please fill all details")

      return;
    }

    const FINAL_PROMPT=AI_PROMPT
    .replace('{location}',FormData?.location?.label)
    .replace('{totalDays}',FormData?.noOfDays)
    .replace('{people}',FormData?.people)
    .replace('{budget}',FormData?.budget)
    .replace('{totalDays}',FormData?.noOfDays)

    console.log(FINAL_PROMPT);

    const result=await chatSession.sendMessage(FINAL_PROMPT);
    
    console.log(result?.response.text());
    
    
  } 




  return (
    <div className='sm:px-10 md:px-32 lg:px-56 xl:pl-72 px-5 mt-10'>
      <h2 className='font-bold text-3xl'>Tell us your Travel Preferences 🎋</h2>
      <p className='mt-3 text-gray-500 text-xl'>Just Provide some basic information, and our trip planner will generate a customized itinerary based on your Preferences.</p>
    
     <div className='mt-20 flex flex-col gap-8'>

      <div> 
        <h2 className='text-xl my-3 font-medium'>What is Destination of Choice ? 🎯</h2>
     
        <GooglePlacesAutocomplete
          apiKey={import.meta.env.VITE_GOOGLE_PLACE_API_KEY}
          selectProps={{
            place,
            onChange:(v)=>{setPlace(v); handleInputChange('location',v)},
          }}
       
       />
      </div>
            <div> <h2 className='text-xl my-3 font-medium'>How many Days are you planning your trip ? 🎒🏕️📸</h2> 
              <Input placeholder={'Minimum-5'} type="Number"  
             onChange={(e)=>handleInputChange('noOfDays',e.target.value)}
            />
            </div>
    
      

      <div>
        <h2 className='text-xl my-3 font-medium '>What is Your Budget ?</h2>
        <div className='grid grid-cols-3 gap-5 mt-5'>
          {SelectBudgetOptions.map((item,index)=>(
            <div key={index}
              onClick={()=>handleInputChange('budget',item.title)} 
            className={`p-4 border cursor-pointer rounded-lg hover:shadow-lg
            ${FormData.budget == item.title && 'shadow-lg border-black'}
            `}>
              <h2 className='text-4xl'>{item.icon}</h2>
              <h2 className='font-bold text-lg'>{item.title}</h2>
              <h2 className='text-sm text-gray-500'>{item.desc}</h2>
            </div>
          ))}
        </div>
       </div>

          <div>
        <h2 className='text-xl my-3 font-medium'>Who do you Plan on travelling with on your next Adventure ? 🧐</h2>
            <div className='grid grid-cols-3 gap-5 mt-5'>
          {SelectTravelesList.map((item,index)=>(
            <div key={index} 
              onClick={()=>handleInputChange('people',item.people)}
            className={`p-4 border cursor-pointer rounded-lg 
            hover:shadow-lg
            ${FormData.people == item.people && 'shadow-lg border-black'}
            `}>
              <h2 className='text-4xl'>{item.icon}</h2>
              <h2 className='font-bold text-lg'>{item.title}</h2>
              <h2 className='text-sm text-gray-500'>{item.desc}</h2>
            </div>
                 ))}
             </div>


         </div>
       </div>
                  <div className='my-10 justify-end flex' >
                     <Button onClick={OnGenerateTrip}> Generate trip </Button>
                    </div>
                 



    </div>  
  )
}

export default CreateTrip