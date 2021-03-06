document.addEventListener("DOMContentLoaded", function (event) {
	console.log("DOM fully loaded and parsed");

	const trendingUrl = "https://api.giphy.com/v1/gifs/trending?api_key=jmJFGQx32Mt6etpKr7aTpjXmn977kSYi&limit=10&rating=G";
	const giphyContainer = document.getElementById("giphy-container");

	function writeSingleGifToPage(gif) {

		var containerDiv = document.createElement("div");
		containerDiv.classList.add("giphy-posts");
		giphyContainer.appendChild(containerDiv);

		if (gif.images) {
			var newImage = document.createElement("img");
			newImage.classList.add("giphy-image");
			newImage.src = gif.images.downsized.url;
			containerDiv.appendChild(newImage);
		}

		giphyContainer.appendChild(containerDiv);
	}

	function writeAllGifsToPage(gifArray) {
		gifArray.forEach(writeSingleGifToPage);
	}

	function parseJSONFromResponse(response) {
		return response.json();
	}

	function extractPostArrayFromJSON(json) {
		console.log(json.data);
		return json.data;
	}

	function handleError(err) {
		console.log(err);
	}

	fetch(trendingUrl)
		.then(parseJSONFromResponse)
		.then(extractPostArrayFromJSON)
		.then(writeAllGifsToPage)
		.catch(handleError);
});
