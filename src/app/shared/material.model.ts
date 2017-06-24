export class Material {
  public id: number;
  public title: string;
  public description: string;
  public imagePath: string;

  constructor(id: number, title: string, description: string, imagePath: string) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.imagePath = imagePath;
  }
  getId(): number {
    return this.id;
  }


  public toString = () : string => {
    return `Material name (${this.title})`;
  }

}
