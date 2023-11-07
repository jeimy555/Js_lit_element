import { LitElement, html } from 'lit-element';
import stylesCss from './my-componentStyle'
import {myLogin} from '../my-component/inicio-sesion'
import {Myregister} from '../my-component/registro'


export class MyElement extends LitElement {
  constructor(){
    super()
    this.saludo="el primer componente"
    this.componentHtml=""
    this.paramComponent=0;
}
 static get properties(){
    return{
        saludo:{type:String},
        componentHtml: {type:String},
        paramComponent:{type:Number}
    };
}
static get scopedElements(){
  return{
    "inicio-sesion":myLogin,
    "registro-usuario":Myregister
  }
}

static get styles(){
    return[stylesCss]
  }
  cambio(){
    this.saludo="uwu"
  }
  renderAll(){
    if (this.paramComponent==1) {
      this.componentHtml= html` <inicio-sesion></inicio-sesion>`
      
    }else{
      this.componentHtml=html` <registro-usuario></registro-usuario>`
    }
  }
  mostrarComponent(){
    this.paramComponent=2;
    this.renderAll();

  }
  mostrarlogin(){
    return html` <inicio-sesion></inicio-sesion>`;
  }

  render() {
    return html`
      ${this.componentHtml}
      ${this.mostrarlogin}
      <button @click=${(e)=>this.mostrarComponent()}>registrarse</button>
    `;
  }
}

customElements.define('my-element', MyElement);