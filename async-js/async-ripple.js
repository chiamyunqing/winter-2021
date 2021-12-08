//code calling async func now contains async ste

//menu always displayed asynchronously
function showMainMenu() {
    var p = (!user.authenticated) ? user.login() : Promise.resolve();
    return p.then(function() {
        //code to display main menu...
    })

    //OR JUST
    //return user.login().then(/*...*/); //can cache login the promise returned by login
}

var user = {
    loginPromise = null,

    login: function() {
        var me = this;
        if (this.loginPromise == null) {
            this.loginPromise = ajax(/*some url*/);

            //remove cached promise when failure occurs to allow retry
            this.loginPromise.catch(function() {
                me.loginPromise = null;
            });
        }
        return this.loginPromise;
    }
}

//Consolidate promises into 1 promise
var requests = accounts.map(async function(account) {
    return ajax(/*some url*/);
});

Promise.all(requests).then(function (balances) {
    console.log('All ' + balances.length + ' balances are up to date');
}).catch(function (error) {
    console.log(error);
});

