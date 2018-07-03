class PagesController < ApplicationController
	def home
		@toolkit1 = [
			{
				name: "TDD & BDD",
				pic: "technologies/rspec.png"
			},
			{
				name: "Angular 6",
				pic: "technologies/angular.png"
			},
			{
				name: "APIs",
				pic: "technologies/api.png"
			},
			{
				name: "CSS Animations",
				pic: "technologies/css.png"
			}
		]

		@toolkit2 = [
			{
				name: "AWS",
				pic: "technologies/aws.png"
			},
			{
				name: "Ionic",
				pic: "technologies/ionic.png"
			},
			{
				name: "Webpack",
				pic: "technologies/webpack.png"
			},
			{
				name: "Bootstrap 4",
				pic: "technologies/bootstrap.png"
			}
		]
		blogs
		teachers
		projects
	end

	def projects
		@projects = [
			{
				pic: "projects/codium.png",
				tags: ["Rails", "ES6", "TDD"],
				name: "Codium. Create your cheetsheets",
				description: "Open source tool, learning to code is difficult. With Codium you can organize your coding notes.",
				url: "http://www.codium.fun/"
			},
			{
				pic: "projects/waybook.png",
				tags: ["Rails", "ES6", "API"],
				name: "Skills Book. Connect the employees of your company",
				description: "With Skills Book you find all the skills of your employees. Efficient assignment for the projects",
				url: "https://way-book.herokuapp.com/"
			},
			{
				pic: "projects/schulungssystem.png",
				tags: ["Rails", "ES6", "Cloudinary"],
				name: "W.H.A.T. All your training files in your hand",
				description: "Platform to host, organize and share all the training documents. Couches use them on the go",
				url: "https://schulungssystem.waygroup.de/"
			},
			{
				pic: "projects/zeiterfassung.png",
				tags: ["Rails", "AJAX", "jQuery"],
				name: "Timesheet. Analyse your working hours",
				description: "Employees can enter their working hours, analyse hours per project. Managers can have a day-to-day overview",
				url: "https://way-zeiterfassung.herokuapp.com/"
			}
		]
	end

	def teachers
		@teachers = [
			{
				pic: "barcelona.png",
				title: "Le Wagon",
				city: "Barcelona",
				lessons: 80,
				students: 120
			},
			{
				pic: "bali.png",
				title: "Le Wagon",
				city: "Bali",
				lessons: 48,
				students: 33
			},
		]
	end

	def blogs
		@blogs = [
			{
				pic: "what_happens.png",
				title: "What happens if you give 200% in a coding bootcamp",
				views: "+1000",
				date: "Jun 29",
				time: "22 min read"
			},
			{
				pic: "js_webpack.png",
				title: "Rails 5 + JavaScript + Webpack: the ultimate guide",
				views: "+400",
				date: "Apr 15",
				time: "18 min read"
			},
			{
				pic: "chatbot.png",
				title: "Build your own Chatbot with Google Dialog Flow",
				views: "+2000",
				date: "Mai 27",
				time: "32 min read"
			},
		]
	end
end






















