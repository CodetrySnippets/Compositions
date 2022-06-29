//This function compiles, but it doesn't run
function scriptStruggle(doesItCompile, doesItRun) {
    console.log("Wait, now it does (?)");
    if(doesItCompile && !doesItRun){
        console.log("What the f*ck is going on?!");
    }
}

// Runs the #CodetrySnippet
scriptStruggle(true, false);