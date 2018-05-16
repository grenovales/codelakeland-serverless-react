const dynamoDb = new AWS.DynamoDB.DocumentClient();
const uuid = require('uuid');

exports.handler = (event, context, callback) => {
  const email = event;
  email.id = uuid.v1();
  email.createdAt = new Date().getTime();
  email.updatedAt = new Date().getTime();

  const params = {
    TableName: 'emails',
    Item: email
  };

  return dynamoDb.put(params, (error) => {
    if (error) {
      callback(error);
    }
    callback(error, params.Item);
  });
};
