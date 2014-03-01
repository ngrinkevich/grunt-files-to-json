# grunt-files-to-json

> Simple grunt plugin to create a list of files and write it to a json file

## Getting Started
This plugin requires Grunt.

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-files-to-json --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-files-to-json');
```

## The "files_to_json" task

### Overview
In your project's Gruntfile, add a section named `files_to_json` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  files_to_json: {
    files: {
      src: // [pattern],
      dest: // output file,
        options: {
          name: // optional name
       }
    }

  },
})
```

### Options

#### options.name
Type: `String`
Default value: `'item'`


### Usage Examples

```js
grunt.initConfig({
  files_to_json: {
    files: {
      src: '<%= distdir %>/themes/*/*.css',
        dest: '<%= distdir %>/themes.json',
        options: {
          name: 'theme'
       }
    }
  },
});
```
#### Example output file

```json
{
  "theme_1": "/themes/default/8909873.style.css",
  "theme_2": "/themes/comso/8934573.style.css",
  "theme_3": "/themes/minimal/8923473.style.css",
}
```

## Running the tests

After you have cloned the repo execute grunt test.

## Release History
_(Nothing yet)_

## License
Copyright (c) 2014 Nik G. Licensed under the MIT license.
