# password-generator

https://tannerleach90.github.io/password-generator/

##Method: Asking the user via the javascript prompt functions (confirm) what they want the parameters of their password to be. Storing their options that they selected in an object. Then validating that the password both exists and is the right length via params.length property. Because params.length is undefined, it fails a check and that is where the while loop comes in. From my understanding, based on the length and their options, the loop goes over the random generator a certain amount of times. Random generator picks a random character from each line and picks a random character from each user params choices up to the length chosen. My roommate helped me.