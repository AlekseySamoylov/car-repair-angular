import { Material } from '../shared/material.model';
export class ShopService {

  materialList: Material[] = [
    new Material(1, 'Brake pads', 'Good part for Toyota', 'http://www.alekseysamoylov.com/serviceiii/files/staticImages/3'),
    new Material(2, 'GRM belt', 'Good part for Toyota', 'http://www.alekseysamoylov.com/serviceiii/files/staticImages/1'),
    new Material(3, 'Water pump', 'Good part for Toyota', 'http://www.alekseysamoylov.com/serviceiii/files/staticImages/1'),
    new Material(4, 'Brake pads', 'Good part for Toyota', 'http://ecx.images-amazon.com/images/I/517-mcfN+rL._AC_US160_.jpg'),
    new Material(5, 'Brake pads', 'Good part for Toyota', 'http://www.alekseysamoylov.com/serviceiii/files/staticImages/2'),
    new Material(6, 'GRM belt', 'Good part for Toyota', 'http://www.alekseysamoylov.com/serviceiii/files/staticImages/1'),
    new Material(7, 'Water pump', 'Good part for Toyota', 'http://www.alekseysamoylov.com/serviceiii/files/staticImages/1')
  ];

  constructor() {}
  getAll() {
    return this.materialList.slice();
  }

  getOne(id: number): Material {
    for (const material of this.materialList) {
      console.log('hello material id ' + id);
      if (material.getId() === id) {
        return material;
      }
    }
    return null;
  }
}
