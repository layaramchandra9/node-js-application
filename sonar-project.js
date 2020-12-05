const sonarqubeScanner = require('sonarqube-scanner');

sonarqubeScanner({
  serverUrl: 'http://3.22.169.159:9000/',
       options : {
	    'sonar.projectDescription': 'This is a Node JS application - CICD',
	    'sonar.projectName': 'Node JS Application - Sample',
	    'sonar.projectKey':'NodeJsApp',
	    'sonar.login':'c244df570e81deabc2423024699000dbef89979b',
            'sonar.projectVersion':'1.0',
	    'sonar.language':'js',
            'sonar.sourceEncoding':'UTF-8',
            'sonar.sources': '.',
	    //'sonar.tests': 'specs',
        //'sonar.inclusions' : 'src/**'
       },
}, () => {});
