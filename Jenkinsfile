pipeline {
    agent any
    tools {
        nodejs '16.14.2'
    }

    options {
        timeout(time: 3, unit: 'MINUTES')
    }

    stages {
        stage('Install') {
            steps {
                sh 'npm install'
            }
        }
        stage('Run tests') {
            steps {
                sh 'npm run test'
            }
        }
    }
}