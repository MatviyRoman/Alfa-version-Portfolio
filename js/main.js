// Fakes the loading setting a timeout

$(document).ready(function() {
    setTimeout(function() {
        $('body').addClass('loaded');
    }, 2500);
});



// WOW Animated
// wow = new WOW({
// 	boxClass:     'wow',      // default
// 	animateClass: 'animated', // default
// 	offset:       0,          // default
// 	mobile:       true,       // default
// 	live:         true        // default
// })
// wow.init();

new WOW().init();




// AboutMe Start
const aboutMe = (title, fullname, location, nationality, email, skype, phone, mobile, github, linkedin, facebook) => ({title, fullname, location, nationality, email, skype, phone, mobile, github, linkedin, facebook});

const abouts = [
// aboutMe(
// 	'HTML 5',
// 	'85',
// 	'devicon-html5-plain-wordmark colored html',
// 	''),

aboutMe(
	'Front-end developer',
	'Roman Matviy',
	'Lviv, Ukraine',
	'Ukrainian',
	'roman@matviy.pp.ua',
	'romas6ka',
	'+380 93 88 00 822',
	'+380 67 77 19 340',
	'github.com/MatviyRoman',
	'linkedin.com/in/MatviyRoman',
	'facebook.com/romas6ka',
	'Vue.js, Angular 2, TypeScript, PHP, MySQL',
	'Vue.js, Node.js, Angular 2 / TypeScript, React, PHP, MySQL, AJAX',
	'punctual, without bad habits, persistent and purposeful, responsible and executive, prone to analytical activity, prone to analytical activity')]
// AboutMe End



// Additional materials Start
const material = (sectionTitle, urlName1, url1, urlName2, url2, urlName3, url3, urlName4, url4, urlName5, url5, urlName6, url6) => ({sectionTitle, urlName1, url1, urlName2, url2, urlName3, url3, urlName4, url4, urlName5, url5, urlName6, url6});

const materials = [
material(
	'Історія інтернету:',
	'en.wikipedia.org/wiki/History_of_the_Internet',
	'https://en.wikipedia.org/wiki/History_of_the_Internet'),

material(
	'Історія вебу:',
	'www.evolutionoftheweb.com',
	'http://www.evolutionoftheweb.com',
	'en.wikipedia.org/wiki/History_of_the_World_Wide_Web',
	'https://en.wikipedia.org/wiki/History_of_the_World_Wide_Web'),

material(
	'Принципи роботи сучасних веб-браузерів.',
	'Як працює браузер(ru)',
	'https://www.html5rocks.com/ru/tutorials/internals/howbrowserswork/#Parsing_general'),

material(
	'Про W3C:',
	'www.w3.org/Consortium/facts',
	'http://www.w3.org/Consortium/facts'),

material(
	'Ресурс, де зібрано всі новини у світі веб-розробки:',
	'uptodate.frontendrescue.org',
	'https://uptodate.frontendrescue.org'),

material(
	'Як працює DNS:',
	'howdns.works',
	'https://howdns.works'),

material(
	'Для перевірки підтримки браузером тих чи інших можливостей і стандартів існують спеціальні ресурси. Найбільш відомі:',
	'caniuse.com',
	'http://caniuse.com',
	'html5please.com',
	'http://html5please.com'),

material(
	'Online редактори коду:',
	'JSFiddle',
	'http://jsfiddle.net',
	'LiveWeave',
	'http://liveweave.com',
	'CodePen.io',
	'http://codepen.io',
	'JsDo.it',
	'http://jsdo.it',
	'Cloud9',
	'https://c9.io'),

material(
	'Offline редактори коду:',
	'Notepad++',
	'https://notepad-plus-plus.org/download/v6.8.3.html',
	'Sublime Text3',
	'http://www.sublimetext.com',
	'Sublime Keyboard Shortcuts',
	'http://benmccormick.org/content/images/2014/Jun/Sublime_cheat_sheet.png',
	'Brackets',
	'http://brackets.io',
	'Atom',
	'https://atom.io'),

material(
	'IDE (Integrated Development Environment):',
	'WebStorm',
	'https://www.jetbrains.com/webstorm',
	'VisualStudio',
	'https://www.visualstudio.com'),

material(
	'Other:',
	'MDN(HTML)',
	'https://developer.mozilla.org/ru/docs/Web/Guide/HTML',
	'MDN(CSS)',
	'https://developer.mozilla.org/ru/docs/Web/CSS',
	'CSS Tricks',
	'https://css-tricks.com',
	'Шпаргалка зі списком всіх CSS стилів',
	'http://media.mediatemple.netdna-cdn.com',
	'Learn Layout(en, es, fr, de, du, it, po, ru,)',
	'http://learnlayout.com',
	'Frontender',
	'http://frontender.info'),

material(
	'JavaScript:',
	'Learn Javascript',
	'http://learn.javascript.ru'),

material(
	'jQuery:',
	'Documentation english',
	'http://api.jquery.com',
	'Documentation russian',
	'http://jquery-docs.ru',
	'Шпаргалка',
	'pdf/jQuery-1_5-Visual-Cheat-Sheet.pdf')]
// Additional materials End



// Front-End Start
const frontEnd = (name, num, img) => ({name, num, img});

const frontEnds = [
frontEnd(
	'HTML 5',
	'85',
	'devicon-html5-plain-wordmark colored html'),

frontEnd(
	'CSS 3',
	'80',
	'img/1.jpg'),

frontEnd(
	'CSS Flexbox',
	'78',
	'img/1.jpg'),

frontEnd(
	'JavaScript',
	'40',
	'img/1.jpg')]
// Front-End End



// Back-End Start
const backEnd = (name, num, img) => ({name, num, img});

const backEnds = [
backEnd(
	'PHP',
	'20',
	'img/1.jpg'),

backEnd(
	'MySQL',
	'15',
	'img/1.jpg')]
// Back-End End



// Certificates Start
const certificate = (date, name, license, link) => ({date, name, license, link});

const certificates = [
certificate(
	'18 Feb 2019',
	'Basics of Web UI development / Основи Web UI розробки',
	'36340060295e40e5b149e02866465b3d',
	'https://courses.prometheus.org.ua:18090/cert/36340060295e40e5b149e02866465b3d'),

certificate(
	'09 Sep 2018',
	'HTML Fundamentals course / Основи HTML розробки',
	'1014-10299461',
	'https://www.sololearn.com/Certificate/1014-10299461/pdf/'),

certificate(
	'08 Sep 2018',
	'CSS Fundamentals course / Основи CSS розробки',
	'1023-10299461',
	'https://www.sololearn.com/Certificate/1023-10299461/pdf/'),

certificate(
	'15 Oct 2018',
	'JavaScript Tutorial course / Основи JavaScript розробки',
	'1024-10299461',
	'https://www.sololearn.com/Certificate/1024-10299461/pdf/'),

certificate(
	'16 Oct 2018',
	'jQuery Tutorial course / Основи jQuery розробки',
	'1082-10299461',
	'https://www.sololearn.com/Certificate/1082-10299461/pdf/')]
// Certificates End



// CMS Start
const cms = (name, num, img) => ({name, num, img});

const cmss = [
cms(
	'OcClass',
	'75',
	'img/1.jpg'),

cms(
	'OpenCart',
	'80',
	'img/1.jpg'),

cms(
	'WordPress',
	'70',
	'img/1.jpg')]
// CMS End



// Framework Start
const framework = (name, num, img) => ({name, num, img});

const frameworks = [
framework(
	'Bootstrap',
	'75',
	'img/1.jpg'),

framework(
	'jQuery',
	'40',
	'img/1.jpg'),

framework(
	'VueJS',
	'30',
	'img/1.jpg'),

framework(
	'Angular 2',
	'20',
	'devicon-html5-plain-wordmark colored html')]
// Framework End



// Language Start
const language = (name, num, img) => ({name, num, img});

const languages = [
language(
	'English',
	'40',
	'img/1.jpg'),

language(
	'Polish',
	'25',
	'img/1.jpg'),

language(
	'Ukrainian',
	'100',
	'img/1.jpg'),

language(
	'Russian',
	'80',
	'img/1.jpg')]
// Language End



// Links Start
const link = (name, url) => ({name, url});

const links = [
link(
	'PSD Models',
	'http://psd.matviy.pp.ua'),

link(
	'Emmet-Cheat',
	'http://cheat.matviy.pp.ua'),

link(
	'Tools & Programms',
	'https://github.com/MatviyRoman/Tools-Programm')]
// Links End



// Social Start
const social = (name, icon, url) => ({name, icon, url});

const socials = [
social(
	'GitHub',
	'fab fa-github',
	'https://github.com/MatviyRoman'),

social(
	'Facebook',
	'fab fa-facebook',
	'https://www.facebook.com/romas6ka'),

social(
	'Skype',
	'fab fa-skype',
	'skype:live:romas6ka'),

social(
	'Viber',
	'fab fa-viber',
	'viber:chat?number=+380677719340'),

// social(
// 	'YouTube',
// 	'fa fa-youtube',
// 	'https://www.youtube.com/channel/UCZ1W8CdO3fDnvsobEqkbv6w'),

social(
	'E-mail',
	'far fa-envelope',
	'#contact')]
// Social End



// Skills Start
const skill = (name, num, img) => ({name, num, img});

const skills = [
skill(
	'Browser Developer Tools',
	'70',
	'img/1.jpg'),

skill(
	'PSD to HTML5',
	'87',
	'img/1.jpg'),

skill(
	'Landing Page',
	'30',
	'img/1.jpg'),

skill(
	'Responsive Design',
	'85',
	'img/1.jpg'),

skill(
	'Plugin Elementor',
	'70',
	'img/1.jpg'),

skill(
	'UI / UX Design',
	'25',
	'img/1.jpg')]
// Skills End



// Tool Start
const tool = (name, num, img) => ({name, num, img});

const tools = [
tool(
	'Chrome Browser',
	'75',
	'img/1.jpg'),

tool(
	'Firefox Browser',
	'63',
	'img/1.jpg',
	'zip/wwwvuejs2.zip'),

tool(
	'Command Line',
	'45',
	'img/1.jpg',
	'zip/wwwvuejs2.zip'),

tool(
	'Git',
	'30',
	'img/1.jpg',
	'zip/wwwvuejs2.zip'),

tool(
	'GitHub',
	'80',
	'img/1.jpg',
	'zip/wwwvuejs2.zip'),

// tool(
// 	'Slack',
// 	'0',
// 	'img/1.jpg',
// 	'zip/wwwvuejs2.zip'),

tool(
	'NPM / Webpack',
	'29',
	'img/1.jpg',
	'zip/wwwvuejs2.zip'),]
// Tool End



// Programs Start
const program = (name, num, img) => ({name, num, img});

const programs = [
program(
	'Avocode',
	'90',
	'img/1.jpg'),

program(
	'FileZilla (FTP)',
	'90',
	'img/1.jpg'),

// program(
// 	'Brackets',
// 	'40',
// 	'img/1.jpg',
// 	'zip/wwwvuejs2.zip'),

program(
	'Sublime Text',
	'80',
	'img/1.jpg'),

program(
	'Photoshop',
	'49',
	'img/1.jpg'),

program(
	'PhpStorm',
	'36',
	'img/1.jpg'),

program(
	'Visual Studio Code',
	'49',
	'img/1.jpg')]
// Programs End



// Project Start
const project = (date, url, github, name, desc, skills, active) => ({date, url, github, name, desc, skills, active});

const projects = [
project(
	'21 Feb 2019',
	'matviy.pp.ua',
	'https://github.com/MatviyRoman/Portfolio2019',
	'My New Portfolio',
	`We have received your resume and are interested in speaking with you! Please find the attached inquiry form. Additionally, please complete the following test assignment: convert home page PSD into html (CamelCo PSD/Images - https://drive.google.com/open?id=1i5Jp0cIjb6K3CUJHrYLFFhk2upM4wQPZ; to access PSD, click file named“Camel HealGCoHome-November 7.psd” and then click “Download”). We would appreciate it if you reviewed, completed, and returned these to us along with the estimated time that you spent on the test assignment. We look forward to speaking with you soon.`,
	'HTML5, CSS3, Bootstrap 4, vue.js, jQuery, Responsive Design',
	'active'),

project(
	'15 Jan 2019',
	'camel.matviy.pp.ua',
	'https://github.com/MatviyRoman/Camel',
	'Camel Heal',
	`We have received your resume and are interested in speaking with you! Please find the attached inquiry form. Additionally, please complete the following test assignment: convert home page PSD into html (CamelCo PSD/Images - https://drive.google.com/open?id=1i5Jp0cIjb6K3CUJHrYLFFhk2upM4wQPZ; to access PSD, click file named“Camel HealGCoHome-November 7.psd” and then click “Download”). We would appreciate it if you reviewed, completed, and returned these to us along with the estimated time that you spent on the test assignment. We look forward to speaking with you soon.`,
	'HTML5, CSS3, Bootstrap 4, jQuery, Responsive Design',
	''),

project(
	'21 Dec 2018',
	'home.matviy.pp.ua',
	'https://github.com/MatviyRoman/HOME',
	'Home',
	'Зверстати у відповідності до прикріпленого макету. Необхідні технології: Сss framework: bootstrap 3 або 4 Js framework : Jquery Валідний код та адаптація під мобільні пристрої.',
	'HTML5, CSS3, Bootstrap 4, jQuery, Responsive Design',
	''),

project(
	'15 Dec 2018',
	'magazino.ga',
	'http://magazino.ga',
	'magazino.ga',
	'My Home Project. Wordpress. My design with using plugin Elementor',
	'HTML5, CSS3, Wordpress, plugin Elementor, Landing Page',
	''),

project(
	'8 Dec 2018',
	'pantomax.matviy.pp.ua',
	'https://github.com/MatviyRoman/Pantomax',
	'Pantomax',
	'Сделать верстку с макета и адаптировать ее под мобильные устройства. Ссылка прилагается на макет, адаптивную верстку необходимо сделать на свое усмотрение.',
	'HTML5, CSS3, Bootstrap 4, jQuery, Responsive Design',
	''),

project(
	'7 Dec 2018',
	'todo-list.matviy.pp.ua',
	'https://github.com/MatviyRoman/todo-list',
	'todo-list',
	`Техническое задание: Реализовать todo list (список дел). Функционал: вывод списка задач из базы данных, создание новой задачи, редактирование задачи, удаление задачи. Клиентская часть. Для всего использовать Angular Material Design. Основной компонент приложения - список задач. При открытии страницы должен показываться лоадер (задачи загружаются…). 1.1 Если задач в базе нет, вывести сообщение об этом и кнопку “создать первую задачу”. 1.2 Если есть задачи, список задач в виде таблицы (столбцы - id задачи, текст задачи, дата создания, действия с задачей). Кнопка добавления новой задачи над таблицей. При нажатии на кнопку добавления задачи открывается боковое окно (drawer) с заголовком (toolbar). 2.1 В боковом окне будет расположено текстовое поле + кнопка “добавить задачу”. 2.2 Кнопка должна быть неактивной, если поле пустое. 2.3 При добавлении задачи сначала должен показываться лоадер (подождите, идёт добавление), а затем окно должно закрываться. В случае ошибки должно появляться сообщение (в виде snackbar). 2.4 Добавить ошибку в случае, если введенный текст содержит символ “!”. Т.е. если пользователь ввёл текст “Выполнить испытательное задание!”, то при попытке создать задачу должен сначала показаться лоадер, а затем снова поле с кнопкой + в snackbar должно появиться сообщение с ошибкой. 2.5 После добавления задачи она также добавляется в таблицу на странице. При наведении на строку задачи в таблице, возле текста задачи появляется иконка редактирования (ручка). 3.1 При нажатии на кнопку редактирования открывается модальное окно (dialog) с текстовым полем и кнопками “Отмена” и “Сохранить”. 3.2 При нажатии на “Сохранить” сначала показывается лоадер (progress bar), затем окно закрывается и текст задачи в таблице меняется. В последней колонке (действия с задачей) должна быть кнопка-иконка корзины. 4.1 При нажатии открывается модальное окно (dialog) с подтверждением удаления. 4.2 При подтверждении удаления сначала показывается лоадер (progress bar), затем окно закрывается и задачи удаляется из списка проекта.`,
	'VueJS, HTML5, CSS3, Bootstrap 4, Responsive Design, Landing Page',
	''),

project(
	'27 Nov 2018',
	'travel.matviy.pp.ua',
	'https://github.com/MatviyRoman/Travel-Agency',
	'Travel Agency',
	'Responsive design with psd layouts',
	'HTML5, CSS3, Bootstrap 3, jQuery, Responsive Design',
	''),

project(
	'15 Nov 2018',
	'Roman.Matviy.pp.ua',
	'https://github.com/MatviyRoman/Roman.Matviy.CV',
	'Roman.Matviy.CV',
	'Responsive design with psd layouts Roman.Matviy.CV',
	'HTML5, CSS3, Bootstrap 4, jQuery, Responsive Design, Landing Page',
	''),

project(
	'14 Nov 2018',
	'learn.matviy.pp.ua',
	'https://github.com/MatviyRoman/Learn-Theory-of-JS',
	'Learn Theory of JS',
	'Responsive design with psd layouts. Learn Theory of JS',
	'HTML5, CSS3, Bootstrap 3, jQuery, Responsive Design, Landing Page',
	''),

project(
	'10 Nov 2018',
	'short-code-vue.matviy.pp.ua',
	'https://github.com/MatviyRoman/Short-code-vue',
	'Short code vue',
	'Learn Theory of vue.js',
	'VueJS, HTML5, CSS3',
	''),

project(
	'10 Nov 2018',
	'vue.matviy.pp.ua',
	'https://github.com/MatviyRoman/Test-vue.js',
	'Test vue.js',
	'Learn Theory of vue.js',
	'VueJS, HTML5, CSS3',
	''),

project(
	'9 Nov 2018',
	'resume.matviy.pp.ua',
	'https://github.com/MatviyRoman/Old-my-resume',
	'Old my resume',
	'Learn Theory of vue.js',
	'HTML5, CSS3, Bootstrap 3, jQuery, Responsive Design, Landing Page',
	''),

project(
	'6 Nov 2018',
	'startup.matviy.pp.ua',
	'https://github.com/MatviyRoman/Startup.matviy.pp.ua',
	'Startup',
	'Responsive design with psd layouts',
	'HTML5, CSS3, Bootstrap 3, jQuery, Responsive Design',
	''),

project(
	'1 Nov 2018',
	'github.com/MatviyRoman/AngularJS',
	'https://github.com/MatviyRoman/AngularJS/tree/master/angular2-intro',
	'AngularJS',
	'AngularJS',
	'HTML5, CSS3, AngularJS',
	''),

project(
	'26 Oct 2018',
	'example.matviy.pp.ua',
	'https://github.com/MatviyRoman/example.matviy.pp.ua',
	'example',
	'Responsive design with psd layouts',
	'HTML5, CSS3, Bootstrap 3, Responsive Design',
	''),

project(
	'26 Oct 2018',
	'gentab.matviy.pp.ua',
	'https://github.com/MatviyRoman/HTML-Tables-Generation',
	'HTML Tables Generation',
	'HTML Tables Generation. My Home Project. Responsive design with psd layouts HTML Tables Generation',
	'HTML5, CSS3, Bootstrap 3, jQuery, Responsive Design, Landing Page',
	''),

project(
	'25 Oct 2018',
	'mytesting.ga',
	'https://github.com/MatviyRoman/mytesting.ga',
	'mytesting.ga',
	'HTML Tables Generation. My Home Project. Responsive design with psd layouts HTML Tables Generation',
	'HTML5, CSS3, Bootstrap 3, jQuery, Responsive Design',
	''),

project(
	'10 Oct 2018',
	'creatives.matviy.pp.ua',
	'https://github.com/MatviyRoman/Creatives-Project',
	'Creatives',
	'Responsive design with psd layouts',
	'HTML5, CSS3, Bootstrap 4, jQuery, Responsive Design',
	''),

project(
	'25 Jan 2019',
	'arnika.matviy.pp.ua',
	'https://github.com/MatviyRoman/www.arnika.od.ua',
	'МЦ Арника arnika.od.ua',
	'Було завдання з оригінального сайту зробити Responsive Design. Оригінал з того, що я робив можна глянути тут http://arnika.matviy.pp.ua/original/index.html',
	'HTML5, CSS3, Bootstrap 4, Responsive Design',
	''),

project(
	'7 Oct 2018',
	'modal.matviy.pp.ua',
	'https://github.com/MatviyRoman/My-Modal-Window',
	'Window modal test',
	'Responsive design with psd layouts. This is my window modal test.',
	'HTML5, CSS3, Bootstrap 3, jQuery, Responsive Design',
	''),

project(
	'24 Sep 2018',
	'bisines.matviy.pp.ua',
	'https://github.com/MatviyRoman/Bisines-Company-Project',
	'Bisines-Company',
	'My project building with bootstrap &amp; jQuery. Responsive design with psd layouts',
	'HTML5, CSS3, Bootstrap 3, jQuery, Responsive Design',
	'')]
// Project End


new Vue ({
	el: '#Roman_Matviy',
	// template:
	// `<div :style="{width: '55%'}">t</div>`,
	data: {
		abouts,
		backEnds,
		certificates,
		cmss,
		frontEnds,
		frameworks,
		languages,
		links,
		materials,
		socials,
		skills,
		tools,
		programs,
		projects,
		project: projects[0],
		selectedProjectIndex: 0,
		materialsShow: false,
		phoneVisibility: false,
		searchProjects: '',
		select: 1
	},
	methods: {
		selectProject: function(index){
			console.log('Click', index)
			this.project = projects[index]
			this.selectedProjectIndex = index
		},

		//  select(project,index) {
		// 		this.project = project;
		// 		this.project = this.filteredLessons[index]
		// 		this.selectLessonIndex = index
		// 		console.log('click', index);
		// },

		materialsShow() {
			this.materialsShow = false
			this.logs.push(log(`Cancelled order: ${this.car.name} - ${this.car.model}`, 'cnl'))
		}
	},
	computed: {
		materials() {
			return this.materialsShow ? 'Hide materials' : 'Show materials'
		},

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



// $('.skill:has(img[alt="5 copy_200comp.jpg"])').show();

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



$(document).ready(function(){
	var mc = {
	    '0-19'     : 'bg-danger',
	    '20-39'    : 'bg-warning',
	    '40-59'    : 'bg-info',
	    '60-79'    : '',
	    '80-100'   : 'bg-success'
	};

	function between(x, min, max) {
	  	return x >= min && x <= max;
	}

	var dc;
	var first;
	var second;
	var th;

	$('.progress-bar, .c100').each(function(index){

    	th = $(this);

    	dc = parseInt($(this).attr('data-color'),10);


      	$.each(mc, function(name, value){

	        first = parseInt(name.split('-')[0],10);
	        second = parseInt(name.split('-')[1],10);

	        // console.log(between(dc, first, second));

	        if( between(dc, first, second) ){
	          	th.addClass(value);
	        }
      	});
  	});
});

// $(document).ready(function(){
// 	var mc = {
// 	    '0-19'     : 'pink',
// 	    '20-39'    : 'yellow',
// 	    '40-59'    : 'green',
// 	    '60-79'    : 'green',
// 	    '80-100'   : 'blue'
// 	};

// 	function between(x, min, max) {
// 	  	return x >= min && x <= max;
// 	}

// 	var dc;
// 	var first;
// 	var second;
// 	var th;

// 	$('.circle').each(function(index){

//     	th = $(this);

//     	dc = parseInt($(this).attr('circle-color'),10);


//       	$.each(mc, function(name, value){

// 	        first = parseInt(name.split('-')[0],10);
// 	        second = parseInt(name.split('-')[1],10);

// 	        // console.log(between(dc, first, second));

// 	        if( between(dc, first, second) ){
// 	          	th.addClass(value);
// 	        }
//       	});
//   	});
// });



$(document).ready(function(){
	var mc = {
	    '0-19'     : 'red',
	    '20-39'    : 'orange',
	    '40-59'    : 'blue',
	    '60-79'    : 'green',
	    '80-100'   : 'green'
	};

	function between(x, min, max) {
	  	return x >= min && x <= max;
	}

	var dc;
	var first;
	var second;
	var th;

	$('.circular-chart, .circle').each(function(index){

    	th = $(this);

    	dc = parseInt($(this).attr('circle-color'),10);


      	$.each(mc, function(name, value){

	        first = parseInt(name.split('-')[0],10);
	        second = parseInt(name.split('-')[1],10);

	        // console.log(between(dc, first, second));

	        if( between(dc, first, second) ){
	          	th.addClass(value);
	        }
      	});
  	});
});




// var delay = 500;
// $(".progress-bar").each(function(i) {
//   $(this).delay(delay * i).animate({
//     width: $(this).attr('aria-valuenow') + '%'
//   }, delay);

//   $(this).prop('Counter', 0).animate({
//     Counter: $(this).text()
//   }, {
//     duration: delay,
//     // easing: 'swing',
//     step: function(now) {
//       $(this).text(Math.ceil(now) + '%');
//     }
//   });
// });




// <script type="text/javascript" src="https://code.jquery.com/jquery-1.12.0.min.js"></script>

// $(document).ready(function(){
//     $('.progress-title > b').each(function(){
//         $(this).prop('Counter',0).animate({
//             Counter: $(this).text()
//         },{
//             duration: 1500,
//             easing: 'swing',
//             step: function (now){
//                 $(this).text(Math.ceil(now));
//             }
//         });
//     });
// });



// $('.skillset-section').hover(
//    function(){
//        	$('.progress-bar').addClass('hover');
//        	$('.progress-bar').removeClass('hide');
//         },
//    function(){
//        	$('.progress-bar').removeClass('hover');
//        	$('.progress-bar').addClass('hide');
//    }
// )





// sliderCarousel Start
$(window).on('load', function(){
    $('.sliderProject1, .sliderProject2').carousel({
        interval: 3000,
        pause: 'true',
        wrap: true
    })
    $('.sliderProject1 .prev, .sliderProject2e .prev').click(function(){
        $('.sliderProject1, .sliderProject2').carousel('prev')
    })
    $('.sliderProject1 .next, .sliderProject2e .next').click(function(){
        $('.sliderProject1, .sliderProject2').carousel('next')
    })
    $('.sliderProject1 .prev, .sliderProject1 .next, .sliderProject2 .prev, .sliderProject2 .next').click(function(event) {
        event.preventDefault();
    });
})