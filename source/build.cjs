const fs=require('fs'),path=require('path');
const target=path.resolve(__dirname,'..');fs.mkdirSync(target,{recursive:true});
let html=fs.readFileSync(path.join(__dirname,'shell.html'),'utf8');for(const [mark,file] of [['STYLE','style.css'],['ENGINE','engine.js'],['FILES','files.js'],['UI','ui.js']])html=html.replace('/*'+mark+'*/',()=>fs.readFileSync(path.join(__dirname,file),'utf8'));
fs.writeFileSync(path.join(target,'EKT-Smart.html'),html);console.log(target);
