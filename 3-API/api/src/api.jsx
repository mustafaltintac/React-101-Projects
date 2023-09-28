import axios from "axios"; 
const serachImages= async (term) =>{
    const response =  await axios.get('https://api.unsplash.com/search/photos',{
        headers:{
          Authorization:'Client-ID sByASW5YjwzfN_5Y1okhJl_fokJI31TAdcW4T_ktW6c'
        },
        params:{
          query:term
        }
      })
      return response.data.results;
    };
    export default serachImages