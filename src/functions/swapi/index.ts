
import { handlerPath } from '@libs/handler-resolver';


export default {
    handler: `${handlerPath(__dirname)}/handler.main`,
    timeout: 80,
    events: [
      {
        
        http: {
          method: 'get',
          path: 'swapi/person/{id}',
        },
        
      },
      {
        
        http: {
          method: 'get',
          path: 'swapi/people',
          
        },        
      },
      {
        
        http: {
          method: 'post',
          path: 'cloud/person',
          
        },
        
      },
      {
        
        http: {
          method: 'get',
          path: 'cloud/people',
          
        },
        
      }
    ],
};
