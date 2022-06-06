class Basket<T> {
  private items: Array<T> = [];

  public add(item: T): void
  {
    this.items.push(item);
  }

  public count(): number
  {
    return this.items.length;
  }
}

class Apple {
}

class Orange {
}

const apples: Basket<Apple> = new Basket<Apple>();
apples.add(new Apple());
apples.add(new Orange()); // no error
console.log(apples.count());
