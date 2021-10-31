"use strict"
class Scripts {
    constructor(scpName, Industry, fv, marketCap, About) {
        this.scpName = scpName;
        this.Industry = Industry;
        this.fv = fv;
        this.marketCap = marketCap;
        this.About = About;
    }
}

class ProductItem{
    constructor(product) {
        this.product = product;
    }

    render() {
      const today = new Date();
        const Pl = () => {
            let p, ex;
            const div = document.querySelector('.data');
            const inputEl = div.querySelectorAll('input');
            const OpPrice = inputEl[0].value;
            const ClPrice = inputEl[1].value;
             if(OpPrice > ClPrice){
                ex = ((OpPrice-ClPrice)/OpPrice)*100;
                p = `\-${ex.toFixed(2)}\%`;
              } else {
                ex = ((ClPrice-OpPrice)/OpPrice)*100;
                p = `${ex.toFixed(2)}\%`;
            }    
            return p;   
    };
    console.log(Pl());
}

getData() {
    const button = document.getElementById('calc');
    button.addEventListener('click', this.render.bind(this));
    }
}


class FinProducts extends ProductItem{
    constructor(product) {
        super(product);
        this.curPrice = prompt(`${product.scpName} => Market Price:`);
     }

   

   render(){
        const prodEl = document.createElement('li');
        console.log(this.curPrice)
            prodEl.innerHTML = `
               <div>
                 <h2>Name: ${this.product.scpName}</h2>
                 <h3>Industry: ${this.product.Industry}</h3>
                 <p>Facevalue: \Rs.${this.product.fv}</p>
                <p>${this.curPrice}</p>
                 <p>Market Capitalization: \Rs.${this.product.marketCap}</p>
                 <p>About => ${this.product.About} <a href="https://www.moneycontrol.com/">For More info, Click Here.</a></p>
               </div>                 
            `;
            console.log(this.product, prodEl);
            return prodEl;
        }
}

class Folio{
    script = [new Scripts('Tata Power Company Ltd.', 'Power Untility', 1, '68476Cr', 'Tata Power Company Ltd is India`s largest private sector power utility with an installed generation capacity of over 2785 MW.'),
              new Scripts('Adani Power Ltd.', 'Power Utility', 10, '38762Cr', 'Adani Power Ltd. is a power project generally deals in electricity supply/disribution'),
              ];

    render() {
        const renderHook = document.getElementById('test');
        const prodList = document.createElement('ul');
        renderHook.className = 'test1';
        for (const prod of this.script) {
            const product = new FinProducts(prod);
            const prodEl = product.render();
            prodList.append(prodEl);
            }
        renderHook.append(prodList);
        }  
}

const folio = new Folio();
const prod1= folio.render();
const myScript = new ProductItem();
myScript.getData()
