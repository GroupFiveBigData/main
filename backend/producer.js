const { Kafka } = require('kafkajs');

const kafka = new Kafka({
  clientId: 'fraud-detection',
  brokers: ['localhost:9092'],
});

const producer = kafka.producer();

const produceData = async () => {
  await producer.connect();
  const messages = [
    { value: JSON.stringify({ id: 1, amount: 100.50, flagged: false, time: '2024-08-25T14:56:18' }) },
    { value: JSON.stringify({ id: 2, amount: 400.75, flagged: true, time: '2024-08-25T15:00:00' }) },
    
  ];

  await producer.send({
    topic: 'transactions',
    messages: messages,
  });

  await producer.disconnect();
};

produceData().catch(console.error);