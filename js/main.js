$(document).ready(function() {

  // Fakes the loading setting a timeout
    setTimeout(function() {
        $('body').addClass('loaded');
    }, 3000);

});

const skill = (name, num, img, link) => ({name, num, img, link});

const skills = [
skill(
	'Angular 2',
	'20',
	'img/1.jpg',
	'zip/wwwvuejs2.zip'),
skill(
	'VueJS',
	'30',
	'img/1.jpg',
	'zip/wwwvuejs2.zip'),
skill(
	'Bootstrap 4',
	'80',
	'img/1.jpg',
	'zip/wwwvuejs2.zip'),
skill(
	'HTML & CSS',
	'85',
	'img/1.jpg',
	'zip/wwwvuejs2.zip'),
skill(
	'JavaScript',
	'30',
	'img/1.jpg',
	'zip/wwwvuejs2.zip'),
skill(
	'jQuery',
	'40',
	'img/1.jpg',
	'zip/wwwvuejs2.zip'),
skill(
	'HTML 5',
	'80',
	'img/1.jpg',
	'zip/wwwvuejs2.zip'),
skill(
	'Photoshop',
	'50',
	'img/1.jpg',
	'zip/wwwvuejs2.zip'),
skill(
	'PHP',
	'20',
	'img/1.jpg',
	'zip/wwwvuejs2.zip'),
skill(
	'MySQL',
	'20',
	'img/1.jpg',
	'zip/wwwvuejs2.zip'),
skill(
	'Responsive Design',
	'90',
	'img/1.jpg',
	'zip/wwwvuejs2.zip'),
skill(
	'WordPress',
	'60',
	'img/1.jpg',
	'zip/wwwvuejs2.zip'),
skill(
	'Plugin Elementor',
	'60',
	'img/1.jpg',
	'zip/wwwvuejs2.zip'),
skill(
	'OpenCart',
	'60',
	'img/1.jpg',
	'zip/wwwvuejs2.zip'),
skill(
	'OcClass',
	'70',
	'img/1.jpg',
	'zip/wwwvuejs2.zip')]

//Tool
const tool = (name, num, img, link) => ({name, num, img, link});

const tools = [
tool(
	'Chrome',
	'100',
	'img/1.jpg',
	'zip/wwwvuejs2.zip'),
tool(
	'Photoshop',
	'50',
	'img/1.jpg',
	'zip/wwwvuejs2.zip')]
//Tool

//ProjectStart
// const project = (name, url, imgBig, imgSmall, imgDesc, imgTab, imgMob) => ({name, url, imgBig, imgSmall, imgDesc, imgTab, imgMob});

// const projects = [
// project(
// 	'Bo',
// 	'width: 100%',
// 	'img/1.jpg',
// 	'zip/wwwvuejs2.zip'),
// project(
// 	'OsClass',
// 	'70%',
// 	'img/1.jpg',
// 	'zip/wwwvuejs2.zip')]
//ProjectEnd


new Vue ({
	el: '#myPortfolio',
	// template:
 //  `<div :style="{width: '55%'}">t</div>`,
	data: {
		skills,
		skill: skills[0],
		tools,
		// project,
		phoneVisibility: false,
		searchLessons: ''
	},
	methods: {
		selectLesson(lesson,index) {
			this.lesson = lesson;
			this.lesson = this.filteredLessons[index]
			// this.selectLessonIndex = index
			console.log('click', index);
		}
	},
	computed: {
		phoneBtnText() {
			return this.phoneVisibility ? 'Hide phone' : 'Show phone'
		},
		filteredLessons() {
			return this.skills.filter(skill => {
				return skill.title.indexOf(this.search) > -1 || skill.description.indexOf(this.search) > -1
			})
		}
	},
	filters: {
		date(value) {
			return value.toLocalString()
		}
	}
})



// if(browser == 'IE') {
//   alert('О, да у вас IE!');
// } else if (browser == 'Chrome' || browser == 'Firefox' || browser == 'Safari' || browser == 'Opera') {
//   alert('Да, и эти браузеры мы поддерживаем');
// } else {
//   alert('Мы надеемся, что и в вашем браузере все ок!');
// }

// $('.skill:has(img[alt="5 copy_200comp.jpg"])').show();

// var i = 38
// switch (i) {
//     case ((i>=0 && i<=19)?i:-1): $(".progress-bar").attr("class", "bg-danger"); console.log('0-19'); break;
//     case ((i>=20 && i<=39)?i:-1): $(".progress-bar").attr("class", "bg-danger"); console.log('20-39'); break;
//     case ((i>=40 && i<=59)?i:-1): $(".progress-bar").attr("class", "bg-danger"); console.log('40-59'); break;
//     case ((i>=60 && i<=79)?i:-1): $(".progress-bar").attr("class", "bg-success"); console.log('60-79');
//     default: console.log('80-100'); break;
// }



// let i = skill.num;
// while (i < skills.length) {
//   alert( i );
//   switch (i) {
//     case ((i>=20 && i<=19)?i:-1): $(this).css("color", "#ffffff"); console.log('0-19');
//     case ((i>=20 && i<=39)?i:-1): $(".progress-bar").attr("class", "bg-danger"); console.log('20-39');
//     case ((i>=40 && i<=59)?i:-1): $(".progress-bar").attr("class", "bg-success"); console.log('40-59');
//     case ((i>=60 && i<=79)?i:-1): $(".progress-bar").attr("class", "bg-info"); console.log('60-79');
//     default: $(".progress-bar").attr("class", "bg-danger"); console.log('80-100'); break;}
//   i++;
// }

// l i = $(".progress-bar b").text();

// switch (i) {
//     case ((i>=20 && i<=19)?i:-1): $(this).css("color", "#ffffff"); console.log('0-19');
//     case ((i>=20 && i<=39)?i:-1): $(".progress-bar").attr("class", "bg-danger"); console.log('20-39');
//     case ((i>=40 && i<=59)?i:-1): $(".progress-bar").attr("class", "bg-success"); console.log('40-59');
//     case ((i>=60 && i<=79)?i:-1): $(".progress-bar").attr("class", "bg-info"); console.log('60-79');
//     default: $(".progress-bar").attr("class", "bg-danger"); console.log('80-100'); break;}
// } i++;}


   //  if (content == "high") {

   //      $(this).css("color", "#ffffff");
   //  }
   // if (content == "low") {

   //      $(this).css("color", "#ccc");
   //  }
   // if (content == "critical") {

   //      $(this).css("color", "#000");
   //  }
   


//    var max_temp = 50, // set maximum expected temperature
// min_temp = -10, // set minimum temperature
// temp_range = max_temp - min_temp, // calculate range
// temp_rating = ((temp - min_temp) / temp_range) * 255 // express value in terms of the range multiplied by 255
// red = temp_rating, // more temp = more red
// blue = 255 - temp_rating; // more temp = less blue

// $(document).ready(function(){
    // $('.progress-bar')​.has(function(){
        // if($('.progress-bar').has() < 47)
        //     $(this).removeAttr("class").addClass("cold");
        // else
        //     $(this).removeAttr("class").addClass("hot");
    // })​
// });