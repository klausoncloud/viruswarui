import fetch from 'isomorphic-fetch'

class FileServer {
	static url = '/files/player.py';

	static fetchCodeExample() {
		return fetch(this.url).then( function(response) {
          if (response.status >= 400) {
		  		console.log("Error response from server" + response.status);
		  		return "Ops. Could not fetch the example.";
		  	} else {
		  		return response.text();
		  	}
        }).then(function(text) {
          // Just in case we need to strip something...
          return text;
        });
	}
}

export default FileServer;