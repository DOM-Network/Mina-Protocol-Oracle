import {
  Field,
  SmartContract,
  state,
  State,
  Circuit,
  method
} from 'snarkyjs';

class Square extends SmartContract {
  @state(Field) num = State<Field>();
  @state(Field) x = State<Circuit>();

  init() {
    super.init();
    this.num.set(Field(3));
  }

  @method update(square: Field) {
    const currentState = this.num.get();
    this.num.assertEquals(currentState);
    square.assertEquals(currentState.mul(currentState));
    this.num.set(square);
  }
}

class Square2 extends Square {

}

export { Square, Square2 };