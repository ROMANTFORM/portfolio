$(document).ready(function() {
	$('.popup-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
			}
		}
	});
});

// const routes = {
// 	r4ffe2: {
// 	  price: 23444,
// 	  dates: ["30092020", "11092020"],
// 	  currency: "RUB"
// 	},
// 	o34p5: {
// 	  dates: ["13112021", "14082021"],
// 	  price: 11454,
// 	  currency: "RUB"
// 	}
//   };
  
//   // Необходимо получить: ["30092020", "11092020", "13112021", "14082021"]
  
//   function getRoutesDates(data) {
// 	let datesArr = []
// 	const keys = Object.keys(data);
// 	for(key of keys){
// 		data[key].dates.forEach((date) => {
// 			console.log(datesArr.push(date))
// 		})
		
// 	};
// 	console.log(datesArr)
//   }
// getRoutesDates(routes)

// let preNum = 0;
// function sum(num){
// preNum = preNum + num
// console.log(preNum)
// }

// sum(1)
// sum(3)
// sum(4)