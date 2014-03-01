/*
 * grunt-files-to-json
 * 
 *
 * Copyright (c) 2014 Nik G
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {

  grunt.registerMultiTask('files_to_json', 'Simple plugin to create a list of files', function () {

    var options = this.options({
      name: 'item'
    });

    var output = '{';

    // Iterate over all specified file groups.
    this.files.forEach(function(f) {
      output += f.src.filter(function(filepath) {
        // Warn on and remove invalid source files (if nonull was set).
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return false;
        } else {
          return true;
        }
      }).map(function(filepath, index) {
        return '\"'+options.name+'_'+(index+1)+'\":\"' + filepath.substring(filepath.indexOf("/")) + '\"';
      }).join(grunt.util.normalizelf(', '));
      output += '}';

      // Write the destination file.
      grunt.file.write(f.dest, output);              
    });
  });

};