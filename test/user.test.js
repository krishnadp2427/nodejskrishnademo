'use strict'
const request = require('supertest-as-promised');
const httpStatus = require('http-status');
const chai = require('chai');
const expect = chai.expect;
const mocha = require('mocha');
const app = require('../server/index');

chai.config.includeStack = true;

describe('## User APIs', () => {
    let user1 = {
        '_id': '57c34a54c160d2fc54c57822',
        'title': 'hello', 'body': 'ok'
    };
    let user2 = {
        '_id': '57c34a54c160d2fc54c8882d',
        'title': 'hello', 'body': 'ok'
    };


    describe('# POST /user', () => {
        it('should create a new user', (done) => {
            request(app)
                .post('/user')
                .send(user1)
                .expect(httpStatus.CREATED)
                .then(res => {
                    expect(res.body._id).to.equal(user1._id);
                    expect(res.body.title).to.equal(user1.title);
                    expect(res.body.body).to.equal(user1.body);
                    done();
                });
        });

    });
    describe('# GET /user', () => {
        it('should get all user details', (done) => {
            request(app)
                .get('/user')
                .expect(httpStatus.OK)
                .then(res => {
                    console.log("test" + JSON.stringify(res.body));
                    expect(res.body).to.be.instanceof(Array);

                    done();
                });
        });
    });

    describe('# GET /user/:userId', () => {
        it('should get user details', (done) => {
            request(app)
                .get(`/user/${user1._id}`)
                .expect(httpStatus.OK)
                .then(res => {
                    expect(res.body._id).to.equal(user1._id);
                    expect(res.body.title).to.equal(user1.title);
                    expect(res.body.body).to.equal(user1.body);
                    done();
                });

            it('should report error with message - Not found, when user does not exists', (done) => {
                request(app)
                    .get(`/users/${user2._id}`)
                    .expect(httpStatus.NOT_FOUND)
                    .then(res => {
                        expect(res.body.message).to.equal('Not Found');
                        done();

                    });
            });
        });

        describe('# PUT /users/:userId', () => {
            it('should update user details', (done) => {
                user1.title = 'Steve';
                request(app)
                    .put(`/user/${user1._id}`)
                    .send(user1)
                    .expect(httpStatus.OK)
                    .then(res => {
                        expect(res.body._id).to.equal(user1._id);
                        expect(res.body.title).to.equal(user1.title);
                        expect(res.body.body).to.equal(user1.body);
                        done();
                    });
            });
        });

        describe('# DELETE /users/', () => {
            it('should delete user', (done) => {
                request(app)
                    .delete(`/user/${user1._id}`)
                    .expect(httpStatus.OK)
                    .then(res => {
                        expect(res.body._id).to.equal(user1._id);
                        expect(res.body.title).to.equal(user1.title);
                        expect(res.body.body).to.equal(user1.body);
                        done();
                    });
            });
        });

    });
});