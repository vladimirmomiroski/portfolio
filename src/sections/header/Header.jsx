import { useContext } from 'react';
import { Context } from '../../context/Context'
import ImagePart from './imagePart/ImagePart'
import Introduction from './introduction/Introduction'
import styles from './Header.module.css'

export default function Header() {
    const { container, headerLight, headerDark } = styles;
    const { theme } = useContext(Context);
    const whichTheme = theme ? headerDark : headerLight

  return (
    <header className={whichTheme}>
    <div className={container}>
        <Introduction/>
        <ImagePart/>
    </div>
    </header>
  )
}
