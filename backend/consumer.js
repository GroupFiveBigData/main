const { Kafka } = require('kafkajs');

const kafka = new Kafka({
  clientId: 'fraud-detection',
  brokers: ['localhost:9092'],
});

const consumer = kafka.consumer({ groupId: 'fraud-group' });

const consumeData = async () => {
  await consumer.connect();
  await consumer.subscribe({ topic: 'transactions', fromBeginning: true });

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      const transaction = JSON.parse(message.value.toString());
      console.log(`Received transaction:`, transaction);
    },
  });
};

consumeData().catch(console.error);