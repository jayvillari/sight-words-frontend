# Site Words - A Learning App

Application offering Sight Word practice for Children and Word expansion for Teens and Adults. Children can practice and learn up to the first 100 recommended sight words for Kindergarten. Adults will utilize an expansive list of words with definitions from our WordAPI. Game play is supported in manual or autoplay modes. Manual allows the user to indicate Correct or Incorrect and can skip words. At the end of the word list, users can replay incorrect or skipped words to practice more. Autoplay incorporates Voice Recognition to recognize a Correct or Incorrect word when spoken to move the game forward to the next word. Your score is tallied and rendered when the user reaches the end of the list.
<br>

---

[[_TOC_]]

## <br>

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
| Git Hub set up| Initialize Bootstrap | Design Implementation | Implement Control Button Logic | Implement Score Logic | Heroku Launch |
|Research React Bootstrap| Design Logo/Theme |Working Nav Buttons | Define Score Logic | Work on Voice Recognition |
|Plan Components and Architecture | Initial Component Code | Card Data Display | Work on Authentication | Implement Card w/ Definition and Action|
|Create DB| | Hitting DB | Create End Game | Finalize Readme|
|Finalize Wireframes ||Instructions Component Code | Develop Presentation |
|Outline MVP, Stretch || Define Button Logic | Connect API for Adult Game |
|Plan Timeline || Display Adult Card Content|
|Create Word Lists|
|Develop User Stories|

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
- Implementing Authentication for access to the Adult words game (due to API call)
- Implementing Weekly Game Calls for Child version
