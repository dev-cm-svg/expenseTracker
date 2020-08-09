# 
https://www.youtube.com/watch?v=XuFDcZABiDQ&list=PLillGF-RfqbY3c2r0htQyVbDJJoBFE6Rb&index=1
## Build an expense tracker

we're going to use hooks, the context API 
I do want to use the context API so we'll have a global state global context
and we'll pass everything down to the components basically 

I just want to put all these transactions in our global state pass it down to the components and
then we'll do our calculations and stuff inside the components 
might in the future out of back-end where we can get to basically have the
transactions come from a MongoDB database or Postgres or something like that 

### Set up environment and Clean up

we're gonna create a new react app with create react

==I'm gonna use npx so that I don't actually have to install it== and of
course you need nodejs and npm installed on your machine to be able to do this

> npx create-react-app expense-tracker-react
>
> cd expense-tracker-react
>
> code .

`src`=>delete `logo`,`index.css`,`App.test.js`,`setuptests.js`,`serviceworker`

`App.css`=> delete everything

### Basic files

`App.js`

```js
import React from "react";
import "./App.css";

function App() {
  return <div >Hello World</div>;
}

export default App;
```

`index.js`

```js
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
```

> npm start

### Steps in general

create components for everything

so we'll have a header we'll have a balance component will have an income
expense component will have a transaction list with transaction
components inside of it and then an ad transaction component 

so that's what you want to do when you use any framework is any front-end framework is :

- break the UI up into specific components 
- once we get the UI displayed then we'll add the functionality we'll start to add our global context ,our state and all that good stuff 

> create a folder in our source called components we'll start off with the header because that's really simple so header.js

##### vs code extension es7 react Redux graph QL react native snippets

 you can do one of the nice things is that you can generate components really easily

`rafc` that will ==give me a functional component== to work with 

### Build UI

#### Create Component Header

`components>header.js`

```js
import React from "react";

export const Header = () => {
  return <h2>Expense Tracker</h2>;
};
```

`App.js`

```js
import React from "react";
import { Header } from "./components/header";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
    </div>
  );
}

export default App;
```

#### Create Component Balance

`App.js`

```js
import React from "react";
import { Header } from "./components/header";
import { Balance } from "./components/Balance";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <Balance />
      </div>
    </div>
  );
}

export default App;
```

`components>Balance.js`

```js
import React from "react";

export const Balance = () => {
  return (
    <div>
      <h4>Your Balance</h4>
      <h1 id="balance">$0.00</h1>
    </div>
  );
};
```

#### Create component IncomeExpenses

#### Create component TransactionList

#### Create component AddTransaction

change `class` to `className`, `for` to `htmlFor`

### Add functionality

#### Component AddTransaction

##### Let the input of the form to be part of our state

for the form, we do need some component level state, because when we have inputs like this(`<input type="text" placeholder="enter text..."`) , they need to be part of our state. So

- bring in a hook called `useState` 

  > about useState hook https://reactjs.org/docs/hooks-state.html

- connect to the  inputs

  > onChange event: whenever it's changed, it needs to update

##### check out if it works

add on: `React Developer Tools`

console>components>AddTransaction

###  so now we have our basic UI down so we want to start to think of our global state now

so let's ==create a folder== in our source called context
and inside context we're gonna have a global state dot j/s file 

so this is basically where we're gonna create our context now if we had multiple resources like if this was a larger application and we had maybe a profile you know
profile stuff shop I might have a shop context or a profile context a profile
state but since this is such a small application we're just going to have one
single global State 

so in this file what we want to do is ==import== react and we want to import create context and also use reducer because we're gonna have a global reducer as well and this is all from react 

now we need ==an initial State== okay so let's create a variable here
called initial State actually I don't want capital I okay so we have our
initial state which is just going to be a single object so any global state
would go on this object however all we need is our transactions because as long
as we have access to the transactions in certain components we can do our
calculations there like for the balance and stuff like that we don't need that
stuff in our state we just need to be able to pass this data down and then
we'll have actions that we can look for instance delete from this piece of State
delete transactions add transactions now I'm just gonna copy from the script j/s
here and this in this repository these dummy transactions so just grab those
paste that in and I'll uncomment these 

so basically each transaction has an ID, a text value and an amount and if it's an expense it's a negative number if it's a if it's income it's a positive number 

now we need to ==create our global context== using this create context that we brought in 

so we want to **export here a Const of global context** because they're going to be bringing this into other files into components and we need to use it and say create context and this gets passed in our initial State 

now in order for other components to have access to our store or to our global State we need to have a ==provider== we basically need to wrap all this stuff all these opponents in a provider component so that's what we're going to create here provide our components and that needs to be exported so that we can bring it into our app file and then let's say const global provider and this is gonna be just a function and arrow function and since we're wrapping we're going to be wrapping this stuff , these are going to be children so in the props here we're gonna use D structuring and say **children** 

okay and in here we need to this is where we use our use reducer because we need access to state and dispatch whenever we want to call a reducer action we need to use this dispatch 

okay so this comes from useReducer and then use reducer it takes in whatever are wherever our reducer is 

I'm gonna have it in a separate file called a producer and then it also takes our
initial State okay and then we need to actually have our provider component so let's return and inside here 

we're going to have our global context and attached to this we have our provider 
then inside here we put our children prop and basically this is going to be
whatever we wrap which will be all this stuff all of our components alright
because ***what the provider does is it provides our state it provides any***
***actions and stuff like that to the components that it's wrapped around*** 

now this provider is going to have a value prop and in here we're going to have an
object and we want to for now let's just pass in our transactions and **the way**
**that we can access anything in this object right here** is simply by saying
state dot and then whatever we want which in this case is transactions so
that way we can access this from any component that we requested from using
use contacts which is another react hook 

now before I try to pull this into any components I want to ==create my reducer== this a producer so I'm gonna bring it in I don't haven't created it yet but let's
say import a producer we could put the reducer right in this file but just to
clean it up I'm gonna put it somewhere else so we'll just say dot slash app
reducer and then let's go in our within our context folder say a producer J s
okay and a reducer if you're not familiar with with like redox or
anything like that it's basically **how we specify the application state changes in**
**response to certain actions to our store to our context** so this so that the bare
minimum we need is to just export a default function that takes in state and
some kind of action and for now let's just have a default with basically I'm
sorry we need to switch so we have a switch based on what's called a type
which is kind of like kind of like an ID like we'll have a delete transaction
type an add transaction and then a default so when it's default we just
want to simply return our state just as is so that's the bare minimum that we
need right now so we have this reducer we're passing it in here and then we're
passing it in to use reducer and then we can access state values even you know
from our initial state and then we're passing that in to the value of our
provider 

now ==this provider we need to bring into our our app.js file== so let's go right here and let's say import global provider from and that's gonna be in contact slash global state and then to wrap everything let's go we'll just replace this div right here with the global provider like that make sure you have the ending tag too so let's save that don't worry about this dispatch is a sign but never used and our
application should still work and you can see over here we have our global
provider and if we look in reducer we have our transactions array so this is
now accessible to any components that need it such as transactions our balance
income expenses we're going to need our transactions for all that stuff so let's
start to pull that in to where we need it 

so I'm going to start with ==transaction list== so let's go into our transaction list component .I'm just going to close these up and the way that we can basically pull our global State in is first we need to import our global context and that's going to come from our global State which is going to be up one level in context and then global State and then down in the function here we can pull out anything from our global context using the use context hook so actually we need to bring that in up
here so use context and then let's say Const context equals use context
and then we just pass in here the global context and for now let's just
console.log our contacts just so you can see that we can actually we're actually
pulling this in so if we go back here we go to console right here
what's this let's just nevermind that but you can see right here we have our
object this is our global state all we have in it is our transactions but
that's being output are logged from the transaction list components so we can
now use this within our component now instead of having to do you know
contacts dots transactions let's just use these structuring right here so
we'll just use some curly braces and we'll pull out transactions now
**transaction is it's an array right so we need to loop through it or map through it** rather and then output each transaction which I'm actually going to
make a separate component so for now let's go ahead and put in an expression
here and say transactions dot map and say for each transaction we want to
output for now just this list item I'll just cut that and put that in right in
here in the parenthesis and we'll save that and now actually let's replace the
text right here because now we have access to each individual transaction
value and let's get the text and output that so if we go back to our react app
now you can see each text is being output this is still hard-coded the
negative 400 I'm actually going to wait until we you know create our transaction
component to deal with that so let's actually do that now
so in our components folder let's ==create a new file called transaction dot j/s==
and generate a component here and then I'm just going to take the LI right here
and cut that out and let's see we're gonna put that right here in transact
okay now yeah I guess you know what we'll do is let's just save this as is
we'll get back to that in a minute and we need to bring that into transaction
list so up here let's import our transaction component from dot slash transaction and then instead of outputting an Li directly we're gonna output in here our transaction component
now it needs to know which specific transaction to render so we need to pass
it in as a prop so we'll say transaction equals transaction which is coming from
this right here so we're mapping through we're bringing it in from arcs global
state or global contacts mapping through so for each one we're going to render a
transaction component in passing a prop now when you map through like this and
you output something this is called a list and it needs to have a unique key
okay so for the key I'm just going to use the transaction ID because it needs
to be unique alright so we'll go ahead and save that inside
this transaction component it's saying that this is undefined and that's
because it's being passed in as a prop right right here so this is it's being
passed in as a prop so we have to catch it here we could either say props and
use props dot transaction dot text or we can D structure and just put in
transaction and then save and that should work so if we go back to our app
you can see it's still rendering the text

now let's take care of some other stuff like the ==price here and also the color of the border== it should be red if it's an expense and green if its income so to do that
let's see so we'll take we'll take care of the amount first now if we look at
the vanilla JavaScript version we have either a plus or a negative here so we
need to determine the sign and if we look at our JavaScript from the vanilla
version here and we go down to where we have this add transaction Dom we're
getting the sign based on the amount of the transaction amount is less than zero
then it's going to be a negative if not it's going to be plus okay they were
just using a ternary operator here so I'm just going to grab this line and
let's put that right here so that we know the sign so we have transaction
we're checking the amount to getting the sign and then right here and the span
let's put in the sign and then we'll have a money sign and then we'll have
the amount so transaction dot amount so we'll save that let's take a look at our
react app and now we have either a negative or a plus wait a minute we
don't want that oh you know what to get rid of that so you see how what the
negatives is actually two negative dollar sign negative twenty we don't
want that we just want the the sign this right here the variable so what we can
do is wrap this in math dot apps and make this an absolute number which will
always be positive so now if we take a look so now we just have negative money
sign 20 all right now the last thing we want to do in this particular component
for now is handle the border because the border should be green if it's an income
and red if it's an expense and that goes by the class so in our CSS we have a
minus class which gives it a red border and a plus class which gives it a green
border so let's make this dynamic okay so what we'll do here is we'll say
transaction dot amount we're gonna use the ternary operator we'll say if the
transaction amount is less than zero meaning it's negative then let's have a
class of minus else we'll have a class of plus so if I save that we take a look
now anything that's income has this green border all right so that's all I
want to do for now 

later on we'll handle the delete action but we're not going to do that just yet now 

I want to ==handle these components up here because these need to basically take in the transaction from the state and then get calculated== so we want to do a lot of the same stuff we did here we want to bring in the global context so let's start with ==balanced Jas== we want to bring in the global context we want to pull out the transactions now we need to do some calculation here and then we can go to the vanilla JavaScript version and if we
take a look down here and the update values function let's see to get the
total balance we just need first the amounts because remember each
transaction is an object with an ID a text and an amount
here we're just mapping through and then getting all the amounts into an array
and then to get the total we just use reduce to basically add them all
together and use to fix to get two decimal places so I'm going to copy
these two lines here and we'll go ahead and put those in here and then output
right here we should be able to just output the total
oops we need use clients so since we use the use context hook right here we need
to bring that in all right so now let's check our react app and now we have our
balance based on our transactions and what's nice about this is anytime these
are updated whether we delete out or whatever this will automatically render
correctly all right because it's just being passed down 

so let's take care of this the ==income and expenses== which is going to be pretty similar we want to bring in our global contexts so let's open up income and expense paste that in let's grab our transactions we need to use use context as well so use context
really really helps if you remember using the context API before hooks we
had to use a what was it a consumer and it was just it was very messy the way
that we did it now we can simply grab from our contacts using this one hook
which is nice and we can take out whatever we want from our state so now
we have our transactions but we need to do a little bit of calculation to get
the income and the expense so if we look in the vanilla JavaScript version we can
get the income pretty easily we just have our mounts so used to be still do
need the amounts and then we filter through and get any anything that's
greater than zero so all the positive numbers and then add them all together
using reduce and add a decimal so I'm gonna copy and and then for the expense
we do the same thing we basically just say anything that's lessons they're all
the negative numbers we add them all together with reduce so I'm just going
to copy these lines here and paste those in here although we don't need the total
okay so we just need the amounts and then we're calculating the income so the
total of income and the total of expense and then we can just simply output them
here so this will be the income and this will be the expense and let's
take a look and there we go so that's correct you can tell by you know 300 150
income 1020 is our expense ok cool so let's see what should we do next
I think yeah we have the transactions from the state coming in to all the
components that need it

now let's work on ==some actions== so we want to be able to delete from here and once we delete this stuff should get automatically updated
like I said so let's go into our ==global state== and we need to have an action in
our global State so inside the provider component right here above the return is
where I'm going to have my actions that are going to make calls to our reducer
so let's create a function called ==deletetransaction== which will take in an ID because we need to know which one to
delete and then we can use dispatch because remember we brought that in from
here because we have used reducer so we can dispatch to our reducer an object
and we're gonna have a type and the type is just a string which I'm going to call
delete transaction and then it needs a payload so basically any data we want to
send to it which is going to be the ID okay so that's all we need for our
action now in the reducer let's save this and let's go to our reducer which
is a producer Jas and let's create a case here for delete
transaction and we want to return so like I said before reducer is just a way
to change your state and send it down to your component to your application now
we can't just change it we have to basically create a new state and send it
down so we're going to use the spread operator here and then just send the
current state state and then what we want to change is our transactions value
so we want to set this to basically send down all the transactions except the one
that was deleted okay so we have that ID sent in the payload so what we'll do is
we'll take state dot transactions I'm such a via dot and then we'll use the
filter method here and we want to in the filter we're going to say for each
transaction it takes in an arrow function you want to say where a
transaction dot ID is not equal to the action dot payload all right this action
right here if we look at our global state when we did our dispatch we're
dispatching an action with a type and a payload so the type is delete
transaction so it's going to run this because we're checking the actions type
and then we have the ID in the payload so we're just filtering out anything
that has that ID because this is a delete all right so let's save that now
back in our global state in order for us to use this action we have to pass it
down in our provider just like we did this this transactions so we'll simply
say delete transaction and now we should be able to pull this out just like we
did transactions so the delete button is in the transaction component right here
right there our delete button so let's bring in our global context I'll just
copy it from one of these so bring that in we also want our use state hook
or use context hook and then let's go right here
and instead of pulling out the transactions I'm going to take the
delete transaction action and set that to use context and that comes from our
global state global context so now we should be able to fire this off let's go
down here to the delete button so we have button say on click equals and then
we'll have an arrow and then call delete transaction and we need the ID which we
can get from transaction dot ID so let's try that out let's go over here let's
say book click that and book goes away all right cool and if we check out our
components and if we look at transactions so in our context we have
our delete transaction props ok so delete that you can see it actually
deletes the component from here good 

so the last thing that we need to do is we need to be able to ==add a transaction== so that's going to work pretty much the same way we're going to first create an action in our global state just like we did right here actually I can just copy this so here this is going to be add transaction instead of an ID it's going to take in the entire transaction and
then we want to dispatch a type of add transaction and the payload will be the
transaction itself I feel like I've said transaction like 10 million times so we
have the action here and we want to make sure we were able to access it through
other components so we want to pass it in the provider and the provider value
now we need to create this in our reducer so let's go to our a producer
here and let's create another case for ad transaction and we want to return ok
return our initial state and then transactions so what we need to do here
is is basically return the transactions that are already they are in addition to
the new one which is in the payload right so the way we can do this is set
this to an array and we can get the the initial transactions by using the spread
operator and then state dot transactions so the spread just basically takes out
all the values from the array and puts them in here and then in addition to
that we want our action dot payload which is our new transaction that's
being added because if we look in our if we look right here we're sending that as
the payload you can send whatever you want is the payload here we sent the ID
here we sent the entire object and then in our reducer we're just adding that in
addition to the rest of our transactions that's going to get sent down to the
rest of the application ok so you can think of your your state as just
hovering above your all of your components and you can send down what
you want you can also call actions to send up alright 

so now let's go to add to our ==add transaction component== and we're gonna be using our context so might as well bring in use context and we need to import our global context so I'll just copy that from here paste that in and then we're using the addtransaction so I'm gonna copy this from the transaction j/s this was the delete
now here we're actually using let's see we'll go right here
and we're going to use the ad transaction action and where we want to
use this let's see how do we want to do this
let's on the form we'll add an on submit and let's just have that go to a
function called on submit and then we'll create that up here Const on submit and
we want to pass in our event parameter and we want to e dot prevent default
okay and then let's build a new transaction object remember it has an ID
so what I'm gonna do for the ID is just generate a random number if we look in
the the vanilla JavaScript version I have a function where is it right here
generate ID that just uses this math dot floor math dot random to generate an ID
not the best thing to do but I mean it's a you know small enough application so
I'm just gonna grab this this math dot floor math dot random and just put that
right in here that'll generate an ID if you want you could use something like
UUID or whatever so let's see in addition to that we need our text now
the text is gonna be that whatever is in the form and that's already defined as
text so we can just go like that same thing with amount which is the same as
doing this okay so hopefully that makes sense we have our component level State
hooked to these inputs and they're the values our text and a mount and that's
what I'm passing in as just into this new object and then the last thing we
want to do is call add transaction from our context and we want to pass in the
new transaction okay so let's try that out
so I'm gonna go ahead and add something here let's say
payment 100 and AD transaction alright so let's see my own start reduced to fix
is not a function in balance see balance so amount start reduced so we're getting
amounts by mapping through our transactions and then getting each
amount let's see what that gives us so I'm just gonna console.log amounts from
balance let's see what happens if I just try to add something here oh so this is
actually getting added as a string that's why we're getting this error
because what we're doing with reduce is adding all these together however this
is a string so let's get rid of that so back in add transaction when we add the
amount right here let's actually parse this to a number
which we could do in a couple different ways we could use parse int but a really
simple way is just to add a plus sign to the amount and that will turn it into a
number so let's save that and let's try this again so say payment 100 add and
there we go so now it works because it's a number so payment plus 100 so 5 20 is
our balance got 550 income minus 3 so everything looks correct good and then
the last thing I want to do is just get rid of from our global state get rid of
the initial state so transactions will just make this an empty array and then
we don't have that stuff in the beginning it's just blank ok so we can
go ahead and say payment 400
say say we bought a book for negative 50 all right so everything seems to be
working correctly so we've successfully converted the vanilla JavaScript version
into a react app now obviously this is a lot more code it's more difficult
however it is much cleaner we have all of our UI components separated we have a
global state that gets passed down to any components that need it
we have actions we can fire off we could have made this a little simpler by
putting all of our state in the App J's file as opposed to using the context API
however that's Messier because you need to pass things down and props and stuff
like that if you have events you need to pass them up in props and you definitely
don't want to do that in a larger application so if this were the final
results of what I wanted to build I wouldn't use a framework I wouldn't
use a reactor view or anything I would just do what I did and use vanilla
JavaScript however if I planned on adding more to this or adding a back-end
which I actually might do then yes I would use a framework like react okay
and there's there's pros and cons to both usually if you're gonna build a
large UI you would probably want to use a framework but something as simple as
this you could certainly do with phonology of a script 
