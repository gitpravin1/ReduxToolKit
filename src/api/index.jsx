import { Chance } from "chance";

const chance= Chance();
const fakeUserdata=()=>{
    return chance.name({ middle: true });
} 
export default fakeUserdata;