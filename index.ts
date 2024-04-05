import { middyfy } from './src/libs/lambda';
import { Context, APIGatewayProxyResult, APIGatewayEvent } from 'aws-lambda';
import {getPeople, getPerson } from './src/functions/swapi/service';
import { addPersonCloud ,getPeopleCloud} from './src/functions/swapi/conexionBD';


export const handler = async (event: APIGatewayEvent, context: Context): Promise<APIGatewayProxyResult> => {

  try {

    let result;
    console.log('context')
    console.log(context)

    switch(event.resource){
      case '/swapi/person/{id}': result = await getPerson(event);
      break;
      case '/swapi/people': result = await getPeople();
      break;
      case '/cloud/person': result = await addPersonCloud(event);
      break;
      case '/cloud/people': result = await getPeopleCloud();
      break;
    
    }

    //let result2=result.map(e=>e )
    
    return {
      statusCode: 200,
      body: JSON.stringify(result),
    };
    
  } catch (error) {
    console.log('hablder error :'+ error)
    return  {
      statusCode: 501,
      body: JSON.stringify(error),
    };
    
  }
    
};

