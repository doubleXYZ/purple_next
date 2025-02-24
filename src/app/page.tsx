import { JSX } from 'react';
// import Image from "next/image";
// import styles from "./page.module.css";
import {Htag, Ptag, Button, Card} from './components/index';
// import { HtagProps } from './components/Htag/Htag.props';

export default function Home():JSX.Element {
  return (
      <div>
          <Htag tag="h1">
              Hello World!
          </Htag>
          <Ptag tag="p-read">hello</Ptag>
          <Button appearence="primary">Button</Button>

          <Card />
      </div>
  );
}
