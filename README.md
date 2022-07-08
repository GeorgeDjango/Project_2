![imageName](/static/images/logo.png)

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


