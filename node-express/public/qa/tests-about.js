suite('"about" Page Tests',function(){
	test('page should contain link to concat this page',function(){
		assert($('a[href="/contact"]').length);
	})
})