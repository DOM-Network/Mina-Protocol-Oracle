import { Field, UInt32, UInt64, Bool, PublicKey } from "snarkyjs";
import { Struct } from "snarkyjs";


type AggregationMode = Field

class BaseEntry extends Struct({
    timestamp: Field,
    source: Field,
    publisher: Field
}) { }

class SpotEntry extends Struct({
    base: BaseEntry,
    pairId: Field,
    price: Field,
    volume: Field
}) { }

class SpotEntryStorage extends Struct({
    timpestamp: Field,
    pairId: Field,
    price: Field,
    volume: Field
}) { }

class CheckPoint extends Struct({
    timestamp: Field,
    value: Field,
    aggregationMode: Field,
    numSourcesAggregated: UInt32,
}) { }