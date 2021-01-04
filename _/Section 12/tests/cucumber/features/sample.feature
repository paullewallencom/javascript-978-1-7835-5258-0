Feature: One-liner description of this feature

  As a User
  I want to enter a profile
  So that I can return later



  # The background will be run for every scenario
  Background:
    Given I am a new user

  # This scenario will run as part of the Meteor dev cycle because it has the @dev tag
  @dev
  Scenario: Check My Page Title
    When I navigate to "/"
    Then I should see the title "Quiet Earth"

  @dev
  Scenario: Check My Save Profile Button
    When I navigate to "/profile"
    Then I should see the save profile button