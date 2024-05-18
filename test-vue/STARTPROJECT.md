
# Starting Project
to start study about Vue now I will start with Template Syntax while testing syntax inside folder `/src`

## [Template Syntax](https://vuejs.org/guide/essentials/template-syntax.html)

### 1. Text Interpolation
The most basic form of data binding is text interpolation using the Mustache syntax `{{ }}` (double curly braces):

```
<span>Message: {{ msg }} </span>
```
>App.vue
>>`<HelloWorld msg="You did it123!" />`
>>
>HelloWorld.vue 
>> `<h1 class="green">{{ msg }}</h1>`
>>
>Result:
>> You did it!

The mustache tag will be replaced with the value of the `msg` property. It will also be updated whenever the `msg` property changes.

### 2. Raw HTML
The double mustaches `{{ }}` interpret the data as plain text, not HTML. In order to output real HTML, you will need to use the `v-html` directive:
```
<p>Using text interpolation: {{ rawHtml }}</p>
<p>Using v-html directive: <span v-html="rawHtml"></span></p>
```
>Example:
>>rawHTML = "`<span style='color: red'>This should be red.</span>`" 
>>
>Result:
>>Using text interpolation: `<span style='color: red'>This should be red.</span>`
>>
>>Using v-html directive: <span style="color:red">This should be red.</span>

### 3. Attribute Bingings
Mustaches `{{ }}` cannot be used inside HTML attributes. Instead, use a `v-bind` directive:
```
<div v-bind:id="dynamicId"></div>
```
To `v-bind` one's attribute to another, it need to be define in JS.\
Example (in "src/components/TheWelcome.vue"):
>`const a = "myTest"`\

>`<div v-bind:id="a">Test</div>`

>Result:
>> `<div id="myTest">Test</div>`
- Shorthand:
```
<div :id="dynamicId"></div>
```

- Boolean Attributes:

Boolean attributes are attributes that can indicate `true / false` values by their presence on an element. 

Example:
```
<button :disabled="isButtonDisabled">Button</button>
```
The `disabled` attribute will be included if `isButtonDisabled` has a *truthy value*. It will also be included if the value is an empty string, maintaining consistency with `<button disabled="">`. For other *falsy values* the attribute will be omitted.

- Dynamically Binding Multiple Attributes
  
Example (in "src/components/TheWelcome.vue"):

>`<script>`
>>`const objectOfAttrs = {`\
>>`id: 'container',`\
>>`class: 'wrapper'`\
>>`}`
>>
>`</script>`

You can bind them to a single element by using v-bind without an argument:
>`<div v-bind="objectOfAttrs"></div>`

# *Note:*
+ element = `<tag>` example: div, header, footer, table etc.,
+ attribute = inside `<tag>` example: class, id, style, etc.,
+ property = value of attribute.
+ v-bind (shorthand) = :
+ Mustaches = `{{ }}`
+ Object = everything inside JS is an object,
  >Example: `const object = { a: 1, b: 2, c: 3 }`
+ Array = you can put anything inside the js array but can only get the item by the index of the number
    >Example: `const arr1 = [1,'abc',{a:1}]`
    >>to get `'abc'` use `arr1[1]`