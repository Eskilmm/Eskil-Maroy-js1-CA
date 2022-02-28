fetch("https://api-football-v1.p.rapidapi.com/v3/timezone", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "api-football-v1.p.rapidapi.com",
		"x-rapidapi-key": "c0f92a7700mshb2b1fc113862bcap173f6cjsnd4557b553058"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});