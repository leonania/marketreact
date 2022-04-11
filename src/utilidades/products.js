import producto1 from "../imagenes/producto1.jpeg"
import producto2 from "../imagenes/producto2.jpeg"
import producto3 from "../imagenes/producto3.jpeg"
import producto4 from "../imagenes/producto4.jpeg"
import producto5 from "../imagenes/producto5.jpeg"
import producto6 from "../imagenes/producto6.jpeg"



const products = [


    { 
            id: 1,
            name: "Bombilla de acero",
            stock: 100,
            precio: 450,
            description: " Amigables con el medio ambiente, resistente, y gruesos. ",
            image: producto1,
     },

     { 
        id: 2,
        name: "Discos desmaquillantes",
        stock: 75,
        precio: 650,
        description: " Ideales para remover el make up de la piel o limpiar las impurezas! Tienen dos texturas... ",
        image: producto2,
     },


    { 
    id: 3,
    name: "Agua de rosas",
    stock: 100,
    precio: 400,
    description: " Una nueva presentación de 120ml, para que no te quedes sin tu cuidado natural de siempre... ",
    image: producto3,
    },

{ 
    id: 4,
    name: "Agua micelar",
    stock: 50,
    precio: 450,
    description: " Fortalece la piel del rostro, cuello, ojos y labios. Desmaquilla y elimina impurezas... ",
    image: producto4,
},

{ 
    id: 5,
    name: "Pasta dental",
    stock: 40,
    precio: 300,
    description: " Sabor eucalipto. Sin químicos, sulfatos, parabenos y aceite de palma... ",
    image: producto5,
},

{ 
    id: 6,
    name: "Desodorante natural",
    stock: 80,
    precio: 350,
    description: " Aroma mix floral, presentacion en crema. Súper efectivo y dura un montón!! ",
    image: producto6,
},

]
export default products; 
