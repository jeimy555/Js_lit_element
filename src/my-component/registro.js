import { LitElement, html } from 'lit-element';
import stylesCss from './my-componentStyle'

export class MyElement extends LitElement {
    constructor(){
        super();
        this.datos2=""
    }
    static get properties(){
      return{
          datos2:{type:String},
      }
    }
    static get  styles(){
        return[stylesCss]
      }

      imprimir2(){
        let usuario=this.shadowRoot.querySelector("#campo01").value;
        console.log(usuario);
        let nombre=this.shadowRoot.querySelector("#campo02").value;
        console.log(nombre);
        let correo=this.shadowRoot.querySelector("#campo03").value;
        console.log(correo);
        let contrasena=this.shadowRoot.querySelector("#campo04").value;
        console.log(contrasena);
        let contrasena2=this.shadowRoot.querySelector("#campo05").value;
        console.log(contrasena2);

        if (usuario=="" || nombre=="" || correo=="" || contrasena=="" ) {
          this.datos2="hay algun campo vacio"

        } else if(contrasena!=contrasena2) {
          this.datos2="las contraseñas no coinciden"
        }else{
          this.datos2="el usuario "+usuario+ " fue registrado con exito"

        }
        
            

      }

  render() {
    return html`
    
    <div class="caja">
    <label for="">usuario</label>
    <input type="text" class="campo01" id="campo01" placeholder="ingrese su usuario">
    <label for="">nombre completo</label>
    <input type="text" class="campo02" id="campo02" placeholder="ingrese su nombre completo">
    <label for="">correo</label>
    <input type="email" class="campo03" id="campo03" placeholder="ingrese su correo">
    <label for="">contraseña</label>
    <input type="password" class="campo04" id="campo04" placeholder="ingrese su contraseña">
    <label for="">confirme su contraseña</label>
    <input type="password" class="campo05" id="campo05" placeholder="ingrese su contraseña">
    <button @click=${(e)=>this.imprimir2()} type="button">ingresar</button>
  
  <p>${this.datos2}</p>
  </div>
    `;
  } 

}
customElements.define('registro-usuario', Myregister);