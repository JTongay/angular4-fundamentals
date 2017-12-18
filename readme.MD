Angular 2+ Fundamentals Course
========================
This is the getting started package for the Pluralsight course on Angular 2 Fundamentals found here: http://app.pluralsight.com/courses/angular-fundamentals

**Course Status**

The course is currently up-to-date with **Angular 4.0**.

Note: This is the course for all versions of Angular since Angular 2.0. The Angular team plans to release a new major version every 6 months and this page will tell you how up-to-date the course is.


Getting Started
---------------
Be sure you're running the recommended node version, which is 6.3.0+: `node --version`

Follow along with the course linked above. To start the server:

```
npm install
npm start
```


Promises vs Observables
===========================
#### Promises

- Represent a single value in the future

#### Observables

- Represent 0 or more values now or in the future
- Can be synchronous
- Improved error handling
- Can be closed independantly of returning a value
- can deal with time
- advanced operations
    - mathematical aggregation
    - buffering
    - debounce
    - distinct
    - filtering
    - combining observables
    - retry

# Optimizations

#### How many modules should I create?

- for maximum performance, more modules. They are needed for lazy loading.