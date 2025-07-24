console.log("App is running");

let userSearchTerm = "happy"; // Default search term

   async function fetchSimilar() {
    const response = await fetch(`https://api.datamuse.com/words?ml=your_word=${userSearchTerm}&limit=10`);
    console.log(response);

    const similarData = await response.json();
    console.log(similarData);   
   }


   fetchSimilar();