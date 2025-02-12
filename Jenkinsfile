pipeline {
    agent any  // This will run the pipeline on any available agent

    tools {
        nodejs("nodejs")
    }
    stages {
        stage('Install Dependencies') {
            steps {
                script {
                    sh 'npm install'
                }
            }
        }

        stage('Build Node App') {
            steps {
                script {
                    sh 'npm run build'
                }
            }
        }


        stage('Archive Build Artifact') {
            steps {
                archiveArtifacts allowEmptyArchive: true, artifacts: 'build/**/*', followSymlinks: false
            }
        }
    
    }

    post {
        success {
            echo 'Build and deployment successful!'
        }

        failure {
            echo 'Build or deployment failed.'
        }
    }
}

