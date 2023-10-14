Feature: Login to Nexudus platform

  Background: Logincredentilas  Add, search, and delete a product
    Given I access the Nexudus URL
    And I log in with valid credentials "adrian+1004930927@nexudus.com" and "414HHK9dxg--Gj"
    When I click on the "Sign In" button
    Then I confirm the login succeeds and I am presented with the dashboard home page


  @Validation @Regression @Smoke @TC_03
  Scenario: Add, search, and delete a product
    When I navigate to "/billing/products"
    When I click on the "Add Product" button
    When I click on the "Manual entry" button
    And I fill in the following details: "<Product_name>" "<Product_description>" "<Unit_price>"
    When I click on the "Save changes" button
    When I click on the "Save changes" button
    Then I search for "<Product_name>" to ensure it is the first result
    And I select the first item in the list
    When I click on the "Delete" button
    When I click on the "Yes, do it" button
    Then I confirm that "<Product_name>" product is no longer available
    Examples:
      | Product_name         | Product_description   | Unit_price |
      | Caleb Smith | BDDCucumber Speckflow | 10.90      |





