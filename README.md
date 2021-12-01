## The Golden Rule: 

🦸 🦸‍♂️ `Stop starting and start finishing.` 🏁

If you work on more than one feature at a time, you are guaranteed to multiply your bugs and your anxiety.

## Making a plan

1) **Make a drawing of your app. Simple "wireframes"**
1) **Once you have a drawing, name the HTML elements you'll need to realize your vision**
1) **For each HTML element ask: Why do I need this?** 
1) **Once we know _why_ we need each element, think about how to implement the "Why" as a "How"**
1) **Find all the 'events' (user clicks, form submit, on load etc) in your app. Ask one by one, "What happens when" for each of these events. Does any state change?**
1) **Think about how to validate each of your features according to a Definition of Done**
1) **Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.**

Additional considerations:
- Ask: which of your HTML elements need to be hard coded, and which need to be dynamically generated?
- Consider your data model. 
  - What kinds of objects (i.e., Dogs, Friends, Todos, etc) will you need? 
  - What are the key/value pairs? 
  - What arrays might you need? 
  - What needs to live in a persistence layer?
- Is there some state we need to initialize?
- Ask: should any of this work be abstracted into functions? (i.e., is the work complicated? can it be resused?)


Events . . .	
1. Select from at least three dropdowns with at least three options each	1

2. On choosing an option from the dropdown and see the change reflected in the UI with a new image	1

3. On change, See all catchphrases rendered to the DOM	2

4. When submitting a catchphrase, add it to an array of catchphreses, clear the current DOM's list of catchphases, and list all catchphrases in the DOM	1

5. See displayed how many times each dropdown has been changed in the current session	1

6. Functions	
PURE with TDD: createStatsString	1
IMPURE: displayStats()	1
IMPURE: displayCatchphrases()	1

PLAN

HTML
1. create 3 dropdowns with 3 options eachX
    * Head
     - Duck 
     - Dog
     - Horse
    * Middle
      - Blue
      - Pink
      - Red
    * Bottom
     - White Pants
     - Single Leg
     - Jeans
2. Create text ouput for catch phrase
3. Create add button
4. Display text output
5. Add count elements for each option