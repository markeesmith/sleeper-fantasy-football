pipeline {
    agent any

    tools {nodejs "Node 14.15.4"}

    environment {
        CI = 'true'
    }

    stages {
        stage('Build') {
            steps {
              echo 'Installing dependencies...'
              sh 'npm install'
            }
        }
        stage('Test') {
            steps {
              echo 'Running tests...'
              sh 'npm run test'
            }
        }
        stage('Deploy DEV') {
            when {
                branch 'dev'
            }
            steps {
                echo 'Deploy Dev placeholder for DEV branch'
            }
        }
        stage('Deploy PROD') {
            when {
                branch 'master'
            }
            steps {
                echo 'Deploy Stage placeholder for MASTER branch'
            }
        }
     }
}