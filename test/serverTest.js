var chai = require('chai');
var expect = chai.expect;
var chaiHTTP = require('chai-http');
var fs = require('fs');
var http = require('http');
var server = require('../server');
var expect = require('chai').expect;

describe('Server function, get', function(done){
	before(function(done){
		chai.request('localhost:3000')
			.end(function(err, res){
				if(err) {return err};	
			});
			done();	
		});
	});

	it('should respond to a get request', function(){
		expect(res.text).to.eql('how may I assist you?');
	});
});

describe('Server function, post', function(done){
	var dirLength = fs.readdir(__dirname + '/../notes').length;
	before(function(done){
		chai.request('localhost:3000')
			.post('/notes')
			.send('{"dogs": "Tucker and Dexter"}')
			.end(function(err, res){
				if(err) {return err};	
			});
			done();
		});		
	});
	it('should respond to a post request', function() {
		var newDirLength = fs.readdir(__dirname + '/../notes').length;
		expect(dirLength).to.eql(newDirLength -1); 
	});	
});

