var should = require('should');
var request = require('supertest');
var server = require('../../../app');

describe('controllers', function() {

  describe('randomWord', function() {

    describe('GET /cbword', function() {

      it('should return a random word', function(done) {

        request(server)
          .get('/cbword')
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200)
          .end(function(err, res) {
            should.not.exist(err);

            done();
          });
      });

      // it('should accept a name parameter', function(done) {
      //
      //   request(server)
      //     .get('/cbword')
      //     .set('Accept', 'application/json')
      //     .expect('Content-Type', /json/)
      //     .expect(200)
      //     .end(function(err, res) {
      //       should.not.exist(err);
      //
      //       //res.body.should.eql('Hello, Scott!');
      //
      //       done();
      //     });
      // });

    });

  });

});
