pipeline {
    agent any

    stages {
        stage('Clone Repo') {
            steps {
                echo 'Cloning the repository...'
                checkout scm
            }
        }

        stage('Build') {
            steps {
                echo 'Running build step (static project)...'
                // You can run validation scripts or build tools here
            }
        }

        stage('Done') {
            steps {
                echo 'Pipeline completed!'
            }
        }
    }
}
