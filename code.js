let results = [null, null, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

// Your Code Here!

// Function to roll a single six-sided die and return the result.
function rollDie() {
    return Math.floor(Math.random() * 6) + 1;
  }

  function rollTwoDice() {
    let die1 = rollDie();
    let die2 = rollDie();
    return die1 + die2;
  }


function renderGraph() {
    let graphDiv = document.getElementById("graph");
    graphDiv.innerHTML = "";
  
    // loops through each possible dice result and adds a div element to the graph with the count of how many times that result has occurred.
    for (let i = 2; i <= 12; i++) {
      let count = results[i];
      let countDiv = document.createElement("div");
      countDiv.innerText = `You rolled a ${i}: ${count} times`;
      countDiv.style.width = "100px";
      countDiv.style.backgroundColor = "gray";
      countDiv.style.padding = "5px";
      countDiv.style.margin = "5px";
      graphDiv.appendChild(countDiv);
  
 // Adds a break line between each count <div>.

      let breakElement = document.createElement("br");
      graphDiv.appendChild(breakElement);
    }
  }


  let rollButton = document.getElementById("roll");
  let resultDiv = document.getElementById("result");

  rollButton.addEventListener("click", function () {
    let roll = rollTwoDice();
    results[roll] += 1;
    resultDiv.textContent = "You rolled a " + roll + "!";
    renderGraph();
  });

  document.getElementById("thousand-roll").addEventListener("click", function() {
      // Rolls 1000 pairs of dice, updating the results array with the new counts and displays the updated graph.
    for (let i = 0; i < 1000; i++) {
      let diceResult = rollTwoDice();
      results[diceResult] += 1;
    }
    renderGraph();
  });