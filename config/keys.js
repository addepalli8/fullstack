if(process.env.NODE_ENV==='production')
{
	module.exports=require('./prod');
}
else{
	module.exports=require('./dev');

}

// module.exports = {
// 	googleclientID: '172505613922-vqh007f1mrnaqqcirvt4b87llqmufcl2.apps.googleusercontent.com',
// 	googlesecret: 'aJIJehclvBCZ_YCU_tNCc4lZ',
// 	mongoURI:'mongodb+srv://user:user@cluster0-4nbqb.mongodb.net/test?retryWrites=true',
// 	cookiekey:'qazwsxedcrfv'
// };
