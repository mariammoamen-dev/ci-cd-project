pipeline {
    agent any
tools {
        nodejs 'Node-24'
    }
    stages {

        stage('Checkout Code') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm ci'
            }
        }

        stage('Install Playwright Browsers') {
            steps {
                sh 'npx playwright install --with-deps chromium'
            }
        }

        stage('Run Playwright Tests') {
            steps {
                sh 'npx playwright test'
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: 'playwright-report/**',
                             allowEmptyArchive: true

            junit testResults: 'test-results/**/*.xml',
                  allowEmptyResults: true
        }

        success {
            echo 'Playwright tests passed!'
        }

        failure {
            echo 'Playwright tests failed!'
        }
    }
}