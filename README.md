# Hubstaff Talent

Preface: The hiring assessment was completed on the [master branch](https://github.com/lapinell/hubstaffTalent/tree/master). I am currently working on a branch called master2 in order to complete my capstone requirements. (That is, I am using this assessment to also complete my capstone but I have to add a few more things to it that weren't required and wouldn't have been completed within the original assessment timeframe.)

This project is a hiring assessment from RiskSense HR. The time give to complete the project is one week, and the average completion time is 10 hours.

**Skills being assessed are:**
* HTML
* JS
* CSS
* SASS
* Ant.Design
* ReactJS
* MySQL for DB

## Instructions for Front end engineer assignment

**API:**
* Build a nodeJS rest API that returns a list of jobs searched by keyword, posted_date, availability (fulltime or part-time), and other fields as necessary shown in this UI.

https://dribbble.com/shots/2935516-Job-search/attachments/609506

**UI:**
* Build a ReactJS application that builds the design exactly as shown in the screenshot at https://dribbble.com/shots/2935516-Job-search/attachments/609506 and connect it to the rest API that you just built, and enable searching based on all of the filters.
* Use ant.design ui components as opposed to bootstrap.
* Redux use is not necessary

**Evaluation is done on the basis of:**
* Use of tech
* Quality of code
* Design quality
* Implementation speed
* Data structure designed
* Functionality and how well it works.

## Instalation Instructions

1. Clone/Fork the repo
2. Install using
```
    npm install
```

## Tools

### Database
In order to complete this project, I have chosen to use:
* [Github's Jobs API](https://jobs.github.com/api) for a list of jobs
* [JSON-server](https://www.npmjs.com/package/json-server) for any possible CRUD functionality (if needed)

_Note:_ I chose not to build in NodeJS because, at the moment, I do not know NodeJS - though am excited to learn this after I graduate.

### User Interface
For the user interface, I have chosen to use:
* [ReactJS]() as my framework
* [Ant.Design]() as my component library
* [SCSS]() as my css framework and compiler

_Note:_ Ant.Design is a new component library to me. Before I was using Bootstrap and Reactstrap as my component libraries. I also have not used SCSS with React before.

## Project Plan

Project Calendar

| Thursday | Friday | Saturday | Sunday | Monday | Tuesday | Wednesday |
| :------: | :----: | :------: | :----: | :----: | :-----: | :-------: |
| Project Plan | Get from API | Style components | Review assignment |
| Github Setup | Breakdown design | Integrate API | Turn in completed assignement |
| Install DB | Design architecture | Implement Components |
| Setup React | Create components | 
| Install Styleguidist |

## Component Architecture Design

This is based off of the [Thinking In React](https://reactjs.org/docs/thinking-in-react.html) article in the [React Documentation](https://reactjs.org/docs).

### Component Heirarchy

* Search Page
    * NavBar
        * MenuItems
    * SearchContent
        * SearchBar
        * FilterSidebar
            * FilterCategory
            * Tags
            * Checkboxes
            * InfoIcon
        * Results
            * ResultsHeader
            * ResultsFooter
            * SingleResult
                * ResultTags
        * FeaturedSidebar
            * FeaturedSection
                * FeaturedJob
    * Footer
        * FooterColumn

### Identifying The Minimal (but complete) Represenation of UI State

**All the pieces are:**
*   The original list of jobs
*   The search text the user has entered
*   The value of the filters
*   The filtered list of jobs
*   The featured job lists

**Which one's have state?**
1. Original list of jobs:
    1. Is it passed in from a parent via props? Yes.
    1. Does it remain unchanged over time? No.
    1. Can you compute it based on any other state or props in your component? Yes.
    2. **No state**
2. The search text the user has entered:
    1. No
    2. No
    3. No
    4.  **Has State**
3.  The value of the filters
    1.  No
    2.  No
    3.  No
    4.  **Has state**
4.  The filtered list of jobs:
    1.  No
    2.  No
    3.  Yes
    4.  **No state**
5.  The featured job lists
    1.  No.
    2.  No.
    3.  Yes.
    4.  **No state**

Components with state:
* Search bar
* Filters

### Identifying where the state should live

* The ``SearchContent`` needs to filter the job list based on state, ``SearchBar`` needs to display the search text and the filters in ``FilterSidebar`` needs to display the filtered state.
* The common owner component is ``SearchContent``

### Component Architecture Layour
_Note: This deviates from the Think In React article._

* App.js (aka Search Page since this is the only page I'm building)
    * NavBar
    * SearchContent (state lives here)
        * SearchBar (has state)
        * FilterSidebar (has state)
        * Results
        * FeaturedSidebar
    * Footer

##Next steps 

To complete minimum project goals:
* create functionality for Search Bar so that it filters results based on the query passed through my Search api-call function (see API-interactions/api-calls.js)
* create functinoality for each filter in the Filters Sidebar so that it filters results based on the query passed through the appropriate api-call function  (see API-interactions/api-calls.js)

##Further Steps:
* create an account page where user can save/fave jobs as well as delete saved jobs
    * also be able to set preferences for jobs
* create a job details page that dynamically populates each jobs information



