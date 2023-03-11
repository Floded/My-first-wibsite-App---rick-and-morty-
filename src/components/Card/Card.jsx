export default function Card({ name, species, gender, image, onClose, id}) {
   return (
      <div>
         <button onClick={onClose}>X</button>
         <h2>Nombre: {name}</h2>
         <h2>Especie: {species}</h2>
         <h2>Genero: {gender}</h2>
         <img  src={image} alt="Not found" />
     </div>
   );
}
