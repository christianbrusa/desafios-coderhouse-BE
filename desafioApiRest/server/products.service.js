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
        let product = data.filter(product => product.id == id);
        if(product.length > 0){
            return product;
        }
        else{
            return {error: "Producto no encontrado"};
        }
    }

    async addProduct(product){
        const data = await this.readFile();
        product.id = data.length + 1;
        data.push(product);
        return await fs.promises.writeFile(`./db/${this.name_file}`, JSON.stringify(data));
    }
    
}

module.exports = Container;