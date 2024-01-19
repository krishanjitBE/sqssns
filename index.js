const publishToSNS = require("./publishToSNS");
const readFromSQS = require("./readFromSQS");

const topicArn = 'arn:aws:sns:us-east-1:000000000000:my-topic'; 
const queueUrl = 'http://sqs.us-east-1.localhost.localstack.cloud:4566/000000000000/my-local-queue';

// Publish a message to SNS
publishToSNS(topicArn, "This is a test message from Node.js")
  .then((messageId) => console.log("Message published to SNS with ID:", messageId))
  .catch((error) => console.error("Error publishing message:", error));

// Read messages from SQS
readFromSQS(queueUrl)
  .then((messages) => {
    messages.forEach((message) => console.log("Received message:", message.Body));
  })
  .catch((error) => console.error("Error reading messages:", error));
