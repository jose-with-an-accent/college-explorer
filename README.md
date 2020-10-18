# Basic College Tracking app

Created as a project for a 2020 Congressional App Challenge, this project is supposed to be used to track things for the applications process, and in the future, if scraping is possible, exploring different colleges, degrees, etc. Basic functions are still being worked on, though, and there's a very limited amount of time left to implement features.

## How it works

This project uses Firebase and react.js for a serverless environment. Things are as simple as deploying it with normal react projects, but you first have to add your Firebase config in ```src/api/config.json```.

View project progress [here](https://trello.com/b/XCAPXNCu/collegewebapp). 

## Database Structure
- all_colleges
 - ID
  - admissionsAverages
   - act
     - maxAvgRange
     - minAvgRange
   - sat
    - maxAvgRange
    - minAvgRange
   - gpa
    - minGpaAvgRange
    - maxGpaAvgRange
  - bgImage
  - deadlines
   - ID
    - 0
     - appDueBy
     - name
   - description
   - location
    - friendlyCityName
    - friendlyCountryName
    - friendlyStateAbbrev
    - lat
    - long
   - name
   - programs
    - ID
     - program_type
     - program_name
     - id
     - type
    - siteAddress
    - nicknames


      
