import { Field, UInt32, UInt64, Bool, PublicKey } from "snarkyjs";
import { Struct } from "snarkyjs";

class Mapping extends Struct({
    key: Field,
    value: Field
}) {

}