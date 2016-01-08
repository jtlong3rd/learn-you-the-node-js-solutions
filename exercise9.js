// JUGGLING ASYNC
   
// PROMPT: This problem is the same as the previous problem (HTTP COLLECT) in that  
// you need to use http.get(). However, this time you will be provided with  
// three URLs as the first three command-line arguments.  
   
// You must collect the complete content provided to you by each of the URLs  
// and print it to the console (stdout). You don't need to print out the  
// length, just the data as a String; one line per URL. The catch is that you  
// must print them out in the same order as the URLs are provided to you as  
// command-line arguments.  

var http = require('http');
var urls = [process.argv[2], process.argv[3], process.argv[4]];
var outputs = ['','',''];

var finishedOutputNum = 0;

for (var i = 0; i < urls.length; i++) {
    (function(urlInd) {
        http.get(urls[urlInd], 
                 function (response) {
                     response.setEncoding('utf8');
                     response.on('data', function(data) { outputs[urlInd] += data; });
                     response.on('end', 
                                 function(data) { 
                                    finishedOutputNum++;
                                     
                                    if (finishedOutputNum === 3) 
                                        outputs.forEach( function(nextOutput) { console.log(nextOutput); } );
                                 }
                                );
                 }
                );
    })(i);
}