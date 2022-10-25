// CallBack Vs Promises Vs Async/Await

// CallBack-
getUser(function(err,user){
    getProfile(user,function(err,profile){
        getAccount(profile,function(err,account){
            getReport(account,function(err,report){
                sendStatistics(report,function(error){
                    // code
                })
            })
        })
    })
})

// Promise -
getUser()
    .then(getProfile)
    .then(getAccount)
    .then(getReport)
    .then(sendStatistics)
    .then(function (success){
        console.log(success)
    })
    .catch(function (error){
        console.error(error)
    })

// Async/Await-
async function sendAsync(){
    let user = await getUser(1)
    let profile = await getProfile(user)
    let account = await getAccount(profile)
    let report = await getReport(account)
    let send = sendStatistics(report)
    console.log(send)
}
