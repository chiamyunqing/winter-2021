

exports.newsletter = function(req,res) {
    
}




app.get('/newsletter', function(req,res) {
    res.render('newsletter', {csrf:'token'});
});

app.get('/thank-you', function(req, res){
	res.render('thank-you');
});