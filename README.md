# Sware-Eng-Summ1


## Introduction

This repo holds code and files for the Software Engineering module summative 1 assessement. Primarily this is an assessment response, but it's also a real project with real business value potential. Broadly this work requires proposing a product, planning the project that will create it, designing the product (including a prototype), building a minimum viable product, using test driven development, adding features gradually, writing user and technical documentation, keeping documentation up to date through use of ticketing, branches and pull requests, and finally evaluating the latest version of the product.


## Product Proposal 

All staff in my organisation are expected to attend an office location for a certain proportion of their working time, and senior leaders receive reports about each staff member's attendance statistics, which are used as part of performance management. In principle, policy states that the minimum attendance is 60%, measured as a proportion of working days within each calendar month. However a range of factors influence this, including the way in which attendance is measured by the business. On any given day attendance is logged via any connection to the IT network from an office location, or by an intranet form where official business takes staff to non-organisation sites. In practice there are several complicating factors, for example staff may have a lower minimum attendance agreed with their manager via a workplace adjustment, all staff take annual leave and sick days which aren't counted as working days for attendance proportion calculations, and the number of working days available in each calendar month varies naturally. As such, for staff who value a the lowest possible amount of office working, and for those with busy lives, for example parents, it can be difficult to understand how many attendances they need to meet their monthly target, and hard to schedule as a result.

I propose the developing of an app for staff members to manage their personal attendance. The app should allow individuals to input data about their agreed attendance level, days they have attended the office or a qualifying other location and days that don't count as working days such as annual leave, and the app should provide output to tell the user what their current attendance is, and how many attendance days are required to meet their personal target for the current calendar month. Potentially it could also provide access to historic data to compare to the organisation's own statistics, which have sometimes been found to be incomplete.

The product should be a simple web app, available to everyone in the business, and should not require the use of any personal information.


## Design and Prototype


## Plan

### Project management technique

The [project roadmap](https://github.com/users/ElTigreNumero5/projects/4/views/4) sets out four key phases for this work
    1. Planning
    2. Design and prototyping
    3. Development
    4. Write up
    
In the planning phase I undertook all issues associated with the preparation of this project, including deciding what project management framework to use and implementing that framework and the tools required to utilise it. I have chosen to use a lightweight version of Scrum Agile, taking some of the useful features of this framework such as backlogs, sprints and agreed deliverables to assist in managing delivery of user requirements.

### Project management tools

#### Sprint planning

To deliver the outputs of subsequent phases, proper sprint planning is required. These sprints are set out as follows. Typically sprints are longer time-boxes, but for a compressed piece of work such as this and to illustrate their use, I've opted for very short sprints:
    Sprint 1: Design thinking - empathise and define (2 days)
        Issues:
            User research
            Set out empathy and mind maps
            Create user personas
            Identify and document key features identified in user research
        Deliverables:
            Figma board of user research outcomes, empathy and mind maps, user personas and key features
    Sprint 2: Design thinking - ideate and prototype (2 days)
        Issues:
            Produce an oversimple app design
            Build a wireframe prototype
            Build a full prototype
        Deliverables:
            Figma prototype
    Sprint 3: Development - front page MVP (1 day)
        Issues:
            Build app MVP front page
            Build title banner
            Build chart
            Build page change buttons
        Deliverables:
            A front page for the app that contains a title banner, a chart based on dummy data, and two buttons ready for linking to data input and data viewing pages
    Sprint 4: Development - data input page MVP (2 days)
        Issues:
            Start build of app MVP data input page
            Build a calendar view for a single month (an image is fine for MVP)
            Build monthly target display panel
            Build set target button
            Build set target functionality that allows user input of integer between 0 and 100 that is then captured
            Build page change button
        Deliverables:
            A data input page that contains a dummy calendar image, button to link to view data page, button to adjust attendance target value, display of attendance targe value
            Captured attendance target value
    Sprint 5: Summative write up (3 days)
        Issues:
            TBC but all elements of the assignment brief
        Deliverables:
            As per brief

### Tickets
