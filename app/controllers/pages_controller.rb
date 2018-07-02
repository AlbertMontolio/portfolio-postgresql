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
	end

	def blogs
		@blogs = [
			{
				pic: "200_bootcamp.jpg",
				title: "What happens if you give 200% in a coding bootcamp",
				views: "+1000",
				date: "Jun 29",
				time: "22 min read"
			},
			{
				pic: "200_bootcamp.jpg",
				title: "Rails 5 + JavaScript + Webpack: the ultimate guide",
				views: "+400",
				date: "Apr 15",
				time: "18 min read"
			},
			{
				pic: "200_bootcamp.jpg",
				title: "Build your own Chatbot with Google Dialog Flow",
				views: "+2000",
				date: "Mai 27",
				time: "32 min read"
			},
		]
	end
end






















