const timeServer = require('../server');

const chai = require('chai');
const chaiHttp = require('chai-http');

chai.should();
chai.use(chaiHttp);
const { expect } = require('chai');

describe('TimeServer test suite', () => {
  it('returns status code 200', (done) => {
    chai.request(timeServer)
      .get('/time/1234')
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });


  it('Check whether the response returns a json', (done) => {
    chai.request(timeServer)
      .get('/time/1234')
      .end((err, res) => {
        // eslint-disable-next-line no-unused-expressions
        expect(res).to.be.json;
        done();
      });
  });


  it('Check whether the response returns a json', (done) => {
    chai.request(timeServer)
      .get('/time/eererere')
      .end((err, res) => {
        expect(res.text).to.equal('{"natural":null,"unix":null}');
        done();
      });
  });


  it('Check whether the response returns a unixtime ', (done) => {
    chai.request(timeServer)
      .get('/time/1450137600')
      .end((err, res) => {
        expect(res.text).to.equal('{"natural":"December 15, 2015","unix":"1450137600"}');
        done();
      });
  });


  it('Check whether the response returns a unixtime ', (done) => {
    chai.request(timeServer)
      .get('/time/December 15, 2015')
      .end((err, res) => {
        expect(res.text).to.equal('{"natural":"December 15, 2015","unix":"1450137600"}');
        done();
      });
  });
});
