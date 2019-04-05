## Q1. What is the benefit of using a library like React/Vue/Angular vs using plain old JavaScript? What is your experience level with one of those frameworks?

Software libraries are sets of tools that solve a typical problems in software development. Libraries like React/Vue/Angular solve problems typical in web and single page applications.

These libraries help teams of developers do two things that are difficult to do with plain old JavaScript. First, group the functionality of their applications in components which extend HTML, so the applications we build can grow in complexity while staying manageable; and second, organize their logic in an opinionated way, so other developers that want to contribute to their project can easily understand how to contribute.

I picked Vue 
```...```

Previously, I experienced two other generations generations of front-end libraries, in BackboneJS moving to AngularJS.

## Q2. When is CORS needed and how does it work in the browser?

(Is hard for website servers to keep track of sessions of their users due to the stateless design of HTTP. For this reason, browsers keep track of the state via cookies and send session information in headers to the server on every HTTP request.)

Information contained in HTTP request headers is used by servers to identify user sessions privately, so the browser must ensure that all requests sent to a server are from the same website as the server it is in, this is a policy called "Same origin policy". This is especially important since websites can issue AJAX requests to any destination and not directly triggered by the user.

CORS (Cross-domain resource sharing) is a way for browsers to allow websites to get around the "Same origin policy" and load data from other sites. The web server being called can respond with a special header ("Access-Control-Allow-Origin") to indicate to the browser that it should permit requests to be shared to from websites in other domain (or origin).

## Q3. What is an XSS attack? Explain what can lead to one and how can it be vented?

A website may display information created by a user such as a comment input from a textbox. Websites must be careful of rendering user-provided data which could be interpreted by the browser as HTML that can deform their site.

As in my previous example, an XSS attack occurs when a malicious user inputs a comment which gets contains code that can contains a `<script>` tag, and the code in the script tag is used steal information or simply change the way in which the site should behave.

To prevent XSS attacks the input of the users must be "sanitized", so it cannot contain any `script` tags, or so that the `script` tags are rendered in a non-harmful way.

There are two moments when sanitization of users' input can occur, either before the user input is stored or when the data is rendered as HTML output.

## Q4. Tell us about your latest "hard to debug" problem. How did you resolve it? Which tools did you use?
 
## Q5. Tell us about your most advanced/exciting/mind-blowing JS/CSS implementation
