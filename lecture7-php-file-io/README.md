# CSCI 2170: Intro to Server-Side Scripting

__*Winter Semester 2025*__

Lecture discussions: __Jan 29, 2025__

Raghav V. Sampangi, PhD [[raghav@cs.dal.ca]](raghav@cs.dal.ca)

## Class agenda

* Recall: Quick recap of important concepts we've discussed so far...
  * PHP Foundations: variables, datatypes, functions, arrays
  * Dynamic server-side responses using PHP, a.k.a. server-side rendered web pages
  * Different types of responses (Simple HTML & JSON)
* Exploration: (code along / live demonstration)
  * PHP constructs to generate server-side rendered web pages as HTTP responses
  * Working with files on the server-side to support long-term storage of data
  * Working with fetch API in index.php to get data from todo-list.php
* PHP basics:
  * Understanding linking and HTML references in the context of PHP re-use (templates)
  * Using superglobal arrays in coding server-side rendered websites

Please see weekly lecture notes available on Brightspace for detailed notes and examples on these topics.

## Our tasks

### Option 1 (new to PHP): A simple to-do list

Requirements, a.k.a. Tasks (some completed on Jan 24th, the rest we will complete today):
(1) Arrays to store things to do and info on whether they're complete
     If task is complete, strikethrough the text, italicize the text, and put a check mark ✅
     (&#9989; or &check; for check mark symbol) next to it.
(2) Then, let's send a fetch() request from index.php return just the list to index.php:
     First, as HTML ✅
     Then, as JSON ✅
(3) Then, let's create a simple HTML form in index.php to submit data to the list ✅
     Q: Is the data in the array persistent?
     A: No, you will need to use other structures like files to make data persistent.
(4) Then, let's write the list items and keep track of them in a CSV file ⬅️
(5) Then, let's write the list items and keep track of them in a JSON file ⬅️
(6) Next, let's redirect the user to index.php and show the list in index.php ⬅️
(7) Next, let's set up a fetch() request in index.php to submit data asynchronously and receive response (updated list) asynchronously ⬅️

### Option 2 (challenge yourself!)

* Try to create multiple lists, and a dashboard to show all the list items from all lists.

## Citations/references

1. 
