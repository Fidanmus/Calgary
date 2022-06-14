import { kids } from "./kids";

function kidsMain() {

const [kids, setKids] = useState(0);
const {id, name, image, description, address} = kids[kids];

const previousKids=()=>{
  setKids((kids => {
    kids--;
    return kids;
  }))
}

const nextKids = () => {
  setKids((kids => {
    kids++;
    return kids;
  }))
}

return(<div>
    <div>
        <h2>{id} - {name}</h2>
    </div>

    <div>
        <img src={image} width="500px"/>
    </div>

    <div>
        <p>{description}</p>
    </div>

    <div>
        <p>Address: {address}</p>
    </div>

    <div>
        <button onClick={previousKids}>Previous</button>
        <button onClick={nextKids}>Next</button>
    </div>
</div>)

}

export default kidsMain;