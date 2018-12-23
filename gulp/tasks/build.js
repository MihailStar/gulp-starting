import compileFonts from './fonts.js';
import compileImages from './images.js';
import compileScriptLibraries from './libraries.js';
import compileScripts from './scripts.js';
import compileStyles from './styles.js';
import compileTemplates from './templates.js';
import gulp from 'gulp';

const build = gulp.parallel(
  compileFonts,
  compileImages,
  compileScriptLibraries,
  compileScripts,
  compileStyles,
  compileTemplates
);

export default build;