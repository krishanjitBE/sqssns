const { SQSClient, ReceiveMessageCommand } = require("@aws-sdk/client-sqs");

const sqsClient = new SQSClient({ region: "us-east-1" });

async function readFromSQS(queueUrl) {
  try {
    const command = new ReceiveMessageCommand({ QueueUrl: queueUrl });
    const response = await sqsClient.send(command);
    return response.Messages || [];
  } catch (error) {
    console.error("Error reading from SQS:", error);
    throw error;
  }
}

module.exports = readFromSQS;
