# week-7-assignment


# Project name:
SIMI (abbreviation of similar)

### Live Github Pages link(if applicable):


## Project description:
This is a mobile first app that generates similar words upon search of singular and multiple words

## Problem domain:

Thesaurus and dictionary sites look outdated and come with too many features that can be overwhelming

## Reflections:

Please mention the requirements you met and which goals you achieved for this assignment.

### 🎯 What requirements did you achieve?

- I achieved all requirements including: 
Accessibility - able to use tab to navigate the search bar 
focus pseudo-class and outline property on search bar
- I also was able to implement some design principles like accesibility: Clear text with enough contrast to the apps plain muted background, consistency: equal spacing, centered text all in lowercase for aesthetic. 
- SIMI logo - simplistic, duotone, bold in capitals for visual emphasis. (I also created a plain, plain black and outlined black logo which I tested out on the page) 
- Modified the api using extra query parameters 
https://api.datamuse.com/words?ml=happy
(the term ml for 'means like')


### 🎯 Were there any requirements or goals that you were not quite able to achieve?

- N/A
-

### 🎯 If so, could you please tell us what was it that you found difficult about these tasks?

- Choosing an API suitable for what I wanted was difficult, I initially had the idea for the user to search via mood to return a suitable meme. (using IMG flip) After reading the rules of IMG flip I realised the user would need a membership/login. (This was after i crafted the html and java for it) (as i write this I'm thinking about another API to use)
-

### What went really well and what could have gone better?

- The design/branding part always comes easily to me, I think of a concept and run with it but this can be to my detriment because I become fixed on a concept which means pigeonholing the process 
- Getting my head around the javascript side of things could of gone better, I literally had to start from scratch on wednesday evening so I could watch through the lesson video to understand each step and where I was going wrong with my code. I realised later on down the line that the word for my array to enable a loop was "word". Frustratingly enough I was glad to have perservered to find the solution. (In Frankies demonstration his word was "doc")

### Detailing useful external sources that helped you complete the assignment (e.g Youtube tutorials):

My tabs list is abysmal but here are a few sources below:

- https://stackoverflow.com/questions/19576829/im-using-normalize-css-why-does-it-have-40px-padding#:~:text=Browser%20CSS%20typically%20will%20set,by%20all%20means%20change%20it.&text=If%20you%20check%20ul%20using,for%20ul%2C%20menu%2C%20dir%20.
- stackoverflow.com ^ ( i was trying to center a ul on my page, after inspecting console i realised the unordered list had its own properties attatched by default - so i queried this on google and this forum helped me resolve the padding issue) this was a good learning curve!!!
- reddit (api advice for image search apis/ how to find apis used on certain websites)
- chat gpt (initially used to help me debug my javascript code but it didn't understand the query which resulted in an unhealthily lengthy and unuseful chat)

### Describing errors or bugs you encountered while completing your assignment:

- undefined (reading 'forEach') as I didn't include data that the code could recognise within the API 
- Access to fetch at 'https://api.ksoft.si/music/recommendations?q=happy&limit=10' from origin 'http://127.0.0.1:5500' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.

### References:

https://www.datamuse.com/api/



