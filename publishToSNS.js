const { SNSClient, PublishCommand } = require("@aws-sdk/client-sns");

const snsClient = new SNSClient({ region: "us-east-1" });

async function publishToSNS(topicArn, message) {
  try {
    const command = new PublishCommand({ TopicArn: topicArn, Message: message });
    const response = await snsClient.send(command);
    return response.MessageId;
  } catch (error) {
    console.error("Error publishing to SNS:", error);
    throw error;
  }
}

module.exports = publishToSNS;
