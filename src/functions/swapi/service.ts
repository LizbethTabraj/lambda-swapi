
import { env } from 'process';

import fetch from 'node-fetch';



export const getPeople = async()=>{

    try {
        const url = env.API_SWAPI;        
        const body = await fetch(url+'people/').then( response => {return response.json()});
        return  body;
      } catch (error) {
        console.error(error);
      }

}

export const getPerson = async(req)=>{

  try {

      const id= req.pathParameters.id;
      const url = env.API_SWAPI;
      const body = await fetch(url+'people/'+id+'/').then( response => response.json());
      return body;

    } catch (error) {
      console.error(error);
    }

}