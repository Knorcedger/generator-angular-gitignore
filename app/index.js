'use strict';
var generators = require('yeoman-generator');

module.exports = generators.Base.extend({
	writing: function() {
		this.fs.copyTpl(
			this.templatePath('.gitignore'),
			this.destinationPath('.gitignore')
		);
	}
});
