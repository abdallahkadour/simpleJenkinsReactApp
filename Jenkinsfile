pipeline {
    agent any
    environment {
    ANDROID_SDK_ROOT = '/var/jenkins_home/android-sdk'
}
    stages {
        stage('Install') {
            steps {
                sh 'npm i'
            }
        }
        stage('Build APK') {
            steps {
                dir('android') {
                    sh 'chmod +x ./gradlew'
                    sh './gradlew :app:assembleDebug --no-daemon'
                }
            }
        }
        stage('Archive') {
            steps {
                archiveArtifacts artifacts: 'android/app/build/outputs/apk/debug/app-debug.apk', fingerprint: true
            }
        }
    }
}