import styles from "../Food.module.css";
import GalleryCard from "./GalleryCard";
import img1 from "../../../assets/gallery-img-1.jpg";
import img2 from "../../../assets/gallery-img-2.jpg";
import img3 from "../../../assets/gallery-img-3.jpg";
import img4 from "../../../assets/gallery-img-4.jpg";
import img5 from "../../../assets/gallery-img-5.jpg";
import img6 from "../../../assets/gallery-img-6.jpg";
const Gallery = () => {
  return (
    <div className={styles.food__gallery}>
      <GalleryCard img={img1} title={"Pancakes"} key={1} />
      <GalleryCard img={img2} title={"Cupcakes"} key={2} />
      <GalleryCard img={img3} title={"Hummus"} key={3} />
      <GalleryCard img={img4} title={"Hamburger"} key={4} />
      <GalleryCard img={img5} title={"Fish"} key={5} />
      <GalleryCard img={img6} title={"Vegetables"} key={6} />
    </div>
  );
};

export default Gallery;
