var expect = require('chai').expect;
var router = require(__dirname + '/../index');

describe('the http persistence server', function(){
	var testRes;
	beforeEach(function(){
		this.router = router();
		testRes = {test: 'this is a test'};
	});

	it('should be able to set up a get request', function(){
		var testReq = {
			method: 'GET',
			url: '/test'
		};

		this.router.get('/test', function(req, res){
			expect(res.test).to.eql('this is a test');
			expect(res.status).to.eql(200);
		});
		this.router.route(testReq, testRes);	
	});

	it('should be able to set up a post request', function() {
		var testReq ={
			method: 'POST',
			url: '/test'
		};

		this.router.post('/test', function(req, res){
			expect(res.test).to.eql('this is a test');
			expect(res.status).to.eql(200);
		});
		this.router.route(testReq, testRes);	
	});
});
