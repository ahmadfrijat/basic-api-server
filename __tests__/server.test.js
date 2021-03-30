'use strict';
const { server } = require('../src/server.js'); 
const superTest = require('supertest');
const request = superTest(server);
let id;
describe('api server', () => {

//food test


  it('should be able to create a food on POST /food', async () => {
    const response = await request.post('/api/v1/food').send({
      name: 'apple',
      role: 'food',
    });
    expect(response.status).toEqual(201);
    expect(response.body.data.name).toEqual('apple');
    id = response.body.id;
  });
  it('should be able to update a food on PUT /food', async () => {
    const response = await request.put(`/api/v1/food/${id}`).send({
      name: 'test',
      role: 'food',
    });
    expect(response.status).toEqual(200);
    expect(response.body.data.name).toEqual('test');
  });
  it('should be able to get a food on Get /food/:id', async () => {
    const response = await request.get(`/api/v1/food/${id}`);
    expect(response.status).toEqual(200);
    expect(response.body.data.name).toEqual('test');
  });



//clothes test


  it('should be able to create a clothes on POST /clothes', async () => {
    const response = await request.post('/api/v1/clothes').send({
      name: 'T shirt',
      role: 'clothes',
    });
    expect(response.status).toEqual(201);
    expect(response.body.data.name).toEqual('T shirt');
    id = response.body.id;
  });
  it('should be able to update a clothes on PUT /clothes', async () => {
    const response = await request.put(`/api/v1/clothes/${id}`).send({
      name: 'test',
      role: 'clothes',
    });
    expect(response.status).toEqual(200);
    expect(response.body.data.name).toEqual('test');
  });
  it('should be able to get a clothes on Get /clothes/:id', async () => {
    const response = await request.get(`/api/v1/clothes/${id}`);
    expect(response.status).toEqual(200);
    expect(response.body.data.name).toEqual('test');
  });

// 404 on a bad route


  it('handle server errors bad route', async () => {
    const response = await request.get('/bad');
    expect(response.status).toEqual(404);
  });
});