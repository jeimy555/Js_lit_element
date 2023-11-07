import { LitElement, html } from 'lit-element';
import stylesCss from './my-componentStyle'


export class MyElement extends LitElement {

    constructor(){
        super()
        this.datos=""
    }
     static get properties(){
        return{
            datos:{type:String},
        }
    }
    imprimir(){
        let usuario=this.shadowRoot.querySelector("#campo1").value
        console.log(usuario)
        let contrasena=this.shadowRoot.querySelector("#campo2").value
        console.log(contrasena)
        if (usuario=="jeimy" && contrasena=="a") {
            this.datos="bienvenida jeimy"
        } else {
            this.datos="datos incorrectos"
        }
        
      }

    static get styles(){
        return[stylesCss]
      }
  render() {
    return html` 
    <div class="caja">
    <label for="">usuario</label>
    <input type="text" class="campo1" id="campo1" placeholder="ingrese su usuario">
    <label for="">contraseña</label>
    <input type="password" class="campo2" id="campo2" placeholder="ingrese su contraseña">
    <button @click=${(e)=>this.imprimir()} type="button">ingresar</button>
  
  <label>${this.datos}</label>
  </div>
  
    `;
  }
}

customElements.define('inicio-sesion', myLogin);