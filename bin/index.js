#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const arguments = process.argv.slice(2);
const name = arguments[0] || '';

if (!name) {
    console.log("⛔️ Component Name Required ⛔️")
    process.exit(1)
}

function template(NAME) {
    return `import React from 'react'
import css from './${NAME}.module.css'

const ${NAME} = (props) => {

    return (
        <div>
            
        </div>
    )
}

export default ${NAME};
`
}

const currentPath = process.cwd();

//create directory
fs.mkdirSync(path.join(currentPath, name));

//generate script
fs.writeFileSync(path.join(currentPath,`/${name}/${name}.js`), template(name));

//generate styles
fs.writeFileSync(path.join(currentPath,`/${name}/${name}.module.css`), '');

console.log(`👍 ${name} Component Generated 👍`)