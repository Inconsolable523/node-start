var fortune=require('../lib/fortune.js');
var expect=require('chai').expect;

suite('Forune cookie tests',function(){
	test('getFoune() should return a fortune',function(){
		expect(typeof fortune.getFortune()==='string');
	})
})