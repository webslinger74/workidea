const request = require('supertest');
var expect = require('expect');
var app = require('../../server').app;


it('should return the messages', (done) => {
    request(app)
        .get('/api/messages/messages')
        .expect(200)
        .expect('Content-Type', /json/)
        .expect((res) => {
         //   console.log(res, "the response")
            expect(res.body[0]).toHaveProperty('_id');
            expect(res.body[0]).toHaveProperty('title');
            expect(res.body[0]).toHaveProperty('message');
            expect(res.body[0]).toHaveProperty('author');
            expect(res.body[0]).toHaveProperty('publish');
            expect(res.body[0]).toHaveProperty('createdAt');
            expect(res.body[0]).toHaveProperty('updatedAt');
        })
        .end(done);
})

/*
it('should return the messages by date', (done) => {
    const searchdate = '2019-01-06T12:51:18.854Z';
    request(app)
        .post('/api/messages/messagesByDate', {searchdate:searchdate})
        .expect(200)
        .expect('Content-Type', /json/)
        .expect((res) => {
         //   console.log(res, "the response")
            expect(res.body[0]).toHaveProperty('_id');
            expect(res.body[0]).toHaveProperty('title');
            expect(res.body[0]).toHaveProperty('message');
            expect(res.body[0]).toHaveProperty('author');
            expect(res.body[0]).toHaveProperty('publish');
            expect(res.body[0]).toHaveProperty('createdAt');
            expect(res.body[0]).toHaveProperty('updatedAt');
        })
        .end(done);
})
*/