import { observable, decorate } from "mobx";

class CardStore {
  user = {
    text: "test",
  };
}

decorate(CardStore, {
  user: observable,
});

export default new CardStore();
