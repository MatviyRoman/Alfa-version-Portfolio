const skill = (name, num, img, link) => ({name, num, img, link})

const skills = [
skill(
	'Bootstrap 4',
	'70%',
	'img/1.jpg',
	'zip/wwwvuejs2.zip'),
skill(
	'CSS 3',
	'85%',
	'img/1.jpg',
	'zip/wwwvuejs2.zip'),
skill(
	'JavaScript',
	'30%',
	'img/1.jpg',
	'zip/wwwvuejs2.zip'),
skill(
	'jQuery',
	'40%',
	'img/1.jpg',
	'zip/wwwvuejs2.zip'),
skill(
	'HTML 5',
	'80%',
	'img/1.jpg',
	'zip/wwwvuejs2.zip'),
skill(
	'Photoshop',
	'50%',
	'img/1.jpg',
	'zip/wwwvuejs2.zip'),
skill(
	'PHP',
	'20%',
	'img/1.jpg',
	'zip/wwwvuejs2.zip'),
skill(
	'MySQL',
	'20%',
	'img/1.jpg',
	'zip/wwwvuejs2.zip'),
skill(
	'Responsive Design',
	'90%',
	'img/1.jpg',
	'zip/wwwvuejs2.zip'),
skill(
	'WordPress',
	'60%',
	'img/1.jpg',
	'zip/wwwvuejs2.zip'),
skill(
	'Plugin Elementor',
	'60%',
	'img/1.jpg',
	'zip/wwwvuejs2.zip'),
skill(
	'OpenCart',
	'60%',
	'img/1.jpg',
	'zip/wwwvuejs2.zip'),
skill(
	'OsClass',
	'70%',
	'img/1.jpg',
	'zip/wwwvuejs2.zip')]


new Vue ({
	el: '#myPortfolio',
	data: {
		skills,
		skill: skills[0],
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