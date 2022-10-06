const fs = require('fs');

class Container {

    constructor(name_file){
        this.name_file = name_file;
    }

    async readFile(){
        let data = await fs.promises.readFile(`./db/${this.name_file}`, "utf-8");
        return JSON.parse(data);
    }

    async listAllProducts(){
        const data = await this.readFile();
        return data;
    }

    async listRandomProduct(){
        const data = await this.readFile();
        let random = Math.floor(Math.random()*data.length);
        return data[random];
    }

    async getProductById(id){
        const data = await this.readFile();
        return data.filter(product => product.id == id);
    }
    
}

module.exports = Container;