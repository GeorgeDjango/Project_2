# README

Welcome to the **README.md** for my drum quiz.
Here you will be able to find the [GitHub repository.](https://github.com/GeorgeDjango/Project_2)


## Description

---

This is a drum quiz I've put together using my knowledge of HTML5, CSS3 and Javascript, as well as some knowledge from being a drum tutor.

On the index.html you have a simple layout, a home button in the header that's been deactivated for this page, a simple title, a button that starts the quiz and takes the user to the game.html, a button that takes the user to the locally stored highscores and a help button in the footer, that has a pop-up to give the user instructions on how to work the quiz.

Next, on the game.html, the user can see a new modified header that still has the home icon (which is now active to take the user to the index.html), and a restart button, either of this will have an alert pop up that will ask the user if they're sure they would like to go home/restart. Below, the user will have a question section that will update depending on which question the user is at, a time that counts down for 2 minutes, which, if it hits zero, will send the user back to the home page, and a running total score, which only updates if the user gets an answer correct.

Going further down, the user will be greeted with their question, some of which may be accompanied by a picture, and then the four possible answers below. When the user gets and answer wrong, their choice will go red, and move on after a second or two, adding no points to their total, if they get it right, their choice will go green, and ten point will be added to their overall score.

Upon completing the ten questions, the user will be taken to then end.html page, where they will be shown their score, given the option to save their score to the scoreboard locally, which will then take them to the highscores.html page where they can view them, here there will be given the option to return home. The other two options will either take the user back to the start of the quiz (game.html) or back to the home page (index.html).


## Features:

---

1. All pages:
- Home button - When active, the home button will alert the user, asking if they're sure they'd want to go back to the home page (index.html).

- Instructions pop-up - When clicked the screen will darken and a pop-up will pop-up and give the user instruction on how to use the quiz.

2. index.html:
- Buttons that take the user to the quiz (game.html) or to the highscores (highscores.html), when highlighted a shadow will surround the button to help the user identify more clearly where the cursor is located.

3. game.html:
- Restart button - When clicked on, this will alert the user, asking if they're sure they'd want to go back to the start of the quiz (game.html).
- Question counter - This will update as the user completes questions, this was the user will know how far through the quiz they are.
- Time - A time that counts from two minutes to zero seconds, if the time reaches zero, the user is taken back to the home page (index.html).
- Score - This will update by a value of ten points for every correct answer the user gets.
- Question - Each question will have text written out, however, a number of the questions will have images (created by me) that will aid the user.
- Answers - As the user hovers over each question they will be highlighted with a shadow to aid the user in knowing which questions they have the cursor pointed at. The questions are also highlighted for a couple of seconds in green, or red, depending on wether the user is correct. If they are, ten points will be added to their total.

4. end.html:
- Username input - Here the user will be able to insert their chosen name to register their score locally.
- Buttons are highlighted - When highlighted a shadow will surround the button to help the user identify more clearly where the cursor is located.
- Save button - Initially the save button is disabled until a name is inserted, then the user clicks save to save their name and score, this will then take them to the Highscores page (highscores.html)
- Play again button - Once clicked the user will be taken back to the first question on the quiz (game.html).
- Home button - Once clicked the user will be taken back to the home page (index.html).

5. highscores.html:
- Scores - Here the user can see all the locally saved usernames and highscores.
- Go home button - Once clicked the user will be taken back to the home page (index.html).


## Tech

---

1. HTML: 
- HTML5 has been used to create the skeleton of my quiz.

2. CSS:
- CSS has been used to style my quiz to make it aesthetically appealing.

3. Bootstrap icons
- Bootstrap icons has been used to give some of my buttons a bit more style.

4. JavaScript
- Java has been used to help give my project some "brains" which has allowed me to build my quiz across various pages.

5. Git
- I have used Git to help me push my project from my local device to an online repo.

6. Github
- I have used Github for hosting my online repo.

---

## Deployment
The hosting platform that I've used for my project is GitHub Pages. To deploy my website to GitHub pages, I used the following steps:
- Loaded the terminal window in my Visual Studio Code workspace.
- Initialised Git using the git init command.
- Added all files to the Staging area (Git) using the git add . command.
- Committed the files to Git using the git commit -m "Initial commit" command.
- Created a new repository in GitHub called 'Project_2'.
- Copied the below code from GitHub into the terminal window in my Visual Studio Code workspace:
- git remote add origin https://github.com/GeorgeDjango/Project_2
- git push -u origin master
- Entered my GitHub username and password to push the files from Git to GitHub.
- Went into 'Settings' on my repository page in GitHub.
- Selected the 'master branch' option under the 'GitHub Pages' section.
- Ran several regular commits throughout my project.

### Live Repo
 https://georgedjango.github.io/Project_2/
 
### Opening Code On Local Device
To run my code locally, users can download a local copy of my code to their desktop by completing the following steps:

1. Go to my GitHub repo.
2. Click 'Clone or download'.
3. Click 'Download ZIP'.
4. Open the zip files and open 'index.html'.


## Credits 

---

### Media
- All content was made by myself.

### Acknowledgements
- I took inspiration from various online quizzes for structure.
