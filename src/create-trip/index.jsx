import React from 'react'
import GooglePlacesAutocomplete from 'react-google-places-autocomplete'

function CreateTrip() {
  return (
    <div className='sm:px-10 md:px-32 lg:px-56 xl:pl-10 px-5 mt-10'>
      <h2 className='font-bold text-3xl'>Tell us your Travel Preferences 🎋</h2>
      <p className='mt-3 text-gray-500 text-xl'>Just Provide some basic information, and our trip planner will generate a customized itinerary based on your Preferences.</p>
    
    <div className='mt-20'>

      <div> 
        <h2 className='text-xl my-3 font-medium'>What is Destination of Choice ? 🎯</h2>
     
        {/* <GooglePlacesAutocomplete
          apiKey=''
        /> */}

      </div>


    
      </div>
    </div>
    
  )
  
}

export default CreateTrip