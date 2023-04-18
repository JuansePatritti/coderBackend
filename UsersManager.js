const { log } = require("console");
const fs = require("fs");
class UserManager{
constructor(){
    fs.promises.writeFile("./users.json", JSON.stringify([]))
    
}
async addUser(user){
    try{
        const addUser= await this.getUsers()
addUser.push(user)

        return JSON.parse(addUser)}
        catch(e)
        {
            console.log("error al agregar user");
        }
}
async getUsers(){
    try{
    const allUsers= await fs.promises.readFile("./users.json","utf.8")
    return JSON.parse(allUsers)}
    catch(e)
    {
        console.log("error al mostrar");
    }
}
}