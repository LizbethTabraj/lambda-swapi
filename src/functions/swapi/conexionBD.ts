
import { BD }  from '../swapi/config';
const AWS = require('aws-sdk');
import { v1 as uuidv1 } from 'uuid';

export const getPeopleCloud = async () => {
   try {
    
    AWS.config.update(BD.aws_remote_config);

    const docClient = await new AWS.DynamoDB.DocumentClient();

    const params = {
        TableName: BD.aws_table_name
    };

    return await docClient.scan(params).promise();
    
   } catch (error) {
    console.log(error)
   }
}

export const addPersonCloud = async (req) => {

    try {
    
    const result= {data:'Se regitro persona'}
   
    AWS.config.update(BD.aws_remote_config);
    const docClient = new AWS.DynamoDB.DocumentClient();
    const Item = { ...req.body };
    
    const id = uuidv1();
    Item.id=id;
    
    var params = {
        TableName: BD.aws_table_name,
        Item: Item
    };
    
    await docClient.put(params).promise();
    return result
    } catch (error) {
        console.log(error)
    }
   
    
    
}

