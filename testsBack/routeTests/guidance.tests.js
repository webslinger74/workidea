const request = require('supertest');
var expect = require('expect');
var app = require('../../server').app;


it('should return the messages', (done) => {
    request(app)
        .get('/api/guidance/getguidance')
        .expect(200)
        .expect('Content-Type', /json/)
        .expect('Content-Length', '500')
        .expect((res) => {
        //    console.log(res, "the response")
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


