function getReportData() {
    return db.connect().then((connection) => {
        return db.query(connection, 'select sth');
    }).catch(err => {
        console.log('error 1');
        throw err; //MUST RETHROW to propagate the rejection upstream else reach resolved promise
    })
}


getReportData().then((data) => { //if rejection not propagated, this will be reached!!
    data.sort(); 
}).catch(err => {
    console.log('error');
})