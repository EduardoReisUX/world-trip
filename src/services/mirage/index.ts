import { createServer, Model } from "miragejs";

type Continents = {
  name: string;
  description: string;
  image: string;
};

export function makeServer() {
  const server = createServer({
    models: {
      continents: Model.extend<Partial<Continents>>({}),
    },

    routes() {
      this.namespace = "api";
      this.timing = 750;

      // The Slides components fetch this
      /* 
      this.get("/continents", () => ({
        continents: [
          {
            image: "europe.png",
            title: "Europa",
            text: "O continente mais antigo",
          },
          {
            image: "europe.png",
            title: "América",
            text: 'Considerada como "Novo Mundo"',
          },
          {
            image: "europe.png",
            title: "Ásia",
            text: "O maior dos continentes, tanto em área como em população",
          },
          {
            image: "europe.png",
            title: "África",
            text: "O terceiro continente mais extenso",
          },
          {
            image: "europe.png",
            title: "Oceania",
            text: 'Conhecida como "Novíssimo Mundo"',
          },
        ],
      }));
      */

      // The [continent] page fetch this and SlideItem
      // recieves it as props
      /* 
      this.get("/continents/Europa", () => ({
        cities: [
          {
            city: "Londres",
            country: "Reino Unido",
            cityImage: "londres",
            flag: "reino-unido",
          },
          {
            city: "Paris",
            country: "França",
            cityImage: "paris",
            flag: "franca",
          },
          {
            city: "Roma",
            country: "Itália",
            cityImage: "roma",
            flag: "italia",
          },
          {
            city: "Praga",
            country: "República Tcheca",
            cityImage: "praga",
            flag: "republica-tcheca",
          },
          {
            city: "Amsterdã",
            country: "Holanda",
            cityImage: "amsterda",
            flag: "holanda",
          },
        ],
      }));
      */

      this.namespace = "";
      this.passthrough();
    },
  });

  return server;
}
