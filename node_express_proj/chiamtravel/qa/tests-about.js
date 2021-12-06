//page testing
suite('About Test Page', function() {
    test('page contain link to contact page', function() {;
        assert($('a[href="/contact"]').length);
    });
});
