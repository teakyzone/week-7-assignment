console.log("App is running");

let userSearchTerm = "happy"; 

   async function fetchSimilar() {
    const response = await fetch(`https://api.datamuse.com/words?ml=${userSearchTerm}&limit=10`);
    console.log(response);

    document.getElementById("responseContainer").innerHTML = ""; 

    const similarData = await response.json();
    console.log(similarData);  
    similarData.forEach((word) => {
        console.log(word.word);

        const wordList = document.createElement("ul");
        wordList.textContent = word.word;
        document.getElementById("responseContainer").appendChild(wordList);
        
    });
   }


   fetchSimilar();

   const wordSearchForm = document.getElementById("search-form");
   

   wordSearchForm.addEventListener("submit", function(event) {
    event.preventDefault(); 
    console.log(event.target.userSearch.value);
    console.log("Form submitted");
    userSearchTerm = event.target.userSearch.value; 
    fetchSimilar();
    
   });

