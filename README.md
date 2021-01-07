# Site Words - A Learning App

Application offering Sight Word practice for Children and Word expansion for Teens and Adults. Children can practice and learn up to the first 100 recommended sight words for Kindergarten. Adults will utilize an expansive list of words with definitions from our WordAPI. Game play is supported in manual or autoplay modes. Manual allows the user to indicate Correct or Incorrect and can skip words. At the end of the word list, users can replay incorrect or skipped words to practice more. Autoplay incorporates Voice Recognition to recognize a Correct or Incorrect word when spoken to move the game forward to the next word. Your score is tallied and rendered when the user reaches the end of the list.
<br>

---

[Site Words Demo](https://site-words-app.herokuapp.com)

[API](site-words.herokuapp.com/child)

### MVP

- React App w/ Express Mongo Mongoose
- Sight Word App for Kindergarteners
- Adult Word App for Grammar/New Words
- Deployed Online
- Bootstrap UI/CSS
- Routes
- Associations
- Game End Surprise
  <br>

---

### Extras/Stretch

- Auto Check w/ Voice Recognition
- React Native
- Authentication

### Planning

| Day 1 | Day 2| Day 3| Day 4| Day 5 | Day 6 |
| <ul><li>Git Hub set up</li><li>Research React</li><li>Plan Components and Architecture</li><li>Create DB</li><li>Finalize Wireframes</li><li>Outline MVP, Stretch</li></ul> | <ul><li>Plan Timeline </li><li>Create Word Lists</li><li>Develop User Stories</li><li>Initialize Bootstrap</li><li> Bootstrap Research</li></ul> | <ul><li>Design Implementation</li><li>Design Logo/Theme </li><li>Initial Component Code</li><li> Hitting DB</li></ul> | <ul><li>Implement Control Button Logic</li><li>Working Nav Buttons</li><li>Card Data Display </li><li>Create End Game</li><li>Instructions Component Code</li><li>Define Button Logic</li><li>Display Adult Content Card</li></ul> | <ul><li>Implement Score Logic</li><li>Define Score Logic </li><li>Work on Authentication </li><li>Finalize Readme</li><li>Develop Presentation </li><li>Connect API for Adult Game</li></ul> | <ul><li>Heroku Launch</li><li>Work on Voice Recognition </li><li>Implement Card w/ Definition and Action</li></ul>|

### User Stories

- User can select from Child Game play
- User can select from Adult Game play
- User can select from manual play
- Manual play will include manual word check through end of word list
- User will access primarily from a mobile device
- User will be able to read instructions
- User will be able track correct and incorrect words through scoresheet
- User will be able to replay incorrect and skipped words

---

_Stretch_

- User will be able to login/logout to the site
- User can select autoplay
- Auto play will include voice recognition to check correct word
  <br>

---

### Wireframes

[Figma Wireframes - Project 4 Site Words](https://www.figma.com/file/e9h34Xc3p9uappdPHDMq2F/Project-4)
<br>

---

### Technology

- React
- React Bootstrap
- Mongo/Mongoose DB
- Heroku
- API (Calling adult words)
  ** https://random-word-api.herokuapp.com/home
  ** https://dictionaryapi.com/products/api-collegiate-dictionary
  \*\* Internal Class Words

## <br>

### Struggles

- Rendering the data item in the card, kept mounting before there was available data
  - Error Cannot get property .word undefined
- React Bootstrap components sharing design elements
- Counting child component items data and displaying at parent level for the scorecard
- API calls making sure the promise has data before fulfilling the response
- Pulling in a limit of Adult words (so as to have an “end of List”) from the thousands of words available in the API
- Flipping the card to see the definition without overrotating
- Implementing Authentication
  <br>

---

### Logic

[Play Structure](https://docs.google.com/presentation/d/1Vw-8hVFl4E5waPoqsAb1W9fgJd0FWT5DjaGUAgNApLk/edit#slide=id.p)
<br>

---

### Future

- Incorporate Spanish Language words
- Implementing Authentication for access to the Adult words game
- Implementing Weekly Game Calls for Child version
