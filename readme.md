# Playwright and Cucumber Framework for Web Testing

Welcome to the Playwright and Cucumber framework for web testing. This framework is designed to facilitate automated web testing using Playwright and Cucumber in a JavaScript environment.

## Table of Contents

1. [Introduction]
2. [Prerequisites]
3. [Getting Started]
4. [Usage]
5. [Project Structure]

## Introduction

This framework combines Playwright for web automation and Cucumber for behavior-driven testing. It provides a structured way to create and execute web test scenarios.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed. If not, you can download and install them from [nodejs.org](https://nodejs.org/).

## Getting Started

To get your project up and running, follow these steps:

1. Clone this repository to your local machine:

   ```shell
   git clone https://github.com/yourusername/your-project.git

   ```

2. Navigate to the project directory:

cd your-project

3. Install the required dependencies:
   npm install

4. Set up your environment variables:

Create a .env file in the project root.
Add your necessary environment variables (e.g., login credentials).
USERNAME=your_username
PASSWORD=your_password

## Usage

To run tests using this framework, follow these steps:

Execute tests:
npx cucumber-js

Monitor test results in the console. Any failed tests will provide error details.

## Project Structure

Here's an explanation of what each part of framework is doing:

@Validation @Regression @TestLogin01: These are tags that you can use to categorize and label your scenarios for different purposes (e.g., validation, regression). Tags can help you organize and filter scenarios when you run your tests.

Feature: Log-in page successful login with valid details: This line defines the feature you are testing, which is the log-in page for successful login with valid details.

Background: The background section sets up the common steps that will be executed before each scenario in the feature file. In this case, it prepares the system for the scenario by accessing the Nexudus URL, logging in with valid credentials, and confirming a successful login.

Scenario: User logs in successfully with valid details: This is the first scenario you're testing, where a user logs in with valid details.

Also, This scenario represents the test case where you add, search, and delete a product. It starts with navigating to the billing/products page, adding a product, searching for it, and finally deleting it.

The steps within the scenario are defined using Given, When, And, and Then steps. These steps represent the actions and verifications you want to perform during the test.

Given, And, When, and Then are steps in the Gherkin language that define the actions and expected outcomes for your scenarios.

Examples: This section is used for data-driven testing. You provide a table of data with placeholders (<username> and <password>) that will be replaced with the actual values during the test. Each row in the table represents a separate test case.
