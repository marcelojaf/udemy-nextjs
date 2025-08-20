// Este arquivo é um Client Component em Next.js, indicado pela diretiva 'use client' no topo.
// Client Components permitem o uso de hooks do React (como useState, useEffect) e interatividade no lado do cliente.
// Eles são necessários quando você precisa de funcionalidades que só existem no browser, como manipulação de estado, timers, ou acesso ao localStorage.
"use client";

import { useEffect, useState } from "react";

// O componente <Image> do Next.js NÃO é um client component por padrão.
// Ele pode ser usado tanto em Server quanto em Client Components.
// Neste caso, usamos <Image> dentro de um Client Component porque precisamos de hooks e interatividade.
import Image from "next/image";

import burgerImg from "@/assets/burger.jpg";
import curryImg from "@/assets/curry.jpg";
import dumplingsImg from "@/assets/dumplings.jpg";
import macncheeseImg from "@/assets/macncheese.jpg";
import pizzaImg from "@/assets/pizza.jpg";
import schnitzelImg from "@/assets/schnitzel.jpg";
import tomatoSaladImg from "@/assets/tomato-salad.jpg";
import classes from "./image-slideshow.module.css";

const images = [
  { image: burgerImg, alt: "A delicious, juicy burger" },
  { image: curryImg, alt: "A delicious, spicy curry" },
  { image: dumplingsImg, alt: "Steamed dumplings" },
  { image: macncheeseImg, alt: "Mac and cheese" },
  { image: pizzaImg, alt: "A delicious pizza" },
  { image: schnitzelImg, alt: "A delicious schnitzel" },
  { image: tomatoSaladImg, alt: "A delicious tomato salad" },
];

export default function ImageSlideshow() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Este useEffect cria um timer que troca a imagem a cada 5 segundos.
  // O setInterval atualiza o índice da imagem atual, avançando para a próxima ou voltando ao início.
  // O retorno da função faz a limpeza do timer quando o componente for desmontado, evitando vazamentos de memória.
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex < images.length - 1 ? prevIndex + 1 : 0
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={classes.slideshow}>
      {images.map((image, index) => (
        <Image
          key={index}
          src={image.image}
          className={index === currentImageIndex ? classes.active : ""}
          alt={image.alt}
        />
      ))}
    </div>
  );
}
