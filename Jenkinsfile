pipeline {
  agent any

  environment {
    NODEJS_HOME = 'C:\\Program Files\\nodejs' // Adjust path to your Node.js installation
    PATH = "${NODEJS_HOME};${env.PATH}"
  }

  stages {
    stage('Checkout') {
      steps {
        git url: 'https://github.com/Asadazam12/RegressionTesting', branch: 'main' // Replace with your Git repo URL and branch
      }
    }
    stage('Install Dependencies') {
      steps {
        bat 'npm install'
      }
    }
    stage('Run Jest Tests') {
      steps {
        bat 'npm run test:jest'
      }
    }
    stage('Run Cypress Tests') {
      steps {
        bat 'npm run test:cypress'
      }
    }
  }
  post {
    always {
      archiveArtifacts artifacts: 'cypress/screenshots/**/*.png, cypress/videos/**/*.mp4, reports/**/*', allowEmptyArchive: true
      // Optional: Generate JUnit reports if configured in Jest/Cypress
      // junit '**/junit.xml'
    }
    failure {
      echo 'Pipeline failed. Check the logs and artifacts for details>>.'
    }
    success {
      echo 'Pipeline completed successfully!'
    }
  }
}