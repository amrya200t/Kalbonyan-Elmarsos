import * as uuid from "uuid";
import handler from "../util/handler";
import dynamoDb from "../util/dynamodb";

export const main = handler(async (event) => {
  const data = JSON.parse(event.body);
  const params = {
    TableName: process.env.TABLE_NAME,
    Item: {
      // The attributes of the item to be created
      userId: event.requestContext.authorizer.iam.cognitoIdentity.identityId, // The id of the author
      noteId: uuid.v1(), // A unique uuid
      content: data.content, // Parsed from request body
      attachment: data.attachment, // Parsed from request body
      createdAt: Date.now(), // Current Unix timestamp
    },
  };

  await dynamoDb.put(params);

  return params.Item;
});

// export async function main(event) {
//   // Request body is passed in as a JSON encoded string in 'event.body'
//   const data = JSON.parse(event.body);

//   const params = {
//     TableName: process.env.TABLE_NAME,
//     Item: {
//       // The attributes of the item to be created
//       userId: "123", // The id of the author
//       noteId: uuid.v1(), // A unique uuid
//       content: data.content, // Parsed from request body
//       attachment: data.attachment, // Parsed from request body
//       createdAt: Date.now(), // Current Unix timestamp
//     },
//   };

//   try {
//     await dynamoDb.put(params).promise();

//     return {
//       statusCode: 200,
//       body: JSON.stringify(params.Item),
//     };
//   } catch (error) {
//     return {
//       statusCode: 500,
//       body: JSON.stringify({ error: error.message }),
//     };
//   }
// }
