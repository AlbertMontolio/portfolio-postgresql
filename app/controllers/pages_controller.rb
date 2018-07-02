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
	end
end
