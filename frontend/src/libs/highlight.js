import hljs from 'highlight.js/lib/core';

import bash from 'highlight.js/lib/languages/bash';
import basic from 'highlight.js/lib/languages/basic';
import c from 'highlight.js/lib/languages/c';
import csharp from 'highlight.js/lib/languages/csharp';
import css from 'highlight.js/lib/languages/css';
import dart from 'highlight.js/lib/languages/dart';
import delphi from 'highlight.js/lib/languages/delphi';
import django from 'highlight.js/lib/languages/django';
import dockerfile from 'highlight.js/lib/languages/dockerfile';
import erlang from 'highlight.js/lib/languages/erlang';
import excel from 'highlight.js/lib/languages/excel';
import fortran from 'highlight.js/lib/languages/fortran';
import go from 'highlight.js/lib/languages/go';
import graphql from 'highlight.js/lib/languages/graphql';
import haskell from 'highlight.js/lib/languages/haskell';
import http from 'highlight.js/lib/languages/http';
import java from 'highlight.js/lib/languages/java';
import javascript from 'highlight.js/lib/languages/javascript';
import json from 'highlight.js/lib/languages/json';
import kotlin from 'highlight.js/lib/languages/kotlin';
import makefile from 'highlight.js/lib/languages/makefile';
import nginx from 'highlight.js/lib/languages/nginx';
import php from 'highlight.js/lib/languages/php';
import plaintext from 'highlight.js/lib/languages/plaintext';
import powershell from 'highlight.js/lib/languages/powershell';
import python from 'highlight.js/lib/languages/python';
import ruby from 'highlight.js/lib/languages/ruby';
import rust from 'highlight.js/lib/languages/rust';
import scss from 'highlight.js/lib/languages/scss';
import sql from 'highlight.js/lib/languages/sql';
import swift from 'highlight.js/lib/languages/swift';
import typescript from 'highlight.js/lib/languages/typescript';
import xml from 'highlight.js/lib/languages/xml';
import yaml from 'highlight.js/lib/languages/yaml';

const languages = {
    bash,
    basic,
    c,
    csharp,
    css,
    dart,
    delphi,
    django,
    dockerfile,
    erlang,
    excel,
    fortran,
    go,
    graphql,
    haskell,
    http,
    java,
    javascript,
    json,
    kotlin,
    makefile,
    nginx,
    php,
    plaintext,
    powershell,
    python,
    ruby,
    rust,
    scss,
    sql,
    swift,
    typescript,
    xml,
    yaml
};
Object.entries(languages).forEach(([name, language]) => {
    hljs.registerLanguage(name, language);
});


export default hljs;
