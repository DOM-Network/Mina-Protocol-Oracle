import { Field, UInt32, UInt64, Bool, PublicKey } from "snarkyjs";
import { Struct } from "snarkyjs";

class Currency extends Struct({
    pairId: Field,
    decimals: UInt64,
    AbstractCurrency: Bool,
    address: Field
}) { }


class Pair extends Struct({
    id: Field,
    quoteCurrencyId: Field,
    baseCurrencyId: Field
}) { }

export { Currency, Pair }

