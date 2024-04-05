export const BD = {
  aws_table_name: 'star-wars-people',
  aws_local_config: {
    //Provide details for local configuration
    
  },
  //seteare los valores en duro pero deberian ir en el serveless.ts para que sean jalados como parametros desde aws
  aws_remote_config: {
    accessKeyId: '------',
    secretAccessKey: '-',
    region: 'us-east-2',
  }
};


