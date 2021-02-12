# Overview

Sonarqube is a static code analysis tool used to ensure reliability, security, and maintainability of all the languages in your project. It detects vulnerabilities, provides an explanation and remediation steps.

This repository had multiple violations and bugs, the goal is to run the sonarqube scans against this repository and ensure that all violation are remediated.

## Installation

Install sonar-scanner for you OS using the following link and move it to your bin directory or follow the commands below for macOS

Docs: https://docs.sonarqube.org/latest/analysis/scan/sonarscanner/

```bash
curl https://binaries.sonarsource.com/Distribution/sonar-scanner-cli/sonar-scanner-cli-4.5.0.2216-macosx.zip -o ./sonar-scanner-cli-4.5.0.2216-macosx.zip &&
sudo unzip sonar-scanner-cli-4.5.0.2216-macosx.zip -d /usr/local/bin
```

```bash
sonar-scanner -v
```

```docker
docker run -d --name sonarqube -p 9000:9000 sonarqube:latest
```

Note: It takes about 1 minute for the server to get setup and start

Navigate to http://localhost:9000/ and login using the default credentials - username: admin password: admin

You will be asked to change password

## Properties file

We can create a sonar-project.properties file to manage some of the analysis settings. This should be placed in the root directory of the project.

Parameter documentation: https://docs.sonarqube.org/latest/analysis/analysis-parameters/

Change to the project you wish to analyze and run the following command

```bash
touch sonar-project.properties && echo "# name of project-key
sonar.projectName=my-project
# defaults to 'not provided'
sonar.projectVersion=1.0
# Path is relative to the sonar-project.properties file. Defaults to .
sonar.sources=.
# Encoding of the source code. Default is default system encoding
sonar.sourceEncoding=UTF-8
# Default SonarQube server
sonar.host.url=http://localhost:9000" >> sonar-project.properties
```

Running the scanner locally

```bash
sonar-scanner -Dsonar.login=<add-login-here>
```
