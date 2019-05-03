---
layout: page
title: A CI/CD Checklist
---

I propose a simple checklist to manage multiple projects by a distributed team. The aim is provide a document for teams to improve their processes of delivering software with concrete steps and technologies to resolve it. **You should adapt it to your needs and technology stack!**

**Why?**: Often, processes are not repeated in different parts of an organization, this checklist aims to be used as a document for all teams to execute in a unified and growth-oriented way.

See the [The Continuous Delivery Maturity Model](https://www.infoq.com/articles/Continuous-Delivery-Maturity-Model) for more information about the approach. See more about why [checklists are a good idea](http://atulgawande.com/book/the-checklist-manifesto/).

## Culture, Org & Processes

### 1. BASE
- Version control: Project code is version in Gitlab, migrated from other sources?
- Feature branches: A branch is created for every change and commits go first to this branch
- Code review: A Merge Request is created for every push (no direct push to master or develop) and reviewed by another team member
- Versioning: Project uses MAJOR.MINOR.PATCH versions (as according to [semver.org](https://semver.org/))

### 2. BEGINNER
- A single person is named `BUILD MASTER` which ensures the builds stay green and get fixed in case of failure.
- Project uses 2 main branches (`develop` and `master`) but every iteration (sprint) `develop` gets merged to `master` *(this is meant to be improved upon)*
- Developers do code review each other via MR (at least one of the developers has experience)
- Project can be built with a single command
- Project follows a single standard for dependency management.
- Gitlab shows badges with the health of the build

### 3. INTERMEDIATE
- TDD: Every Issue gets written first as a set of unit tests. The functional code is created afterwards.
- Project has switched to one single active branch (master), develop is not used.
- A Hotfix job is created to build special versions in emergency cases
- Each MR corresponds to a Taiga (or Jira) task. The MR name contains the number of the task
- Each MR is rebased to include a single commit. The new commit message is descriptive and can potentially be used to create a changelog.
- Each MR gets it's branch rebased, and branch is removed/archived after merge
- Project has AD (LDAP) group created with the team members
- Jenkins uses group to give basic read permissions to AD group
- Sonar uses group to give basic read permissions to AD group
- Gitlab uses group to give `Developer` status to AD group
- Management, Clients and Users expect to receive a release to QA environment every iteration or sprint.

### 4. ADVANCED & EXPERT
- BDD: Every User Story gets written first as a set of user acceptance tests. At a minimum one happy path is coded. The functional code is created afterwards.
- Management, Clients and Users expect to receive a release to LIVE environment every iteration or sprint.
- Management, Clients and Users expect to receive a release to LIVE environment several times per day.
- Cross-functional teams, MCON and CF style

## Design and Architecture

### 1. BASE
- The project uses a single coding standard for all files of the project.

### 2. BEGINNER
- The project uses a single coding standard enforced in a pre-commit hook.
Developers cannot commit if standard is not followed.
Project cannot be built if standard is not followed.
- Artifacts have no configuration (build once, run everywhere). See [12factor.net](https://12factor.net/)
- If this is an API project, interface is clear and can be deduced automatically from the controller code.
- Feedback with results of code changes is immediate on local machine.

### 3. INTERMEDIATE
- Configuration management: Configuration is stored in version control and can be rolled back.
- Database schema is maintained automatically via scripts in the git repo.

### 4. ADVANCED & EXPERT
- Component based architecture: Reusable modules are used across teams in the company.
- API projects: API is versioned and multiple versions of the API can be called
- Infrastructure as code

## Build & Deploy

### 1. BASE
- A single Jenkins CI URL is available per project, with several Build Jobs. Optionally, separate Jenkins for Deployment is created.
- Jenkins CI Build Jobs currently running, the builds are working.
- Jenkins CI sends an email notification to the team if build fails or is restored
- A CI DEV environment (internal review) available for integration and uses polling for automated deployments.

### 2. BEGINNER
- A CI QA environment (external review) available for integration and automated deployment. Automated deployments are triggered manually.
- Jenkins has been updated for Jenkins 2, this will enable Pipelines in upper maturity stages.
- The team can see Jenkins build configuration. View Configuration plugin can be used to achieve this securely.
- Artifact Storage: Nexus repository is present for the projects. Group ID and Artifact ID are defined and documented.
- Nexus receives artifacts from Jenkins directly (no manual uploads)
- Jenkins build runs automatically on push to master, notifies teams.
- Deployment to a DEV server (internal review) is completely automated 
- Versioning: Jenkins CI bumps (+1) the PATCH of the version on every successful build. This is committed back as a tag. Jenkins performs the git tagging (no manual tags are created by the team)

### 3. INTERMEDIATE
- Project has at least 3 types of configured jobs: Build, Deployment and E2E test.
- Deployment to a QA server is completely automated (external review)

### 4. ADVANCED & EXPERT
- Jenkins CI pipelines are setup to connect build, deploy and E2E test jobs.
- Jenkins pipelines are committed and versioned in a separate Gitlab repo.
- Automated and on-demand creation of test environments
- Deployment to a LIVE server is fully automated (public release)
- Zero touch continuous deployment to production where every commit can potentially make it all the way to production automatically.
- Build bakery: Produce VMs/containers on the fly in the pipeline as deployable artifacts.

## Test & Verification

### 1. BASE
- Testing is done manually, tester role is defined. Manual testing is documented in User Acceptance Test in each User Story.
- Issue Tracking: Testing findings are always reported as Taiga (or Jira) issue, with an assignee.
- Unit tests (minimum 1 test) runs with one command on a local development environment.

### 2. BEGINNER
- Build fails if any unit test fails.
- Each MR includes updates to the unit test it affects (prevent regressions)
- Unit tests coverage is reported automatically in the build.
- Unit tests coverage is over 80%
- Regressions Prevention: Every bug fix contains a new UT test case to prevent regressions; unit tests name contains the Taiga (or Jira) issue code.
- Coverage is reported on the screen after running a single test command on a local file. External services of the project are mocked.
- Automated Smoke tests: E2E tests for all 1 or 2 base business cases.

### 3. INTERMEDIATE
- All bug fixes contain updates to UAT cases in order to prevent regressions
- Automated User Acceptance Testing: E2E tests for all correct (happy) cases.
- Team can access the project interactively to check the functionality.
- Mutation Testing in an additional Jenkins Job runs to guarantee UT quality

### 4. ADVANCED & EXPERT
- Automated User Acceptance Testing: E2E tests for all error cases. When bugs are found, they are added to the suite.
- Selenium tests run for all user stories (error cases)
- Automated integration testing
- Automated performance testing
- Businesses metrics are in the definition have done: from release to sometime later business has analyzed the effects of the released feature or change and evaluate the impact

## Information & Reporting

### 1. BASE
- Logging mechanism is useful and uses several levels (DEBUG, INFO, ERROR, etc.).
- README.md explains the projects goals and role in the architecture
- README.md project local build has complete setup documentation

### 2. BEGINNER
- Sonar is configured for the project
- Sonar report is updated (last version)
- Sonar quality gate is reported in Jenkins
- Sonar reports the unit test coverage in the dashboard.

### 3. INTERMEDIATE
- Sonar reports less than 2 days of technical debt
- Logging is configured to be sent to Graylog, the logs are visible to the team.
- API project: Interface (controllers) is clear and contract is deduced automatically from the code.

### 4. ADVANCED & EXPERT
- Monitoring using ELK (logstash first).
- Event based monitoring using Graphana, Prometheus.


