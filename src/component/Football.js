import React ,{useEffect}from 'react'


const Football = () => {

useEffect(() => {
    fetch("https://api-football-v1.p.rapidapi.com/v3/timezone", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "api-football-v1.p.rapidapi.com",
		"x-rapidapi-key": "f1c2e5afd4msh006493093238c5ep1c90f4jsna8d6c870ea55"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});
    
}, [])

    return (
        <div>
            <div id="wg-api-football-livescore"
     data-host="v3.football.api-sports.io"
     data-refresh="60"
     data-key="Your-Api-Key-Here"
     data-theme=""
     data-show-errors="false"
     class="api_football_loader">
</div>

        </div>
    )
}

export default Football
