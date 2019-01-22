const lesson = (title, desc, time, img, video, source, download) => ({title, desc, time, img, video, source, download})

const lessons = [
	lesson(
		'Урок 1. Введение','В данном уроке вы увидите приложение, которое вы получите после прохождения данного курса. Также вы узнаете, что такое Vue, в каких проектах его стоит применять и для чего его стоит учить.','04:10','img/1.jpg','video/vuejs1.mp4','zip/wwwvuejs2.zip','video-zip/vuejs1.zip'
		),
	lesson(
		'Урок 2. Создание макета','В данном уроке мы создадим HTML каркас будущего приложения, используя css фреймворк bootstrap 4.','12:41','img/2.jpg','video/vuejs2.mp4','zip/wwwvuejs2.zip','video-zip/vuejs2.zip'
		)
	,
	lesson(
		'Урок 3. Вывод списка машин','В этом уроке мы с вами установим VueJS и рассмотрим, как инициализируется приложение. Далее, мы создадим список машин и с помощью фреймворка выведем их в шаблон. Также мы повторим тему стрелочных функций в javascript.','20:18','img/3.jpg','video/vuejs3.mp4','zip/wwwvuejs3.zip','video-zip/vuejs3.zip'
		),
	lesson(
		'Урок 4. Детальное отображение машины','В данном уроке мы разберем встроенные директивы, с помощью которых можно динамически изменять и управлять html атрибутами. Далее мы разберем директиву, с помощью которой можно обрабатывать действия пользователя и выполнять нужные методы. В результате урока мы напишем функционал, который позволит изменять детальное отображение машины на ту, которую выберет пользователь.','16:32','img/4.jpg','video/vuejs4.mp4','zip/wwwvuejs4.zip','video-zip/vuejs4.zip'
		),
	lesson(
		'Урок 5. Фильтрация и окно покупки','В данном уроке мы рассмотрим способ оптимизации приложения и фильтрации список с помощью computed свойств, которые есть во VueJS. С помощью этих свойств, мы будем фильтровать список машин по названию и марке машины в динамическом режиме. После этого, мы создадим модальное окно от bootstrap, но его функционал напишем сами, используя Vue.','17:40','img/5.jpg','video/vuejs5.mp4','zip/wwwvuejs5.zip','video-zip/vuejs5.zip'
		),
	lesson(
		'Урок 6. Вывод логов действий пользователя','В этом уроке вы научитесь создавать фильтры, для форматирования данных внутри шаблона. Далее, с помощью данного фильтра, мы выведем отформатированную дату и время действия пользователя. В результате урока, приложение будет показывать логи действия пользователя, и на этом весь функционал приложения будет завершен.','15:16','img/6.jpg','video/vuejs6.mp4','zip/wwwvuejs6.zip','video-zip/vuejs6.zip'
		),
	lesson(
		'Урок 7. Добавление анимации','В этом заключительном уроке вы научитесь создавать анимации используя очень удобный механизм, который нам предоставляет Vue. В результате данного урока мы создадим 3 разные анимации для приложения.','11:01','img/7.jpg','video/vuejs7.mp4','zip/wwwvuejs7.zip','video-zip/vuejs7.zip'
		),
]

new Vue ({
	el: '#myApp',
	data: {
		lessons,
		lesson: lessons[0],
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
			return this.lessons.filter(lesson => {
				return lesson.title.indexOf(this.search) > -1 || lesson.description.indexOf(this.search) > -1
			})
		}
	},
	filters: {
		date(value) {
			return value.toLocalString()
		}
	}
})