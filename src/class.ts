class My {
  private name1: string;
  protected name2: string;
  public name3: string;

  public constructor()
  {
    this.name1 = 'v1';
    this.name2 = 'v2';
    this.name3 = 'v3';
  }

  private f1(): string
  {
    return this.name1;
  }

  private f2(): string
  {
    return this.name2;
  }

  public f3(): string
  {
    return this.name3;
  }
}

const m = new My();
console.log(m.name3);
