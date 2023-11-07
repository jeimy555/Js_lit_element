import { css } from 'lit-element';
export default css`
    label{
        color:red;
        margin:0.5rem;
    }
    .caja {
        display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin: 2rem;
    padding: 1rem;
    background-color: black;
    width:80%;
    border-radius:1rem;
        
        
    }
    .caja input{
        border-top: none;
    border-right: none;
    border-left: none;
    display: flex;
    width: -webkit-fill-available;
    margin-left: 2rem;
    margin-right: 2rem;
    }
    button{
        margin:1rem
    }
    p{
        
        color:white;
    }
`