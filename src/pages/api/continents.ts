import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    const data = [
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
    ];

    return res.status(200).json({ continents: data });
  } else {
    res.setHeader("Allow", "Post");
    res.status(405).end("Method not allowed");
  }

  return res;
};
