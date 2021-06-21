const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');
const pool = require('../db/index')

chai.should();
chai.use(chaiHttp);

describe('Server APIs tests', () => {
    // Test POST API
    describe('POST /users tests', () => {
        it('POST a valid user', (done) => {
            chai.request(app)
            .post('/users')
            .send({"name": "joe", "email": "joe@gmail.com", "password": "123123"})
            .end((err, res) => {
                res.should.have.status(200);
                done();
            });
        });

        it('POST empty user', (done) => {
            chai.request(app)
            .post('/users')
            .send({})
            .end((err, res) => {
                res.should.have.status(400);
                done();
            });
        });

        it('POST missing field user', (done) => {
            chai.request(app)
            .post('/users')
            .send({"name": "luna", "email": "luna@gmail.com"})
            .end((err, res) => {
                res.should.have.status(400);
                done();
            });
        });
    })

    // Test GET API
    describe('GET /users', () => {
        it('Getting all the users in the db', (done) => {
            chai.request(app)
            .get('/users')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                res.body.length.should.be.eq(1);
                done();
            });
        });
    });
    
    // Test DELETE API
    describe('DELETE /users', () => {
        it('Delete a user from the db', (done) => {
            chai.request(app)
            .delete('/users/1')
            .end((err, res) => {
                res.should.have.status(200);
                done();
            });
        });

        it('Try delete a user not in db', (done) => {
            chai.request(app)
            .delete('/users/12512512')
            .end((err, res) => {
                res.should.have.status(404);
                done();
            });
        });
    });
});

after(() => { pool.end().then(() => console.log('pool has ended')) })