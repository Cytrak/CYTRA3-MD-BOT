








const {france}=require("../framework/france")







france({nomCom:"reboot",categorie:"Mods",reaction:"👨🏿‍💼"},async(dest,z,com)=>{


  
const{repondre,ms,dev,superUser}=com;

  if(!superUser)
  {
    return repondre("This command is for owner only you fool");
  }

  const {exec}=require("child_process")

    repondre("*Rebooting CYTRA-MD....*");

  exec("pm2 restart all");
  

  



})
