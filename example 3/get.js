import * as dynamoDbLib from "./libs/dynamodb-lib";
import { success, failure, NotFound } from "./libs/response-lib";

export async function main(event, context, callback) {
  const params = {
    TableName: "notes",
    // 'Key' defines the partition key and sort key of the item to be retrieved
    // - 'userId': Identity Pool identity id of the authenticated user
    // - 'noteId': path parameter
    Key: {
      userId: event.requestContext.identity.cognitoIdentityId,
      noteId: event.pathParameters.id
    }
  };

  try {
    const result = await dynamoDbLib.call("get", params);
    if (result.Item) {
      // Return the retrieved item
      callback(null, success(result.Item));
    } else {
      callback(null, NotFound({ status: false, error: "Item not found." }));
    }
  } catch (error) {
    callback(null, failure({ status: false, error }));
  }
}
