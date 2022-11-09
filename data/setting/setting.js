import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

 

///////

global.owner = [
  ['0'], 
  ['6287826482017', '@srart24', true] // nomor akan di kirim sebagai owner
  ];
  
global.mods = [] // Moderator
global.prems = [] // Premium user

global.APIs = {
  xteam: 'https://api.xteam.xyz',
  hardi: 'https://hardianto.xyz',
  sr: 'https://srart24.herokuapp.com'
}

//

global.APIKeys = {
  'https://api.xteam.xyz': 'cristian9407',
  'https://hardianto.xyz': 'hardianto',
  'https://srart24.herokuapp.com': 'ZcX'
}

///////
global.wm = '@srart24'

// Sticker WM

global.author = '@srart24'
global.packname = 'SeTaN.BoT'


////////////////

global.multiplier = 69 // The higher, The harder levelup
global.HLimit = '450'



global.bnm = 'SeTaN.BoT'	// Nama BoT


///////

global.nmweb = 'Instagram'		//	Serah Mo Kasih Nama Apa
global.lnkweb = 'https://www.instagram.com/srart24'		//	Link Nya

///////





let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
