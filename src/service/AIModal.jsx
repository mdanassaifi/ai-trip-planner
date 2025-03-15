import { GoogleGenerativeAI,} from "@google/generative-ai";

  
  const apiKey = import.meta.env.VITE_GOOGLE_GEMINI_AI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
    systemInstruction: "Generate Travel Plan for Location: Las Vegas, for 3 Days for Couple with a Cheap budget, Give me a Hotels options list with HotelName, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and suggest itinerary with placeName, Place Details, Place Image Url, Geo Coordinates, ticket Pricing, rating, Time travel each of the location for 3 days with each day plan with best time to visit in JSON format.",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
  };
  
  
   export const chatSession = model.startChat({
      generationConfig,
      history: [
        {
          role: "user",
          parts: [
            {text: "Generate Travel Plan for Location: Las Vegas, for 3 Days for Couple with a Cheap budget, Give me a Hotels options list with HotelName, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and suggest itinerary with placeName, Place Details, Place Image Url, Geo Coordinates, ticket Pricing, rating, Time travel each of the location for 3 days with each day plan with best time to visit in JSON format."},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n{\n  \"hotelOptions\": [\n    {\n      \"hotelName\": \"Circus Circus Hotel & Casino\",\n      \"hotelAddress\": \"2880 Las Vegas Blvd S, Las Vegas, NV 89109\",\n      \"price\": {\n        \"min\": 30,\n        \"max\": 80\n      },\n      \"hotelImageUrl\": \"https://example.com/circuscircus.jpg\", \n      \"geoCoordinates\": {\n        \"latitude\": 36.1226,\n        \"longitude\": -115.1722\n      },\n      \"rating\": 3.5,\n      \"description\": \"A budget-friendly option with a classic Vegas vibe and free circus acts.\"\n    },\n    {\n      \"hotelName\": \"The D Las Vegas\",\n      \"hotelAddress\": \"300 Fremont St, Las Vegas, NV 89101\",\n      \"price\": {\n        \"min\": 40,\n        \"max\": 90\n      },\n      \"hotelImageUrl\": \"https://example.com/theD.jpg\",\n      \"geoCoordinates\": {\n        \"latitude\": 36.1683,\n        \"longitude\": -115.1421\n      },\n      \"rating\": 4.0,\n      \"description\": \"Downtown location with a retro feel, offering affordable rooms and easy access to Fremont Street Experience.\"\n    },\n    {\n      \"hotelName\": \"Main Street Station Casino, Brewery & Hotel\",\n      \"hotelAddress\": \"200 S Main St, Las Vegas, NV 89101\",\n      \"price\": {\n        \"min\": 35,\n        \"max\": 75\n      },\n      \"hotelImageUrl\": \"https://example.com/mainstreetstation.jpg\",\n      \"geoCoordinates\": {\n        \"latitude\": 36.1661,\n        \"longitude\": -115.1438\n      },\n      \"rating\": 3.8,\n      \"description\": \"Historic hotel in Downtown Las Vegas with a brewery and affordable rates.\"\n    }\n  ],\n  \"itinerary\": {\n    \"day1\": [\n      {\n        \"placeName\": \"Fremont Street Experience\",\n        \"placeDetails\": \"Free light show and street performers.\",\n        \"placeImageUrl\": \"https://example.com/fremontstreet.jpg\",\n        \"geoCoordinates\": {\n          \"latitude\": 36.167,\n          \"longitude\": -115.142\n        },\n        \"ticketPricing\": \"Free\",\n        \"rating\": 4.2,\n        \"timeTravel\": \"Evening (7:00 PM - 10:00 PM)\"\n      },\n      {\n        \"placeName\": \"Downtown Container Park\",\n        \"placeDetails\": \"Unique shops and restaurants in repurposed shipping containers.\",\n        \"placeImageUrl\": \"https://example.com/containerpark.jpg\",\n        \"geoCoordinates\": {\n          \"latitude\": 36.1684,\n          \"longitude\": -115.1364\n        },\n        \"ticketPricing\": \"Free entry (unless you're buying something)\",\n        \"rating\": 4.0,\n        \"timeTravel\": \"Afternoon (2:00 PM - 5:00 PM)\"\n      }\n    ],\n    \"day2\": [\n      {\n        \"placeName\": \"The Strip (walking tour)\",\n        \"placeDetails\": \"Walk along the Strip, taking in the sights and sounds of famous casinos and hotels.  Focus on free attractions like Bellagio Fountains and the Mirage Volcano.\",\n        \"placeImageUrl\": \"https://example.com/theStrip.jpg\",\n        \"geoCoordinates\": {\n          \"latitude\": 36.11,\n          \"longitude\": -115.17\n        }, \n        \"ticketPricing\": \"Free (unless you enter casinos or attractions)\",\n        \"rating\": 4.5,\n        \"timeTravel\": \"Morning (9:00 AM - 1:00 PM) & Evening (7:00 PM - 10:00 PM)\"\n      },\n      {\n        \"placeName\": \"Bellagio Fountains\",\n        \"placeDetails\": \"Spectacular water, music, and light show.\",\n        \"placeImageUrl\": \"https://example.com/bellagiofountains.jpg\",\n        \"geoCoordinates\": {\n          \"latitude\": 36.1147,\n          \"longitude\": -115.1741\n        },\n        \"ticketPricing\": \"Free\",\n        \"rating\": 4.8,\n        \"timeTravel\": \"Evening (Showtimes vary - check schedule)\"\n      }\n    ],\n    \"day3\": [\n      {\n        \"placeName\": \"Seven Magic Mountains\",\n        \"placeDetails\": \"Colorful art installation south of Las Vegas.\",\n        \"placeImageUrl\": \"https://example.com/sevenmagicmountains.jpg\",\n        \"geoCoordinates\": {\n          \"latitude\": 36.0379,\n          \"longitude\": -114.9617\n        },\n        \"ticketPricing\": \"Free\",\n        \"rating\": 4.3,\n        \"timeTravel\": \"Afternoon (1:00 PM - 4:00 PM).  Note this requires transportation outside the city center.\"\n      },\n      {\n        \"placeName\": \"Neon Museum\",\n        \"placeDetails\": \"(Optional, if budget allows).  Collection of vintage Las Vegas signs.\",\n        \"placeImageUrl\": \"https://example.com/neonmuseum.jpg\",\n        \"geoCoordinates\": {\n          \"latitude\": 36.143,\n          \"longitude\": -115.168\n        },\n        \"ticketPricing\": \"Check website for current prices (can be moderate)\",\n        \"rating\": 4.5,\n        \"timeTravel\": \"Late Morning/Early Afternoon (if visiting)\"\n      }\n\n    ]\n  }\n}\n```\n\n**Important Notes:**\n\n* **Image URLs:**  I've used placeholder URLs.  You'll need to find and replace these with actual image URLs from reliable sources.\n* **Prices:** Hotel and attraction prices are estimates and can vary significantly depending on the season and availability. Always check current prices on booking websites and official attraction sites.\n* **Transportation:**  Consider using ride-sharing services (Uber/Lyft) or the bus system to get around, as parking fees can add up. Walking is feasible for many attractions on the Strip and Downtown.\n* **Food:** This itinerary doesn't include specific meal recommendations, but you can find many affordable and diverse food options throughout Las Vegas.  Look for happy hour specials and buffets for budget-friendly meals.\n* **Heat:** Las Vegas can be extremely hot, especially during summer months.  Plan your outdoor activities for cooler parts of the day and stay hydrated.\n\n\nRemember to check the official websites for opening hours and any potential changes to ticket prices or availability before your trip.  Have a great time in Las Vegas!\n"},
          ],
        },
      ],
    });
  
    
  
 