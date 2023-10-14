

@Validation @Regression @Smoke @TC_01
Feature: Log-in page successful login with valid details

    Scenario: User logs in successfully with valid details
        Given I access the Nexudus URL
        And I type "<username>" as the email and "<password>" as the passwword
        When I click on the "Sign In" button
        Then I confirm the login succeeds and I am presented with the dashboard home page
        Examples:
            | username                      | password       |
            | adrian+1004930927@nexudus.com | 414HHK9dxg--Gj |

    @Invalidation @Regression @TC_02
    Scenario: User logs in successfully with invalid details
        Given I access the Nexudus URL
        And I type "<username>" as the email and "<password>" as the passwword
        When I click on the "Sign In" button
        Then I confirm a clear error message is presented on the screen
        Examples:
            | username        | password    |
            | bad@example.com | badpassword |









