import Room from "./Room";
import Item from "./Item"
import Data from "./Data";

let dressingRoom = new Room();
for (let item of Data) {
  let id = item.id;
  let type = item.type;
  let name = item.name;
  let desc = item.desc;
  let imgSrc_jpg = item.imgSrc_jpg;
  let imgSrc_png = item.imgSrc_png;

  let newItem = new Item(id, type, name, desc, imgSrc_jpg, imgSrc_png);
  dressingRoom.addItem(newItem);
}
export default dressingRoom;