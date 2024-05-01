// Import necessary libraries
import request from 'supertest';
import chai from 'chai';
import app from '../app'; // Update the path according to your project structure

const expect = chai.expect;

// Describe your tests
describe('POST /campaign/:id/donate', function() {
  it('should allow a user to donate to a campaign', async function() {
    const response = await request(app)
      .post('/campaign/1/donate') // Adjust the ID based on your data
      .send({ amount: '0.1' }) // Amount to donate
      .expect(201); // HTTP status for created

    expect(response.body).to.have.property('message', 'Donation successful');
    expect(response.body).to.have.property('transactionId');
  });

  it('should fail for non-existent campaign', async function() {
    const response = await request(app)
      .post('/campaign/999/donate') // Using a likely non-existent ID for testing
      .send({ amount: '0.1' })
      .expect(500); // HTTP status for server error

    expect(response.body).to.have.property('message', 'Donation failed');
  });
});
